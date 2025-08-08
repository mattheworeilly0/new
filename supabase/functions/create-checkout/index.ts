import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const PRICE_MAP_MONTHLY: Record<string, number> = {
  Basic: 999,
  Standard: 1999,
  Premium: 2999,
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  // Must be authenticated for subscriptions
  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) return new Response(JSON.stringify({ error: "Not authenticated" }), { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 401 });

    const token = authHeader.replace("Bearer ", "");
    const { data } = await supabaseClient.auth.getUser(token);
    const user = data.user;
    if (!user?.email) return new Response(JSON.stringify({ error: "No email for user" }), { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 });

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", { apiVersion: "2023-10-16" });

    const origin = req.headers.get("origin") || "";
    const body = await req.json().catch(() => ({}));
    const plan = body.plan as string;
    const unit_amount = PRICE_MAP_MONTHLY[plan] || 999;

    // Find or create customer by email
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    const customerId = customers.data[0]?.id;

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : user.email,
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: { name: `${plan} Plan (Monthly)` },
            unit_amount,
            recurring: { interval: "month" },
          },
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${origin}/payment-success`,
      cancel_url: `${origin}/payment-canceled`,
    });

    return new Response(JSON.stringify({ url: session.url }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 });
  }
});

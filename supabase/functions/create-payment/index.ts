import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const PRICE_MAP_ANNUAL: Record<string, number> = {
  Basic: 9900,
  Standard: 19900,
  Premium: 29900,
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  // Use anon for user auth (optional for guests)
  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  try {
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", { apiVersion: "2023-10-16" });

    const origin = req.headers.get("origin") || "";
    const body = await req.json().catch(() => ({}));
    const plan = body.plan as string;
    const emailFromBody = body.email as string | undefined;

    const unit_amount = PRICE_MAP_ANNUAL[plan] || 9900;

    let customerEmail: string | undefined = emailFromBody;

    // If authenticated, prefer user email
    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      const { data } = await supabaseClient.auth.getUser(token);
      if (data.user?.email) customerEmail = data.user.email;
    }

    const session = await stripe.checkout.sessions.create({
      customer_email: customerEmail,
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: { name: `${plan} Plan (Annual)` },
            unit_amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/payment-success`,
      cancel_url: `${origin}/payment-canceled`,
    });

    return new Response(JSON.stringify({ url: session.url }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 });
  }
});

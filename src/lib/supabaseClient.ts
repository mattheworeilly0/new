import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabase: SupabaseClient | null = null;

try {
  const url = (window as any).__SUPABASE_URL__;
  const anonKey = (window as any).__SUPABASE_ANON_KEY__;
  if (url && anonKey) {
    supabase = createClient(url, anonKey);
  } else {
    console.warn("Supabase not configured. Please connect the project to Supabase.");
  }
} catch (e) {
  console.warn("Supabase initialization failed:", e);
}

export { supabase };

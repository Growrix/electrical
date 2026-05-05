import { createClient } from "@supabase/supabase-js";

import { env } from "@/lib/env";

export function createSupabaseClient() {
  return createClient(
    env.public.NEXT_PUBLIC_SUPABASE_URL,
    env.public.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

export function createSupabaseAdminClient() {
  return createClient(
    env.public.NEXT_PUBLIC_SUPABASE_URL,
    env.server.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );
}

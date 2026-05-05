const requiredServerVars = [
  "SANITY_PROJECT_ID",
  "SANITY_DATASET",
  "SANITY_API_VERSION",
  "RESEND_API_KEY",
  "CONTACT_FROM_EMAIL",
  "LARK_WEBHOOK_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
] as const;

const requiredPublicVars = [
  "NEXT_PUBLIC_SITE_URL",
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
] as const;

function getRequired(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  server: {
    SANITY_PROJECT_ID: getRequired(requiredServerVars[0]),
    SANITY_DATASET: getRequired(requiredServerVars[1]),
    SANITY_API_VERSION: getRequired(requiredServerVars[2]),
    RESEND_API_KEY: getRequired(requiredServerVars[3]),
    CONTACT_FROM_EMAIL: getRequired(requiredServerVars[4]),
    LARK_WEBHOOK_URL: getRequired(requiredServerVars[5]),
    SUPABASE_SERVICE_ROLE_KEY: getRequired(requiredServerVars[6]),
  },
  public: {
    NEXT_PUBLIC_SITE_URL: getRequired(requiredPublicVars[0]),
    NEXT_PUBLIC_SUPABASE_URL: getRequired(requiredPublicVars[1]),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: getRequired(requiredPublicVars[2]),
  },
} as const;

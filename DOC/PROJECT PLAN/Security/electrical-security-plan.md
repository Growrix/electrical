# Electrical Security Plan

## Threat Model Highlights
- Spam and abuse on public lead endpoints.
- PII leakage through logs or misconfigured policies.
- Secret exposure for Resend/Lark/Supabase credentials.

## Controls
- Server-side validation and request throttling.
- RLS on all operational data tables.
- Secrets only in server runtime and deployment vault.
- Audit log for admin actions and lead transitions.

## Compliance And Data Handling
- Store only minimum customer data required for service follow-up.
- Define retention periods for lead and chat transcript data.
- Provide process for deletion requests and operational overrides.

## Security Test Gates
- Policy tests for unauthorized data access.
- Automated dependency and secret scanning in CI.
- Manual abuse-path verification before release.

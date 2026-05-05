# Electrical Shared Contracts Plan

## Scope Contract
- Public site purpose: generate qualified electrical service leads, communicate trust, and provide fast contact paths.
- Primary conversion actions: request quote, call now, WhatsApp chat, AI assistant pre-qualification.
- Required surfaces: home, services, service details, testimonials, about, contact, blog, case studies, informational catalog.

## Global UX/Domain Invariants
- Mobile app-like bottom navigation with icons is mandatory on mobile breakpoints.
- Floating WhatsApp and call CTAs are mandatory on lead-focused pages.
- AI assistant must show disclosure and human escalation route.
- Footer text invariant:
  - `© {year} {Company Name or Site Name}. All right reserved. Built & Maintenece by Growrix OS.`

## Shared Route Contracts
- `/` home with primary lead CTA modules.
- `/services` service index and category filters.
- `/services/[slug]` service details with local trust signals and quote CTA.
- `/testimonials` trust proof index.
- `/case-studies` + `/case-studies/[slug]` project outcomes.
- `/blog` + `/blog/[slug]` SEO educational content.
- `/contact` with direct form, call, WhatsApp, and bot handoff.
- `/catalog` informational equipment/material entries.

## Lead Lifecycle Contract
1. Visitor submits inquiry from form, WhatsApp intent, or bot handoff.
2. API validates payload and persists lead request.
3. System emits lead event and triggers Resend + Lark notifications.
4. Admin operators triage status from new -> contacted -> qualified -> booked or closed.
5. Audit event stream records changes for QA/compliance visibility.

## Integration Ownership Contract
- Sanity: content and editorial ownership.
- Supabase: operational data, auth, policies, and storage.
- Resend: transactional and alert email.
- Lark: internal lead and escalation notifications.

## Exclusions For MVP
- Payments and checkout.
- Realtime with Pusher.
- External S3 storage.

## Acceptance Gate
- Frontend/backend/API/security docs must not diverge from these route and lifecycle contracts.

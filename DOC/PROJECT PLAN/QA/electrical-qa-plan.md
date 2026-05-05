# Electrical QA Plan

## Test Layers
- Static: lint/type/schema checks.
- Unit: form validation, UI primitives, utility functions.
- Integration: lead intake, notification fan-out, bot escalation.
- E2E: quote request journey, call/WhatsApp CTA visibility, mobile bottom nav flows.

## Required Release Gates
- Zero P0 and P1 defects.
- Accessibility checks for all conversion surfaces.
- Performance budget checks on home/services/contact pages.
- Security checks for abuse and unauthorized data access.

## Device And Browser Matrix
- Mobile first: iOS Safari and Android Chrome.
- Desktop: Chrome, Firefox, Safari.

## Regression Focus
- Submission success states and user feedback messaging.
- Notification delivery reliability.
- SEO metadata integrity on CMS-driven pages.

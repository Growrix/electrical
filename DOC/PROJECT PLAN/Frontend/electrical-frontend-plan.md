# Electrical Frontend Plan

## Metadata
- Role: Frontend UI/UX Generator
- Status: active-expanded
- Last updated: 2026-05-05
- Canonical route pack: `DOC/PROJECT PLAN/Frontend/Pages/`

## 1. Frontend Mission
- Build a full lead-generation website with complete page coverage, not summary pages.
- Guarantee app-like mobile behavior via bottom icon navigation, floating contact actions, and fast lead capture.
- Keep all server-backed behavior aligned to shared contracts and API/data docs.

## 2. Site Map Contract (Complete Page Set)
- Public routes:
	- `/` Home
	- `/services` Services index
	- `/services/[slug]` Service detail
	- `/testimonials` Testimonials
	- `/case-studies` Case studies index
	- `/case-studies/[slug]` Case study detail
	- `/blog` Blog index
	- `/blog/[slug]` Blog detail
	- `/catalog` Informational shop/catalog
	- `/about` About and team trust profile
	- `/faq` FAQ
	- `/contact` Contact and quote request
	- `/privacy-policy` Privacy policy
	- `/terms-of-service` Terms
	- `/404` Utility not found
- System surfaces:
	- Global header and sticky utility bar
	- Mobile bottom navigation
	- Floating WhatsApp/call actions
	- AI assistant launcher and conversation drawer
	- Footer with invariant copyright string

## 3. Design System And Visual Rules

### 3.1 Token Governance
- No hardcoded style values in implementation; all style values must come from token layer.
- Required token domains:
	- Color: `primary`, `secondary`, `accent`, `background`, `surface`, `border`, `muted`, `success`, `warning`, `error`, `info`.
	- Spacing: `4, 8, 12, 16, 24, 32, 48, 64, 96`.
	- Radius: `xs, sm, md, lg, xl, pill`.
	- Shadow: `sm, md, lg, overlay`.
	- Breakpoints: `mobile`, `tablet`, `desktop`, `wide`.
	- Motion: `fast`, `base`, `slow`, `reduced`.

### 3.2 Typography Rules
- Use explicit semantic scale: Display, H1-H6, Lead, Body, Small, Label, Caption.
- Page scanning hierarchy:
	- 1 Display or H1 above fold.
	- Section H2 for major blocks.
	- Card titles H3/H4 only.

### 3.3 Layout Rules
- Desktop content max width and section rhythm must be token-driven.
- Conversion surfaces follow: value proof -> friction-light CTA -> trust proof -> fallback contact actions.
- Mobile prioritizes thumb-reach actions and persistent contact affordances.

### 3.4 Motion Rules
- Page-entry fade/slide for hero and major sections.
- Staggered reveal for service cards/testimonials.
- `prefers-reduced-motion` must disable non-essential animation.

## 4. Global Navigation And Shell
- Header:
	- Left: brand mark and trust label.
	- Middle: services, case studies, blog, about.
	- Right: quote CTA and call-now CTA.
- Mobile bottom nav tabs:
	- Home, Services, Contact, WhatsApp, Assistant.
- Floating actions:
	- Call and WhatsApp always visible on mobile and sticky on desktop after first viewport.
- Footer:
	- Quick links, service areas, certifications, legal links.
	- Invariant footer text must match shared contract.

## 5. E2E Page Content Coverage Standard
- Every page spec must include:
	- Page goal and target user intent.
	- Full section order.
	- Exact content block plan (headline, proof, CTA, support info).
	- Loading, empty, success, error states where data is dynamic.
	- SEO metadata requirements and structured data usage.
	- Mobile adaptation rules.
- The detailed page specs are materialized under:
	- `DOC/PROJECT PLAN/Frontend/Pages/`

## 6. Component Architecture

### 6.1 Core Atoms
- `Button`, `IconButton`, `Input`, `Textarea`, `Select`, `Badge`, `Chip`, `StatusPill`, `Spinner`, `Toast`.

### 6.2 Shared Molecules
- `SectionHeader`, `ServiceCard`, `TestimonialCard`, `CaseStudyCard`, `ArticleCard`, `FaqAccordion`, `LeadCaptureForm`, `ContactActionPill`, `TrustMetric`.

### 6.3 Organisms
- `HeroLeadSection`, `ServicesGridSection`, `EmergencyStrip`, `TestimonialsCarousel`, `FaqSection`, `BotAssistantPanel`, `FooterTrustCluster`.

### 6.4 Page Templates
- `MarketingPageTemplate`, `DetailContentTemplate`, `LegalTextTemplate`, `ErrorStateTemplate`.

## 7. Form, Conversion, And Chat Contracts
- Lead form UX:
	- Required fields visible.
	- Inline validation + submit-time validation.
	- Preserve typed input on recoverable failures.
- Submission feedback:
	- Pending, success confirmation, recoverable error with retry, fallback call/WhatsApp.
- AI assistant behavior:
	- Starts with intent chips.
	- Discloses automation and privacy notice.
	- Escalates to human by creating lead handoff through API.

## 8. State Matrix (Mandatory)
- Default state: all pages and sections.
- Loading state: skeletons for CMS-fed cards/lists.
- Empty state: no testimonials, no blog posts, no case studies.
- Error state: network/CMS/API failure with retry.
- Offline/reconnect state: bot and form submit surfaces.
- Permission state: admin-only UI excluded from public routes.

## 9. Accessibility, i18n, Security, And Performance
- Accessibility:
	- WCAG 2.2 AA, full keyboard support, explicit focus order, skip links, ARIA labels for floating actions/bot launcher.
- i18n/localization:
	- Externalized copy keys, locale formatting, RTL-ready layout tokens.
- Security in UI:
	- Input sanitation hints, no sensitive data rendering, anti-phishing clarity for WhatsApp/call actions.
- Performance:
	- Lazy load below-the-fold sections.
	- Use optimized image components.
	- 90+ Lighthouse target on home/services/contact.

## 10. Testing And Handoff
- Storybook coverage for reusable components.
- Playwright E2E for all conversion paths.
- Visual regression for global shell and key sections.
- Page-by-page planning docs are implementation source of truth for frontend build sequencing.

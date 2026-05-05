# Electrical Service Website E2E Plan

## 0. Artifact Metadata
- Canonical artifact path: `DOC/PROJECT PLAN/electrical-service-website-e2e-plan.md`
- Affected downstream role docs:
  - `DOC/PROJECT PLAN/Shared Contracts/electrical-shared-contracts-plan.md`
  - `DOC/PROJECT PLAN/Frontend/electrical-frontend-plan.md`
  - `DOC/PROJECT PLAN/Frontend/Pages/ai-context.yaml`
  - `DOC/PROJECT PLAN/Frontend/Pages/README.md`
  - `DOC/PROJECT PLAN/Backend/electrical-backend-plan.md`
  - `DOC/PROJECT PLAN/API and Data/electrical-api-data-plan.md`
  - `DOC/PROJECT PLAN/Supabase/electrical-supabase-plan.md`
  - `DOC/PROJECT PLAN/Admin Dashboard/electrical-admin-ops-plan.md`
  - `DOC/PROJECT PLAN/Security/electrical-security-plan.md`
  - `DOC/PROJECT PLAN/DevOps/electrical-devops-plan.md`
  - `DOC/PROJECT PLAN/QA/electrical-qa-plan.md`
- Planning request source: `DOC/MASTER PLAN/Plan.md`
- Planning mode: fresh
- Status: active
- Last updated: 2026-05-05 (frontend coverage expansion)

## 1. Planning Mode And Objective
- Planning mode: fresh
- Why this mode fits the request: no existing `web/` or `studio/` implementation exists; only universal documentation and CI placeholders exist.
- Scope boundaries: lead-generation marketing site + CMS-managed content + inquiry and notification flow + mobile app-like navigation behavior + AI assistant entrypoint.
- Explicit non-goals: custom ecommerce checkout, multi-tenant admin SaaS, complex field-service dispatching.
- Current implementation compatibility requirements:
  - Preserve existing CI assumptions in `.github/workflows/ci.yml` for `web/` and `.github/workflows/studio.yml` for `studio/`.
  - Keep contract-first sequencing and project-doc routing model from `DOC/Universal/Execution Constitution.md`.

## 2. Current-State Audit

### Tracker Status
- Done: universal role system, universal constitution, universal templates.
- Partial: CI workflow placeholders for `web/` and `studio/`.
- Blocked: project-specific contracts and implementation routing missing.
- Not started: all project-specific scope artifacts under `DOC/PROJECT PLAN/`.

### Existing Codebase Inventory
- Reusable routes: none.
- Reusable layouts and shells: none.
- Reusable sections and components: none.
- Reusable data/store modules: none.
- Existing API handlers and contracts: none.
- Existing CMS or Studio schemas: none.
- Existing admin/operator flows: none.
- Existing integrations already wired: none (only CI placeholders).

### Reuse-First Delta Map
- Reuse without changes:
  - Universal role process, constitutions, templates.
  - Existing CI workflow intent and Node 20 baseline.
- Extend carefully:
  - Existing workflow files should be aligned to actual created `web/` and `studio/` projects during implementation.
- Refactor in place:
  - N/A in planning phase.
- Net-new additions that are truly required:
  - Project-level root routing docs.
  - Shared contracts, frontend/API/data/admin/security plans.
  - Execution tasks tracker aligned to this scope.
- Items rejected to avoid architecture drift:
  - Greenfield replacement recommendations (none to replace).
  - Unrequested commerce checkout and payments stack.

## 3. Platform Decision Matrix

| Capability | Current State | Decision | Required Now / Later / Excluded | Notes |
|---|---|---|---|---|
| Next.js | Not present | Use for `web/` app | Required now | Marketing + SEO + ISR-friendly architecture |
| React | Not present | Use via Next.js | Required now | Component architecture for reusable sections |
| TypeScript | Not present | Strict TypeScript for `web/` and `studio/` tooling | Required now | Contract clarity and safer integrations |
| Sanity CMS | Not present | Primary content source | Required now | Services, testimonials, FAQ, blog/case studies |
| Supabase | Not present | Operational DB/auth/storage policies for leads and bot logs | Required now | Lead persistence and admin operations |
| PostgreSQL | Not present | Use through Supabase Postgres | Required now | System-of-record for submissions and ops data |
| Prisma | Not present | Defer; start with Supabase client and SQL migrations | Deferred | Add only if domain complexity justifies ORM layer |
| Lark | Not present | Lead and escalation notification sink | Required now | New lead push and failure alerts |
| Resend | Not present | Outbound email confirmations and internal alerts | Required now | Quote request confirmation + follow-up |
| Pusher | Not present | Exclude in MVP | Excluded | Realtime not required for initial lead pipeline |
| S3 | Not present | Exclude in MVP | Excluded | Sanity asset CDN + Supabase storage cover current need |

## 4. CMS And Content Operations Plan

### Content Surfaces
- Blog: CMS-managed educational articles for SEO (safety tips, wiring guides, emergency advice).
- Services: CMS-managed service catalog (residential wiring, panel upgrades, emergency repair, generator installation, maintenance).
- Shop/catalog: CMS-managed "equipment and materials catalog" informational only (no checkout in MVP).
- Case studies/portfolio: CMS-managed project showcases with before/after, location, scope, and customer outcomes.
- FAQ, landing pages, and static trust content: CMS-managed with versioned publish flow.

### Sanity Structure
- Document types:
  - `siteSettings`, `homepage`, `service`, `serviceCategory`, `testimonial`, `faqItem`, `blogPost`, `caseStudy`, `teamMember`, `leadFormConfig`, `seoDefaults`.
- Field groups and validation:
  - SEO group, content body group, CTA group, media group, compliance metadata group.
  - Slug uniqueness per type; mandatory CTA on conversion pages.
- Taxonomies and references:
  - `service` references `serviceCategory`.
  - `blogPost` references related `service` entries.
  - `caseStudy` references services and testimonial.
- Media model:
  - Sanity image assets with alt text required and hotspot enabled.
- Slug and preview rules:
  - Preview URL secured by token + draft mode in Next.js.
- Draft, review, publish flow:
  - Author -> Editor -> Publish; emergency service updates can use fast-track role.
- Revalidation or cache invalidation model:
  - On publish webhook -> Next.js route handler -> tag-based revalidation.
- Studio runtime and deployment isolation plan:
  - Dedicated `studio/` app with own lockfile and CI workflow (`.github/workflows/studio.yml`).

### Editorial And Operator Workflow
- Who creates blog posts and where:
  - Content editor in Sanity Studio.
- How services are created or updated:
  - Operations/content owner updates `service` docs with pricing notes and response windows.
- How shop content is managed:
  - Admin edits catalog-like entries in Sanity; no transaction handling.
- How portfolio and proof content is managed:
  - Team lead uploads project outcomes + testimonial references in Sanity.
- What belongs in Sanity Studio vs admin dashboard vs code:
  - Sanity: marketing/editorial content.
  - Admin Dashboard: inbound leads, response status, chatbot handoff and audit notes.
  - Code: business rules, transport integration, permissions, fallback behavior.

## 5. Data, Database, And Storage Plan
- Source of truth per domain:
  - Marketing content: Sanity.
  - Leads and operational workflow: Supabase Postgres.
  - Auth/session for admin operators: Supabase Auth.
- Supabase responsibilities:
  - Lead tables, optional chatbot session logs, admin auth, RLS policies, object storage for private exports.
- PostgreSQL schema impact:
  - `lead_requests`, `lead_events`, `contact_channels`, `chat_sessions`, `chat_messages`, `operator_notes`.
- Prisma decision and justification:
  - Deferred for MVP to reduce setup complexity; SQL migrations with typed query wrappers first.
- Row-level security or access policy considerations:
  - Public insert-only API path for lead submission.
  - Admin read/write via authenticated role with strict RLS.
- File or asset storage plan:
  - Public marketing assets in Sanity CDN.
  - Operational attachments in Supabase Storage private bucket.
- Data migration or backfill needs:
  - None at project start.

## 6. Integration Plan

| Integration | Purpose | Trigger Points | Owner Surface | Fallback / Failure Mode | Notes |
|---|---|---|---|---|---|
| Lark | Internal ops notification | New lead, missed SLA, escalation | Backend/API | Queue retry; log + email fallback | Webhook + bot token managed server-side |
| Resend | Customer and team email | Lead submission, quote acknowledgment | Backend/API | Retry with dead-letter record | Templated transactional emails |
| Pusher | Realtime updates | N/A | N/A | N/A | Excluded for MVP |
| S3 | Binary storage | N/A | N/A | N/A | Excluded for MVP |
| Payments | Checkout | N/A | N/A | N/A | Excluded for MVP informational catalog only |
| Calendar | Booking sync | Optional later | Admin Dashboard + Backend | Manual callback process | Deferred until phase 2 |

## 7. Global Site Invariants
- Reuse existing design system, layouts, primitives, and interaction patterns before adding new UI.
- Prefer extending current routes, schemas, and data modules over introducing parallel systems.
- Mobile IA must include an app-like fixed bottom navigation bar with icon-first affordances.
- Floating WhatsApp and call actions must remain visible but non-obstructive across key pages.
- AI chat assistant entrypoint must expose clear disclosure text and escalation to human contact.
- SEO baseline on every indexable route: title, description, canonical, OG image, structured business info.
- The common footer copyright string must be planned as:
  `© {year} {Company Name or Site Name}. All right reserved. Built & Maintenece by Growrix OS.`
- Link `Growrix OS` to `https://www.growrixos.com`.

## 8. E2E Phase Plan

### Shared Contracts
- Inputs: `DOC/MASTER PLAN/Plan.md`, universal role docs, this artifact.
- Deliverables: scope contract, route map, domain model, integration boundaries, non-goals.
- Reuse targets: universal architecture and contract-first conventions.
- Entry criteria: root project docs created.
- Exit criteria: contract docs accepted by frontend/backend/API/security owners.
- Risks and fallback: requirement ambiguity -> freeze assumptions in contract appendix.

### CMS And Content Operations
- Inputs: shared contracts.
- Deliverables: Sanity schema map, editorial states, preview/revalidation workflow.
- Reuse targets: existing `studio.yml` CI assumptions.
- Entry criteria: content surface inventory approved.
- Exit criteria: all required content types and ownership rules documented.
- Risks and fallback: editorial bottleneck -> role-based publish fallback and templates.

### Frontend
- Inputs: shared contracts + CMS model.
- Deliverables: page hierarchy, app-like mobile navigation model, CTA behavior, AI widget slot.
- Reuse targets: Next.js + TypeScript baseline from matrix.
- Entry criteria: content and API contracts stable.
- Exit criteria: UX states for loading/empty/error/success documented for all lead paths.
- Risks and fallback: conversion friction -> prioritize sticky CTA and reduced form steps.

### Backend
- Inputs: shared contracts, integration plan.
- Deliverables: lead orchestration services, notification pipeline, failure logging policy.
- Reuse targets: Supabase native services.
- Entry criteria: DB schema and integration ownership approved.
- Exit criteria: deterministic lead lifecycle states defined.
- Risks and fallback: third-party downtime -> retry + operator dashboard queues.

### API And Data
- Inputs: frontend payload contracts + backend workflow.
- Deliverables: endpoint contracts, DB schema, validation/error models.
- Reuse targets: Supabase Postgres and server route handlers.
- Entry criteria: lead lifecycle and permissions fixed.
- Exit criteria: API spec includes auth boundaries and idempotency notes.
- Risks and fallback: spam submissions -> anti-abuse + rate limit + server validation.

### Security
- Inputs: API/data and backend contracts.
- Deliverables: threat model, RLS policies, secret ownership map, PII handling policy.
- Entry criteria: schema and endpoints drafted.
- Exit criteria: security checklist mapped to QA release gates.
- Risks and fallback: policy misconfiguration -> staged env verification and break-glass admin.

### DevOps
- Inputs: all technical contracts.
- Deliverables: environment matrix, CI gates, deployment sequencing for `web/` and `studio/`.
- Entry criteria: runtime topology finalized.
- Exit criteria: rollback and smoke-check steps documented.
- Risks and fallback: pipeline drift -> lock workflow ownership in docs.

### CMS Studio Runtime Isolation Checklist
- Studio directory and package manifest audited: required in implementation kickoff.
- Studio lockfile strategy defined: separate `studio/package-lock.json`.
- Node version policy defined for Studio: Node 20.
- Root install/deploy coupling explicitly accepted or rejected: rejected by default.
- Separate CI workflow defined: yes (`.github/workflows/studio.yml`).
- Separate hosting project and CMS domain defined: required before production.

### QA
- Inputs: all phase outputs.
- Deliverables: test matrix, browser/device matrix, accessibility/performance/security gates.
- Entry criteria: testable contract and acceptance criteria complete.
- Exit criteria: no P0/P1 defects; release gate evidence captured.
- Risks and fallback: flaky e2e tests -> quarantine policy and deterministic fixture data.

## 9. Execution Backlog
1. Finalize shared contracts and route/content inventory. Owner: fullstack contract lead. Dependency: none. Targets: `DOC/PROJECT PLAN/Shared Contracts/*`.
2. Define Sanity schema and editorial governance package. Owner: CMS/content lead. Dependency: task 1. Targets: `DOC/PROJECT PLAN/Shared Contracts/electrical-shared-contracts-plan.md`, `DOC/PROJECT PLAN/Admin Dashboard/electrical-admin-ops-plan.md`.
3. Define frontend IA and conversion UX (mobile bottom nav, floating WhatsApp/call, bot entrypoint). Owner: frontend lead. Dependency: tasks 1-2. Targets: `DOC/PROJECT PLAN/Frontend/electrical-frontend-plan.md`.
4. Define backend lead orchestration and notification responsibilities. Owner: backend lead. Dependency: tasks 1-2. Targets: `DOC/PROJECT PLAN/Backend/electrical-backend-plan.md`.
5. Define API contracts + schema + policy model. Owner: API/data lead. Dependency: tasks 3-4. Targets: `DOC/PROJECT PLAN/API and Data/electrical-api-data-plan.md`, `DOC/PROJECT PLAN/Supabase/electrical-supabase-plan.md`.
6. Define admin dashboard ops workflow. Owner: admin product/ops lead. Dependency: task 5. Targets: `DOC/PROJECT PLAN/Admin Dashboard/electrical-admin-ops-plan.md`.
7. Define security controls and compliance evidence map. Owner: security lead. Dependency: tasks 4-6. Targets: `DOC/PROJECT PLAN/Security/electrical-security-plan.md`.
8. Define CI/CD and runtime release plan. Owner: devops lead. Dependency: tasks 3-7. Targets: `DOC/PROJECT PLAN/DevOps/electrical-devops-plan.md`.
9. Define QA release gates and signoff evidence. Owner: QA lead. Dependency: tasks 3-8. Targets: `DOC/PROJECT PLAN/QA/electrical-qa-plan.md`.

## 10. Release-Gate And Validation Matrix

| Gate | Scope | Blocking? | Owner | Evidence Required |
|---|---|---|---|---|
| Static validation | Lint, type-check, schema checks | Yes | Frontend + API/Data | CI logs |
| Unit tests | Components, validators, utilities | Yes | Frontend/Backend | Coverage + passing report |
| Integration tests | Lead flow, notification flow, CMS publish to render | Yes | Backend + API/Data | Green suite |
| E2E tests | Primary conversion journeys desktop/mobile | Yes | QA | Playwright artifacts |
| Accessibility | WCAG 2.2 AA on critical funnels | Yes | Frontend + QA | Axe/Lighthouse evidence |
| Performance | Core Web Vitals on key pages | Yes | Frontend + DevOps | Lighthouse budgets |
| Security | RLS, secret handling, abuse controls | Yes | Security + Backend | Security checklist signoff |
| Regression | Existing contract behavior after changes | Yes | QA | Regression suite report |

## 11. Risks, Assumptions, And Open Decisions
- Risks:
  - AI chat assistant scope creep into full conversational support.
  - Lead spam without anti-abuse protections.
  - Publishing delays if editorial ownership is unclear.
- Assumptions:
  - MVP bot provides guided Q/A + human handoff, not autonomous job booking.
  - Shop surface is informational catalog only in MVP.
  - CI workflow references (`web/`, `studio/`) are intended and should remain.
- Open decisions:
  - Final bot provider model and retention period for chat transcripts.
  - Whether Prisma is introduced in phase 2.
  - Calendar integration timeline.

## 12. Tracker And Documentation Updates
- Files updated: see `DOC/PROJECT PLAN/Tasks/tasks.md` and root routing docs.
- Downstream role docs updated: Shared Contracts, Frontend, Backend, API and Data, Supabase, Admin Dashboard, Security, DevOps, QA.
- Task tracker deltas: planning phase created and moved to active with dependencies.
- New planning artifacts created: this canonical artifact plus nine role-specific plan docs.
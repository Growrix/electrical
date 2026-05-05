# PowerPro Electrical — Frontend

## Project Overview

A complete frontend-only website for **PowerPro Electrical**, an electrical service company. Built with Next.js 16 App Router, TypeScript, and Tailwind CSS v4. All data is served from static mock data (no backend, no CMS).

## Tech Stack

- **Framework**: Next.js 16.2.4 (App Router) with Turbopack dev server
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"` + `@theme` tokens in `globals.css`)
- **Fonts**: Geist Sans + Geist Mono (Next.js Google Fonts)
- **Port**: 5000 (webview)

## Project Structure

```
web/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout (client component — manages AI assistant state)
│   │   ├── globals.css         # Tailwind v4 @theme design tokens
│   │   ├── page.tsx            # Home page
│   │   ├── services/           # Services listing + [slug] detail pages
│   │   ├── case-studies/       # Case studies listing + [slug] detail pages
│   │   ├── blog/               # Blog listing + [slug] article pages
│   │   ├── testimonials/       # Customer reviews page
│   │   ├── catalog/            # Equipment catalog (informational)
│   │   ├── about/              # About us page
│   │   ├── faq/                # FAQ page with accordion
│   │   ├── contact/            # Contact page with lead capture form
│   │   ├── privacy-policy/     # Privacy policy
│   │   ├── terms-of-service/   # Terms of service
│   │   └── not-found.tsx       # 404 page
│   ├── components/
│   │   ├── shell/              # Layout shell components
│   │   │   ├── announcement-strip.tsx
│   │   │   ├── header.tsx      # Desktop nav + mobile hamburger
│   │   │   ├── footer.tsx      # Full footer with links, certs, copyright
│   │   │   ├── mobile-bottom-nav.tsx   # 5-tab mobile nav
│   │   │   ├── floating-actions.tsx    # WhatsApp + Call FABs
│   │   │   └── ai-assistant.tsx        # Chat drawer with intent chips
│   │   ├── sections/           # Page section components
│   │   │   ├── hero-section.tsx
│   │   │   ├── emergency-strip.tsx
│   │   │   ├── trust-metrics.tsx
│   │   │   ├── process-timeline.tsx
│   │   │   ├── faq-preview.tsx
│   │   │   ├── cta-strip.tsx
│   │   │   └── lead-capture-form.tsx   # Full form with state machine (idle/submitting/success/error)
│   │   ├── cards/              # Reusable card components
│   │   │   ├── service-card.tsx
│   │   │   ├── testimonial-card.tsx
│   │   │   ├── case-study-card.tsx
│   │   │   └── article-card.tsx
│   │   └── ui/                 # Primitive UI components
│   │       ├── button.tsx      # Primary/secondary/accent/outline/ghost variants
│   │       ├── badge.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       ├── select.tsx
│   │       ├── accordion.tsx
│   │       ├── skeleton.tsx
│   │       └── spinner.tsx
│   ├── config/
│   │   └── site.ts             # Centralized site config (phone, nav, WhatsApp, certs, etc.)
│   ├── lib/
│   │   ├── utils.ts            # cn() helper (clsx + tailwind-merge)
│   │   ├── mock-data.ts        # All content (services, testimonials, case studies, blog, etc.)
│   │   └── env.ts              # Server env validation — NEVER import in client components
│   └── types/
│       ├── content.ts          # TypeScript types for all content
│       └── lead.ts             # Lead/form types
```

## Design System

All design tokens are defined in `web/src/app/globals.css` using Tailwind v4 `@theme`:

- **Primary**: `#1e3a5f` (navy blue)
- **Secondary**: `#f59e0b` (amber)
- **Accent**: `#ea580c` (orange)
- **Success**: green, **Error**: red, **Info**: blue
- **Surface**: white, **Background**: `#f8fafc`
- **Border radius**: rounded-xl (12px), rounded-pill (9999px)
- **Shadows**: shadow-sm, shadow-md, shadow-lg, shadow-overlay

## Key Architecture Decisions

1. **Root layout is `"use client"`** — required to manage `assistantOpen` state for the AI assistant drawer that lives alongside the page content
2. **All data is mock data** — imported from `web/src/lib/mock-data.ts`. No backend or CMS integration
3. **`env.ts` must never be imported in client components** — it throws if env vars are missing (server-only)
4. **Footer copyright**: `© {year} PowerPro Electrical. All right reserved. Built & Maintenece by Growrix OS.` linking to `https://www.growrixos.com`
5. **Mobile bottom nav** has 5 tabs: Home, Services, Contact, WhatsApp, Assistant
6. **Floating actions** (WhatsApp + Call) use `bottom-20` on mobile to avoid overlapping the bottom nav

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, services, testimonials, case studies, process, FAQ preview, lead form |
| `/services` | Filterable services grid with category tabs |
| `/services/[slug]` | Service detail with pricing, process, related testimonials/case studies, sidebar form |
| `/case-studies` | Filterable project portfolio with featured highlight |
| `/case-studies/[slug]` | Case study detail with timeline, materials, outcome |
| `/blog` | Searchable/filterable blog with featured article |
| `/blog/[slug]` | Article detail with TOC, safety callout, related articles |
| `/testimonials` | Filterable reviews with aggregate rating display |
| `/catalog` | Equipment catalog (informational only — no e-commerce) |
| `/about` | Company history timeline, team, certifications, service areas |
| `/faq` | Searchable/filterable accordion FAQ |
| `/contact` | Multi-channel contact with lead capture form, hours, service areas |
| `/privacy-policy` | Privacy policy with data table |
| `/terms-of-service` | Terms and conditions |
| `/*` (not-found) | Custom 404 with suggested links and contact info |

## Running the App

```bash
cd web && npm run dev -- --port 5000
```

The workflow "Start application" is pre-configured for this command.

# Frontend Page Planning Pack

This folder contains full E2E page specifications for the electrical service website frontend.

## Why This Exists
- The frontend role requires complete page-level planning, not route summaries.
- Each page document contains goal, section order, content blocks, CTA placements, SEO, and state handling.

## Read Order
1. `global-shell-and-navigation.md`
2. `home-page.md`
3. `services-page.md`
4. `service-detail-page.md`
5. `testimonials-page.md`
6. `case-studies-page.md`
7. `case-study-detail-page.md`
8. `blog-page.md`
9. `blog-detail-page.md`
10. `catalog-page.md`
11. `about-page.md`
12. `faq-page.md`
13. `contact-page.md`
14. `privacy-policy-page.md`
15. `terms-of-service-page.md`
16. `not-found-page.md`

## Page Coverage Rule
- Every page must include:
  - Primary and secondary CTAs
  - All major and supporting sections
  - Dynamic state variants where relevant
  - Mobile and desktop behavior
  - SEO/structured-data requirements

## Build Workflow
1. Build global shell and navigation primitives.
2. Build conversion-critical pages (`home`, `services`, `service-detail`, `contact`).
3. Build trust and proof pages (`testimonials`, `case-studies`, `about`, `faq`).
4. Build SEO pages (`blog`, `blog-detail`, `catalog`).
5. Build legal and utility pages.
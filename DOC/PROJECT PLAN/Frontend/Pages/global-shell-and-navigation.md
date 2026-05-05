# Global Shell And Navigation

## Page Goal
Define cross-page structure and interactions that every public route must inherit.

## User Intent
Navigate quickly, trust the brand, and start contact in one tap.

## Primary CTA
- Request a quote

## Secondary CTA
- Call now

## Required Shell Sections
1. Announcement strip for emergency support and service hours.
2. Header with brand, navigation links, and quote/call CTAs.
3. Main content outlet.
4. Sticky mobile bottom nav (icon-first).
5. Floating call + WhatsApp actions.
6. AI assistant launcher with disclosure text.
7. Footer with trust blocks and legal links.

## Header Content Blocks
- Left: logo, trust line (licensed and insured).
- Center: links to services, case studies, blog, about, contact.
- Right: quote button, call-now pill, language toggle placeholder.

## Mobile Bottom Navigation Content
- Home icon + label.
- Services icon + label.
- Contact icon + label.
- WhatsApp icon + label.
- Assistant icon + label.

## Floating Action Behavior
- Call button opens tel link.
- WhatsApp button opens wa.me link with prefilled message.
- Buttons respect safe-area insets and never overlap bottom nav.

## AI Assistant Launcher Behavior
- Initial chips: emergency help, pricing, booking, service availability.
- Disclosure: automated assistant with option to talk to a human.
- Escalation button submits handoff payload to backend and routes user to contact confirmation state.

## States
- Default: all shell elements visible.
- Loading: nav skeleton for first route hydration only.
- Error: fallback header/footer still visible if page data fails.

## SEO/Utility
- Global canonical host enforcement.
- Structured data base node from site settings.

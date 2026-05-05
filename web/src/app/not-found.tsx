import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Page Not Found | ${siteConfig.name}`,
  robots: { index: false },
};

const suggestedLinks = [
  { label: "🏠 Home", href: "/", desc: "Back to the main page" },
  { label: "⚡ Services", href: "/services", desc: "Browse all our electrical services" },
  { label: "📞 Contact", href: "/contact", desc: "Get in touch or request a quote" },
  { label: "📰 Blog", href: "/blog", desc: "Electrical tips and guides" },
  { label: "🏆 Case Studies", href: "/case-studies", desc: "See our completed projects" },
  { label: "❓ FAQ", href: "/faq", desc: "Common questions answered" },
];

export default function NotFoundPage() {
  return (
    <section aria-labelledby="not-found-heading" className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <div className="max-w-lg mx-auto">
        {/* Visual */}
        <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary mx-auto mb-6" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
          </svg>
        </div>

        <p className="text-secondary font-black text-6xl mb-2">404</p>
        <h1 id="not-found-heading" className="text-2xl font-black text-foreground mb-3">
          Page Not Found
        </h1>
        <p className="text-muted text-base leading-relaxed mb-8">
          We couldn&apos;t find the page you&apos;re looking for. It may have been moved, renamed, or the URL might have a typo.
        </p>

        {/* Quick links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-left">
          {suggestedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex flex-col gap-1 p-3 rounded-xl border border-border bg-surface hover:border-primary hover:shadow-sm transition-all"
            >
              <span className="text-sm font-semibold text-foreground">{link.label}</span>
              <span className="text-xs text-muted">{link.desc}</span>
            </Link>
          ))}
        </div>

        {/* Quick contact */}
        <div className="rounded-xl border border-border bg-surface p-5 mb-6">
          <p className="text-sm font-semibold text-foreground mb-3">Need immediate electrical help?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={siteConfig.phoneHref}>
              <Button size="sm" variant="primary">📞 {siteConfig.phone}</Button>
            </Link>
            <Link href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" className="border-success text-success hover:bg-success hover:text-white">💬 WhatsApp</Button>
            </Link>
          </div>
        </div>

        <Link href="/">
          <Button size="lg" className="font-black">← Go to Home</Button>
        </Link>
      </div>
    </section>
  );
}

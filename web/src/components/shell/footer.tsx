import Link from "next/link";
import { siteConfig } from "@/config/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { copyright } = siteConfig;

  return (
    <footer className="bg-primary text-white mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary text-primary font-black text-lg">⚡</span>
              <span className="font-black text-lg text-white">{siteConfig.name}</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">{siteConfig.description}</p>
            <div className="flex gap-3">
              <Link
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </Link>
              <Link
                href={siteConfig.phoneHref}
                aria-label="Call us"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-secondary">Service Areas</h3>
            <ul className="space-y-2">
              {siteConfig.serviceAreas.map((area) => (
                <li key={area} className="text-sm text-white/70">{area}</li>
              ))}
            </ul>
          </div>

          {/* Contact + certs */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-secondary">Contact Us</h3>
            <ul className="space-y-2 mb-5">
              <li>
                <Link href={siteConfig.phoneHref} className="text-sm text-white/70 hover:text-white transition-colors">
                  {siteConfig.phone}
                </Link>
              </li>
              <li>
                <Link href={`mailto:${siteConfig.email}`} className="text-sm text-white/70 hover:text-white transition-colors">
                  {siteConfig.email}
                </Link>
              </li>
              <li className="text-sm text-white/70">{siteConfig.hours}</li>
            </ul>
            <h4 className="font-bold text-xs uppercase tracking-wider mb-3 text-secondary">Certifications</h4>
            <ul className="space-y-1.5">
              {siteConfig.certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-1.5 text-xs text-white/70">
                  <span className="text-success" aria-hidden="true">✓</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50 text-center sm:text-left">
            {copyright.text(year)}{" "}
            <Link href={copyright.brandHref} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-yellow-300 font-semibold underline underline-offset-2">
              {copyright.brand}
            </Link>
            .
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-white/50 hover:text-white/80 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

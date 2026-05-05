"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-surface border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0"
            aria-label={siteConfig.name + " home"}
          >
            <span
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-secondary font-black text-lg"
              aria-hidden="true"
            >
              ⚡
            </span>
            <div className="block">
              <p className="font-black text-foreground text-base leading-tight">{siteConfig.name}</p>
              <p className="text-muted text-[10px] leading-tight hidden sm:block">{siteConfig.tagline}</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {siteConfig.nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                    active
                      ? "text-secondary bg-secondary/10"
                      : "text-foreground hover:text-secondary hover:bg-secondary/10"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            {/* Theme switcher */}
            <ThemeSwitcher />

            <Link href={siteConfig.phoneHref}>
              <Button variant="outline" size="sm">
                <span aria-hidden="true">📞</span> {siteConfig.phone}
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" variant="accent">Get Free Quote</Button>
            </Link>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <ThemeSwitcher />

            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex items-center justify-center w-9 h-9 rounded-lg text-foreground hover:bg-border transition-colors"
            >
              {mobileOpen ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-50 lg:hidden bg-surface flex flex-col"
        >
          {/* Full-screen menu header */}
          <div className="flex items-center justify-between px-4 h-16 border-b border-border flex-shrink-0">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2.5"
              aria-label={siteConfig.name + " home"}
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-secondary font-black text-lg" aria-hidden="true">⚡</span>
              <p className="font-black text-foreground text-base">{siteConfig.name}</p>
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-9 h-9 rounded-lg text-foreground hover:bg-border transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links — fill remaining space */}
          <nav
            aria-label="Mobile navigation"
            className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1"
          >
            {siteConfig.nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-4 text-base font-semibold rounded-xl transition-colors",
                    active
                      ? "text-secondary bg-secondary/10"
                      : "text-foreground hover:text-secondary hover:bg-secondary/10"
                  )}
                >
                  {item.href === "/" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Bottom actions */}
          <div className="px-4 pb-safe pb-6 pt-4 border-t border-border flex flex-col gap-3 flex-shrink-0">
            <ThemeSwitcher variant="full" />
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full" variant="accent">Get Free Quote</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface MobileBottomNavProps {
  onAssistantOpen?: () => void;
}

function NavIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    home: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    zap: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    phone: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    "message-circle": (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    bot: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" />
      </svg>
    ),
  };
  return <>{icons[icon] ?? null}</>;
}

export function MobileBottomNav({ onAssistantOpen }: MobileBottomNavProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile bottom navigation"
      className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-surface border-t border-border pb-safe shadow-overlay"
    >
      <div className="grid grid-cols-5 h-16">
        {siteConfig.mobileNav.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          if ("isAssistant" in item && item.isAssistant) {
            return (
              <button
                key={item.label}
                onClick={onAssistantOpen}
                aria-label="Open AI assistant"
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 text-muted hover:text-secondary transition-colors"
                )}
              >
                <NavIcon icon={item.icon} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          }

          if ("external" in item && item.external) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="flex flex-col items-center justify-center gap-0.5 text-success hover:text-green-700 transition-colors"
              >
                <NavIcon icon={item.icon} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </a>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 transition-colors",
                isActive ? "text-secondary" : "text-muted hover:text-secondary"
              )}
            >
              <NavIcon icon={item.icon} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

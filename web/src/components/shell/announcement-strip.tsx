import Link from "next/link";
import { siteConfig } from "@/config/site";

export function AnnouncementStrip() {
  return (
    <div className="bg-primary text-white text-xs py-1.5 px-4">
      {/* Mobile: compact — icon + phone only */}
      <div className="sm:hidden flex items-center justify-between">
        <span className="font-medium text-[11px]">⚡ 24/7 Emergency</span>
        <Link
          href={siteConfig.phoneHref}
          className="font-bold text-secondary hover:text-yellow-300 underline underline-offset-2 whitespace-nowrap text-[11px]"
        >
          {siteConfig.phone}
        </Link>
      </div>
      {/* Desktop: full strip */}
      <div className="hidden sm:flex max-w-7xl mx-auto items-center justify-between gap-4">
        <p className="font-medium text-sm">
          ⚡ 24/7 Emergency Electrical Service — We respond in under 1 hour
        </p>
        <div className="flex items-center gap-4">
          <span className="text-white/70">{siteConfig.hours}</span>
          <Link
            href={siteConfig.phoneHref}
            className="font-bold text-secondary hover:text-yellow-300 underline underline-offset-2 whitespace-nowrap"
          >
            {siteConfig.phone}
          </Link>
        </div>
      </div>
    </div>
  );
}

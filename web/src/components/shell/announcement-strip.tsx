import Link from "next/link";
import { siteConfig } from "@/config/site";

export function AnnouncementStrip() {
  return (
    <div className="bg-primary text-white text-xs">
      <div className="mx-auto flex max-w-7xl items-center px-4 py-1.5 sm:px-6 lg:px-8">
        {/* Mobile: compact — icon + phone only */}
        <div className="flex w-full items-center justify-between sm:hidden">
          <span className="font-medium text-[11px]">⚡ 24/7 Emergency</span>
          <Link
            href={siteConfig.phoneHref}
            className="font-bold text-secondary hover:text-yellow-300 underline underline-offset-2 whitespace-nowrap text-[11px]"
          >
            {siteConfig.phone}
          </Link>
        </div>

        {/* Desktop: full strip */}
        <div className="hidden w-full items-center justify-between gap-4 sm:flex">
          <p className="font-medium text-sm">
            ⚡ 24/7 Emergency Electrical Service — We respond in under 1 hour
          </p>
          <div className="flex items-center gap-4 whitespace-nowrap">
            <span className="text-white/70">{siteConfig.hours}</span>
            <Link
              href={siteConfig.phoneHref}
              className="font-bold text-secondary hover:text-yellow-300 underline underline-offset-2"
            >
              {siteConfig.phone}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { siteConfig } from "@/config/site";

export function AnnouncementStrip() {
  return (
    <div className="bg-primary text-white text-xs sm:text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <p className="font-medium">
          ⚡ 24/7 Emergency Electrical Service — We respond in under 1 hour
        </p>
        <div className="flex items-center gap-4">
          <span className="text-white/70 hidden sm:inline">{siteConfig.hours}</span>
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

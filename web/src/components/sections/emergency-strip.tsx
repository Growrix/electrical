import Link from "next/link";
import { siteConfig } from "@/config/site";

export function EmergencyStrip() {
  return (
    <section aria-label="Emergency contact" className="bg-accent text-white py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="text-3xl flex-shrink-0" aria-hidden="true">🚨</span>
          <div>
            <p className="font-black text-lg leading-tight">Electrical Emergency?</p>
            <p className="text-white/80 text-sm">We respond in under 1 hour — 24 hours a day, 7 days a week</p>
          </div>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Link
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 bg-white text-accent font-black px-5 py-2.5 rounded-xl text-sm hover:bg-white/90 transition-colors shadow"
          >
            📞 Call Now
          </Link>
          <Link
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-white/30 transition-colors"
          >
            💬 WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}

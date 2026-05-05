import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="relative bg-gradient-to-br from-primary to-primary-light text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {siteConfig.certifications.slice(0, 2).map((cert) => (
              <span key={cert} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-pill px-3 py-1 text-xs font-medium">
                <span aria-hidden="true">✓</span> {cert}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 bg-secondary/20 border border-secondary/40 rounded-pill px-3 py-1 text-xs font-semibold text-secondary">
              ⚡ 24/7 Emergency Available
            </span>
          </div>

          <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5">
            Reliable Electrical Experts{" "}
            <span className="text-secondary">for Your Area</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
            Fast 24/7 response, certified technicians, and guaranteed work. From emergency repairs to complete electrical installations — we keep your home and business safe.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto font-black text-base">
                ⚡ Request Free Quote
              </Button>
            </Link>
            <Link href={siteConfig.phoneHref}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                📞 Call 24/7 Service Line
              </Button>
            </Link>
          </div>

          {/* Trust metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {siteConfig.trustMetrics.map((metric) => (
              <div key={metric.label} className="text-center sm:text-left">
                <p className="text-2xl font-black text-secondary">{metric.value}</p>
                <p className="text-xs text-white/70 mt-0.5">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-background" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} aria-hidden="true" />
    </section>
  );
}

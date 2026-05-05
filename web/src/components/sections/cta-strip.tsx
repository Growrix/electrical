import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface CTAStripProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "dark" | "light" | "accent";
}

export function CTAStrip({
  heading = "Ready to Get Started?",
  subheading = "Get a free quote today. Fast response, transparent pricing, guaranteed work.",
  primaryLabel = "Request Free Quote",
  primaryHref = "/contact",
  secondaryLabel = "Call Now",
  secondaryHref = siteConfig.phoneHref,
  variant = "dark",
}: CTAStripProps) {
  const bg =
    variant === "dark"
      ? "bg-primary text-white"
      : variant === "accent"
      ? "bg-accent text-white"
      : "bg-surface border-y border-border";

  const subColor = variant === "light" ? "text-muted" : "text-white/70";

  return (
    <section aria-label="Call to action" className={`py-14 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-black mb-3">{heading}</h2>
        <p className={`text-base mb-8 max-w-xl mx-auto ${subColor}`}>{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href={primaryHref}>
            <Button size="lg" variant={variant === "light" ? "primary" : "secondary"} className="w-full sm:w-auto font-black">
              ⚡ {primaryLabel}
            </Button>
          </Link>
          <Link href={secondaryHref}>
            <Button
              size="lg"
              variant="outline"
              className={`w-full sm:w-auto ${variant !== "light" ? "border-white text-white hover:bg-white hover:text-primary" : ""}`}
            >
              📞 {secondaryLabel}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

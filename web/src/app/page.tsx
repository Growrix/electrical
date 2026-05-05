import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/sections/hero-section";
import { EmergencyStrip } from "@/components/sections/emergency-strip";
import { TrustMetrics } from "@/components/sections/trust-metrics";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { FAQPreview } from "@/components/sections/faq-preview";
import { CTAStrip } from "@/components/sections/cta-strip";
import { LeadCaptureForm } from "@/components/sections/lead-capture-form";
import { ServiceCard } from "@/components/cards/service-card";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { CaseStudyCard } from "@/components/cards/case-study-card";
import { mockServices, mockTestimonials, mockCaseStudies } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Licensed Electrical Services`,
  description: siteConfig.description,
  keywords: ["electrical services", "electrician", "emergency electrician", "panel upgrade", "EV charger installation"],
  openGraph: {
    title: `${siteConfig.name} — Licensed Electrical Services`,
    description: siteConfig.description,
    type: "website",
  },
};

export default function HomePage() {
  const featuredServices = mockServices.filter((s) => s.featured);
  const featuredTestimonials = mockTestimonials.slice(0, 3);
  const featuredCaseStudies = mockCaseStudies.filter((s) => s.featured);

  return (
    <>
      <HeroSection />
      <EmergencyStrip />

      {/* Services Grid */}
      <section aria-labelledby="services-heading" className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-10 flex-wrap">
            <div>
              <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-2">Our Services</p>
              <h2 id="services-heading" className="text-3xl lg:text-4xl font-black text-foreground">What We Do</h2>
            </div>
            <Link href="/services"><Button variant="outline">View All Services →</Button></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <TrustMetrics />

      {/* Testimonials */}
      <section aria-labelledby="testimonials-heading" className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-10 flex-wrap">
            <div>
              <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-2">Reviews</p>
              <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-black text-foreground">What Customers Say</h2>
            </div>
            <Link href="/testimonials"><Button variant="outline">All Reviews →</Button></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section aria-labelledby="case-studies-heading" className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-10 flex-wrap">
            <div>
              <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-2">Project Portfolio</p>
              <h2 id="case-studies-heading" className="text-3xl lg:text-4xl font-black text-foreground">Recent Projects</h2>
            </div>
            <Link href="/case-studies"><Button variant="outline">All Projects →</Button></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {featuredCaseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <FAQPreview />

      {/* Lead Capture */}
      <section aria-labelledby="quote-form-heading" className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-2">Get Started</p>
              <h2 id="quote-form-heading" className="text-3xl lg:text-4xl font-black text-foreground mb-4">
                Request Your Free Quote
              </h2>
              <p className="text-muted text-base mb-6">
                Tell us about your project and we&apos;ll get back to you within 1 hour with a clear, transparent quote.
              </p>
              <ul className="space-y-3">
                {["Free no-obligation quote", "Response within 1 hour", "Licensed & insured technicians", "Fixed-price — no surprises"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="text-success font-bold" aria-hidden="true">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      <CTAStrip heading="Need Electrical Help Now?" subheading="Our team is available 24/7 for emergencies and same-day appointments." />
    </>
  );
}

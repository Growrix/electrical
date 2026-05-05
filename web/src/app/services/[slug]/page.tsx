import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { mockServices, mockTestimonials, mockCaseStudies } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { CaseStudyCard } from "@/components/cards/case-study-card";
import { LeadCaptureForm } from "@/components/sections/lead-capture-form";
import { CTAStrip } from "@/components/sections/cta-strip";
import { siteConfig } from "@/config/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return mockServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = mockServices.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | ${siteConfig.name}`,
    description: service.shortDescription,
  };
}

const scopeMap: Record<string, string[]> = {
  "residential-wiring": ["Whole-home rewiring", "Circuit additions", "Outlet and switch installation", "Arc-fault protection (AFCI)", "Aluminum wiring remediation", "Code compliance upgrades"],
  "panel-upgrades": ["100A to 200A upgrades", "Main breaker replacement", "Sub-panel installation", "Load calculation", "Surge protection integration", "Permit and inspection"],
  "emergency-repair": ["Power outage diagnosis", "Tripped breaker repair", "Burning smell investigation", "Overloaded circuit repair", "Sparking outlet repair", "Storm damage assessment"],
  "generator-installation": ["Whole-home standby generators", "Automatic transfer switches", "Load-shedding configuration", "Natural gas / propane connection", "Annual maintenance plans", "Remote monitoring setup"],
  "ev-charger-installation": ["Level 2 home charger installation", "Commercial charging stations", "Load calculation and panel check", "Utility rebate paperwork", "Smart charger configuration", "Conduit and trenching"],
  "commercial-electrical": ["Tenant fit-outs", "Three-phase power systems", "Lighting design and control", "Data and low-voltage wiring", "Code compliance audits", "Scheduled maintenance"],
  "lighting-installation": ["Interior recessed lighting", "Exterior security lighting", "Smart lighting systems", "LED retrofit projects", "Landscape and pathway lighting", "Dimmer and controls"],
  "electrical-inspection": ["Pre-purchase inspections", "Insurance requirement reports", "GFCI / AFCI verification", "Panel condition assessment", "Grounding and bonding check", "Written report with photos"],
};

const processSteps: Record<string, string[]> = {
  default: ["Schedule your appointment online or by phone", "Technician arrives and diagnoses the issue", "Receive a written fixed-price quote", "Work completed to code with clean-up", "Final test and walkthrough with you", "Permit closed and warranty issued"],
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = mockServices.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedTestimonials = mockTestimonials.filter((t) => t.category === service.category).slice(0, 2);
  const relatedCaseStudies = mockCaseStudies.filter((c) => c.category === service.title).slice(0, 2);
  const scope = scopeMap[service.slug] ?? scopeMap["electrical-inspection"];
  const steps = processSteps[service.slug] ?? processSteps.default;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="service-title" className="bg-gradient-to-br from-primary to-primary-light text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-white/60">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium" aria-current="page">{service.title}</li>
            </ol>
          </nav>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="max-w-2xl">
              <Badge variant="secondary" className="mb-3">{service.category}</Badge>
              <h1 id="service-title" className="text-4xl lg:text-5xl font-black mb-4">{service.title}</h1>
              <p className="text-white/80 text-lg mb-6">{service.shortDescription}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-pill px-3 py-1 text-xs font-medium">💰 {service.pricingRange}</span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-pill px-3 py-1 text-xs font-medium">⏱ {service.responseWindow}</span>
                <span className="inline-flex items-center gap-1.5 bg-success/20 border border-success/40 rounded-pill px-3 py-1 text-xs font-medium text-green-200">✓ {service.trustBadge}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={`/contact?service=${service.slug}`}>
                  <Button variant="secondary" size="lg" className="font-black w-full sm:w-auto">⚡ Book This Service</Button>
                </Link>
                <Link href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">💬 Ask on WhatsApp</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {/* When to call */}
          <section aria-labelledby="when-to-call">
            <h2 id="when-to-call" className="text-xl font-black text-foreground mb-4">When You Need {service.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Frequent breaker trips", "Flickering or dimming lights", "Burning smell from outlets", "Outdated wiring or panel", "Planning a home addition", "Insurance or permit requirement"].map((sign) => (
                <div key={sign} className="flex items-center gap-2 p-3 rounded-lg border border-border bg-surface text-sm text-foreground">
                  <span className="text-error" aria-hidden="true">⚠</span> {sign}
                </div>
              ))}
            </div>
          </section>

          {/* Scope */}
          <section aria-labelledby="scope-heading">
            <h2 id="scope-heading" className="text-xl font-black text-foreground mb-4">What&apos;s Included</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {scope.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="text-success font-bold" aria-hidden="true">✓</span> {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Pricing */}
          <section aria-labelledby="pricing-heading" className="rounded-xl border border-border bg-surface p-6">
            <h2 id="pricing-heading" className="text-xl font-black text-foreground mb-3">Pricing Guidance</h2>
            <p className="text-3xl font-black text-primary mb-2">{service.pricingRange}</p>
            <p className="text-sm text-muted mb-4">Typical range. Final price depends on scope, access, and local permit fees. We provide a written fixed-price quote before starting.</p>
            <div className="space-y-2 text-sm">
              {["Job complexity and scope", "Panel or circuit access", "Material and equipment costs", "Local permit and inspection fees"].map((factor) => (
                <div key={factor} className="flex items-center gap-2 text-muted">
                  <span aria-hidden="true">•</span> {factor}
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section aria-labelledby="process-heading">
            <h2 id="process-heading" className="text-xl font-black text-foreground mb-4">How It Works</h2>
            <ol className="space-y-3">
              {steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-black">{i + 1}</span>
                  <p className="text-sm text-foreground leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Related testimonials */}
          {relatedTestimonials.length > 0 && (
            <section aria-labelledby="testimonials-heading">
              <h2 id="testimonials-heading" className="text-xl font-black text-foreground mb-4">Customer Reviews</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedTestimonials.map((t) => <TestimonialCard key={t.id} testimonial={t} />)}
              </div>
            </section>
          )}

          {/* Related case studies */}
          {relatedCaseStudies.length > 0 && (
            <section aria-labelledby="case-studies-heading">
              <h2 id="case-studies-heading" className="text-xl font-black text-foreground mb-4">Related Projects</h2>
              <div className="grid grid-cols-1 gap-4">
                {relatedCaseStudies.map((s) => <CaseStudyCard key={s.slug} study={s} />)}
              </div>
            </section>
          )}

          {/* Service area */}
          <section aria-labelledby="service-areas-heading" className="rounded-xl border border-border bg-surface p-6">
            <h2 id="service-areas-heading" className="text-base font-black text-foreground mb-3">Service Areas</h2>
            <div className="flex flex-wrap gap-2">
              {siteConfig.serviceAreas.map((area) => (
                <span key={area} className="px-3 py-1 bg-primary/10 text-primary rounded-pill text-xs font-medium">📍 {area}</span>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar: Lead form */}
        <aside aria-label="Request this service">
          <div className="sticky top-24">
            <LeadCaptureForm prefillService={service.slug} heading={`Book ${service.title}`} compact />
          </div>
        </aside>
      </div>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-16 inset-x-0 z-30 lg:hidden bg-surface border-t border-border px-4 py-2.5 flex gap-2">
        <Link href={siteConfig.phoneHref} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">📞 Call Now</Button>
        </Link>
        <Link href={`/contact?service=${service.slug}`} className="flex-1">
          <Button size="sm" className="w-full">⚡ Book Service</Button>
        </Link>
      </div>

      <CTAStrip heading="Ready to Get Started?" subheading={`Book your ${service.title} appointment today.`} />
    </>
  );
}

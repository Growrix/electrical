import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTAStrip } from "@/components/sections/cta-strip";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { mockTeam, mockTestimonials } from "@/lib/mock-data";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name} — our history, team, certifications, and service area commitment.`,
};

const timeline = [
  { year: "2010", title: "Founded in Springfield", desc: "Robert Daniels started PowerPro with a truck and a mission: honest electrical work done right." },
  { year: "2013", title: "Expanded to 3 Cities", desc: "Growing demand led us to hire our first team and expand to Shelbyville and Capital City." },
  { year: "2016", title: "Commercial Division Launched", desc: "A dedicated commercial team began serving offices, restaurants, and light industrial properties." },
  { year: "2019", title: "EV Charging Specialist Team", desc: "As EV adoption grew, we invested in EV charger certifications across our installer team." },
  { year: "2023", title: "2,000+ Jobs Milestone", desc: "We surpassed 2,000 completed projects with a 4.9/5 average customer rating." },
  { year: "2026", title: "5-City Service Area", desc: "Now serving 5 cities with a team of 18 licensed electricians and support staff." },
];

export default function AboutPage() {
  const snippetTestimonials = mockTestimonials.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="about-hero" className="bg-gradient-to-br from-primary to-primary-light text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-3">Our Story</p>
              <h1 id="about-hero" className="text-4xl lg:text-5xl font-black mb-4">Built on Trust, Powered by Expertise</h1>
              <p className="text-white/80 text-base leading-relaxed mb-6">
                Since 2010, {siteConfig.name} has been the region&apos;s most trusted electrical contractor — built on a foundation of honest work, clear communication, and a genuine commitment to safety.
              </p>
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="font-black">Contact Our Team</Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {siteConfig.trustMetrics.map((metric) => (
                <div key={metric.label} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                  <p className="text-3xl font-black text-secondary">{metric.value}</p>
                  <p className="text-xs text-white/70 mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section aria-labelledby="mission-heading" className="py-14 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="mission-heading" className="text-2xl font-black text-foreground mb-4">Our Mission</h2>
          <p className="text-base text-muted leading-relaxed">
            To make professional electrical services accessible, transparent, and stress-free for every homeowner and business owner in our region. We believe every customer deserves clear communication, fair pricing, and work that&apos;s done right the first time.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section aria-labelledby="timeline-heading" className="py-14 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="timeline-heading" className="text-2xl font-black text-foreground mb-8 text-center">Our Journey</h2>
          <div className="relative border-l-2 border-primary/20 ml-4 space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="pl-6 relative">
                <span className="absolute -left-[13px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-primary text-xs font-black">{i + 1}</span>
                <p className="text-secondary font-black text-sm mb-0.5">{item.year}</p>
                <h3 className="font-bold text-foreground text-base mb-1">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section aria-labelledby="certs-heading" className="py-14 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="certs-heading" className="text-2xl font-black text-white mb-8">Certifications & Compliance</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {siteConfig.certifications.map((cert) => (
              <div key={cert} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                <span className="text-secondary text-2xl block mb-2" aria-hidden="true">✓</span>
                <p className="text-white font-semibold text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section aria-labelledby="team-heading" className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-2">The Team</p>
            <h2 id="team-heading" className="text-3xl font-black text-foreground">Meet Our Electricians</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {mockTeam.map((member) => (
              <article key={member.name} className="rounded-xl border border-border bg-surface p-5 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-3xl mx-auto mb-3" aria-hidden="true">👷</div>
                <h3 className="font-black text-foreground text-base">{member.name}</h3>
                <p className="text-secondary text-xs font-semibold mt-0.5 mb-3">{member.role}</p>
                <p className="text-xs text-muted leading-relaxed mb-3">{member.bio}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.certifications.slice(0, 2).map((cert) => (
                    <span key={cert} className="text-[10px] bg-border text-foreground rounded-pill px-2 py-0.5 font-medium">{cert}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section aria-labelledby="areas-heading" className="py-14 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="areas-heading" className="text-2xl font-black text-foreground mb-4">Service Areas</h2>
          <p className="text-muted text-sm mb-6">We serve the following cities and surrounding areas. Contact us to confirm your address.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {siteConfig.serviceAreas.map((area) => (
              <span key={area} className="px-4 py-2 bg-secondary/10 text-secondary rounded-xl text-sm font-semibold">📍 {area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial snippets */}
      <section aria-labelledby="reviews-heading" className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="reviews-heading" className="text-2xl font-black text-foreground mb-8 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {snippetTestimonials.map((t) => <TestimonialCard key={t.id} testimonial={t} />)}
          </div>
        </div>
      </section>

      <CTAStrip heading="Ready to Work With Us?" primaryLabel="Contact Our Team" secondaryLabel="View Services" secondaryHref="/services" />
    </>
  );
}

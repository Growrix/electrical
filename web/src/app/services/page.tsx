"use client";
import { useState } from "react";
import { ServiceCard } from "@/components/cards/service-card";
import { CTAStrip } from "@/components/sections/cta-strip";
import { EmergencyStrip } from "@/components/sections/emergency-strip";
import { Button } from "@/components/ui/button";
import { mockServices } from "@/lib/mock-data";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const categories = ["All", "Residential", "Commercial", "Emergency", "Specialty", "Maintenance"];

const comparisonRows = [
  { feature: "Response time", residential: "Same day", commercial: "Scheduled", emergency: "< 1 hour" },
  { feature: "Permit handling", residential: "✓ Included", commercial: "✓ Included", emergency: "✓ When required" },
  { feature: "Warranty", residential: "2-year", commercial: "2-year", emergency: "1-year" },
  { feature: "Pricing", residential: "Fixed quote", commercial: "Custom quote", emergency: "Fixed quote" },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? mockServices
    : mockServices.filter((s) => s.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-3">What We Offer</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Electrical Services</h1>
          <p className="text-white/80 text-base max-w-xl mx-auto mb-6">
            From emergency repairs to complete installations — licensed, insured, and guaranteed.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="font-black">⚡ Get a Free Quote</Button>
          </Link>
        </div>
      </section>

      {/* Filter chips */}
      <section aria-label="Filter services" className="py-8 bg-surface border-b border-border sticky top-[64px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`flex-shrink-0 px-4 py-1.5 rounded-pill text-sm font-semibold border transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-surface text-muted border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service grid */}
      <section aria-label="Services list" className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-4xl mb-3" aria-hidden="true">🔍</p>
              <h2 className="font-black text-foreground text-xl mb-2">No services found</h2>
              <p className="text-muted mb-4">Try a different category or browse all services.</p>
              <Button onClick={() => setActiveCategory("All")}>Show All Services</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Emergency banner */}
      <EmergencyStrip />

      {/* Comparison table */}
      <section aria-labelledby="comparison-heading" className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="comparison-heading" className="text-2xl font-black text-foreground mb-6 text-center">When to Choose Which Service</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden border border-border text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold">Feature</th>
                  <th className="px-4 py-3 text-center font-bold">Residential</th>
                  <th className="px-4 py-3 text-center font-bold">Commercial</th>
                  <th className="px-4 py-3 text-center font-bold">Emergency</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-surface" : "bg-background"}>
                    <td className="px-4 py-3 font-semibold text-foreground">{row.feature}</td>
                    <td className="px-4 py-3 text-center text-muted">{row.residential}</td>
                    <td className="px-4 py-3 text-center text-muted">{row.commercial}</td>
                    <td className="px-4 py-3 text-center text-muted">{row.emergency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ for service selection */}
      <section aria-labelledby="services-faq-heading" className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-faq-heading" className="text-2xl font-black text-foreground mb-6 text-center">Service Selection FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "What if I'm not sure which service I need?", a: "Don't worry — just call or message us. Our team will diagnose the issue and recommend the right service." },
              { q: "Do you provide emergency services for commercial properties?", a: "Yes! Our 24/7 emergency line covers both residential and commercial properties." },
              { q: "Can I get a quote before booking?", a: "Absolutely. We provide free, no-obligation written quotes before starting any work." },
            ].map((faq) => (
              <details key={faq.q} className="rounded-xl border border-border bg-surface">
                <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.q}
                </summary>
                <p className="px-5 pb-4 text-sm text-muted leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip heading="Ready to Book a Service?" subheading="Get a free quote today. Response within 1 hour guaranteed." />
    </>
  );
}

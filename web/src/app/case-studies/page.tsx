"use client";
import { useState } from "react";
import { CaseStudyCard } from "@/components/cards/case-study-card";
import { CTAStrip } from "@/components/sections/cta-strip";
import { Button } from "@/components/ui/button";
import { mockCaseStudies } from "@/lib/mock-data";
import Link from "next/link";

const serviceTypes = ["All", "Residential Wiring", "Commercial Electrical", "EV Charger Installation", "Generator Installation"];
const propertyTypes = ["All", "Residential", "Commercial"];

export default function CaseStudiesPage() {
  const [activeService, setActiveService] = useState("All");
  const [activeProperty, setActiveProperty] = useState("All");

  const filtered = mockCaseStudies.filter((s) => {
    const matchService = activeService === "All" || s.category === activeService;
    const matchProperty = activeProperty === "All" || s.propertyType === activeProperty;
    return matchService && matchProperty;
  });

  const featured = mockCaseStudies.find((s) => s.featured);

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="case-studies-hero" className="bg-gradient-to-br from-primary to-primary-light text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-3">Project Portfolio</p>
          <h1 id="case-studies-hero" className="text-4xl lg:text-5xl font-black mb-4">Real Projects, Real Outcomes</h1>
          <p className="text-white/80 text-base max-w-xl mx-auto mb-6">
            Browse our completed projects to see how we solve complex electrical challenges across homes and businesses.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="font-black">⚡ Request Similar Solution</Button>
          </Link>
        </div>
      </section>

      {/* Filters */}
      <section aria-label="Filter projects" className="py-6 bg-surface border-b border-border sticky top-[64px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex gap-2 overflow-x-auto pb-1">
            <span className="flex-shrink-0 text-xs font-semibold text-muted self-center mr-1">Service:</span>
            {serviceTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveService(type)}
                aria-pressed={activeService === type}
                className={`flex-shrink-0 px-3 py-1.5 rounded-pill text-xs font-semibold border transition-colors ${
                  activeService === type ? "bg-primary text-white border-primary" : "bg-surface text-muted border-border hover:border-primary hover:text-primary"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <span className="flex-shrink-0 text-xs font-semibold text-muted self-center mr-1">Property:</span>
            {propertyTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveProperty(type)}
                aria-pressed={activeProperty === type}
                className={`flex-shrink-0 px-3 py-1.5 rounded-pill text-xs font-semibold border transition-colors ${
                  activeProperty === type ? "bg-primary text-white border-primary" : "bg-surface text-muted border-border hover:border-primary hover:text-primary"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && activeService === "All" && activeProperty === "All" && (
        <section aria-labelledby="featured-project" className="py-10 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-secondary font-bold text-xs uppercase tracking-wider mb-3">⭐ Featured Project</p>
            <div className="rounded-2xl border-2 border-primary/20 bg-surface p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div>
                  <h2 id="featured-project" className="text-2xl font-black text-foreground mb-3">{featured.title}</h2>
                  <p className="text-muted text-sm mb-2"><strong className="text-foreground">Challenge: </strong>{featured.challenge}</p>
                  <p className="text-muted text-sm mb-4"><strong className="text-foreground">Solution: </strong>{featured.solution}</p>
                  <div className="flex items-center gap-2 bg-success/10 rounded-lg px-4 py-2 mb-4 w-fit">
                    <span className="text-success" aria-hidden="true">✓</span>
                    <p className="text-success text-sm font-semibold">{featured.outcome}</p>
                  </div>
                  <Link href={`/case-studies/${featured.slug}`}>
                    <Button>View Full Project →</Button>
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Location", value: featured.location },
                    { label: "Category", value: featured.category },
                    { label: "Property", value: featured.propertyType },
                    { label: "Duration", value: featured.duration },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-background border border-border p-4 text-center">
                      <p className="font-black text-foreground text-sm">{stat.value}</p>
                      <p className="text-muted text-xs mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid */}
      <section aria-label="Case studies grid" className="py-10 lg:py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-4xl mb-3" aria-hidden="true">🔍</p>
              <h2 className="font-black text-foreground text-xl mb-2">No projects match your filters</h2>
              <p className="text-muted mb-4">Try adjusting your filters or browse all projects.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button onClick={() => { setActiveService("All"); setActiveProperty("All"); }}>Show All Projects</Button>
                <Link href="/contact"><Button variant="accent">Request a Similar Solution</Button></Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {filtered.map((study) => <CaseStudyCard key={study.slug} study={study} />)}
            </div>
          )}
        </div>
      </section>

      <CTAStrip heading="Have a Similar Project?" primaryLabel="Request Similar Solution" secondaryLabel="Explore Services" secondaryHref="/services" />
    </>
  );
}

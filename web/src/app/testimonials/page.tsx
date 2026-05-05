"use client";
import { useState } from "react";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { CTAStrip } from "@/components/sections/cta-strip";
import { Button } from "@/components/ui/button";
import { mockTestimonials } from "@/lib/mock-data";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const categories = ["All", "Residential", "Emergency", "Commercial", "Specialty"];

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? mockTestimonials
    : mockTestimonials.filter((t) => t.category === activeCategory);

  const avgRating = (mockTestimonials.reduce((a, t) => a + t.rating, 0) / mockTestimonials.length).toFixed(1);

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="testimonials-hero" className="bg-gradient-to-br from-primary to-primary-light text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-3">Customer Reviews</p>
          <h1 id="testimonials-hero" className="text-4xl lg:text-5xl font-black mb-4">What Our Customers Say</h1>
          <p className="text-white/80 text-base max-w-xl mx-auto mb-6">
            Real feedback from real customers across the region. Our reputation is built on work done right.
          </p>
          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-4 bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
            <div className="text-center">
              <p className="text-4xl font-black text-secondary">{avgRating}</p>
              <div className="flex gap-0.5 justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="border-l border-white/20 pl-4 text-left">
              <p className="font-bold text-white">{mockTestimonials.length}+ Verified Reviews</p>
              <p className="text-white/60 text-xs">Across all services and locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section aria-label="Filter by category" className="py-6 bg-surface border-b border-border sticky top-[64px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`flex-shrink-0 px-4 py-1.5 rounded-pill text-sm font-semibold border transition-colors ${
                  activeCategory === cat ? "bg-primary text-white border-primary" : "bg-surface text-muted border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section aria-label="Reviews" className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-4xl mb-3" aria-hidden="true">💬</p>
              <h2 className="font-black text-foreground text-xl mb-2">No reviews in this category yet</h2>
              <p className="text-muted mb-4">Check back soon or browse all reviews.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button onClick={() => setActiveCategory("All")}>Show All Reviews</Button>
                <Link href="/services"><Button variant="outline">View Certifications</Button></Link>
                <Link href="/case-studies"><Button variant="outline">Browse Case Studies</Button></Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((t) => <TestimonialCard key={t.id} testimonial={t} />)}
            </div>
          )}
        </div>
      </section>

      {/* Highlighted quote */}
      <section aria-label="Featured review" className="py-14 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex gap-0.5 justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <blockquote className="text-xl lg:text-2xl font-bold text-white leading-relaxed mb-5 italic">
            &ldquo;PowerPro handled our entire office renovation — 4,000 sq ft, 80 circuits. Finished ahead of schedule and under budget. Professional team throughout.&rdquo;
          </blockquote>
          <cite className="text-white/70 text-sm not-italic">— Tom B., Capital City · Commercial Electrical</cite>
        </div>
      </section>

      <CTAStrip heading="Ready to Experience the Difference?" primaryLabel="Start Your Request" secondaryLabel="View Our Services" secondaryHref="/services" />
    </>
  );
}

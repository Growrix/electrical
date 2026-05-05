"use client";
import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTAStrip } from "@/components/sections/cta-strip";
import { mockFAQs } from "@/lib/mock-data";
import { siteConfig } from "@/config/site";

const faqCategories = ["All", "Emergency", "Licensing", "Process", "Pricing", "Service Areas", "Warranty", "Safety", "EV"];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = mockFAQs.filter((f) => {
    const matchCat = activeCategory === "All" || f.category === activeCategory;
    const matchSearch = !search || f.question.toLowerCase().includes(search.toLowerCase()) || f.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="faq-hero" className="bg-gradient-to-br from-primary to-primary-light text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-3">Questions & Answers</p>
          <h1 id="faq-hero" className="text-4xl lg:text-5xl font-black mb-4">Frequently Asked Questions</h1>
          <p className="text-white/80 text-base max-w-xl mx-auto mb-6">
            Quick answers to the questions we hear most from homeowners and businesses. Can&apos;t find what you need? Just ask.
          </p>
          {/* Search — sticky on mobile */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions..."
                aria-label="Search frequently asked questions"
                className="w-full h-11 rounded-xl bg-white/10 border border-white/20 px-4 pr-10 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white"
              />
              <svg className="absolute right-3 top-3 text-white/50" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <section aria-label="Filter FAQs" className="py-5 bg-surface border-b border-border sticky top-[64px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-2 overflow-x-auto pb-1">
          {faqCategories.map((cat) => (
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
      </section>

      {/* FAQ accordion */}
      <section aria-label="Questions and answers" className="py-12 lg:py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-4xl mb-3" aria-hidden="true">🔍</p>
              <h2 className="font-black text-foreground text-xl mb-2">No matching questions</h2>
              <p className="text-muted mb-4">Try a different search or ask us directly.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button onClick={() => { setSearch(""); setActiveCategory("All"); }}>Clear Filters</Button>
                <Link href="/contact"><Button variant="accent">Ask a New Question</Button></Link>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-border rounded-xl border border-border bg-surface overflow-hidden">
              {filtered.map((faq) => (
                <div key={faq.id}>
                  <button
                    aria-expanded={openId === faq.id}
                    aria-controls={`faq-body-${faq.id}`}
                    id={`faq-trigger-${faq.id}`}
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-foreground hover:bg-background transition-colors"
                  >
                    <span className="flex items-start gap-2">
                      <span className="flex-shrink-0 text-xs mt-0.5 px-1.5 py-0.5 rounded bg-primary/10 text-primary font-bold">{faq.category}</span>
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex-shrink-0 text-primary transition-transform duration-fast ${openId === faq.id ? "rotate-180" : ""}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  {openId === faq.id && (
                    <div
                      id={`faq-body-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${faq.id}`}
                      className="px-5 pb-5 text-sm text-muted leading-relaxed"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact fallback */}
      <section aria-labelledby="contact-fallback" className="py-12 bg-surface">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="contact-fallback" className="text-xl font-black text-foreground mb-3">Still Have a Question?</h2>
          <p className="text-muted text-sm mb-6">Our team is happy to answer any questions not covered here. We respond quickly during business hours and immediately in emergencies.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"><Button size="lg" className="font-black">Ask a New Question</Button></Link>
            <Link href={siteConfig.phoneHref}><Button variant="outline" size="lg">📞 {siteConfig.phone}</Button></Link>
          </div>
        </div>
      </section>

      <CTAStrip heading="Ready to Book?" primaryLabel="Request Free Quote" secondaryLabel="View Services" secondaryHref="/services" />
    </>
  );
}

"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTAStrip } from "@/components/sections/cta-strip";
import { mockCatalogItems } from "@/lib/mock-data";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const categories = ["All", "Panels & Breakers", "EV Chargers", "Generators", "Smart Lighting", "Outlets & Switches", "Smart Home"];
const sortOptions = [
  { value: "default", label: "Default" },
  { value: "az", label: "A–Z" },
];

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  let filtered = mockCatalogItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  if (sortBy === "az") {
    filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="catalog-hero" className="bg-gradient-to-br from-primary to-primary-light text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-3">Equipment & Materials</p>
          <h1 id="catalog-hero" className="text-4xl lg:text-5xl font-black mb-4">Electrical Equipment Catalog</h1>
          <p className="text-white/80 text-base max-w-xl mx-auto mb-4">
            Browse the equipment and materials we commonly install. This is an informational catalog — no direct purchase. Contact us for installation quotes.
          </p>
          <div className="inline-flex items-center gap-2 bg-warning/20 border border-warning/30 rounded-xl px-4 py-2 text-sm text-white">
            <span aria-hidden="true">ℹ️</span> This catalog is informational only — we do not sell products directly.
          </div>
        </div>
      </section>

      {/* Filters + Sort */}
      <section aria-label="Filter catalog" className="py-5 bg-surface border-b border-border sticky top-[64px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-2 overflow-x-auto pb-1 flex-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`flex-shrink-0 px-3 py-1.5 rounded-pill text-xs font-semibold border transition-colors ${
                  activeCategory === cat ? "bg-primary text-white border-primary" : "bg-surface text-muted border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort catalog items"
            className="flex-shrink-0 h-8 rounded-lg border border-border bg-surface px-2 text-xs text-foreground focus:outline-none focus:border-primary"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </section>

      {/* Grid */}
      <section aria-label="Catalog items" className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-4xl mb-3" aria-hidden="true">🔍</p>
              <h2 className="font-black text-foreground text-xl mb-2">No items found</h2>
              <Button onClick={() => setActiveCategory("All")}>Show All Items</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((item) => (
                <article key={item.slug} className="flex flex-col rounded-xl border border-border bg-surface p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0" aria-hidden="true">⚡</div>
                    <Badge variant="outline">{item.category}</Badge>
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed flex-1 mb-4">{item.description}</p>
                  <ul className="space-y-1 mb-5">
                    {item.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-foreground">
                        <span className="text-success" aria-hidden="true">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Link href="/contact" className="flex-1">
                      <Button size="sm" className="w-full">Request Installation Quote</Button>
                    </Link>
                    <Link href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="text-success border-success hover:bg-success hover:text-white" aria-label="Ask on WhatsApp">💬</Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Guidance */}
      <section aria-labelledby="guidance-heading" className="py-14 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="guidance-heading" className="text-2xl font-black text-foreground mb-6 text-center">How to Choose the Right Equipment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: "🔍", title: "Assess Your Needs", desc: "Start with your goals — backup power, EV charging, efficiency, safety. Our team can conduct a free needs assessment." },
              { icon: "📋", title: "Get a Scope Review", desc: "We check your panel capacity, wiring, and code requirements before recommending specific equipment for your situation." },
              { icon: "✅", title: "Receive a Fixed Quote", desc: "Our quotes include equipment, labor, permits, and inspection. No surprise costs after the job starts." },
            ].map((step) => (
              <div key={step.title} className="text-center p-5 rounded-xl border border-border bg-background">
                <span className="text-4xl block mb-3" aria-hidden="true">{step.icon}</span>
                <h3 className="font-bold text-foreground text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip heading="Ready for Installation?" primaryLabel="Request Installation Quote" secondaryLabel="Ask Expert on WhatsApp" secondaryHref={siteConfig.whatsapp} />
    </>
  );
}

"use client";
import { useState } from "react";
import { ArticleCard } from "@/components/cards/article-card";
import { CTAStrip } from "@/components/sections/cta-strip";
import { Button } from "@/components/ui/button";
import { mockBlogPosts } from "@/lib/mock-data";
import Link from "next/link";

const categories = ["All", "Safety", "EV", "Emergency", "Energy Efficiency", "Generators"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const featured = mockBlogPosts.find((p) => p.featured);
  const filtered = mockBlogPosts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="blog-hero" className="bg-gradient-to-br from-primary to-primary-light text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-3">Electrical Guides</p>
            <h1 id="blog-hero" className="text-4xl lg:text-5xl font-black mb-4">Expert Electrical Advice</h1>
            <p className="text-white/80 text-base max-w-xl mx-auto">
              Safety tips, how-to guides, and expert advice from our certified electricians.
            </p>
          </div>
          {/* Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                aria-label="Search articles"
                className="w-full h-11 rounded-xl bg-white/10 border border-white/20 px-4 pr-10 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white"
              />
              <svg className="absolute right-3 top-3 text-white/50" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section aria-label="Filter by category" className="py-5 bg-surface border-b border-border sticky top-[64px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-2 overflow-x-auto pb-1">
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
      </section>

      {/* Featured article */}
      {featured && activeCategory === "All" && !search && (
        <section aria-labelledby="featured-article" className="py-10 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-secondary font-bold text-xs uppercase tracking-wider mb-3">⭐ Featured Article</p>
            <div className="rounded-2xl border-2 border-primary/20 bg-surface p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-secondary/20 text-amber-800 text-xs font-semibold rounded-pill">{featured.category}</span>
                    <span className="text-muted text-xs">{featured.readTime}</span>
                  </div>
                  <h2 id="featured-article" className="text-2xl font-black text-foreground mb-3 leading-snug">{featured.title}</h2>
                  <p className="text-muted text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                  <Link href={`/blog/${featured.slug}`}>
                    <Button>Read Article →</Button>
                  </Link>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border h-48 flex items-center justify-center">
                  <span className="text-6xl" aria-hidden="true">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles grid */}
      <section aria-label="Articles" className="py-10 lg:py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-4xl mb-3" aria-hidden="true">📰</p>
              <h2 className="font-black text-foreground text-xl mb-2">No articles found</h2>
              <p className="text-muted mb-4">Try a different search or category.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button onClick={() => { setActiveCategory("All"); setSearch(""); }}>Clear Filters</Button>
                <Link href="/services"><Button variant="outline">Browse Services</Button></Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((post) => <ArticleCard key={post.slug} post={post} />)}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter/CTA strip */}
      <CTAStrip heading="Need Expert Help?" subheading="If reading about it made you realize you need a professional — we&apos;re one call away." primaryLabel="Request Expert Help" secondaryLabel="Browse Services" secondaryHref="/services" />
    </>
  );
}

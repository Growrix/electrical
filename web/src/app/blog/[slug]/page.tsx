import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { mockBlogPosts, mockServices } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/cards/service-card";
import { CTAStrip } from "@/components/sections/cta-strip";
import { siteConfig } from "@/config/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return mockBlogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = mockBlogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

const articleContent: Record<string, { toc: string[]; sections: { heading: string; body: string }[] }> = {
  default: {
    toc: ["Why This Matters", "Warning Signs", "What You Should Do", "When to Call a Professional", "Safety Reminders"],
    sections: [
      { heading: "Why This Matters", body: "Electrical issues are among the leading causes of home fires in North America. Understanding when to act — and when to call a professional — can prevent property damage, injury, or worse. This guide gives you the knowledge to make informed decisions." },
      { heading: "Warning Signs", body: "The most common warning signs include frequent circuit breaker trips, flickering or dimming lights, burning smells from outlets, discolored switch plates, and outlets that feel warm to the touch. Any of these requires immediate attention." },
      { heading: "What You Should Do", body: "First, do not ignore the signs. If you notice a burning smell or see sparks, turn off the breaker to that circuit immediately. Do not attempt to repair wiring yourself unless you are a licensed electrician. Improper repairs are dangerous and may void your insurance." },
      { heading: "When to Call a Professional", body: "Any time you experience burning smells, sparks, repeated breaker trips, or outlets that don't work, call a licensed electrician. Emergency situations — anything with heat, sparks, or shock risk — warrant an immediate call to our 24/7 emergency line." },
      { heading: "Safety Reminders", body: "Never overload outlets or extension cords. Replace damaged cords immediately. Keep electrical panels accessible and free from clutter. Test your GFCI outlets monthly by pressing the test button. Install smoke detectors on every level of your home." },
    ],
  },
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = mockBlogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = articleContent[slug] ?? articleContent.default;
  const relatedPosts = mockBlogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  const relatedServices = mockServices.slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="article-title" className="bg-gradient-to-br from-primary to-primary-light text-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-white/60 flex-wrap">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium" aria-current="page">{post.title}</li>
            </ol>
          </nav>
          <Badge variant="secondary" className="mb-3">{post.category}</Badge>
          <h1 id="article-title" className="text-3xl lg:text-4xl font-black mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2">
          {/* Lead */}
          <p className="text-base text-muted leading-relaxed mb-8 border-l-4 border-primary pl-4 italic">{post.excerpt}</p>

          {/* TOC — collapsible on mobile */}
          <details className="lg:hidden mb-8 rounded-xl border border-border bg-surface">
            <summary className="px-4 py-3 text-sm font-semibold text-foreground cursor-pointer">📋 Table of Contents</summary>
            <ol className="px-4 pb-4 space-y-2">
              {content.toc.map((item, i) => (
                <li key={i} className="text-sm text-primary hover:underline">
                  <a href={`#section-${i}`}>{i + 1}. {item}</a>
                </li>
              ))}
            </ol>
          </details>

          {/* Content sections */}
          <div className="space-y-8">
            {content.sections.map((section, i) => (
              <section key={i} id={`section-${i}`} aria-labelledby={`section-heading-${i}`}>
                <h2 id={`section-heading-${i}`} className="text-xl font-black text-foreground mb-3">{section.heading}</h2>
                <p className="text-sm text-muted leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>

          {/* Safety callout */}
          <div className="mt-8 p-5 rounded-xl border border-error/30 bg-error/5">
            <div className="flex items-start gap-3">
              <span className="text-error text-xl" aria-hidden="true">⚠️</span>
              <div>
                <p className="font-bold text-foreground text-sm mb-1">Safety First</p>
                <p className="text-sm text-muted">If you ever feel unsafe or unsure, stop and call a licensed electrician. Electrical work can be fatal when done incorrectly.</p>
              </div>
            </div>
          </div>

          {/* Related services CTA */}
          <div className="mt-10 rounded-xl border-2 border-primary/20 bg-surface p-6">
            <h2 className="text-lg font-black text-foreground mb-2">Need Professional Help?</h2>
            <p className="text-sm text-muted mb-4">Our certified electricians are available 24/7 to handle exactly this type of situation.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedServices.map((s) => <ServiceCard key={s.slug} service={s} />)}
            </div>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <section aria-labelledby="related-posts" className="mt-10">
              <h2 id="related-posts" className="text-xl font-black text-foreground mb-4">Related Articles</h2>
              <div className="space-y-4">
                {relatedPosts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="flex items-start gap-3 p-3 rounded-xl border border-border hover:border-primary hover:shadow-sm transition-all group">
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">⚡</span>
                    <div>
                      <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{p.title}</p>
                      <p className="text-xs text-muted mt-0.5">{p.readTime} · {p.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* End CTA */}
          <div className="mt-10 text-center">
            <p className="text-muted text-sm mb-3">Ready to get professional electrical help?</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/contact"><Button size="lg" className="font-black">⚡ Get Professional Assistance</Button></Link>
              <Link href={siteConfig.phoneHref}><Button variant="outline" size="lg">📞 Call for Immediate Help</Button></Link>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside aria-label="Article sidebar">
          <div className="sticky top-24 space-y-5">
            {/* Desktop TOC */}
            <div className="hidden lg:block rounded-xl border border-border bg-surface p-5">
              <h2 className="font-black text-foreground text-sm mb-3">Table of Contents</h2>
              <ol className="space-y-2">
                {content.toc.map((item, i) => (
                  <li key={i}>
                    <a href={`#section-${i}`} className="text-xs text-muted hover:text-primary transition-colors">
                      {i + 1}. {item}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Quick contact */}
            <div className="rounded-xl border border-border bg-primary text-white p-5">
              <h2 className="font-black text-base mb-2">Need Help Now?</h2>
              <p className="text-white/70 text-xs mb-4">Our team is available 24/7 for emergencies and same-day appointments.</p>
              <div className="space-y-2">
                <Link href={siteConfig.phoneHref} className="block">
                  <Button variant="secondary" size="sm" className="w-full">📞 {siteConfig.phone}</Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button variant="outline" size="sm" className="w-full border-white text-white hover:bg-white hover:text-primary">Get Free Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <CTAStrip heading="Don&apos;t DIY Electrical Work" subheading="Let our certified team handle it safely, correctly, and with a written warranty." primaryLabel="Get Professional Help" />
    </>
  );
}

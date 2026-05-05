import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { mockCaseStudies, mockServices } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/cards/service-card";
import { CTAStrip } from "@/components/sections/cta-strip";
import { siteConfig } from "@/config/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return mockCaseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = mockCaseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} | ${siteConfig.name}`,
    description: study.challenge,
  };
}

const timelineMap: Record<string, { phase: string; desc: string }[]> = {
  default: [
    { phase: "Assessment", desc: "Site survey, load calculation, and permit research completed within 24 hours." },
    { phase: "Planning", desc: "Detailed scope document and fixed-price quote issued and approved by client." },
    { phase: "Installation", desc: "Licensed crew on site. All work performed to NEC code with daily progress updates." },
    { phase: "Inspection", desc: "Authority-having-jurisdiction (AHJ) inspection passed first time." },
    { phase: "Handover", desc: "System test with client. Documentation and warranty issued." },
  ],
};

const materialsMap: Record<string, string[]> = {
  default: ["Copper conductors (NEC compliant)", "Listed breaker panels and breakers", "AFCI/GFCI devices as required", "Conduit and fittings", "Approved junction boxes and covers"],
};

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = mockCaseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const relatedServices = mockServices.filter((s) => s.category === study.propertyType || s.title === study.category).slice(0, 2);
  const timeline = timelineMap[study.slug] ?? timelineMap.default;
  const materials = materialsMap[study.slug] ?? materialsMap.default;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="study-title" className="bg-gradient-to-br from-primary to-primary-light text-white py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-white/60">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium truncate max-w-[160px]" aria-current="page">{study.title}</li>
            </ol>
          </nav>
          <div className="flex gap-3 flex-wrap mb-3">
            <Badge variant="secondary">{study.category}</Badge>
            <Badge variant="outline" className="border-white/30 text-white">{study.propertyType}</Badge>
            <span className="inline-flex items-center gap-1 text-xs text-white/70">📍 {study.location}</span>
            <span className="inline-flex items-center gap-1 text-xs text-white/70">⏱ {study.duration}</span>
          </div>
          <h1 id="study-title" className="text-3xl lg:text-4xl font-black mb-4 max-w-3xl">{study.title}</h1>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="font-black">⚡ Get a Similar Quote</Button>
            </Link>
            <Link href={siteConfig.phoneHref}>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">Speak With Specialist</Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2 space-y-10">
          {/* Problem */}
          <section aria-labelledby="problem-heading">
            <h2 id="problem-heading" className="text-xl font-black text-foreground mb-3">The Problem</h2>
            <div className="rounded-xl border border-error/20 bg-error/5 p-5">
              <p className="text-sm text-foreground leading-relaxed">{study.challenge}</p>
            </div>
          </section>

          {/* Solution */}
          <section aria-labelledby="solution-heading">
            <h2 id="solution-heading" className="text-xl font-black text-foreground mb-3">Our Solution</h2>
            <div className="rounded-xl border border-info/20 bg-info/5 p-5">
              <p className="text-sm text-foreground leading-relaxed">{study.solution}</p>
            </div>
          </section>

          {/* Timeline */}
          <section aria-labelledby="timeline-heading">
            <h2 id="timeline-heading" className="text-xl font-black text-foreground mb-4">Project Timeline</h2>
            <ol className="relative border-l-2 border-primary/20 ml-3 space-y-6">
              {timeline.map((item, i) => (
                <li key={i} className="pl-5 relative">
                  <span className="absolute -left-[11px] top-0 flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white text-xs font-black">{i + 1}</span>
                  <h3 className="font-bold text-foreground text-sm mb-1">{item.phase}</h3>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Materials */}
          <section aria-labelledby="materials-heading">
            <h2 id="materials-heading" className="text-xl font-black text-foreground mb-3">Materials & Standards</h2>
            <ul className="space-y-2">
              {materials.map((m) => (
                <li key={m} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="text-success font-bold" aria-hidden="true">✓</span> {m}
                </li>
              ))}
            </ul>
          </section>

          {/* Outcome */}
          <section aria-labelledby="outcome-heading">
            <h2 id="outcome-heading" className="text-xl font-black text-foreground mb-3">Outcome</h2>
            <div className="rounded-xl border border-success/30 bg-success/10 p-5">
              <div className="flex items-start gap-3">
                <span className="text-success text-2xl" aria-hidden="true">✓</span>
                <p className="text-sm text-foreground leading-relaxed font-semibold">{study.outcome}</p>
              </div>
            </div>
          </section>

          {/* Related services */}
          {relatedServices.length > 0 && (
            <section aria-labelledby="related-services">
              <h2 id="related-services" className="text-xl font-black text-foreground mb-4">Related Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedServices.map((s) => <ServiceCard key={s.slug} service={s} />)}
              </div>
            </section>
          )}
        </article>

        {/* Sidebar */}
        <aside aria-label="Project summary">
          <div className="sticky top-24 rounded-xl border border-border bg-surface p-5 space-y-4">
            <h2 className="font-black text-foreground text-base">Project Summary</h2>
            {[
              { label: "Location", value: study.location },
              { label: "Category", value: study.category },
              { label: "Property Type", value: study.propertyType },
              { label: "Duration", value: study.duration },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center text-sm border-b border-border pb-2">
                <span className="text-muted">{item.label}</span>
                <span className="font-semibold text-foreground">{item.value}</span>
              </div>
            ))}
            <div className="pt-2 space-y-2">
              <Link href="/contact" className="block">
                <Button className="w-full font-black">⚡ Get a Similar Quote</Button>
              </Link>
              <Link href="/case-studies" className="block">
                <Button variant="outline" className="w-full">← Back to Projects</Button>
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <CTAStrip heading="Want Results Like This?" primaryLabel="Get a Similar Quote" secondaryLabel="Call Us Now" />
    </>
  );
}

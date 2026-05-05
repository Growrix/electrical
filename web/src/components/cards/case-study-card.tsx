import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CaseStudy } from "@/types/content";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-surface p-5 hover:shadow-md transition-shadow group">
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex gap-2 flex-wrap">
          <Badge variant="primary">{study.category}</Badge>
          <Badge variant="outline">{study.propertyType}</Badge>
        </div>
        <span className="text-xs text-muted flex-shrink-0">⏱ {study.duration}</span>
      </div>

      <h3 className="font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors leading-snug">
        {study.title}
      </h3>

      <p className="text-xs text-muted mb-1">
        <span className="font-semibold text-foreground">Challenge: </span>
        {study.challenge}
      </p>
      <p className="text-xs text-muted mb-1">
        <span className="font-semibold text-foreground">Solution: </span>
        {study.solution}
      </p>

      <div className="mt-3 mb-4 flex items-center gap-2 bg-success/10 rounded-lg px-3 py-2">
        <span className="text-success text-sm" aria-hidden="true">✓</span>
        <p className="text-xs font-medium text-success">{study.outcome}</p>
      </div>

      <div className="flex items-center justify-between mt-auto gap-2">
        <span className="text-xs text-muted">📍 {study.location}</span>
        <Link href={`/case-studies/${study.slug}`}>
          <Button size="sm" variant="outline">View Project</Button>
        </Link>
      </div>
    </article>
  );
}

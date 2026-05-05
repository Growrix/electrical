import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Service } from "@/types/content";

interface ServiceCardProps {
  service: Service;
}

const categoryVariant: Record<string, "primary" | "warning" | "error" | "success" | "info"> = {
  Residential: "primary",
  Emergency: "error",
  Specialty: "warning",
  Commercial: "info",
  Maintenance: "success",
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-surface p-5 hover:shadow-md transition-shadow group">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-secondary/10 text-secondary text-xl flex-shrink-0">
          ⚡
        </div>
        <Badge variant={categoryVariant[service.category] ?? "primary"}>{service.category}</Badge>
      </div>

      <h3 className="font-bold text-foreground text-base mb-1.5 group-hover:text-secondary transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed flex-1 mb-4">{service.shortDescription}</p>

      <div className="flex items-center justify-between text-xs text-muted mb-4 gap-2 flex-wrap">
        <span className="flex items-center gap-1">
          <span aria-hidden="true">💰</span> {service.pricingRange}
        </span>
        <span className="flex items-center gap-1">
          <span aria-hidden="true">⏱</span> {service.responseWindow}
        </span>
        <span className="flex items-center gap-1 text-success font-medium">
          <span aria-hidden="true">✓</span> {service.trustBadge}
        </span>
      </div>

      <div className="flex gap-2">
        <Link href={`/services/${service.slug}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">Learn More</Button>
        </Link>
        <Link href={`/contact?service=${service.slug}`} className="flex-1">
          <Button size="sm" className="w-full">Get Quote</Button>
        </Link>
      </div>
    </article>
  );
}

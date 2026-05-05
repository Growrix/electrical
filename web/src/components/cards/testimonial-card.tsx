import { Badge } from "@/components/ui/badge";
import type { Testimonial } from "@/types/content";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i < testimonial.rating);

  return (
    <article className="flex flex-col rounded-xl border border-border bg-surface p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-1 mb-3" aria-label={`${testimonial.rating} out of 5 stars`}>
        {stars.map((filled, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={filled ? "#f59e0b" : "none"}
            stroke="#f59e0b"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      <blockquote className="text-sm text-foreground leading-relaxed italic flex-1 mb-4">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <footer className="flex items-center justify-between gap-2 flex-wrap">
        <div>
          <p className="font-semibold text-sm text-foreground">{testimonial.customerName}</p>
          <p className="text-xs text-muted">{testimonial.location}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <Badge variant="primary" className="text-[10px]">{testimonial.serviceUsed}</Badge>
          <time className="text-[10px] text-muted" dateTime={testimonial.date}>
            {new Date(testimonial.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
          </time>
        </div>
      </footer>
    </article>
  );
}

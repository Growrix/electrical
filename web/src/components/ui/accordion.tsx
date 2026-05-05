"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
}

export function Accordion({ items, className, allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      if (prev.includes(id)) return prev.filter((i) => i !== id);
      return allowMultiple ? [...prev, id] : [id];
    });
  };

  return (
    <div className={cn("divide-y divide-border rounded-xl border border-border bg-surface", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id}>
            <button
              aria-expanded={isOpen}
              aria-controls={`accordion-body-${item.id}`}
              id={`accordion-header-${item.id}`}
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-foreground hover:bg-background transition-colors"
            >
              <span>{item.question}</span>
              <span
                aria-hidden="true"
                className={cn(
                  "flex-shrink-0 text-primary transition-transform duration-fast",
                  isOpen && "rotate-180"
                )}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div
                id={`accordion-body-${item.id}`}
                role="region"
                aria-labelledby={`accordion-header-${item.id}`}
                className="px-5 pb-4 text-sm text-muted leading-relaxed"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

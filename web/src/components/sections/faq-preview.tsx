import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { mockFAQs } from "@/lib/mock-data";

export function FAQPreview() {
  const preview = mockFAQs.slice(0, 5);

  return (
    <section aria-labelledby="faq-preview-heading" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-2">FAQ</p>
          <h2 id="faq-preview-heading" className="text-3xl lg:text-4xl font-black text-foreground mb-3">
            Common Questions
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Quick answers to the questions we hear most from homeowners and business owners.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <Accordion items={preview.map((f) => ({ id: f.id, question: f.question, answer: f.answer }))} />
        </div>

        <div className="text-center">
          <Link href="/faq">
            <Button variant="outline">View All FAQs</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { siteConfig } from "@/config/site";

export function TrustMetrics() {
  const reasons = [
    { icon: "🏅", title: "Licensed & Insured", desc: "Master electrician license and $2M liability coverage on every job." },
    { icon: "⚡", title: "24/7 Emergency Response", desc: "Our team is on call around the clock — holidays included." },
    { icon: "✅", title: "Permitted Work", desc: "We handle all permits and inspections. Work that's done right." },
    { icon: "💰", title: "Transparent Pricing", desc: "Written quotes before we start. No hidden fees, ever." },
    { icon: "🔧", title: "2-Year Workmanship Warranty", desc: "We stand behind our work with an industry-leading guarantee." },
    { icon: "⭐", title: "4.9/5 Customer Rating", desc: "Thousands of satisfied customers across the region." },
  ];

  return (
    <section aria-labelledby="why-us-heading" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-2">Why Choose Us</p>
          <h2 id="why-us-heading" className="text-3xl lg:text-4xl font-black text-foreground mb-4">
            The {siteConfig.name} Difference
          </h2>
          <p className="text-muted max-w-xl mx-auto text-base">
            We combine speed, expertise, and integrity to deliver electrical work you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4 p-5 rounded-xl border border-border hover:shadow-md transition-shadow">
              <span className="text-3xl flex-shrink-0 mt-0.5" aria-hidden="true">{reason.icon}</span>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-1">{reason.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

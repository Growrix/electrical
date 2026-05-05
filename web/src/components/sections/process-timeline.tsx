const steps = [
  {
    step: "01",
    title: "Book or Call",
    desc: "Submit your request online or call our 24/7 line. We confirm your appointment within 1 hour.",
    icon: "📞",
  },
  {
    step: "02",
    title: "Inspect & Quote",
    desc: "Our certified technician arrives, diagnoses the issue, and provides a written fixed-price quote.",
    icon: "🔍",
  },
  {
    step: "03",
    title: "Fix It Right",
    desc: "We complete the work to code, clean up afterward, and handle all permit documentation.",
    icon: "🔧",
  },
  {
    step: "04",
    title: "Verify & Guarantee",
    desc: "We test everything before we leave and back the work with our 2-year workmanship warranty.",
    icon: "✅",
  },
];

export function ProcessTimeline() {
  return (
    <section aria-labelledby="process-heading" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-2">How It Works</p>
          <h2 id="process-heading" className="text-3xl lg:text-4xl font-black text-foreground mb-4">
            Simple, Transparent Process
          </h2>
          <p className="text-muted max-w-xl mx-auto text-base">
            From first call to final test — here&apos;s what to expect when you work with us.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="absolute top-10 left-1/8 right-1/8 h-0.5 bg-border hidden lg:block" aria-hidden="true" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.step} className="relative flex flex-col items-center text-center">
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white text-3xl mb-4 shadow-lg z-10">
                  <span aria-hidden="true">{step.icon}</span>
                  <span className="absolute -top-1 -right-1 flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-primary text-xs font-black">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

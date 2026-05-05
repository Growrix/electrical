import type { Metadata } from "next";
import Link from "next/link";
import { LeadCaptureForm } from "@/components/sections/lead-capture-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: "Request a free quote, call our 24/7 emergency line, or chat on WhatsApp. Fast response guaranteed.",
};

const faqMini = [
  { q: "How quickly can I get a response?", a: "We respond to all quote requests within 1 hour during business hours, and immediately to emergencies 24/7." },
  { q: "Is the quote really free?", a: "Yes — no obligation, no credit card required. We provide a written fixed-price quote before any work starts." },
  { q: "What if I have an electrical emergency?", a: "Call our emergency line directly. We dispatch a technician within 1 hour, any time of day or night." },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="contact-hero" className="bg-gradient-to-br from-primary to-primary-light text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-3">Get In Touch</p>
          <h1 id="contact-hero" className="text-4xl lg:text-5xl font-black mb-4">Contact Us</h1>
          <p className="text-white/80 text-base max-w-xl mx-auto">
            We typically respond within 1 hour. For emergencies, call our 24/7 line for an immediate response.
          </p>
        </div>
      </section>

      {/* Multi-channel action bar */}
      <section aria-label="Contact channels" className="py-6 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link
              href={siteConfig.phoneHref}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-colors text-center"
            >
              <span className="text-2xl" aria-hidden="true">📞</span>
              <div>
                <p className="font-black text-primary text-xs">Call Now</p>
                <p className="text-muted text-[10px]">24/7 Emergency</p>
              </div>
            </Link>
            <Link
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-success bg-success/5 hover:bg-success/10 transition-colors text-center"
            >
              <span className="text-2xl" aria-hidden="true">💬</span>
              <div>
                <p className="font-black text-success text-xs">WhatsApp</p>
                <p className="text-muted text-[10px]">Chat instantly</p>
              </div>
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-colors text-center"
            >
              <span className="text-2xl" aria-hidden="true">✉️</span>
              <div>
                <p className="font-black text-foreground text-xs">Email Us</p>
                <p className="text-muted text-[10px]">Response by end of day</p>
              </div>
            </Link>
            <button
              aria-label="Open AI assistant chat"
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-colors text-center"
            >
              <span className="text-2xl" aria-hidden="true">🤖</span>
              <div>
                <p className="font-black text-foreground text-xs">AI Assistant</p>
                <p className="text-muted text-[10px]">Instant answers</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section aria-label="Contact form and details" className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <LeadCaptureForm heading="Submit Your Quote Request" />
          </div>

          {/* Details sidebar */}
          <aside aria-label="Contact details">
            <div className="space-y-5">
              {/* Hours */}
              <div className="rounded-xl border border-border bg-surface p-5">
                <h2 className="font-black text-foreground text-base mb-4">Office Hours</h2>
                <div className="space-y-2 text-sm">
                  {[
                    { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
                    { day: "Sunday", hours: "Emergency only" },
                    { day: "24/7 Emergency Line", hours: "Always available" },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between gap-2">
                      <span className="text-muted">{row.day}</span>
                      <span className="font-semibold text-foreground">{row.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service areas */}
              <div className="rounded-xl border border-border bg-surface p-5">
                <h2 className="font-black text-foreground text-base mb-3">Service Areas</h2>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.serviceAreas.map((area) => (
                    <span key={area} className="px-2.5 py-1 bg-primary/10 text-primary rounded-pill text-xs font-medium">📍 {area}</span>
                  ))}
                </div>
              </div>

              {/* Trust */}
              <div className="rounded-xl border border-border bg-surface p-5">
                <h2 className="font-black text-foreground text-base mb-3">Why Trust Us</h2>
                <ul className="space-y-2">
                  {["Licensed Master Electrician", "Fully bonded & insured", "2-year workmanship warranty", "Permit-compliant work", "4.9/5 customer rating"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="text-success font-bold" aria-hidden="true">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Address */}
              <div className="rounded-xl border border-border bg-surface p-5">
                <h2 className="font-black text-foreground text-base mb-2">Visit Us</h2>
                <address className="text-sm text-muted not-italic leading-relaxed">{siteConfig.address}</address>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Map placeholder */}
      <section aria-label="Location map" className="h-60 bg-primary/10 border-y border-border flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl mb-2" aria-hidden="true">🗺️</p>
          <p className="text-muted text-sm font-medium">Map integration available via Google Maps embed</p>
          <p className="text-muted text-xs">{siteConfig.address}</p>
        </div>
      </section>

      {/* FAQ mini */}
      <section aria-labelledby="contact-faq" className="py-12 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="contact-faq" className="text-xl font-black text-foreground mb-5 text-center">Quick Answers</h2>
          <div className="divide-y divide-border rounded-xl border border-border bg-background overflow-hidden">
            {faqMini.map((faq) => (
              <details key={faq.q} className="group">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-foreground hover:text-primary transition-colors list-none">
                  {faq.q}
                  <svg className="w-4 h-4 flex-shrink-0 text-muted group-open:rotate-180 transition-transform" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-sm text-muted leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky mobile submit bar */}
      <div className="fixed bottom-16 inset-x-0 z-30 lg:hidden bg-surface border-t border-border px-4 py-2.5 flex gap-2">
        <Link href={siteConfig.phoneHref} className="flex-1">
          <button className="w-full h-9 rounded-lg border-2 border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-colors">📞 Call Now</button>
        </Link>
        <Link href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1">
          <button className="w-full h-9 rounded-lg bg-success text-white text-sm font-semibold hover:bg-green-700 transition-colors">💬 WhatsApp</button>
        </Link>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: "Terms and conditions governing the use of PowerPro Electrical services and website.",
};

const effectiveDate = "May 1, 2026";

export default function TermsOfServicePage() {
  return (
    <>
      {/* Header */}
      <section aria-labelledby="terms-heading" className="bg-gradient-to-br from-primary to-primary-light text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-white/60">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Terms of Service</li>
            </ol>
          </nav>
          <h1 id="terms-heading" className="text-3xl lg:text-4xl font-black mb-3">Terms of Service</h1>
          <p className="text-white/70 text-sm">Effective Date: {effectiveDate}</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">

        <section aria-labelledby="scope">
          <h2 id="scope" className="text-xl font-black text-foreground mb-3">1. Scope of Services</h2>
          <p className="text-sm text-muted leading-relaxed">
            {siteConfig.name} provides residential and commercial electrical services including but not limited to wiring, panel upgrades, emergency repairs, EV charger installations, generator installations, and electrical inspections. All services are performed by licensed, insured electricians in accordance with applicable electrical codes and standards.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            This website and its contact forms are for service inquiry purposes only. Submission of a quote request does not constitute a binding service agreement. A written agreement is required before any work commences.
          </p>
        </section>

        <section aria-labelledby="user-obligations">
          <h2 id="user-obligations" className="text-xl font-black text-foreground mb-3">2. User Obligations</h2>
          <p className="text-sm text-muted leading-relaxed mb-3">By using this website or submitting a service inquiry, you agree to:</p>
          <ul className="space-y-2">
            {[
              "Provide accurate and complete information in all forms and communications",
              "Not submit false, misleading, or fraudulent service requests",
              "Grant reasonable access to your property for assessment and work",
              "Not use this website for any unlawful purpose",
              "Respect the intellectual property rights associated with this website",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted">
                <span className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true">•</span> {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="liability">
          <h2 id="liability" className="text-xl font-black text-foreground mb-3">3. Liability & Warranty Limitations</h2>
          <p className="text-sm text-muted leading-relaxed mb-3">
            {siteConfig.name} provides a workmanship warranty as described in your individual service agreement. This warranty covers defects in our labor and materials installed by us. It does not cover:
          </p>
          <ul className="space-y-2">
            {[
              "Damage caused by third parties, improper use, or acts of nature",
              "Pre-existing conditions not identified at the time of service",
              "Equipment supplied by the customer",
              "Normal wear and tear",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted">
                <span className="text-error mt-0.5 flex-shrink-0" aria-hidden="true">×</span> {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Our total liability for any claim arising from our services shall not exceed the amount paid for the specific service giving rise to the claim.
          </p>
        </section>

        <section aria-labelledby="governing-law">
          <h2 id="governing-law" className="text-xl font-black text-foreground mb-3">4. Governing Law & Disputes</h2>
          <p className="text-sm text-muted leading-relaxed">
            These terms are governed by the laws of the State of Illinois. Any dispute arising from these terms or your use of our services that cannot be resolved through good-faith negotiation shall be submitted to binding arbitration in Springfield, Illinois, under the American Arbitration Association rules.
          </p>
        </section>

        <section aria-labelledby="contact-terms">
          <h2 id="contact-terms" className="text-xl font-black text-foreground mb-3">5. Contact</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            For questions about these Terms of Service, contact us at:
          </p>
          <div className="rounded-xl border border-border bg-surface p-5 space-y-2 text-sm text-muted">
            <p><strong className="text-foreground">{siteConfig.name}</strong></p>
            <p>{siteConfig.address}</p>
            <p><Link href={`mailto:${siteConfig.email}`} className="text-primary underline underline-offset-2">{siteConfig.email}</Link></p>
            <p><Link href={siteConfig.phoneHref} className="text-primary underline underline-offset-2">{siteConfig.phone}</Link></p>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
          <Link href="/contact">
            <Button variant="primary">Accept & Continue to Contact</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contact Support</Button>
          </Link>
        </div>
      </article>
    </>
  );
}

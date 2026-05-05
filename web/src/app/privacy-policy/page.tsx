import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: "How PowerPro Electrical collects, uses, and protects your personal information.",
};

const effectiveDate = "May 1, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <section aria-labelledby="privacy-heading" className="bg-gradient-to-br from-primary to-primary-light text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-white/60">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Privacy Policy</li>
            </ol>
          </nav>
          <h1 id="privacy-heading" className="text-3xl lg:text-4xl font-black mb-3">Privacy Policy</h1>
          <p className="text-white/70 text-sm">Effective Date: {effectiveDate}</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-sm max-w-none space-y-10">

          <section aria-labelledby="data-collected">
            <h2 id="data-collected" className="text-xl font-black text-foreground mb-3">1. Data We Collect</h2>
            <p className="text-sm text-muted leading-relaxed mb-3">When you use our website or submit a quote request, we may collect the following personal information:</p>
            <ul className="space-y-2">
              {["Full name", "Phone number", "Email address (optional)", "City and service area", "Service description and project details", "Communication preferences"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted">
                  <span className="text-primary" aria-hidden="true">•</span> {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted leading-relaxed mt-3">We also collect non-personal data automatically, including browser type, IP address, and pages visited, via cookies and analytics tools.</p>
          </section>

          <section aria-labelledby="use-of-data">
            <h2 id="use-of-data" className="text-xl font-black text-foreground mb-3">2. How We Use Your Data</h2>
            <p className="text-sm text-muted leading-relaxed mb-3">We use your information to:</p>
            <ul className="space-y-2">
              {["Respond to your quote requests and schedule appointments", "Send appointment confirmations and follow-up communications", "Improve our website and service quality", "Send relevant service updates (with your consent)", "Comply with legal obligations"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted">
                  <span className="text-success" aria-hidden="true">✓</span> {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted leading-relaxed mt-3">We do not sell, rent, or trade your personal data to third parties for marketing purposes.</p>
          </section>

          <section aria-labelledby="third-party">
            <h2 id="third-party" className="text-xl font-black text-foreground mb-3">3. Third-Party Integrations</h2>
            <p className="text-sm text-muted leading-relaxed mb-3">We use the following trusted third-party services to operate our business:</p>
            <div className="rounded-xl border border-border bg-surface overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/5 border-b border-border">
                    <th className="px-4 py-3 text-left font-bold text-foreground">Service</th>
                    <th className="px-4 py-3 text-left font-bold text-foreground">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { service: "Supabase", purpose: "Secure lead data storage and operations" },
                    { service: "Resend", purpose: "Transactional email confirmations" },
                    { service: "Lark", purpose: "Internal team notifications" },
                    { service: "Google Analytics", purpose: "Website usage analytics (anonymized)" },
                  ].map((row) => (
                    <tr key={row.service}>
                      <td className="px-4 py-3 font-medium text-foreground">{row.service}</td>
                      <td className="px-4 py-3 text-muted">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="retention">
            <h2 id="retention" className="text-xl font-black text-foreground mb-3">4. Data Retention & Your Rights</h2>
            <p className="text-sm text-muted leading-relaxed mb-3">We retain your personal data for as long as necessary to fulfill the purposes outlined above or as required by law. You have the right to:</p>
            <ul className="space-y-2">
              {["Access the personal data we hold about you", "Request correction of inaccurate data", "Request deletion of your data (subject to legal obligations)", "Opt out of marketing communications at any time", "Lodge a complaint with your local data protection authority"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted">
                  <span className="text-primary" aria-hidden="true">•</span> {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="contact-privacy">
            <h2 id="contact-privacy" className="text-xl font-black text-foreground mb-3">5. Contact Us About Privacy</h2>
            <p className="text-sm text-muted leading-relaxed mb-4">
              For privacy-related requests or questions, please contact our Privacy Team:
            </p>
            <div className="rounded-xl border border-border bg-surface p-5 space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">{siteConfig.name}</strong></p>
              <p>{siteConfig.address}</p>
              <p><Link href={`mailto:${siteConfig.email}`} className="text-primary underline underline-offset-2">{siteConfig.email}</Link></p>
              <p><Link href={siteConfig.phoneHref} className="text-primary underline underline-offset-2">{siteConfig.phone}</Link></p>
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/contact">
            <Button variant="primary">Contact Privacy Team</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">← Back to Contact</Button>
          </Link>
        </div>
      </article>
    </>
  );
}

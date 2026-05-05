"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/config/site";

type FormState = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  { value: "residential-wiring", label: "Residential Wiring" },
  { value: "panel-upgrades", label: "Panel Upgrades" },
  { value: "emergency-repair", label: "Emergency Repair" },
  { value: "generator-installation", label: "Generator Installation" },
  { value: "ev-charger-installation", label: "EV Charger Installation" },
  { value: "commercial-electrical", label: "Commercial Electrical" },
  { value: "lighting-installation", label: "Lighting Installation" },
  { value: "electrical-inspection", label: "Electrical Inspection" },
  { value: "other", label: "Other / Not Sure" },
];

interface LeadCaptureFormProps {
  prefillService?: string;
  compact?: boolean;
  heading?: string;
}

export function LeadCaptureForm({ prefillService, compact = false, heading = "Get Your Free Quote" }: LeadCaptureFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [leadRef, setLeadRef] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const e: Record<string, string> = {};
    if (!data.get("name")) e.name = "Name is required";
    if (!data.get("phone")) e.phone = "Phone number is required";
    if (!data.get("city")) e.city = "City is required";
    if (!data.get("service")) e.service = "Please select a service";
    if (!data.get("message")) e.message = "Please describe your situation";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs = validate(data);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setState("submitting");

    // Simulate submission — replace with real API call to POST /api/leads
    await new Promise((r) => setTimeout(r, 1200));
    const success = Math.random() > 0.05; // 95% success for demo
    if (success) {
      setLeadRef("REQ-" + Math.random().toString(36).slice(2, 8).toUpperCase());
      setState("success");
    } else {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="rounded-xl border border-success/30 bg-success/10 p-6 text-center">
        <p className="text-4xl mb-3" aria-hidden="true">✅</p>
        <h3 className="font-black text-foreground text-lg mb-2">Request Submitted!</h3>
        <p className="text-muted text-sm mb-1">Your reference number is: <span className="font-bold text-foreground">{leadRef}</span></p>
        <p className="text-muted text-sm mb-4">We&apos;ll call you back within 1 hour to confirm your appointment.</p>
        <p className="text-xs text-muted">Need immediate help? <Link href={siteConfig.phoneHref} className="text-primary font-semibold underline">{siteConfig.phone}</Link></p>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="rounded-xl border border-error/30 bg-error/10 p-6 text-center">
        <p className="text-4xl mb-3" aria-hidden="true">⚠️</p>
        <h3 className="font-black text-foreground text-lg mb-2">Something went wrong</h3>
        <p className="text-muted text-sm mb-4">We couldn&apos;t process your request. Please try one of these options:</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => setState("idle")} variant="outline">Try Again</Button>
          <Link href={siteConfig.phoneHref}><Button variant="primary">📞 Call Us Now</Button></Link>
          <Link href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer"><Button variant="accent">💬 WhatsApp</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
      {!compact && (
        <div className="mb-5">
          <h2 className="font-black text-foreground text-xl mb-1">{heading}</h2>
          <p className="text-sm text-muted">Fill in your details and we&apos;ll get back to you within 1 hour.</p>
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Honeypot */}
        <input type="text" name="website" className="hidden" tabIndex={-1} aria-hidden="true" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Full Name" name="name" required placeholder="Jane Smith" error={errors.name} />
          <Input label="Phone Number" name="phone" type="tel" required placeholder="+1 (555) 000-0000" error={errors.phone} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Email" name="email" type="email" placeholder="jane@example.com" hint="Optional — for written confirmation" />
          <Input label="City" name="city" required placeholder="Springfield" error={errors.city} />
        </div>
        <Select
          label="Service Needed"
          name="service"
          required
          placeholder="Select a service..."
          options={serviceOptions}
          defaultValue={prefillService ?? ""}
          error={errors.service}
        />
        <Textarea
          label="Describe Your Situation"
          name="message"
          required
          placeholder="Tell us what's happening, any urgency level, and the best time to call..."
          error={errors.message}
          rows={4}
        />

        <Button type="submit" loading={state === "submitting"} size="lg" className="w-full font-black">
          {state === "submitting" ? "Submitting..." : "⚡ Submit Quote Request"}
        </Button>
        <p className="text-xs text-muted text-center">
          By submitting, you agree to our{" "}
          <Link href="/privacy-policy" className="text-primary underline underline-offset-2">Privacy Policy</Link>.
          We never share your details.
        </p>
      </form>
    </div>
  );
}

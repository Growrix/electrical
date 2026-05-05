export const siteConfig = {
  name: "PowerPro Electrical",
  tagline: "Licensed & Insured Electrical Experts",
  description:
    "Professional electrical services for homes and businesses across the region. Fast 24/7 response, certified technicians, transparent pricing and guaranteed work.",
  phone: "+1 (800) 555-0199",
  phoneHref: "tel:+18005550199",
  whatsapp: "https://wa.me/18005550199?text=Hi%2C%20I%20need%20electrical%20help",
  email: "info@powerpro-electrical.com",
  address: "123 Main Street, Springfield, IL 62701",
  hours: "24/7 Emergency · Office: Mon–Fri 8am–6pm",
  copyright: {
    text: (year: number) =>
      `© ${year} PowerPro Electrical. All right reserved. Built & Maintenece by`,
    brand: "Growrix OS",
    brandHref: "https://www.growrixos.com",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  mobileNav: [
    { label: "Home", href: "/", icon: "home" },
    { label: "Services", href: "/services", icon: "zap" },
    { label: "Contact", href: "/contact", icon: "phone" },
    { label: "WhatsApp", href: "https://wa.me/18005550199?text=Hi%2C%20I%20need%20electrical%20help", icon: "message-circle", external: true },
    { label: "Assistant", href: "#assistant", icon: "bot", isAssistant: true },
  ],
  serviceAreas: ["Springfield", "Shelbyville", "Capital City", "Ogdenville", "North Haverbrook"],
  certifications: ["Licensed Electrician", "NFPA 70E Compliant", "OSHA Certified", "BBB Accredited"],
  trustMetrics: [
    { value: "2,400+", label: "Jobs Completed" },
    { value: "4.9★", label: "Average Rating" },
    { value: "< 1hr", label: "Emergency Response" },
    { value: "15yr", label: "In Business" },
  ],
} as const;

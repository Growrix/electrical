export interface Service {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  pricingRange: string;
  responseWindow: string;
  trustBadge: string;
  icon: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  customerName: string;
  location: string;
  serviceUsed: string;
  rating: number;
  quote: string;
  date: string;
  category?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  location: string;
  category: string;
  propertyType: string;
  challenge: string;
  solution: string;
  outcome: string;
  duration: string;
  featured?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

export interface CatalogItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  features: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  certifications: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

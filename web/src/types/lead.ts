export type LeadSource = "form" | "whatsapp" | "bot" | "call";

export type LeadRequest = {
  name: string;
  phone: string;
  email?: string;
  city: string;
  service: string;
  message: string;
  source: LeadSource;
};

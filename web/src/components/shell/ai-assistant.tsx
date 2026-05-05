"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
}

const intentChips = [
  { label: "🚨 Emergency Help", response: "I'm so sorry to hear you have an emergency. Our team responds in under 1 hour, 24/7. Please call us immediately at " + siteConfig.phone + " or I can escalate this to a human agent now." },
  { label: "💰 Pricing Info", response: "Happy to help with pricing! Common services: Panel upgrade ($800–$3,500), Emergency repair ($200–$1,200), EV charger ($500–$2,000), Inspection ($150–$400). Want a specific quote? I can connect you with our team." },
  { label: "📅 Book Service", response: "Great — booking is easy! You can fill in our contact form and we'll call to confirm within 1 business hour, or call " + siteConfig.phone + " directly for same-day scheduling." },
  { label: "📍 Service Areas", response: "We currently serve: " + siteConfig.serviceAreas.join(", ") + ". Not sure if your address is covered? Just ask — we're always expanding!" },
];

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "0",
      role: "assistant",
      content: "Hi! I'm PowerPro's virtual assistant. I can help with pricing, booking, emergencies, and service info. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [escalated, setEscalated] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (content: string) => {
    if (!content.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: "user", content };
    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: "Thanks for your message! For the most accurate help, I recommend speaking with our team directly. You can call us at " + siteConfig.phone + " or submit your request via our contact form below.",
    };
    setMessages((prev) => [...prev, userMsg, botResponse]);
    setInput("");
  };

  const handleChip = (chip: typeof intentChips[0]) => {
    const userMsg: Message = { id: Date.now().toString(), role: "user", content: chip.label };
    const botMsg: Message = { id: (Date.now() + 1).toString(), role: "assistant", content: chip.response };
    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const handleEscalate = () => {
    setEscalated(true);
    const msg: Message = {
      id: Date.now().toString(),
      role: "assistant",
      content: "I've noted your request. A human agent will follow up with you shortly. You can also go directly to our contact form to submit your details and get a faster response.",
    };
    setMessages((prev) => [...prev, msg]);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="AI Assistant"
      className="fixed inset-0 lg:inset-auto lg:bottom-6 lg:right-20 z-50 lg:w-[340px] lg:max-w-[calc(100vw-2rem)] lg:rounded-2xl lg:h-[480px] border border-border bg-surface shadow-overlay flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-primary lg:rounded-t-2xl flex-shrink-0">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-secondary text-primary text-sm font-black">⚡</span>
          <div>
            <p className="text-sm font-bold text-white">PowerPro Assistant</p>
            <p className="text-[10px] text-white/60">Automated · Human escalation available</p>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close assistant"
          className="text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Disclosure */}
      <div className="px-3 py-2 bg-info/10 border-b border-border">
        <p className="text-xs text-info leading-snug">
          🤖 This is an automated assistant. For urgent help, call{" "}
          <Link href={siteConfig.phoneHref} className="font-semibold underline">{siteConfig.phone}</Link>.
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "flex",
              msg.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed",
                msg.role === "user"
                  ? "bg-foreground text-background rounded-br-sm"
                  : "bg-background text-foreground rounded-bl-sm border border-border"
              )}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Intent chips */}
      {messages.length <= 2 && (
        <div className="px-3 pb-2 flex flex-wrap gap-1.5">
          {intentChips.map((chip) => (
            <button
              key={chip.label}
              onClick={() => handleChip(chip)}
              className="text-xs px-2.5 py-1.5 rounded-pill bg-surface text-foreground hover:bg-border transition-colors border border-border"
            >
              {chip.label}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="px-3 py-2 border-t border-border space-y-2">
        {!escalated && (
          <button
            onClick={handleEscalate}
            className="text-xs text-muted hover:text-primary transition-colors underline underline-offset-2"
          >
            Talk to a human agent
          </button>
        )}
        <form
          onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
          className="flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            aria-label="Message to assistant"
            className="flex-1 h-8 rounded-lg border border-border bg-background text-foreground px-2.5 text-xs focus:outline-none focus:border-secondary"
          />
          <Button type="submit" size="sm" className="h-8 px-3 text-xs" disabled={!input.trim()}>
            Send
          </Button>
        </form>
        {escalated && (
          <Link href="/contact">
            <Button variant="accent" size="sm" className="w-full text-xs h-8">
              Go to Contact Form
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

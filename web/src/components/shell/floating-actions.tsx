"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface FloatingActionsProps {
  onAssistantOpen?: () => void;
}

export function FloatingActions({ onAssistantOpen }: FloatingActionsProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      aria-label="Quick contact actions"
      className="hidden lg:flex fixed right-4 bottom-6 z-40 flex-col items-end gap-3"
    >
      {/* Expandable action items */}
      <div
        className={cn(
          "flex flex-col items-end gap-3 transition-all duration-300 origin-bottom",
          expanded
            ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
            : "opacity-0 translate-y-4 pointer-events-none scale-95"
        )}
        aria-hidden={!expanded}
      >
        {/* AI Assistant */}
        {onAssistantOpen && (
          <button
            onClick={() => { onAssistantOpen(); setExpanded(false); }}
            aria-label="Open AI assistant"
            tabIndex={expanded ? 0 : -1}
            className="flex items-center gap-2 bg-surface border border-border text-foreground shadow-lg hover:bg-border pl-3 pr-4 py-2.5 rounded-pill transition-all text-sm font-semibold hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-secondary text-secondary-foreground text-base" aria-hidden="true">🤖</span>
            Ask Assistant
          </button>
        )}

        {/* Call */}
        <a
          href={siteConfig.phoneHref}
          aria-label={`Call ${siteConfig.phone}`}
          tabIndex={expanded ? 0 : -1}
          className="flex items-center gap-2 bg-surface border border-border text-foreground shadow-lg hover:bg-border pl-3 pr-4 py-2.5 rounded-pill transition-all text-sm font-semibold hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-secondary/20 text-secondary" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </span>
          Call Now
        </a>

        {/* WhatsApp */}
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          tabIndex={expanded ? 0 : -1}
          className="flex items-center gap-2 bg-success text-white shadow-lg hover:bg-green-700 pl-3 pr-4 py-2.5 rounded-pill transition-all text-sm font-semibold hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </span>
          WhatsApp
        </a>
      </div>

      {/* Toggle FAB */}
      <button
        onClick={() => setExpanded(!expanded)}
        aria-label={expanded ? "Close quick contact menu" : "Open quick contact menu"}
        aria-expanded={expanded}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-accent text-white shadow-overlay hover:bg-orange-600 transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        {expanded ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" stroke="none" />
          </svg>
        )}
      </button>
    </div>
  );
}

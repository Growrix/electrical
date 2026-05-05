"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnnouncementStrip } from "@/components/shell/announcement-strip";
import { Header } from "@/components/shell/header";
import { Footer } from "@/components/shell/footer";
import { MobileBottomNav } from "@/components/shell/mobile-bottom-nav";
import { FloatingActions } from "@/components/shell/floating-actions";
import { AIAssistant } from "@/components/shell/ai-assistant";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        {/* Skip link */}
        <a href="#main-content" className="skip-link">Skip to main content</a>

        <AnnouncementStrip />
        <Header />

        <main id="main-content" className="flex-1 flex flex-col pb-16 lg:pb-0">
          {children}
        </main>

        <Footer />

        {/* Mobile bottom nav */}
        <MobileBottomNav onAssistantOpen={() => setAssistantOpen(true)} />

        {/* Floating call/WhatsApp */}
        <FloatingActions />

        {/* AI Assistant */}
        <AIAssistant isOpen={assistantOpen} onClose={() => setAssistantOpen(false)} />

        {/* AI assistant button (desktop) */}
        {!assistantOpen && (
          <button
            onClick={() => setAssistantOpen(true)}
            aria-label="Open AI assistant"
            className="fixed bottom-6 right-20 z-40 hidden lg:flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-pill shadow-lg hover:bg-primary-light transition-all hover:scale-105 text-sm font-semibold"
          >
            <span aria-hidden="true">🤖</span> Ask Assistant
          </button>
        )}
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayoutInner>{children}</RootLayoutInner>;
}

"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnnouncementStrip } from "@/components/shell/announcement-strip";
import { Header } from "@/components/shell/header";
import { Footer } from "@/components/shell/footer";
import { MobileBottomNav } from "@/components/shell/mobile-bottom-nav";
import { FloatingActions } from "@/components/shell/floating-actions";
import { AIAssistant } from "@/components/shell/ai-assistant";
import { ThemeProvider } from "@/providers/theme-provider";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Inline script injected into <head> — runs synchronously before paint to
 * restore the user's saved theme and prevent any flash of wrong theme (FOWT).
 * Must be a raw string so it is never touched by React hydration.
 */
const themeInitScript = `
(function(){
  try {
    var stored = localStorage.getItem('powerpro-theme');
    var isDark =
      stored === 'dark' ||
      ((!stored || stored === 'system') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) document.documentElement.classList.add('dark');
  } catch(e) {}
})();
`;

function AppShell({ children }: { children: React.ReactNode }) {
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <body className="min-h-full flex flex-col bg-background text-foreground">
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

      {/* Floating collapsible FAB: WhatsApp, Call, AI Assistant */}
      <FloatingActions onAssistantOpen={() => setAssistantOpen(true)} />

      {/* AI Assistant drawer */}
      <AIAssistant isOpen={assistantOpen} onClose={() => setAssistantOpen(false)} />
    </body>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-flash script: runs before first paint to restore theme */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <ThemeProvider>
        <AppShell>{children}</AppShell>
      </ThemeProvider>
    </html>
  );
}

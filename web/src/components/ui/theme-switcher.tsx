"use client";
import { useTheme } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";

interface ThemeSwitcherProps {
  className?: string;
  /** compact = icon-only, full = icon + label */
  variant?: "compact" | "full";
}

export function ThemeSwitcher({ className, variant = "compact" }: ThemeSwitcherProps) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      title={isDark ? "Light mode" : "Dark mode"}
      className={cn(
        "relative flex items-center gap-2 rounded-lg transition-colors select-none cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
        variant === "compact"
          ? "w-9 h-9 justify-center bg-surface border border-border hover:border-secondary hover:bg-secondary/10 text-foreground"
          : "px-3 h-9 justify-start bg-surface border border-border hover:border-secondary hover:bg-secondary/10 text-foreground text-sm font-medium",
        className
      )}
    >
      {/* Track */}
      <span
        aria-hidden="true"
        className={cn(
          "relative flex-shrink-0 flex items-center justify-center",
          variant === "compact" ? "w-5 h-5" : "w-4 h-4"
        )}
      >
        {/* Sun icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            "absolute inset-0 w-full h-full transition-all duration-base text-secondary",
            isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
          )}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
        {/* Moon icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            "absolute inset-0 w-full h-full transition-all duration-base text-secondary",
            isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
          )}
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>

      {variant === "full" && (
        <span className="text-foreground">{isDark ? "Light mode" : "Dark mode"}</span>
      )}
    </button>
  );
}

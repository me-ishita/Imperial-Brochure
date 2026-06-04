import { ReactNode } from "react";

interface MetallicCardProps {
  children: ReactNode;
  className?: string;
  goldAccent?: boolean;
  steelAccent?: boolean;
}

export function MetallicCard({ children, className = "", goldAccent = false, steelAccent = false }: MetallicCardProps) {
  const glowColor = goldAccent
    ? "shadow-[0_0_40px_rgba(201,169,110,0.08),inset_0_1px_0_rgba(201,169,110,0.2)]"
    : steelAccent
    ? "shadow-[0_0_40px_rgba(74,127,165,0.08),inset_0_1px_0_rgba(74,127,165,0.2)]"
    : "shadow-[0_0_30px_rgba(201,169,110,0.05),inset_0_1px_0_rgba(201,169,110,0.12)]";

  const borderColor = goldAccent
    ? "border-[rgba(201,169,110,0.25)]"
    : steelAccent
    ? "border-[rgba(74,127,165,0.25)]"
    : "border-[rgba(201,169,110,0.15)]";

  return (
    <div
      className={`rounded-2xl border bg-card backdrop-blur-sm relative overflow-hidden ${borderColor} ${glowColor} ${className}`}
    >
      {/* Subtle metallic sheen at top */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-60"
        style={{
          background: goldAccent
            ? "linear-gradient(90deg, transparent 0%, rgba(201,169,110,0.6) 50%, transparent 100%)"
            : steelAccent
            ? "linear-gradient(90deg, transparent 0%, rgba(74,127,165,0.6) 50%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(201,169,110,0.4) 50%, transparent 100%)",
        }}
      />
      {children}
    </div>
  );
}

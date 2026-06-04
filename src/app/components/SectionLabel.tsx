interface SectionLabelProps {
  children: string;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span
      className="inline-block tracking-[0.18em] uppercase mb-4"
      style={{
        fontSize: "0.65rem",
        fontFamily: "Inter, sans-serif",
        color: "var(--gold)",
        letterSpacing: "0.18em",
      }}
    >
      {children}
    </span>
  );
}

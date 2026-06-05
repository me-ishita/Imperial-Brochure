interface SectionLabelProps {
  children: string;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span
      className="inline-block tracking-[0.18em] uppercase mb-4"
      style={{
        fontSize: "0.75rem",
        fontFamily: "Inter, sans-serif",
        color: "#d4a017",
        letterSpacing: "0.18em",
        fontWeight: 700,
      }}
    >
      {children}
    </span>
  );
}

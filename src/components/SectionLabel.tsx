import { Sparkles } from "lucide-react";

interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-gold font-semibold tracking-widest uppercase text-xs mb-4 ${className}`}
    >
      <span className="w-8 h-px bg-gold/60" />
      {children}
      <span className="w-8 h-px bg-gold/60" />
    </span>
  );
}

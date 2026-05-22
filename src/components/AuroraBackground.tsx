export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora gradient blobs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gold/20 blur-[120px] animate-blob" />
      <div
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-teal/20 blur-[120px] animate-blob"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-gold-dark/20 blur-[120px] animate-blob"
        style={{ animationDelay: "6s" }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100% / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      {/* Animated horizontal beam */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent animate-beam" />
    </div>
  );
}

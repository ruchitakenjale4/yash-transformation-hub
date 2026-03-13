import { Eye, Heart, Lightbulb, Cog, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    letter: "D",
    title: "Digital Awareness",
    description: "Recognize and understand your digital consumption patterns and their impact on your mind.",
  },
  {
    icon: Heart,
    letter: "E",
    title: "Emotional Reset",
    description: "Release emotional baggage tied to digital habits and rebuild your emotional foundation.",
  },
  {
    icon: Lightbulb,
    letter: "T",
    title: "Thought Clarity",
    description: "Clear mental fog and develop sharp, focused thinking for better decision-making.",
  },
  {
    icon: Cog,
    letter: "O",
    title: "Optimal Habits",
    description: "Replace destructive digital habits with high-performance routines for lasting change.",
  },
  {
    icon: Rocket,
    letter: "X",
    title: "Execution System",
    description: "Implement a proven system to sustain your transformation and achieve peak performance.",
  },
];

export function DetoxFrameworkSection() {
  return (
    <section className="py-24 bg-hero-gradient text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">The Method</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            The Mind Detox Method
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed">
            A five-pillar framework designed to rewire your relationship with technology 
            and unlock your highest potential.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl border border-primary-foreground/10 hover:border-gold/30 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-gold" />
              </div>
              <span className="text-4xl font-bold text-gold/30 block mb-2">{pillar.letter}</span>
              <h3 className="text-base font-semibold mb-2">{pillar.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

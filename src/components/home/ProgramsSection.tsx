import { Link } from "react-router-dom";
import { ArrowRight, Zap, User, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Zap,
    title: "Digital Detox Experience",
    description: "Signature transformation program helping people break digital addiction and rebuild focus, clarity, and purpose.",
    link: "/services#detox",
    tag: "Signature Program",
  },
  {
    icon: User,
    title: "Personal Mind Detox Coaching",
    description: "1-on-1 coaching designed to help individuals overcome limiting beliefs, achieve clarity, and unlock their potential.",
    link: "/services#one-to-one",
    tag: "1-on-1 Coaching",
  },
  {
    icon: Building,
    title: "Corporate Peak Performance Training",
    description: "Workshops for organizations to improve leadership, emotional intelligence, productivity, and workplace resilience.",
    link: "/services#corporate",
    tag: "For Organizations",
  },
];

export function ProgramsSection() {
  return (
    <section className="py-24 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">Programs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
            Choose Your Transformation Path
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-background border border-border/50 hover:border-gold/30 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <span className="inline-block text-xs font-semibold text-gold bg-gold/10 rounded-full px-3 py-1 mb-5 w-fit">
                {program.tag}
              </span>
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                <program.icon className="w-6 h-6 text-muted-foreground group-hover:text-gold transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{program.description}</p>
              <Button variant="outline" size="sm" className="w-fit" asChild>
                <Link to={program.link}>
                  Learn More <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

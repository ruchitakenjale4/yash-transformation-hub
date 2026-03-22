import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

const painPoints = [
  {
    problem: "Stuck in a career rut?",
    detail: "Feeling unfulfilled despite working hard, with no clarity on what's next.",
  },
  {
    problem: "Overwhelmed by stress & anxiety?",
    detail: "Constantly firefighting emotions, losing sleep, and burning out.",
  },
  {
    problem: "Can't break bad habits?",
    detail: "Digital addiction, procrastination, and self-sabotage holding you back.",
  },
  {
    problem: "Leadership feels lonely?",
    detail: "Managing teams without the emotional tools to inspire and connect.",
  },
];

const audiences = [
  "Corporate Professionals seeking peak performance",
  "Entrepreneurs battling decision fatigue",
  "Students struggling with focus & direction",
  "Leaders who want to inspire, not just manage",
];

export function PainPoints() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Pain points */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase mb-6">
                <AlertTriangle className="w-3.5 h-3.5" />
                Sound Familiar?
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-10 leading-tight">
                Are These Holding You Back?
              </h2>
            </ScrollReveal>

            <div className="space-y-5">
              {painPoints.map((point, index) => (
                <ScrollReveal key={index} delay={index * 0.08}>
                  <div className="glass-card rounded-2xl p-5 hover:border-gold/40 transition-all duration-300 group hover:-translate-y-0.5">
                    <h3 className="font-semibold text-foreground text-lg mb-1 group-hover:text-gold transition-colors">
                      {point.problem}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {point.detail}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Solution + audience */}
          <div>
            <ScrollReveal delay={0.2}>
              <div className="inline-flex items-center gap-2 bg-gold/10 text-gold rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase mb-6">
                <Zap className="w-3.5 h-3.5" />
                The Solution
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                You Don't Need More Motivation — You Need a System
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Dr. Yash's science-backed coaching goes beyond surface-level advice.
                We rewire your mindset, build emotional resilience, and create
                actionable frameworks that deliver <strong className="text-foreground">measurable, lasting results</strong>.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-muted rounded-2xl p-6 mb-8">
                <p className="font-semibold text-foreground text-sm tracking-wider uppercase mb-4">
                  Built For:
                </p>
                <ul className="space-y-3">
                  {audiences.map((audience, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/80">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                      <span className="text-sm font-medium">{audience}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Get Your Free Strategy Call <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <p className="text-muted-foreground text-xs mt-3">
                ✦ No commitment • 20-minute call • 100% free ✦
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

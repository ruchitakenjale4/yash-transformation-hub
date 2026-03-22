import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

export function MidPageCTA() {
  return (
    <section className="py-16 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(42_60%_48%/0.08)_0%,transparent_70%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                Stop Overthinking. Start Transforming.
              </h2>
              <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                <span className="inline-flex items-center gap-2 text-gold-light text-sm font-medium">
                  <Clock className="w-4 h-4" /> 20-min free call
                </span>
                <span className="inline-flex items-center gap-2 text-primary-foreground/60 text-sm font-medium">
                  <Users className="w-4 h-4" /> 1000+ lives changed
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-semibold">3 spots left this week</span>
                </span>
              </div>
            </div>
            <Button variant="gold" size="lg" asChild className="shrink-0">
              <Link to="/contact">
                Book My Free Call <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

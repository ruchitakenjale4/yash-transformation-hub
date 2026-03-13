import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-1.5 mb-8 animate-fade-up opacity-0 stagger-1">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse-slow" />
              <span className="text-xs font-medium text-muted-foreground">Mind Detox & Peak Performance Coach</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight animate-fade-up opacity-0 stagger-2">
              Break Free From Digital Distraction & Unlock Your{" "}
              <span className="text-gradient">True Potential</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed animate-fade-up opacity-0 stagger-3">
              Mind Detox coaching and training programs helping students, professionals, 
              and organizations reclaim focus, clarity, and peak performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 stagger-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Book Free Clarity Call <ArrowRight className="ml-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/services#detox">
                  Explore Digital Detox
                </Link>
              </Button>
            </div>
          </div>

          {/* Video placeholder */}
          <div className="animate-fade-up opacity-0 stagger-5">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/qzesyv07PyI"
                title="Dr. Yash Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-border/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

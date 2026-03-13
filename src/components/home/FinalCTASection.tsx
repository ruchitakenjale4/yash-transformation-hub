import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
            Take Control of Your Mind <br />
            <span className="text-gradient">Before Your Phone Does.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
            The first step towards transformation is a conversation. Book your free discovery 
            call and explore how Mind Detox can help you reclaim your life.
          </p>
          <p className="text-gold font-semibold text-sm mb-8">
            ✦ Free 20-minute clarity call • No commitment required ✦
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">
                Schedule Your Free Clarity Call <ArrowRight className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

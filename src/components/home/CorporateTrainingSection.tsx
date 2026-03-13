import { Link } from "react-router-dom";
import { ArrowRight, Users, TrendingUp, Shield, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: Brain, title: "Leadership Development", description: "Build confident, emotionally intelligent leaders." },
  { icon: Shield, title: "Workplace Resilience", description: "Equip teams to handle stress and change effectively." },
  { icon: TrendingUp, title: "Productivity Boost", description: "Reduce digital distractions and improve focus." },
  { icon: Users, title: "Team Cohesion", description: "Strengthen collaboration and communication." },
];

export function CorporateTrainingSection() {
  return (
    <section className="py-24 bg-hero-gradient text-primary-foreground relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">For Organizations</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Corporate Peak Performance Training
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Tailored workshops and training programs focused on leadership development, 
              emotional intelligence, and workplace resilience — helping your organization 
              thrive in the digital age.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Invite Dr. Yash for Training <ArrowRight className="ml-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="p-5 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-300">
                <b.icon className="w-6 h-6 text-gold mb-3" />
                <h3 className="text-sm font-semibold mb-1">{b.title}</h3>
                <p className="text-xs text-primary-foreground/60 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

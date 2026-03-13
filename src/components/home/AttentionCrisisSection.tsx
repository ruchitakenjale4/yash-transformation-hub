import { Smartphone, Brain, TrendingDown, AlertTriangle } from "lucide-react";

const crisisPoints = [
  {
    icon: Smartphone,
    stat: "4+ hrs",
    label: "Average daily screen time",
    description: "Most people spend over 4 hours a day mindlessly scrolling, losing precious time for growth.",
  },
  {
    icon: Brain,
    stat: "47%",
    label: "Reduced attention span",
    description: "Digital overload is rewiring our brains, making it harder to focus on what truly matters.",
  },
  {
    icon: TrendingDown,
    stat: "3x",
    label: "Increased anxiety",
    description: "Social media comparison and notification addiction triple stress and anxiety levels.",
  },
  {
    icon: AlertTriangle,
    stat: "68%",
    label: "Feel unfocused",
    description: "Majority of professionals report inability to concentrate on deep, meaningful work.",
  },
];

export function AttentionCrisisSection() {
  return (
    <section className="py-24 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">The Problem</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
            The Hidden Crisis of the Digital Age
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Smartphones, social media, and digital overload are reducing focus, increasing anxiety, 
            and hurting productivity. Transformation begins with reclaiming your attention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {crisisPoints.map((point, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                <point.icon className="w-6 h-6 text-muted-foreground group-hover:text-gold transition-colors" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">{point.stat}</p>
              <p className="text-sm font-semibold text-gold mb-2">{point.label}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

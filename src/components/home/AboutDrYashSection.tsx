import { Award, BookOpen, Brain, Briefcase, Heart, Lightbulb, GraduationCap } from "lucide-react";
import drYash from "@/assets/dr-yash.png";

const credentials = [
  "BAMS (Bachelor of Ayurvedic Medicine & Surgery)",
  "PG Diploma in Psychological Counseling",
  "Certified Life Coach",
  "NLP Practitioner",
  "Career Coach & Business Coach",
  "Diploma in Modern Applied Psychology",
];

export function AboutDrYashSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-muted shadow-xl max-w-md mx-auto">
              <img
                src={drYash}
                alt="Dr. Yash Kenjale - Mind Detox Coach"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating credential badge */}
            <div className="absolute -bottom-4 -right-4 lg:right-0 bg-background border border-border rounded-2xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">1000+</p>
                <p className="text-xs text-muted-foreground">Lives Transformed</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">About</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
              Dr. Yash Kenjale
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              From a shy dreamer to a transformation coach helping 1000+ individuals unlock 
              their potential — Dr. Yash's journey is a testament to the power of mindset change 
              and self-mastery.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As a psychological counselor, Mind Detox expert, and peak performance coach, 
              Dr. Yash combines ancient wisdom with modern psychology to create lasting 
              transformation. His unique approach has helped students overcome exam anxiety, 
              professionals break through career plateaus, and organizations build resilient teams.
            </p>

            <div className="space-y-3">
              {credentials.map((cred, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span className="text-sm text-foreground font-medium">{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

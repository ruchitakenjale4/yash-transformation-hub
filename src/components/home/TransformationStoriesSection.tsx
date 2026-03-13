import { Quote } from "lucide-react";
import shreyaImg from "@/assets/shreya.jpg";
import rutujaImg from "@/assets/rutuja.jpg";
import shardulImg from "@/assets/shardul.jpg";

const testimonials = [
  {
    name: "Shardul Jadhav",
    role: "Indigo Airlines (Comm)",
    image: shardulImg,
    content:
      "After completing BCS, I wasn't selected in any campus drive. But after attending Reboot Yourself, my confidence skyrocketed. I manifested a job and got placed at Indigo Airlines. Dr. Yash's guidance inspired me to start pursuing an MBA while working!",
  },
  {
    name: "Shreya Ghule",
    role: "CA Aspirant",
    image: shreyaImg,
    content:
      "After failing CA 2nd year twice and battling low self-esteem, I had almost given up. Reboot Yourself gave me mental clarity and emotional strength. I've now completed my CA academics and confidently intern at a CA firm.",
  },
  {
    name: "Rutuja Nagmode",
    role: "Team Lead, Tata Technologies",
    image: rutujaImg,
    content:
      "After battling TB, failing engineering, and facing rejection, I felt completely defeated. Reboot Yourself changed my mindset. I completed engineering, got placed at Tata Technologies, became a team lead, got married, and now own a home in Pune.",
  },
];

export function TransformationStoriesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">Results</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
            Real People. Real Transformations.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t, i) => (
            <div key={i} className="group p-6 rounded-2xl border border-border/50 hover:border-gold/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-5">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <Quote className="w-8 h-8 text-gold/20 mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed">"{t.content}"</p>
            </div>
          ))}
        </div>

        {/* Video Testimonial */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/qzesyv07PyI"
                title="Client Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

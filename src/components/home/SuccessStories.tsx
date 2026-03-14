import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import shreyaImg from "@/assets/shreya.jpg";
import rutujaImg from "@/assets/rutuja.jpg";
import shardulImg from "@/assets/shardul.jpg";

const testimonials = [
  {
    name: "Shardul Jadhav",
    role: "Indigo Airlines (Comm)",
    image: shardulImg,
    content:
      "After completing BCS, I wasn't selected in any campus drive. I struggled to find a job. But after attending Reboot Yourself, my confidence skyrocketed. I manifested a job in communication, and soon got placed at Indigo Airlines as a telecom communicator. Dr. Yash's guidance inspired me so much that I've now started pursuing an MBA while working!",
  },
  {
    name: "Shreya Ghule",
    role: "CA Aspirant",
    image: shreyaImg,
    content:
      "After failing CA 2nd year twice and constantly battling acidity, headaches, and low self-esteem, I had almost given up. Reboot Yourself gave me mental clarity, emotional strength, and surprisingly, even my health started improving. I've now completed my CA academics and confidently intern at a CA firm. This workshop truly helped me find myself again.",
  },
  {
    name: "Rutuja Nagmode",
    role: "Team Lead (Tata Tech)",
    image: rutujaImg,
    content:
      "After battling TB, failing 2nd year engineering, and facing rejection in my relationship, I felt completely defeated. Reboot Yourself changed my mindset, restored my confidence, and shifted everything. I completed engineering, got placed at Tata Technologies, became a team lead within a year, convinced my parents, got married, and now own a home in Pune.",
  },
];

export function SuccessStories() {
  return (
    <section className="py-28 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionLabel>Success Stories</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Real Transformations, Real Results
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from those who took the leap and transformed their lives.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.12}>
              <div className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-500 relative group hover:-translate-y-1 h-full flex flex-col">
                {/* Header with photo and name */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold/40 shadow-gold"
                  />
                  <div>
                    <p className="font-semibold text-foreground text-sm tracking-wide">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gold/80">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-gold/20 mb-3" />
                <p className="text-foreground/80 leading-relaxed text-sm flex-1">
                  "{testimonial.content}"
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Video Testimonial */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-500">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4 text-center">
                Client Video Testimonial
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden">
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
        </ScrollReveal>
      </div>
    </section>
  );
}

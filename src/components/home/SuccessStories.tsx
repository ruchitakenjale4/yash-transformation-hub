import { Sparkles, Quote } from "lucide-react";
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
    <section className="py-24 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-gold font-semibold mb-4 tracking-widest uppercase text-sm">
            <Sparkles size={18} />
            Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Real Transformations, Real Results
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-500 relative group hover:-translate-y-1"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover absolute top-6 right-6 border-4 border-gold shadow-gold transition-transform duration-300 group-hover:scale-110"
              />
              <Quote className="w-10 h-10 text-gold/30 mb-4 mt-12" />
              <p className="text-foreground mb-6 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>
              <div className="premium-divider mb-4" />
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-foreground uppercase text-sm tracking-wide">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

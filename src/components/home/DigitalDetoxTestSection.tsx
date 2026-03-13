import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

const questions = [
  "Do you check your phone within the first 5 minutes of waking up?",
  "Do you feel anxious when your phone battery is low?",
  "Do you scroll social media for more than 2 hours daily?",
  "Do you find it hard to focus on one task for 30 minutes?",
  "Do you feel the need to respond to notifications immediately?",
];

export function DigitalDetoxTestSection() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const yesCount = Object.values(answers).filter(Boolean).length;

  const getResult = () => {
    if (yesCount <= 1) return { level: "Low", color: "text-teal", message: "You have a healthy relationship with technology." };
    if (yesCount <= 3) return { level: "Moderate", color: "text-gold", message: "You show signs of digital dependency. A Mind Detox can help." };
    return { level: "High", color: "text-destructive", message: "You're heavily dependent on your phone. A Digital Detox is essential." };
  };

  return (
    <section className="py-24 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-gold" />
            </div>
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">Self Assessment</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              How Addicted Are You to Your Smartphone?
            </h2>
            <p className="text-muted-foreground">Take this 2-minute test to find out.</p>
          </div>

          {!submitted ? (
            <div className="bg-background rounded-2xl border border-border/50 p-8 shadow-sm">
              <div className="space-y-5 mb-8">
                {questions.map((q, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <span className="text-sm font-bold text-gold mt-0.5">{i + 1}.</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground mb-3">{q}</p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setAnswers({ ...answers, [i]: true })}
                          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                            answers[i] === true
                              ? "bg-gold text-accent-foreground"
                              : "bg-background border border-border text-muted-foreground hover:border-gold/50"
                          }`}
                        >
                          Yes
                        </button>
                        <button
                          onClick={() => setAnswers({ ...answers, [i]: false })}
                          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                            answers[i] === false
                              ? "bg-primary text-primary-foreground"
                              : "bg-background border border-border text-muted-foreground hover:border-primary/50"
                          }`}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {answeredCount === 5 && (
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email for detailed results"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 px-4 rounded-full border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                  <Button
                    variant="gold"
                    size="lg"
                    className="w-full"
                    onClick={() => setSubmitted(true)}
                  >
                    Take the Test <ArrowRight className="ml-1" />
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-background rounded-2xl border border-border/50 p-8 shadow-sm text-center">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">Your Digital Addiction Level</p>
                <p className={`text-4xl font-bold ${getResult().color}`}>{getResult().level}</p>
              </div>
              <p className="text-muted-foreground mb-6">{getResult().message}</p>
              <Button variant="gold" size="lg" asChild>
                <a href="https://wa.me/919923715905?text=I%20just%20took%20the%20Digital%20Detox%20test%20and%20want%20to%20learn%20more%20about%20the%20Mind%20Detox%20program." target="_blank" rel="noopener noreferrer">
                  Get Your Personalized Plan <ArrowRight className="ml-1" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

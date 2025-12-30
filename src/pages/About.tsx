import { Link } from "react-router-dom";
import { Sparkles, Target, Eye, Heart, CheckCircle, ArrowRight, Award, GraduationCap, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const values = [
  {
    icon: Heart,
    title: "Holistic Well-being",
    description: "We address mental, emotional, physical, and spiritual dimensions for complete transformation.",
  },
  {
    icon: Target,
    title: "Sustainable Growth",
    description: "Our focus is on deep, lasting change—not temporary motivation or quick fixes.",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description: "Every program is tailored to individual needs, because transformation is personal.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We are committed to the highest standards in coaching, training, and psychological consulting.",
  },
];

const credentials = [
  "BAMS (Bachelor of Ayurvedic Medicine and Surgery)",
  "Postgraduate Diploma in Psychological Counseling",
  "Certified Life Coach",
  "NLP Practitioner",
  "Certified Career Coach",
  "Certified Business Coach",
  "Diploma in Modern Applied Psychology",
];

const whoWeServe = [
  {
    icon: Briefcase,
    title: "Corporate Professionals & Leaders",
    description: "Strengthening leadership skills, emotional intelligence, and workplace efficiency",
  },
  {
    icon: GraduationCap,
    title: "Students & Young Adults",
    description: "Developing confidence, self-awareness, and career clarity",
  },
  {
    icon: Users,
    title: "Entrepreneurs & Business Owners",
    description: "Cultivating vision, decision-making skills, and sustainable growth strategies",
  },
  {
    icon: Heart,
    title: "Individuals Committed to Growth",
    description: "Breaking negative patterns, overcoming fears, and stepping into personal power",
  },
];

export default function About() {
  return (
    <Layout>
      <title>About Y.A.S.H. | Holistic Personal Development & Transformational Coaching</title>
      <meta
        name="description"
        content="Learn about Y.A.S.H. and Dr. Yash Rajesh Kenjale's mission to help individuals achieve holistic well-being through transformational coaching and personal development."
      />

      {/* Hero Section */}
      <section className="pt-12 pb-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-gold font-medium mb-4">
              <Sparkles size={18} />
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empowering You to{" "}
              <span className="text-gradient">Unleash the Infinity</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Yugandhar Academic Services for Harmony (Y.A.S.H.), we believe that true transformation 
              is not a luxury—it is essential. We exist to break patterns of stress, self-doubt, and 
              stagnation, empowering individuals to take charge of their lives.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-hero-gradient text-primary-foreground">
              <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-primary-foreground/90 leading-relaxed">
                To establish health in every aspect of life and see individuals operating at their 
                highest potential—not just in their careers, but in their overall well-being and 
                personal fulfillment.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To create empowering spaces where people can explore, heal, and grow, strengthening 
                every aspect of their mental, emotional, and professional health so they can unleash 
                their infinite potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-gold font-medium mb-4">
              <Sparkles size={18} />
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Pillars of Our Approach
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dr. Yash Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 text-gold font-medium mb-4">
                <Sparkles size={18} />
                Meet the Founder
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Dr. Yash Rajesh Kenjale
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Dr. Yash is a visionary coach, psychological counselor, and transformation expert 
                dedicated to helping individuals break free from limiting patterns and unleash their 
                infinite potential.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With a strong foundation in psychology, coaching, and leadership development, Dr. Yash 
                has empowered more than <strong className="text-foreground">1,000+ individuals</strong> to 
                achieve breakthroughs in their personal growth, careers, and emotional well-being.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                From Shy Dreamer to Empowering Leader
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Once a reserved child who struggled with self-expression, Dr. Yash discovered the power 
                of mindset, communication, and self-mastery at an early age. At just 15, he conducted 
                his first corporate training, speaking to an audience twice his age. Since then, he has 
                led corporate trainings, career coaching sessions, and emotional well-being programs.
              </p>

              <h4 className="font-semibold text-foreground mb-3">Credentials & Expertise:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-1" />
                    <span className="text-muted-foreground text-sm">{credential}</span>
                  </li>
                ))}
              </ul>

              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">Connect with Dr. Yash</Link>
              </Button>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl bg-hero-gradient flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 rounded-full bg-gold/20 mx-auto mb-6 flex items-center justify-center">
                      <span className="font-display text-5xl font-bold text-gold">DY</span>
                    </div>
                    <p className="font-display text-2xl font-semibold text-primary-foreground mb-2">
                      Dr. Yash Kenjale
                    </p>
                    <p className="text-primary-foreground/70">
                      Founder & Lead Coach
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 px-6 py-4 bg-gold rounded-xl shadow-lg">
                  <p className="font-display text-xl font-bold text-foreground">1000+</p>
                  <p className="text-foreground/80 text-sm">Lives Transformed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-gold font-medium mb-4">
              <Sparkles size={18} />
              Who We Serve
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              For Those Who Refuse to Settle
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our programs are designed for individuals who seek meaningful, sustainable change 
              and are ready to invest in their growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whoWeServe.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Because Your Potential is Limitless
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              At Y.A.S.H., we don't just inspire change—we create it. Ready to break through 
              your limitations and step into your power?
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">
                Explore Our Services <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

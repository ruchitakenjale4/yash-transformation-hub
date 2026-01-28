import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Users,
  Brain,
  Heart,
  Target,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { number: "1000+", label: "Lives Transformed" },
  { number: "21K+", label: "Views" },
  { number: "20+", label: "Events Organised" },
  { number: "10+", label: "Years Experience" },
];

const features = [
  {
    icon: Brain,
    title: "Mindset Mastery",
    description:
      "Shift from limiting beliefs to a growth-oriented, success-driven perspective.",
  },
  {
    icon: Heart,
    title: "Emotional Intelligence",
    description:
      "Master your emotions and navigate life's challenges with confidence.",
  },
  {
    icon: Target,
    title: "Career Clarity",
    description:
      "Gain actionable strategies for professional growth and business success.",
  },
  {
    icon: Users,
    title: "Leadership Excellence",
    description:
      "Enhance team performance and develop transformational leadership skills.",
  },
];

const detoxFramework = [
  {
    letter: "D",
    word: "Dopamine Hacking",
    description: "Rewire how your brain seeks reward, so cravings stop running your behaviour",
  },
  {
    letter: "E",
    word: "Environment Change",
    description: "Shape your surroundings—digital and physical—to support focus over distraction",
  },
  {
    letter: "T",
    word: "Target Setting",
    description: "Bring clarity to what you're working toward, so effort feels meaningful",
  },
  {
    letter: "O",
    word: "Optimising Your Mind",
    description: "Work with belief systems and emotional patterns that decide if change feels safe",
  },
  {
    letter: "X",
    word: "Xtreme Life",
    description: "Next level steps for next level living—unleash exponential potential",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* SEO Meta */}
      <title>
        Y.A.S.H. - Holistic Personal Development | Unleash the Infinity
      </title>
      <meta
        name="description"
        content="Yugandhar Academic Services for Harmony - Transform your life with holistic coaching, emotional mastery, and leadership development. Unleash your infinite potential."
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-right"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Left-to-right gradient overlay: opaque on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-gold font-medium mb-4 animate-fade-up opacity-0 stagger-1">
              Yugandhar Academic Services for Harmony
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up opacity-0 stagger-2">
              Unleash the <span className="text-gradient">Infinity</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl animate-fade-up opacity-0 stagger-3">
              Break through limitations, achieve self-mastery, and unlock your
              highest potential through holistic personal development and
              transformational coaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 stagger-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse-slow" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* About Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-gold font-medium mb-4">
              <Sparkles size={18} />
              About Y.A.S.H.
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              True Transformation is Not a Luxury—It's Essential
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Y.A.S.H., we believe in breaking patterns of stress,
              self-doubt, and stagnation. We empower individuals to take charge
              of their lives through holistic well-being, strategic growth, and
              self-mastery. Our approach goes beyond motivation—we create deep,
              lasting transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl border border-border hover:border-gold/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* D.E.T.O.X. Framework Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-gold font-medium mb-4">
              <Sparkles size={18} />
              Signature Event
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Digital D.E.T.O.X.
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              A structured transformation experience designed to help you
              disconnect from distractions and reconnect with your true
              potential.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {detoxFramework.map((item, index) => (
              <div
                key={index}
                className="relative p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all group"
              >
                <span className="font-display text-5xl font-bold text-gold opacity-20 absolute top-2 right-4 group-hover:opacity-40 transition-opacity">
                  {item.letter}
                </span>
                <h3 className="font-display text-lg font-semibold mb-2 relative z-10">
                  {item.word}
                </h3>
                <p className="text-primary-foreground/70 text-sm relative z-10">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services#detox">
                Join the Next D.E.T.O.X. Event <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-gold font-medium mb-4">
                <Sparkles size={18} />
                Why Y.A.S.H.?
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                We Don't Believe in One-Size-Fits-All Solutions
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Transformation is personal, and so is our approach. We combine
                modern psychology, coaching, and leadership training to create
                lasting impact tailored to your journey.
              </p>

              <ul className="space-y-4">
                {[
                  "Science-Backed & Holistic Approach",
                  "Deep, Lasting Impact Beyond Surface Motivation",
                  "Customized Programs for Individual Needs",
                  "A Community for Growth & Excellence",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/about">Discover Our Story</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-hero-gradient p-8 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-6xl md:text-8xl font-bold text-gold mb-4">
                    ∞
                  </p>
                  <p className="font-display text-2xl text-primary-foreground font-semibold">
                    Your Potential is Limitless
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-10 h-10 text-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-card rounded-2xl p-12 border border-border shadow-lg">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Unleash Your Infinity?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Take the first step towards transforming your life. Book a
              discovery call today and explore how Y.A.S.H. can help you achieve
              your highest potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">Book a Discovery Call</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

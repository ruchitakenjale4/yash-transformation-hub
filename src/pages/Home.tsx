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
import { SuccessStories } from "@/components/home/SuccessStories";
import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/about-bg.png";
import yashSpeaking from "@/assets/yash-speaking.jpg";

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

const detoxBenefits = [
  "Break Free from the Digital Loop",
  "Learn the Success Pattern",
  "Shift to an Adaptable Mindset",
  "Optimize Strategies for Sustainable Growth",
  "Unleash Exponential Potential",
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
            <p className="text-gold font-semibold mb-4 animate-fade-up opacity-0 stagger-1 tracking-widest uppercase text-sm">
              Yugandhar Academic Services for Harmony
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-up opacity-0 stagger-2">
              Unleash the <span className="text-gradient">Infinity</span>
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/90 mb-10 max-w-xl animate-fade-up opacity-0 stagger-3 font-medium leading-relaxed">
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
            {/* Social proof micro-badge */}
            <div className="mt-8 animate-fade-up opacity-0 stagger-5">
              <div className="inline-flex items-center gap-3 glass-dark rounded-full px-5 py-2.5">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gold/30 border-2 border-primary-foreground/20 flex items-center justify-center">
                      <Users className="w-3.5 h-3.5 text-gold" />
                    </div>
                  ))}
                </div>
                <span className="text-primary-foreground/80 text-sm font-medium">
                  Join <strong className="text-gold">1000+</strong> who transformed their lives
                </span>
              </div>
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

      {/* Stats Section - Premium treatment */}
      <section className="py-0">
        <div className="container mx-auto px-4">
          <div className="relative -mt-10 z-20">
            <div className="glass-card rounded-2xl shadow-lg p-8 md:p-10">
              <div className="flex flex-nowrap justify-center divide-x divide-dotted divide-border">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group px-4 md:px-8 lg:px-12">
                    <p className="font-display text-3xl md:text-4xl font-bold text-gold-dark mb-1 stat-glow transition-transform duration-300 group-hover:scale-105">
                      {stat.number}
                    </p>
                    <p className="text-muted-foreground text-xs font-medium tracking-wider uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <SuccessStories />

      {/* About Introduction */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutBg})` }}
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-gold font-semibold mb-4 tracking-widest uppercase text-sm">
              <Sparkles size={18} />
              About Y.A.S.H.
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              True Transformation is Not a Luxury—It's Essential
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
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
                className="group p-6 glass-dark rounded-2xl hover:border-gold/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* D.E.T.O.X. Framework Section */}
      <section className="py-24 bg-hero-gradient text-primary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-teal/10 blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-gold font-semibold mb-4 tracking-widest uppercase text-sm">
              <Sparkles size={18} />
              Signature Event
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Digital D.E.T.O.X.
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              A structured transformation experience built on 5 powerful pillars 
              designed to help you break free from digital distractions and 
              reconnect with your true potential.
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-14">
            <ul className="space-y-5">
              {detoxBenefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-primary-foreground/90 glass-dark rounded-xl px-5 py-4 transition-all duration-300 hover:border-gold/30"
                >
                  <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-lg font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
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
      <section className="py-24 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-gold font-semibold mb-4 tracking-widest uppercase text-sm">
                <Sparkles size={18} />
                Why Y.A.S.H.?
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                We Don't Believe in One-Size-Fits-All Solutions
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Transformation is personal, and so is our approach. We combine
                modern psychology, coaching, and leadership training to create
                lasting impact tailored to your journey.
              </p>

              <ul className="space-y-5">
                {[
                  "Science-Backed & Holistic Approach",
                  "Deep, Lasting Impact Beyond Surface Motivation",
                  "Customized Programs for Individual Needs",
                  "A Community for Growth & Excellence",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                      <CheckCircle className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/about">Discover Our Story</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl relative">
                <img src={yashSpeaking} alt="Y.A.S.H. speaking at an event" className="w-full h-full object-cover object-[65%_top]" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/80 to-transparent pt-16 pb-6 px-6 text-center">
                  <p className="font-display text-5xl font-bold text-gold mb-2">∞</p>
                  <p className="font-display text-xl text-primary-foreground font-semibold">Your Potential is Limitless</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-gold-gradient rounded-2xl flex items-center justify-center shadow-gold animate-float">
                <Sparkles className="w-12 h-12 text-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium urgency-driven */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass-card rounded-3xl p-14 shadow-xl relative overflow-hidden">
            {/* Decorative gold line at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gold-gradient rounded-full" />
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Unleash Your Infinity?
            </h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Take the first step towards transforming your life. Book a
              discovery call today and explore how Y.A.S.H. can help you achieve
              your highest potential.
            </p>
            <p className="text-gold font-semibold text-sm mb-8 tracking-wide">
              ✦ Free 20-minute discovery call • No commitment required ✦
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

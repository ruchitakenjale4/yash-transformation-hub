import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Brain,
  Heart,
  Target,
  CheckCircle,
  Phone,
  Calendar,
  Star,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { SuccessStories } from "@/components/home/SuccessStories";
import { CountUpNumber } from "@/components/home/CountUpNumber";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { PainPoints } from "@/components/home/PainPoints";
import { MidPageCTA } from "@/components/home/MidPageCTA";
import { StickyCTA } from "@/components/home/StickyCTA";
import heroBg from "@/assets/hero-bg.jpg";
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
    description: "Rewire limiting beliefs into a success-driven operating system.",
    cta: "Start Rewiring →",
  },
  {
    icon: Heart,
    title: "Emotional Intelligence",
    description: "Master your emotions to make better decisions under pressure.",
    cta: "Build Resilience →",
  },
  {
    icon: Target,
    title: "Career Clarity",
    description: "Get a clear roadmap for professional growth and business success.",
    cta: "Get Clarity →",
  },
  {
    icon: Users,
    title: "Leadership Excellence",
    description: "Transform from manager to inspirational leader your team follows.",
    cta: "Lead Better →",
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
      <title>
        Y.A.S.H. - Mind Detox & Peak Performance Coaching | Unleash the Infinity
      </title>
      <meta
        name="description"
        content="Transform your mindset, break through limitations, and achieve peak performance. Book a free 20-minute discovery call with Dr. Yash today."
      />

      {/* Hero Section — Problem-focused, urgency-driven */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-hero-gradient">
        <div
          className="absolute inset-0 bg-cover bg-right scale-105 opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(230,30%,8%)] via-[hsl(230,30%,8%)]/90 to-transparent" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-foreground/70 text-xs font-semibold tracking-wide">
                  Now accepting new clients for July 2026
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-[0.95]">
                Unleash the <span className="text-gradient">Infinity</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-foreground/70 mb-4 max-w-xl font-medium leading-relaxed">
                Tired of self-doubt, stress, and stagnation?
              </p>
              <p className="text-base text-foreground/60 mb-8 max-w-xl leading-relaxed">
                Dr. Yash's science-backed coaching has helped <strong className="text-foreground">1000+ professionals</strong> break
                through mental barriers, build emotional resilience, and achieve
                peak performance — in just 90 days.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/contact">
                    Book Free 20-Min Call <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/services#detox">
                    Explore D.E.T.O.X. Program
                  </Link>
                </Button>
              </div>
              <p className="text-muted-foreground text-xs font-medium">
                ✦ No commitment required • 100% free • Results guaranteed ✦
              </p>
            </ScrollReveal>

            {/* Trust badges */}
            <ScrollReveal delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full bg-gold/15 border-2 border-background flex items-center justify-center"
                      >
                        <Users className="w-3 h-3 text-gold" />
                      </div>
                    ))}
                  </div>
                  <span className="text-foreground/60 text-xs font-medium">
                    <strong className="text-gold">1000+</strong> transformed
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 glass-card rounded-full px-4 py-2">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-foreground/60 text-xs font-medium">
                    <strong className="text-foreground">5.0</strong> Google Rating
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 glass-card rounded-full px-4 py-2">
                  <Shield className="w-3.5 h-3.5 text-gold" />
                  <span className="text-foreground/60 text-xs font-medium">
                    <strong className="text-foreground">10+</strong> Years Expert
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse-slow" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-0 relative z-20">
        <div className="container mx-auto px-4">
          <div className="-mt-12">
            <div className="bg-background rounded-2xl shadow-lg border border-border/80 p-8 md:p-10">
              <div className="flex flex-nowrap justify-center divide-x divide-dotted divide-border">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group px-4 md:px-8 lg:px-12">
                    <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-1 transition-transform duration-300 group-hover:scale-105">
                      <CountUpNumber target={stat.number} />
                    </p>
                    <p className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points — Problem Agitation */}
      <PainPoints />

      {/* Success Stories — Social Proof */}
      <SuccessStories />

      {/* Mid-Page CTA Break */}
      <MidPageCTA />

      {/* Services Preview — What You Get */}
      <section className="relative py-28 bg-muted overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <SectionLabel>What You Get</SectionLabel>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                4 Pillars of Your Transformation
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Every program is built on proven frameworks that deliver measurable results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Link
                  to="/services"
                  className="group p-6 glass-card rounded-2xl hover:border-gold/40 hover:shadow-md transition-all duration-500 hover:-translate-y-1 h-full flex flex-col"
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {feature.description}
                  </p>
                  <p className="text-gold text-sm font-semibold mt-4 group-hover:translate-x-1 transition-transform">
                    {feature.cta}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center">
              <Button variant="gold" size="lg" asChild>
                <Link to="/services">
                  See All Programs & Pricing <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Google Reviews — Trust */}
      <GoogleReviews />

      {/* D.E.T.O.X. Framework Section — Signature Offer */}
      <section className="py-28 bg-hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-teal/10 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/25 rounded-full px-5 py-2 mb-6">
                <Calendar className="w-4 h-4 text-gold-light" />
                <span className="text-gold-light text-sm font-bold tracking-wide">
                  Next Batch: Limited to 30 Seats
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-primary-foreground">
                Digital D.E.T.O.X.
              </h2>
              <p className="text-primary-foreground/60 text-sm font-semibold tracking-wider uppercase mb-6">
                Our Signature Transformation Program
              </p>
              <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed">
                A structured transformation experience built on 5 powerful
                pillars. Join the program that has changed <strong className="text-primary-foreground">1000+ lives</strong>.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-xl mx-auto mb-12">
            <ul className="space-y-4">
              {detoxBenefits.map((benefit, index) => (
                <ScrollReveal key={index} delay={index * 0.08}>
                  <li className="flex items-center gap-4 text-primary-foreground/90 glass-dark rounded-xl px-5 py-4 transition-all duration-300 hover:border-gold/30">
                    <CheckCircle className="w-5 h-5 text-gold-light shrink-0" />
                    <span className="text-lg font-medium">{benefit}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>

          <ScrollReveal>
            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/services#detox">
                  Reserve Your Spot Now <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <p className="text-primary-foreground/50 text-xs mt-3 font-medium">
                ⚡ Seats fill fast — Previous batch sold out in 48 hours
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us — Authority */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal direction="left">
                <SectionLabel>Why Choose Dr. Yash?</SectionLabel>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Results That Speak Louder Than Promises
                </h2>
                <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                  Most coaches motivate. <strong className="text-foreground">Dr. Yash transforms.</strong> With
                  10+ years of experience, a PhD-backed methodology, and 1000+
                  success stories — the results are undeniable.
                </p>

                <ul className="space-y-5">
                  {[
                    "PhD-backed, science-driven methodology",
                    "Lasting change — not just temporary motivation",
                    "Customized programs for YOUR specific goals",
                    "Active community of 1000+ high-performers",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                        <CheckCircle className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button variant="gold" size="lg" asChild>
                    <Link to="/contact">
                      Start Your Transformation <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+919923715905">
                      <Phone className="mr-2 w-4 h-4" /> Call +91 99237 15905
                    </a>
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg relative">
                  <img
                    src={yashSpeaking}
                    alt="Dr. Yash speaking at an event"
                    className="w-full h-full object-cover object-[65%_top]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/90 via-foreground/60 to-transparent pt-16 pb-6 px-6 text-center">
                    <p className="font-display text-5xl font-bold text-gold mb-2">
                      ∞
                    </p>
                    <p className="font-display text-xl text-primary-foreground font-semibold">
                      Your Potential is Limitless
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-gold-gradient rounded-2xl flex items-center justify-center shadow-gold animate-float">
                  <span className="font-display text-4xl font-bold text-[hsl(230,30%,12%)]">
                    ∞
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA — High urgency */}
      <section className="py-28 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center glass-card rounded-3xl p-14 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gold-gradient rounded-full" />
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-foreground/70 text-xs font-bold tracking-wide">
                  Limited availability this month
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Breakthrough is One Call Away
              </h2>
              <p className="text-muted-foreground text-lg mb-3 leading-relaxed">
                Every week you wait is another week of staying stuck.
                Book your free discovery call now and get a personalized
                transformation roadmap.
              </p>
              <p className="text-gold font-bold text-sm mb-8 tracking-wide">
                ✦ Free 20-minute call • Personalized roadmap • Zero obligation ✦
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/contact">
                    Book My Free Discovery Call <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+919923715905">
                    <Phone className="mr-2 w-4 h-4" /> Call Now
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sticky CTA */}
      <StickyCTA />
    </Layout>
  );
}

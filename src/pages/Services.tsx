import { Link } from "react-router-dom";
import { Sparkles, User, Calendar, Building2, CheckCircle, ArrowRight, Brain, Heart, Target, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const services = [
  {
    id: "one-to-one",
    icon: User,
    title: "One-to-One Sessions",
    subtitle: "Personalized Transformational Coaching",
    description:
      "Experience deeply personalized, confidential coaching sessions designed to address your unique challenges and goals. Our one-to-one sessions provide a safe space for exploration, healing, and breakthrough.",
    features: [
      "Mindset Reprogramming & Limiting Belief Clearing",
      "Emotional Stability & Stress Management",
      "Career Clarity & Professional Growth",
      "Confidence Building & Self-Expression",
      "Work-Life Balance & Personal Fulfillment",
      "Relationship Dynamics & Communication Skills",
    ],
    landingUrl: "#", // TODO: replace with actual URL
    cta: "Book Your Session",
  },
  {
    id: "detox",
    icon: Calendar,
    title: "Digital D.E.T.O.X.",
    subtitle: "Signature Transformation Event",
    description:
      "Our flagship event is a structured transformation experience based on the D.E.T.O.X. framework. Disconnect from distractions, reconnect with your true self, and emerge with clarity, purpose, and renewed energy.",
    features: [
      "Break Free from Digital Loop",
      "Learn the Success Pattern",
      "Shift to Adaptable Mindset",
      "Optimize strategies for sustainable growth",
      "Unleash Exponential Potentials",
    ],
    landingUrl: "https://detox-digital-clarity.lovable.app/",
    cta: "Register for D.E.T.O.X.",
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Training",
    subtitle: "Organizational Excellence Programs",
    description:
      "Empower your teams with cutting-edge training programs focused on leadership development, emotional intelligence, and workplace resilience. We help organizations build high-performing teams that thrive.",
    features: [
      "Leadership & Management Development",
      "Emotional Intelligence in the Workplace",
      "Team Building & Collaboration",
      "Stress Management & Resilience Training",
      "Communication & Conflict Resolution",
      "Employee Well-being & Engagement Programs",
    ],
    landingUrl: "#", // TODO: replace with actual URL
    cta: "Request Corporate Training",
  },
];

const expertise = [
  { icon: Brain, title: "Psychological Counseling", description: "Overcoming self-doubt, stress, and limiting beliefs" },
  { icon: Target, title: "Mindset Coaching", description: "Shifting to a growth-oriented perspective" },
  { icon: Users, title: "Leadership Training", description: "Enhancing team performance and effectiveness" },
  { icon: Heart, title: "Holistic Well-being", description: "Integrating psychology with self-care strategies" },
];

export default function Services() {
  return (
    <Layout>
      <title>Services | Y.A.S.H. - Holistic Personal Development & Corporate Training</title>
      <meta
        name="description"
        content="Explore Y.A.S.H. services including one-to-one coaching sessions, Digital D.E.T.O.X. events, and corporate training for emotional intelligence and leadership development."
      />

      {/* Hero Section */}
      <section className="pt-12 pb-20 bg-hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-gold-light font-semibold mb-4 tracking-widest uppercase text-sm">
              <Sparkles size={18} />
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Transform Your Life with{" "}
              <span className="text-gradient">Expert Guidance</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              We offer a range of high-impact coaching, training, and transformation programs
              designed to create lasting breakthroughs in personal and professional life.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Overview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div key={index} className="text-center p-6 group">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground mb-1 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Sections - Alternating Light/Dark */}
      {services.map((service, index) => {
        const isDark = index % 2 !== 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 ${isDark ? "bg-hero-gradient text-primary-foreground" : "bg-background"}`}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${isDark ? "bg-primary-foreground/10" : "bg-gold/10"}`}>
                    <service.icon className={`w-7 h-7 ${isDark ? "text-gold-light" : "text-gold"}`} />
                  </div>
                  <div>
                    <span className={`font-medium text-sm ${isDark ? "text-gold-light" : "text-gold"}`}>
                      {service.subtitle}
                    </span>
                    <h2 className={`font-display text-3xl md:text-4xl font-bold ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className={`text-lg leading-relaxed mb-8 ${isDark ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {service.description}
                </p>

                <ul className="grid sm:grid-cols-2 gap-3 mb-10">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2.5">
                      <CheckCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isDark ? "text-gold-light" : "text-gold"}`} />
                      <span className={`text-sm ${isDark ? "text-primary-foreground/90" : "text-foreground"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button variant={isDark ? "hero" : "gold"} size="lg" asChild>
                  <a
                    href={service.landingUrl}
                    target={service.landingUrl !== "#" ? "_blank" : undefined}
                    rel={service.landingUrl !== "#" ? "noopener noreferrer" : undefined}
                  >
                    {service.cta} <ArrowRight className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        );
      })}

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-gold font-semibold mb-4 tracking-widest uppercase text-sm">
              <Sparkles size={18} />
              Our Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Transformation Journey
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery Call", description: "We understand your unique challenges, goals, and aspirations" },
              { step: "02", title: "Customized Plan", description: "We design a personalized program tailored to your needs" },
              { step: "03", title: "Deep Work", description: "Engage in transformative sessions with expert guidance" },
              { step: "04", title: "Lasting Change", description: "Integrate learnings for sustainable growth and success" },
            ].map((item, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-16 h-16 rounded-full bg-hero-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="font-display text-xl font-bold text-primary-foreground">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-teal/10 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-4 leading-relaxed">
              Book a free discovery call to discuss your goals and explore how our services 
              can help you achieve lasting breakthroughs.
            </p>
            <p className="text-gold font-semibold text-sm mb-8 tracking-wide">
              ✦ Free consultation • Personalized approach • Lasting results ✦
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Schedule Discovery Call</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/about">Learn About Dr. Yash</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

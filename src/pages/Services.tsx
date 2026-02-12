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
      <section className="pt-12 pb-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-gold font-medium mb-4">
              <Sparkles size={18} />
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transform Your Life with{" "}
              <span className="text-gradient">Expert Guidance</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We offer a range of high-impact coaching, training, and transformation programs
              designed to create lasting breakthroughs in personal and professional life.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="group bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-gold/30 flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>

                <span className="text-gold font-medium text-sm">{service.subtitle}</span>
                <h2 className="font-display text-2xl font-bold text-foreground mt-1 mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="gold" size="lg" className="w-full" asChild>
                  <a
                    href={service.landingUrl}
                    target={service.landingUrl !== "#" ? "_blank" : undefined}
                    rel={service.landingUrl !== "#" ? "noopener noreferrer" : undefined}
                  >
                    {service.cta} <ArrowRight className="ml-2" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-gold font-medium mb-4">
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
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-hero-gradient flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-xl font-bold text-primary-foreground">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
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
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Book a free discovery call to discuss your goals and explore how our services 
              can help you achieve lasting breakthroughs.
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

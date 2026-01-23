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
    description: "Experience deeply personalized, confidential coaching sessions designed to address your unique challenges and goals. Our one-to-one sessions provide a safe space for exploration, healing, and breakthrough.",
    features: [
      "Mindset Reprogramming & Limiting Belief Clearing",
      "Emotional Stability & Stress Management",
      "Career Clarity & Professional Growth",
      "Confidence Building & Self-Expression",
      "Work-Life Balance & Personal Fulfillment",
      "Relationship Dynamics & Communication Skills",
    ],
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfT9J6XMYTjuYTqqyF9/viewform?embedded=true",
    embedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfT9J6XMYTjuYTqqyF9/viewform?embedded=true",
    cta: "Book Your Session",
  },
  {
    id: "detox",
    icon: Calendar,
    title: "Digital D.E.T.O.X.",
    subtitle: "Signature Transformation Event",
    description: "Our flagship event is a structured transformation experience based on the D.E.T.O.X. framework. Disconnect from distractions, reconnect with your true self, and emerge with clarity, purpose, and renewed energy.",
    features: [
      "Break Free from Digital Loop",
      "Learn the Success Pattern",
      "Shift to Adaptable Mindset",
      "Optimize strategies for sustainable growth",
      "Unleash Exponential Potentials",
    ],
    formUrl: "https://forms.google.com/example-detox",
    cta: "Register for D.E.T.O.X.",
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Training",
    subtitle: "Organizational Excellence Programs",
    description: "Empower your teams with cutting-edge training programs focused on leadership development, emotional intelligence, and workplace resilience. We help organizations build high-performing teams that thrive.",
    features: [
      "Leadership & Management Development",
      "Emotional Intelligence in the Workplace",
      "Team Building & Collaboration",
      "Stress Management & Resilience Training",
      "Communication & Conflict Resolution",
      "Employee Well-being & Engagement Programs",
    ],
    formUrl: "https://forms.google.com/example-corporate",
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

      {/* Services Detail */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-gold" />
                  </div>
                  <span className="text-gold font-medium text-sm">{service.subtitle}</span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                    What's Included:
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="gold" size="lg" asChild>
                    <Link to="/contact">
                      {service.cta} <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                      Inquire About {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Fill out our inquiry form and we'll get back to you within 24 hours with 
                      personalized recommendations.
                    </p>
                    
                    {/* Google Form Embed */}
                    {service.id === "one-to-one" ? (
                      <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfT9J6XMYTjuYTqqyF9/viewform?embedded=true"
                        className="w-full aspect-[4/3] rounded-xl border-0"
                        title={`${service.title} Inquiry Form`}
                      >
                        Loading…
                      </iframe>
                    ) : (
                      <div className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center border-2 border-dashed border-border">
                        <div className="text-center p-6">
                          <Calendar className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                          <p className="text-muted-foreground text-sm mb-4">
                            Google Form will be embedded here
                          </p>
                          <Button variant="outline" size="sm" asChild>
                            <a href={service.formUrl} target="_blank" rel="noopener noreferrer">
                              Open Form in New Tab
                            </a>
                          </Button>
                        </div>
                      </div>
                    )}

                    <p className="text-muted-foreground text-xs mt-4 text-center">
                      Your information is kept confidential and secure.
                    </p>
                  </div>
                </div>
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

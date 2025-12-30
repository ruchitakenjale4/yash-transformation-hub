import { useState } from "react";
import { Sparkles, Mail, Phone, MapPin, Youtube, Instagram, Linkedin, Send, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@yash.services",
    href: "mailto:contact@yash.services",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: null,
  },
];

const socialLinks = [
  { icon: Youtube, href: "https://youtube.com", label: "YouTube", color: "hover:bg-red-500/10 hover:text-red-500" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:bg-pink-500/10 hover:text-pink-500" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-500/10 hover:text-blue-500" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Corporate Professional",
    content: "Dr. Yash's coaching completely transformed my approach to work and life. I went from feeling stuck and overwhelmed to having clarity and confidence in my decisions.",
  },
  {
    name: "Rahul Mehta",
    role: "Entrepreneur",
    content: "The D.E.T.O.X. event was life-changing. The framework gave me tools I use daily to stay focused and aligned with my goals. Highly recommend to anyone serious about growth.",
  },
  {
    name: "Anita Desai",
    role: "Student",
    content: "As a student struggling with career clarity, the one-on-one sessions helped me understand my strengths and choose a path that truly resonates with me.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <title>Contact Y.A.S.H. | Get in Touch for Transformational Coaching</title>
      <meta
        name="description"
        content="Contact Y.A.S.H. for holistic personal development, transformational coaching, and corporate training inquiries. Book a discovery call today."
      />

      {/* Hero Section */}
      <section className="pt-12 pb-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-gold font-medium mb-4">
              <Sparkles size={18} />
              Get In Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Start Your{" "}
              <span className="text-gradient">Transformation Journey</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ready to break through your limitations and unleash your infinite potential? 
              Reach out to us and take the first step towards lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals and how we can help you..."
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground font-medium hover:text-gold transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground transition-all ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* YouTube Section */}
              <div className="p-6 bg-hero-gradient rounded-2xl text-primary-foreground">
                <div className="flex items-center gap-3 mb-4">
                  <Youtube className="w-8 h-8 text-gold" />
                  <h3 className="font-display text-lg font-semibold">Watch on YouTube</h3>
                </div>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Subscribe to our channel for free insights, transformation tips, and behind-the-scenes 
                  content from our events.
                </p>
                <Button variant="hero" size="sm" asChild>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    Subscribe Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-gold font-medium mb-4">
              <Sparkles size={18} />
              Client Reviews
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all"
              >
                <Quote className="w-10 h-10 text-gold/30 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-hero-gradient flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-primary-foreground">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-card rounded-2xl p-12 border border-border shadow-lg">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Book a Free Discovery Call
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Not sure which service is right for you? Let's talk. Schedule a complimentary 
              20-minute call to discuss your goals and explore how we can help.
            </p>
            <Button variant="gold" size="lg">
              Schedule Your Call
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

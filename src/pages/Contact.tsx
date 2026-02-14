import { useState } from "react";
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Youtube,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "919923715905";
const WHATSAPP_MESSAGE =
  "Hello Dr. Yash! I'm interested in learning more about Y.A.S.H. coaching services. Please share more details.";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact.teamyash@gmail.com",
    href: "mailto:contact.teamyash@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99237 15905",
    href: "tel:+919923715905",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: "https://maps.app.goo.gl/ffPpEaePz3cDZF9V6?g_st=aw",
  },
];

const socialLinks = [
  {
    icon: Youtube,
    href: "https://www.youtube.com/channel/UCro4sMAAOKn4qJpKg9qrJXQ",
    label: "YouTube",
    color: "hover:bg-red-500/10 hover:text-red-500",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/dr.yashkenjale/",
    label: "Instagram",
    color: "hover:bg-pink-500/10 hover:text-pink-500",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/dr-yash-kenjale-950499169/",
    label: "LinkedIn",
    color: "hover:bg-blue-500/10 hover:text-blue-500",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      description:
        "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleScheduleCall = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      WHATSAPP_MESSAGE
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Layout>
      <title>
        Contact Y.A.S.H. | Get in Touch for Transformational Coaching
      </title>
      <meta
        name="description"
        content="Contact Y.A.S.H. for holistic personal development, transformational coaching, and corporate training inquiries. Book a discovery call today."
      />

      {/* Hero Section */}
      <section className="pt-12 pb-20 bg-hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-gold-light font-semibold mb-4 tracking-widest uppercase text-sm">
              <Sparkles size={18} />
              Get In Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Start Your{" "}
              <span className="text-gradient">Transformation Journey</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Ready to break through your limitations and unleash your infinite
              potential? Reach out to us and take the first step towards lasting
              change.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-foreground mb-2 tracking-wide"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="h-12 rounded-xl border-border/50 focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-foreground mb-2 tracking-wide"
                    >
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
                      className="h-12 rounded-xl border-border/50 focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-foreground mb-2 tracking-wide"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="h-12 rounded-xl border-border/50 focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-foreground mb-2 tracking-wide"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                      className="h-12 rounded-xl border-border/50 focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground mb-2 tracking-wide"
                  >
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
                    className="resize-none rounded-xl border-border/50 focus:border-gold transition-colors"
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
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-4 mb-10">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 glass-card rounded-2xl hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors group-hover:scale-105">
                      <info.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium tracking-wide">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={
                            info.label === "Location" ? "_blank" : undefined
                          }
                          rel={
                            info.label === "Location"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-foreground font-semibold hover:text-gold transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-semibold">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-10">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 tracking-wider">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-105 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* YouTube Section */}
              <div className="p-6 bg-hero-gradient rounded-2xl text-primary-foreground relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gold/10 blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Youtube className="w-8 h-8 text-gold" />
                    <h3 className="font-display text-lg font-semibold tracking-wider">
                      Watch on YouTube
                    </h3>
                  </div>
                  <p className="text-primary-foreground/80 text-sm mb-4 leading-relaxed">
                    Subscribe to our channel for free insights, transformation
                    tips, and behind-the-scenes content from our events.
                  </p>
                  <Button variant="hero" size="sm" asChild>
                    <a
                      href="https://www.youtube.com/channel/UCro4sMAAOKn4qJpKg9qrJXQ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Subscribe Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass-card rounded-3xl p-14 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gold-gradient rounded-full" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Book a Free Discovery Call
            </h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Not sure which service is right for you? Let's talk. Schedule a
              complimentary 20-minute call to discuss your goals and explore how
              we can help.
            </p>
            <p className="text-gold font-semibold text-sm mb-8 tracking-wide">
              ✦ No commitment required • Response within 24 hours ✦
            </p>
            <Button variant="gold" size="lg" onClick={handleScheduleCall}>
              Schedule Your Call
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

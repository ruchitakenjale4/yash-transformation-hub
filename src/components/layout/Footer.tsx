import { Link } from "react-router-dom";
import { Youtube, Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Digital Detox Experience", path: "/services#detox" },
    { name: "Personal Mind Detox Coaching", path: "/services#one-to-one" },
    { name: "Corporate Training", path: "/services#corporate" },
  ],
};

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/channel/UCro4sMAAOKn4qJpKg9qrJXQ", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/dr.yashkenjale/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dr-yash-kenjale-950499169/", label: "LinkedIn" },
];

export function Footer() {
  const whatsappUrl = "https://wa.me/919923715905?text=" + encodeURIComponent("Hello Dr. Yash! I'm interested in learning more about YASH Infinity coaching services. Please share more details.");

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-5">
              <span className="text-2xl font-bold tracking-tight">
                YASH<span className="text-gold"> ∞</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Mind Detox coaching and training programs helping individuals and organizations 
              reclaim focus, clarity, and peak performance.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={17} />
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-5 uppercase tracking-wider text-primary-foreground/50">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-5 uppercase tracking-wider text-primary-foreground/50">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-5 uppercase tracking-wider text-primary-foreground/50">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold shrink-0" />
                <a href="mailto:contact.teamyash@gmail.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  contact.teamyash@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold shrink-0" />
                <a href="tel:+919923715905" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  +91 99237 15905
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={15} className="text-gold shrink-0" />
                <a
                  href="https://maps.app.goo.gl/ffPpEaePz3cDZF9V6?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  Pune, Maharashtra, India
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} YASH Infinity. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-primary-foreground/40 hover:text-primary-foreground/70 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/40 hover:text-primary-foreground/70 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

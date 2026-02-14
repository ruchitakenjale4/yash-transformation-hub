import { Link } from "react-router-dom";
import { Youtube, Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

const footerLinks = {
  navigation: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "One-to-One Sessions", path: "/services#one-to-one" },
    { name: "Digital D.E.T.O.X.", path: "/services#detox" },
    { name: "Corporate Training", path: "/services#corporate" },
  ],
};

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/channel/UCro4sMAAOKn4qJpKg9qrJXQ", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/dr.yashkenjale/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dr-yash-kenjale-950499169/", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-teal/5 blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Premium divider at top */}
        <div className="premium-divider mb-16" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img 
                src={logoLight} 
                alt="Y.A.S.H. Logo" 
                className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <span className="font-display text-xl font-semibold">Y.A.S.H.</span>
                <p className="text-xs text-primary-foreground/70 tracking-widest uppercase">Unleash the Infinity</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Yugandhar Academic Services for Harmony - empowering individuals to achieve holistic 
              well-being and unlock their highest potential.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:scale-105 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm font-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm font-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Mail size={16} className="text-gold" />
                </div>
                <a
                  href="mailto:contact.teamyash@gmail.com"
                  className="text-primary-foreground/80 hover:text-gold transition-colors text-sm mt-2"
                >
                  contact.teamyash@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Phone size={16} className="text-gold" />
                </div>
                <a
                  href="tel:+919923715905"
                  className="text-primary-foreground/80 hover:text-gold transition-colors text-sm mt-2"
                >
                  +91 99237 15905
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <MapPin size={16} className="text-gold" />
                </div>
                <a
                  href="https://maps.app.goo.gl/ffPpEaePz3cDZF9V6?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-gold transition-colors text-sm mt-2"
                >
                  Pune, Maharashtra, India
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Y.A.S.H. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-gold text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-gold text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

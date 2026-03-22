import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-hero-gradient border-t border-gold/20 shadow-[0_-4px_30px_hsl(230_30%_12%/0.3)]"
        >
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <p className="text-primary-foreground/90 text-sm font-medium">
                <span className="text-gold-light font-bold">Limited Spots</span> — Free 20-min Discovery Call
              </p>
            </div>
            <div className="flex items-center gap-3 flex-1 sm:flex-none justify-center sm:justify-end">
              <Button variant="gold" size="default" asChild className="text-sm">
                <Link to="/contact">
                  Book Free Call <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </Button>
              <a
                href="tel:+919923715905"
                className="hidden sm:flex items-center gap-2 text-primary-foreground/70 hover:text-gold-light transition-colors text-sm"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <button
                onClick={() => setDismissed(true)}
                className="text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors p-1"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

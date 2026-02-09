import { ScrollReveal } from "./ScrollReveal";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const ResumeSection = () => (
  <section id="resume" className="section-padding relative">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="max-w-2xl mx-auto text-center glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />

          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6"
            >
              <FileText size={28} className="text-primary-foreground" />
            </motion.div>

            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 gradient-text inline-block">
              Grab My Resume
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Download my complete resume to explore my full experience,
              projects, and skills in detail.
            </p>

            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground px-8 text-base transition-all hover:scale-105 hover:shadow-lg group"
              asChild
            >
              <a href="https://drive.google.com/file/d/1314aCt0_Ukhn_2DRLw8gr_kKJRLOdgZk/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download
                  size={20}
                  className="group-hover:animate-bounce"
                />
                Download Resume
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              PDF format · Updated 2026
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

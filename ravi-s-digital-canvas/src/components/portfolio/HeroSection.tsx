import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, FileText, Mail } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { FloatingParticles } from "./FloatingParticles";
import { Button } from "@/components/ui/button";

const taglines = [
  "Building scalable web applications",
  "Exploring AI & Machine Learning",
  "Crafting elegant user experiences",
  "Turning ideas into production code",
];

export const HeroSection = () => {
  const typedText = useTypingAnimation(taglines);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 animate-gradient-bg"
      />

      <FloatingParticles />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base font-medium text-primary mb-4 tracking-widest uppercase font-display"
          >
            Welcome to my portfolio
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 leading-tight">
            <span className="gradient-text">Pothuri Ravi Sankar</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-2 font-display"
          >
            Python Developer · AI/ML Enthusiast
          </motion.p>

          {/* Typing animation */}
          <div className="h-8 mb-8 flex items-center justify-center">
            <span className="text-sm md:text-base text-primary/80 font-mono">
              {typedText}
              <span className="inline-block w-0.5 h-5 ml-1 bg-primary animate-typing-cursor align-middle" />
            </span>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10"
          >
            <Button
              onClick={() => scrollTo("#projects")}
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground px-6 transition-all hover:scale-105 hover:shadow-lg"
            >
              Explore My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-primary/40 hover:bg-primary/10 px-6"
              onClick={() => scrollTo("#resume")}
            >
              <FileText size={18} />
              Grab My Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-accent/40 hover:bg-accent/10 px-6"
              onClick={() => scrollTo("#contact")}
            >
              <Mail size={18} />
              Say Hello
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/ghravi-cdr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover-glow transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/ravi-sankar-pothuri-398032269"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover-glow transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="text-muted-foreground" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

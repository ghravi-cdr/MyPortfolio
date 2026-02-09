import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
    toast({
      title: "Copied!",
      description: `${field} copied to clipboard.`,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message received!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's build something amazing together"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="glass rounded-2xl p-6 md:p-8 h-full flex flex-col">
              <h3 className="font-display font-semibold text-xl mb-6">
                Let's Connect
              </h3>

              <div className="space-y-4 mb-8">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 flex-shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium truncate">
                      pothuriravisankar@gmail.com
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard("pothuriravisankar@gmail.com", "Email")
                    }
                    className="p-2 rounded-lg hover:bg-muted transition-colors flex-shrink-0"
                    aria-label="Copy email"
                  >
                    {copiedField === "Email" ? (
                      <Check size={16} className="text-accent" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-secondary/10 flex-shrink-0">
                    <Phone size={18} className="text-secondary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium">+91 7569433045</p>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard("+917569433045", "Phone")
                    }
                    className="p-2 rounded-lg hover:bg-muted transition-colors flex-shrink-0"
                    aria-label="Copy phone"
                  >
                    {copiedField === "Phone" ? (
                      <Check size={16} className="text-accent" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mb-8">
                <a
                  href="https://github.com/ghravi-cdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass hover:scale-110 transition-transform"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ravi-sankar-pothuri-398032269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass hover:scale-110 transition-transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>

              {/* Mailto Button */}
              <div className="mt-auto">
                <Button
                  className="w-full rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all hover:scale-[1.02]"
                  size="lg"
                  asChild
                >
                  <a href="mailto:pothuriravisankar@gmail.com">
                    <Mail size={18} />
                    Drop Me a Line
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 md:p-8 h-full flex flex-col"
            >
              <h3 className="font-display font-semibold text-xl mb-6">
                Send a Message
              </h3>

              <div className="space-y-4 flex-1">
                <div>
                  <Label htmlFor="name" className="text-sm mb-1.5 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="rounded-xl bg-background/50"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm mb-1.5 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-xl bg-background/50"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm mb-1.5 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="rounded-xl bg-background/50 resize-none"
                    required
                  />
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6"
              >
                <Button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
                  size="lg"
                >
                  <Send size={18} />
                  Fire Away
                </Button>
              </motion.div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { User, Sparkles } from "lucide-react";
import ProfilePic from "@/assets/Profile-pic.jpg";

const highlights = ["Python", "Java", "SQL", "React", "FastAPI", "AI/ML", "NLP"];

export const AboutSection = () => (
  <section id="about" className="section-padding relative">
    <div className="container mx-auto px-4">
      <SectionHeading title="About Me" subtitle="A glimpse into who I am" />

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
        {/* Avatar */}
        <ScrollReveal direction="left">
          <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
            <div className="w-full h-full rounded-2xl glass overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <div className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-4">
                  <img 
                    src={ProfilePic} 
                    alt="Profile picture" 
                    className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover"
                  />
                </div>
                
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-2xl -z-10" />
          </div>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal direction="right" delay={0.2}>
          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} className="text-accent" />
              <span className="text-sm font-display font-medium text-accent uppercase tracking-wider">
                Who am I
              </span>
            </div>
            <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-6">
              Motivated software developer with hands-on experience in{" "}
              <span className="text-primary font-semibold">Python</span>,{" "}
              <span className="text-secondary font-semibold">Java</span>,{" "}
              <span className="text-accent font-semibold">SQL</span>, React,
              FastAPI, and AI/ML. Passionate about building full-stack and
              NLP-based applications that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-2">
              {highlights.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

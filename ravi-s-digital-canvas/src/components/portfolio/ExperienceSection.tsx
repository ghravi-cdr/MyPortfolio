import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { Briefcase, Award } from "lucide-react";

const experiences = [
  {
    title: "Web Developer Intern",
    org: "Skillcraft Technology",
    year: "2025",
    type: "internship",
    icon: Briefcase,
    description:
      "Built responsive web applications and gained hands-on experience with modern frontend and backend technologies.",
  },
  {
    title: "AI/ML Virtual Intern",
    org: "Google via Eduskills",
    year: "2024",
    type: "internship",
    icon: Briefcase,
    description:
      "Explored AI/ML concepts and built machine learning models with Google's cutting-edge tools and frameworks.",
  },
  {
    title: "Python Certification",
    org: "NPTEL — IIT Madras",
    year: "2024",
    type: "certification",
    icon: Award,
    description:
      "Completed comprehensive Python programming certification from India's premier institution.",
  },
  {
    title: "Full Stack Development",
    org: "Infosys Springboard",
    year: "2024",
    type: "certification",
    icon: Award,
    description:
      "Earned certification in full-stack development covering end-to-end application building.",
  },
];

export const ExperienceSection = () => (
  <section id="experience" className="section-padding relative">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Experience & Certifications"
        subtitle="My professional journey so far"
      />

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-[15px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

        {experiences.map((exp, idx) => {
          const Icon = exp.icon;
          const isLeft = idx % 2 === 0;
          return (
            <ScrollReveal
              key={idx}
              direction={isLeft ? "left" : "right"}
              delay={idx * 0.15}
              className="relative mb-10 last:mb-0"
            >
              <div
                className={`flex items-start gap-4 md:gap-8 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Spacer for opposite side (desktop) */}
                <div
                  className={`flex-1 hidden md:block ${
                    isLeft ? "text-right" : "text-left"
                  }`}
                />

                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <Icon size={14} className="text-primary-foreground" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1">
                  <div className="glass rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-display font-medium text-accent uppercase tracking-wider">
                        {exp.year}
                      </span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground capitalize">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-base mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-primary/80 mb-2">{exp.org}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

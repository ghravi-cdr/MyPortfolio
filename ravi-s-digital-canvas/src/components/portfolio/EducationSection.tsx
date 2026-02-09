import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap, School, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.Tech in AI & Machine Learning",
    institution: "Vasireddy Venkatadri Institute of Technology",
    period: "2022 – 2026",
    score: "CGPA: 8.3",
    icon: GraduationCap,
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Board of Intermediate Education",
    period: "Completed",
    score: "92.4%",
    icon: School,
  },
  {
    degree: "SSC",
    institution: "Board of Secondary Education",
    period: "Completed",
    score: "544/600",
    icon: BookOpen,
  },
];

export const EducationSection = () => (
  <section id="education" className="section-padding relative">
    <div className="container mx-auto px-4">
      <SectionHeading title="Education" subtitle="My academic journey" />

      <div className="max-w-2xl mx-auto space-y-6">
        {education.map((edu, idx) => {
          const Icon = edu.icon;
          return (
            <ScrollReveal key={idx} delay={idx * 0.15}>
              <div className="glass rounded-2xl p-6 flex items-start gap-4 hover:scale-[1.02] transition-transform duration-300">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0">
                  <Icon size={24} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-base mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs text-accent font-display">
                      {edu.period}
                    </span>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      {edu.score}
                    </span>
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

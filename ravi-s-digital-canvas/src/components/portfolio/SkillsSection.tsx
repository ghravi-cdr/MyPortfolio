import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { Code2, Globe, Database, Layers, Wrench, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const colorStyles = {
  primary: { bg: "bg-primary/10", text: "text-primary" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary" },
  accent: { bg: "bg-accent/10", text: "text-accent" },
} as const;

type ColorKey = keyof typeof colorStyles;

interface Skill {
  name: string;
  level: number;
}

interface Category {
  title: string;
  icon: typeof Code2;
  color: ColorKey;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: "Programming",
    icon: Code2,
    color: "primary",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 65 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    color: "accent",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "React", level: 75 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "secondary",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    title: "Frameworks",
    icon: Layers,
    color: "primary",
    skills: [
      { name: "Django", level: 70 },
      { name: "Bootstrap", level: 70 },
      { name: "FastAPI", level: 75 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "accent",
    skills: [
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "AWS Fundamentals", level: 60 },
    ],
  },
];

const SkillBox = ({
  name,
  icon: Icon,
  colorStyles: styles,
}: {
  name: string;
  icon: LucideIcon;
  colorStyles: (typeof colorStyles)[ColorKey];
}) => (
  <div
    className={cn(
      "group/skill flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border/50 bg-muted/30",
      "hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
    )}
  >
    <Icon
      size={18}
      className={cn(styles.text, "opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300")}
    />
    <span className="text-sm font-medium">{name}</span>
  </div>
);

export const SkillsSection = () => (
  <section id="skills" className="section-padding relative">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Skills & Expertise"
        subtitle="Technologies I work with every day"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {categories.map((cat, catIdx) => {
          const Icon = cat.icon;
          const styles = colorStyles[cat.color];
          return (
            <ScrollReveal key={cat.title} delay={catIdx * 0.1}>
              <div className="glass rounded-2xl p-6 h-full hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={cn(
                      "p-2.5 rounded-xl transition-colors",
                      styles.bg
                    )}
                  >
                    <Icon size={22} className={styles.text} />
                  </div>
                  <h3 className="font-display font-semibold text-lg">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <SkillBox
                      key={skill.name}
                      name={skill.name}
                      icon={Icon}
                      colorStyles={styles}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

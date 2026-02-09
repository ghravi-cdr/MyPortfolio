import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { Trophy, Users } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "2nd Prize — AI Hackathon",
    description:
      "Secured 2nd position in the AI Hackathon organized by AP Police, showcasing innovative AI solutions for real-world law enforcement challenges.",
    icon: Trophy,
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Class Representative — 4 Years",
    description:
      "Served as Class Representative for 4 consecutive years, demonstrating exceptional leadership, communication, and organizational skills.",
    icon: Users,
    gradient: "from-primary/20 to-secondary/20",
  },
];

export const AchievementsSection = () => (
  <section id="achievements" className="section-padding relative">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Achievements"
        subtitle="Milestones I'm proud of"
      />

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {achievements.map((achievement, idx) => {
          const Icon = achievement.icon;
          return (
            <ScrollReveal key={idx} delay={idx * 0.2}>
              <motion.div
                className="glass rounded-2xl p-6 md:p-8 text-center h-full"
                whileHover={{ y: -5 }}
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center mb-5`}
                >
                  <Icon size={28} className="text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg mb-3">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

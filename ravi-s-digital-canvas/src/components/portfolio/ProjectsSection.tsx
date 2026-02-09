import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import driveTrackImg from "@/assets/drive-track.png";
import newsHubImg from "@/assets/news-hub.png";

const projects = [
  {
    title: "Drive Track",
    description:
      "Full-stack driver management system with CRUD operations and responsive UI. Built for efficient tracking and management of driver records with real-time updates.",
    tech: ["Python", "React", "FastAPI", "MongoDB"],
    github: "https://github.com/ghravi-cdr/DriveTrack",
    demo: " https://drivetrack.netlify.app/",
    image: driveTrackImg,
    features: ["CRUD Operations", "Responsive Design", "Real-time Updates", "REST API"],
  },
  {
    title: "News Hub",
    description:
      "News summarization website using NLP for concise insights. Automatically processes and summarizes lengthy news articles into digestible summaries.",
    tech: ["Python", "Flask", "HTML/CSS", "Bootstrap", "NLP","ML"],
    github: "https://github.com/ghravi-cdr/NewsHub",
    demo: "https://drive.google.com/drive/folders/1qYClVT7eOidEgx90AW6q-P1PFNUuh-DO?usp=sharing",
    image: newsHubImg,
    features: ["NLP Processing", "Auto Summarization", "Clean Interface", "Multi-source"],
  },
];

export const ProjectsSection = () => (
  <section id="projects" className="section-padding relative">
    <div className="container mx-auto px-4">
      <SectionHeading title="Featured Projects" subtitle="Things I've built" />

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <ScrollReveal key={project.title} delay={idx * 0.2}>
            <motion.div
              className="glass rounded-2xl overflow-hidden group h-full flex flex-col"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative h-48 md:h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-display font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs text-muted-foreground bg-muted/50 rounded-full px-2.5 py-0.5"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button size="sm" className="rounded-full" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full"
                    asChild
                  >
                    <a href={project.demo}>
                      <ExternalLink size={16} />
                      Live Preview
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

import { Navbar } from "@/components/portfolio/Navbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { AchievementsSection } from "@/components/portfolio/AchievementsSection";
import { ResumeSection } from "@/components/portfolio/ResumeSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { BackgroundEffects } from "@/components/portfolio/BackgroundEffects";

const Index = () => (
  <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
    <BackgroundEffects />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <EducationSection />
    <AchievementsSection />
    <ResumeSection />
    <ContactSection />
    <Footer />
  </main>
);

export default Index;

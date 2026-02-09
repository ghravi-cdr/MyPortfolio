import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <ScrollReveal className="text-center mb-12 md:mb-16">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 gradient-text inline-block">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </ScrollReveal>
);

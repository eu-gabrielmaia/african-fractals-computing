import { AdinkraPattern, FractalTree, Sierpinski } from "@/components/backgrounds";
import { Reveal } from "@/components/reveal";

type HeroSectionProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
};

export default function HeroSection({
  eyebrow,
  title,
  description,
  children,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 text-primary">
        <AdinkraPattern opacity={0.06} />
      </div>
      <div className="absolute -right-16 top-8 opacity-20 hidden md:block">
        <FractalTree depth={9} className="w-95 h-95 text-primary" />
      </div>

      <div className="absolute -left-12 bottom-0 opacity-15 hidden md:block">
        <Sierpinski depth={6} size={280} color="oklch(0.55 0.16 35)" />
      </div>
      
      <div className="relative mx-auto max-w-5xl px-5 md:px-8 py-24 md:py-32">
        <Reveal>
          {eyebrow && (
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-primary mb-6">
              {eyebrow}
            </p>
          )}

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-none tracking-tight text-balance mb-8">
            {title}
          </h1>

          {description && (
            <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-3xl leading-relaxed">
              {description}
            </p>
          )}

          {children && (
            <div className="mt-10">
              {children}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
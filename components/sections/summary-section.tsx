import { Reveal } from "../reveal";

type SectionItem = {
  n: string;
  title: string;
};

interface SummarySectionProps {
  sections: SectionItem[];
}

export default function SummarySection({ sections }: SummarySectionProps) {
  return (
    <section className="border-b border-border bg-background-sand dark:bg-[oklch(0.16_0.015_50)]">
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Sumário
          </p>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-foreground/80">
            {sections.map((s) => (
              <li key={s.n}>
                <a
                  href={`#sec-${s.n}`}
                  className="flex items-baseline gap-3 hover:text-primary transition"
                >
                  <span className="font-serif text-primary/60">{s.n}.</span>
                  <span className="text-sm">{s.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

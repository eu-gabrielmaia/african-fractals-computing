import { Reveal } from "@/components/reveal";

interface QuoteProps {
  quote: string;
  author: string;
  source: string;
  year: string;
  translated: boolean;
}

export default function QuoteSection({quote, author, source,year, translated}: QuoteProps) {
  return (
    <section className="border-y border-border/60 bg-background-sand">
      <div className="mx-auto max-w-4xl px-5 md:px-8 py-20 text-center">
        <Reveal>
          <p className="font-serif text-2xl md:text-3xl leading-snug italic text-balance">
            &ldquo;{quote}&rdquo;
          </p>
          <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">
            — {author}, <em>{source}</em> ({year}) {translated && ("· tradução livre")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "História & Origens — Fractais",
  description:
    "Aldeias Ba-ila, Mokoulek, têxteis Kente, divinação Bamana: a matemática fractal intencional dos povos africanos.",
  openGraph: {
    title: "História & Origens — Fractais d'África",
    description:
      "Como culturas africanas codificaram a recursão e a auto-similaridade muito antes da palavra existir.",
  },
};

export default function HistoriaPage() {
  return (
    <article className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Capítulo II</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-none tracking-tight text-balance max-w-4xl mb-8">
          Onde a história foi pesquisada.
        </h1>
        <p className="text-lg md:text-xl text-foreground/75 max-w-3xl leading-relaxed mb-16">
          Cada parágrafo deste arquivo se apoia em décadas de etnomatemática, antropologia e história da computação. Explore as fontes, filtre por tipo, busque por autor — e mergulhe.
        </p>
      </Reveal>
    </article>
  );
}

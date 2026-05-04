import { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Sierpinski } from "@/components/sierpinski";
import { Anchor } from "@/components/anchor";

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
    <article className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-12">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Capítulo II - História</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-none tracking-tight text-balance max-w-4xl mb-8">
          História
        </h1>
        <p className="text-lg md:text-xl text-foreground/75 max-w-3xl leading-relaxed mb-16">
          Antropólogos do século XIX viam nas aldeias africanas desordem orgânica. Engano.
          Cada curva, cada repetição em escala, cada subdivisão era resultado de escolhas deliberadas,
          codificadas e transmitidas oralmente — uma matemática viva.
        </p>
      </Reveal>
      <Anchor nextLabel="Contextualização" nextRoute="/contextualizacao"/>
    </article>
  );
}

import { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Referências — Fractais",
  description:
    "Fontes, artigos e estudos que fundamentam a pesquisa sobre fractais africanos e sua relação com a computação.",
  openGraph: {
    title: "Referências — Fractais d'África",
    description:
      "Os autores e trabalhos que sustentam este projeto e ampliam a compreensão do tema.",
  },
};

export default function HistoriaPage() {
  return (
    <article className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
          Referências
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-none tracking-tight text-balance max-w-4xl mb-8">
          Fontes e fundamentos
        </h1>
        <p className="text-lg md:text-xl text-foreground/75 max-w-3xl leading-relaxed mb-16">
          Este projeto se baseia em estudos de etnomatemática, antropologia e
          computação. Explore autores, obras e materiais utilizados.
        </p>
      </Reveal>
    </article>
  );
}

import { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import {
  ExternalSimulator,
  HeroSection,
  Simulator,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Prática Fractal — Laboratório Interativo",
  description:
    "Explore padrões fractais através de simulações interativas baseadas em regras matemáticas, recursão e geração algorítmica.",
  openGraph: {
    title: "Laboratório Fractal Interativo",
    description:
      "Um ambiente prático para experimentar construção de fractais e estruturas recursivas em tempo real.",
  },
};

export default function PraticaPage() {
  return (
    <article>
      <HeroSection
        eyebrow="Veja na prática"
        title={
          <>
            Veja o padrão <em className="text-primary">se formar</em>
          </>
        }
        description="Ajuste parâmetros, observe repetições e entenda como a recursão cria
          estruturas complexas a partir de regras simples."
      ></HeroSection>
      <section className="mx-auto max-w-6xl px-5 md:px-8 py-6 md:py-8">
        <Reveal>
          <div className="mt-24">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Simulação generativa
            </p>

            <h2 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight max-w-3xl mb-4">
              Fractais criados em tempo real por inteligência computacional.
            </h2>

            <p className="text-base text-foreground/70 max-w-2xl mb-10">
              Aqui, os padrões não são apenas observados — eles são gerados. A
              partir de regras matemáticas e processos recursivos, a IA constrói
              estruturas fractais dinâmicas, permitindo explorar variações
              infinitas de formas inspiradas na geometria africana e na
              computação moderna.
            </p>
          </div>
        </Reveal>
        <Simulator />
      </section>

      <section className="mx-auto max-w-6xl px-5 md:px-8 py-8 md:py-16">
        <Reveal>
          <div className="mt-24">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Simuladores externos
            </p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight max-w-3xl mb-4">
              Explore fractais clássicos sem sair da página.
            </h2>
            <p className="text-base text-foreground/70 max-w-2xl mb-10">
              Dois laboratórios consagrados, embutidos aqui mesmo: o XaoS para
              zoom infinito em Mandelbrot e Julia, e o Fractal Maker para
              construir L-systems passo a passo — a ponte direta entre a
              geometria africana e a recursão computacional.
            </p>
          </div>
        </Reveal>
        <ExternalSimulator
          title="XaoS — Zoom em Mandelbrot & Julia"
          subtitle="Mergulhe em escalas infinitas. Clique e arraste para navegar."
          src="https://xaos-project.github.io/XaoSjs/"
          href="https://xaos-project.github.io/XaoSjs/"
        />
        <ExternalSimulator
          title="Fractal Maker — L-systems & curvas recursivas"
          subtitle="Ajuste ângulo, ramificações e iterações. Veja a tudo crescer linha a linha."
          src="https://sciencevsmagic.net/fractal/#0060,0090,1,1,0,0,1"
          href="https://sciencevsmagic.net/fractal/#0060,0090,1,1,0,0,1"
        />
      </section>
    </article>
  );
}

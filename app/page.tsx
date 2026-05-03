import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Sierpinski } from "@/components/sierpinski";
import { FractalTree } from "@/components/fractralTree";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Fractais d'África — A geometria que o mundo esqueceu",
  description:
    "Como padrões fractais milenares africanos anteciparam a recursão, os algoritmos e o design generativo da computação moderna.",
  openGraph: {
    title: "Fractais d'África — A geometria que o mundo esqueceu",
    description:
      "Padrões fractais africanos e a história secreta da computação.",
  },
};

const cards = [
  {
    href: "/historia",
    title: "História & Origens",
    desc: "Aldeias Ba-ila, têxteis Kente, divinação Bamana — a matemática ancestral.",
  },
  {
    href: "/galeria",
    title: "Galeria",
    desc: "Arquitetura, têxteis, máscaras e areia: o fractal feito objeto.",
  },
  {
    href: "/linha-do-tempo",
    title: "Linha do Tempo",
    desc: "Da prática ancestral a Mandelbrot, Eglash e à IA generativa.",
  },
  {
    href: "/computacao",
    title: "Computação",
    desc: "Recursão, L-systems e design generativo nascidos antes do código.",
  },
  {
    href: "/visualizador",
    title: "Visualizador",
    desc: "Mexa nos sliders e veja a recursão desenhar uma aldeia ancestral.",
  },
  {
    href: "/referencias",
    title: "Notas & Referências",
    desc: "Bibliografia, artigos e fontes para aprofundar a pesquisa.",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-areia">
        <div className="absolute inset-0 -z-10 opacity-[0.07] flex items-center justify-center pointer-events-none">
          <Sierpinski
            depth={6}
            size={900}
            color="oklch(0.30 0.11 265)"
            animate
            className="w-[120%] max-w-none"
          />
        </div>
        <div className="absolute top-20 -right-20 -z-10 opacity-[0.10] hidden md:block">
          <FractalTree
            depth={8}
            className="w-105 h-105 text-[oklch(0.52_0.18_32)] animate-float-slow"
          />
        </div>
        <div className="absolute bottom-10 -left-15 -z-10 opacity-[0.10] hidden md:block">
          <Sierpinski
            depth={5}
            size={300}
            color="oklch(0.78 0.15 85)"
            fill
            className="animate-float-slow"
          />
        </div>

        <div className="mx-auto max-w-6xl px-5 md:px-8 pt-20 pb-28 md:pt-32 md:pb-40">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
              Um ensaio visual
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-balance max-w-5xl">
              A geometria que o mundo <em className="text-primary">esqueceu</em>
              .
            </h1>
          </Reveal>
          <Reveal delay={350}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/75 leading-relaxed">
              Séculos antes de Mandelbrot, comunidades africanas desenhavam
              aldeias, teciam panos e adivinhavam o futuro com a mesma
              matemática que hoje move computadores: a
              <em className="text-foreground"> recursão</em>, a{" "}
              <em className="text-foreground">auto-similaridade</em>, o
              <em className="text-foreground"> algoritmo</em>.
            </p>
          </Reveal>
          <Reveal delay={550}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/historia"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:gap-3"
              >
                Começar a história <ArrowRight size={16} />
              </Link>
              <Link
                href="/visualizador"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-foreground/50 transition"
              >
                <Sparkles size={16} /> Veja na prática
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="border-y border-border/60 bg-background-sand">
        <div className="mx-auto max-w-4xl px-5 md:px-8 py-20 text-center"></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-12">
        <div className="mb-8">
          <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-balance max-w-5xl">
            Confira os capitulos
          </h2>
          <p className="mt-2 max-w-2xl text-lg md:text-xl text-foreground/75 leading-relaxed">
            Quer entender melhor? Siga nosso{" "}
            <em className="text-foreground">roteiro sugerido</em>.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            return (
              <div
                key={i}
                className="bg-background-sand/50 border border-border rounded-2xl p-4"
              >
                <div className="my-2">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-primary">
                      {i + 1}.
                    </h3>
                    <h3 className="text-2xl font-medium">{card.title}</h3>
                  </div>
                  <p>{card.desc}</p>
                </div>
                <Button asChild>
                  <Link
                    href={card.href}
                    className="w-full bg-primary/80"
                  >
                    Acesse
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-background-ancestral text-background-sand p-10 md:p-16">
            <div className="absolute inset-0 opacity-20 flex items-center justify-end pr-[-100px]">
              <FractalTree
                depth={9}
                className="w-125 h-125 text-[oklch(0.78_0.13_85)]"
              />
            </div>
            <div className="relative max-w-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[oklch(0.78_0.13_85)] mb-4">
                Laboratório
              </p>
              <h3 className="font-serif text-3xl md:text-4xl mb-4">
                Desenhe um fractal com as suas mãos.
              </h3>
              <p className="opacity-80 mb-8 leading-relaxed">
                Mexa nos sliders, veja o padrão emergir e descubra as poucas
                linhas de código que separam um algoritmo de uma aldeia.
              </p>
              <Link
                href="/visualizador"
                className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.78_0.13_85)] text-[oklch(0.22_0.015_50)] px-6 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                Abrir visualizador <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

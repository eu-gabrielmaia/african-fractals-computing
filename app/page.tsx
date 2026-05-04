import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Sierpinski } from "@/components/sierpinski";
import { FractalTree } from "@/components/fractralTree";
import { ArrowRight, MonitorPlay } from "lucide-react";

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

interface Card {
  num: string;
  href: string;
  title: string;
  desc: string;
}

const cards: Card[] = [
  {
    num: "01",
    href: "/introducao",
    title: "Introdução",
    desc: "Entenda o que são fractais africanos e por que esses padrões aparecem em diferentes contextos da vida cotidiana.",
  },
  {
    num: "02",
    href: "/historia",
    title: "História",
    desc: "Veja como esses padrões surgiram e foram desenvolvidos ao longo do tempo em diferentes sociedades africanas.",
  },
  {
    num: "03",
    href: "/contextualizacao",
    title: "Contextualização",
    desc: "Veja exemplos reais como aldeias Ba-ila, tecidos Kente e práticas tradicionais que já utilizavam padrões fractais antes da ciência moderna e descubra como esses padrões foram 'esquecidos'",
  },
  {
    num: "04",
    href: "/computacao",
    title: "Computação",
    desc: "Aprenda como ideias como recursão e algoritmos já estavam presentes nessas práticas e como isso se conecta com a computação atual.",
  },
  {
    num: "05",
    href: "/galeria",
    title: "Galeria",
    desc: "Explore imagens de arquitetura, arte e objetos que mostram fractais na prática, com exemplos visuais diretos.",
  },
  {
    num: "06",
    href: "/pratica",
    title: "Veja na Prática",
    desc: "Interaja com simulações e visualize como padrões fractais são gerados passo a passo usando conceitos de computação.",
  },
  {
    num: "07",
    href: "/referencias",
    title: "Notas & Referências",
    desc: "Acesse fontes, artigos e materiais usados no projeto para aprofundar seu entendimento.",
  },
];

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
              Quando cultura vira algoritmo
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-balance max-w-5xl">
              Uma forma de ver o mundo que muita gente{" "}
              <em className="text-primary">ignorou</em>.
            </h1>
          </Reveal>
          <Reveal delay={350}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/75 leading-relaxed">
              Muito antes de existir computador, pessoas já organizavam aldeias,
              criavam tecidos e representavam ideias usando padrões que se
              repetem. Hoje a gente chama isso de{" "}
              <em className="text-foreground">recursão</em> e{" "}
              <em className="text-foreground">algoritmo</em> — mas isso já
              existia na prática, no dia a dia.
            </p>
          </Reveal>
          <Reveal delay={550}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/historia"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:gap-3"
              >
                Começar leitura <ArrowRight size={16} />
              </Link>
              <Link
                href="/visualizador"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:border-foreground/50 transition"
              >
                <MonitorPlay size={16} /> Explorar na prática
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="border-y border-border/60 bg-[oklch(0.93_0.022_75)]">
        <div className="mx-auto max-w-4xl px-5 md:px-8 py-20 text-center">
          <Reveal>
            <p className="font-serif text-2xl md:text-3xl leading-snug italic text-balance">
              {`"Quando os matemáticos europeus descobriram os fractais nos anos 1970,
  os povos africanos já os tinham construído nas suas aldeias por séculos."`}
            </p>
            <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">
              — Ron Eglash, <em>African Fractals</em> (1999) · tradução livre
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl mb-3">
            Confira os capitulos
          </h2>
          <p className="text-foreground/70 max-w-2xl mb-12">
            Quer entender melhor? Siga nosso{" "}
            <em className="text-foreground">roteiro sugerido</em>.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Reveal key={c.num} delay={1 * 100}>
              <Link
                href={c.href}
                className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/60 hover:shadow-2xl hover:-translate-y-1"
              >
                <h3 className="font-serif text-2xl mb-2">
                  <em className="text-primary">{c.num}.</em> {c.title}
                </h3>
                <p className="text-foreground/70 mb-6 max-w-md">{c.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Explorar{" "}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
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
                Mão na massa
              </p>
              <h3 className="font-serif text-3xl md:text-4xl mb-4">
                Simuladores de fractais
              </h3>
              <p className="opacity-80 mb-8 leading-relaxed">
                Use alguns simuladores de fractais e aprenda na prática
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

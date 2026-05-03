import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 md:px-8 pt-20 pb-28 md:pt-32 md:pb-40"></div>
      </section>

      {/* MANIFESTO */}
      <section className="border-y border-border/60 bg-[oklch(0.93_0.022_75)]">
        <div className="mx-auto max-w-4xl px-5 md:px-8 py-20 text-center"></div>
      </section>

      {/* CARDS */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            return (
              <div key={i} className="">
                <div className="my-4">
                  <h3 className="text-2xl">{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
                <Button asChild>
                  <Link
                    href={card.href}
                    className="bg-blue-500 py-2 px-4 border border-boder"
                  >
                    Link
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA visualizador */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-24"></section>
    </>
  );
}

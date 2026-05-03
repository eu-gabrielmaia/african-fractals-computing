import { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Sierpinski } from "@/components/sierpinski";

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

const sections = [
  {
    title: "Aldeias Ba-ila — Zâmbia",
    body: "Vista do alto, a aldeia Ba-ila revela um anel de casas circulares que, por sua vez, formam um anel maior. No fundo desse anel, separado e sagrado, repete-se um agrupamento idêntico em escala menor: a casa do chefe, com sua própria família miniaturizada. É o mesmo padrão repetido em três escalas — a definição precisa de um fractal, séculos antes de Mandelbrot.",
    pull: "Três escalas, uma só forma.",
  },
  {
    title: "Mokoulek — Camarões",
    body: "No norte de Camarões, a aldeia de Mokoulek se organiza em retângulos dentro de retângulos: cercados que abrigam cercados que abrigam cercados, cada nível com função social distinta. A planta urbana é, literalmente, um algoritmo recursivo materializado em barro e palha.",
    pull: "Cercados dentro de cercados — recursão em barro.",
  },
  {
    title: "Têxteis Kente — Gana",
    body: "Os tecelões Asante e Ewe constroem panos Kente combinando módulos quadrados que se repetem com pequenas variações de cor e simetria. Cada faixa é tecida separadamente; depois, costuradas, formam um padrão maior cuja estrutura espelha cada parte. A informação codificada nas cores e nos motivos comunica provérbios, status e história.",
    pull: "O pano fala — em geometria.",
  },
  {
    title: "Divinação Bamana — Mali",
    body: "Os adivinhos Bamana praticam a sand divination: traçam quatro linhas aleatórias na areia e contam os pares para gerar símbolos binários. O processo é repetido recursivamente, gerando árvores de decisão. Séculos depois, o mesmo procedimento — recombinado por matemáticos árabes e levado à Europa — tornou-se a base lógica da álgebra booleana e da computação.",
    pull: "Da areia ao bit binário.",
  },
  {
    title: "Penteados, esculturas e arquitetura sagrada",
    body: "Tranças que se subdividem em tranças menores nas comunidades Mangbetu; máscaras com ornamentos que repetem a estrutura da própria máscara; templos etíopes em cruz com cruzes menores em cada extremidade. A auto-similaridade não era acidente estético — era linguagem cultural, cosmológica e matemática.",
    pull: "Auto-similaridade como linguagem.",
  },
];

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

import { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Galeria — Fractais",
  description:
    "Arquitetura, arte e objetos que mostram padrões fractais aplicados na prática em diferentes contextos.",
  openGraph: {
    title: "Galeria — Fractais d'África",
    description:
      "Uma coleção visual de padrões que revelam repetição, escala e organização no mundo real.",
  },
};

type Filter = "todos" | "arquitetura" | "textil" | "arte" | "divinacao";

interface Item {
  id: string;
  title: string;
  culture: string;
  type: Exclude<Filter, "todos">;
  short: string;
  long: string;
  pattern: string;
  visual: "sierpinski" | "tree" | "rings" | "weave" | "binary";
  color: string;
}

const items: Item[] = [
  {
    id: "ba-ila",
    title: "Aldeia Ba-ila",
    culture: "Zâmbia",
    type: "arquitetura",
    short: "Anel de anéis",
    long: "Visto do alto, o povoado revela círculos dentro de círculos: famílias, clãs e a casa do chefe — todos repetindo a mesma estrutura em escalas decrescentes.",
    pattern: "Auto-similaridade em 3 escalas",
    visual: "rings",
    color: "oklch(0.55 0.16 35)",
  },
  {
    id: "mokoulek",
    title: "Mokoulek",
    culture: "Camarões",
    type: "arquitetura",
    short: "Cercados recursivos",
    long: "Retângulos contendo retângulos contendo retângulos. Cada nível tem função social — uma planta urbana que é, literalmente, recursão.",
    pattern: "Recursão retangular",
    visual: "sierpinski",
    color: "oklch(0.55 0.16 35)",
  },
  {
    id: "kente",
    title: "Pano Kente",
    culture: "Gana — Asante",
    type: "textil",
    short: "Tecelagem modular",
    long: "Faixas de tecido com motivos que se repetem em escalas e cores. O pano inteiro é um mosaico auto-similar de provérbios e histórias.",
    pattern: "Repetição modular escalar",
    visual: "weave",
    color: "oklch(0.78 0.13 85)",
  },
  {
    id: "bogolan",
    title: "Bogolanfini",
    culture: "Mali — Bamana",
    type: "textil",
    short: "Tinta de lama",
    long: "Padrões geométricos pintados com lama fermentada, organizados em grades onde cada célula contém variações da mesma estrutura.",
    pattern: "Tesselagem variacional",
    visual: "weave",
    color: "oklch(0.32 0.09 270)",
  },
  {
    id: "mangbetu",
    title: "Penteado Mangbetu",
    culture: "RDC — Mangbetu",
    type: "arte",
    short: "Tranças em árvore",
    long: "Tranças que se subdividem em tranças menores, formando uma estrutura arbórea — a mesma topologia de uma árvore fractal.",
    pattern: "Ramificação binária",
    visual: "tree",
    color: "oklch(0.22 0.015 50)",
  },
  {
    id: "mascara",
    title: "Máscara cerimonial",
    culture: "África Ocidental",
    type: "arte",
    short: "Ornamento auto-similar",
    long: "Os ornamentos da máscara repetem, em miniatura, o contorno geral do rosto esculpido — uma assinatura recursiva.",
    pattern: "Reflexo de escala",
    visual: "sierpinski",
    color: "oklch(0.55 0.16 35)",
  },
  {
    id: "areia",
    title: "Divinação na areia",
    culture: "Mali — Bamana",
    type: "divinacao",
    short: "Algoritmo binário",
    long: "Quatro linhas traçadas; pares contados; símbolos gerados; recombinados recursivamente. O sistema chegou à Europa medieval e plantou as raízes do binário.",
    pattern: "Árvore de decisão recursiva",
    visual: "binary",
    color: "oklch(0.32 0.09 270)",
  },
  {
    id: "ifa",
    title: "Tabuleiro de Ifá",
    culture: "Nigéria — Iorubá",
    type: "divinacao",
    short: "Combinatória sagrada",
    long: "256 odus, gerados pela combinação recursiva de 16 figuras. Um sistema de classificação que antecipou a estrutura de um banco de dados em árvore.",
    pattern: "Combinatória 4 bits × 4 bits",
    visual: "binary",
    color: "oklch(0.78 0.13 85)",
  },
];

const filters: { id: Filter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "arquitetura", label: "Arquitetura" },
  { id: "textil", label: "Têxtil" },
  { id: "arte", label: "Arte" },
  { id: "divinacao", label: "Divinação" },
];

export default function GaleriaPage() {
  return (
    <article className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
          Galeria
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-none tracking-tight text-balance max-w-4xl mb-8">
          O padrão visto de perto
        </h1>
        <p className="text-lg md:text-xl text-foreground/75 max-w-3xl leading-relaxed mb-16">
          Arquitetura, tecidos e objetos revelam como esses padrões aparecem na
          prática. Explore exemplos visuais diretos.
        </p>
      </Reveal>
    </article>
  );
}

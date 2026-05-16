import { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Filter } from "@/components/filter";
import { GaleriaGrid } from "@/components/sections";

export const metadata: Metadata = {
  title: "Galeria — Fractais d'África",
  description:
    "Uma coleção visual de objetos, construções, ilustrações e imagens que revelam a presença dos fractais na cultura africana.",
  openGraph: {
    title: "Galeria — Fractais d'África",
    description:
      "Explore objetos, arquitetura, arte e ilustrações que mostram a geometria fractal viva na cultura africana.",
  },
};

export type MediaCategory =
  | "objetos"
  | "arquitetura"
  | "ilustracoes"
  | "arte"
  | "texteis";

export type FilterType = "todos" | MediaCategory;

export const filters = [
  { id: "todos", label: "Todos" },
  { id: "objetos", label: "Objetos" },
  { id: "arquitetura", label: "Arquitetura" },
  { id: "ilustracoes", label: "Ilustrações" },
  { id: "arte", label: "Arte" },
  { id: "texteis", label: "Têxteis" },
];

export type MediaItem = {
  id: string;
  title: string;
  description?: string;
  type: MediaCategory;
  src: string;
  aspect?: "portrait" | "landscape" | "square";
  author?: string;
  year?: string | number;
  origin?: string;
};

export const midias: MediaItem[] = [
  {
    id: "logone-birni-aerea",
    title: "Vista Aérea de Logone-Birni",
    description:
      "Fotografia aérea da cidade de Logone-Birni, nos Camarões, mostrando a estrutura fractal retangular dos compostos familiares.",
    type: "ilustracoes",
    src: "/images/logone_birni_camaroes_aerea.png",
    aspect: "landscape",
    author: "Jacques Jangoux",
    year: 2006,
    origin: "Camarões",
  },
  {
    id: "aldeia-nankani-diagrama",
    title: "Diagrama da Aldeia Nankani",
    description:
      "Diagrama da organização circular das casas Nankani em diferentes escalas.",
    type: "ilustracoes",
    src: "/images/nankani_aldeia_circular_diagrama.png",
    aspect: "landscape",
    origin: "Gana",
  },
  {
    id: "nankani-casa-fachada",
    title: "Casa Circular Nankani — Fachada",
    description:
      "Casa circular tradicional do povo Nankani com cobertura de palha e paredes de adobe.",
    type: "arquitetura",
    src: "/images/nankani_casa_circular_gana_1.png",
    aspect: "landscape",
    origin: "Gana",
  },
  {
    id: "nankani-casa-entrada",
    title: "Casa Circular Nankani — Entrada",
    description:
      "Entrada de uma casa circular Nankani com padrões geométricos pintados.",
    type: "arquitetura",
    src: "/images/nankani_casa_circular_gana_2.png",
    aspect: "landscape",
    origin: "Gana",
  },
  {
    id: "placa-recursiva",
    title: "Placa Decorativa com Padrão Recursivo",
    description:
      "Objeto decorativo em madeira com entalhes geométricos repetitivos.",
    type: "objetos",
    src: "/images/objeto_placa_decorativa_angola.png",
    aspect: "landscape",
    origin: "Angola",
  },
  {
    id: "colar-dentes",
    title: "Colar de Dentes com Fio Colorido",
    description:
      "Adorno cultural composto por dentes organizados em padrão repetitivo.",
    type: "objetos",
    src: "/images/objeto_colar_dentes_angola.png",
    aspect: "landscape",
    origin: "África",
  },
  {
    id: "escultura-madeira",
    title: "Peça Esculpida em Madeira",
    description:
      "Escultura em madeira com padrões geométricos entalhados.",
    type: "objetos",
    src: "/images/objeto_escultura_madeira_angola.png",
    aspect: "square",
    origin: "África",
  },
  {
    id: "sona-areia-1",
    title: "Sona — Desenho na Areia",
    description:
      "Desenho Sona traçado na areia pelo povo Tchokwe.",
    type: "arte",
    src: "/images/sona_angola_areia_1.png",
    aspect: "landscape",
    origin: "Angola",
  },
  {
    id: "sona-areia-2",
    title: "Sona — Traçado Complexo",
    description:
      "Exemplo avançado de desenho Sona com traçado contínuo.",
    type: "arte",
    src: "/images/sona_angola_areia_2.png",
    aspect: "landscape",
    origin: "Angola",
  },
  {
    id: "sona-etnomatematica",
    title: "Padrões Sona — Etnomatemática",
    description:
      "Coleção de padrões algorítmicos organizados pela etnomatemática.",
    type: "ilustracoes",
    src: "/images/sona_angola_padroes_etnomatematica.png",
    aspect: "landscape",
    origin: "Angola",
  },
  {
    id: "sahel-paraventos-1",
    title: "Para-ventos Fractais do Sahel",
    description:
      "Estruturas de palha construídas em padrão fractal para proteção agrícola.",
    type: "ilustracoes",
    src: "/images/sahel_paraventos_palha_aerea.png",
    aspect: "portrait",
    origin: "Sahel, África Ocidental",
  },
  {
    id: "sahel-paraventos-2",
    title: "Para-ventos do Sahel — Vista Aérea",
    description:
      "Vista aérea da repetição estrutural dos para-ventos do Sahel.",
    type: "arquitetura",
    src: "/images/sahel_paraventos_vista_aerea_2.png",
    aspect: "portrait",
    origin: "Sahel, África Ocidental",
  },
  {
    id: "kente-padrao-1",
    title: "Tecido Kente — Padrão 1",
    description:
      "Tecido Kente com padrões geométricos repetidos.",
    type: "texteis",
    src: "/images/kente_tecido_padrao_1.png",
    aspect: "portrait",
    origin: "Gana",
  },
  {
    id: "kente-padrao-2",
    title: "Tecido Kente — Padrão 2",
    description:
      "Kente com triângulos coloridos e simetria geométrica.",
    type: "texteis",
    src: "/images/kente_tecido_padrao_2.png",
    aspect: "landscape",
    origin: "Gana",
  },
  {
    id: "kente-padrao-3",
    title: "Tecido Kente — Padrão 3",
    description:
      "Faixas geométricas organizadas em repetição modular.",
    type: "texteis",
    src: "/images/kente_tecido_padrao_3.png",
    aspect: "landscape",
    origin: "Gana",
  },
  {
    id: "kente-padrao-4",
    title: "Tecido Kente — Padrão 4",
    description:
      "Peça Kente com zigue-zagues e blocos coloridos.",
    type: "texteis",
    src: "/images/kente_tecido_padrao_4.png",
    aspect: "landscape",
    origin: "Gana",
  },
  {
    id: "kente-padrao-5",
    title: "Tecido Kente — Padrão 5",
    description:
      "Conjunto de tecidos Kente organizados em padrões variados.",
    type: "texteis",
    src: "/images/kente_tecido_padrao_5.png",
    aspect: "landscape",
    origin: "Gana",
  },
  {
    id: "tecelao-kente",
    title: "Tecelão Fabricando Tecido Kente",
    description:
      "Tecelão utilizando tear tradicional para produzir tecido Kente.",
    type: "texteis",
    src: "/images/kente_tecelao_fabricando_2017.png",
    aspect: "portrait",
    year: 2017,
    origin: "Gana",
    author: "Wikimedia Commons",
  },
];

export default async function GaleriaPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const activeFilter: FilterType = (params.type as FilterType) || "todos";

  const filtered =
    activeFilter === "todos"
      ? midias
      : midias.filter((m) => m.type === activeFilter);

  return (
    <article className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
          Galeria
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-none tracking-tight text-balance max-w-4xl mb-8">
          O fractal em imagem
        </h1>
        <p className="text-lg md:text-xl text-foreground/75 max-w-3xl leading-relaxed mb-16">
          Objetos, construções, têxteis e arte que revelam como a geometria
          fractal permeia a cultura africana — do micro ao macro, do detalhe ao
          todo.
        </p>
      </Reveal>
      <section>
        <Filter filters={filters} paramKey="type" />

        {filtered.length === 0 ? (
          <div className="text-center py-24 text-foreground/60">
            <p className="text-lg">Nenhuma mídia encontrada</p>
            <p className="text-sm mt-2">Tente selecionar outra categoria.</p>
          </div>
        ) : (
          <GaleriaGrid items={filtered} />
        )}
      </section>
    </article>
  );
}
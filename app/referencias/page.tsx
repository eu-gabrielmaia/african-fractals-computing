import { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { HeroSection } from "@/components/sections";
import Link from "next/link";
import { Filter } from "@/components/filter";
import { ArrowRight } from "lucide-react";

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

type Category = "video" | "livro-artigo" | "site" | "simulador";
type FilterType = "todos" | Category;

const filters = [
  { id: "todos", label: "Todos" },
  { id: "livro-artigo", label: "Livro/Artigo" },
  { id: "simulador", label: "Simulador" },
  { id: "site", label: "Site" },
  { id: "video", label: "Vídeo" },
];
interface Reference {
  id: string;
  title: string;
  author?: string;
  year?: number;
  link?: string;
  type: Exclude<FilterType, "todos">;
}

const references: Reference[] = [
  {
    id: "african-fractals-modern-computing-indigenous-design",
    title: "African Fractals: Modern Computing and Indigenous Design",
    author: "Ron Eglash",
    year: 1999,
    link: "https://monoskop.org/images/f/fc/Eglash_Ron_African_Fractals_Modern_Computing_and_Indigenous_Design.pdf",
    type: "livro-artigo",
  },
  {
    id: "fractals-in-african-settlement-architecture",
    title: "Fractals in African Settlement Architecture",
    author: "Compartilhado por Ron Eglash",
    year: 1998,
    link: "https://www.academia.edu/23699526/Fractals_in_African_settlement_architecture",
    type: "livro-artigo",
  },
  {
    id: "eglash-fractals-heart-african-designs",
    title: "Ron Eglash: The fractals at the heart of African designs",
    author: "Ron Eglash",
    year: 2007,
    link: "https://www.youtube.com/watch?v=7n36qV4Lk94",
    type: "video",
  },
  {
    id: "morte-benoit",
    title: "Benoît Mandelbrot – Morreu o pai dos fractais",
    author: "BE AE",
    year: 2010,
    link: "https://bibliomag.wordpress.com/2010/11/22/benoit-mandelbrot-morreu-o-pai-dos-fractais/",
    type: "site",
  },
  {
    id: "fractals-heart-indigenous-african-architecture",
    title: "The Fractals at the Heart of Indigenous African Architecture",
    author:
      "Peter Bembir - doutorando no Instituto de Estudos Africanos da Universidade de Gana.",
    year: 2019,
    link: "https://journals.co.za/doi/epdf/10.4314/contjas.v6i1.1",
    type: "livro-artigo",
  },
  {
    id: "o-que-e-fractal",
    title: "O que é um Fractal?",
    author: "Professor Possani",
    year: 2019,
    link: "https://www.youtube.com/watch?v=DEzzaQaEYjo",
    type: "video",
  },
  {
    id: "african-fractals-hidden-mathematics-architecture",
    title: "African Fractals: The Hidden Mathematics in African Architecture",
    author: "Wonders of Africa",
    year: 2026,
    link: "https://www.youtube.com/watch?v=tXLd5TCyMmE",
    type: "video",
  },
  {
    id: "artigo-ufb",
    title: "Artigo de alunos da Universidade Federal da Bahia",
    author: "Alunos da Universidade Federal da Bahia",
    year: 2025,
    link: "https://www.sbembrasil.org.br/eventos/index.php/ebem/article/view/984/804",
    type: "livro-artigo",
  },
  {
    id: "artigo-unesp",
    title: "PANO KENTE: ESTRUTURA E ESTÉTICA AFRICANA",
    author: "Mestranda e professora da pós-graduação em Design da UNESP",
    year: 2013,
    link: "https://www.educacaografica.inf.br/wp-content/uploads/2014/01/14_PANOS-KENTE_162_180.pdf",
    type: "livro-artigo",
  },
  {
    id: "fractal-foundation",
    title: "Fractal Foundation – Fractals are SMART: Science, Math and Art!",
    author: "FractalMan",
    year: 2025,
    link: "https://fractalfoundation.org/",
    type: "site",
  },
  {
    id: "simulador-fractal-machine",
    title: "Simulador - FRACTAL MACHINE",
    author: "Nico Disseldorp",
    link: "https://sciencevsmagic.net/fractal/#0060,0090,1,1,0,0,1",
    type: "simulador",
  },
  {
    id: "simulador-xaos",
    title: "Simulador - XaoS",
    author: "J.B. Langston",
    year: 2020,
    link: "https://xaos-project.github.io/XaoSjs/",
    type: "simulador",
  },
  {
    id: "matematica-africana-fractais",
    title: "Matemática no Continente Africano — Fractais",
    author: "Matemática é Fácil",
    year: 2016,
    link: "https://www.matematicaefacil.com.br/2016/07/matematica-continente-africano-fractais.html",
    type: "site",
  },

  {
    id: "maisons-traditionnelles-ghana",
    title: "Maisons Traditionnelles du Ghana",
    author: "Maison Monde",
    year: 2026,
    link: "https://maison-monde.com/maisons-traditionnelles-ghana/",
    type: "site",
  },

  {
    id: "ba-ila-fractal-village",
    title: "Social Organization Based on Fractals: Example of a Ba-Ila Village",
    author: "Dossou Kossi",
    year: 2026,
    link: "https://www.linkedin.com/pulse/social-organization-based-fractals-example-ba-ila-village-dossou-6bf1f",
    type: "livro-artigo",
  },

  {
    id: "wfp-sahel-resilience",
    title: "Integrated Resilience in the Sahel",
    author: "World Food Programme (WFP)",
    year: 2026,
    link: "https://www.wfp.org/publications/integrated-resilience-sahel",
    type: "site",
  },

  {
    id: "unesco-heritage-committee",
    title: "Intangible Cultural Heritage Committee 2023",
    author: "UNESCO",
    year: 2023,
    link: "https://www.unesco.org/en/intangible-cultural-heritage/committee-2023",
    type: "site",
  },

  {
    id: "rna-sona-onu",
    title: "UNESCO: Sona posta à consulta pública na ONU",
    author: "Rádio Nacional de Angola (RNA)",
    year: 2023,
    link: "https://rna.ao/rna.ao/2023/09/02/unesco-sona-posta-a-consulta-publica-na-onu/",
    type: "livro-artigo",
  },

  {
    id: "mitos-lendas-pontas-dedos",
    title: "Mitos e Lendas nas Pontas dos Dedos",
    author: "Museu Digital Afro-Português",
    year: 2026,
    link: "https://museudigitalafroportugues.wordpress.com/diversidade-cultural-e-desenvolvimento/oficina-de-museologia-social/mitos-e-lendas-nas-pontas-dos-dedos/",
    type: "livro-artigo",
  },

  {
    id: "ethnomathematics-digital-era",
    title: "Art, Ethnomathematics and the Digital Era",
    author: "Va2Rosa",
    year: 2026,
    link: "https://va2rosa.medium.com/art-ethnomathematics-and-the-digital-era-4bc30b0bf634",
    type: "livro-artigo",
  },

  {
    id: "language-of-kente",
    title: "The Language of Kente Fabric in Context",
    author: "Explore VC",
    year: 2026,
    link: "https://www.explore-vc.org/en/objects/the-language-of-kente-fabric-in-context.html",
    type: "livro-artigo",
  },

  {
    id: "kente-color-meanings",
    title: "Kente Cloth Color Meanings",
    author: "Utaknuti Hair Lesson",
    year: 2026,
    link: "https://utaknutihairlesson.z21.web.core.windows.net/kente-cloth-color-meanings.html",
    type: "site",
  },

  {
    id: "man-weaning-kente",
    title: "Man Weaning Kente Cloth",
    author: "Wikimedia Commons",
    year: 2026,
    link: "https://commons.wikimedia.org/wiki/File%3AMan_Weaning_Kente_Cloth.jpg",
    type: "site",
  },

  {
    id: "ghanaian-kente-weaving-video",
    title: "Learning how to Weave Ghanaian Kente | Ghana Tour",
    author: "YouTube",
    year: 2026,
    link: "https://www.youtube.com/watch?v=RTiBhJ36zLA",
    type: "video",
  },
];

export default async function ReferenciaPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;

  const activeFilter: FilterType = (params.type as FilterType) || "todos";

  const filtered =
    activeFilter === "todos"
      ? references
      : references.filter((r) => r.type === activeFilter);

  const filterMap = Object.fromEntries(filters.map((f) => [f.id, f.label]));

  return (
    <article>
      <HeroSection
        eyebrow="Referências"
        title={<><em className="text-primary">Fontes</em> e fundamentos</>}
        description="Este estudo se apoia em pesquisas de etnomatemática, antropologia e ciência da computação, analisando a relação entre estruturas geométricas presentes em culturas africanas e princípios da computação moderna. Abaixo estão as principais obras e autores utilizados como base teórica."
      />

      <section className="mx-auto max-w-6xl px-5 md:px-8 py-8 md:py-16">
        <Filter filters={filters} paramKey="type" />
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-foreground/60">
            <p className="text-lg">Nenhuma referência encontrada</p>
            <p className="text-sm mt-2">Tente selecionar outra categoria.</p>
          </div>
        ) : (
          <ul className="space-y-6">
            {filtered.map((ref) => (
              <Reveal key={ref.id} delay={100}>
                <Link
                  href={ref.link || "#"}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-card/50 p-8 transition-all hover:border-primary/60 hover:shadow-2xl hover:-translate-y-1"
                >
                  <h3 className="font-serif text-2xl mb-2">{ref.title}</h3>

                  <p className="text-foreground/70 mb-4 max-w-md">
                    {ref.author && `${ref.author}`}{" "}
                    {ref.year && `(${ref.year})`}
                  </p>
                  <div className="flex justify-between">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      Ver referência
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>

                    <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                      {filterMap[ref.type]}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
}

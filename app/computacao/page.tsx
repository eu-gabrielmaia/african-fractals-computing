import { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import ImagePlaceholder from "@/components/image-placeholder";
import { HeroSection, SummarySection } from "@/components/sections";

export const metadata: Metadata = {
  title:
    "Relação dos Fractais Africanos com a Computação Moderna — Fractais d'África",
  description:
    "Ensaio de Malick Figueroa Sanó sobre como os fractais africanos antecipam princípios da computação moderna: autossimilaridade, recursão e geração procedural.",
  openGraph: {
    title: "Relação dos Fractais Africanos com a Computação Moderna",
    description:
      "Autossimilaridade, recursividade e geração procedural — da aldeia ao algoritmo.",
  },
};

interface Section {
  n: string;
  title: string;
  paragraphs: string[];
  imgCaption: string;
  imgAlt: string;
}

const sections: Section[] = [
  {
    n: "01",
    title: "Introdução",
    paragraphs: [
      "No livro African Fractals, Ron Eglash argumenta que a geometria fractal não deve ser vista apenas como uma descoberta recente ligada aos computadores. Segundo o autor, muitos povos africanos já utilizavam princípios semelhantes em construções, artefatos e sistemas de organização espacial.",
      "O ponto central da obra é demonstrar que matemática e cultura não estão separadas: formas geométricas também expressam valores sociais, modos de habitar e formas de pensar. Assim, estudar fractais africanos permite compreender simultaneamente história da ciência, antropologia e computação.",
    ],
    imgCaption: "Capa / referência visual de African Fractals (Ron Eglash).",
    imgAlt: "Imagem ilustrativa da introdução",
  },
  {
    n: "02",
    title: "Autossimilaridade e arquitetura",
    paragraphs: [
      "Fractais apresentam autossimilaridade, isto é, partes menores preservam características estruturais do todo. Eglash mostra que em diversas aldeias africanas há círculos de casas organizados dentro de círculos maiores, ou retângulos internos repetindo o desenho externo.",
      "Em vez de simples coincidência visual, esses padrões indicam planejamento espacial. A casa pode refletir a família; o conjunto de casas, o clã; e a aldeia, a comunidade ampliada. Dessa forma, a geometria traduz relações sociais. O espaço construído torna-se também linguagem simbólica.",
    ],
    imgCaption:
      "Vista aérea de uma aldeia circular africana (ex.: Ba-ila, Zâmbia).",
    imgAlt: "Imagem ilustrativa de aldeia circular",
  },
  {
    n: "03",
    title: "Recursividade e pensamento algorítmico",
    paragraphs: [
      "A recursividade é talvez o elo mais direto entre fractais e computação moderna. Em programação, uma função recursiva resolve um problema dividindo-o em versões menores de si mesma até alcançar uma condição básica de parada.",
      "Eglash mostra que muitos desenhos africanos seguem lógica semelhante: uma forma inicial gera outras formas menores, repetidas em sequência. Em termos computacionais, seria como definir uma regra e executá-la sucessivamente. Isso ajuda a perceber que pensamento algorítmico não nasce apenas com computadores digitais; ele também pode aparecer em práticas tradicionais.",
    ],
    imgCaption:
      "Diagrama comparando uma função recursiva e um padrão tradicional africano.",
    imgAlt: "Imagem ilustrativa de recursividade",
  },
  {
    n: "04",
    title: "Computação gráfica e geração procedural",
    paragraphs: [
      "Na computação gráfica contemporânea, fractais são usados para modelar fenômenos complexos da natureza. Montanhas, rios, nuvens, árvores e sistemas vasculares podem ser simulados por regras simples repetidas várias vezes. Esse método é conhecido como geração procedural.",
      "Em vez de desenhar cada detalhe manualmente, o programador define uma estrutura inicial e um conjunto de transformações. O resultado é uma imagem rica e orgânica. O paralelo com os exemplos africanos está justamente no uso de regras locais simples capazes de produzir formas globais complexas.",
    ],
    imgCaption:
      "Exemplo de paisagem gerada proceduralmente por algoritmos fractais.",
    imgAlt: "Imagem ilustrativa de geração procedural",
  },
  {
    n: "05",
    title: "Dimensão histórica e epistemológica",
    paragraphs: [
      "Ao destacar fractais africanos, Eglash também critica narrativas eurocêntricas que apresentam a matemática como patrimônio exclusivo do Ocidente moderno. Reconhecer esses conhecimentos não significa negar contribuições europeias, mas ampliar o mapa histórico da ciência.",
      "Diferentes sociedades desenvolveram técnicas rigorosas de contagem, simetria, proporção e organização espacial, ainda que expressas fora da linguagem acadêmica contemporânea. O livro propõe, portanto, uma leitura mais plural da inteligência humana e da produção histórica do conhecimento.",
    ],
    imgCaption: "Mapa ou linha do tempo da matemática em diferentes culturas.",
    imgAlt: "Imagem ilustrativa de dimensão histórica",
  },
  {
    n: "06",
    title: "Conclusão",
    paragraphs: [
      "A relação entre fractais africanos e computação moderna ultrapassa a semelhança estética. Em ambos os casos aparecem princípios de repetição, escala, hierarquia e recursão.",
      "A obra de Eglash mostra que esses conceitos podem emergir tanto em códigos de software quanto em aldeias, tecidos, penteados e objetos culturais. Estudar essa conexão amplia nossa compreensão da computação e, ao mesmo tempo, valoriza tradições intelectuais frequentemente invisibilizadas.",
    ],
    imgCaption: "Imagem-síntese: aldeia + código + tecido Kente.",
    imgAlt: "Imagem ilustrativa da conclusão",
  },
];

export default function RelacaoComputacaoPage() {
  return (
    <article>
      <HeroSection
        eyebrow="Capítulo IV - Computação"
        title={
          <>
            Relação dos Fractais Africanos com a{" "}
            <em className="text-primary">Computação Moderna</em>
          </>
        }
      />
      <SummarySection sections={sections} />
      {sections.map((s, i) => (
        <section
          key={s.n}
          id={`sec-${s.n}`}
          className={`scroll-mt-24 ${
            i % 2 === 1
              ? "bg-[oklch(0.97_0.015_75)] dark:bg-[oklch(0.16_0.015_50)]"
              : ""
          }`}
        >
          <div className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-24">
            <Reveal>
              <div className="flex items-baseline gap-5 mb-8">
                <span className="font-serif text-6xl text-primary/25 leading-none">
                  {s.n}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                  {s.title}
                </h2>
              </div>
            </Reveal>

            {s.paragraphs.map((p, idx) => (
              <Reveal key={idx} delay={idx * 80}>
                <p className="text-foreground/85 leading-relaxed text-lg mb-5">
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal delay={120}>
              <ImagePlaceholder caption={s.imgCaption} alt={s.imgAlt} />
            </Reveal>
          </div>
        </section>
      ))}
    </article>
  );
}

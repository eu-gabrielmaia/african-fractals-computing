import { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { HeroSection, SummarySection, AnchorSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "História & Origens — Fractais",
  description:
    "Aldeias Ba-ila, Mokoulek, têxteis Kente, divinação Bamana: a matemática fractal intencional dos povos africanos.",
  openGraph: {
    title: "História & Origens — Fractais África",
    description:
      "Como culturas africanas codificaram a recursão e a auto-similaridade muito antes da palavra existir.",
  },
};

interface Section {
  n: string;
  title: string;
  paragraphs: string[];
  obs?: string[];
}

const sections: Section[] = [
  {
    n: "01",
    title: "Sistemas complexos e a oficina móvel",
    paragraphs: [
      "Para entender a história da matemática africana, precisamos abandonar a ideia de que a ciência só acontece dentro de um laboratório com paredes brancas. Como argumenta o pesquisador Clapperton Chakanetsa Mavhunga, a África sempre foi umaoficina móve (Mobile Workshop).",
      "O conhecimento africano nunca foi estático. Ele viajava com mercadores, ferreiros, tecelões e guias. A natureza não era um obstáculo a ser dominado, mas um laboratório aberto onde o caos determinístico era observado, mapeado e transformado em tecnologia, engenharia estrutural e, mais impressionante ainda, em sistemas de contagem lógica.",
    ],
  },
  {
    n: "02",
    title: "O algoritmo na areia: Adivinhação Bamana e Ifá",
    paragraphs: [
      "Muito antes do primeiro computador ser ligado, sacerdotes de sistemas de conhecimento como o Ifá (África Ocidental) e a adivinhação Bamana (Mali e Senegal) já operavam um sistema rigoroso de código binário.",
      "A prática consistia em traçar linhas rápidas na areia, de forma quase caótica, para depois contá-las e agrupá-las em pares. Se sobrasse uma linha ímpar, registrava-se um traço duplo (ou vice-versa). O resultado era a geração de um código de 4 bits.",
      'Com 4 bits de informação, existem exatamente 16 símbolos possíveis. Ao combinar dois desses símbolos, os sacerdotes acessavam um mapa de 256 versos ou "arquivos" de sabedoria ancestral. Este é exatamente o mesmo princípio de um byte de 8 bits (que suporta 256 valores diferentes) operando na arquitetura de computadores de hoje.',
    ],
    obs: [
      "1 linha (ímpar) = 1;",
      "2 linhas (par) = 0;",
      "//Geração de um símbolo de 4 bits: ex: 1010",
    ],
  },
  {
    n: "03",
    title: "A rota transaariana da matemática",
    paragraphs: [
      'A história da ciência ocidental costuma pular da Grécia Antiga direto para o Renascimento Europeu, deixando um "buraco negro" no meio. Mas o conhecimento não desapareceu: ele estava circulando.',
      "O sistema binário africano viajou pelas rotas comerciais transaarianas. Mercadores berberes e estudiosos islâmicos, fascinados pela precisão matemática e lógica do sistema Bamana, o absorveram e o levaram para o Norte da África. No mundo árabe, ele foi documentado e estudado rigorosamente sob o nome de Ilm al-Raml (a ciência da areia).",
    ],
  },
  {
    n: "04",
    title: "De Al-Andalus a Leibniz",
    paragraphs: [
      'Quando o Império Islâmico se expandiu para a Península Ibérica (Al-Andalus, atual Espanha e Portugal), eles levaram consigo essa "ciência da areia". Lá, estudiosos europeus traduziram os textos árabes para o latim, rebatizando a prática como Geomancia.',
      "Em vez de desenhar cada detalhe manualmente, o programador define uma estrutura inicial e um conjunto de transformações. O resultado é uma imagem rica e orgânica. O paralelo com os exemplos africanos está justamente no uso de regras locais simples capazes de produzir formas globais complexas.",
    ],
  },
  {
    n: "05",
    title: "Apropriação e o dilema da transmissão",
    paragraphs: [
      'Quando esse sistema matemático atravessou o deserto e os oceanos, algo se perdeu. A Europa medieval e iluminista extraiu a matemática rígida (a "casca" do código), mas descartou o significado espiritual, ético e social que esses povos davam a ele, rotulando suas práticas de "bruxaria" ou "superstição".',
      "Esse é o dilema central da transmissão do conhecimento: a extração não autorizada. A matemática foi integrada e centralizada pelo Ocidente, enquanto sua origem foi apagada. A história dos fractais e dos algoritmos africanos não é apenas sobre quem descobriu o quê primeiro. É sobre como o conhecimento universal é construído de forma colaborativa, mas muitas vezes creditado de forma exclusiva.",
    ],
  },
];

export default function HistoriaPage() {
  return (
    <article className="relative">
      <HeroSection
        eyebrow="Capítulo II - História"
        title={
          <>
            O <em className="text-primary">caminho</em>, do código.
          </>
        }
        description="Da areia do deserto ao silício dos processadores. O caminho do código."
      />
      <SummarySection sections={sections} />
      {sections.map((s, i) => (
        <section
          key={s.n}
          id={`sec-${s.n}`}
          className={`scroll-mt-24 ${
            i % 2 === 1
              ? "bg-background-sand dark:bg-[oklch(0.16_0.015_50)]"
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

            {s.obs && (
              <Reveal className="flex flex-col text-xs font-mono bg-foreground/5 border border-border rounded px-2.5 py-1 text-primary">
                {s.obs.map((t: string, idx: number) => (
                  <code key={idx}>{t}</code>
                ))}
              </Reveal>
            )}
          </div>
        </section>
      ))}
      <AnchorSection
        variant={"narrative"}
        phrase="O código binário não foi inventado do zero em um escritório europeu."
        highlight="Ele foi traduzido!"
        nextRoute="/contextualizacao"
      />
    </article>
  );
}

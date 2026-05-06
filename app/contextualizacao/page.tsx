import { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import {
  SummarySection,
  AnchorSection,
  HeroSection,
} from "@/components/sections";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contextualização — Fractais",
  description:
    "Por que padrões africanos foram vistos como desordem e como essa leitura ignorou a lógica cultural por trás dessas estruturas.",
  openGraph: {
    title: "Contextualização — Fractais d'África",
    description:
      "Quando organização foi confundida com caos: entendendo os limites da visão europeia sobre esses padrões.",
  },
};

interface SubSection {
  num: string;
  geo?: string;
  title: string;
  paragraphs: string[];
}

interface Section {
  n: string;
  title: string;
  paragraphs: string[];
  subsections?: SubSection[];
}

const architecture: SubSection[] = [
  {
    num: "2.1",
    geo: "Zâmbia",
    title: "O povo Ba-Ila",
    paragraphs: [
      "No sul da Zâmbia, a aldeia Ba-Ila tem formato circular. Dentro dela, existem unidades familiares também em círculo, ao redor dos currais. E dentro dessas unidades, ficam as casas individuais — o mesmo padrão em três escalas.",
      "Até o altar sagrado, na parte de trás, funciona como centro simbólico, ligando a vida cotidiana aos ancestrais. A hierarquia social se revela na planta: famílias de maior prestígio ocupam áreas mais internas e protegidas.",
    ],
  },
  {
    num: "2.2",
    geo: "Camarões",
    title: "Logone-Birni — palácio dos Kotoko",
    paragraphs: [
      "O palácio do chefe Kotoko é organizado em retângulos dentro de retângulos. Conforme se entra, os espaços ficam menores e mais reservados, e o comportamento esperado muda.",
      "A arquitetura comunicava poder, ordem e tradição: quanto mais fundo, maior a exigência de respeito e formalidade.",
    ],
  },
  {
    num: "2.3",
    geo: "Gana",
    title: "O povo Nankani",
    paragraphs: [
      "Entre os Nankani, a estrutura circular e os espaços internos se organizam como metáfora do ciclo da vida humana. A passagem pelos diferentes ambientes evoca o crescimento e as etapas da existência.",
      "Objetos dentro da casa — potes, tigelas — repetem a mesma ideia de forma e escala, reforçando que o pensamento fractal estava presente não só na construção, mas no modo de viver.",
    ],
  },
];

const techniques: SubSection[] = [
  {
    num: "3.1",
    geo: "Sahel",
    title: "Para-ventos do Sahel",
    paragraphs: [
      "Nas regiões secas do Sahel, os povos locais construíam para-ventos de palha com padrão decrescente — as partes iam diminuindo conforme subiam. Não era aleatório: a estrutura distribuía melhor a força do vento e economizava material.",
      "Uma solução inteligente baseada em observação acumulada ao longo de gerações.",
    ],
  },
  {
    num: "3.2",
    geo: "Gana",
    title: "O pano Kente",
    paragraphs: [
      "Os tecidos Kente, dos Ashanti e dos Ewe, constroem módulos que se repetem com variações de cor e simetria. Cada faixa é tecida separadamente; costuradas, formam um padrão maior que espelha cada parte.",
      "O tecelão domina mentalmente os padrões e os reproduz com precisão — conhecimento técnico transmitido de geração em geração. Hoje, esses padrões são usados até para ensinar matemática e programação.",
    ],
  },
];

const undervaluation: SubSection[] = [
  {
    num: "4.1",
    title: "A visão europeia e o erro de interpretação",
    paragraphs: [
      "Durante os séculos XVIII e XIX, muitos europeus chegaram à África com uma visão de mundo muito rígida, baseada em linhas retas, ordem geométrica e planejamento urbano centralizado. Quando viam aldeias organizadas de forma diferente, muitas vezes interpretavam isso como desordem ou atraso.",
      "O problema era que olhavam para essas sociedades com preconceito e não conseguiam perceber a lógica por trás da organização espacial, dos desenhos e das construções. O que parecia 'bagunça' na verdade tinha regras claras, função social e significado cultural.",
    ],
  },
  {
    num: "4.2",
    title: "O reconhecimento que veio tarde demais",
    paragraphs: [
      "Por muito tempo, a academia só passou a valorizar esses conhecimentos depois que a matemática moderna começou a estudar os fractais de forma mais formal. Isso fez com que práticas que já existiam há séculos fossem tratadas como se só tivessem importância quando receberam um nome técnico no Ocidente.",
      "Essa visão é injusta, porque apaga o fato de que esses povos já entendiam, na prática, conceitos como repetição, escala, padrão e organização complexa. Eles não precisavam usar a linguagem da matemática moderna para dominar esses conhecimentos.",
    ],
  },
];

const sections: Section[] = [
  {
    n: "01",
    title: "Introdução",
    paragraphs: [
      "A geometria fractal aparece de forma muito importante em diferentes povos africanos, não apenas como uma ideia matemática, mas também como parte da organização da vida, da arquitetura, dos tecidos e até de símbolos culturais. Em muitos casos, esses padrões foram criados e usados muito antes de serem estudados pela ciência moderna.",
      "O mais interessante é que, nesses povos, a repetição de formas e o uso de escalas diferentes não serviam só para 'deixar bonito'. Esses desenhos e construções tinham ligação com a organização social, com a religião, com a família e com a forma de entender o mundo.",
    ],
  },
  {
    n: "02",
    title: "Arquitetura e organização espacial",
    paragraphs: [
      "Uma das formas mais visíveis de pensamento fractal na África está na maneira como algumas comunidades organizavam suas aldeias e casas. Em vez de uma estrutura reta e padronizada, muitas delas cresciam de forma natural, seguindo regras simples que se repetiam em diferentes níveis.",
    ],
    subsections: architecture,
  },
  {
    n: "03",
    title: "Técnicas e saberes tradicionais",
    paragraphs: [
      "Além da arquitetura, o pensamento fractal africano se manifesta em objetos do cotidiano e na engenharia popular. Tecidos, estruturas de proteção e artefatos revelam o mesmo princípio: regras simples, repetidas com intenção, produzindo formas complexas e funcionais.",
    ],
    subsections: techniques,
  },
  {
    n: "04",
    title: "Como esses conhecimentos foram descredibilizados?",
    paragraphs: [
      "Apesar de toda essa riqueza, esses saberes africanos foram por muito tempo tratados como algo inferior, ou até como simples decoração sem valor científico. Isso não aconteceu por acaso.",
    ],
    subsections: undervaluation,
  },
  {
    n: "05",
    title: "Conclusão",
    paragraphs: [
      "O estudo das geometrias fractais africanas mostra que esses povos desenvolveram formas muito avançadas de pensar, construir e organizar a vida. A aldeia dos Ba-Ila, o palácio dos Kotoko, as casas dos Nankani, os para-ventos do Sahel e os tecidos Kente são exemplos de como a matemática pode estar presente na cultura, na arquitetura e nas tradições.",
      "Esses saberes foram por muito tempo desvalorizados, principalmente por causa do olhar colonial, que não reconhecia a complexidade dessas formas de conhecimento. Porém, hoje fica cada vez mais claro que a África não foi apenas um espaço de origem da humanidade, mas também um lugar de grande criação intelectual, técnica e cultural.",
      "Reconhecer isso é importante para corrigir uma visão limitada da história e para entender que a ciência não nasceu em um único lugar. Ela foi construída por diferentes povos, em diferentes tempos, a partir de maneiras diversas de observar o mundo.",
    ],
  },
];

function SubSectionCard({
  num,
  geo,
  title,
  paragraphs,
  delay = 0,
}: SubSection & { delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="mb-10 pl-6 border-l border-primary/20">
        <div className="flex items-baseline gap-4 mb-2">
          <span className="font-serif text-4xl text-primary/20 leading-none min-w-12">
            {num}
          </span>
          <h3 className="font-serif text-xl md:text-2xl leading-snug">
            {title}
          </h3>
        </div>

        {geo && (
          <div className="flex items-center gap-2 pl-16 mb-4">
            <MapPin className="w-5 h-5 text-primary/50 shrink-0" />
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/70">
              {geo}
            </span>
          </div>
        )}

        <div className="pl-16 space-y-3">
          {paragraphs.map((p, idx) => (
            <p
              key={idx}
              className="text-foreground/70 leading-relaxed text-[15.5px]"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function ContextualizacaoPage() {
  return (
    <article>
      <HeroSection
        eyebrow="Capítulo III - Contextualização"
        title={
          <>
            Padrões <em className="text-primary">intencionais</em>,<br />
            não acidentais.
          </>
        }
      />
      <SummarySection sections={sections} />
      {sections.map((s, i) => (
        <section
          key={s.n}
          id={`sec-${s.n}`}
          className={`scroll-mt-24 ${i % 2 === 1 ? "bg-background-sand" : ""}`}
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
            {s.subsections && s.subsections.length > 0 && (
              <div className="mt-12 space-y-2">
                {s.subsections.map((sub, idx) => (
                  <SubSectionCard key={sub.num} {...sub} delay={idx * 100} />
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
      <Reveal delay={100}>
        <div className="mx-auto max-w-3xl px-5 md:px-8 pb-24">
          <div className="mt-4 border border-border rounded-xl p-8 text-center">
            <p className="font-serif italic text-xl md:text-2xl leading-relaxed text-foreground/80 max-w-xl mx-auto">
              Estes não são fractais{" "}
              <strong className="font-bold not-italic text-foreground">
                por acaso
              </strong>
              .
              <br />
              São fractais porque alguém, em algum momento, decidiu que o
              universo se repetia em escalas — e construiu o seu mundo para
              refletir essa verdade.
            </p>
            <div className="flex justify-center gap-2 mt-6">
              <span className="w-1.5 h-1.5 rotate-45 bg-primary opacity-30 inline-block" />
              <span className="w-1.5 h-1.5 rotate-45 bg-primary opacity-60 inline-block" />
              <span className="w-1.5 h-1.5 rotate-45 bg-primary opacity-30 inline-block" />
            </div>
          </div>
        </div>
      </Reveal>
      <AnchorSection
        nextLabel="Relação na Computação"
        nextRoute="/computacao"
      />
    </article>
  );
}
/*
import { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { FractalDeco } from "@/components/fractal-deco";



const architecture = [
  {
    num: "01",
    geo: "Zâmbia",
    title: "O povo Ba-Ila",
    pull: "Três escalas, uma só forma.",
    body: "No sul da Zâmbia, a aldeia Ba-Ila tem formato circular. Dentro dela, existem unidades familiares também em círculo, ao redor dos currais. E dentro dessas unidades, ficam as casas individuais — o mesmo padrão em três escalas. Até o altar sagrado, na parte de trás, funciona como centro simbólico, ligando a vida cotidiana aos ancestrais. A hierarquia social se revela na planta: famílias de maior prestígio ocupam áreas mais internas e protegidas.",
  },
  {
    num: "02",
    geo: "Camarões",
    title: "Logone-Birni — palácio dos Kotoko",
    pull: "Cercados dentro de cercados — recursão em barro.",
    body: "O palácio do chefe Kotoko é organizado em retângulos dentro de retângulos. Conforme se entra, os espaços ficam menores e mais reservados, e o comportamento esperado muda. A arquitetura comunicava poder, ordem e tradição: quanto mais fundo, maior a exigência de respeito e formalidade.",
  },
  {
    num: "03",
    geo: "Gana",
    title: "O povo Nankani",
    pull: "A casa como metáfora da vida.",
    body: "Entre os Nankani, a estrutura circular e os espaços internos se organizam como metáfora do ciclo da vida humana. A passagem pelos diferentes ambientes evoca o crescimento e as etapas da existência. Objetos dentro da casa — potes, tigelas — repetem a mesma ideia de forma e escala, reforçando que o pensamento fractal estava presente não só na construção, mas no modo de viver.",
  },
];

const techniques = [
  {
    num: "04",
    geo: "Sahel",
    title: "Para-ventos do Sahel",
    pull: "Da observação da natureza à engenharia.",
    body: "Nas regiões secas do Sahel, os povos locais construíam para-ventos de palha com padrão decrescente — as partes iam diminuindo conforme subiam. Não era aleatório: a estrutura distribuía melhor a força do vento e economizava material. Uma solução inteligente baseada em observação acumulada ao longo de gerações.",
  },
  {
    num: "05",
    geo: "Gana",
    title: "O pano Kente",
    pull: "O pano fala — em geometria.",
    body: "Os tecidos Kente, dos Ashanti e dos Ewe, constroem módulos que se repetem com variações de cor e simetria. Cada faixa é tecida separadamente; costuradas, formam um padrão maior que espelha cada parte. O tecelão domina mentalmente os padrões e os reproduz com precisão — conhecimento técnico transmitido de geração em geração. Hoje, esses padrões são usados até para ensinar matemática e programação.",
  },
];

const tags = ["Zâmbia", "Camarões", "Gana", "Mali", "Sahel", "Etiópia"];


function Divider() {
  return (
    <div className="flex items-center gap-3 my-10">
      <div className="flex-1 h-px bg-border" />
      <span className="w-[6px] h-[6px] rotate-45 bg-accent opacity-40 shrink-0" />
      <span className="w-[6px] h-[6px] rotate-45 bg-accent opacity-70 shrink-0" />
      <span className="w-[6px] h-[6px] rotate-45 bg-accent opacity-40 shrink-0" />
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function ChapterLabel({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-medium mb-1">
        {label}
      </p>
      <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
        {title}
      </h2>
    </div>
  );
}

function SectionCard({
  num,
  geo,
  title,
  pull,
  body,
  delay = 0,
}: {
  num: string;
  geo: string;
  title: string;
  pull: string;
  body: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="mb-12">
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-serif text-5xl font-bold text-accent opacity-25 leading-none min-w-[56px]">
            {num}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold leading-snug">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-2 pl-[72px] mb-3">
          <span className="w-[7px] h-[7px] rounded-full bg-accent opacity-60 shrink-0" />
          <span className="text-xs text-muted-foreground">{geo}</span>
        </div>

        <div className="border-l-[3px] border-accent pl-5 py-1 ml-[72px] mb-5">
          <p className="font-serif italic text-lg leading-snug">{pull}</p>
        </div>

        <p className="pl-[72px] text-muted-foreground leading-relaxed text-[15.5px]">
          {body}
        </p>
      </div>
    </Reveal>
  );
}

function HistoryCard({
  period,
  body,
  delay = 0,
}: {
  period: string;
  body: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="bg-muted/40 rounded-xl border-l-4 border-accent px-6 py-5 mb-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-[7px] h-[7px] rounded-full bg-accent opacity-60 shrink-0" />
          <span className="text-xs text-muted-foreground">{period}</span>
        </div>
        <p className="text-muted-foreground leading-relaxed text-[15px]">
          {body}
        </p>
      </div>
    </Reveal>
  );
}

export default function FractaisAfricaPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 md:px-8 py-16 md:py-24">
      <Reveal>
        <div className="relative border-b border-border pb-10 mb-12">
          <FractalDeco
            className="absolute right-0 top-0 pointer-events-none"
            size={160}
          />

          <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
            <span className="w-7 h-px bg-accent inline-block" />
            Geometria Fractal Africana
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-none tracking-tight text-balance max-w-2xl mb-6">
            Padrões{" "}
            <em className="font-serif italic text-accent not-italic" style={{ fontStyle: "italic" }}>
              intencionais
            </em>
            ,<br />não acidentais.
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed font-light mb-8">
            A geometria fractal aparece de forma muito importante em diferentes
            povos africanos — não apenas como uma ideia matemática, mas como
            parte da organização da vida, da arquitetura, dos tecidos e dos
            símbolos culturais.
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] uppercase tracking-[0.1em] px-3 py-1 rounded-full border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <ChapterLabel
          label="Capítulo I — Arquitetura e Espaço"
          title="A aldeia como algoritmo"
        />
      </Reveal>

      {architecture.map((s, i) => (
        <SectionCard key={s.num} {...s} delay={i * 80} />
      ))}

      <Divider />

      <Reveal>
        <ChapterLabel
          label="Capítulo II — Técnicas e Saberes"
          title="Soluções inteligentes em escala"
        />
      </Reveal>

      {techniques.map((s, i) => (
        <SectionCard key={s.num} {...s} delay={i * 80} />
      ))}

      <Divider />

      <Reveal>
        <ChapterLabel
          label="Capítulo III — Desvalorização e Reconhecimento"
          title="O olhar que não enxergava"
        />
      </Reveal>

      <HistoryCard
        period="Séculos XVIII e XIX"
        body="Durante os séculos XVIII e XIX, muitos europeus chegaram à África com visão rígida baseada em linhas retas e planejamento centralizado. Quando viam aldeias organizadas de forma diferente, interpretavam como desordem. O preconceito impedia enxergar a lógica por trás da organização espacial. O que parecia 'bagunça' tinha regras claras, função social e significado cultural."
        delay={0}
      />

      <HistoryCard
        period="O reconhecimento tardio"
        body="A academia só passou a valorizar esses conhecimentos depois que a matemática moderna estudou os fractais de forma formal. Práticas que já existiam há séculos foram tratadas como se só tivessem importância quando receberam um nome técnico no Ocidente — apagando o fato de que esses povos já dominavam, na prática, conceitos como repetição, escala e organização complexa."
        delay={80}
      />

      <Reveal delay={100}>
        <div className="mt-16 border border-border rounded-xl p-8 text-center">
          <p className="font-serif italic text-xl md:text-2xl leading-relaxed text-muted-foreground max-w-xl mx-auto">
            Estes não são fractais{" "}
            <strong className="font-bold not-italic text-foreground">
              por acaso
            </strong>
            .<br />
            São fractais porque alguém, em algum momento, decidiu que o
            universo se repetia em escalas — e construiu o seu mundo para
            refletir essa verdade.
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <span className="w-[6px] h-[6px] rotate-45 bg-accent opacity-30 inline-block" />
            <span className="w-[6px] h-[6px] rotate-45 bg-accent opacity-60 inline-block" />
            <span className="w-[6px] h-[6px] rotate-45 bg-accent opacity-30 inline-block" />
          </div>
        </div>
      </Reveal>
    </article>
  );
}
 */

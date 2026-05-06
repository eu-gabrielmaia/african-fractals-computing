import { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import {
  Sierpinski,
  FractalTree,
} from "@/components/backgrounds";
import { AnchorSection, HeroSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "O Código Ancestral — Fractais",
  description:
    "A lógica complexa por trás da programação moderna já era aplicada há séculos por povos africanos. Auto-similaridade, iteração e dimensão fractal antes do silício.",
  openGraph: {
    title: "O Código Ancestral — Fractais",
    description:
      "Régua euclidiana vs. mundo fractal — e os três fundamentos que ligam a aldeia ao algoritmo.",
  },
};

const fundamentos = [
  {
    n: "I",
    title: "Auto-similaridade",
    sub: "A célula-mãe",
    body: 'É a propriedade de uma parte ser visualmente idêntica ao todo. No artigo "Pano Kente: Estrutura e Estética Africana", Martins e Menezes (2013) explicam que o design desse tecido nasce de uma "célula-mãe" ou semente geométrica.',
    code: "// caso base — a semente",
  },
  {
    n: "II",
    title: "Iteração e Escala",
    sub: "O passo recursivo",
    body: "É o processo de repetir a mesma operação matemática, alterando apenas a escala a cada passo. Eglash demonstra como o palácio de Logone-Birni mapeia status social puramente através desse escalonamento: retângulos diminuem na exata proporção em que o acesso se torna mais restrito e sagrado.",
    code: "fn(escala * 0.9)",
  },
  {
    n: "III",
    title: "Dimensão Fractal",
    sub: "Eficiência do espaço",
    body: 'Fractais têm dimensões "quebradas" (como 1.5), preenchendo o espaço de forma extremamente eficiente. É graças a essa propriedade matemática africana que os celulares atuais usam antenas fractais — dobradas recursivamente para captar dezenas de frequências em espaço quase invisível.',
    code: "dim ≈ log(N) / log(1/r)",
  },
];

export default function IntroducaoPage() {
  return (
    <article className="relative">
      <HeroSection
        eyebrow="Capítulo I - Introdução"
        title={
          <>
            O Código <em className="text-primary">Ancestral</em>
          </>
        }
      >
        <>
          <p className="text-lg md:text-2xl text-foreground/75 max-w-3xl leading-relaxed font-serif italic">
            Quando você pensa em {"algoritmo"} ou {"tecnologia"}, qual é a
            primeira imagem que vem à sua mente? Laboratórios europeus, linhas
            de código, a arquitetura de Von Neumann?
          </p>
          <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-3xl leading-relaxed">
            E se a lógica complexa por trás da programação moderna já estivesse
            sendo aplicada muito antes das placas de silício? Para entender essa
            revolução, precisamos mudar as lentes através das quais enxergamos o
            mundo.
          </p>
        </>
      </HeroSection>

      <section className="mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <div className="flex items-baseline gap-6 mb-10">
            <span className="font-serif text-7xl text-primary/25 leading-none">
              01
            </span>
            <div>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight">
                O paradigma da natureza
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          <Reveal className="md:col-span-7">
            <p className="text-foreground/85 leading-relaxed text-lg mb-5">
              Até a década de 1970, a matemática clássica tinha um problema: ela
              não conseguia medir a natureza. Como medir a exata rugosidade da
              casca de uma árvore, a borda de uma nuvem, ou a complexa costa da
              África?
            </p>
            <p className="text-foreground/85 leading-relaxed text-lg mb-5">
              Foi tentando resolver isso que <strong>Benoit Mandelbrot</strong>{" "}
              cunhou o termo
              <em> {"Fractal"}</em> (do latim <em>fractus</em>, quebrado). Um
              fractal é uma estrutura cujas partes, não importa o quanto você
              aproxime, são semelhantes ao todo.
            </p>
            <p className="text-foreground/85 leading-relaxed text-lg">
              Mas, como destaca <strong>Ron Eglash</strong> em{" "}
              <em>African Fractals</em>, embora Mandelbrot tenha nomeado essa
              matemática nos anos 70 com supercomputadores da IBM, diversas
              culturas africanas já utilizavam essa exata intuição há séculos.
            </p>
          </Reveal>
          <Reveal className="md:col-span-5" delay={150}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="aspect-square flex items-center justify-center">
                <FractalTree
                  depth={9}
                  angle={28}
                  scale={0.72}
                  className="w-full h-full text-primary"
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-foreground/60 text-center">
                Samambaia → mini-samambaia → mini-mini-samambaia
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative border-y border-border bg-background-sand/50 dark:bg-[oklch(0.18_0.015_50)]">
        <div className="relative mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-28">
          <Reveal>
            <div className="flex items-baseline gap-6 mb-10">
              <span className="font-serif text-7xl text-primary/25 leading-none">
                02
              </span>
              <div>
                <h2 className="font-serif text-3xl md:text-5xl leading-tight">
                  Régua euclidiana <em>vs.</em> mundo fractal
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Reveal>
              <div className="rounded-2xl border border-border bg-background p-7 h-full">
                <p className="text-xs uppercase tracking-widest text-foreground/60 mb-3">
                  Europa
                </p>
                <h3 className="font-serif text-2xl mb-4">Visão Euclidiana</h3>
                <p className="text-foreground/75 leading-relaxed mb-4">
                  Linhas retas, círculos perfeitos, quadrados, grades. Pense nas
                  ruas de Manhattan ou em uma plantação.
                </p>
                <p className="text-sm text-primary font-medium uppercase tracking-wider">
                  Top-down
                </p>
                <p className="text-sm text-foreground/70 mt-1">
                  O engenheiro desenha a planta no papel e a impõe à força sobre
                  a natureza.
                </p>
                <div className="mt-6 grid grid-cols-6 gap-1 opacity-60">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square border border-foreground/40"
                    />
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl border border-primary/40 bg-background p-7 h-full">
                <p className="text-xs uppercase tracking-widest text-primary mb-3">
                  África
                </p>
                <h3 className="font-serif text-2xl mb-4">Visão Fractal</h3>
                <p className="text-foreground/75 leading-relaxed mb-4">
                  Crescimento orgânico e iteração local. Regras simples geram
                  complexidade global — vilas inteiras em formato de anéis
                  recursivos.
                </p>
                <p className="text-sm text-primary font-medium uppercase tracking-wider">
                  Bottom-up
                </p>
                <p className="text-sm text-foreground/70 mt-1">
                  {
                    "Construa o cercado do seu filho anexado ao seu, mas 10% menor."
                  }
                </p>
                <div className="mt-6 flex justify-center">
                  <Sierpinski
                    depth={5}
                    size={220}
                    color="oklch(0.55 0.16 35)"
                    fill
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <blockquote className="border-l-4 border-primary pl-6 max-w-3xl">
              <p className="font-serif italic text-xl md:text-2xl text-foreground/90 leading-snug">
                Os fractais são caracterizados pela repetição de padrões
                semelhantes em escalas cada vez menores… aldeias africanas
                tradicionais normalmente mostram essa característica: círculos
                de círculos de habitações.
              </p>
              <footer className="mt-3 text-sm uppercase tracking-widest text-foreground/60">
                — Ron Eglash,{" "}
                <em>Fractals in African Settlement Architecture</em>
              </footer>
            </blockquote>
          </Reveal>

          <Reveal>
            <div className="mt-12 rounded-2xl bg-[oklch(0.22_0.015_50)] dark:bg-[oklch(0.14_0.015_50)] text-[oklch(0.95_0.025_80)] p-7 md:p-9">
              <p className="text-xs uppercase tracking-[0.3em] text-[oklch(0.78_0.13_85)] mb-3">
                O apagamento colonial
              </p>
              <p className="leading-relaxed text-lg">
                Quando os colonizadores europeus chegaram, olharam para essas
                vilas. Acostumados com suas ruas retas, usaram uma{" "}
                <strong>régua euclidiana</strong> para tentar medir um{" "}
                <strong>mundo fractal</strong>. Falharam em compreender a
                complexidade matemática à sua frente — e a rotularam de
                {"caótica"} ou {"primitiva"}.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <div className="flex items-baseline gap-6 mb-4">
            <span className="font-serif text-7xl text-primary/25 leading-none">
              03
            </span>
            <div>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight">
                Os três fundamentos
              </h2>
            </div>
          </div>
          <p className="text-foreground/75 max-w-2xl mb-12 ml-0 md:ml-22">
            A ponte para a computação. Esta lógica ancestral é exatamente a
            mesma que estrutura o código rodando agora no aparelho em suas mãos.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {fundamentos.map((f, i) => (
            <Reveal key={f.n} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/60 hover:-translate-y-1">
                <div className="absolute -top-6 -right-6 opacity-[0.08] group-hover:opacity-20 transition-opacity">
                  <Sierpinski
                    depth={4 + i}
                    size={160}
                    color="oklch(0.55 0.16 35)"
                    fill
                  />
                </div>
                <div className="relative">
                  <span className="font-serif text-5xl text-primary">
                    {f.n}
                  </span>
                  <p className="text-xs uppercase tracking-widest text-foreground/60 mt-3">
                    {f.sub}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl mt-1 mb-4">
                    {f.title}
                  </h3>
                  <p className="text-foreground/75 leading-relaxed text-[0.95rem] mb-5">
                    {f.body}
                  </p>
                  <code className="inline-block text-xs font-mono bg-foreground/5 border border-border rounded px-2.5 py-1 text-primary">
                    {f.code}
                  </code>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <AnchorSection
        variant={"narrative"}
        phrase="O algoritmo não nasceu no Vale do Silício."
        highlight="Ele é ancestral!"
        nextRoute="/historia"
      />
    </article>
  );
}

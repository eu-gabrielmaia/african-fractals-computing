import { Metadata } from "next";
import { Reveal } from "@/components/reveal"
import { Landmark, Skull, Atom, BookOpen, GraduationCap, Sparkles, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Linha do Tempo — Fractais",
  description:
    "Da prática ancestral africana a Mandelbrot, Eglash e à IA generativa: a história não-linear dos fractais.",
  openGraph: {
    title: "Linha do Tempo — Fractais d'África",
    description:
      "Marcos da geometria fractal africana e seu eco na computação moderna.",
  },
};

const events = [
  { date: "Antes do séc. XV", title: "Práticas ancestrais", Icon: Compass, body: "Em todo o continente africano, povos constroem aldeias, têxteis e sistemas de divinação com auto-similaridade intencional. A matemática não é escrita — é construída." },
  { date: "Séc. XV–XIX", title: "Trocas e adivinhação binária", Icon: Landmark, body: "A divinação Bamana viaja com mercadores árabes para a Europa medieval. Recombinada, dará origem ao sistema geomântico — antecessor lógico do binário." },
  { date: "Séc. XIX–meados do XX", title: "Colonização e apagamento", Icon: Skull, body: "Antropólogos europeus descrevem aldeias africanas como 'desorganizadas'. A complexidade matemática é invisibilizada por séculos." },
  { date: "1975", title: "Mandelbrot cunha 'fractal'", Icon: Atom, body: "Benoît Mandelbrot publica o conceito de geometria fractal no Ocidente — sem reconhecer que padrões idênticos já existiam há séculos em África." },
  { date: "1990s", title: "Ron Eglash em campo", Icon: BookOpen, body: "O matemático e antropólogo Ron Eglash percorre o continente medindo aldeias, fotografando têxteis e modelando computacionalmente os padrões. Comprova: são fractais reais." },
  { date: "1999", title: "African Fractals", Icon: BookOpen, body: "Eglash publica African Fractals: Modern Computing and Indigenous Design, a obra que devolve à matemática africana o reconhecimento que lhe foi negado." },
  { date: "2000s", title: "CSDT — ensino reativo", Icon: GraduationCap, body: "Nasce o projeto Culturally Situated Design Tools: software que ensina recursão e algoritmos a partir de tranças, têxteis e arquitetura africana. Desempenho de alunos dispara." },
  { date: "Hoje", title: "Design generativo & IA", Icon: Sparkles, body: "L-systems, redes generativas e modelos de IA criativa usam exatamente a lógica recursiva codificada há séculos. O fractal africano agora vive nos servidores do mundo." },
];

export default function TimelinePage() {
  return (
    <section className="mx-auto max-w-5xl px-5 md:px-8 py-16 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Capítulo III</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-none tracking-tight max-w-3xl mb-6">
          Uma cronologia <em>não-linear</em>.
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mb-16">
          A história raramente é uma reta. A dos fractais — apropriadamente — se ramifica.
        </p>
      </Reveal>

      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-primary/40 to-transparent md:-translate-x-px" />

        <div className="space-y-16">
          {events.map((e, i) => {
            const isLeft = i % 2 === 0;
            return (
              <Reveal key={e.date}>
                <div className={`relative grid md:grid-cols-2 gap-8 items-start ${isLeft ? "" : "md:[&>*:first-child]:order-2"}`}>
                  <div className={`pl-20 md:pl-0 ${isLeft ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <p className="text-sm uppercase tracking-widest text-primary mb-2">{e.date}</p>
                    <h3 className="font-serif text-2xl md:text-3xl mb-3 text-balance">{e.title}</h3>
                    <p className="text-foreground/75 leading-relaxed">{e.body}</p>
                  </div>
                  <div className={`hidden md:block ${isLeft ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-card border border-border ${isLeft ? "" : ""}`}>
                      <e.Icon className="text-primary" size={32} />
                    </div>
                  </div>

                  {/* Dot on line */}
                  <div className="absolute left-8 md:left-1/2 top-1 w-4 h-4 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background" />
                  {/* Mobile icon */}
                  <div className="md:hidden absolute left-0 top-0 w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center">
                    <e.Icon className="text-primary" size={24} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

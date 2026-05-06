import { AdinkraPattern } from "@/components/backgrounds";
import { Reveal } from "@/components/reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type AnchorProps = {
  nextRoute: string;
  nextLabel?:string;

  variant?: "simple" | "narrative";

  phrase?: string;
  highlight?: string;
}

export default function Anchor({
  nextRoute,
  nextLabel,
  variant = "simple",
  phrase,
  highlight,
}: AnchorProps) {
  if (!nextRoute) {
    console.warn("Anchor recebeu nextRoute inválido");
    return null;
  }

  return (
    <section className="relative border-t border-border overflow-hidden">
      <div className="absolute inset-0 text-primary">
        <AdinkraPattern opacity={0.05} />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 md:px-8 py-20 text-center">
        <Reveal>
          {variant === "narrative" && phrase && (
            <>
              <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">
                Frase
              </p>

              <p className="mb-12 font-serif text-4xl md:text-6xl leading-[1.1] text-balance">
                {phrase}
                {highlight && (
                  <>
                    <br />
                    <em className="text-primary">{highlight}</em>
                  </>
                )}
              </p>
            </>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={nextRoute}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
            >
              {nextLabel ? nextLabel : "Continuar roteiro"}
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/pratica"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-foreground/5 transition"
            >
              Brincar com fractais 
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

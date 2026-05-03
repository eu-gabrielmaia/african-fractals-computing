import Link from "next/link";
import { AdinkraPattern } from "./adinktraPattern";
import { Reveal } from "./reveal";
import { ArrowRight } from "lucide-react";

interface AnchorProps {
  nextRoute: string;
  nextLabel: string;
}

export function Anchor({ nextRoute, nextLabel }: AnchorProps) {
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
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Continue lendo
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={nextRoute}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
            >
              {nextLabel}
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/referencias"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-foreground/5 transition"
            >
              Ver referências
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AdinkraPattern } from "@/components/adinktraPattern";

export default function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <AdinkraPattern className="absolute inset-0 -z-10 pointer-events-none" color="oklch(0.52 0.18 32)" opacity={0.06} />
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="max-w-md text-center py-20">
          <h1 className="font-serif text-primary text-8xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight text-balance max-w-5xl">404</h1>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl lg:text-4xl leading-[0.95] tracking-tight text-balance">Página não encontrada</h2>
          <p className="mt-3 max-w-2xl text-lg md:text-xl text-foreground/75 leading-relaxed">
            O fractal se ramificou para um lugar que não existe.
          </p>
          <div className="mt-6">
            <Button asChild>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Voltar ao início
            </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

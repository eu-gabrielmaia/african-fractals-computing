import Link from "next/link";
import { Sierpinski } from "./backgrounds";

const links = [
  { href: "/introducao", label: "Introdução" },
  { href: "/historia", label: "História" },
  { href: "/contextualizacao", label: "Contextualização" },
  { href: "/computacao", label: "Relação com a Computação" },
  { href: "/linha-do-tempo", label: "Linha do Tempo" },
  { href: "/galeria", label: "Galeria" },
  { href: "/pratica", label: "Explorar na prática" },
  { href: "/referencias", label: "Referências" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-[oklch(0.22_0.015_50)] text-[oklch(0.95_0.025_80)]">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Sierpinski
              depth={3}
              size={32}
              color="oklch(0.78 0.13 85)"
              fill
              className="h-8 w-8"
            />
            <span className="font-serif text-xl">Fractais África</span>
          </div>
          <p className="text-sm opacity-75 leading-relaxed">
            Um arquivo vivo da geometria fractal africana e seu eco no coração
            da computação moderna.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-base mb-3 text-[oklch(0.78_0.13_85)]">
            Navegar
          </h4>
          <ul className="space-y-2 text-sm opacity-80">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:opacity-100 hover:text-[oklch(0.78_0.13_85)] transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base mb-3 text-[oklch(0.78_0.13_85)]">
            Integrantes do grupo
          </h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Gabriel Augusto Pereira Maia</li>
            <li>Henrique Mohr</li>
            <li>Malick Figueroa Sanó</li>
            <li>Pedro Henrique</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 text-xs opacity-60 flex flex-col sm:flex-row justify-between gap-2">
          <span>
            © {new Date().getFullYear()} Fractais África — projeto editorial
          </span>
          <span className="italic">A geometria que o mundo esqueceu.</span>
        </div>
      </div>
    </footer>
  );
}

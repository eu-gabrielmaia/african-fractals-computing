"use client"

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/introducao", label: "Introdução" },
  { href: "/historia", label: "História" },
  { href: "/contextualizacao", label: "Contextualização" },
  { href: "/computacao", label: "Computação" },
  { href: "/linha-do-tempo", label: "Linha do Tempo" },
  { href: "/galeria", label: "Galeria" },
  { href: "/visualizador", label: "Visualizador" },
  { href: "/referencias", label: "Referências" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-serif text-lg leading-none tracking-tight">
            Fractais <span className="text-primary italic">África</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors data-[status=active]:text-primary data-[status=active]:font-medium"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-5 py-3 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-foreground/80 border-b border-border/40 last:border-0 data-[status=active]:text-primary data-[status=active]:font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

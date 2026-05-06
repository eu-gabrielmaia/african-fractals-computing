import { Reveal } from "../reveal";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function ExternalSimulador({ title, subtitle, src, href }: { title: string; subtitle: string; src: string; href: string }) {
  return (
    <Reveal>
      <div className="mt-12 rounded-3xl border border-border bg-card overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 p-6 md:p-8 border-b border-border">
          <div>
            <h3 className="font-serif text-primary text-2xl md:text-3xl tracking-tight mb-2">{title}</h3>
            <p className="text-sm text-foreground/70 max-w-2xl">{subtitle}</p>
          </div>
          <Link
            href={href}
            target="_blank"
            className="inline-flex items-center gap-2 self-start md:self-auto rounded-lg border border-border bg-background px-4 py-2 text-xs uppercase tracking-widest hover:border-primary/50 transition"
          >
            Abrir em nova aba <ExternalLink size={14} />
          </Link>
        </div>
        <div className="relative w-full bg-background-sand" style={{ height: "75vh", minHeight: 520 }}>
          <iframe
            src={src}
            title={title}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            allow="fullscreen; accelerometer; gyroscope"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </Reveal>
  );
}
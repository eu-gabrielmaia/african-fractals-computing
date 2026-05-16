"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { MediaItem } from "@/app/galeria/page";

const categoryLabel: Record<string, string> = {
  objetos: "Objetos",
  arquitetura: "Arquitetura",
  ilustracoes: "Ilustrações",
  arte: "Arte",
  texteis: "Têxteis",
};

function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: MediaItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        onClick={onClose}
        aria-label="Fechar"
      >
        <X size={20} />
      </button>

      <button
        className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors disabled:opacity-30"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        disabled={index === 0}
        aria-label="Anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <div
        className="relative max-w-4xl w-full mx-16 rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-4/3">
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 90vw, 1100px"
            priority
          />
        </div>
        <div className="bg-card/95 backdrop-blur-sm px-6 py-5 border-t border-border">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl mb-1">{item.title}</h2>
              {item.description && (
                <p className="text-foreground/70 text-sm leading-relaxed max-w-xl">
                  {item.description}
                </p>
              )}
              <p className="text-xs text-foreground/50 mt-2">
                {[item.origin, item.year].filter(Boolean).join(" · ")}
              </p>
            </div>
            <span className="shrink-0 inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
              {categoryLabel[item.type]}
            </span>
          </div>
        </div>
      </div>

      <button
        className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors disabled:opacity-30"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        disabled={index === items.length - 1}
        aria-label="Próximo"
      >
        <ChevronRight size={24} />
      </button>

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs tabular-nums">
        {index + 1} / {items.length}
      </p>
    </div>
  );
}

function GaleriaCard({
  item,
  onClick,
}: {
  item: MediaItem;
  onClick: () => void;
}) {
  return (
    <Reveal>
      <button
        onClick={onClick}
        className="group relative w-full aspect-square overflow-hidden rounded-2xl bg-card border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/40"
      >
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

        <span className="absolute top-3 right-3 p-1.5 rounded-full bg-black/30 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn size={14} />
        </span>

        <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-primary/80 text-primary-foreground backdrop-blur-sm">
          {categoryLabel[item.type]}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-serif text-white text-lg leading-snug mb-0.5">
            {item.title}
          </h3>
          {item.origin && (
            <p className="text-white/60 text-xs">{item.origin}</p>
          )}
        </div>
      </button>
    </Reveal>
  );
}

export default function GaleriaGrid({ items }: { items: MediaItem[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = useCallback((i: number) => setLightboxIndex(i), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i)),
    []
  );
  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null && i < items.length - 1 ? i + 1 : i
      ),
    [items.length]
  );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {items.map((item, i) => (
          <GaleriaCard key={item.id} item={item} onClick={() => open(i)} />
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps{
  caption?: string;
  alt: string;
}

export default function ImagePlaceholder({ caption, alt }:ImagePlaceholderProps) {
  return (
    <figure className="mt-10 rounded-2xl border border-dashed border-primary/40 bg-background-sand p-6">
      <div
        role="img"
        aria-label={alt}
        className="aspect-video w-full rounded-xl bg-background-sand flex flex-col items-center justify-center text-foreground/50"
      >
        <ImageIcon size={42} strokeWidth={1.2} />
        <span className="mt-3 text-xs uppercase tracking-[0.3em]">Espaço para imagem</span>
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-foreground/65 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

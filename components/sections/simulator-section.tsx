"use client"

import { Reveal } from "@/components/reveal";
import { useState } from "react";
import { FractalTree, Sierpinski } from "@/components/backgrounds"
import Slider from "@/components/slider";
import { ChevronDown, Code2 } from "lucide-react";

const sierpinskiCode = `function sierpinski(p1, p2, p3, n) {
  if (n === 0) {
    return desenhar(p1, p2, p3);
  }
  const m12 = pontoMedio(p1, p2);
  const m23 = pontoMedio(p2, p3);
  const m31 = pontoMedio(p3, p1);

  sierpinski(p1,  m12, m31, n - 1);
  sierpinski(m12, p2,  m23, n - 1);
  sierpinski(m31, m23, p3,  n - 1);
}`;

const treeCode = `function arvore(x, y, len, ang, n) {
  if (n === 0 || len < 2) return;

  const x2 = x + cos(ang) * len;
  const y2 = y + sin(ang) * len;
  desenharLinha(x, y, x2, y2);

  arvore(x2, y2, len * escala, ang - bifurcacao, n - 1);
  arvore(x2, y2, len * escala, ang + bifurcacao, n - 1);
}`;
  

export default function Simulator(){

    const [mode, setMode] = useState<"sierpinski" | "tree">("sierpinski");
      const [depth, setDepth] = useState(5);
      const [angle, setAngle] = useState(25);
      const [scale, setScale] = useState(0.72);
      const [hue, setHue] = useState(35);
      const [showCode, setShowCode] = useState(false);
    
      const color = `oklch(0.55 0.16 ${hue})`;

    return (
        <>
        <div className="grid lg:grid-cols-5 gap-8">
        <Reveal className="lg:col-span-3">
          <div className="aspect-square bg-background-sand rounded-3xl border border-border p-8 md:p-12 flex items-center justify-center">
            {mode === "sierpinski" ? (
              <Sierpinski key={`s-${depth}-${hue}`} depth={depth} size={500} color={color} fill className="w-full h-full" />
            ) : (
              <FractalTree key={`t-${depth}-${angle}-${scale}-${hue}`} depth={depth} angle={angle} scale={scale} color={color} className="w-full h-full" />
            )}
          </div>
        </Reveal>

        <Reveal className="lg:col-span-2" delay={150}>
          <div className="space-y-6 rounded-3xl border border-border bg-card p-7">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Padrão</p>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => setMode("sierpinski")} className={`rounded-lg px-4 py-3 text-sm transition ${mode === "sierpinski" ? "bg-primary text-primary-foreground" : "bg-background border border-border hover:border-primary/50"}`}>Sierpinski</button>
                <button onClick={() => setMode("tree")} className={`rounded-lg px-4 py-3 text-sm transition ${mode === "tree" ? "bg-primary text-primary-foreground" : "bg-background border border-border hover:border-primary/50"}`}>Árvore</button>
              </div>
            </div>

            <Slider label="Profundidade da recursão" value={depth} min={mode === "sierpinski" ? 0 : 1} max={mode === "sierpinski" ? 7 : 10} step={1} onChange={setDepth} />

            {mode === "tree" && (
              <>
                <Slider label="Ângulo de bifurcação" value={angle} min={5} max={60} step={1} suffix="°" onChange={setAngle} />
                <Slider label="Escala dos ramos" value={scale} min={0.5} max={0.85} step={0.01} onChange={setScale} />
              </>
            )}

            <Slider label="Matiz da cor" value={hue} min={0} max={360} step={1} suffix="°" onChange={setHue} />

            <button onClick={() => setShowCode(!showCode)} className="w-full flex items-center justify-between gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm hover:border-primary/50 transition">
              <span className="inline-flex items-center gap-2"><Code2 size={16} /> Ver o código por trás</span>
              <ChevronDown size={16} className={`transition-transform ${showCode ? "rotate-180" : ""}`} />
            </button>
          </div>
        </Reveal>
      </div>

      {showCode && (
        <Reveal>
          <div className="mt-8 rounded-2xl bg-[oklch(0.22_0.015_50)] text-background-sand p-6 md:p-8 animate-fade-in">
            <p className="text-xs uppercase tracking-widest text-[oklch(0.78_0.13_85)] mb-4">
              {mode === "sierpinski" ? "Triângulo de Sierpinski — recursão pura" : "Árvore fractal — bifurcação recursiva"}
            </p>
            <pre className="text-xs md:text-sm leading-relaxed font-mono overflow-x-auto"><code>{mode === "sierpinski" ? sierpinskiCode : treeCode}</code></pre>
            <p className="mt-5 text-sm opacity-70 italic">
              Pouco mais de uma dezena de linhas. A mesma lógica de uma aldeia Ba-ila ou de um penteado Mangbetu.
            </p>
          </div>
        </Reveal>
      )}
      </>
    )
}
import { useMemo } from "react";

interface Branch {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  depth: number;
}

function tree(
  x: number,
  y: number,
  len: number,
  angle: number,
  depth: number,
  branchAngle: number,
  scale: number,
  out: Branch[],
) {
  if (depth === 0 || len < 2) return;
  const x2 = x + Math.cos(angle) * len;
  const y2 = y + Math.sin(angle) * len;
  out.push({ x1: x, y1: y, x2, y2, depth });
  tree(
    x2,
    y2,
    len * scale,
    angle - branchAngle,
    depth - 1,
    branchAngle,
    scale,
    out,
  );
  tree(
    x2,
    y2,
    len * scale,
    angle + branchAngle,
    depth - 1,
    branchAngle,
    scale,
    out,
  );
}

interface Props {
  depth?: number;
  angle?: number;
  scale?: number;
  color?: string;
  className?: string;
}

export function FractalTree({
  depth = 9,
  angle = 25,
  scale = 0.72,
  color = "currentColor",
  className,
}: Props) {
  const branches = useMemo(() => {
    const out: Branch[] = [];
    tree(
      200,
      380,
      90,
      -Math.PI / 2,
      Math.max(1, Math.min(11, depth)),
      (angle * Math.PI) / 180,
      scale,
      out,
    );
    return out;
  }, [depth, angle, scale]);

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {branches.map((b, i) => (
        <line
          key={i}
          x1={b.x1}
          y1={b.y1}
          x2={b.x2}
          y2={b.y2}
          stroke={color}
          strokeWidth={Math.max(0.5, b.depth * 0.6)}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

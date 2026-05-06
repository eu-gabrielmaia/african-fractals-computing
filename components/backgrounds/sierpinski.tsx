import { useMemo } from "react";

interface Point {
  x: number;
  y: number;
}

function sierpinski(
  p1: Point,
  p2: Point,
  p3: Point,
  depth: number,
  triangles: Point[][],
) {
  if (depth === 0) {
    triangles.push([p1, p2, p3]);
    return;
  }
  const m12 = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
  const m23 = { x: (p2.x + p3.x) / 2, y: (p2.y + p3.y) / 2 };
  const m31 = { x: (p3.x + p1.x) / 2, y: (p3.y + p1.y) / 2 };
  sierpinski(p1, m12, m31, depth - 1, triangles);
  sierpinski(m12, p2, m23, depth - 1, triangles);
  sierpinski(m31, m23, p3, depth - 1, triangles);
}

interface Props {
  depth?: number;
  size?: number;
  color?: string;
  fill?: boolean;
  className?: string;
  animate?: boolean;
}

export default function Sierpinski({
  depth = 5,
  size = 400,
  color = "currentColor",
  fill = false,
  className,
  animate = false,
}: Props) {
  const triangles = useMemo(() => {
    const h = (Math.sqrt(3) / 2) * size;
    const p1 = { x: size / 2, y: 0 };
    const p2 = { x: 0, y: h };
    const p3 = { x: size, y: h };
    const arr: Point[][] = [];
    sierpinski(p1, p2, p3, Math.max(0, Math.min(8, depth)), arr);
    return { arr, h };
  }, [depth, size]);

  return (
    <svg
      viewBox={`0 0 ${size} ${triangles.h}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className={animate ? "fractal-draw" : ""}>
        {triangles.arr.map((tri, i) => (
          <polygon
            key={i}
            points={tri.map((p) => `${p.x},${p.y}`).join(" ")}
            fill={fill ? color : "none"}
            stroke={color}
            strokeWidth={0.5}
            opacity={fill ? 0.85 : 1}
          />
        ))}
      </g>
    </svg>
  );
}

interface FractalDecoProps {
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
}

export default function FractalDeco({
  size = 160,
  color = "#B85C28",
  opacity = 0.08,
  className = "",
}: FractalDecoProps) {
  const rects = [
    { x: 40, y: 40, w: 80 },
    { x: 55, y: 55, w: 50 },
    { x: 67, y: 67, w: 26 },
    { x: 75, y: 75, w: 10 },
  ];

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      aria-hidden="true"
      style={{ opacity }}
    >
      {rects.map((r, i) => (
        <rect
          key={i}
          x={r.x}
          y={r.y}
          width={r.w}
          height={r.w}
          stroke={color}
          strokeWidth="0.8"
        />
      ))}
    </svg>
  );
}

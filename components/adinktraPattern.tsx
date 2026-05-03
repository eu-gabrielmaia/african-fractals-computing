interface Props {
  className?: string;
  color?: string;
  opacity?: number;
}

export function AdinkraPattern({ className, color = "currentColor", opacity = 0.08 }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="adinkra" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <g fill="none" stroke={color} strokeWidth="1.2">
            <rect x="10" y="10" width="60" height="60" />
            <path d="M40 10 L40 70 M10 40 L70 40" />
            <circle cx="40" cy="40" r="14" />
            <path d="M25 25 L55 55 M55 25 L25 55" />
            <path d="M0 0 L10 0 L0 10 Z" fill={color} />
            <path d="M80 0 L70 0 L80 10 Z" fill={color} />
            <path d="M0 80 L10 80 L0 70 Z" fill={color} />
            <path d="M80 80 L70 80 L80 70 Z" fill={color} />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#adinkra)" />
    </svg>
  );
}

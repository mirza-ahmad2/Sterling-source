import { useId } from "react";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  const fadeId = useId();

  return (
    <svg
      viewBox="0 0 72 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={fadeId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="70%" stopColor="currentColor" stopOpacity="0.75" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M8 30 L36 6 L64 30"
        stroke="currentColor"
        strokeWidth="4.6"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />
      {[
        { x: 16, y: 28, h: 22 },
        { x: 23.5, y: 24, h: 28 },
        { x: 30.5, y: 20, h: 34 },
        { x: 36, y: 16, h: 40 },
        { x: 41.5, y: 20, h: 34 },
        { x: 48.5, y: 24, h: 28 },
        { x: 56, y: 28, h: 22 },
      ].map((b) => (
        <rect
          key={b.x}
          x={b.x - 1.55}
          y={b.y}
          width="3.1"
          height={b.h}
          rx="0.35"
          fill={`url(#${fadeId})`}
        />
      ))}
    </svg>
  );
}

export function BrandLogo({
  variant = "header",
}: {
  variant?: "header" | "footer";
}) {
  if (variant === "footer") {
    return (
      <span className="flex items-center gap-3">
        <LogoMark className="h-12 w-12 shrink-0 text-gold" />
        <span className="flex flex-col leading-none">
          <span className="font-brand text-[15px] uppercase tracking-[0.16em] text-off-white">
            Sterling &amp; Co.
          </span>
          <span className="mt-1.5 text-[10px] uppercase tracking-[0.32em] text-gold">
            Property Partners
          </span>
        </span>
      </span>
    );
  }

  return (
    <span className="flex items-center gap-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center text-gold">
        <LogoMark className="h-10 w-10" />
      </span>
      <span className="hidden sm:flex flex-col leading-none">
        <span className="font-brand text-[13px] uppercase tracking-[0.16em] text-off-white">
          Sterling &amp; Co.
        </span>
        <span className="mt-1.5 text-[9px] uppercase tracking-[0.32em] text-gold">
          Property Partners
        </span>
      </span>
    </span>
  );
}

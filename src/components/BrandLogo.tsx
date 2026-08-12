type BrandLogoProps = {
  className?: string;
};

/** Logo Gracie Kost Hotspot — rumah kembar garis, mengikuti warna teks (currentColor). */
export function BrandLogo({
  className = "h-8 w-auto max-w-full shrink-0 sm:h-10 md:h-12",
}: BrandLogoProps) {
  return (
    <svg
      viewBox="0 0 122 80"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Gracie Kost Hotspot"
      fill="none"
      stroke="currentColor"
      strokeWidth={3.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      className={className}
    >
      <title>Gracie Kost Hotspot</title>

      <path d="M56 28 86 6l30 22" />
      <path d="M60 28v46M112 28v46" />
      <path d="M60 50h52" />
      <path d="M6 46 34 24l26 22" />
      <path d="M10 46v28" />
      <path d="M10 74h102" />
      <rect x="74" y="32" width="24" height="14" rx="1" />
      <path d="M86 32v14M74 39h24" />
      <rect x="74" y="56" width="24" height="14" rx="1" />
      <path d="M86 56v14M74 63h24" />
      <rect x="22" y="52" width="24" height="14" rx="1" />
      <path d="M34 52v14M22 59h24" />
    </svg>
  );
}

type BrandLogoProps = {
  className?: string;
  /** Tampilkan hanya lambang, tanpa teks nama. */
  iconOnly?: boolean;
};

const MARK = (
  <>
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
  </>
);

/** Logo Hotspot Griya Arca Kost — lambang rumah kembar + wordmark, mengikuti currentColor. */
export function BrandLogo({
  className = "h-10 w-auto max-w-full shrink-0 sm:h-12 md:h-14",
  iconOnly = false,
}: BrandLogoProps) {
  if (iconOnly) {
    return (
      <svg
        viewBox="0 0 122 80"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Hotspot Griya Arca Kost"
        fill="none"
        stroke="currentColor"
        strokeWidth={3.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <title>Hotspot Griya Arca Kost</title>
        {MARK}
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 420 80"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Hotspot Griya Arca Kost"
      fill="none"
      className={className}
    >
      <title>Hotspot Griya Arca Kost</title>
      <g
        stroke="currentColor"
        strokeWidth={3.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {MARK}
      </g>
      <g fill="currentColor" stroke="none">
        <text
          x="140"
          y="34"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="18"
          fontWeight={600}
          letterSpacing="4.5"
          opacity="0.7"
        >
          HOTSPOT
        </text>
        <text
          x="140"
          y="68"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="27"
          fontWeight={800}
          letterSpacing="0.5"
        >
          GRIYA ARCA KOST
        </text>
      </g>
    </svg>
  );
}

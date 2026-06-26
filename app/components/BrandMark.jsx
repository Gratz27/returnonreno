// The Return on Reno house-arrow mark (matches the favicon). White by default.
export default function BrandMark({ size = 22, color = "#ffffff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke={color}
      strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 33 L16 47 L34 47 L34 33" />
      <path d="M12 35 L25 24 L34 31 L52 16" />
      <path d="M43 15 L53 15 L53 25" />
    </svg>
  );
}

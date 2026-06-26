// Decorative home-hero illustration: the brand house-arrow mark over rising value bars.
export default function HeroArt() {
  return (
    <svg className="hero-art-svg" viewBox="0 0 380 300" role="img" aria-label="A home with rising value" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ha-tile" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#13a37e" />
          <stop offset="1" stopColor="#0b6b52" />
        </linearGradient>
      </defs>
      <ellipse cx="195" cy="150" rx="150" ry="140" fill="#eaf6f0" />
      <path d="M55 220 C120 210 150 165 250 78" stroke="#d9663b" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.85" />
      <path d="M226 74 L258 68 L252 100" stroke="#d9663b" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.85" />
      <rect x="108" y="200" width="42" height="58" rx="10" fill="#cdeee0" />
      <rect x="162" y="172" width="42" height="86" rx="10" fill="#84d3b4" />
      <rect x="216" y="140" width="42" height="118" rx="10" fill="#1d9e75" />
      <g transform="translate(150,52)">
        <rect width="116" height="116" rx="28" fill="url(#ha-tile)" />
        <g transform="translate(8,8) scale(1.56)" stroke="#ffffff" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 33 L16 47 L34 47 L34 33" />
          <path d="M12 35 L25 24 L34 31 L52 16" />
          <path d="M43 15 L53 15 L53 25" />
        </g>
      </g>
    </svg>
  );
}

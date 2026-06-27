export default function GoldPlane() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_18px_rgba(255,215,0,0.9)]"
    >
      <defs>
        <linearGradient id="planeGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8C9" />
          <stop offset="25%" stopColor="#FFE48A" />
          <stop offset="55%" stopColor="#FFD54A" />
          <stop offset="80%" stopColor="#D4A017" />
          <stop offset="100%" stopColor="#8A6400" />
        </linearGradient>

        <filter
          id="goldGlow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g fill="url(#planeGold)" filter="url(#goldGlow)">
        {/* Fuselage */}
        <path
          d="
            M58 255
            L365 225
            L470 255
            L365 285
            L58 255
            Z
          "
        />

        {/* Upper Wing */}
        <path
          d="
            M190 235
            L300 70
            L340 78
            L280 238
            Z
          "
        />

        {/* Lower Wing */}
        <path
          d="
            M190 275
            L300 440
            L340 432
            L280 272
            Z
          "
        />

        {/* Tail */}
        <path
          d="
            M92 248
            L40 165
            L68 160
            L132 248
            Z
          "
        />

        <path
          d="
            M92 262
            L40 347
            L68 352
            L132 262
            Z
          "
        />

        {/* Cockpit */}
        <ellipse
          cx="410"
          cy="248"
          rx="20"
          ry="8"
          fill="#FFF9DB"
        />

        {/* Nose Light */}
        <circle
          cx="468"
          cy="255"
          r="10"
          fill="#FFF8C5"
        />
      </g>
    </svg>
  );
}
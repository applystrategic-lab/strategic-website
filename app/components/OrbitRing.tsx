export default function OrbitRing() {
  return (
    <svg
      width="240"
      height="240"
      viewBox="0 0 240 240"
      className="absolute"
    >
      <defs>
        <linearGradient
          id="orbitGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFD54A" stopOpacity="0" />
          <stop offset="40%" stopColor="#FFD54A" stopOpacity=".35" />
          <stop offset="100%" stopColor="#FFD54A" stopOpacity=".9" />
        </linearGradient>
      </defs>

      <circle
        cx="120"
        cy="120"
        r="92"
        fill="none"
        stroke="url(#orbitGradient)"
        strokeWidth="1.3"
        strokeDasharray="580"
        strokeDashoffset="580"
      />
    </svg>
  );
}
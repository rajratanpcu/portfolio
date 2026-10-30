import React from 'react';

export const TechCoreFallback: React.FC = () => {
  return (
    <div className="relative w-full h-[360px] sm:h-[440px] flex items-center justify-center select-none">
      {/* Ambient gradient glow */}
      <div className="absolute w-72 h-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute w-60 h-60 rounded-full bg-indigo-500/10 blur-2xl" />

      {/* SVG System Architecture Node Representation */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full max-w-md max-h-md text-sky-400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Abstract software architecture core illustration"
      >
        {/* Orbital Ring 1 */}
        <ellipse
          cx="200"
          cy="200"
          rx="160"
          ry="65"
          transform="rotate(-25 200 200)"
          stroke="rgba(56, 189, 248, 0.3)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        {/* Orbital Ring 2 */}
        <ellipse
          cx="200"
          cy="200"
          rx="175"
          ry="75"
          transform="rotate(35 200 200)"
          stroke="rgba(129, 140, 248, 0.25)"
          strokeWidth="1.5"
        />

        {/* Central Icosahedron Wireframe Core */}
        <polygon
          points="200,90 295,145 295,255 200,310 105,255 105,145"
          stroke="rgba(56, 189, 248, 0.4)"
          strokeWidth="1.5"
        />
        <polygon
          points="200,125 265,165 265,235 200,275 135,235 135,165"
          stroke="rgba(129, 140, 248, 0.5)"
          strokeWidth="1.5"
        />
        <line x1="200" y1="90" x2="200" y2="125" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
        <line x1="295" y1="145" x2="265" y2="165" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
        <line x1="295" y1="255" x2="265" y2="235" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
        <line x1="200" y1="310" x2="200" y2="275" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
        <line x1="105" y1="255" x2="135" y2="235" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
        <line x1="105" y1="145" x2="135" y2="165" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />

        {/* Inner Triangulation */}
        <line x1="200" y1="125" x2="265" y2="235" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" />
        <line x1="265" y1="165" x2="135" y2="235" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" />
        <line x1="135" y1="165" x2="200" y2="275" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" />

        {/* Vertices & Nodes */}
        <circle cx="200" cy="90" r="4" fill="#38bdf8" />
        <circle cx="295" cy="145" r="4" fill="#818cf8" />
        <circle cx="295" cy="255" r="4" fill="#38bdf8" />
        <circle cx="200" cy="310" r="4" fill="#818cf8" />
        <circle cx="105" cy="255" r="4" fill="#38bdf8" />
        <circle cx="105" cy="145" r="4" fill="#818cf8" />

        {/* Traveling Telemetry Data Packets */}
        <circle cx="340" cy="180" r="5" fill="#38bdf8" className="filter drop-shadow-[0_0_8px_#38bdf8]" />
        <circle cx="85" cy="235" r="4" fill="#34d399" className="filter drop-shadow-[0_0_8px_#34d399]" />
        <circle cx="200" cy="200" r="7" fill="#818cf8" className="filter drop-shadow-[0_0_12px_#818cf8]" />
      </svg>
    </div>
  );
};

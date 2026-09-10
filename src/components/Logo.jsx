import React from 'react';

export default function Logo({ size = "md", light = false, className = "" }) {
  const sizeMap = {
    sm: { icon: 26, text: "text-[13px]", sub: "text-[8px]", gap: "space-x-2.5", tracking: "tracking-[0.22em]" },
    md: { icon: 34, text: "text-[16px]", sub: "text-[9px]", gap: "space-x-3", tracking: "tracking-[0.24em]" },
    lg: { icon: 40, text: "text-[18px]", sub: "text-[10px]", gap: "space-x-3.5", tracking: "tracking-[0.26em]" },
    hero: { icon: 46, text: "text-[21px]", sub: "text-[11px]", gap: "space-x-4", tracking: "tracking-[0.28em]" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center ${currentSize.gap} group cursor-pointer select-none ${className}`}>
      {/* Minimal Architectural Vector Tree Symbol (Matches Reference Mockup) */}
      <div
        className="relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Architectural Triangular Canopy Outline */}
          <path
            d="M24 8L11 38H17L24 22L31 38H37L24 8Z"
            fill={light ? "#FFFFFF" : "#B89047"}
            className="transition-colors duration-300"
          />
          {/* Inner Vertical Spire / Trunk */}
          <path
            d="M23 23H25V38H23V23Z"
            fill={light ? "#F7F2E7" : "#D4AF37"}
          />
          {/* Ground Base Line */}
          <line
            x1="8"
            y1="41"
            x2="40"
            y2="41"
            stroke={light ? "rgba(255,255,255,0.4)" : "#C5A880"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-sans font-semibold uppercase ${currentSize.tracking} ${currentSize.text} leading-tight ${
            light ? "text-white" : "text-[#17201C]"
          } transition-colors group-hover:text-[#B89047]`}
        >
          ANTELIA
        </span>
        <span
          className={`font-sans font-medium uppercase tracking-[0.38em] ${currentSize.sub} ${
            light ? "text-[#D8C8B5]" : "text-[#4A5D52]"
          } mt-0.5 leading-none`}
        >
          GROVES
        </span>
      </div>
    </div>
  );
}

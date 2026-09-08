import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Sparkles, Compass } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="transformation" className="relative py-28 px-6 md:px-12 bg-charcoal-950 border-t border-white/10 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-bronze-400 uppercase mb-3">
            <Sparkles size={14} />
            <span>CHAPTER 11 // THE METAMORPHOSIS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-cinzel font-semibold tracking-wider text-ivory-100 uppercase">
            BEFORE & AFTER
          </h2>
          <p className="mt-4 text-sm sm:text-base font-editorial italic text-stone-300">
            "Drag the interactive slider to witness the metamorphosis of 10 raw acres into Antelia Groves."
          </p>
        </div>

        {/* Full-Screen Interactive Split Slider */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full h-[520px] sm:h-[620px] rounded-3xl overflow-hidden border border-bronze-500/40 shadow-2xl cursor-ew-resize"
        >
          {/* RIGHT LAYER: AFTER (ANTELIA GROVES AT DUSK) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#091512] via-charcoal-950 to-[#121A15] p-8 sm:p-12 flex flex-col justify-between">
            {/* Architectural Graphic representation of finished community */}
            <div className="absolute inset-0 bg-blueprint-dots opacity-40 pointer-events-none"></div>

            {/* Glowing Community Render Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
              <svg className="w-full h-full max-w-4xl" viewBox="0 0 800 600">
                {/* 10-Acre Perimeter */}
                <rect x="50" y="50" width="700" height="500" rx="20" fill="none" stroke="#BA996E" strokeWidth="3" />
                {/* Roads */}
                <path d="M 400 50 L 400 550" stroke="#375242" strokeWidth="24" strokeLinecap="round" />
                <path d="M 50 300 L 750 300" stroke="#375242" strokeWidth="24" strokeLinecap="round" />
                {/* Central Clubhouse & Pool */}
                <circle cx="400" cy="300" r="80" fill="#13241C" stroke="#BA996E" strokeWidth="2" />
                <rect x="370" y="275" width="60" height="50" rx="6" fill="#38BDF8" opacity="0.8" />
                {/* Villas Grid Glowing Dots */}
                {Array.from({ length: 12 }).map((_, r) =>
                  Array.from({ length: 16 }).map((_, c) => {
                    const cx = 90 + c * 40;
                    const cy = 90 + r * 35;
                    const dist = Math.hypot(cx - 400, cy - 300);
                    if (dist > 90 && cx > 70 && cx < 730 && cy > 70 && cy < 530) {
                      return (
                        <circle
                          key={`v-${r}-${c}`}
                          cx={cx}
                          cy={cy}
                          r="4"
                          fill="#FFDFB0"
                          opacity="0.85"
                        />
                      );
                    }
                    return null;
                  })
                )}
              </svg>
            </div>

            {/* Right Header Metadata */}
            <div className="relative z-10 text-right ml-auto">
              <span className="inline-block px-3 py-1 rounded bg-forest-900/80 border border-emerald-500/40 text-emerald-300 font-mono text-xs uppercase tracking-widest mb-2">
                AFTER // COMPLETED ENCLAVE
              </span>
              <h3 className="text-3xl sm:text-5xl font-cinzel font-bold text-ivory-100 uppercase">
                ANTELIA GROVES
              </h3>
              <p className="text-xs sm:text-sm font-mono text-bronze-400 mt-1">
                189 BESPOKE VILLAS • 15K SQ.FT CLUBHOUSE
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-end text-xs font-mono text-stone-300">
              <span className="flex items-center space-x-2 bg-charcoal-900/80 px-4 py-2 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>LIVING MASTERPLAN • OCCUPANCY READY</span>
              </span>
            </div>
          </div>

          {/* LEFT LAYER: BEFORE (RAW 10-ACRE TERRAIN) with Clip-Path */}
          <div
            className="absolute inset-0 bg-[#0E1012] p-8 sm:p-12 flex flex-col justify-between overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            {/* Topographic Contour Lines SVG */}
            <div className="absolute inset-0 opacity-45 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 800 600">
                <rect width="800" height="600" fill="#0A0C0E" />
                {/* Contour elevation loops */}
                {Array.from({ length: 14 }).map((_, i) => (
                  <ellipse
                    key={i}
                    cx="400"
                    cy="300"
                    rx={60 + i * 36}
                    ry={40 + i * 26}
                    fill="none"
                    stroke="#4A5568"
                    strokeWidth="1.2"
                    strokeDasharray={i % 3 === 0 ? "4 4" : "none"}
                  />
                ))}
                {/* Elevation marks */}
                <text x="380" y="290" fill="#A0AEC0" fontSize="12" fontFamily="monospace">924.0m</text>
                <text x="380" y="240" fill="#A0AEC0" fontSize="12" fontFamily="monospace">928.0m</text>
                <text x="380" y="190" fill="#A0AEC0" fontSize="12" fontFamily="monospace">932.0m</text>
                {/* Survey pegs */}
                <circle cx="100" cy="100" r="6" fill="#BA996E" />
                <circle cx="700" cy="100" r="6" fill="#BA996E" />
                <circle cx="700" cy="500" r="6" fill="#BA996E" />
                <circle cx="100" cy="500" r="6" fill="#BA996E" />
              </svg>
            </div>

            {/* Left Header Metadata */}
            <div className="relative z-10 max-w-sm">
              <span className="inline-block px-3 py-1 rounded bg-stone-900/90 border border-stone-600/40 text-stone-300 font-mono text-xs uppercase tracking-widest mb-2">
                BEFORE // UNTOUCHED EARTH
              </span>
              <h3 className="text-3xl sm:text-5xl font-cinzel font-bold text-stone-200 uppercase">
                RAW LAND
              </h3>
              <p className="text-xs sm:text-sm font-mono text-stone-400 mt-1">
                10 ACRES • 12M TOPOGRAPHIC CONTOUR
              </p>
            </div>

            <div className="relative z-10 flex items-center text-xs font-mono text-stone-400">
              <span className="flex items-center space-x-2 bg-charcoal-900/80 px-4 py-2 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>ORIGINAL GEODETIC SURVEY STATE</span>
              </span>
            </div>
          </div>

          {/* SPLIT SLIDER DRAG HANDLE */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-bronze-400 z-30"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-bronze-500 text-charcoal-950 flex items-center justify-center shadow-glow-bronze border-2 border-ivory-100 hover:scale-110 active:scale-95 transition-transform">
              <ArrowLeftRight size={18} />
            </div>
          </div>
        </div>

        {/* Interactive Milestone Indicator Rail */}
        <div className="mt-10 p-6 rounded-2xl border border-white/10 bg-charcoal-900/60 backdrop-blur-md">
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-stone-400 uppercase mb-4">
            <span>TRANSFORMATION LIFECYCLE</span>
            <span className="text-bronze-400 font-bold">SLIDER: {Math.round(sliderPos)}% COMPLETED</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            {[
              { title: "RAW LAND", pct: "0%" },
              { title: "PREPARED LAND", pct: "20%" },
              { title: "MASTERPLAN", pct: "40%" },
              { title: "CONSTRUCTION", pct: "60%" },
              { title: "LANDSCAPING", pct: "80%" },
              { title: "ANTELIA GROVES", pct: "100%" },
            ].map((step, idx) => (
              <div
                key={idx}
                onClick={() => setSliderPos(parseInt(step.pct))}
                className={`p-3 rounded-lg border transition-all cursor-pointer ${
                  sliderPos >= parseInt(step.pct)
                    ? "border-bronze-500/60 bg-charcoal-950 text-ivory-100"
                    : "border-white/5 bg-charcoal-950/40 text-stone-500"
                }`}
              >
                <div className="text-[10px] font-mono text-bronze-400 mb-1">{step.pct}</div>
                <div className="text-xs font-cinzel font-semibold uppercase">{step.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

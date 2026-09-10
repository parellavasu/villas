import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
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
    <section id="transformation" className="relative py-28 px-6 md:px-12 bg-white border-t border-sky-100 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-3 text-xs font-mono tracking-widest text-cobalt-600 uppercase mb-3 font-bold">
            <span>12 / THE METAMORPHOSIS</span>
            <div className="w-10 h-[1.5px] bg-cobalt-600"></div>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight text-navy-900 uppercase">
            BEFORE & <span className="text-cobalt-600">AFTER.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base font-editorial italic text-slate-600">
            "Drag the interactive blue slider to witness the metamorphosis of 10 raw acres into Antelia Groves."
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
          className="relative w-full h-[520px] sm:h-[620px] rounded-3xl overflow-hidden border border-sky-200 shadow-arch-card cursor-ew-resize bg-white"
        >
          {/* RIGHT LAYER: AFTER (ANTELIA GROVES) */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50/50 to-blue-50/40 p-8 sm:p-12 flex flex-col justify-between">
            <div className="absolute inset-0 bg-blueprint-dots opacity-40 pointer-events-none"></div>

            {/* Completed Community SVG Graphic */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
              <svg className="w-full h-full max-w-4xl" viewBox="0 0 800 600">
                <rect x="50" y="50" width="700" height="500" rx="20" fill="none" stroke="#0284C7" strokeWidth="3" />
                <path d="M 400 50 L 400 550" stroke="#CBD5E1" strokeWidth="24" strokeLinecap="round" />
                <path d="M 50 300 L 750 300" stroke="#CBD5E1" strokeWidth="24" strokeLinecap="round" />
                <circle cx="400" cy="300" r="80" fill="#F0F9FF" stroke="#0A2540" strokeWidth="2" />
                <rect x="370" y="275" width="60" height="50" rx="6" fill="#0284C7" />
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
                          r="5"
                          fill="#0A2540"
                          opacity="0.8"
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
              <span className="inline-block px-3 py-1 rounded bg-sky-100 text-cobalt-600 font-mono text-xs uppercase tracking-widest mb-2 font-bold border border-sky-200">
                AFTER // COMPLETED ENCLAVE
              </span>
              <h3 className="text-3xl sm:text-5xl font-sans font-extrabold text-navy-900 uppercase">
                ANTELIA GROVES
              </h3>
              <p className="text-xs sm:text-sm font-sans text-cobalt-600 mt-1 font-bold">
                189 BESPOKE VILLAS • 15K SQ.FT CLUBHOUSE
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-end text-xs font-mono text-slate-600">
              <span className="flex items-center space-x-2 bg-white/95 px-4 py-2 rounded-full border border-sky-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>LIVING MASTERPLAN • OCCUPANCY READY</span>
              </span>
            </div>
          </div>

          {/* LEFT LAYER: BEFORE (RAW LAND) */}
          <div
            className="absolute inset-0 bg-[#F4F6F8] p-8 sm:p-12 flex flex-col justify-between overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <div className="absolute inset-0 opacity-60 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 800 600">
                <rect width="800" height="600" fill="#F8FAFC" />
                {Array.from({ length: 14 }).map((_, i) => (
                  <ellipse
                    key={i}
                    cx="400"
                    cy="300"
                    rx={60 + i * 36}
                    ry={40 + i * 26}
                    fill="none"
                    stroke="#0284C7"
                    strokeWidth="1.2"
                    strokeDasharray={i % 3 === 0 ? "4 4" : "none"}
                    opacity={0.5}
                  />
                ))}
                <text x="380" y="290" fill="#0A2540" fontSize="12" fontFamily="monospace" fontWeight="bold">924.0m</text>
                <text x="380" y="240" fill="#0A2540" fontSize="12" fontFamily="monospace" fontWeight="bold">928.0m</text>
                <text x="380" y="190" fill="#0A2540" fontSize="12" fontFamily="monospace" fontWeight="bold">932.0m</text>
                <circle cx="100" cy="100" r="6" fill="#0A2540" />
                <circle cx="700" cy="100" r="6" fill="#0A2540" />
                <circle cx="700" cy="500" r="6" fill="#0A2540" />
                <circle cx="100" cy="500" r="6" fill="#0A2540" />
              </svg>
            </div>

            {/* Left Header Metadata */}
            <div className="relative z-10 max-w-sm">
              <span className="inline-block px-3 py-1 rounded bg-white border border-slate-200 text-slate-600 font-mono text-xs uppercase tracking-widest mb-2 font-bold shadow-sm">
                BEFORE // UNTOUCHED EARTH
              </span>
              <h3 className="text-3xl sm:text-5xl font-sans font-extrabold text-navy-900 uppercase">
                RAW LAND
              </h3>
              <p className="text-xs sm:text-sm font-sans text-slate-500 mt-1 font-semibold">
                10 ACRES • 12M TOPOGRAPHIC CONTOUR
              </p>
            </div>

            <div className="relative z-10 flex items-center text-xs font-mono text-slate-600">
              <span className="flex items-center space-x-2 bg-white/95 px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>ORIGINAL GEODETIC SURVEY STATE</span>
              </span>
            </div>
          </div>

          {/* BLUE VERTICAL SLIDER DRAG HANDLE */}
          <div
            className="absolute top-0 bottom-0 w-[2.5px] bg-cobalt-600 z-30"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-cobalt-600 text-white flex items-center justify-center shadow-glow-blue border-2 border-white hover:scale-110 active:scale-95 transition-transform">
              <ArrowLeftRight size={18} />
            </div>
          </div>
        </div>

        {/* Interactive Milestone Indicator Rail */}
        <div className="mt-10 p-6 rounded-2xl border border-sky-100 bg-white shadow-arch-card">
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-slate-500 uppercase mb-4 font-semibold">
            <span>TRANSFORMATION LIFECYCLE</span>
            <span className="text-cobalt-600 font-bold">SLIDER: {Math.round(sliderPos)}% COMPLETED</span>
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
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  sliderPos >= parseInt(step.pct)
                    ? "border-cobalt-500 bg-sky-50/80 text-navy-900 shadow-sm"
                    : "border-slate-100 bg-slate-50/50 text-slate-400 hover:bg-slate-50"
                }`}
              >
                <div className="text-[10px] font-mono text-cobalt-600 mb-1 font-bold">{step.pct}</div>
                <div className="text-xs font-sans font-bold uppercase">{step.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

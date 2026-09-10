import React, { useState } from 'react';
import VillaCutaway3D from '../three/VillaCutaway3D';
import { RotateCw, CheckCircle2 } from 'lucide-react';

export default function Section03MasterplanVillas({ onSelectVilla }) {
  const [activeFloor, setActiveFloor] = useState('all');
  const [isExploded, setIsExploded] = useState(false);
  const [villaType, setVillaType] = useState('east');

  return (
    <section
      id="masterplan"
      className="relative py-12 sm:py-16 px-6 md:px-12 bg-gradient-to-r from-white via-[#F7FAFD] via-45% to-sky-100/50 border-t border-sky-100 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header: Controlled Max Width */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 pb-4 border-b border-slate-100">
          <div className="max-w-md">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono tracking-widest text-cobalt-600 uppercase mb-2 font-semibold">
              <span>03 / MASTERPLAN & VILLAS</span>
              <div className="w-5 h-[1.5px] bg-cobalt-600"></div>
            </div>
            {/* Main Section Heading: 30–40px Desktop, 24–30px Mobile, Weight 600 */}
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-sans font-semibold tracking-tight text-navy-950 uppercase leading-snug mb-1.5">
              LEVEL UP <span className="text-cobalt-600 font-semibold">YOUR LIVING</span>
            </h2>
            <p className="text-[14px] sm:text-[15px] font-sans text-slate-600 font-normal leading-[1.6]">
              A 10-acre low-density gated community of 189 private villas with split-level architecture, shaded walkways, and private gardens.
            </p>
          </div>

          {/* 3 Compact Architectural Data Cards */}
          <div className="mt-4 lg:mt-0 grid grid-cols-3 gap-2">
            <div className="p-2.5 sm:p-3 rounded-lg border border-sky-200/80 bg-white shadow-2xs text-center">
              <span className="block text-[14px] sm:text-[16px] font-semibold text-navy-950">2262–3000</span>
              <span className="text-[9.5px] font-mono tracking-wider text-cobalt-600 uppercase font-semibold">SQ.FT BUA</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-lg border border-sky-200/80 bg-white shadow-2xs text-center">
              <span className="block text-[14px] sm:text-[16px] font-semibold text-navy-950">3 & 4 BHK</span>
              <span className="text-[9.5px] font-mono tracking-wider text-cobalt-600 uppercase font-semibold">VILLAS</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-lg border border-sky-200/80 bg-white shadow-2xs text-center">
              <span className="block text-[14px] sm:text-[16px] font-semibold text-navy-950">180–300+</span>
              <span className="text-[9.5px] font-mono tracking-wider text-cobalt-600 uppercase font-semibold">SQ.FT GARDENS</span>
            </div>
          </div>
        </div>

        {/* 3D Interactive Stage & Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* 3D Model Viewport (7 cols) */}
          <div className="lg:col-span-7 relative h-[340px] sm:h-[390px] rounded-xl border border-sky-200/80 bg-gradient-to-b from-white via-sky-50/40 to-slate-100 overflow-hidden shadow-2xs">
            <VillaCutaway3D
              activeFloor={activeFloor}
              isExploded={isExploded}
              villaType={villaType}
              stage={8}
            />

            {/* Top Toolbar */}
            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md border border-sky-200 text-[9.5px] font-mono uppercase tracking-wider text-navy-950 font-semibold shadow-2xs pointer-events-auto">
                <RotateCw size={10} className="text-cobalt-600 animate-spin" style={{ animationDuration: '8s' }} />
                <span>INTERACTIVE 3D // DRAG TO ROTATE</span>
              </div>

              <div className="flex items-center space-x-1 bg-white/95 backdrop-blur-md border border-sky-200 p-0.5 rounded-full shadow-2xs pointer-events-auto">
                <button
                  onClick={() => setVillaType('east')}
                  className={`px-2 py-0.5 text-[9.5px] font-mono font-semibold uppercase rounded-full transition-all ${
                    villaType === 'east' ? 'bg-navy-950 text-white' : 'text-slate-600'
                  }`}
                >
                  TYPE A (EAST)
                </button>
                <button
                  onClick={() => setVillaType('west')}
                  className={`px-2 py-0.5 text-[9.5px] font-mono font-semibold uppercase rounded-full transition-all ${
                    villaType === 'west' ? 'bg-navy-950 text-white' : 'text-slate-600'
                  }`}
                >
                  TYPE B (WEST)
                </button>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-wrap items-center justify-between gap-1.5 pointer-events-none">
              <div className="flex items-center space-x-1 bg-white/95 backdrop-blur-md border border-sky-200 p-0.5 rounded-lg shadow-2xs pointer-events-auto">
                {[
                  { id: 'all', label: 'FULL VILLA' },
                  { id: 'ground', label: 'GROUND' },
                  { id: 'first', label: 'FIRST' },
                  { id: 'second', label: 'TERRACE' },
                ].map((fl) => (
                  <button
                    key={fl.id}
                    onClick={() => {
                      setActiveFloor(fl.id);
                      setIsExploded(false);
                    }}
                    className={`px-2 py-1 rounded text-[10px] font-mono font-semibold uppercase tracking-wider transition-all ${
                      activeFloor === fl.id && !isExploded
                        ? 'bg-cobalt-600 text-white shadow-2xs'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {fl.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsExploded(!isExploded)}
                className={`px-2.5 py-1 rounded text-[10px] font-mono font-semibold uppercase tracking-wider border pointer-events-auto transition-all ${
                  isExploded
                    ? 'bg-navy-950 text-white border-navy-950'
                    : 'bg-white/95 text-slate-700 border-sky-200 hover:border-cobalt-600'
                }`}
              >
                {isExploded ? 'COLLAPSE' : 'EXPLODED'}
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Highlights (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            <div className="p-4 rounded-xl border border-sky-100 bg-white shadow-2xs">
              <span className="text-[10px] font-mono tracking-widest text-cobalt-600 uppercase font-semibold block mb-1">
                // ARCHITECTURE CONCEPT
              </span>
              <h4 className="text-[16px] font-sans font-semibold text-navy-950 uppercase mb-2">
                Split-Level Villa Layout
              </h4>
              <div className="space-y-1.5 text-[13px] font-sans text-slate-600 leading-snug">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 size={13} className="text-cobalt-600 shrink-0 mt-0.5" />
                  <span>Ground floor: Living foyer, private backyard & guest suite</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 size={13} className="text-cobalt-600 shrink-0 mt-0.5" />
                  <span>First floor: Master suite with walk-in wardrobe & balcony</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 size={13} className="text-cobalt-600 shrink-0 mt-0.5" />
                  <span>Second floor: Family lounge & open-air terrace garden</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-sky-100 bg-white shadow-2xs">
              <span className="text-[10px] font-mono tracking-widest text-cobalt-600 uppercase font-semibold block mb-1">
                // 10-ACRE MASTERPLAN SPECIFICATIONS
              </span>
              <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono text-slate-700 pt-1">
                <div className="p-1.5 rounded-md bg-sky-50/50 border border-sky-100">
                  <span className="text-slate-400 block text-[9px]">AVENUES</span>
                  <strong className="text-navy-950 font-semibold">40FT & 30FT</strong>
                </div>
                <div className="p-1.5 rounded-md bg-sky-50/50 border border-sky-100">
                  <span className="text-slate-400 block text-[9px]">DENSITY</span>
                  <strong className="text-navy-950 font-semibold">189 HOMES</strong>
                </div>
                <div className="p-1.5 rounded-md bg-sky-50/50 border border-sky-100">
                  <span className="text-slate-400 block text-[9px]">LANDSCAPE</span>
                  <strong className="text-navy-950 font-semibold">45%+ GREEN</strong>
                </div>
                <div className="p-1.5 rounded-md bg-sky-50/50 border border-sky-100">
                  <span className="text-slate-400 block text-[9px]">COMMUNITY</span>
                  <strong className="text-navy-950 font-semibold">GATED 24/7</strong>
                </div>
              </div>

              <button
                onClick={onSelectVilla}
                className="w-full mt-3 py-2 bg-navy-950 hover:bg-cobalt-600 text-white text-[11px] font-sans font-semibold uppercase tracking-widest rounded-lg transition-colors shadow-2xs"
              >
                REQUEST VILLA FLOOR PLANS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

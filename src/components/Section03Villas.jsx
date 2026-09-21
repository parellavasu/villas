import React, { useState } from 'react';
import VillaCutaway3D from '../three/VillaCutaway3D';
import { ArrowUpRight } from 'lucide-react';

export default function Section03Villas({ onSelectVilla }) {
  const [villaType, setVillaType] = useState('east'); // 'east' | 'west'
  const [activeFloor, setActiveFloor] = useState('all'); // 'all' | 'ground' | 'first' | 'terrace'

  // Documented Villa Specifications
  const specsEast = [
    { label: 'CONFIGURATION', val: '3 & 4 BHK Split-Level' },
    { label: 'BUILT-UP AREA', val: '2,262 – 3,000 Sq.Ft' },
    { label: 'ORIENTATION', val: 'East-Facing Vastu Entrance' },
    { label: 'PRIVATE GARDEN', val: '180+ Sq.Ft Rear Courtyard' },
    { label: 'PARKING', val: '2 Covered Car Parks' },
    { label: 'STRUCTURE', val: 'Earthquake-Resistant RCC' },
  ];

  const specsWest = [
    { label: 'CONFIGURATION', val: '3 & 4 BHK Split-Level' },
    { label: 'BUILT-UP AREA', val: '2,262 – 3,000 Sq.Ft' },
    { label: 'ORIENTATION', val: 'West-Facing Vastu Entrance' },
    { label: 'PRIVATE GARDEN', val: '180+ Sq.Ft Rear Courtyard' },
    { label: 'PARKING', val: '2 Covered Car Parks' },
    { label: 'STRUCTURE', val: 'Earthquake-Resistant RCC' },
  ];

  const currentSpecs = villaType === 'east' ? specsEast : specsWest;

  return (
    <section
      id="villas"
      className="relative bg-[#FAFAF9] text-[#111827] py-5 sm:py-6 lg:py-8 border-t border-gray-200 scroll-mt-[74px] font-sans lg:min-h-[calc(100vh-74px)] flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        
        {/* COMPACT SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-3 sm:mb-4 pb-3 border-b border-gray-200 gap-2">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 mb-1">
              <span className="w-4 h-[1.5px] bg-[#EA580C]" />
              <span className="font-mono text-[10.5px] font-semibold tracking-[0.25em] text-[#EA580C] uppercase">
                04 / THE VILLAS
              </span>
            </div>
            <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] lg:text-[28px] tracking-tight text-[#111827] leading-tight">
              INDEPENDENT VILLAS. THOUGHTFULLY DESIGNED.
            </h2>
          </div>

          <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-[#4B5563] max-w-md md:text-right font-normal">
            Split-level independent residences engineered with double-height foyers, private gardens, and open-air rooftop lounges.
          </p>
        </div>

        {/* INTERACTIVE 3D ARCHITECTURAL MODEL & SPECIFICATIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
          
          {/* Left Column: 3D Model Explorer (~65%) */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Top Controls: Typology + Floor Level Switchers */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 bg-white border border-gray-200 rounded-sm mb-2.5 shadow-xs">
              
              {/* Typology Switcher */}
              <div className="flex items-center space-x-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B7280]">
                  TYPOLOGY:
                </span>
                <button
                  onClick={() => setVillaType('east')}
                  className={`px-3 py-1 text-[10.5px] font-mono uppercase tracking-wider rounded-xs transition-all cursor-pointer ${
                    villaType === 'east'
                      ? 'bg-[#EA580C] text-white font-bold shadow-xs'
                      : 'bg-white text-[#6B7280] border border-gray-200 hover:bg-[#FFF7ED]'
                  }`}
                >
                  TYPE A — EAST
                </button>
                <button
                  onClick={() => setVillaType('west')}
                  className={`px-3 py-1 text-[10.5px] font-mono uppercase tracking-wider rounded-xs transition-all cursor-pointer ${
                    villaType === 'west'
                      ? 'bg-[#EA580C] text-white font-bold shadow-xs'
                      : 'bg-white text-[#6B7280] border border-gray-200 hover:bg-[#FFF7ED]'
                  }`}
                >
                  TYPE A — WEST
                </button>
              </div>

              {/* Level Inspector */}
              <div className="flex items-center space-x-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B7280]">
                  LEVEL:
                </span>
                {[
                  { id: 'all', label: 'ALL' },
                  { id: 'ground', label: 'GROUND' },
                  { id: 'first', label: 'UPPER' },
                  { id: 'terrace', label: 'TERRACE' },
                ].map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => setActiveFloor(lvl.id)}
                    className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-xs transition-all cursor-pointer ${
                      activeFloor === lvl.id
                        ? 'bg-[#EA580C] text-white font-semibold shadow-xs'
                        : 'bg-white border border-gray-200 text-[#6B7280] hover:text-[#111827]'
                    }`}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>

            </div>

            {/* 3D Cutaway Viewport (Height Calibrated for Viewport) */}
            <div className="h-[310px] sm:h-[350px] lg:h-[380px] rounded-sm overflow-hidden border border-gray-200 bg-white shadow-luxury relative">
              <VillaCutaway3D activeFloor={activeFloor} villaType={villaType} />

              <div className="absolute bottom-3 left-3 pointer-events-none bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xs border border-gray-200 text-[9.5px] font-mono text-[#6B7280] flex items-center space-x-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
                <span>360° INTERACTIVE · DRAG TO ROTATE</span>
              </div>
            </div>

          </div>

          {/* Right Column: Key Specifications Card (~35%) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-sm shadow-luxury">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#EA580C] mb-0.5 font-semibold">
                ARCHITECTURAL SPECIFICATIONS
              </div>
              <h3 className="text-[17px] font-semibold text-[#111827] mb-3">
                Villa Type A ({villaType.toUpperCase()})
              </h3>

              <div className="space-y-2">
                {currentSpecs.map((spec, i) => (
                  <div key={i} className="flex items-center justify-between pb-1.5 border-b border-gray-100 last:border-b-0">
                    <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#6B7280]">{spec.label}</span>
                    <span className="text-[12.5px] font-sans font-semibold text-[#111827]">{spec.val}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onSelectVilla}
                className="w-full mt-4 py-2.5 bg-[#EA580C] hover:bg-[#C2410C] text-white text-[11px] font-bold uppercase tracking-[0.16em] rounded-xs shadow-md transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>REQUEST FLOORPLAN PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

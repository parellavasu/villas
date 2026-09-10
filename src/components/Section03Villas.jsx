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
      className="relative bg-[#FFFFFF] text-[#141917] py-14 sm:py-16 border-t border-[#EBE7DF] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* =========================================================
            SECTION HEADER
            ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-[#EBE7DF]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2.5 mb-2">
              <span className="w-5 h-[1.5px] bg-[#B89047]" />
              <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-[#B89047] uppercase">
                04 / THE VILLAS
              </span>
            </div>
            <h2 className="font-sans font-semibold text-[30px] sm:text-[36px] lg:text-[38px] tracking-tight text-[#141917] leading-tight">
              INDEPENDENT VILLAS. THOUGHTFULLY DESIGNED.
            </h2>
          </div>

          <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#5A6862] max-w-md mt-3 md:mt-0 font-normal">
            Split-level independent residences engineered with double-height foyers, private landscaped gardens, executive home workspaces, and open-air rooftop lounges.
          </p>
        </div>

        {/* =========================================================
            INTERACTIVE 3D ARCHITECTURAL MODEL & SPECIFICATIONS
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3D Model Explorer (~65%) */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Top Controls: Typology + Floor Level Switchers */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-white border border-[#EBE7DF] rounded-xs mb-4 shadow-subtle">
              
              {/* Typology Switcher */}
              <div className="flex items-center space-x-2">
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#5A6862]">
                  TYPOLOGY:
                </span>
                <button
                  onClick={() => setVillaType('east')}
                  className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded-xs transition-all ${
                    villaType === 'east'
                      ? 'bg-[#B89047] text-white font-semibold'
                      : 'bg-[#F1EFEA] text-[#1D2421] hover:bg-[#E7E4DD]'
                  }`}
                >
                  TYPE A — EAST
                </button>
                <button
                  onClick={() => setVillaType('west')}
                  className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded-xs transition-all ${
                    villaType === 'west'
                      ? 'bg-[#B89047] text-white font-semibold'
                      : 'bg-[#F1EFEA] text-[#1D2421] hover:bg-[#E7E4DD]'
                  }`}
                >
                  TYPE A — WEST
                </button>
              </div>

              {/* Level Inspector */}
              <div className="flex items-center space-x-1.5">
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#5A6862]">
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
                    className={`px-2.5 py-1 text-[10.5px] font-mono uppercase tracking-wider rounded-xs transition-all ${
                      activeFloor === lvl.id
                        ? 'bg-[#1D2421] text-white font-semibold'
                        : 'bg-[#F1EFEA] text-[#5A6862] hover:text-[#1D2421]'
                    }`}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>

            </div>

            {/* 3D Cutaway Viewport */}
            <div className="h-[440px] sm:h-[500px] lg:h-[540px] rounded-xs overflow-hidden border border-[#EBE7DF] bg-[#E7E4DD]/50 shadow-luxury relative">
              <VillaCutaway3D activeFloor={activeFloor} villaType={villaType} />

              <div className="absolute bottom-4 left-4 pointer-events-none bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xs border border-[#C5A880]/30 text-[10.5px] font-mono text-[#5A6862] flex items-center space-x-2 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89047] animate-pulse" />
                <span>AUTO-ROTATING 360° · DRAG TO EXPLORE</span>
              </div>
            </div>

          </div>

          {/* Right Column: Key Specifications Card (~35%) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="p-6 bg-white border border-[#EBE7DF] rounded-xs shadow-subtle">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#B8A58A] mb-1">
                ARCHITECTURAL SPECIFICATIONS
              </div>
              <h3 className="text-[20px] font-semibold text-[#1D2421] mb-5">
                Villa Type A ({villaType.toUpperCase()})
              </h3>

              <div className="space-y-4">
                {currentSpecs.map((spec, i) => (
                  <div key={i} className="flex flex-col pb-3 border-b border-[#F1EFEA] last:border-b-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C9A93]">{spec.label}</span>
                    <span className="text-[14px] font-sans font-semibold text-[#1D2421] mt-0.5">{spec.val}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onSelectVilla}
                className="w-full mt-6 py-3 bg-[#B89047] text-white text-[11.5px] font-semibold uppercase tracking-[0.2em] rounded-xs hover:bg-[#967433] transition-colors flex items-center justify-center space-x-2"
              >
                <span>REQUEST FLOORPLAN PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

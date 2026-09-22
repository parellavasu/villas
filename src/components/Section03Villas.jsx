import React, { useState } from 'react';
import VillaCutaway3D from '../three/VillaCutaway3D';
import { ArrowUpRight } from 'lucide-react';

export default function Section03Villas({ onSelectVilla }) {
  const [villaType, setVillaType] = useState('east'); // 'east' | 'west'
  const [activeFloor, setActiveFloor] = useState('all'); // 'all' | 'ground' | 'first' | 'terrace'

  // Documented Villa Specifications
  const specsEast = [
    { label: 'Configuration', val: '3 & 4 BHK Split-Level' },
    { label: 'Built-Up Area', val: '2,262 – 3,000 Sq.Ft' },
    { label: 'Orientation', val: 'East-Facing Vastu Entrance' },
    { label: 'Private Garden', val: '180–450 Sq.Ft Rear Courtyard' },
    { label: 'Parking', val: '2 Covered Car Parks' },
    { label: 'Structure', val: 'Earthquake-Resistant RCC' },
  ];

  const specsWest = [
    { label: 'Configuration', val: '3 & 4 BHK Split-Level' },
    { label: 'Built-Up Area', val: '2,262 – 3,000 Sq.Ft' },
    { label: 'Orientation', val: 'West-Facing Vastu Entrance' },
    { label: 'Private Garden', val: '180–450 Sq.Ft Rear Courtyard' },
    { label: 'Parking', val: '2 Covered Car Parks' },
    { label: 'Structure', val: 'Earthquake-Resistant RCC' },
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
              <span className="font-mono text-[10.5px] font-semibold tracking-[0.25em] text-[#EA580C]">
                06 / The Villas
              </span>
            </div>
            <h2 className="font-display font-semibold text-[20px] sm:text-[26px] lg:text-[32px] tracking-display text-[#111827] leading-tight">
              Independent Villas. Thoughtfully Designed.
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
            <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 bg-white border border-gray-200 rounded-[14px] mb-2.5 shadow-xs">
              
              {/* Typology Switcher */}
              <div className="flex items-center space-x-1.5">
                <span className="text-[10px] font-mono tracking-wider text-[#6B7280]">
                  Typology:
                </span>
                <button
                  onClick={() => setVillaType('east')}
                  className={`px-3.5 py-1 text-[10.5px] font-mono tracking-wider rounded-full transition-all cursor-pointer ${
                    villaType === 'east'
                      ? 'bg-[#EA580C] text-white font-bold shadow-xs'
                      : 'bg-white text-[#6B7280] border border-gray-200 hover:bg-[#FFF7ED]'
                  }`}
                >
                  Type A — East
                </button>
                <button
                  onClick={() => setVillaType('west')}
                  className={`px-3.5 py-1 text-[10.5px] font-mono tracking-wider rounded-full transition-all cursor-pointer ${
                    villaType === 'west'
                      ? 'bg-[#EA580C] text-white font-bold shadow-xs'
                      : 'bg-white text-[#6B7280] border border-gray-200 hover:bg-[#FFF7ED]'
                  }`}
                >
                  Type A — West
                </button>
              </div>

              {/* Level Inspector */}
              <div className="flex items-center space-x-1">
                <span className="text-[10px] font-mono tracking-wider text-[#6B7280]">
                  Level:
                </span>
                {[
                  { id: 'all', label: 'All' },
                  { id: 'ground', label: 'Ground' },
                  { id: 'first', label: 'Upper' },
                  { id: 'terrace', label: 'Terrace' },
                ].map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => setActiveFloor(lvl.id)}
                    className={`px-2.5 py-0.5 text-[10px] font-mono tracking-wider rounded-full transition-all cursor-pointer ${
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
            <div className="h-[310px] sm:h-[350px] lg:h-[380px] rounded-[14px] overflow-hidden border border-gray-200 bg-white shadow-luxury relative">
              <VillaCutaway3D activeFloor={activeFloor} villaType={villaType} />

              <div className="absolute bottom-3 left-3 pointer-events-none bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-gray-200 text-[9.5px] font-mono text-[#6B7280] flex items-center space-x-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
                <span>360° Interactive · Drag To Rotate</span>
              </div>
            </div>

          </div>

          {/* Right Column: Key Specifications Card (~35%) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="p-4 sm:p-5 bg-white border border-gray-200 rounded-[14px] shadow-luxury">
              <div className="text-[10px] font-mono tracking-widest text-[#EA580C] mb-0.5 font-semibold">
                Architectural Specifications
              </div>
              <h3 className="text-[17px] font-semibold text-[#111827] mb-3">
                Villa Type A ({villaType === 'east' ? 'East' : 'West'})
              </h3>

              <div className="space-y-2">
                {currentSpecs.map((spec, i) => (
                  <div key={i} className="flex items-center justify-between pb-1.5 border-b border-gray-100 last:border-b-0">
                    <span className="text-[9.5px] font-mono tracking-wider text-[#6B7280]">{spec.label}</span>
                    <span className="text-[12.5px] font-sans font-semibold text-[#111827]">{spec.val}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onSelectVilla}
                className="w-full mt-4 py-2.5 bg-[#EA580C] hover:bg-[#C2410C] text-white text-[11px] font-bold tracking-[0.16em] rounded-full shadow-md transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>Request Floorplan PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

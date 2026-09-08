import React, { useState } from 'react';
import VillaCutaway3D from '../three/VillaCutaway3D';
import { villaSpecifications } from '../data/projectData';
import { Layers, Compass, Box, Home, Maximize2, ShieldAlert } from 'lucide-react';

export default function VillaArchitecture() {
  const [villaType, setVillaType] = useState('east'); // 'east' or 'west'
  const [activeFloor, setActiveFloor] = useState('all'); // 'all', 'ground', 'first', 'second'
  const [isExploded, setIsExploded] = useState(false);
  const [stage, setStage] = useState(8);

  const currentSpec = villaSpecifications.types[villaType];

  return (
    <section id="villas" className="relative py-28 px-6 md:px-12 bg-charcoal-950 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-bronze-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 bg-bronze-400 rounded-full"></span>
              <span>CHAPTER 05 // RESIDENTIAL CRAFTSMANSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-semibold tracking-wider text-ivory-100 uppercase">
              {villaSpecifications.title}
            </h2>
            <p className="mt-3 text-sm md:text-base font-editorial italic text-stone-300 max-w-xl">
              "{villaSpecifications.subtitle}"
            </p>
          </div>

          {/* Type A East vs Type A West Toggle */}
          <div className="mt-6 lg:mt-0 flex items-center p-1.5 rounded-full border border-white/15 bg-charcoal-900/90 shadow-xl">
            <button
              onClick={() => setVillaType('east')}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                villaType === 'east'
                  ? "bg-bronze-500 text-charcoal-950 font-bold shadow-glow-bronze"
                  : "text-stone-400 hover:text-ivory-100"
              }`}
            >
              TYPE A — EAST (1,200 SQ.FT)
            </button>
            <button
              onClick={() => setVillaType('west')}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                villaType === 'west'
                  ? "bg-bronze-500 text-charcoal-950 font-bold shadow-glow-bronze"
                  : "text-stone-400 hover:text-ivory-100"
              }`}
            >
              TYPE A — WEST (1,200 SQ.FT)
            </button>
          </div>
        </div>

        {/* Specification Metrics Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-xl border border-bronze-500/30 bg-charcoal-900/60 mb-8 backdrop-blur-md">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase">
              PLOT LAND AREA
            </span>
            <div className="text-xl sm:text-2xl font-cinzel font-bold text-ivory-100 mt-0.5">
              {currentSpec.landArea}
            </div>
            <span className="text-[10px] font-mono text-bronze-400">30' 0" × 40' 0" FOOTPRINT</span>
          </div>

          <div>
            <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase">
              BUILT-UP AREA (BUA)
            </span>
            <div className="text-xl sm:text-2xl font-cinzel font-bold text-ivory-100 mt-0.5">
              {currentSpec.bua}
            </div>
            <span className="text-[10px] font-mono text-emerald-400">TRIPLE LEVEL (G+2)</span>
          </div>

          <div>
            <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase">
              RERA CARPET AREA
            </span>
            <div className="text-xl sm:text-2xl font-cinzel font-bold text-ivory-100 mt-0.5">
              {currentSpec.carpetArea}
            </div>
            <span className="text-[10px] font-mono text-stone-400">NET USABLE LIVING</span>
          </div>

          <div>
            <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase">
              PRIVATE BACKYARD
            </span>
            <div className="text-xl sm:text-2xl font-cinzel font-bold text-bronze-400 mt-0.5">
              {currentSpec.backyard}
            </div>
            <span className="text-[10px] font-mono text-stone-400">OPEN-SKY COURTYARD</span>
          </div>
        </div>

        {/* 3D Model Explorer Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          {/* Floor Selection */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-stone-400 mr-2">LEVEL:</span>
            {[
              { id: 'all', label: 'All Levels' },
              { id: 'ground', label: 'Ground Floor' },
              { id: 'first', label: 'First Floor' },
              { id: 'second', label: 'Second Floor (Terrace)' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  setActiveFloor(f.id);
                  setIsExploded(false);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  activeFloor === f.id && !isExploded
                    ? "bg-forest-800 border border-emerald-500/60 text-ivory-100 font-bold"
                    : "bg-charcoal-900 text-stone-400 border border-white/10 hover:border-white/25"
                }`}
              >
                {f.label}
              </button>
            ))}

            {/* Exploded Cutaway Mode Button */}
            <button
              onClick={() => {
                setIsExploded(!isExploded);
                setActiveFloor('all');
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider flex items-center space-x-2 transition-all ${
                isExploded
                  ? "bg-bronze-500 text-charcoal-950 font-bold shadow-glow-bronze"
                  : "bg-charcoal-900 border border-bronze-500/40 text-bronze-400 hover:bg-bronze-500/10"
              }`}
            >
              <Maximize2 size={13} />
              <span>{isExploded ? "COLLAPSE MODEL" : "EXPLODED AXONOMETRIC"}</span>
            </button>
          </div>

          {/* Construction Stage Timeline Slider */}
          <div className="flex items-center space-x-2 text-xs font-mono text-stone-400">
            <span>CONSTRUCTION PROGRESS:</span>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
              <button
                key={s}
                onClick={() => setStage(s)}
                title={villaSpecifications.constructionStages[s - 1].name}
                className={`w-6 h-6 rounded text-[11px] font-mono transition-all ${
                  stage >= s
                    ? "bg-bronze-600 text-ivory-100 font-bold"
                    : "bg-charcoal-900 border border-white/10 text-stone-500"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Villa Interactive Viewer */}
        <div className="mb-12">
          <VillaCutaway3D
            activeFloor={activeFloor}
            isExploded={isExploded}
            villaType={villaType}
            stage={stage}
          />
        </div>

        {/* Construction Stage Status Banner */}
        <div className="p-4 rounded-xl border border-white/10 bg-charcoal-900/80 mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-8 rounded-lg bg-bronze-500/20 border border-bronze-500/40 flex items-center justify-center font-mono text-xs text-bronze-400 font-bold">
              0{stage}
            </span>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-bronze-400 uppercase">
                ACTIVE CONSTRUCTION STAGE
              </span>
              <h4 className="text-base font-cinzel text-ivory-100 uppercase">
                {villaSpecifications.constructionStages[stage - 1].name}
              </h4>
            </div>
          </div>
          <p className="text-xs text-stone-400 max-w-lg">
            {villaSpecifications.constructionStages[stage - 1].desc}
          </p>
        </div>

        {/* Floor-by-Floor Spatial Breakdown Schedule */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentSpec.floors.map((fl, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-white/10 bg-charcoal-900/60 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-bronze-400 uppercase">
                      LEVEL 0{idx}
                    </span>
                    <h4 className="text-lg font-cinzel text-ivory-100 uppercase font-semibold">
                      {fl.floor}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-stone-300 font-bold">
                    {fl.area}
                  </span>
                </div>

                <div className="space-y-2">
                  {fl.rooms.map((room, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-center justify-between text-xs py-1 border-b border-white/5"
                    >
                      <span className="text-stone-300">{room.name}</span>
                      <span className="font-mono text-stone-400">{room.size}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-[10px] font-mono text-stone-400 flex items-center justify-between">
                <span>ORIENTATION: {currentSpec.facing}</span>
                <span className="text-emerald-400 font-semibold">VAASTU OPTIMIZED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

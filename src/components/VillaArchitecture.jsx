import React, { useState } from 'react';
import VillaCutaway3D from '../three/VillaCutaway3D';
import { villaSpecifications } from '../data/projectData';
import { Maximize2 } from 'lucide-react';

export default function VillaArchitecture() {
  const [villaType, setVillaType] = useState('east'); // 'east' or 'west'
  const [activeFloor, setActiveFloor] = useState('all'); // 'all', 'ground', 'first', 'second'
  const [isExploded, setIsExploded] = useState(false);
  const [stage, setStage] = useState(8);

  const currentSpec = villaSpecifications.types[villaType];

  return (
    <section id="villas" className="relative py-28 px-6 md:px-12 bg-white border-t border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-cobalt-600 uppercase mb-3 font-bold">
              <span>06 / THE VILLAS</span>
              <div className="w-10 h-[1.5px] bg-cobalt-600"></div>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-navy-900 uppercase">
              DESIGNED AROUND <span className="text-cobalt-600">THE WAY YOU LIVE.</span>
            </h2>
            <p className="mt-3 text-sm md:text-base font-editorial italic text-slate-600 max-w-xl">
              "{villaSpecifications.subtitle}"
            </p>
          </div>

          {/* Type A East vs Type A West Toggle */}
          <div className="mt-6 lg:mt-0 flex items-center p-1.5 rounded-full border border-sky-200 bg-sky-50/60 shadow-sm">
            <button
              onClick={() => setVillaType('east')}
              className={`px-5 py-2 rounded-full text-xs font-sans uppercase tracking-wider transition-all ${
                villaType === 'east'
                  ? "bg-navy-900 text-white font-bold shadow-sm"
                  : "text-slate-600 hover:text-navy-900 font-semibold"
              }`}
            >
              TYPE A — EAST (1,200 SQ.FT)
            </button>
            <button
              onClick={() => setVillaType('west')}
              className={`px-5 py-2 rounded-full text-xs font-sans uppercase tracking-wider transition-all ${
                villaType === 'west'
                  ? "bg-navy-900 text-white font-bold shadow-sm"
                  : "text-slate-600 hover:text-navy-900 font-semibold"
              }`}
            >
              TYPE A — WEST (1,200 SQ.FT)
            </button>
          </div>
        </div>

        {/* Specification Metrics Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl border border-sky-100 bg-sky-50/40 mb-8 shadow-sm">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
              PLOT LAND AREA
            </span>
            <div className="text-xl sm:text-2xl font-sans font-extrabold text-navy-900 mt-0.5">
              {currentSpec.landArea}
            </div>
            <span className="text-[10px] font-mono text-cobalt-600 font-semibold">30' 0" × 40' 0" FOOTPRINT</span>
          </div>

          <div>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
              BUILT-UP AREA (BUA)
            </span>
            <div className="text-xl sm:text-2xl font-sans font-extrabold text-navy-900 mt-0.5">
              {currentSpec.bua}
            </div>
            <span className="text-[10px] font-mono text-emerald-700 font-semibold">TRIPLE LEVEL (G+2)</span>
          </div>

          <div>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
              RERA CARPET AREA
            </span>
            <div className="text-xl sm:text-2xl font-sans font-extrabold text-navy-900 mt-0.5">
              {currentSpec.carpetArea}
            </div>
            <span className="text-[10px] font-mono text-slate-500 font-semibold">NET USABLE LIVING</span>
          </div>

          <div>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
              PRIVATE BACKYARD
            </span>
            <div className="text-xl sm:text-2xl font-sans font-extrabold text-cobalt-600 mt-0.5">
              {currentSpec.backyard}
            </div>
            <span className="text-[10px] font-mono text-slate-500 font-semibold">OPEN-SKY COURTYARD</span>
          </div>
        </div>

        {/* 3D Model Explorer Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          {/* Floor Selection */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-sans text-slate-500 mr-2 font-bold uppercase tracking-wider">LEVEL:</span>
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
                className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wider transition-all ${
                  activeFloor === f.id && !isExploded
                    ? "bg-cobalt-600 text-white font-bold shadow-sm"
                    : "bg-white text-slate-600 border border-sky-200 hover:border-cobalt-400 font-semibold"
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
              className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wider flex items-center space-x-2 transition-all ${
                isExploded
                  ? "bg-navy-900 text-white font-bold shadow-sm"
                  : "bg-white border border-cobalt-600/40 text-cobalt-600 hover:bg-sky-50 font-semibold"
              }`}
            >
              <Maximize2 size={13} />
              <span>{isExploded ? "COLLAPSE MODEL" : "EXPLODED AXONOMETRIC"}</span>
            </button>
          </div>

          {/* Construction Stage Timeline Slider */}
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 font-medium">
            <span>CONSTRUCTION:</span>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
              <button
                key={s}
                onClick={() => setStage(s)}
                title={villaSpecifications.constructionStages[s - 1].name}
                className={`w-7 h-7 rounded text-[11px] font-mono transition-all ${
                  stage >= s
                    ? "bg-cobalt-600 text-white font-bold"
                    : "bg-white border border-slate-200 text-slate-400 hover:border-slate-300"
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
        <div className="p-5 rounded-2xl border border-sky-100 bg-sky-50/50 mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center space-x-3">
            <span className="w-9 h-9 rounded-lg bg-cobalt-600 text-white flex items-center justify-center font-mono text-xs font-bold">
              0{stage}
            </span>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-cobalt-600 uppercase font-bold">
                ACTIVE CONSTRUCTION STAGE
              </span>
              <h4 className="text-base font-sans text-navy-900 uppercase font-bold">
                {villaSpecifications.constructionStages[stage - 1].name}
              </h4>
            </div>
          </div>
          <p className="text-xs text-slate-600 max-w-lg leading-relaxed font-normal">
            {villaSpecifications.constructionStages[stage - 1].desc}
          </p>
        </div>

        {/* Floor-by-Floor Spatial Breakdown Schedule */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentSpec.floors.map((fl, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-sky-100 bg-white shadow-arch-card flex flex-col justify-between hover:border-cobalt-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-cobalt-600 uppercase font-bold">
                      LEVEL 0{idx}
                    </span>
                    <h4 className="text-lg font-sans text-navy-900 uppercase font-extrabold">
                      {fl.floor}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-navy-900 font-bold bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
                    {fl.area}
                  </span>
                </div>

                <div className="space-y-2">
                  {fl.rooms.map((room, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-center justify-between text-xs py-1 border-b border-slate-50"
                    >
                      <span className="text-slate-700 font-medium">{room.name}</span>
                      <span className="font-mono text-slate-400 font-medium">{room.size}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                <span>ORIENTATION: {currentSpec.facing}</span>
                <span className="text-emerald-700 font-semibold">VAASTU OPTIMIZED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

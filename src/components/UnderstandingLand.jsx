import React from 'react';
import TopoTerrainMesh from '../three/TopoTerrainMesh';
import { surveyData } from '../data/projectData';
import { Scan, Radio, Mountain, Compass } from 'lucide-react';

export default function UnderstandingLand() {
  return (
    <section id="survey" className="relative py-28 px-6 md:px-12 bg-charcoal-950 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-bronze-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 bg-bronze-400 rounded-full"></span>
              <span>CHAPTER 01 // GEODETIC DISCOVERY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-semibold tracking-wider text-ivory-100 uppercase">
              {surveyData.title}
            </h2>
            <p className="mt-3 text-sm md:text-base font-editorial italic text-stone-300">
              "{surveyData.subtitle}"
            </p>
          </div>
          <p className="mt-4 lg:mt-0 text-xs sm:text-sm font-light text-stone-400 max-w-lg leading-relaxed">
            {surveyData.description}
          </p>
        </div>

        {/* 3D Topographic Interactive LIDAR Scanner */}
        <div className="mb-12">
          <TopoTerrainMesh />
        </div>

        {/* Survey Data Matrix & Four Diagnostic Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {surveyData.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-white/10 bg-charcoal-900/60 backdrop-blur-md relative group hover:border-bronze-500/40 transition-all shadow-lg"
            >
              <div className="text-[10px] font-mono tracking-widest text-bronze-400 uppercase mb-3 flex items-center justify-between">
                <span>PHASE 0{idx + 1}</span>
                <span className="text-stone-400">SURVEY STAGE</span>
              </div>
              <h3 className="text-base font-cinzel text-ivory-100 uppercase font-semibold mb-2 group-hover:text-bronze-300 transition-colors">
                {step.title}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Elevation Metrics Footbar */}
        <div className="mt-8 p-6 rounded-xl border border-white/5 bg-charcoal-900/40 flex flex-wrap items-center justify-around gap-6 text-center">
          {surveyData.metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase">
                {m.label}
              </span>
              <span className="text-lg font-cinzel text-ivory-100 font-bold mt-1">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

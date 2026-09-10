import React from 'react';
import TopoTerrainMesh from '../three/TopoTerrainMesh';
import { surveyData } from '../data/projectData';

export default function UnderstandingLand() {
  return (
    <section id="survey" className="relative py-28 px-6 md:px-12 bg-gradient-to-r from-white via-[#F6FAFD] via-45% to-[#0A2540]/[0.06] border-t border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-cobalt-600 uppercase mb-3 font-bold">
              <span>02 / THE JOURNEY</span>
              <div className="w-10 h-[1.5px] bg-cobalt-600"></div>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-navy-900 uppercase">
              UNDERSTANDING <span className="text-cobalt-600">THE LAND.</span>
            </h2>
            <p className="mt-3 text-sm md:text-base font-editorial italic text-slate-600">
              "{surveyData.subtitle}"
            </p>
          </div>
          <p className="mt-4 lg:mt-0 text-xs sm:text-sm font-sans text-slate-600 max-w-lg leading-relaxed font-normal">
            {surveyData.description}
          </p>
        </div>

        {/* 3D Topographic Interactive LIDAR Scanner */}
        <div className="mb-12">
          <TopoTerrainMesh />
        </div>

        {/* Survey Data Matrix & Diagnostic Steps — Clean White Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {surveyData.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-sky-100 bg-white/90 backdrop-blur-md relative group hover:border-cobalt-400 hover:shadow-arch-hover transition-all shadow-arch-card"
            >
              <div className="text-[10px] font-mono tracking-widest text-cobalt-600 uppercase mb-3 flex items-center justify-between font-bold">
                <span>PHASE 0{idx + 1}</span>
                <span className="text-slate-400">SURVEY STAGE</span>
              </div>
              <h3 className="text-base font-sans text-navy-900 uppercase font-bold mb-2 group-hover:text-cobalt-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Elevation Metrics Footbar — Soft Ice Blue Container */}
        <div className="mt-8 p-6 rounded-2xl border border-sky-100 bg-sky-50/50 flex flex-wrap items-center justify-around gap-6 text-center">
          {surveyData.metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-semibold">
                {m.label}
              </span>
              <span className="text-xl font-sans text-navy-900 font-extrabold mt-1">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

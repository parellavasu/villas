import React from 'react';
import { mindfulnessFeatures } from '../data/projectData';
import { Leaf, Wind, Sun } from 'lucide-react';

export default function GreenMindfulness() {
  return (
    <section id="mindfulness" className="relative py-32 px-6 md:px-12 bg-arch-100 border-t border-sky-100 overflow-hidden">
      {/* Soft Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-100/40 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-3 text-xs font-mono tracking-widest text-cobalt-600 uppercase mb-3 font-bold">
            <span>11 / BIOPHILIC RESTORATION</span>
            <div className="w-10 h-[1.5px] bg-cobalt-600"></div>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight text-navy-900 uppercase">
            SPACE TO <span className="text-cobalt-600">SLOW DOWN.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base font-editorial italic text-slate-600">
            "In an accelerated world, tranquility is the ultimate architectural luxury."
          </p>

          {/* Architectural Tranquility Badge */}
          <div className="mt-8 inline-flex items-center space-x-3 px-5 py-2.5 rounded-full border border-sky-200 bg-white/95 shadow-sm text-xs font-sans text-slate-700 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="tracking-wide uppercase text-[11px] font-mono text-slate-600">
              10 DEDICATED QUIET SANCTUARIES // NATURAL BIOPHILIC RETREATS
            </span>
          </div>
        </div>

        {/* 10 Mindfulness Elements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {mindfulnessFeatures.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-sky-100 bg-white relative group hover:border-cobalt-400 hover:shadow-arch-hover transition-all duration-500 flex flex-col justify-between shadow-arch-card"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-3 font-semibold">
                  <span>ZONE 0{idx + 1}</span>
                  <span className="text-cobalt-600 font-bold">SERENE</span>
                </div>
                <h4 className="text-base font-sans text-navy-900 uppercase font-bold mb-2 group-hover:text-cobalt-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-[9px] font-mono text-slate-400 uppercase font-medium">
                // PASSIVE REJUVENATION
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

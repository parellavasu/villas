import React, { useState } from 'react';
import { livingExperiences } from '../data/projectData';

export default function LivingExperience() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeExp = livingExperiences[activeIdx];

  const visualAtmospheres = [
    {
      bg: "from-white via-sky-50/40 to-white",
      tag: "VOLUMETRIC HEIGHTS & SPAN"
    },
    {
      bg: "from-white via-amber-50/30 to-white",
      tag: "SOLAR ORIENTATION & LOW-E GLAZING"
    },
    {
      bg: "from-white via-emerald-50/30 to-white",
      tag: "180 SQ.FT PRIVATE BIOPHILIC BACKYARD"
    },
    {
      bg: "from-white via-blue-50/40 to-white",
      tag: "FAMILY MEZZANINE & SKYLINE TERRACES"
    },
    {
      bg: "from-white via-slate-50 to-white",
      tag: "SECLUDED MASTER SUITE & HOME STUDIO"
    }
  ];

  return (
    <section id="living" className="relative py-28 px-6 md:px-12 bg-arch-100 border-t border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-3 text-xs font-mono tracking-widest text-cobalt-600 uppercase mb-3 font-bold">
            <span>07 / LIFESTYLE PHILOSOPHY</span>
            <div className="w-10 h-[1.5px] bg-cobalt-600"></div>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight text-navy-900 uppercase">
            LIVING IS...
          </h2>
          <p className="mt-4 text-sm sm:text-base font-editorial italic text-slate-600">
            "A home should not simply contain life; it should elevate every hour of the day."
          </p>
        </div>

        {/* Five Storytelling Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {livingExperiences.map((exp, idx) => (
            <button
              key={exp.theme}
              onClick={() => setActiveIdx(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans uppercase tracking-widest font-bold transition-all duration-300 ${
                activeIdx === idx
                  ? "bg-navy-900 text-white shadow-md scale-105"
                  : "bg-white hover:bg-sky-50 text-slate-600 border border-sky-200"
              }`}
            >
              LIVING IS... {exp.theme}
            </button>
          ))}
        </div>

        {/* Main Editorial Hero Showcase */}
        <div
          className={`p-8 md:p-14 rounded-3xl border border-sky-200 bg-gradient-to-br ${visualAtmospheres[activeIdx].bg} relative overflow-hidden shadow-arch-card transition-all duration-700`}
        >
          {/* Subtle Blueprint Grid Accent */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Narrative Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono tracking-widest text-cobalt-600 uppercase font-bold">
                // {visualAtmospheres[activeIdx].tag}
              </span>

              <h3 className="text-3xl sm:text-5xl font-sans text-navy-900 uppercase font-extrabold leading-tight">
                {activeExp.headline}
              </h3>

              <p className="text-base sm:text-lg text-slate-600 font-sans font-normal leading-relaxed">
                {activeExp.narrative}
              </p>

              {/* Architectural Feature Specs */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeExp.specs.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-sans text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Architectural Visual Composition Frame */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl border border-sky-200 bg-white/95 overflow-hidden flex flex-col justify-between p-6 shadow-arch-card">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 font-semibold">
                <span>SCENE 0{activeIdx + 1} // 05</span>
                <span className="text-cobalt-600 font-bold">{activeExp.theme}</span>
              </div>

              {/* Graphical Editorial Motif */}
              <div className="my-auto text-center py-6">
                <div className="w-20 h-20 mx-auto rounded-2xl border border-sky-200 bg-sky-50 flex items-center justify-center text-cobalt-600 mb-4 shadow-sm">
                  <span className="font-sans text-2xl font-extrabold">0{activeIdx + 1}</span>
                </div>
                <p className="font-sans text-lg text-navy-900 uppercase tracking-widest font-extrabold">
                  ANTELIA RESIDENCES
                </p>
                <p className="text-xs font-sans text-slate-500 mt-1 font-medium">
                  189 PRIVATELY CRAFTED HOMES
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>VILLA TYPE A // EAST & WEST</span>
                <span className="text-cobalt-600 font-semibold">DAYLIGHT LIT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

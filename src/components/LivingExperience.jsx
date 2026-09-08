import React, { useState } from 'react';
import { livingExperiences } from '../data/projectData';
import { ArrowRight, Sparkles, Sun, Eye, TreePine, Users, HeartHandshake } from 'lucide-react';

export default function LivingExperience() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeExp = livingExperiences[activeIdx];

  // Visual gradients and themes representing each living chapter
  const visualAtmospheres = [
    {
      bg: "from-stone-900/60 via-charcoal-950 to-charcoal-950",
      accent: "text-amber-300",
      tag: "VOLUMETRIC HEIGHTS & SPAN"
    },
    {
      bg: "from-amber-950/40 via-charcoal-950 to-charcoal-950",
      accent: "text-amber-200",
      tag: "SOLAR ORIENTATION & LOW-E GLAZING"
    },
    {
      bg: "from-forest-950/60 via-charcoal-950 to-charcoal-950",
      accent: "text-emerald-400",
      tag: "180 SQ.FT PRIVATE BIOPHILIC BACKYARD"
    },
    {
      bg: "from-stone-900/50 via-charcoal-950 to-charcoal-950",
      accent: "text-bronze-300",
      tag: "FAMILY MEZZANINE & SKYLINE TERRACES"
    },
    {
      bg: "from-charcoal-900 via-charcoal-950 to-charcoal-950",
      accent: "text-stone-200",
      tag: "SECLUDED MASTER SUITE & HOME STUDIO"
    }
  ];

  return (
    <section id="living" className="relative py-28 px-6 md:px-12 bg-charcoal-900 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-bronze-400 uppercase mb-3">
            <Sparkles size={14} />
            <span>CHAPTER 06 // PHILOSOPHY OF DWELLING</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-cinzel font-semibold tracking-wider text-ivory-100 uppercase">
            LIVING IS...
          </h2>
          <p className="mt-4 text-sm sm:text-base font-editorial italic text-stone-300">
            "A home should not simply contain life; it should elevate every hour of the day."
          </p>
        </div>

        {/* Five Storytelling Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {livingExperiences.map((exp, idx) => (
            <button
              key={exp.theme}
              onClick={() => setActiveIdx(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                activeIdx === idx
                  ? "bg-bronze-500 text-charcoal-950 font-bold shadow-glow-bronze scale-105"
                  : "bg-charcoal-950/80 hover:bg-charcoal-800 text-stone-400 border border-white/10"
              }`}
            >
              LIVING IS... {exp.theme}
            </button>
          ))}
        </div>

        {/* Main Editorial Hero Showcase */}
        <div
          className={`p-8 md:p-14 rounded-3xl border border-bronze-500/30 bg-gradient-to-br ${visualAtmospheres[activeIdx].bg} relative overflow-hidden shadow-2xl transition-all duration-700`}
        >
          {/* Subtle Blueprint Grid Accent */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Narrative Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono tracking-widest text-bronze-400 uppercase">
                // {visualAtmospheres[activeIdx].tag}
              </span>

              <h3 className="text-3xl sm:text-5xl font-cinzel text-ivory-100 uppercase font-semibold leading-tight">
                {activeExp.headline}
              </h3>

              <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
                {activeExp.narrative}
              </p>

              {/* Architectural Feature Specs */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeExp.specs.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-mono text-stone-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze-400"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Architectural Visual Composition Frame */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl border border-white/10 bg-charcoal-950/80 overflow-hidden flex flex-col justify-between p-6 shadow-inner">
              <div className="flex items-center justify-between text-[10px] font-mono text-stone-400">
                <span>SCENE 0{activeIdx + 1} // 05</span>
                <span className="text-bronze-400 font-bold">{activeExp.theme}</span>
              </div>

              {/* Graphical Editorial Motif */}
              <div className="my-auto text-center py-6">
                <div className="w-20 h-20 mx-auto rounded-full border border-bronze-500/30 flex items-center justify-center text-bronze-400 mb-4 bg-bronze-500/10 shadow-glow-bronze">
                  <span className="font-cinzel text-2xl font-bold">0{activeIdx + 1}</span>
                </div>
                <p className="font-cinzel text-lg text-ivory-100 uppercase tracking-widest">
                  ANTELIA RESIDENCES
                </p>
                <p className="text-xs font-mono text-stone-400 mt-1">
                  189 PRIVATELY CRAFTED HOMES
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-stone-400">
                <span>VILLA TYPE A // EAST & WEST</span>
                <span className="text-emerald-400">PBR LIGHTED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

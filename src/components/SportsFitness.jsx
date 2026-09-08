import React, { useState } from 'react';
import { sportsAmenities } from '../data/projectData';
import { Trophy, Activity, Dumbbell, Flame, Check } from 'lucide-react';

export default function SportsFitness() {
  const [activeTab, setActiveTab] = useState('indoor'); // 'indoor' or 'outdoor'

  const currentList = activeTab === 'indoor' ? sportsAmenities.indoor : sportsAmenities.outdoor;

  return (
    <section id="sports" className="relative py-28 px-6 md:px-12 bg-charcoal-950 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-bronze-400 uppercase mb-3">
              <Activity size={14} />
              <span>CHAPTER 09 // ATHLETIC EXCELLENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-semibold tracking-wider text-ivory-100 uppercase">
              ACTIVE LIVING & WELLNESS
            </h2>
            <p className="mt-3 text-sm md:text-base font-editorial italic text-stone-300 max-w-xl">
              "12 distinct indoor and outdoor sports arenas designed to Olympic and tournament standards."
            </p>
          </div>

          {/* Indoor vs Outdoor Arena Switcher */}
          <div className="mt-6 lg:mt-0 flex items-center p-1.5 rounded-full border border-white/15 bg-charcoal-900/90 shadow-xl">
            <button
              onClick={() => setActiveTab('indoor')}
              className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === 'indoor'
                  ? "bg-bronze-500 text-charcoal-950 font-bold shadow-glow-bronze"
                  : "text-stone-400 hover:text-ivory-100"
              }`}
            >
              INDOOR COMPLEX (6 DISCIPLINES)
            </button>
            <button
              onClick={() => setActiveTab('outdoor')}
              className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === 'outdoor'
                  ? "bg-bronze-500 text-charcoal-950 font-bold shadow-glow-bronze"
                  : "text-stone-400 hover:text-ivory-100"
              }`}
            >
              OUTDOOR ARENA (6 DISCIPLINES)
            </button>
          </div>
        </div>

        {/* Dynamic Sports Disciplines Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentList.map((sport, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-white/10 bg-charcoal-900/50 backdrop-blur-md relative group hover:border-bronze-500/50 hover:bg-charcoal-900/80 transition-all duration-300 shadow-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-forest-900/10 rounded-bl-full pointer-events-none group-hover:bg-bronze-500/10 transition-colors"></div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-widest text-bronze-400 uppercase">
                  {activeTab.toUpperCase()} ARENA // 0{idx + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>

              <h3 className="text-xl font-cinzel text-ivory-100 uppercase font-semibold mb-3 group-hover:text-bronze-300 transition-colors">
                {sport.name}
              </h3>

              <p className="text-xs text-stone-400 leading-relaxed">
                {sport.desc}
              </p>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-stone-400">
                <span>COMMUNITY TOURNAMENT SPEC</span>
                <span className="text-bronze-400">AVAILABLE 24/7</span>
              </div>
            </div>
          ))}
        </div>

        {/* 1.2km Continuous Jogging Loop Highlight */}
        <div className="p-8 rounded-2xl border border-bronze-500/30 bg-gradient-to-r from-charcoal-950 via-forest-950/40 to-charcoal-950 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
              CONTINUOUS RUNNING CIRCUIT
            </span>
            <h4 className="text-2xl font-cinzel text-ivory-100 uppercase">
              1.2 Kilometre Tree-Canopied Jogging Loop
            </h4>
            <p className="text-xs text-stone-300 max-w-2xl leading-relaxed">
              Engineered with dual-layer polyurethane shock cushioning, the jogging loop weaves under native mahogany and tabebuia canopies without crossing vehicular vehicular roadways.
            </p>
          </div>
          <div className="shrink-0 flex items-center space-x-4">
            <div className="text-center p-4 rounded-xl bg-charcoal-900 border border-white/10">
              <span className="text-2xl font-cinzel text-ivory-100 font-bold block">1.2 KM</span>
              <span className="text-[10px] font-mono text-stone-400 uppercase">LOOP LENGTH</span>
            </div>
            <div className="text-center p-4 rounded-xl bg-charcoal-900 border border-white/10">
              <span className="text-2xl font-cinzel text-bronze-400 font-bold block">0 VEHICLES</span>
              <span className="text-[10px] font-mono text-stone-400 uppercase">ZERO CONFLICT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

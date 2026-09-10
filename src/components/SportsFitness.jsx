import React, { useState } from 'react';
import { sportsAmenities } from '../data/projectData';
import { Activity } from 'lucide-react';

export default function SportsFitness() {
  const [activeTab, setActiveTab] = useState('indoor');

  const currentList = activeTab === 'indoor' ? sportsAmenities.indoor : sportsAmenities.outdoor;

  return (
    <section id="sports" className="relative py-28 px-6 md:px-12 bg-white border-t border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-cobalt-600 uppercase mb-3 font-bold">
              <span>10 / ACTIVE LIVING</span>
              <div className="w-10 h-[1.5px] bg-cobalt-600"></div>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-navy-900 uppercase">
              ACTIVE LIVING <span className="text-cobalt-600">& WELLNESS.</span>
            </h2>
            <p className="mt-3 text-sm md:text-base font-editorial italic text-slate-600 max-w-xl">
              "12 distinct indoor and outdoor sports arenas designed to tournament standards."
            </p>
          </div>

          {/* Indoor vs Outdoor Arena Switcher */}
          <div className="mt-6 lg:mt-0 flex items-center p-1.5 rounded-full border border-sky-200 bg-sky-50/60 shadow-sm">
            <button
              onClick={() => setActiveTab('indoor')}
              className={`px-6 py-2 rounded-full text-xs font-sans uppercase tracking-wider transition-all ${
                activeTab === 'indoor'
                  ? "bg-navy-900 text-white font-bold shadow-sm"
                  : "text-slate-600 hover:text-navy-900 font-semibold"
              }`}
            >
              INDOOR COMPLEX (6 DISCIPLINES)
            </button>
            <button
              onClick={() => setActiveTab('outdoor')}
              className={`px-6 py-2 rounded-full text-xs font-sans uppercase tracking-wider transition-all ${
                activeTab === 'outdoor'
                  ? "bg-navy-900 text-white font-bold shadow-sm"
                  : "text-slate-600 hover:text-navy-900 font-semibold"
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
              className="p-8 rounded-2xl border border-sky-100 bg-white relative group hover:border-cobalt-400 hover:shadow-arch-hover transition-all duration-300 shadow-arch-card overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-50 rounded-bl-full pointer-events-none group-hover:bg-sky-100/60 transition-colors"></div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-widest text-cobalt-600 uppercase font-bold">
                  {activeTab.toUpperCase()} ARENA // 0{idx + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-cobalt-600"></span>
              </div>

              <h3 className="text-xl font-sans text-navy-900 uppercase font-bold mb-3 group-hover:text-cobalt-600 transition-colors">
                {sport.name}
              </h3>

              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {sport.desc}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>COMMUNITY TOURNAMENT SPEC</span>
                <span className="text-cobalt-600 font-semibold">AVAILABLE 24/7</span>
              </div>
            </div>
          ))}
        </div>

        {/* 1.2km Continuous Jogging Loop Highlight */}
        <div className="p-8 rounded-2xl border border-sky-200 bg-gradient-to-r from-white via-sky-50/50 to-white shadow-arch-card flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-cobalt-600 uppercase font-bold">
              CONTINUOUS RUNNING CIRCUIT
            </span>
            <h4 className="text-2xl font-sans text-navy-900 uppercase font-extrabold">
              1.2 Kilometre Tree-Canopied Jogging Loop
            </h4>
            <p className="text-xs text-slate-600 max-w-2xl leading-relaxed font-normal">
              Engineered with dual-layer polyurethane shock cushioning, the jogging loop weaves under native mahogany and tabebuia canopies without crossing vehicular roadways.
            </p>
          </div>
          <div className="shrink-0 flex items-center space-x-4">
            <div className="text-center p-4 rounded-xl bg-white border border-sky-200 shadow-sm">
              <span className="text-2xl font-sans text-navy-900 font-extrabold block">1.2 KM</span>
              <span className="text-[10px] font-mono text-slate-400 uppercase">LOOP LENGTH</span>
            </div>
            <div className="text-center p-4 rounded-xl bg-white border border-sky-200 shadow-sm">
              <span className="text-2xl font-sans text-cobalt-600 font-extrabold block">0 VEHICLES</span>
              <span className="text-[10px] font-mono text-slate-400 uppercase">ZERO CONFLICT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

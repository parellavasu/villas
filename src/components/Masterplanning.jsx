import React, { useState } from 'react';
import Masterplan3D from '../three/Masterplan3D';
import { masterplanData } from '../data/projectData';
import { Layers, Play, Check, Eye } from 'lucide-react';

export default function Masterplanning() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [step, setStep] = useState(6);

  const filters = [
    { id: 'all', label: 'All Layers (Complete Masterplan)' },
    { id: 'boundary', label: 'Site Boundary (2,780 ft)' },
    { id: 'roads', label: 'Avenues & 40ft/30ft Roads' },
    { id: 'villas', label: '189 Villa Footprints' },
    { id: 'clubhouse', label: '15,000+ Sq.Ft Clubhouse' },
    { id: 'landscape', label: 'Parks & Water Court' },
    { id: 'sports', label: 'Active Sports Arena' }
  ];

  return (
    <section id="masterplan" className="relative py-28 px-6 md:px-12 bg-charcoal-950 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-bronze-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 bg-bronze-400 rounded-full"></span>
              <span>CHAPTER 03 // ARCHITECTURAL BLUEPRINTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-semibold tracking-wider text-ivory-100 uppercase">
              {masterplanData.title}
            </h2>
            <p className="mt-3 text-sm md:text-base font-editorial italic text-stone-300">
              "{masterplanData.subtitle}"
            </p>
          </div>
          <p className="mt-4 lg:mt-0 text-xs sm:text-sm font-light text-stone-400 max-w-lg leading-relaxed">
            The 10-acre site transitions from raw acreage into a meticulously ordered geometric masterplan. 
            Vehicular corridors are relegated to wide peripheral loops, prioritizing pedestrian security and unpolluted garden courts.
          </p>
        </div>

        {/* Layer Filters & Step Selector Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  setActiveFilter(f.id);
                  setStep(6);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  activeFilter === f.id
                    ? "bg-bronze-500 text-charcoal-950 font-bold shadow-glow-bronze"
                    : "bg-charcoal-900/80 hover:bg-charcoal-800 text-stone-400 border border-white/10"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-stone-400">
            <span>SEQUENCE STEP:</span>
            {[1, 2, 3, 4, 5, 6].map((s) => (
              <button
                key={s}
                onClick={() => {
                  setStep(s);
                  setActiveFilter('all');
                }}
                className={`w-7 h-7 rounded text-xs font-mono transition-all ${
                  step >= s
                    ? "bg-forest-800 border border-emerald-500/50 text-ivory-100 font-bold"
                    : "bg-charcoal-900 border border-white/10 text-stone-500"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Masterplan Interactive Blueprint */}
        <div className="mb-12">
          <Masterplan3D activeFilter={activeFilter} currentStep={step} />
        </div>

        {/* Masterplan Zoning Matrix Breakdown */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {masterplanData.zones.map((zone) => (
            <div
              key={zone.id}
              className="p-4 rounded-xl border border-white/10 bg-charcoal-900/60 backdrop-blur-md"
            >
              <div
                className="w-3 h-3 rounded-full mb-3"
                style={{ backgroundColor: zone.color }}
              ></div>
              <h4 className="text-xs font-mono tracking-wider text-ivory-200 uppercase font-semibold">
                {zone.name}
              </h4>
              <span className="text-xs font-mono text-bronze-400 font-bold mt-1 block">
                {zone.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

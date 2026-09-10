import React, { useState } from 'react';
import Masterplan3D from '../three/Masterplan3D';
import { masterplanData } from '../data/projectData';

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
    <section id="masterplan" className="relative py-28 px-6 md:px-12 bg-gradient-to-r from-white via-[#F4F9FD] via-40% to-sky-100/50 border-t border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-cobalt-600 uppercase mb-3 font-bold">
              <span>04 / THE MASTERPLAN</span>
              <div className="w-10 h-[1.5px] bg-cobalt-600"></div>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-navy-900 uppercase">
              FROM LAND <span className="text-cobalt-600">TO MASTERPLAN.</span>
            </h2>
            <p className="mt-3 text-sm md:text-base font-editorial italic text-slate-600">
              "{masterplanData.subtitle}"
            </p>
          </div>
          <p className="mt-4 lg:mt-0 text-xs sm:text-sm font-sans text-slate-600 max-w-lg leading-relaxed font-normal">
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
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans uppercase tracking-wider transition-all ${
                  activeFilter === f.id
                    ? "bg-cobalt-600 text-white font-bold shadow-sm"
                    : "bg-white hover:bg-sky-50 text-slate-600 border border-sky-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 font-medium">
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
                    ? "bg-navy-900 border border-navy-900 text-white font-bold"
                    : "bg-white border border-slate-200 text-slate-400 hover:border-slate-300"
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
              className="p-4 rounded-xl border border-sky-100 bg-white/90 backdrop-blur-md shadow-sm hover:shadow-arch-card transition-all"
            >
              <div
                className="w-3 h-3 rounded-full mb-3"
                style={{ backgroundColor: zone.id === 'clubhouse' ? '#0A2540' : zone.id === 'boundary' ? '#0284C7' : zone.color }}
              ></div>
              <h4 className="text-xs font-sans tracking-wider text-navy-900 uppercase font-bold">
                {zone.name}
              </h4>
              <span className="text-xs font-mono text-cobalt-600 font-bold mt-1 block">
                {zone.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

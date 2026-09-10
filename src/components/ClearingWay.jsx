import React, { useState } from 'react';
import { clearingData } from '../data/projectData';
import { CheckCircle2 } from 'lucide-react';

export default function ClearingWay() {
  const [activeTab, setActiveTab] = useState(0);

  const stages = [
    {
      title: "Controlled Arterial Access",
      label: "Phase 1: Logistics Corridors",
      description: "Designated access routes for heavy machinery strictly isolated from future residential soil zones, protecting natural soil structure.",
      metrics: "3 Controlled Gateways • Zero Roadway Spills"
    },
    {
      title: "Ecological Vegetation Pruning",
      label: "Phase 2: Tree Protection",
      description: "Selective pruning and barricading of mature indigenous trees to incorporate them into the final central park and walking boulevards.",
      metrics: "100% Native Trees Identified & Tagged"
    },
    {
      title: "Debris Recycling & Composting",
      label: "Phase 3: Clean Ground Clearance",
      description: "Removal of brush and scrub with on-site shredding. Organic mulch was stockpiled for re-use as landscape bed insulation.",
      metrics: "Zero Open Waste Burning • 100% Mulch Reclaim"
    },
    {
      title: "Sub-Base Compaction",
      label: "Phase 4: Foundation Readiness",
      description: "Laser-guided ground leveling conforming to the natural 12-meter slope, preparing clean footing zones for all 189 villas.",
      metrics: "98% Standard Proctor Compaction Achieved"
    }
  ];

  return (
    <section id="clearing" className="relative py-28 px-6 md:px-12 bg-arch-100 border-t border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-cobalt-600 uppercase mb-3 font-bold">
              <span>03 / SITE PREPARATION</span>
              <div className="w-10 h-[1.5px] bg-cobalt-600"></div>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-navy-900 uppercase">
              CLEARING <span className="text-cobalt-600">THE WAY.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-xs font-mono tracking-widest text-cobalt-600 uppercase font-bold">
              RESPONSIBLE LAND PREPARATION
            </span>
            <p className="text-sm font-editorial italic text-slate-600 mt-1">
              "{clearingData.tagline}"
            </p>
          </div>
        </div>

        {/* Interactive Site Preparation Narrative Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Stage Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block mb-4 font-bold">
              // SITE PREPARATION PHASES
            </span>
            {stages.map((stage, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  activeTab === idx
                    ? "border-cobalt-500 bg-white shadow-arch-hover ring-2 ring-sky-100"
                    : "border-sky-100 bg-white/70 hover:border-sky-200 hover:bg-white shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono tracking-widest text-cobalt-600 uppercase font-bold">
                    {stage.label}
                  </span>
                  {activeTab === idx && <CheckCircle2 size={15} className="text-cobalt-600" />}
                </div>
                <h3 className="text-base font-sans text-navy-900 uppercase font-bold mb-1">
                  {stage.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Blueprint Overlay Display — Clean White Drafting Canvas with Blue Overlay */}
          <div className="lg:col-span-7 h-[440px] rounded-2xl border border-sky-200 bg-white relative overflow-hidden flex flex-col justify-between p-8 shadow-arch-card">
            {/* Background Subtle Blueprint Grid */}
            <div className="absolute inset-0 bg-blueprint-grid opacity-60"></div>
            
            {/* Architectural Zoning Vector Graphic in Royal Blue & Soft Greens */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-80" viewBox="0 0 600 400">
              {/* Outer boundary */}
              <rect x="40" y="40" width="520" height="320" fill="none" stroke="#0284C7" strokeWidth="2.5" strokeDasharray="6 4" />
              {/* Internal avenue spine */}
              <line x1="300" y1="40" x2="300" y2="360" stroke="#0A2540" strokeWidth="3" />
              <line x1="40" y1="200" x2="560" y2="200" stroke="#0A2540" strokeWidth="3" />
              {/* Central park / clubhouse buffer */}
              <circle cx="300" cy="200" r="70" fill="#F0F9FF" stroke="#0284C7" strokeWidth="2" strokeDasharray="4 4" />
              {/* Villa plot grids */}
              {Array.from({ length: 8 }).map((_, r) =>
                Array.from({ length: 12 }).map((_, c) => (
                  <rect
                    key={`${r}-${c}`}
                    x={70 + c * 38}
                    y={65 + r * 35}
                    width="26"
                    height="20"
                    fill="#FFFFFF"
                    stroke="#BAE6FD"
                    strokeWidth="1.2"
                  />
                ))
              )}
            </svg>

            {/* Live Active Tab Info */}
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-sky-50 border border-sky-200 text-[11px] font-mono text-cobalt-600 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600 animate-ping"></span>
                <span>ZONING DIRECTIVE // {stages[activeTab].label}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-sans text-navy-900 uppercase font-extrabold mt-4">
                {stages[activeTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mt-3 leading-relaxed font-normal">
                {stages[activeTab].description}
              </p>

              {/* Subtle Blue Architectural Zone Labels */}
              <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-mono font-bold uppercase">
                <span className="px-2.5 py-1 rounded bg-sky-100/80 text-cobalt-600 border border-sky-200">VILLA ZONE</span>
                <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">GREEN ZONE</span>
                <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">ROAD NETWORK</span>
                <span className="px-2.5 py-1 rounded bg-blue-50 text-navy-900 border border-blue-200">COMMUNITY ZONE</span>
                <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200">CLUBHOUSE</span>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="text-slate-600">
                METRIC: <span className="text-navy-900 font-bold">{stages[activeTab].metrics}</span>
              </div>
              <div className="text-slate-500">
                TOP-SOIL REUSE: <span className="text-cobalt-600 font-bold">8,500 MT PRESERVED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transition Banner */}
        <div className="p-8 rounded-2xl border border-sky-200 bg-white text-center max-w-3xl mx-auto shadow-arch-card">
          <p className="text-xs font-mono tracking-widest text-cobalt-600 uppercase mb-2 font-bold">
            CRITICAL DESIGN PRINCIPLE
          </p>
          <h3 className="text-xl sm:text-2xl font-sans text-navy-900 uppercase font-extrabold">
            "EVERY SQUARE FOOT WAS PLANNED WITH PURPOSE."
          </h3>
          <p className="text-xs text-slate-500 mt-2 font-normal max-w-lg mx-auto leading-relaxed">
            No residual awkward corners. The 10-acre parcel yields 189 optimal rectangular plots with zero compromise on roadway widths or green buffer depths.
          </p>
        </div>
      </div>
    </section>
  );
}

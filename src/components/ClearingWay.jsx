import React, { useState } from 'react';
import { clearingData } from '../data/projectData';
import { Shield, Trees, Compass, CheckCircle2, Layers } from 'lucide-react';

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
    <section id="clearing" className="relative py-28 px-6 md:px-12 bg-charcoal-900 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-bronze-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 bg-bronze-400 rounded-full"></span>
              <span>CHAPTER 02 // CONTROLLED PREPARATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-semibold tracking-wider text-ivory-100 uppercase">
              {clearingData.title}
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold">
              RESPONSIBLE LAND PREPARATION
            </span>
            <p className="text-sm font-editorial italic text-stone-300 mt-1">
              "{clearingData.tagline}"
            </p>
          </div>
        </div>

        {/* Interactive Site Preparation Narrative Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Stage Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase block mb-4">
              // SITE PREPARATION PHASES
            </span>
            {stages.map((stage, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`p-5 rounded-xl border transition-all cursor-pointer ${
                  activeTab === idx
                    ? "border-bronze-500 bg-charcoal-950 shadow-glow-bronze"
                    : "border-white/10 bg-charcoal-950/40 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono tracking-widest text-bronze-400 uppercase">
                    {stage.label}
                  </span>
                  {activeTab === idx && <CheckCircle2 size={14} className="text-bronze-400" />}
                </div>
                <h3 className="text-base font-cinzel text-ivory-100 uppercase font-semibold mb-1">
                  {stage.title}
                </h3>
                <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Blueprint Overlay Display */}
          <div className="lg:col-span-7 h-[420px] rounded-2xl border border-bronze-500/30 bg-charcoal-950 relative overflow-hidden flex flex-col justify-between p-8 shadow-2xl">
            {/* Background Blueprint Grid */}
            <div className="absolute inset-0 bg-blueprint-grid opacity-60"></div>
            
            {/* Architectural Zoning Vector Graphic */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 600 400">
              {/* Outer boundary */}
              <rect x="40" y="40" width="520" height="320" fill="none" stroke="#BA996E" strokeWidth="2" strokeDasharray="6 4" />
              {/* Internal avenue spine */}
              <line x1="300" y1="40" x2="300" y2="360" stroke="#38BDF8" strokeWidth="2" />
              <line x1="40" y1="200" x2="560" y2="200" stroke="#38BDF8" strokeWidth="2" />
              {/* Central park / clubhouse buffer */}
              <circle cx="300" cy="200" r="70" fill="none" stroke="#4ADE80" strokeWidth="2" strokeDasharray="4 4" />
              {/* Villa plot grids */}
              {Array.from({ length: 8 }).map((_, r) =>
                Array.from({ length: 12 }).map((_, c) => (
                  <rect
                    key={`${r}-${c}`}
                    x={70 + c * 38}
                    y={65 + r * 35}
                    width="26"
                    height="20"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                ))
              )}
            </svg>

            {/* Live Active Tab Info */}
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-forest-900/80 border border-forest-600/50 text-[11px] font-mono text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>ZONING DIRECTIVE // {stages[activeTab].label}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-cinzel text-ivory-100 uppercase mt-4">
                {stages[activeTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 max-w-lg mt-3 leading-relaxed">
                {stages[activeTab].description}
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="text-bronze-400">
                METRIC: <span className="text-ivory-100">{stages[activeTab].metrics}</span>
              </div>
              <div className="text-stone-400">
                TOP-SOIL REUSE: <span className="text-emerald-400 font-bold">8,500 MT PRESERVED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transition Banner */}
        <div className="p-8 rounded-xl border border-white/10 bg-charcoal-950 text-center max-w-3xl mx-auto">
          <p className="text-xs font-mono tracking-widest text-bronze-400 uppercase mb-2">
            CRITICAL DESIGN PRINCIPLE
          </p>
          <h3 className="text-xl sm:text-2xl font-cinzel text-ivory-100 uppercase">
            "EVERY SQUARE FOOT WAS PLANNED WITH PURPOSE."
          </h3>
          <p className="text-xs text-stone-400 mt-2">
            No residual awkward corners. The 10-acre parcel yields 189 optimal rectangular plots with zero compromise on roadway widths or green buffer depths.
          </p>
        </div>
      </div>
    </section>
  );
}

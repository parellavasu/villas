import React, { useState } from 'react';
import { infrastructureData } from '../data/projectData';
import { ShieldCheck, Zap, Droplets, Lightbulb, Compass, ArrowRight } from 'lucide-react';

export default function Infrastructure() {
  const [selectedLayer, setSelectedLayer] = useState(0);

  return (
    <section id="infrastructure" className="relative py-28 px-6 md:px-12 bg-charcoal-900 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-bronze-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 bg-bronze-400 rounded-full"></span>
              <span>CHAPTER 04 // SUBTERRANEAN ENGINEERING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-semibold tracking-wider text-ivory-100 uppercase">
              {infrastructureData.title}
            </h2>
          </div>
          <p className="mt-4 lg:mt-0 text-sm font-editorial italic text-stone-300 max-w-md">
            "{infrastructureData.subtitle}"
          </p>
        </div>

        {/* 6-Stage Infrastructure Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {infrastructureData.layers.map((layer, idx) => (
            <div
              key={layer.step}
              onClick={() => setSelectedLayer(idx)}
              className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                selectedLayer === idx
                  ? "border-bronze-500 bg-charcoal-950 shadow-glow-bronze scale-[1.02]"
                  : "border-white/10 bg-charcoal-950/50 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full border border-bronze-500/40 bg-bronze-500/10 flex items-center justify-center font-mono text-xs text-bronze-400 font-bold">
                  {layer.step}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase">
                  ENGINEERED SYSTEM
                </span>
              </div>
              <h3 className="text-lg font-cinzel text-ivory-100 uppercase font-semibold mb-2">
                {layer.title}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                {layer.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Cross-Section Engineering Specification Diagram */}
        <div className="p-8 md:p-10 rounded-2xl border border-bronze-500/30 bg-charcoal-950 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-bronze-400 uppercase">
                INFRASTRUCTURE SPECIFICATION DETAIL
              </span>
              <h4 className="text-2xl font-cinzel text-ivory-100 uppercase mt-1">
                {infrastructureData.layers[selectedLayer].title}
              </h4>
            </div>
            <div className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-mono text-emerald-400">
              <ShieldCheck size={16} />
              <span>ZERO-OVERHEAD CABLE CORRIDOR GUARANTEE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-2 p-5 rounded-lg bg-charcoal-900/60 border border-white/5">
              <div className="flex items-center space-x-2 text-xs font-mono text-bronze-400 uppercase">
                <Droplets size={16} />
                <span>Water Recirculation</span>
              </div>
              <p className="text-xs text-stone-300">
                100% sewage treated through state-of-the-art biological STP and returned through automated pressure-compensated drip lines to all common tree pockets.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-lg bg-charcoal-900/60 border border-white/5">
              <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase">
                <Zap size={16} />
                <span>Dual Underground Grids</span>
              </div>
              <p className="text-xs text-stone-300">
                Triple-armored high-voltage power conduits buried in dedicated concrete trenches along with FTTH high-speed optical fiber and pneumatic gas pipeline.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-lg bg-charcoal-900/60 border border-white/5">
              <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 uppercase">
                <Lightbulb size={16} />
                <span>Dark-Sky Compliant Lighting</span>
              </div>
              <p className="text-xs text-stone-300">
                Custom-designed architectural downward bollards operating at 3000 Kelvin warm white to prevent light trespass into private bedroom sanctuaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

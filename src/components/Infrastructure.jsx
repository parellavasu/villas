import React, { useState } from 'react';
import { infrastructureData } from '../data/projectData';
import { ShieldCheck, Zap, Droplets, Lightbulb } from 'lucide-react';

export default function Infrastructure() {
  const [selectedLayer, setSelectedLayer] = useState(0);

  return (
    <section id="infrastructure" className="relative py-28 px-6 md:px-12 bg-arch-100 border-t border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-cobalt-600 uppercase mb-3 font-bold">
              <span>05 / THE FOUNDATION</span>
              <div className="w-10 h-[1.5px] bg-cobalt-600"></div>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-navy-900 uppercase">
              BUILDING <span className="text-cobalt-600">THE FOUNDATION.</span>
            </h2>
          </div>
          <p className="mt-4 lg:mt-0 text-sm font-editorial italic text-slate-600 max-w-md">
            "{infrastructureData.subtitle}"
          </p>
        </div>

        {/* 6-Stage Infrastructure Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {infrastructureData.layers.map((layer, idx) => (
            <div
              key={layer.step}
              onClick={() => setSelectedLayer(idx)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                selectedLayer === idx
                  ? "border-cobalt-500 bg-white shadow-arch-hover scale-[1.02] ring-2 ring-sky-100"
                  : "border-sky-100 bg-white/80 hover:border-sky-200 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full border border-sky-200 bg-sky-50 flex items-center justify-center font-mono text-xs text-cobalt-600 font-bold">
                  {layer.step}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                  ENGINEERED SYSTEM
                </span>
              </div>
              <h3 className="text-lg font-sans text-navy-900 uppercase font-bold mb-2">
                {layer.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {layer.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Cross-Section Engineering Specification Diagram */}
        <div className="p-8 md:p-10 rounded-2xl border border-sky-200 bg-white shadow-arch-card relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-cobalt-600 uppercase font-bold">
                INFRASTRUCTURE SPECIFICATION DETAIL
              </span>
              <h4 className="text-2xl font-sans text-navy-900 uppercase font-extrabold mt-1">
                {infrastructureData.layers[selectedLayer].title}
              </h4>
            </div>
            <div className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 font-semibold">
              <ShieldCheck size={16} />
              <span>ZERO-OVERHEAD CABLE CORRIDOR GUARANTEE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-2 p-5 rounded-xl bg-sky-50/60 border border-sky-100">
              <div className="flex items-center space-x-2 text-xs font-mono text-cobalt-600 uppercase font-bold">
                <Droplets size={16} />
                <span>Water Recirculation</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                100% sewage treated through state-of-the-art biological STP and returned through automated pressure-compensated drip lines to all common tree pockets.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-xl bg-blue-50/60 border border-blue-100">
              <div className="flex items-center space-x-2 text-xs font-mono text-navy-900 uppercase font-bold">
                <Zap size={16} />
                <span>Dual Underground Grids</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Triple-armored high-voltage power conduits buried in dedicated concrete trenches along with FTTH high-speed optical fiber and pneumatic gas pipeline.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-800 uppercase font-bold">
                <Lightbulb size={16} />
                <span>Dark-Sky Compliant Lighting</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Custom-designed architectural downward bollards operating at 3000 Kelvin warm white to prevent light trespass into private bedroom sanctuaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { landscapeFeatures } from '../data/projectData';
import { Sun, CloudSun, Moon, Wind } from 'lucide-react';

export default function LandscapeTransformation() {
  const [activeStep, setActiveStep] = useState(4);
  const [timeOfDay, setTimeOfDay] = useState('sunset');

  const evolutionSteps = [
    { step: "01", name: "Graded Soil & Mineral Conditioning", desc: "Reintroducing 8,500 MT of preserved topsoil with organic mycorrhizal fungi to stimulate deep root networks." },
    { step: "02", name: "Drought-Resistant Grass Carpet", desc: "Bermuda grass and native groundcovers hydroseeded across all villa frontages and central swales." },
    { step: "03", name: "Mature Native Tree Canopies", desc: "Over 650 indigenous trees (Tabebuia, Mahogany, Gulmohar, Neem) transplanted at 15-foot heights." },
    { step: "04", name: "Shaded Pedestrian Avenues", desc: "Double-tiered tree shade reducing ambient micro-climate temperatures by up to 3.5°C." },
    { step: "05", name: "Pollinator Butterfly Meadow", desc: "Curated wild nectar beds attracting over 24 resident butterfly species and honeybees." },
    { step: "06", name: "Aromatic Herbal Trails", desc: "Rosemary, holy basil, lemongrass, and vetiver corridors providing natural sensory rejuvenation." },
    { step: "07", name: "Central Cascading Water Court", desc: "Oxygenated reflecting ponds with submerged aquatic plants and cooling water fountains." },
    { step: "08", name: "Mature Living Sanctuary", desc: "A self-sustaining micro-ecosystem with automated drip irrigation fed entirely by recycled treated water." }
  ];

  return (
    <section id="landscape" className="relative py-28 px-6 md:px-12 bg-white border-t border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-cobalt-600 uppercase mb-3 font-bold">
              <span>08 / THE LANDSCAPE</span>
              <div className="w-10 h-[1.5px] bg-cobalt-600"></div>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-navy-900 uppercase">
              WHERE LANDSCAPE <span className="text-cobalt-600">BECOMES LIFE.</span>
            </h2>
            <p className="mt-3 text-sm md:text-base font-editorial italic text-slate-600 max-w-xl">
              "Architecture provides the enclosure; landscape breathes life into the sanctuary."
            </p>
          </div>

          {/* Time of Day Atmosphere Switcher */}
          <div className="mt-6 lg:mt-0 flex items-center p-1.5 rounded-full border border-sky-200 bg-sky-50/60 shadow-sm">
            <button
              onClick={() => setTimeOfDay('dawn')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-wider flex items-center space-x-2 transition-all ${
                timeOfDay === 'dawn'
                  ? "bg-navy-900 text-white font-bold"
                  : "text-slate-600 hover:text-navy-900 font-semibold"
              }`}
            >
              <CloudSun size={13} />
              <span>DAWN MIST</span>
            </button>
            <button
              onClick={() => setTimeOfDay('day')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-wider flex items-center space-x-2 transition-all ${
                timeOfDay === 'day'
                  ? "bg-cobalt-600 text-white font-bold shadow-sm"
                  : "text-slate-600 hover:text-navy-900 font-semibold"
              }`}
            >
              <Sun size={13} />
              <span>AFTERNOON</span>
            </button>
            <button
              onClick={() => setTimeOfDay('sunset')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-wider flex items-center space-x-2 transition-all ${
                timeOfDay === 'sunset'
                  ? "bg-navy-900 text-white font-bold shadow-sm"
                  : "text-slate-600 hover:text-navy-900 font-semibold"
              }`}
            >
              <Moon size={13} />
              <span>TWILIGHT GOLD</span>
            </button>
          </div>
        </div>

        {/* Environmental Metamorphosis Evolution Track */}
        <div className="p-8 rounded-2xl border border-sky-200 bg-sky-50/30 mb-12 shadow-arch-card relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-slate-200">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-cobalt-600 uppercase font-bold">
                GROWTH STAGE // 0{activeStep + 1} OF 08
              </span>
              <h3 className="text-2xl font-sans text-navy-900 uppercase font-extrabold mt-1">
                {evolutionSteps[activeStep].name}
              </h3>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-3 text-xs font-mono text-emerald-700 font-semibold bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              <Wind size={15} />
              <span>MICRO-CLIMATE COOLING: -3.5°C</span>
            </div>
          </div>

          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed mb-8 font-normal font-sans">
            {evolutionSteps[activeStep].desc}
          </p>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {evolutionSteps.map((s, idx) => (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  activeStep === idx
                    ? "border-cobalt-500 bg-white text-navy-900 shadow-arch-hover ring-2 ring-sky-100"
                    : "border-sky-100 bg-white/80 text-slate-500 hover:border-sky-200"
                }`}
              >
                <span className="text-[10px] font-mono text-cobalt-600 block mb-1 font-bold">
                  STAGE {s.step}
                </span>
                <span className="text-xs font-sans font-bold truncate block">
                  {s.name.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Six Curated Botanical Sanctuaries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landscapeFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-sky-100 bg-white shadow-arch-card group hover:border-cobalt-300 hover:shadow-arch-hover transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-widest text-cobalt-600 uppercase font-bold bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
                  {feat.category} SANCTUARY
                </span>
                <span className="text-xs font-mono text-slate-400 font-semibold">0{idx + 1}</span>
              </div>
              <h4 className="text-lg font-sans text-navy-900 uppercase font-bold mb-2 group-hover:text-cobalt-600 transition-colors">
                {feat.name}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

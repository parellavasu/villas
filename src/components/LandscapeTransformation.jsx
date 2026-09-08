import React, { useState } from 'react';
import { landscapeFeatures } from '../data/projectData';
import { Trees, Sun, CloudSun, Moon, Sparkles, Wind, Droplets } from 'lucide-react';

export default function LandscapeTransformation() {
  const [activeStep, setActiveStep] = useState(4);
  const [timeOfDay, setTimeOfDay] = useState('sunset'); // 'dawn', 'day', 'sunset'

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
    <section id="landscape" className="relative py-28 px-6 md:px-12 bg-charcoal-950 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-emerald-400 uppercase mb-3">
              <Trees size={14} />
              <span>CHAPTER 07 // BIOPHILIC LIVING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-semibold tracking-wider text-ivory-100 uppercase">
              06 / WHERE LANDSCAPE BECOMES LIFE
            </h2>
            <p className="mt-3 text-sm md:text-base font-editorial italic text-stone-300 max-w-xl">
              "Architecture provides the enclosure; landscape breathes life into the sanctuary."
            </p>
          </div>

          {/* Time of Day Atmosphere Switcher */}
          <div className="mt-6 lg:mt-0 flex items-center p-1.5 rounded-full border border-white/15 bg-charcoal-900/90 shadow-xl">
            <button
              onClick={() => setTimeOfDay('dawn')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider flex items-center space-x-2 transition-all ${
                timeOfDay === 'dawn'
                  ? "bg-stone-700 text-ivory-100 font-bold"
                  : "text-stone-400 hover:text-ivory-100"
              }`}
            >
              <CloudSun size={13} />
              <span>DAWN MIST</span>
            </button>
            <button
              onClick={() => setTimeOfDay('day')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider flex items-center space-x-2 transition-all ${
                timeOfDay === 'day'
                  ? "bg-amber-500 text-charcoal-950 font-bold shadow-glow-bronze"
                  : "text-stone-400 hover:text-ivory-100"
              }`}
            >
              <Sun size={13} />
              <span>AFTERNOON</span>
            </button>
            <button
              onClick={() => setTimeOfDay('sunset')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider flex items-center space-x-2 transition-all ${
                timeOfDay === 'sunset'
                  ? "bg-bronze-500 text-charcoal-950 font-bold shadow-glow-bronze"
                  : "text-stone-400 hover:text-ivory-100"
              }`}
            >
              <Moon size={13} />
              <span>TWILIGHT GOLD</span>
            </button>
          </div>
        </div>

        {/* Environmental Metamorphosis Evolution Track */}
        <div className="p-8 rounded-2xl border border-bronze-500/30 bg-charcoal-900/70 mb-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-bronze-400 uppercase">
                GROWTH STAGE // 0{activeStep + 1} OF 08
              </span>
              <h3 className="text-2xl font-cinzel text-ivory-100 uppercase mt-1">
                {evolutionSteps[activeStep].name}
              </h3>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-3 text-xs font-mono text-emerald-400">
              <Wind size={15} />
              <span>NATURAL MICRO-CLIMATE COOLING: -3.5°C</span>
            </div>
          </div>

          <p className="text-sm text-stone-300 max-w-2xl leading-relaxed mb-8">
            {evolutionSteps[activeStep].desc}
          </p>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {evolutionSteps.map((s, idx) => (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-lg border text-left transition-all ${
                  activeStep === idx
                    ? "border-emerald-500 bg-forest-900/60 text-ivory-100 shadow-glow-emerald"
                    : "border-white/10 bg-charcoal-950 text-stone-400 hover:border-white/20"
                }`}
              >
                <span className="text-[10px] font-mono text-bronze-400 block mb-1">
                  STAGE {s.step}
                </span>
                <span className="text-xs font-cinzel font-semibold truncate block">
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
              className="p-6 rounded-xl border border-white/10 bg-charcoal-900/50 backdrop-blur-md group hover:border-bronze-500/40 transition-all shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                  {feat.category} SANCTUARY
                </span>
                <span className="text-xs font-mono text-stone-400">0{idx + 1}</span>
              </div>
              <h4 className="text-lg font-cinzel text-ivory-100 uppercase font-semibold mb-2 group-hover:text-bronze-300 transition-colors">
                {feat.name}
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

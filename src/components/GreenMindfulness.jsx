import React, { useState } from 'react';
import { mindfulnessFeatures } from '../data/projectData';
import { Volume2, VolumeX, Sparkles, Droplets, Leaf } from 'lucide-react';
import { ambientSound } from '../utils/sound';

export default function GreenMindfulness() {
  const [soundActive, setSoundActive] = useState(ambientSound.isPlaying);

  const toggleSound = () => {
    const active = ambientSound.toggle();
    setSoundActive(active);
  };

  return (
    <section id="mindfulness" className="relative py-32 px-6 md:px-12 bg-charcoal-900 border-t border-white/10 overflow-hidden">
      {/* Soft Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-forest-900/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-emerald-400 uppercase mb-3">
            <Leaf size={14} />
            <span>CHAPTER 10 // BIOPHILIC RESTORATION</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-cinzel font-semibold tracking-wider text-ivory-100 uppercase">
            SPACE TO SLOW DOWN.
          </h2>
          <p className="mt-4 text-sm sm:text-base font-editorial italic text-stone-300">
            "In an accelerated world, tranquility is the ultimate architectural luxury."
          </p>

          {/* Calming Soundscape Control Pill */}
          <div className="mt-8 inline-flex items-center space-x-4 p-2 pl-4 pr-3 rounded-full border border-bronze-500/40 bg-charcoal-950/80 backdrop-blur-md shadow-glow-bronze">
            <div className="flex items-center space-x-2 text-xs font-mono text-stone-300">
              <span className={`w-2 h-2 rounded-full ${soundActive ? "bg-emerald-400 animate-pulse" : "bg-stone-500"}`}></span>
              <span>AMBIENT SOUNDSCAPE: {soundActive ? "PLAYING" : "MUTED"}</span>
            </div>
            <button
              onClick={toggleSound}
              className={`p-2 rounded-full transition-all ${
                soundActive
                  ? "bg-bronze-500 text-charcoal-950 font-bold"
                  : "bg-charcoal-900 text-stone-400 hover:text-ivory-100"
              }`}
            >
              {soundActive ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
          </div>
        </div>

        {/* 10 Mindfulness Elements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {mindfulnessFeatures.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-white/10 bg-charcoal-950/60 backdrop-blur-md relative group hover:border-emerald-500/40 hover:bg-forest-950/40 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 mb-3">
                  <span>ZONE 0{idx + 1}</span>
                  <span className="text-emerald-400">SERENE</span>
                </div>
                <h4 className="text-base font-cinzel text-ivory-100 uppercase font-semibold mb-2 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 text-[9px] font-mono text-stone-400 uppercase">
                // PASSIVE REJUVENATION
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

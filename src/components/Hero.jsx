import React from 'react';
import { ArrowDown, Compass, ChevronRight } from 'lucide-react';
import Hero3DCanvas from '../three/Hero3DCanvas';
import { projectMeta } from '../data/projectData';

export default function Hero({ onExploreJourney }) {
  return (
    <section className="relative w-full h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-charcoal-950">
      {/* 3D Realistic Aerial Visualization Canvas */}
      <div className="absolute inset-0 z-0">
        <Hero3DCanvas />
      </div>

      {/* Subtle Atmospheric Vignette Gradients */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-charcoal-950/50"></div>
      <div className="absolute inset-0 z-10 pointer-events-none bg-radial-vignette opacity-70"></div>

      {/* Hero Narrative Overlay */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Architectural Datum Badge */}
        <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-bronze-500/30 bg-charcoal-900/60 backdrop-blur-md mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-bronze-400"></span>
          <span className="text-[11px] font-mono tracking-widest text-bronze-300 uppercase">
            ARCHITECTURAL MONOGRAPH & MASTER DEVELOPMENT
          </span>
        </div>

        {/* Brand Master Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-cinzel font-semibold tracking-wider text-ivory-100 uppercase mb-4 drop-shadow-2xl">
          ANTELIA GROVES
        </h1>

        {/* Subtitle / Tagline */}
        <p className="text-sm sm:text-base md:text-xl font-mono tracking-widest text-bronze-400 uppercase font-light max-w-2xl mb-12">
          {projectMeta.tagline}
        </p>

        {/* Hero Story Sequential Lead */}
        <div className="max-w-2xl mx-auto p-6 rounded-xl border border-white/10 bg-charcoal-950/70 backdrop-blur-lg shadow-2xl mb-10">
          <p className="text-base sm:text-lg text-ivory-200 font-editorial italic leading-relaxed mb-3">
            "{projectMeta.heroStoryLead}"
          </p>
          <p className="text-xs sm:text-sm font-mono tracking-wider text-stone-300 uppercase">
            {projectMeta.heroStoryFollow}
          </p>
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-stone-400">
            <span className="flex items-center space-x-1.5">
              <span className="text-bronze-400 font-bold">10.0</span> ACRES
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center space-x-1.5">
              <span className="text-bronze-400 font-bold">189</span> VILLAS
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center space-x-1.5">
              <span className="text-bronze-400 font-bold">15K+</span> SQ.FT CLUBHOUSE
            </span>
          </div>
        </div>

        {/* Scroll affordance button */}
        <a
          href="#land"
          className="inline-flex items-center space-x-3 px-6 py-3 rounded-full border border-bronze-500/40 hover:border-bronze-400 bg-charcoal-900/80 hover:bg-forest-900/60 transition-all text-xs font-mono uppercase tracking-widest text-ivory-100 group shadow-glow-bronze"
        >
          <span>ENTER THE MASTER DEVELOPMENT</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform text-bronze-400" />
        </a>
      </div>

      {/* Bottom Architectural Bar */}
      <div className="absolute bottom-6 left-8 right-8 z-20 hidden md:flex items-center justify-between text-[10px] font-mono tracking-widest text-stone-400 uppercase pointer-events-none">
        <div className="flex items-center space-x-2">
          <Compass size={14} className="text-bronze-400" />
          <span>ORIENTATION: 12° NORTH-BY-EAST</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>SEQUENCE: RAW LAND → VISION → ANTELIA GROVES</span>
        </div>
      </div>
    </section>
  );
}

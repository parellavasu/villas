import React from 'react';
import Hero3DCanvas from '../three/Hero3DCanvas';
import Logo from './Logo';
import { projectMeta } from '../data/projectData';
import { ArrowDown, Compass } from 'lucide-react';

export default function Hero({ onExploreJourney }) {
  return (
    <section className="relative w-full h-screen min-h-[780px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-white via-white via-35% to-navy-950">
      {/* 3D Realistic Aerial Visualization Canvas */}
      <div className="absolute inset-0 z-0">
        <Hero3DCanvas />
      </div>

      {/* Directional Horizontal Atmosphere: Pure Daylight White on Left -> Deep Royal Navy on Right */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-white via-white/80 via-40% to-navy-950/75 sm:to-navy-950/85"></div>
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-white/80 via-transparent to-white/40"></div>

      {/* Hero Narrative Overlay */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center pt-16 sm:pt-20">
        {/* Prominent Architectural Brand Logo in Center/Top */}
        <div className="mb-4 sm:mb-5 transform hover:scale-105 transition-transform duration-300">
          <Logo size="lg" />
        </div>

        {/* Brand Subtitle */}
        <h3 className="text-xs sm:text-sm font-sans font-extrabold tracking-[0.3em] text-cobalt-600 uppercase mb-3 select-none">
          ANTELIA GROVES
        </h3>

        {/* Main Headline — Deep Premium Blue Typography in Manrope */}
        <div className="space-y-2 mb-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold tracking-tight text-navy-950 uppercase leading-[1.04]">
            10 ACRES.<br />
            <span className="text-cobalt-600">ONE VISION.</span>
          </h1>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-sans font-bold tracking-[0.14em] text-slate-700 uppercase">
            A LIVING LANDSCAPE.
          </h3>
        </div>

        {/* Supporting Short Story Narrative Box — Clean White Architectural Card */}
        <div className="max-w-xl mx-auto p-5 sm:p-6 rounded-2xl border border-sky-100 bg-white/90 backdrop-blur-md shadow-arch-card mb-8">
          <p className="text-sm sm:text-base text-slate-700 font-sans font-normal leading-relaxed mb-3">
            "{projectMeta.heroStoryLead}"
          </p>
          <p className="text-xs sm:text-sm font-sans tracking-wide text-slate-500 uppercase font-semibold">
            {projectMeta.heroStoryFollow}
          </p>
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span><strong className="text-navy-900">10</strong> ACRES</span>
            <span className="text-slate-300">|</span>
            <span><strong className="text-navy-900">189</strong> VILLAS</span>
            <span className="text-slate-300">|</span>
            <span><strong className="text-navy-900">15K+</strong> SQ.FT CLUBHOUSE</span>
          </div>
        </div>

        {/* Small Scroll Indicator: SCROLL TO EXPLORE with thin animated blue line */}
        <div className="flex flex-col items-center space-y-2 pointer-events-auto">
          <a
            href="#land"
            className="group flex flex-col items-center text-[10px] font-mono tracking-[0.25em] text-slate-500 hover:text-cobalt-600 uppercase font-bold transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            {/* Animated Blue Line */}
            <div className="w-[1.5px] h-9 bg-sky-200 mt-2 relative overflow-hidden rounded-full">
              <div className="w-full h-1/2 bg-cobalt-600 rounded-full animate-[float_1.8s_ease-in-out_infinite]"></div>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom Architectural Bar */}
      <div className="absolute bottom-6 left-8 right-8 z-20 hidden md:flex items-center justify-between text-[10px] font-mono tracking-widest text-slate-400 uppercase pointer-events-none">
        <div className="flex items-center space-x-2">
          <Compass size={14} className="text-cobalt-600" />
          <span>ORIENTATION: 12° NORTH-BY-EAST</span>
        </div>
        <div className="flex items-center space-x-3">
          <span>STORY: LOGO → LAND → MASTERPLAN → COMMUNITY</span>
        </div>
      </div>
    </section>
  );
}

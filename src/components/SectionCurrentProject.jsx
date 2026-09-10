import React, { useState } from 'react';
import { Layers, Trees, Briefcase, SunMedium, Sparkles } from 'lucide-react';

export default function SectionCurrentProject({ onExploreVillas, onOpenBooking }) {
  const [activeVisual, setActiveVisual] = useState('villa'); // 'villa' | 'enclave'

  // 4 Verified Project Facts (Compact 2x2 Grid)
  const projectFacts = [
    {
      num: '10 ~ ACRES',
      title: 'Secure gated community',
    },
    {
      num: '3/4 BHK',
      title: 'Independent villas',
    },
    {
      num: '2262–3000 SQ.FT.',
      title: 'Built-up area',
    },
    {
      num: '15K+ SQ.FT.',
      title: 'Premium clubhouse',
    },
  ];

  // 4 Verified Architectural Features
  const architectureFeatures = [
    {
      title: 'SPLIT-LEVEL DESIGN',
      desc: 'Spacious layouts with improved privacy and connection.',
      icon: Layers,
    },
    {
      title: 'PRIVATE GARDENS',
      desc: 'Lush garden sit-outs connected to the home.',
      icon: Trees,
    },
    {
      title: 'HOME OFFICE',
      desc: 'Dedicated spaces for work and creativity.',
      icon: Briefcase,
    },
    {
      title: 'TERRACE LOUNGE',
      desc: 'Large outdoor areas for relaxed living.',
      icon: SunMedium,
    },
  ];

  const visualData = {
    villa: {
      image: '/images/overview/01_overview_flagship_villa.jpg',
      alt: 'Antelia Groves Ultra-Luxury Contemporary Triplex Villa Render',
      title: 'Contemporary Split-Level Villa & Private Garden',
      tag: 'TRIPLEX ARCHITECTURE',
      badge: 'REALISTIC 3D RENDER',
    },
    enclave: {
      image: '/images/overview/02_overview_sunset_enclave.jpg',
      alt: 'Antelia Groves 10-Acre Master Sanctuary Aerial Render',
      title: '10-Acre Botanical Sanctuary & Sunset Canopy',
      tag: 'MASTER ENCLAVE',
      badge: 'AERIAL VIEW',
    },
  };

  const currentVisual = visualData[activeVisual];

  return (
    <section
      id="overview"
      className="relative bg-[#FFFFFF] text-[#1D2421] py-12 sm:py-14 lg:py-16 border-t border-[#EBE7DF] scroll-mt-20 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* =========================================================
            MAIN 2-COLUMN EDITORIAL PRESENTATION
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Label + Single-Line Heading + Description + 2x2 Facts */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1">
            
            {/* Section Eyebrow */}
            <div className="inline-flex items-center space-x-2.5 mb-2.5">
              <span className="w-4 h-[1.5px] bg-[#B89047]" />
              <span className="font-mono text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] text-[#B89047] uppercase">
                CURRENT PROJECT
              </span>
            </div>

            {/* Main Heading: Strictly Single Line on Tablet/Desktop */}
            <h2 className="font-sans font-bold text-[18px] sm:text-[21px] md:text-[23px] lg:text-[23px] xl:text-[26px] leading-tight text-[#141917] tracking-tight whitespace-normal sm:whitespace-nowrap mb-3.5">
              A COMMUNITY DESIGNED AROUND BETTER LIVING
            </h2>

            {/* Short Description */}
            <p className="font-sans text-[14px] sm:text-[15px] leading-[1.6] text-[#4A5750] max-w-[540px] font-normal mb-6">
              Antelia Groves is a secure gated residential community spread across approximately 10 acres, offering independent 3 &amp; 4 BHK multi-level villas designed around space, privacy, nature and everyday connection.
            </p>

            {/* Compact 2x2 Project Facts Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-3.5 pt-4 border-t border-[#EBE7DF]">
              {projectFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 bg-[#FAF8F5]/80 border border-[#EBE7DF] rounded-xs flex flex-col justify-center hover:border-[#B8A58A] transition-colors"
                >
                  <div className="font-sans font-semibold text-[22px] sm:text-[26px] lg:text-[27px] text-[#B89047] leading-tight tracking-tight">
                    {fact.num}
                  </div>
                  <div className="font-sans text-[11.5px] sm:text-[12.5px] font-medium text-[#4A5750] mt-0.5">
                    {fact.title}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Realistic 3D Architectural Visualization with Interactive Toggle */}
          <div className="lg:col-span-5 relative order-2 mt-4 lg:mt-0">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-xs overflow-hidden border border-[#EBE7DF] bg-[#141917] shadow-md group">
              <img
                src={currentVisual.image}
                alt={currentVisual.alt}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141917]/75 via-[#141917]/15 to-transparent pointer-events-none" />
              
              {/* Top View Selector Buttons */}
              <div className="absolute top-3 right-3 z-10 flex items-center space-x-1.5 bg-[#141917]/80 backdrop-blur-md border border-white/20 p-1 rounded-xs">
                <button
                  onClick={() => setActiveVisual('villa')}
                  className={`px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-wider rounded-xs transition-colors ${
                    activeVisual === 'villa'
                      ? 'bg-[#B89047] text-white font-semibold'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  VILLA
                </button>
                <button
                  onClick={() => setActiveVisual('enclave')}
                  className={`px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-wider rounded-xs transition-colors ${
                    activeVisual === 'enclave'
                      ? 'bg-[#B89047] text-white font-semibold'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  ENCLAVE
                </button>
              </div>

              {/* Top Left Badge */}
              <div className="absolute top-3 left-3 pointer-events-none">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 bg-[#141917]/80 backdrop-blur-md border border-[#C5A880]/40 text-[#EBE7DF] font-mono text-[9.5px] uppercase tracking-[0.16em] rounded-xs shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B89047] animate-pulse" />
                  <span>{currentVisual.badge}</span>
                </span>
              </div>

              {/* Refined subtle photo caption */}
              <div className="absolute bottom-3.5 left-4 right-4 text-white pointer-events-none flex items-end justify-between">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#C5A880] mb-0.5">
                    {currentVisual.tag}
                  </div>
                  <div className="font-sans text-[13px] sm:text-[14px] font-semibold text-white drop-shadow-sm line-clamp-1">
                    {currentVisual.title}
                  </div>
                </div>
                <span className="hidden sm:inline-block font-mono text-[9.5px] text-[#D8D4CA] uppercase tracking-wider shrink-0 ml-2">
                  10 ACRES
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================
            COMPACT ARCHITECTURE FEATURES ROW (4 Short Features)
            ========================================================= */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-[#EBE7DF]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {architectureFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 bg-white/80 border border-[#EBE7DF] rounded-xs hover:border-[#B8A58A] transition-colors group flex flex-col justify-between shadow-xs"
                >
                  <div className="flex items-center space-x-2.5 mb-1.5">
                    <div className="w-6 h-6 rounded-xs bg-[#C5A880]/10 flex items-center justify-center text-[#B89047] shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="font-sans text-[12.5px] sm:text-[13px] font-semibold uppercase tracking-[0.04em] text-[#1D2421]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-sans text-[12px] sm:text-[12.5px] text-[#5A6862] leading-[1.5]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

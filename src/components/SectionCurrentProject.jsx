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
      className="relative bg-[#FAFAF9] text-[#111827] py-5 sm:py-6 lg:py-8 border-t border-gray-200/80 scroll-mt-[74px] overflow-hidden font-sans lg:min-h-[calc(100vh-74px)] flex flex-col justify-center"
    >
      {/* Subtle background ambient warm glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FFF7ED] rounded-full blur-3xl pointer-events-none -ml-40 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        
        {/* =========================================================
            MAIN 2-COLUMN EDITORIAL PRESENTATION
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Label + Single-Line Heading + Description + 2x2 Facts */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1">
            
            {/* Section Eyebrow */}
            <div className="inline-flex items-center space-x-2.5 mb-2">
              <span className="w-4 h-[1.5px] bg-[#EA580C]" />
              <span className="font-mono text-[10.5px] sm:text-[11px] font-bold tracking-[0.2em] text-[#EA580C] uppercase">
                CURRENT PROJECT
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-sans font-bold text-[18px] sm:text-[22px] lg:text-[24px] leading-tight text-[#111827] tracking-tight mb-2.5">
              A COMMUNITY DESIGNED AROUND BETTER LIVING
            </h2>

            {/* Short Description */}
            <p className="font-sans text-[13px] sm:text-[14px] leading-[1.6] text-[#4B5563] max-w-[540px] font-normal mb-4">
              Antelia Groves is a secure gated residential community spread across approximately 10 acres, offering independent 3 &amp; 4 BHK multi-level villas designed around space, privacy, nature and everyday connection.
            </p>

            {/* Compact 2x2 Project Facts Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-3.5 border-t border-gray-200">
              {projectFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 bg-white border border-gray-200/90 rounded-xs flex flex-col justify-center hover:border-[#EA580C]/60 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="font-sans font-bold text-[20px] sm:text-[23px] lg:text-[24px] text-[#EA580C] leading-tight tracking-tight">
                    {fact.num}
                  </div>
                  <div className="font-sans text-[11px] sm:text-[12px] font-medium text-[#4B5563] mt-0.5">
                    {fact.title}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Realistic 3D Architectural Visualization with Interactive Toggle */}
          <div className="lg:col-span-5 relative order-2 mt-4 lg:mt-0">
            <div className="relative aspect-[16/11] lg:h-[290px] w-full rounded-xs overflow-hidden border border-gray-200 bg-white shadow-sm group">
              <img
                src={currentVisual.image}
                alt={currentVisual.alt}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Top View Selector Buttons */}
              <div className="absolute top-3 right-3 z-10 flex items-center space-x-1.5 bg-white/95 backdrop-blur-md border border-gray-200 p-1 rounded-xs shadow-sm">
                <button
                  onClick={() => setActiveVisual('villa')}
                  className={`px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                    activeVisual === 'villa'
                      ? 'bg-[#EA580C] text-white font-bold'
                      : 'text-[#4B5563] hover:text-[#111827] hover:bg-black/5'
                  }`}
                >
                  VILLA
                </button>
                <button
                  onClick={() => setActiveVisual('enclave')}
                  className={`px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                    activeVisual === 'enclave'
                      ? 'bg-[#EA580C] text-white font-bold'
                      : 'text-[#4B5563] hover:text-[#111827] hover:bg-black/5'
                  }`}
                >
                  ENCLAVE
                </button>
              </div>

              {/* Top Left Badge */}
              <div className="absolute top-3 left-3 pointer-events-none">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 bg-white/95 backdrop-blur-md border border-gray-200 text-[#111827] font-mono text-[9px] uppercase tracking-[0.16em] rounded-xs shadow-sm font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
                  <span>{currentVisual.badge}</span>
                </span>
              </div>

              {/* Refined subtle photo caption */}
              <div className="absolute bottom-3 left-3.5 right-3.5 text-white pointer-events-none flex items-end justify-between">
                <div>
                  <div className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-[#EA580C] mb-0.5 font-bold">
                    {currentVisual.tag}
                  </div>
                  <div className="font-sans text-[12.5px] sm:text-[13px] font-semibold text-white drop-shadow-sm line-clamp-1">
                    {currentVisual.title}
                  </div>
                </div>
                <span className="hidden sm:inline-block font-mono text-[9px] text-gray-200 uppercase tracking-wider shrink-0 ml-2">
                  10 ACRES
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================
            COMPACT ARCHITECTURE FEATURES ROW (4 Short Features)
            ========================================================= */}
        <div className="mt-5 sm:mt-6 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {architectureFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-3 bg-white border border-gray-200/90 rounded-xs hover:border-[#EA580C]/60 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-5 h-5 rounded-xs bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center text-[#EA580C] shrink-0">
                      <Icon className="w-3 h-3" />
                    </div>
                    <h3 className="font-sans text-[11.5px] sm:text-[12px] font-semibold uppercase tracking-[0.04em] text-[#111827]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-sans text-[11px] sm:text-[11.5px] text-[#4B5563] leading-[1.45]">
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

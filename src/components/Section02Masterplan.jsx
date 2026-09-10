import React, { useState, useEffect } from 'react';
import Masterplan3D from '../three/Masterplan3D';
import { Layers, Compass, ShieldCheck, Route, MapPin, Sparkles, Building2, Trees, Play, Pause, Box } from 'lucide-react';

export default function Section02Masterplan() {
  const [activeTab, setActiveTab] = useState('aerial'); // 'aerial' | 'clubhouse' | 'north' | 'south' | '3d'
  const [activeSector, setActiveSector] = useState('all');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // The 4 photographic/CGI views that auto-cycle
  const imageTabs = ['aerial', 'clubhouse', 'north', 'south'];

  const masterplanViews = {
    aerial: {
      id: 'aerial',
      title: '10-Acre Masterplan Aerial (Overall Layout)',
      subtitle: '189 LOW-DENSITY SPLIT-LEVEL VILLAS',
      image: '/images/masterplan/01_masterplan_aerial_10acres.jpg',
      badge: '10-ACRE MASTERPLAN OVERVIEW',
      desc: 'An aerial architectural masterplan showing the low-density community layout, wide tree-lined boulevards, central recreational pavilion, and perimeter green buffer.',
      hotspots: [
        { top: '42%', left: '52%', label: 'CENTRAL CLUBHOUSE & 25M POOL', sub: '15,000 Sq.Ft Pavilion' },
        { top: '26%', left: '38%', label: 'NORTH GROVE (EAST VILLAS)', sub: '68 East-Facing Homes' },
        { top: '56%', left: '68%', label: 'SOUTH GROVE (GARDEN VILLAS)', sub: '74 West-Facing Homes' },
        { top: '78%', left: '26%', label: '40FT BOULEVARD MAIN ENTRY', sub: 'Gated Security Roundabout' },
      ],
    },
    clubhouse: {
      id: 'clubhouse',
      title: 'Central Pavilion & Resort Clubhouse',
      subtitle: '15,000 SQ.FT RECREATIONAL HEART',
      image: '/images/masterplan/02_masterplan_central_clubhouse.jpg',
      badge: 'CENTRAL RECREATIONAL HUB',
      desc: 'The social and leisure anchor of Antelia Groves featuring a 25m heated lap pool, outdoor amphitheater lawn, children’s play park, and professional tennis court.',
      hotspots: [
        { top: '48%', left: '42%', label: '25-METER HEATED LAP POOL', sub: 'Azure Water Court' },
        { top: '65%', left: '55%', label: 'GRASS AMPHITHEATER', sub: 'Community Gathering Lawn' },
        { top: '70%', left: '80%', label: 'CHAMPIONSHIP TENNIS COURT', sub: 'All-Weather Surface' },
      ],
    },
    north: {
      id: 'north',
      title: 'North Grove Residential Enclave',
      subtitle: 'EAST-FACING VASTU HOMES',
      image: '/images/masterplan/03_masterplan_north_grove.jpg',
      badge: 'NORTH GROVE SECTOR',
      desc: 'A peaceful residential sector of 3 and 4 BHK villas designed with east-facing Vastu entrances, open rooftop terraces, and quiet 30-foot avenues.',
      hotspots: [
        { top: '35%', left: '46%', label: 'EAST-FACING VILLAS', sub: 'Morning Sunlight Living' },
        { top: '60%', left: '55%', label: '30FT QUIET RESIDENTIAL STREETS', sub: 'Granite Kerbs & Landscaping' },
        { top: '28%', left: '74%', label: 'CORNER POCKET PARK', sub: 'Children Play & Gazebo' },
      ],
    },
    south: {
      id: 'south',
      title: 'South Grove & Sunset Garden Enclave',
      subtitle: 'LINEAR CENTRAL PARK & REFLEXOLOGY TRAILS',
      image: '/images/masterplan/04_masterplan_south_grove.jpg',
      badge: 'SOUTH GROVE SECTOR',
      desc: 'An enclave of split-level villas framed by a continuous lush central linear park, wooden pergolas, reflexology walking trails, and flowering trees.',
      hotspots: [
        { top: '50%', left: '48%', label: 'CENTRAL LINEAR GREEN PARK', sub: 'Pergolas & Water Feature' },
        { top: '38%', left: '28%', label: 'WEST-FACING SUNSET VILLAS', sub: 'Private Rooftop Terraces' },
        { top: '68%', left: '78%', label: 'REFLEXOLOGY WALKING PATH', sub: 'Stone Paved Nature Trail' },
      ],
    },
  };

  // Auto-advance through the 4 image views, stopping before 3D (3D must be clicked separately)
  useEffect(() => {
    // If currently on 3D or auto-play is paused, do not auto-advance
    if (activeTab === '3d' || !isAutoPlaying) return;

    const timer = setInterval(() => {
      setActiveTab((current) => {
        const currentIdx = imageTabs.indexOf(current);
        if (currentIdx === -1) return 'aerial';
        // Cycles: aerial -> clubhouse -> north -> south -> aerial
        const nextIdx = (currentIdx + 1) % imageTabs.length;
        return imageTabs[nextIdx];
      });
    }, 4800);

    return () => clearInterval(timer);
  }, [activeTab, isAutoPlaying]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const currentView = masterplanViews[activeTab] || masterplanViews['aerial'];

  return (
    <section
      id="masterplan"
      className="relative bg-white text-[#1D2421] py-14 sm:py-16 overflow-hidden border-t border-[#EBE7DF] scroll-mt-20 font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-[#EBE7DF]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2.5 mb-2">
              <span className="w-5 h-[1.5px] bg-[#C5A880]" />
              <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-[#B89047] uppercase">
                03 / THE MASTERPLAN
              </span>
            </div>
            <h2 className="font-sans font-semibold text-[30px] sm:text-[36px] lg:text-[38px] tracking-tight text-[#1D2421] leading-tight">
              A COMMUNITY PLANNED AROUND LIVING
            </h2>
          </div>

          <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#5A6862] max-w-md mt-3 md:mt-0 font-normal">
            A 10-acre gated sanctuary masterplanned with split-level architecture, 40-foot tree-lined avenues, centralized recreational spines, and complete underground utilities.
          </p>
        </div>

        {/* 4 Key Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {[
            { tag: 'TOTAL SCALE', val: '10 ACRES', sub: 'Gated Villa Sanctuary' },
            { tag: 'RESIDENTIAL DENSITY', val: '189 HOMES', sub: 'Low Density Masterplan' },
            { tag: 'CENTRAL CLUBHOUSE', val: '15,000 SQ.FT', sub: '25m Pool, Gym & Sports' },
            { tag: 'AVENUE SPINES', val: '40 & 30 FT', sub: 'Tree-Shaded Internal Roads' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 bg-[#FAFAF7] border border-[#EBE7DF] rounded-xs shadow-xs"
            >
              <div className="text-[10.5px] font-mono tracking-widest text-[#B89047] uppercase font-semibold">{item.tag}</div>
              <div className="text-[24px] sm:text-[28px] font-semibold text-[#1D2421] mt-1">{item.val}</div>
              <div className="text-[12px] text-[#5A6862] mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Masterplan Interactive Viewer Card */}
        <div className="relative rounded-xs overflow-hidden border border-[#EBE7DF] bg-[#FAFAF7] shadow-xl">
          
          {/* Top Control Bar: Masterplan View Navigation Tabs */}
          <div className="p-3 sm:p-4 border-b border-[#EBE7DF] bg-[#FAF9F5] flex flex-wrap items-center justify-between gap-3">
            
            {/* View Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'aerial', label: '10-ACRE AERIAL' },
                { id: 'clubhouse', label: 'CENTRAL CLUBHOUSE' },
                { id: 'north', label: 'NORTH GROVE' },
                { id: 'south', label: 'SOUTH GROVE' },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded-xs transition-all cursor-pointer relative ${
                      isActive
                        ? 'bg-[#B89047] text-white font-semibold shadow-xs'
                        : 'bg-white border border-[#EBE7DF] text-[#5A6862] hover:text-[#1D2421] hover:border-[#C5A880]/50'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {isActive && activeTab !== '3d' && isAutoPlaying && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#B89047] border-2 border-white animate-pulse" />
                    )}
                  </button>
                );
              })}

              {/* Distinct 3D CAD MODEL Tab (Activated only when clicked separately) */}
              <button
                onClick={() => handleTabClick('3d')}
                className={`px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded-xs transition-all cursor-pointer flex items-center space-x-1.5 ml-1 ${
                  activeTab === '3d'
                    ? 'bg-[#1D2421] text-white font-semibold shadow-md border border-[#1D2421]'
                    : 'bg-white border-2 border-[#B89047]/60 text-[#B89047] hover:bg-[#B89047] hover:text-white font-semibold'
                }`}
                title="Click to explore the interactive 3D model"
              >
                <Box className="w-3.5 h-3.5" />
                <span>3D CAD MODEL</span>
                {activeTab !== '3d' && (
                  <span className="text-[9px] font-mono bg-[#B89047]/15 text-[#B89047] px-1.5 py-0.5 rounded-xs ml-1">
                    CLICK
                  </span>
                )}
              </button>
            </div>

            {/* Right Status / Sector Controls */}
            <div className="flex items-center space-x-3">
              {activeTab === '3d' ? (
                /* Sector Filter when on 3D Mode */
                <div className="flex items-center space-x-1.5">
                  <span className="text-[10.5px] font-mono text-[#5A6862] uppercase tracking-wider hidden sm:inline">
                    SECTOR:
                  </span>
                  {[
                    { id: 'all', label: 'ALL' },
                    { id: 'north', label: 'NORTH' },
                    { id: 'central', label: 'CLUBHOUSE' },
                    { id: 'south', label: 'SOUTH' },
                  ].map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => setActiveSector(sec.id)}
                      className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                        activeSector === sec.id
                          ? 'bg-[#B89047] text-white font-semibold'
                          : 'bg-white border border-[#EBE7DF] text-[#5A6862] hover:text-[#1D2421]'
                      }`}
                    >
                      {sec.label}
                    </button>
                  ))}
                </div>
              ) : (
                /* Auto-Cycling Indicator & Pause/Play Control for Image Views */
                <div className="flex items-center space-x-2 bg-white px-2.5 py-1 border border-[#EBE7DF] rounded-xs shadow-xs">
                  <span className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-[#B89047] animate-pulse' : 'bg-stone-400'}`} />
                  <span className="font-mono text-[10px] text-[#B89047] font-semibold uppercase tracking-wider hidden sm:inline">
                    {isAutoPlaying ? 'AUTO-CHANGING VIEWS' : 'AUTO-CHANGE PAUSED'}
                  </span>
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="text-[#5A6862] hover:text-[#B89047] transition-colors cursor-pointer pl-1"
                    title={isAutoPlaying ? 'Pause automatic change' : 'Resume automatic change'}
                  >
                    {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Masterplan Display Area */}
          <div className="relative aspect-[16/9] w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] overflow-hidden bg-[#F2EDE4]">
            {activeTab === '3d' ? (
              <Masterplan3D activeSector={activeSector} />
            ) : (
              <div className="relative w-full h-full group">
                <img
                  key={currentView.image}
                  src={currentView.image}
                  alt={currentView.title}
                  className="w-full h-full object-cover object-center transform transition-all duration-1000 ease-out animate-cinematic-push"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D2421]/70 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 pointer-events-none flex items-center space-x-2">
                  <span className="inline-block px-3 py-1.5 bg-[#B89047]/90 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-[0.2em] border border-white/20 rounded-xs shadow-sm">
                    {currentView.badge}
                  </span>
                  {isAutoPlaying && (
                    <span className="inline-block px-2 py-1 bg-white/90 backdrop-blur-md text-[#B89047] font-mono text-[9px] uppercase tracking-wider rounded-xs border border-[#C5A880]/30 shadow-xs">
                      AUTO-ROTATING
                    </span>
                  )}
                </div>

                {/* Interactive Hotspot Pins */}
                {currentView.hotspots && currentView.hotspots.map((pin, pIdx) => (
                  <div
                    key={pIdx}
                    style={{ top: pin.top, left: pin.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer z-10"
                  >
                    <div className="flex items-center space-x-2 bg-white/95 hover:bg-[#FAF8F5] backdrop-blur-md px-3 py-1.5 border border-[#C5A880]/50 rounded-xs shadow-lg transition-all hover:scale-105">
                      <span className="w-2 h-2 rounded-full bg-[#B89047] animate-ping shrink-0" />
                      <div className="text-left">
                        <div className="text-[10.5px] font-mono font-semibold text-[#1D2421] leading-tight whitespace-nowrap">
                          {pin.label}
                        </div>
                        {pin.sub && (
                          <div className="text-[9px] font-mono text-[#8C9E96] whitespace-nowrap">
                            {pin.sub}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Bottom View Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none flex items-end justify-between">
                  <div className="max-w-xl">
                    <div className="font-mono text-[10.5px] text-[#E8D8BA] uppercase tracking-widest mb-1 font-medium">
                      {currentView.subtitle}
                    </div>
                    <div className="font-sans text-[16px] sm:text-[18px] font-semibold text-white tracking-wide">
                      {currentView.title}
                    </div>
                    <p className="text-[12.5px] text-white/85 mt-1 font-normal line-clamp-2 hidden sm:block">
                      {currentView.desc}
                    </p>
                  </div>

                  {/* Visual Step Indicator (e.g. 1/4, 2/4, 3/4, 4/4) */}
                  <div className="hidden sm:flex items-center space-x-1 font-mono text-[11px] text-[#E8D8BA] bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-xs border border-white/10">
                    <span>VIEW 0{imageTabs.indexOf(activeTab) + 1} / 04</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Blueprint Engineering HUD Strip on Bottom */}
          <div className="p-4 sm:p-5 border-t border-[#EBE7DF] bg-[#FAF9F5] grid grid-cols-1 md:grid-cols-3 gap-4 text-[12.5px] text-[#4A5750] font-mono">
            <div className="flex items-center space-x-3">
              <Route className="w-4 h-4 text-[#B89047] shrink-0" />
              <span>40ft Central Boulevard · 30ft Residential Streets</span>
            </div>
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-4 h-4 text-[#B89047] shrink-0" />
              <span>100% Underground Cables & Concealed Storm Drainage</span>
            </div>
            <div className="flex items-center space-x-3">
              <Compass className="w-4 h-4 text-[#B89047] shrink-0" />
              <span>100% Vastu-Compliant East & West Villa Entrances</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

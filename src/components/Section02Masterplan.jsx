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
      subtitle: '189 Low-Density Split-Level Villas',
      image: '/images/masterplan/01_masterplan_aerial_10acres.jpg',
      badge: '10-Acre Masterplan Overview',
      desc: 'An aerial architectural masterplan showing the low-density community layout, wide tree-lined boulevards, central recreational pavilion, and perimeter green buffer.',
      hotspots: [
        { top: '42%', left: '52%', label: 'Central Clubhouse & 25m Pool', sub: '15,000 Sq.Ft Pavilion' },
        { top: '26%', left: '38%', label: 'North Grove (East Villas)', sub: '68 East-Facing Homes' },
        { top: '56%', left: '68%', label: 'South Grove (Garden Villas)', sub: '74 West-Facing Homes' },
        { top: '78%', left: '26%', label: '40ft Boulevard Main Entry', sub: 'Gated Security Roundabout' },
      ],
    },
    clubhouse: {
      id: 'clubhouse',
      title: 'Central Pavilion & Resort Clubhouse',
      subtitle: '15,000 Sq.Ft Recreational Heart',
      image: '/images/masterplan/02_masterplan_central_clubhouse.jpg',
      badge: 'Central Recreational Hub',
      desc: 'The social and leisure anchor of Antelia Groves featuring a 25m heated lap pool, outdoor amphitheater lawn, children’s play park, and professional tennis court.',
      hotspots: [
        { top: '48%', left: '42%', label: '25-Meter Heated Lap Pool', sub: 'Azure Water Court' },
        { top: '65%', left: '55%', label: 'Grass Amphitheater', sub: 'Community Gathering Lawn' },
        { top: '70%', left: '80%', label: 'Championship Tennis Court', sub: 'All-Weather Surface' },
      ],
    },
    north: {
      id: 'north',
      title: 'North Grove Residential Enclave',
      subtitle: 'East-Facing Vastu Homes',
      image: '/images/masterplan/03_masterplan_north_grove.jpg',
      badge: 'North Grove Sector',
      desc: 'A peaceful residential sector of 3 and 4 BHK villas designed with east-facing Vastu entrances, open rooftop terraces, and quiet 30-foot avenues.',
      hotspots: [
        { top: '35%', left: '46%', label: 'East-Facing Villas', sub: 'Morning Sunlight Living' },
        { top: '60%', left: '55%', label: '30ft Quiet Residential Streets', sub: 'Granite Kerbs & Landscaping' },
        { top: '28%', left: '74%', label: 'Corner Pocket Park', sub: 'Children Play & Gazebo' },
      ],
    },
    south: {
      id: 'south',
      title: 'South Grove & Sunset Garden Enclave',
      subtitle: 'Linear Central Park & Reflexology Trails',
      image: '/images/masterplan/04_masterplan_south_grove.jpg',
      badge: 'South Grove Sector',
      desc: 'An enclave of split-level villas framed by a continuous lush central linear park, wooden pergolas, reflexology walking trails, and flowering trees.',
      hotspots: [
        { top: '50%', left: '48%', label: 'Central Linear Green Park', sub: 'Pergolas & Water Feature' },
        { top: '38%', left: '28%', label: 'West-Facing Sunset Villas', sub: 'Private Rooftop Terraces' },
        { top: '68%', left: '78%', label: 'Reflexology Walking Path', sub: 'Stone Paved Nature Trail' },
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
      className="relative bg-white text-[#111827] py-5 sm:py-6 lg:py-8 overflow-hidden border-t border-gray-200 scroll-mt-[74px] font-sans lg:min-h-[calc(100vh-74px)] flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        
        {/* COMPACT SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-3 sm:mb-4 pb-3 border-b border-gray-200 gap-2">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 mb-1">
              <span className="w-4 h-[1.5px] bg-[#EA580C]" />
              <span className="font-mono text-[10.5px] font-semibold tracking-[0.25em] text-[#EA580C]">
                05 / The Masterplan
              </span>
            </div>
            <h2 className="font-display font-semibold text-[20px] sm:text-[26px] lg:text-[32px] tracking-display text-[#111827] leading-tight">
              A Community Planned Around Living
            </h2>
          </div>

          <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-[#4B5563] max-w-md md:text-right font-normal">
            10-acre gated sanctuary with split-level architecture, 40ft tree-lined avenues, and complete underground utilities.
          </p>
        </div>

        {/* 4 COMPACT KEY METRICS BAR */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-3.5 sm:mb-4">
          {[
            { tag: 'Total Scale', val: '10 Acres', sub: 'Gated Sanctuary' },
            { tag: 'Density', val: '189 Homes', sub: 'Low Density Layout' },
            { tag: 'Clubhouse', val: '15,000 Sq.Ft', sub: '25m Pool & Sports' },
            { tag: 'Avenues', val: '40 & 30 Ft', sub: 'Tree-Shaded Spines' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-2.5 sm:p-3 bg-white border border-gray-200 rounded-[14px] shadow-xs hover:border-[#EA580C] transition-all duration-300 flex items-center justify-between"
            >
              <div>
                <div className="text-[9px] font-mono tracking-widest text-[#EA580C] font-semibold">{item.tag}</div>
                <div className="text-[17px] sm:text-[20px] font-bold text-[#111827] mt-0.5 leading-tight">{item.val}</div>
              </div>
              <div className="text-[10px] text-[#6B7280] text-right font-mono hidden sm:block">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Masterplan Interactive Viewer Card */}
        <div className="relative rounded-[14px] overflow-hidden border border-gray-200 bg-white shadow-luxury">
          
          {/* Top Control Bar: Masterplan View Navigation Tabs */}
          <div className="p-2.5 sm:p-3 border-b border-gray-200 bg-[#FAFAF9] flex flex-wrap items-center justify-between gap-2">
            
            {/* View Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'aerial', label: '10-Acre Aerial' },
                { id: 'clubhouse', label: 'Central Clubhouse' },
                { id: 'north', label: 'North Grove' },
                { id: 'south', label: 'South Grove' },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`px-3.5 py-1 text-[10px] sm:text-[10.5px] font-mono tracking-wider rounded-full transition-all cursor-pointer relative ${
                      isActive
                        ? 'bg-[#EA580C] text-white font-bold shadow-sm'
                        : 'bg-white border border-gray-200 text-[#6B7280] hover:text-[#111827] hover:border-[#EA580C]/50'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {isActive && activeTab !== '3d' && isAutoPlaying && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#EA580C] border-2 border-white animate-pulse" />
                    )}
                  </button>
                );
              })}

              {/* Distinct 3D CAD MODEL Tab */}
              <button
                onClick={() => handleTabClick('3d')}
                className={`px-3.5 py-1 text-[10px] sm:text-[10.5px] font-mono tracking-wider rounded-full transition-all cursor-pointer flex items-center space-x-1 ml-0.5 ${
                  activeTab === '3d'
                    ? 'bg-[#EA580C] text-white font-semibold shadow-sm border border-[#EA580C]'
                    : 'bg-white border-2 border-[#EA580C] text-[#EA580C] hover:bg-[#FFF7ED] font-semibold'
                }`}
                title="Click to explore the interactive 3D model"
              >
                <Box className="w-3 h-3" />
                <span>3D CAD Model</span>
                {activeTab !== '3d' && (
                  <span className="text-[8.5px] font-mono bg-[#FFF7ED] text-[#EA580C] px-1.5 py-0.2 rounded-full ml-0.5 border border-[#FED7AA]">
                    Click
                  </span>
                )}
              </button>
            </div>

            {/* Right Status / Sector Controls */}
            <div className="flex items-center space-x-2">
              {activeTab === '3d' ? (
                /* Sector Filter when on 3D Mode */
                <div className="flex items-center space-x-1">
                  <span className="text-[9.5px] font-mono text-[#6B7280] tracking-wider hidden sm:inline">
                    Sector:
                  </span>
                  {[
                    { id: 'all', label: 'All' },
                    { id: 'north', label: 'North' },
                    { id: 'central', label: 'Clubhouse' },
                    { id: 'south', label: 'South' },
                  ].map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => setActiveSector(sec.id)}
                      className={`px-2.5 py-0.5 text-[9.5px] font-mono tracking-wider rounded-full transition-colors cursor-pointer ${
                        activeSector === sec.id
                          ? 'bg-[#EA580C] text-white font-bold'
                          : 'bg-white border border-gray-200 text-[#6B7280] hover:text-[#111827]'
                      }`}
                    >
                      {sec.label}
                    </button>
                  ))}
                </div>
              ) : (
                /* Auto-Cycling Indicator & Pause/Play Control for Image Views */
                <div className="flex items-center space-x-1.5 bg-white px-2.5 py-0.5 border border-gray-200 rounded-full shadow-xs">
                  <span className={`w-1.5 h-1.5 rounded-full ${isAutoPlaying ? 'bg-[#EA580C] animate-pulse' : 'bg-gray-400'}`} />
                  <span className="font-mono text-[9px] text-[#EA580C] font-semibold tracking-wider hidden sm:inline">
                    {isAutoPlaying ? 'Auto-Changing' : 'Paused'}
                  </span>
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="text-[#6B7280] hover:text-[#EA580C] transition-colors cursor-pointer pl-0.5"
                    title={isAutoPlaying ? 'Pause automatic change' : 'Resume automatic change'}
                    aria-label={isAutoPlaying ? 'Pause automatic change' : 'Resume automatic change'}
                  >
                    {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Masterplan Display Area (Calibrated Height for Viewport) */}
          <div className="relative aspect-[16/9] w-full min-h-[320px] sm:min-h-[350px] lg:h-[370px] xl:h-[390px] overflow-hidden bg-[#FAFAF9]">
            {activeTab === '3d' ? (
              <Masterplan3D activeSector={activeSector} />
            ) : (
              <div className="relative w-full h-full group">
                <img
                  key={currentView.image}
                  src={currentView.image}
                  alt={currentView.title}
                  className="w-full h-full object-cover object-center transform transition-all duration-1000 ease-out"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 pointer-events-none flex items-center space-x-2">
                  <span className="inline-block px-2.5 py-0.5 bg-white/95 backdrop-blur-md text-[#111827] font-mono text-[9px] tracking-[0.2em] border border-gray-200 rounded-xs shadow-sm font-semibold">
                    {currentView.badge}
                  </span>
                  {isAutoPlaying && (
                    <span className="inline-block px-2 py-0.5 bg-[#EA580C] backdrop-blur-md text-white font-mono text-[8.5px] tracking-wider rounded-xs shadow-xs font-semibold">
                      Auto-Rotating
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
                    <div className="flex items-center space-x-1.5 bg-white/95 hover:bg-white backdrop-blur-md px-2.5 py-1 border border-[#EA580C] rounded-xs shadow-md transition-all hover:scale-105">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-ping shrink-0" />
                      <div className="text-left">
                        <div className="text-[9.5px] font-mono font-semibold text-[#111827] leading-tight whitespace-nowrap">
                          {pin.label}
                        </div>
                        {pin.sub && (
                          <div className="text-[8.5px] font-mono text-[#6B7280] whitespace-nowrap">
                            {pin.sub}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Bottom View Title Overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none flex items-end justify-between">
                  <div className="max-w-xl">
                    <div className="font-mono text-[9.5px] text-[#FED7AA] tracking-widest mb-0.5 font-medium">
                      {currentView.subtitle}
                    </div>
                    <div className="font-sans text-[14px] sm:text-[16px] font-semibold text-white tracking-wide">
                      {currentView.title}
                    </div>
                  </div>

                  {/* Visual Step Indicator */}
                  <div className="hidden sm:flex items-center space-x-1 font-mono text-[10px] text-[#EA580C] bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded-xs border border-gray-200 font-semibold">
                    <span>View 0{imageTabs.indexOf(activeTab) + 1} / 04</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Blueprint Engineering HUD Strip on Bottom */}
          <div className="py-2.5 px-3.5 sm:px-4 border-t border-gray-200 bg-[#FAFAF9] grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px] sm:text-[11.5px] text-[#4B5563] font-mono">
            <div className="flex items-center space-x-2">
              <Route className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
              <span>40ft Central Boulevard · 30ft Streets</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
              <span>100% Underground Cables &amp; Drains</span>
            </div>
            <div className="flex items-center space-x-2">
              <Compass className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
              <span>100% Vastu-Compliant East/West Entries</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

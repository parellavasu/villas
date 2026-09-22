import React, { useState, useEffect } from 'react';
import {
  Compass,
  ShieldCheck,
  Trees,
  Users,
  Home,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  Sparkles
} from 'lucide-react';

export default function SectionAboutUs() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [viewMode, setViewMode] = useState('perspectives'); // 'perspectives' | 'pillars'
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // 4 Interactive Architectural Showcase Perspectives with Realistic 3D Renders
  const showcaseViews = [
    {
      id: 'villa-architecture',
      tabLabel: '01 / Architecture',
      shortTitle: 'Triplex Villa Form',
      title: 'Bespoke Triplex Split-Level Architecture',
      subtitle: 'Sculpted with floor-to-ceiling thermal glazing, floating stone porticos, and double-height living volumes.',
      tag: 'Master Architecture',
      image: '/images/about/01_about_architectural_villa.jpg',
      specs: [
        { label: 'Ceiling Height', value: '12.5 Ft' },
        { label: 'Levels', value: 'G + 2 Triplex' },
        { label: 'Orientation', value: '100% Vastu' },
      ],
      highlights: [
        'Floor-to-ceiling acoustic glass framing nature',
        'Floating natural travertine entrance plinth',
      ],
    },
    {
      id: 'biophilic-courtyard',
      tabLabel: '02 / Courtyards',
      shortTitle: 'Internal Zen Garden',
      title: 'Biophilic Courtyards & Daylight Lightwells',
      subtitle: 'Private open-to-sky courtyards integrated into the core of every villa, flooding living spaces with daylight.',
      tag: 'Biophilic Living',
      image: '/images/about/02_about_living_courtyard.jpg',
      specs: [
        { label: 'Natural Light', value: 'All 3 Levels' },
        { label: 'Green Core', value: 'Japanese Zen' },
        { label: 'Ventilation', value: 'Cross-Breeze' },
      ],
      highlights: [
        'Central open-to-sky Japanese zen garden core',
        'Continuous cross-ventilation across all three levels',
      ],
    },
    {
      id: 'dining-pavilion',
      tabLabel: '03 / Sanctuary',
      shortTitle: 'Dining & Gardens',
      title: 'Intimate Entertaining & Private Lawn',
      subtitle: 'Sunlit dining pavilions opening onto tranquil private landscaped lawns and warm acoustic timber finishes.',
      tag: 'Indoor-Outdoor',
      image: '/images/about/03_about_dining_zen.jpg',
      specs: [
        { label: 'Private Garden', value: '180–450 Sq.Ft' },
        { label: 'Timber Finish', value: 'Acoustic Teak' },
        { label: 'Layout', value: 'Open-Concept' },
      ],
      highlights: [
        'Sliding glass walls opening to landscaped private lawns',
        'Handcrafted artisanal dining pavilion with ambient coves',
      ],
    },
    {
      id: 'clubhouse-sanctuary',
      tabLabel: '04 / Clubhouse',
      shortTitle: '15,000+ Sq.Ft Club',
      title: 'Resort-Grade Clubhouse & Lap Pool',
      subtitle: 'A signature 15,000+ sq.ft community sanctuary with a 25-meter heated lap pool, fitness club, and wellness lounges.',
      tag: 'Community & Wellness',
      image: '/images/about/04_about_resort_clubhouse.jpg',
      specs: [
        { label: 'Clubhouse Area', value: '15,000+ Sq.Ft' },
        { label: 'Pool Length', value: '25-Meter Heated' },
        { label: 'Wellness', value: 'Spa & Gym' },
      ],
      highlights: [
        'Heated 25-meter lap pool with sun cabanas',
        'Rooftop terrace lounge overlooking the 10-acre canopy',
      ],
    },
  ];

  // 4 Core Principles: WHAT DEFINES THE PROJECT
  const principles = [
    {
      title: 'Space',
      desc: 'Triplex layouts with 12.5-ft ceilings, generous family lounges, and private executive work suites.',
      icon: Home,
      metric: 'Bespoke Triplex',
      image: '/images/about/06_about_craftsmanship_facade.jpg',
    },
    {
      title: 'Privacy',
      desc: 'Multi-level staggered planning with zero overlooking windows and private perimeter green buffers.',
      icon: ShieldCheck,
      metric: 'Zero Overlook',
      image: '/images/about/01_about_architectural_villa.jpg',
    },
    {
      title: 'Nature',
      desc: 'Private courtyards, plunge gardens, shaded walking groves, and 65% preserved botanical cover.',
      icon: Trees,
      metric: '65% Green Cover',
      image: '/images/about/07_about_biophilic_trail.jpg',
    },
    {
      title: 'Community',
      desc: 'An intimate 189-residence gated sanctuary anchored by a 15,000+ sq.ft. clubhouse, pool, and sports lawns.',
      icon: Users,
      metric: '189 Residences',
      image: '/images/about/04_about_resort_clubhouse.jpg',
    },
  ];

  // Auto-cycle timer (5.2 seconds) with pause on hover
  useEffect(() => {
    if (!isAutoPlaying || isHovered || viewMode !== 'perspectives') return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % showcaseViews.length);
    }, 5200);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, showcaseViews.length, viewMode]);

  const currentView = showcaseViews[activeSlide];

  return (
    <section
      id="about"
      className="relative bg-white text-[#111827] py-5 sm:py-6 lg:py-8 border-t border-gray-200 scroll-mt-[74px] overflow-hidden font-sans lg:min-h-[calc(100vh-74px)] flex flex-col justify-center"
    >
      {/* Background Subtle Luxury Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFF7ED]/70 rounded-full blur-3xl pointer-events-none -mr-28 -mt-28" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFF7ED]/50 rounded-full blur-3xl pointer-events-none -ml-28 -mb-28" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        
        {/* =========================================================
            1. SECTION HEADER: COMPACT HORIZONTAL ROW
            ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-3 sm:mb-4 pb-2.5 border-b border-gray-200 gap-2">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 mb-1">
              <span className="w-4 h-[1.5px] bg-[#EA580C]" />
              <span className="font-mono text-[10px] sm:text-[10.5px] font-semibold tracking-[0.14em] text-[#EA580C]">
                03 / About The Developer &amp; Architectural Vision
              </span>
            </div>

            <h2 className="font-display font-semibold text-[20px] sm:text-[26px] lg:text-[32px] leading-tight text-[#111827] tracking-display">
              Designed For Space.{' '}
              <span className="text-[#EA580C]">Scaled From Master Craftsmanship.</span>
            </h2>
          </div>

          {/* Mode Switcher: Perspectives vs 4 Pillars */}
          <div className="flex items-center space-x-1.5 p-1 bg-[#FAFAF9] border border-gray-200 rounded-full self-start lg:self-end">
            <button
              onClick={() => setViewMode('perspectives')}
              className={`px-3 py-1 font-mono text-[9.5px] tracking-wider rounded-full transition-colors cursor-pointer ${
                viewMode === 'perspectives'
                  ? 'bg-[#EA580C] text-white font-bold shadow-xs'
                  : 'text-[#6B7280] hover:text-[#111827]'
              }`}
            >
              Spatial Showcase
            </button>
            <button
              onClick={() => setViewMode('pillars')}
              className={`px-3 py-1 font-mono text-[9.5px] tracking-wider rounded-full transition-colors cursor-pointer ${
                viewMode === 'pillars'
                  ? 'bg-[#EA580C] text-white font-bold shadow-xs'
                  : 'text-[#6B7280] hover:text-[#111827]'
              }`}
            >
              The 4 Pillars
            </button>
          </div>
        </div>

        {/* =========================================================
            2. MAIN SHOWCASE CONTAINER (CALIBRATED TO VIEWPORT)
            ========================================================= */}
        {viewMode === 'perspectives' ? (
          <div
            className="bg-white border border-gray-200 rounded-[14px] shadow-luxury overflow-hidden mb-3 sm:mb-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Top Interactive Tabs Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-200 bg-[#FAFAF9]">
              {showcaseViews.map((view, idx) => {
                const isActive = activeSlide === idx;
                return (
                  <button
                    key={view.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`relative text-left py-2 px-3 sm:py-2.5 sm:px-4 transition-all duration-300 border-r border-gray-200 last:border-r-0 cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#111827]'
                        : 'text-[#6B7280] hover:text-[#111827] hover:bg-white/80'
                    }`}
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-[2.5px] transition-all duration-300 ${
                        isActive ? 'bg-[#EA580C]' : 'bg-transparent'
                      }`}
                    />

                    <div className="font-mono text-[8.5px] sm:text-[9px] tracking-[0.12em] font-semibold text-[#EA580C] mb-0.5">
                      {view.tabLabel}
                    </div>
                    <div className={`font-sans text-[11.5px] sm:text-[12.5px] font-semibold leading-tight line-clamp-1 ${
                      isActive ? 'text-[#111827]' : 'text-[#6B7280]'
                    }`}>
                      {view.shortTitle}
                    </div>

                    {/* Animated Progress Timer Line */}
                    {isActive && isAutoPlaying && !isHovered && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFF7ED] overflow-hidden">
                        <div
                          className="h-full bg-[#EA580C]"
                          style={{
                            animation: 'aboutProgress 5.2s linear infinite',
                          }}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Showcase Body: Split Visual & Architectural Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[310px] sm:min-h-[340px] lg:h-[350px] xl:h-[370px]">
              
              {/* Left Column: Photorealistic 3D Architectural Render */}
              <div className="lg:col-span-7 relative min-h-[230px] sm:min-h-[260px] lg:min-h-full h-full bg-[#FAFAF9] overflow-hidden group">
                {showcaseViews.map((view, idx) => {
                  const isCurrent = activeSlide === idx;
                  return (
                    <div
                      key={view.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        isCurrent ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                      }`}
                    >
                      <img
                        src={view.image}
                        alt={view.title}
                        className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-104"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-[#111827]/20 to-transparent" />
                    </div>
                  );
                })}

                {/* Floating Architectural Badge */}
                <div className="absolute top-2.5 left-2.5 z-20">
                  <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 bg-white/95 backdrop-blur-md border border-gray-200 text-[#111827] font-mono text-[8.5px] tracking-[0.1em] rounded-full shadow-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
                    <span>{currentView.tag}</span>
                  </span>
                </div>

                {/* Controls: Prev/Next & Play/Pause */}
                <div className="absolute bottom-2.5 right-2.5 z-20 flex items-center space-x-1 bg-white/95 backdrop-blur-md border border-gray-200 p-1 rounded-full shadow-xs">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSlide((prev) => (prev - 1 + showcaseViews.length) % showcaseViews.length);
                    }}
                    className="p-1 text-[#111827]/80 hover:text-[#EA580C] hover:bg-[#FFF7ED] rounded-full transition-colors cursor-pointer"
                    title="Previous View"
                    aria-label="Previous View"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsAutoPlaying(!isAutoPlaying);
                    }}
                    className="p-1 text-[#111827]/80 hover:text-[#EA580C] hover:bg-[#FFF7ED] rounded-full transition-colors cursor-pointer"
                    title={isAutoPlaying ? "Pause auto-rotation" : "Play auto-rotation"}
                    aria-label={isAutoPlaying ? "Pause auto-rotation" : "Play auto-rotation"}
                  >
                    {isAutoPlaying ? <Pause className="w-3 h-3 text-[#EA580C]" /> : <Play className="w-3 h-3 text-[#EA580C]" />}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSlide((prev) => (prev + 1) % showcaseViews.length);
                    }}
                    className="p-1 text-[#111827]/80 hover:text-[#EA580C] hover:bg-[#FFF7ED] rounded-full transition-colors cursor-pointer"
                    title="Next View"
                    aria-label="Next View"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Bottom Visual Caption */}
                <div className="absolute bottom-2.5 left-3 right-24 z-20 text-white pointer-events-none">
                  <div className="font-mono text-[8px] tracking-[0.14em] text-[#FED7AA] mb-0.5 font-semibold">
                    Realistic 3D Perspective
                  </div>
                  <div className="font-sans text-[12.5px] sm:text-[13.5px] font-semibold text-white drop-shadow-md line-clamp-1">
                    {currentView.title}
                  </div>
                </div>
              </div>

              {/* Right Column: Architectural Specifications & Philosophy */}
              <div className="lg:col-span-5 p-3.5 sm:p-4 lg:p-4.5 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l border-gray-200 overflow-hidden">
                <div>
                  <div className="inline-flex items-center space-x-1.5 mb-1">
                    <span className="w-3 h-[1.5px] bg-[#EA580C]" />
                    <span className="font-mono text-[9.5px] font-semibold text-[#EA580C] tracking-[0.12em]">
                      Architectural Blueprint
                    </span>
                  </div>

                  <h3 className="font-sans font-semibold text-[16px] sm:text-[17px] text-[#111827] leading-snug mb-1 line-clamp-1">
                    {currentView.title}
                  </h3>

                  <p className="font-sans text-[11.5px] sm:text-[12px] text-[#4B5563] leading-[1.5] mb-2 line-clamp-2">
                    {currentView.subtitle}
                  </p>

                  {/* Micro Specs Grid */}
                  <div className="grid grid-cols-3 gap-1.5 p-2 bg-[#FAFAF9] border border-gray-200 rounded-[14px] mb-2">
                    {currentView.specs.map((s, idx) => (
                      <div key={idx} className="text-center">
                        <div className="font-mono text-[8.5px] text-[#6B7280] tracking-wider mb-0.5">
                          {s.label}
                        </div>
                        <div className="font-sans text-[11.5px] sm:text-[12px] font-bold text-[#111827]">
                          {s.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key Architectural Highlights */}
                  <div className="space-y-1 mb-2">
                    <div className="font-mono text-[9px] font-semibold tracking-wider text-[#EA580C]">
                      Key Design Attributes
                    </div>
                    {currentView.highlights.slice(0, 3).map((h, idx) => (
                      <div key={idx} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C] shrink-0 mt-0.5" />
                        <span className="font-sans text-[11px] sm:text-[11.5px] text-[#4B5563] leading-tight line-clamp-1">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Quick Action */}
                <div className="pt-2 border-t border-gray-200 flex items-center justify-between">
                  <span className="font-mono text-[9.5px] text-[#6B7280]">
                    Perspective {activeSlide + 1} Of {showcaseViews.length}
                  </span>
                  <a
                    href="#masterplan"
                    className="inline-flex items-center space-x-1 font-mono text-[10px] font-semibold tracking-wider text-[#EA580C] hover:text-[#C2410C] transition-colors cursor-pointer"
                  >
                    <span>Explore Master Plan</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        ) : (
          /* Alternate Mode: The 4 Core Principles */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-3 sm:mb-4">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-[14px] overflow-hidden shadow-sm hover:border-[#EA580C] hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#FAFAF9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white">
                      <span className="font-mono text-[9px] tracking-wider text-[#FED7AA] font-bold">
                        Pillar 0{idx + 1}
                      </span>
                      <span className="font-mono text-[9px] bg-[#EA580C] px-2 py-0.5 rounded-full font-semibold">
                        {item.metric}
                      </span>
                    </div>
                  </div>

                  <div className="p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center text-[#EA580C] shrink-0">
                        <Icon className="w-3 h-3" />
                      </div>
                      <h4 className="font-sans text-[13px] font-bold tracking-[0.02em] text-[#111827]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="font-sans text-[11.5px] text-[#4B5563] leading-[1.45] line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* =========================================================
            3. 4-METRIC CREDIBILITY STRIP (COMPACT FOOTER)
            ========================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
          {[
            { metric: '10+', unit: 'Acres', title: 'Gated Botanical Sanctuary', desc: 'Secure perimeter & central grove' },
            { metric: '189', unit: 'Villas', title: 'Limited Edition Triplexes', desc: 'Low density for ultimate privacy' },
            { metric: '65%', unit: 'Open', title: 'Landscape & Green Canopy', desc: 'Native trees, parks & walkways' },
            { metric: '100%', unit: 'Vastu', title: 'Conscious Orientation', desc: 'Optimal daylighting & airflow' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-2 sm:p-2.5 bg-[#FAFAF9] border border-gray-200/90 rounded-[14px] hover:border-[#EA580C]/60 hover:bg-white transition-all shadow-2xs group flex items-center justify-between"
            >
              <div>
                <div className="flex items-baseline space-x-1">
                  <span className="font-sans text-[17px] sm:text-[19px] font-bold text-[#111827] tracking-tight group-hover:text-[#EA580C] transition-colors">
                    {stat.metric}
                  </span>
                  <span className="font-mono text-[9px] font-semibold text-[#EA580C] tracking-wider">
                    {stat.unit}
                  </span>
                </div>
                <div className="font-sans text-[10.5px] sm:text-[11px] font-semibold text-[#111827] leading-tight mt-0.5">
                  {stat.title}
                </div>
              </div>
              <div className="hidden sm:block text-[9.5px] font-mono text-[#6B7280] text-right max-w-[90px] leading-tight">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Embedded CSS Animation for the Tab Progress Line */}
      <style>{`
        @keyframes aboutProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import {
  Compass,
  ShieldCheck,
  Trees,
  Users,
  Home,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Award,
  CheckCircle2,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export default function SectionAboutUs() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // 4 Interactive Architectural Showcase Perspectives with Realistic 3D Renders
  const showcaseViews = [
    {
      id: 'villa-architecture',
      tabLabel: '01 / ARCHITECTURE',
      shortTitle: 'Triplex Villa Form',
      title: 'Bespoke Triplex Split-Level Architecture',
      subtitle: 'Sculpted with floor-to-ceiling thermal glazing, floating stone porticos, and double-height living volumes.',
      tag: 'MASTER ARCHITECTURE',
      image: '/images/about/01_about_architectural_villa.jpg',
      specs: [
        { label: 'Ceiling Height', value: '12.5 Ft' },
        { label: 'Levels', value: 'G + 2 Triplex' },
        { label: 'Orientation', value: '100% Vastu' },
      ],
      highlights: [
        'Expansive floor-to-ceiling acoustic glass walls',
        'Floating natural travertine entrance plinth',
        'Perimeter reflecting pool with warm underwater LED cove illumination',
      ],
    },
    {
      id: 'biophilic-courtyard',
      tabLabel: '02 / COURTYARDS',
      shortTitle: 'Internal Zen Garden',
      title: 'Biophilic Courtyards & Daylight Lightwells',
      subtitle: 'Private open-to-sky courtyards integrated into the core of every villa, flooding living spaces with daylight.',
      tag: 'BIOPHILIC LIVING',
      image: '/images/about/02_about_living_courtyard.jpg',
      specs: [
        { label: 'Natural Light', value: 'All 3 Levels' },
        { label: 'Green Core', value: 'Japanese Zen' },
        { label: 'Ventilation', value: 'Cross-Breeze' },
      ],
      highlights: [
        'Central open-to-sky Japanese zen garden with mature bonsai frangipani',
        'Continuous cross-ventilation corridors cooling interiors naturally',
        'Seamless transition between air-conditioned lounge and outdoor courtyard',
      ],
    },
    {
      id: 'dining-pavilion',
      tabLabel: '03 / SANCTUARY',
      shortTitle: 'Dining & Gardens',
      title: 'Intimate Entertaining & Private Lawn',
      subtitle: 'Sunlit dining pavilions opening onto tranquil private landscaped lawns and warm acoustic timber finishes.',
      tag: 'INDOOR-OUTDOOR',
      image: '/images/about/03_about_dining_zen.jpg',
      specs: [
        { label: 'Private Lawn', value: 'Up to 1,200 Sft' },
        { label: 'Timber Finish', value: 'Acoustic Teak' },
        { label: 'Layout', value: 'Open-Concept' },
      ],
      highlights: [
        'Floor-level sliding glass doors opening directly to the private garden',
        'Handcrafted artisanal dining pavilion with ambient ceiling cove lighting',
        'Private breakfast terrace catching the gentle morning sun',
      ],
    },
    {
      id: 'clubhouse-sanctuary',
      tabLabel: '04 / CLUBHOUSE',
      shortTitle: '20,000 Sft Club',
      title: 'Resort-Grade Clubhouse & Infinity Pool',
      subtitle: 'A majestic 20,000 sq.ft. community sanctuary offering Olympic-length swimming, rooftop lounges, and wellness spas.',
      tag: 'COMMUNITY & WELLNESS',
      image: '/images/about/04_about_resort_clubhouse.jpg',
      specs: [
        { label: 'Clubhouse Area', value: '20,000 Sft' },
        { label: 'Pool Type', value: 'Half-Olympic' },
        { label: 'Wellness', value: 'Spa & Gym' },
      ],
      highlights: [
        'Heated half-Olympic infinity swimming pool with sunken sun cabanas',
        'Rooftop stargazing terrace lounge overlooking the 10-acre green canopy',
        'Surrounded by shaded grove promenades and multi-tier botanical gardens',
      ],
    },
  ];

  // Auto-cycle timer (5 seconds) with pause on hover
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % showcaseViews.length);
    }, 5200);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, showcaseViews.length]);

  const currentView = showcaseViews[activeSlide];

  // 4 Core Principles: WHAT DEFINES THE PROJECT
  const principles = [
    {
      title: 'SPACE',
      desc: 'Spacious triplex layouts with 12.5-ft high ceilings, generous family lounges, and private home office suites.',
      icon: Home,
      metric: 'Bespoke Triplex',
    },
    {
      title: 'PRIVACY',
      desc: 'Multi-level staggered planning with zero overlooking windows, private perimeter green buffers, and secluded terraces.',
      icon: ShieldCheck,
      metric: 'Zero Overlook',
    },
    {
      title: 'NATURE',
      desc: 'Private internal courtyards, landscaped plunge gardens, shaded walking groves, and 65% open botanical green cover.',
      icon: Trees,
      metric: '65% Green Cover',
    },
    {
      title: 'COMMUNITY',
      desc: 'An intimate 76-family gated sanctuary anchored by a 20,000 sq.ft. clubhouse, infinity pool, and recreational lawns.',
      icon: Users,
      metric: '76 Elite Families',
    },
  ];

  // 3-Image Curated Spatial Experience
  const spatialGallery = [
    {
      label: 'ARCHITECTURE',
      title: 'Artisanal Facade & Split-Level Planning',
      image: '/images/about/06_about_craftsmanship_facade.jpg',
      caption: 'Precision stone masonry, architectural louvers, and private entry gates.',
    },
    {
      label: 'LANDSCAPE',
      title: 'Botanical Groves & Shaded Nature Trails',
      image: '/images/about/07_about_biophilic_trail.jpg',
      caption: 'Canopy-shaded jogging trails and therapeutic botanical groves.',
    },
    {
      label: 'THE ENCLAVE',
      title: '10-Acre Master Botanical Gated Sanctuary',
      image: '/images/about/05_about_aerial_enclave.jpg',
      caption: 'Low-density sanctuary of just 76 bespoke triplex luxury villas.',
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#FAFAF7] text-[#1D2421] py-14 sm:py-18 lg:py-22 border-t border-[#EBE7DF] scroll-mt-20 overflow-hidden font-sans"
    >
      {/* Background Subtle Luxury Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B89047]/5 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* =========================================================
            1. SECTION HEADER: EDITORIAL INTRO & HERITAGE
            ========================================================= */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          {/* Small Elegant Eyebrow */}
          <div className="inline-flex items-center space-x-2.5 mb-3">
            <span className="w-5 h-[2px] bg-[#B89047]" />
            <span className="font-mono text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] text-[#B89047] uppercase">
              ABOUT THE DEVELOPER &amp; ARCHITECTURAL VISION
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-sans font-semibold text-[26px] sm:text-[34px] lg:text-[40px] leading-[1.18] text-[#141917] tracking-[-0.02em] mb-4">
            DESIGNED FOR SPACE.<br />
            <span className="text-[#B89047]">SCALED FROM MASTER CRAFTSMANSHIP.</span>
          </h2>

          {/* Refined Narrative */}
          <p className="font-sans text-[15px] sm:text-[16px] leading-[1.65] text-[#4A5750]">
            Antelia Groves is born from a 12+ year legacy of bespoke residential architecture. Originating with 
            artisanal boutique homes under Krafted Homes, our philosophy has always centered on structural 
            perfection, conscious daylighting, and enduring materials. At Antelia Groves, we have scaled that 
            devotion into an ultra-low-density 10-acre botanical villa sanctuary.
          </p>
        </div>

        {/* =========================================================
            2. INTERACTIVE 3D ARCHITECTURAL SHOWCASE (WITH AUTO-CYCLE & REALISTIC RENDERS)
            ========================================================= */}
        <div
          className="mb-14 sm:mb-16 bg-white border border-[#E0DACF] rounded-xs shadow-md overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Top Interactive Tabs Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#EBE7DF] bg-[#FAF8F5]">
            {showcaseViews.map((view, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={view.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`relative text-left p-3.5 sm:p-4 transition-all duration-300 border-r border-[#EBE7DF] last:border-r-0 ${
                    isActive
                      ? 'bg-white text-[#141917]'
                      : 'text-[#5A6862] hover:text-[#141917] hover:bg-[#F4EFE6]/60'
                  }`}
                >
                  {/* Active Indicator Top Line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 ${
                      isActive ? 'bg-[#B89047]' : 'bg-transparent'
                    }`}
                  />

                  <div className="font-mono text-[10px] tracking-[0.16em] uppercase font-semibold text-[#B89047] mb-1">
                    {view.tabLabel}
                  </div>
                  <div className={`font-sans text-[13px] sm:text-[14px] font-semibold leading-tight line-clamp-1 ${
                    isActive ? 'text-[#141917]' : 'text-[#5A6862]'
                  }`}>
                    {view.shortTitle}
                  </div>

                  {/* Animated Progress Timer Line */}
                  {isActive && isAutoPlaying && !isHovered && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#EBE7DF] overflow-hidden">
                      <div
                        className="h-full bg-[#B89047]"
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
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Photorealistic 3D Architectural Render */}
            <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[400px] lg:min-h-[460px] bg-[#141917] overflow-hidden group">
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
                      className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141917]/80 via-[#141917]/20 to-transparent" />
                  </div>
                );
              })}

              {/* Floating Architectural Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#141917]/80 backdrop-blur-md border border-[#C5A880]/40 text-[#EBE7DF] font-mono text-[10px] uppercase tracking-[0.18em] rounded-xs shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B89047] animate-pulse" />
                  <span>{currentView.tag}</span>
                </span>
              </div>

              {/* Controls: Prev/Next & Play/Pause */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center space-x-1.5 bg-[#141917]/80 backdrop-blur-md border border-white/20 p-1 rounded-xs">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSlide((prev) => (prev - 1 + showcaseViews.length) % showcaseViews.length);
                  }}
                  className="p-1.5 text-white/80 hover:text-[#B89047] hover:bg-white/10 rounded-xs transition-colors"
                  title="Previous View"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsAutoPlaying(!isAutoPlaying);
                  }}
                  className="p-1.5 text-white/80 hover:text-[#B89047] hover:bg-white/10 rounded-xs transition-colors"
                  title={isAutoPlaying ? "Pause auto-rotation" : "Play auto-rotation"}
                >
                  {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSlide((prev) => (prev + 1) % showcaseViews.length);
                  }}
                  className="p-1.5 text-white/80 hover:text-[#B89047] hover:bg-white/10 rounded-xs transition-colors"
                  title="Next View"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Visual Caption */}
              <div className="absolute bottom-4 left-4 right-24 z-20 text-white pointer-events-none">
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#C5A880] mb-0.5">
                  REALISTIC 3D ARCHITECTURAL PERSPECTIVE
                </div>
                <div className="font-sans text-[14px] sm:text-[15px] font-semibold text-white drop-shadow-md line-clamp-1">
                  {currentView.title}
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Specifications & Philosophy */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
              <div>
                <div className="inline-flex items-center space-x-2 mb-2">
                  <span className="w-3 h-[1.5px] bg-[#B89047]" />
                  <span className="font-mono text-[11px] font-semibold text-[#B89047] tracking-[0.16em] uppercase">
                    ARCHITECTURAL BLUEPRINT
                  </span>
                </div>

                <h3 className="font-sans font-semibold text-[20px] sm:text-[23px] text-[#141917] leading-snug mb-3">
                  {currentView.title}
                </h3>

                <p className="font-sans text-[13.5px] sm:text-[14px] text-[#4A5750] leading-[1.65] mb-5">
                  {currentView.subtitle}
                </p>

                {/* Micro Specs Grid */}
                <div className="grid grid-cols-3 gap-2.5 p-3.5 bg-[#FAF8F5] border border-[#EBE7DF] rounded-xs mb-5">
                  {currentView.specs.map((s, idx) => (
                    <div key={idx} className="text-center">
                      <div className="font-mono text-[10px] uppercase text-[#73827B] tracking-wider mb-0.5">
                        {s.label}
                      </div>
                      <div className="font-sans text-[13px] sm:text-[13.5px] font-bold text-[#141917]">
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Architectural Highlights */}
                <div className="space-y-2.5 mb-6">
                  <div className="font-mono text-[10.5px] uppercase font-semibold tracking-wider text-[#141917]">
                    KEY DESIGN ATTRIBUTES
                  </div>
                  {currentView.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#B89047] shrink-0 mt-0.5" />
                      <span className="font-sans text-[12.5px] sm:text-[13px] text-[#4A5750] leading-snug">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-4 border-t border-[#EBE7DF] flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#73827B]">
                  PERSPECTIVE {activeSlide + 1} OF {showcaseViews.length}
                </span>
                <a
                  href="#masterplan"
                  className="inline-flex items-center space-x-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#B89047] hover:text-[#967433] transition-colors"
                >
                  <span>Explore Master Plan</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* =========================================================
            3. DEVELOPER CREDIBILITY & LEGACY STATS
            ========================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 mb-12 sm:mb-14">
          {[
            { metric: '10+', unit: 'ACRES', title: 'Gated Botanical Sanctuary', desc: 'Secure perimeter with central grove' },
            { metric: '76', unit: 'VILLAS', title: 'Limited Edition Triplexes', desc: 'Low density for ultimate privacy' },
            { metric: '65%', unit: 'OPEN', title: 'Landscape & Green Canopy', desc: 'Native trees, parks & walkways' },
            { metric: '100%', unit: 'VASTU', title: 'Conscious Orientation', desc: 'Optimal daylighting & airflow' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 bg-white border border-[#EBE7DF] rounded-xs shadow-subtle hover:border-[#B89047] transition-all duration-300 group"
            >
              <div className="flex items-baseline space-x-1 mb-1">
                <span className="font-sans text-[26px] sm:text-[32px] font-bold text-[#141917] tracking-tight group-hover:text-[#B89047] transition-colors">
                  {stat.metric}
                </span>
                <span className="font-mono text-[11px] font-semibold text-[#B89047] tracking-wider uppercase">
                  {stat.unit}
                </span>
              </div>
              <div className="font-sans text-[13px] sm:text-[14px] font-semibold text-[#141917] mb-0.5">
                {stat.title}
              </div>
              <div className="font-sans text-[12px] text-[#5A6862] leading-tight">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================
            4. “WHAT DEFINES US” (4 CORE DESIGN PILLARS)
            ========================================================= */}
        <div className="pt-8 border-t border-[#EBE7DF] mb-12 sm:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <div className="flex items-center space-x-2.5 mb-1.5">
                <span className="w-4 h-[1.5px] bg-[#B8A58A]" />
                <span className="font-mono text-[11px] sm:text-[11.5px] font-medium tracking-[0.16em] text-[#B89047] uppercase">
                  THE FOUR PILLARS
                </span>
              </div>
              <h3 className="font-sans font-semibold text-[22px] sm:text-[26px] text-[#141917]">
                What Defines Everyday Living at Antelia Groves
              </h3>
            </div>
            <span className="font-mono text-[11px] text-[#73827B] uppercase tracking-wider">
              CORE PHILOSOPHY
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-white border border-[#EBE7DF] rounded-xs hover:border-[#B89047] hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xs bg-[#FAF8F5] border border-[#EBE7DF] flex items-center justify-center text-[#B89047] group-hover:bg-[#B89047] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[9.5px] font-semibold text-[#8B9891] uppercase tracking-widest">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="font-sans text-[15px] font-bold uppercase tracking-[0.04em] text-[#141917] mb-2">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[13px] text-[#5A6862] leading-[1.6] mb-4">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#F0EBE1] flex items-center justify-between text-[#B89047] font-mono text-[11px] font-medium">
                    <span>{item.metric}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            5. CURATED SPATIAL GALLERY ROW (3 REALISTIC HIGH-FIDELITY CARDS)
            ========================================================= */}
        <div className="mb-12 sm:mb-14">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center space-x-2.5">
              <span className="w-4 h-[1.5px] bg-[#B8A58A]" />
              <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-[#B89047] uppercase">
                SPATIAL EXPERIENCES
              </span>
            </div>
            <span className="hidden sm:inline-block font-mono text-[11px] text-[#73827B]">
              HIGH RESOLUTION 3D PERSPECTIVES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {spatialGallery.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-xs border border-[#EBE7DF] overflow-hidden shadow-subtle hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#141917]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141917]/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Top Pill Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-0.5 bg-[#141917]/85 backdrop-blur-sm text-white font-mono text-[9.5px] uppercase tracking-[0.2em] border border-white/20 rounded-xs">
                      {item.label}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <h4 className="font-sans text-[14px] sm:text-[14.5px] font-semibold text-[#141917] mb-1 group-hover:text-[#B89047] transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="font-sans text-[12.5px] text-[#5A6862] leading-[1.5] line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            6. LIVING PHILOSOPHY & EVOLUTION STATEMENT PLINTH
            ========================================================= */}
        <div className="p-6 sm:p-8 bg-white border border-[#C5A880]/40 rounded-xs shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
          
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-2 mb-2">
              <span className="w-3.5 h-[1.5px] bg-[#B89047]" />
              <span className="font-mono text-[10.5px] sm:text-[11px] font-semibold tracking-[0.16em] text-[#B89047] uppercase">
                THE ANTELIA PHILOSOPHY
              </span>
            </div>
            <h3 className="font-sans font-bold text-[22px] sm:text-[25px] leading-tight text-[#141917] tracking-[-0.01em] mb-2">
              MORE SPACE TO LIVE. MORE REASONS TO STAY CONNECTED.
            </h3>
            <p className="font-sans text-[13.5px] sm:text-[14px] text-[#4A5750] leading-[1.6]">
              From sunlit internal lightwells and private courtyards to open rooftop lounges and community wellness avenues, 
              every square foot of Antelia Groves is calibrated around how real families live, work, celebrate, and rest.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href="#masterplan"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#B89047] hover:bg-[#967433] text-white font-mono text-[12px] font-semibold uppercase tracking-[0.14em] rounded-xs shadow-sm transition-all"
            >
              <span>Explore Master Plan</span>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white border border-[#B89047] text-[#B89047] hover:bg-[#FAF8F5] font-mono text-[12px] font-semibold uppercase tracking-[0.14em] rounded-xs transition-all"
            >
              <span>Our Heritage</span>
            </a>
          </div>

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

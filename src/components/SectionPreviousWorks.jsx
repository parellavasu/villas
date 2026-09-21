import React, { useState } from 'react';
import { 
  Building2, Home, Sparkles, CheckCircle2, ArrowRight, 
  Calendar, Layers, ShieldCheck, MapPin, Award, ArrowUpRight
} from 'lucide-react';

export default function SectionPreviousWorks({ onOpenBooking, onExploreVillas }) {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'krafted' | 'antelia'
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const projects = [
    {
      id: 1,
      category: 'krafted',
      tag: 'KRAFTED HOMES · COMPLETED',
      status: 'SOLD OUT & OCCUPIED',
      title: 'The Artisan Residences',
      subtitle: 'BOUTIQUE INDIVIDUAL HOMES',
      era: '2019 – 2021',
      scale: '1,400 – 1,800 Sq.Ft',
      units: 'Boutique Cluster',
      description: 'Our foundational residential venture under Krafted Homes: compact, individually crafted residences designed with exposed terracotta brick, solid teak doors, and private courtyard gardens.',
      image: '/images/portfolio/01_krafted_artisan.jpg',
      highlights: [
        '100% On-Time Delivery & Handover',
        'Handcrafted Terracotta & Teak Details',
        'Private Landscaped Backyard Sit-Out'
      ],
    },
    {
      id: 2,
      category: 'krafted',
      tag: 'KRAFTED HOMES · COMPLETED',
      status: 'SOLD OUT & OCCUPIED',
      title: 'Urban Row Enclaves',
      subtitle: 'CONTEMPORARY COMPACT CLUSTER',
      era: '2021 – 2023',
      scale: '1,650 – 2,100 Sq.Ft',
      units: 'Gated Enclave',
      description: 'Carefully planned modern cluster homes offering young families smart split-level living, private terrace balconies, natural cross-ventilation, and dedicated covered car parking.',
      image: '/images/portfolio/02_krafted_row_homes.jpg',
      highlights: [
        'Delivered with Zero Snags & Full Occupancy',
        'Smart Split-Level Floor Articulation',
        'Covered Stilt Parking & Private Balconies'
      ],
    },
    {
      id: 3,
      category: 'krafted',
      tag: 'KRAFTED HOMES · COMPLETED',
      status: 'SOLD OUT & OCCUPIED',
      title: 'Green Courtyard Townhomes',
      subtitle: 'ECO-CENTRIC RESIDENCES',
      era: '2022 – 2024',
      scale: '1,800 – 2,250 Sq.Ft',
      units: 'Artisan Gated Community',
      description: 'Boutique residences integrating sustainable living: rainwater harvesting percolation, solar-ready terrace infrastructure, and peaceful landscaped stone pathways.',
      image: '/images/portfolio/03_krafted_courtyard.jpg',
      highlights: [
        '100% Rainwater Recharging Integration',
        'Handcrafted Natural Stone Pathways',
        'High Resale & Customer Satisfaction'
      ],
    },
    {
      id: 4,
      category: 'antelia',
      tag: 'ANTELIA GROVES · CURRENT FLAGSHIP',
      status: 'CURRENTLY IMPLEMENTING',
      title: 'Independent Luxury Villas',
      subtitle: 'SPLIT-LEVEL ARCHITECTURAL MASTERPIECES',
      era: '2024 – PRESENT',
      scale: '2,262 – 3,000 Sq.Ft',
      units: '189 Bespoke Villas',
      description: 'The monumental evolution: 3 & 4 BHK independent residences featuring 18-foot soaring double-height living foyers, private 180+ sq.ft rear gardens, executive study, and open-air rooftop lounges.',
      image: '/images/portfolio/04_antelia_flagship_villa.jpg',
      highlights: [
        'Earthquake-Resistant RCC Framing',
        'Double-Height Glass Living Volumes',
        '100% East & West Vastu-Compliant Entries'
      ],
    },
    {
      id: 5,
      category: 'antelia',
      tag: 'ANTELIA GROVES · CURRENT FLAGSHIP',
      status: 'CENTRAL AMENITY',
      title: '15,000 Sq.Ft Resort Clubhouse',
      subtitle: 'SIGNATURE RECREATIONAL HUB',
      era: 'FLAGSHIP CENTERPIECE',
      scale: '15,000+ Sq.Ft Footprint',
      units: 'Comprehensive Lifestyle',
      description: 'A multi-tier resort sanctuary anchored by a 25-meter heated turquoise lap pool, grass amphitheater lawn, championship tennis court, wellness gym, and banquet hall.',
      image: '/images/portfolio/05_antelia_resort_clubhouse.jpg',
      highlights: [
        '25m Heated Lap Pool & Poolside Cabanas',
        'Championship Tennis & Pickleball Court',
        'Terraced Outdoor Community Amphitheater'
      ],
    },
    {
      id: 6,
      category: 'antelia',
      tag: 'ANTELIA GROVES · CURRENT FLAGSHIP',
      status: '10-ACRE SANCTUARY',
      title: '10-Acre Masterplanned Community',
      subtitle: 'AN ARCHITECTURAL COMMUNITY IN NATURE',
      era: 'GRAND SCALE',
      scale: '10 Contiguous Acres',
      units: '189 Plotted Residences',
      description: 'The crowning achievement of our evolution: a low-density sanctuary with 40-foot tree-lined boulevards, 100% underground cables, and over 45% preserved green open space.',
      image: '/images/portfolio/06_antelia_10acre_sanctuary.jpg',
      highlights: [
        '40ft & 30ft Tree-Shaded Avenue Spines',
        '100% Underground Utilities & Fiber Grid',
        'Over 45% Green Open Space & 1,200+ Trees'
      ],
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  // Keep index valid when filter changes
  const activeProject = filteredProjects[activeProjectIdx] || filteredProjects[0] || projects[0];

  return (
    <section
      id="portfolio"
      className="relative bg-white text-[#111827] py-5 sm:py-6 lg:py-8 border-t border-gray-200 scroll-mt-[74px] overflow-hidden font-sans lg:min-h-[calc(100vh-74px)] flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        
        {/* SECTION HEADER: COMPACT HORIZONTAL ROW */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-3 sm:mb-4 pb-2.5 border-b border-gray-200 gap-2">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 mb-1">
              <span className="w-4 h-[1.5px] bg-[#EA580C]" />
              <span className="font-mono text-[10px] sm:text-[10.5px] font-semibold tracking-[0.25em] text-[#EA580C] uppercase">
                07 / OUR LEGACY &amp; PORTFOLIO
              </span>
            </div>

            <h2 className="font-sans font-semibold text-[20px] sm:text-[23px] lg:text-[26px] leading-tight text-[#111827] tracking-tight">
              FROM KRAFTED HOMES TO ANTELIA GROVES
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-0.5 bg-[#FAFAF9] border border-gray-200 rounded-xs">
            {[
              { id: 'all', label: 'ALL WORKS (6)' },
              { id: 'krafted', label: 'KRAFTED (LEGACY)' },
              { id: 'antelia', label: 'ANTELIA (CURRENT)' },
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveFilter(tab.id);
                    setActiveProjectIdx(0);
                  }}
                  className={`px-3 py-1 text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider rounded-xs transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#EA580C] text-white font-bold shadow-xs'
                      : 'text-[#6B7280] hover:text-[#111827]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN INTERACTIVE SHOWCASE CONTAINER (CALIBRATED TO VIEWPORT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch mb-3 sm:mb-4">
          
          {/* Left Column: Interactive Project Selector List (4.5 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-1.5 justify-between">
            {filteredProjects.map((p, idx) => {
              const isSelected = activeProject.id === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveProjectIdx(idx)}
                  className={`text-left p-2 sm:p-2.5 rounded-xs border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#FFF7ED] border-[#EA580C] shadow-xs ring-1 ring-[#EA580C]/20'
                      : 'bg-white border-gray-200 hover:border-[#EA580C]/40 hover:bg-[#FAFAF9]'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <span className={`font-mono text-[9.5px] font-semibold ${isSelected ? 'text-[#EA580C]' : 'text-gray-400'}`}>
                      0{p.id}
                    </span>
                    <div>
                      <div className={`font-sans text-[12px] sm:text-[12.5px] font-semibold leading-tight line-clamp-1 ${
                        isSelected ? 'text-[#111827]' : 'text-[#4B5563] group-hover:text-[#111827]'
                      }`}>
                        {p.title}
                      </div>
                      <div className="font-mono text-[9px] text-[#6B7280]">
                        {p.era} · {p.scale}
                      </div>
                    </div>
                  </div>

                  <span className={`font-mono text-[8.5px] uppercase tracking-wider px-1.5 py-0.5 rounded-xs shrink-0 ml-1 ${
                    p.category === 'antelia'
                      ? 'bg-[#EA580C] text-white font-bold'
                      : 'bg-gray-100 text-[#4B5563]'
                  }`}>
                    {p.category === 'antelia' ? 'FLAGSHIP' : 'DELIVERED'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Featured Selected Project Showcase Card (7.5 cols) */}
          <div className="lg:col-span-8 bg-white border border-gray-200 rounded-sm shadow-luxury overflow-hidden flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-12 h-full min-h-[280px] lg:h-[340px]">
              
              {/* Visual Render Container */}
              <div className="md:col-span-7 relative bg-[#FAFAF9] overflow-hidden group">
                <img
                  key={activeProject.image}
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-block px-2.5 py-0.5 bg-white/95 backdrop-blur-sm text-[#111827] font-mono text-[8.5px] uppercase tracking-[0.16em] border border-gray-200 rounded-xs font-semibold">
                    {activeProject.tag}
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 text-white pointer-events-none">
                  <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#FED7AA] font-bold">
                    {activeProject.subtitle}
                  </div>
                  <div className="font-sans text-[14px] sm:text-[15px] font-semibold text-white drop-shadow-md">
                    {activeProject.title}
                  </div>
                </div>
              </div>

              {/* Project Blueprint Details */}
              <div className="md:col-span-5 p-3.5 sm:p-4 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-200 bg-white">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#EA580C] font-semibold">
                      PROJECT SPECIFICATIONS
                    </span>
                    <span className="font-mono text-[9px] text-[#6B7280]">
                      {activeProject.era}
                    </span>
                  </div>

                  <p className="font-sans text-[11.5px] sm:text-[12px] text-[#4B5563] leading-[1.5] mb-2.5 line-clamp-3">
                    {activeProject.description}
                  </p>

                  <div className="space-y-1 mb-2.5">
                    <div className="font-mono text-[8.5px] uppercase font-semibold tracking-wider text-[#111827]">
                      VERIFIED ATTRIBUTES
                    </div>
                    {activeProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C] shrink-0 mt-0.5" />
                        <span className="font-sans text-[11px] text-[#4B5563] leading-snug line-clamp-1">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-200 flex items-center justify-between">
                  <div className="font-mono text-[9px] text-[#6B7280]">
                    SCALE: <span className="text-[#111827] font-bold">{activeProject.scale}</span>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center space-x-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#EA580C] hover:text-[#C2410C] transition-colors cursor-pointer"
                  >
                    <span>Consult Architect</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 4 EVOLUTION METRICS FOOTER STRIP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
          {[
            { num: 'KRAFTED HOMES', title: 'Where It Began', detail: 'Boutique artisan roots' },
            { num: '100% DELIVERED', title: 'Flawless Record', detail: 'Sold out & handed over' },
            { num: '120+ FAMILIES', title: 'Happy Owners', detail: 'Thriving past communities' },
            { num: 'ANTELIA GROVES', title: 'The Flagship Leap', detail: '10 Acres · 189 Villas' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-2 sm:p-2.5 bg-[#FAFAF9] border border-gray-200/90 rounded-xs hover:border-[#EA580C]/60 hover:bg-white transition-all shadow-2xs group flex items-center justify-between"
            >
              <div>
                <div className="text-[13px] sm:text-[14px] font-sans font-bold text-[#EA580C] tracking-tight leading-tight">
                  {item.num}
                </div>
                <div className="text-[10px] font-sans font-semibold text-[#111827] uppercase tracking-wide mt-0.5">
                  {item.title}
                </div>
              </div>
              <div className="hidden sm:block text-[9.5px] font-mono text-[#6B7280] text-right max-w-[90px] leading-tight">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

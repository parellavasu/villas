import React, { useState } from 'react';
import { 
  Building2, Home, Sparkles, CheckCircle2, ArrowRight, 
  Calendar, Layers, ShieldCheck, MapPin, Award, ArrowUpRight
} from 'lucide-react';

export default function SectionPreviousWorks({ onOpenBooking, onExploreVillas }) {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'krafted' | 'antelia'
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      category: 'krafted',
      tag: 'KRAFTED HOMES · COMPLETED',
      status: 'SOLD OUT & OCCUPIED',
      statusColor: 'bg-[#2E5A44] text-white',
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
      statusColor: 'bg-[#2E5A44] text-white',
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
      statusColor: 'bg-[#2E5A44] text-white',
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
      statusColor: 'bg-[#B89047] text-white',
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
      statusColor: 'bg-[#B89047] text-white',
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
      statusColor: 'bg-[#B89047] text-white',
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

  return (
    <section
      id="portfolio"
      className="relative bg-[#FFFFFF] text-[#1D2421] py-14 sm:py-16 lg:py-20 border-t border-[#EBE7DF] scroll-mt-20 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* =========================================================
            1. SECTION HEADER: OUR EVOLUTION STORY
            ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-[#EBE7DF]">
          <div className="max-w-2xl">
            
            <div className="inline-flex items-center space-x-2.5 mb-2.5">
              <span className="w-5 h-[1.5px] bg-[#C5A880]" />
              <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-[#B89047] uppercase">
                07 / OUR LEGACY & PORTFOLIO
              </span>
            </div>

            <h2 className="font-sans font-semibold text-[28px] sm:text-[34px] lg:text-[38px] leading-tight text-[#1D2421] tracking-tight mb-2">
              FROM KRAFTED HOMES TO ANTELIA GROVES
            </h2>

            <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#5A6862] max-w-xl font-normal">
              From building thoughtful boutique homes under Krafted Homes to creating a 10-acre luxury villa sanctuary at Antelia Groves — our evolution is built on trust, quality, and timeless architecture.
            </p>

          </div>

          {/* Quick Filter Tabs */}
          <div className="mt-5 md:mt-0 flex flex-wrap items-center gap-1.5 p-1 bg-[#FAF9F5] border border-[#EBE7DF] rounded-xs">
            {[
              { id: 'all', label: 'ALL WORKS (6)' },
              { id: 'krafted', label: 'KRAFTED HOMES (LEGACY)' },
              { id: 'antelia', label: 'ANTELIA GROVES (CURRENT)' },
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded-xs transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#B89047] text-white font-semibold shadow-xs'
                      : 'bg-transparent text-[#5A6862] hover:text-[#1D2421]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            2. THE EVOLUTION METRICS STRIP (TRUST & SCALE)
            ========================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {[
            {
              num: 'KRAFTED HOMES',
              title: 'Where It Began',
              detail: 'Boutique artisan homes built with care',
            },
            {
              num: '100% DELIVERED',
              title: 'Flawless Track Record',
              detail: 'Sold out & handed over on schedule',
            },
            {
              num: '120+ FAMILIES',
              title: 'Happy Homeowners',
              detail: 'Thriving in our past communities',
            },
            {
              num: 'ANTELIA GROVES',
              title: 'The Flagship Leap',
              detail: '10 Acres · 189 Luxury Villas Sanctuary',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 bg-[#FAFAF7] border border-[#EBE7DF] rounded-xs shadow-xs"
            >
              <div className="text-[17px] sm:text-[20px] lg:text-[22px] font-sans font-bold text-[#B89047] tracking-tight leading-snug">
                {item.num}
              </div>
              <div className="text-[11.5px] font-sans font-semibold text-[#1D2421] uppercase tracking-wide mt-1">
                {item.title}
              </div>
              <div className="text-[11px] font-sans text-[#5A6862] mt-0.5">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================
            3. BRAND EVOLUTION COMPARISON CARD (THE STORY)
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 bg-[#FAF9F5] border border-[#EBE7DF] rounded-xs mb-10">
          
          <div className="lg:col-span-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#EBE7DF] pb-5 lg:pb-0 lg:pr-8">
            <div>
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-stone-200/70 text-[#1D2421] text-[10px] font-mono uppercase tracking-widest rounded-xs mb-3">
                <span>STAGE 1: THE FOUNDATION</span>
              </div>
              <h3 className="font-sans text-[20px] sm:text-[22px] font-semibold text-[#1D2421] mb-2">
                Krafted Homes (Boutique Residences)
              </h3>
              <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#5A6862]">
                We began with a clear purpose: building bespoke, compact individual houses with uncompromising structural honesty. Every brick was laid with pride, every doorway carved from real timber, and every project delivered with complete customer transparency. All homes were rapidly sold out, establishing a rock-solid foundation of homeowner trust.
              </p>
            </div>
            <div className="mt-4 flex items-center space-x-4 text-[11.5px] font-mono text-[#8C9E96]">
              <span>• Boutique Scale</span>
              <span>• 100% Sold & Occupied</span>
              <span>• Zero Delivery Delays</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between pt-2 lg:pt-0 lg:pl-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-[#B89047]/15 text-[#B89047] text-[10px] font-mono uppercase tracking-widest rounded-xs mb-3 font-semibold">
                <span>STAGE 2: THE EVOLUTION</span>
              </div>
              <h3 className="font-sans text-[20px] sm:text-[22px] font-semibold text-[#1D2421] mb-2">
                Antelia Groves (10-Acre Luxury Villa Sanctuary)
              </h3>
              <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#5A6862]">
                Having mastered individual home construction, we evolved our vision into Antelia Groves. We scaled our design philosophy to an expansive 10-acre gated ecosystem: 189 split-level independent villas, 18-foot double-height living foyers, private gardens, and a 15,000 sq.ft resort clubhouse, all nestled within protected forest greenery.
              </p>
            </div>
            <div className="mt-4 flex items-center space-x-4 text-[11.5px] font-mono text-[#B89047] font-semibold">
              <span>• 10 Contiguous Acres</span>
              <span>• 189 Independent Villas</span>
              <span>• Resort Clubhouse & Pool</span>
            </div>
          </div>

        </div>

        {/* =========================================================
            4. 6-CARD PORTFOLIO GALLERY GRID
            ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-[#EBE7DF] rounded-xs overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F2EDE4]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D2421]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Status Badges */}
                  <div className="absolute top-3 left-3 flex items-center space-x-2">
                    <span className={`px-2.5 py-1 text-[9.5px] font-mono uppercase tracking-wider rounded-xs font-semibold shadow-xs ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3.5 right-3.5 text-white pointer-events-none flex items-end justify-between">
                    <div>
                      <div className="text-[9.5px] font-mono text-[#E8D8BA] uppercase tracking-wider">
                        {project.tag}
                      </div>
                      <div className="text-[15px] font-sans font-semibold text-white leading-tight">
                        {project.title}
                      </div>
                    </div>
                    <div className="text-[10px] font-mono text-white/90">
                      {project.scale}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#B89047] font-semibold mb-1">
                    {project.subtitle}
                  </div>
                  <p className="text-[13px] leading-relaxed text-[#5A6862] mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#F1EFEA]">
                    {project.highlights.map((item, i) => (
                      <div key={i} className="flex items-center space-x-2 text-[12px] text-[#4A5750]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B89047] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-[#F8F7F4]">
                <span className="text-[10.5px] font-mono text-[#8C9E96] uppercase tracking-wider">
                  {project.era}
                </span>
                {project.category === 'antelia' ? (
                  <button
                    onClick={() => {
                      if (onExploreVillas) onExploreVillas();
                    }}
                    className="inline-flex items-center space-x-1 text-[11px] font-mono text-[#B89047] hover:text-[#967433] font-semibold uppercase tracking-wider cursor-pointer"
                  >
                    <span>VIEW VILLA SPECS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="text-[10.5px] font-mono text-[#2E5A44] font-semibold uppercase tracking-wider">
                    COMPLETED & DELIVERED ✓
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================
            5. BOTTOM INVITATION BANNER
            ========================================================= */}
        <div className="p-6 sm:p-8 bg-[#FAF9F5] border border-[#C5A880]/40 rounded-xs flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="max-w-xl text-center md:text-left">
            <div className="font-mono text-[10.5px] text-[#B89047] uppercase tracking-widest font-semibold mb-1">
              EXPERIENCE THE EVOLUTION IN PERSON
            </div>
            <h3 className="font-sans text-[20px] sm:text-[24px] font-semibold text-[#1D2421]">
              Ready to Explore Antelia Groves?
            </h3>
            <p className="text-[13.5px] text-[#5A6862] mt-1">
              Book a private on-site architectural tour and explore how our construction quality has evolved into South Bengaluru’s finest villa community.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-[#B89047] hover:bg-[#967433] text-white text-[11.5px] font-semibold uppercase tracking-[0.18em] rounded-xs transition-colors shadow-subtle cursor-pointer"
            >
              SCHEDULE A VISIT
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

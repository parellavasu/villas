import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { PROJECT_MEDIA } from '../config/projectMedia';

export default function Section01Vision({ onExploreJourney, onExploreVillas, onExploreMasterplan }) {
  const [activeHeroIdx, setActiveHeroIdx] = useState(0);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null);

  const heroMediaList = (PROJECT_MEDIA && PROJECT_MEDIA.hero && PROJECT_MEDIA.hero.length > 0)
    ? PROJECT_MEDIA.hero
    : [
        {
          key: 'HERO_VILLA_EXTERIOR',
          title: 'CONTEMPORARY VILLA FACADE',
          subtitle: 'Travertine Stone, Teak Louvers & Landscaped Entrance',
          url: '/images/hero/01_hero_villa_exterior.jpg',
        },
        {
          key: 'HERO_LIVING_PAVILION',
          title: 'DOUBLE-HEIGHT LIVING PAVILION',
          subtitle: '18-Foot Soaring Volume Opening to Courtyard Pool',
          url: '/images/hero/02_hero_living_pavilion.jpg',
        },
        {
          key: 'HERO_COURTYARD_DINING',
          title: 'COURTYARD DINING & DECK',
          subtitle: 'Indoor-Outdoor Spatial Entertaining Harmony',
          url: '/images/hero/03_hero_dining_courtyard.jpg',
        },
        {
          key: 'HERO_SIGNATURE_CLUBHOUSE',
          title: '15,000 SQ.FT RESORT CLUBHOUSE',
          subtitle: '25-Meter Heated Lap Pool, Amphitheater & Wellness',
          url: '/images/hero/04_hero_clubhouse_pool.jpg',
        },
        {
          key: 'HERO_SUNSET_ENCLAVE',
          title: 'SUNSET GARDEN RESIDENCES',
          subtitle: 'Split-Level Rooftop Terraces Framing Linear Green Park',
          url: '/images/hero/05_hero_sunset_enclave.jpg',
        },
        {
          key: 'HERO_AERIAL_MASTERPLAN',
          title: '10-ACRE AERIAL SANCTUARY',
          subtitle: 'Low-Density Gated Villa Masterplan with 40ft Boulevards',
          url: '/images/hero/06_hero_aerial_sanctuary.jpg',
        },
      ];

  // Initial load animation trigger
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Automatic image slideshow (changes smoothly every 5.5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroIdx((prev) => (prev + 1) % heroMediaList.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [heroMediaList.length]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setParallax({ x, y });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  // 4 Project Facts
  const projectFacts = [
    {
      num: '10+ ACRES',
      title: 'Gated Community',
      detail: 'Low-density planned enclave',
    },
    {
      num: '3 & 4 BHK',
      title: 'Independent Villas',
      detail: 'Split-level private residences',
    },
    {
      num: '2262–3000 SQ.FT.',
      title: 'BUA Range',
      detail: 'Articulated spatial layouts',
    },
    {
      num: '15,000+ SQ.FT.',
      title: 'Signature Clubhouse',
      detail: '25m heated pool & wellness',
    },
  ];

  return (
    <div
      id="vision"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[100dvh] h-[100dvh] max-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#F7F6F2] text-[#1D2421] scroll-mt-20 select-none font-sans"
    >
      {/* =========================================================
          1. FULL CANVAS SEAMLESSLY BLENDED AUTOMATIC IMAGE ROTATION
          Clean, unobstructed luxury visuals. No boxes, no clutter.
          ========================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {heroMediaList.map((media, idx) => (
          <div
            key={media.key || idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1200 ease-out ${
              activeHeroIdx === idx ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: `scale(${activeHeroIdx === idx ? 1.03 : 1.0}) translate3d(${
                -parallax.x * 8
              }px, ${-parallax.y * 5}px, 0)`,
              transition:
                activeHeroIdx === idx
                  ? 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1200ms ease-out'
                  : 'opacity 1200ms ease-out',
            }}
          >
            <img
              src={media.url}
              alt={media.title || 'Antelia Groves Luxury Architecture'}
              className="w-full h-full object-cover object-[70%_center] sm:object-[66%_center] lg:object-[62%_center] animate-cinematic-push"
            />
          </div>
        ))}

        {/* 
          Ultra-Smooth Multi-Stop Horizontal Ivory Gradient
          Fades from solid #F7F6F2 on the left into 100% transparent on the right.
          Zero hard borders. Natural, seamless architectural blending.
        */}
        <div
          className="absolute inset-0 z-10 pointer-events-none hidden sm:block"
          style={{
            background:
              'linear-gradient(to right, #F7F6F2 0%, #F7F6F2 28%, rgba(247, 246, 242, 0.94) 38%, rgba(247, 246, 242, 0.72) 48%, rgba(247, 246, 242, 0.35) 60%, rgba(247, 246, 242, 0.1) 70%, rgba(247, 246, 242, 0) 80%)',
          }}
        />

        {/* Mobile-specific smooth top-to-bottom dissolve */}
        <div
          className="absolute inset-0 z-10 pointer-events-none sm:hidden"
          style={{
            background:
              'linear-gradient(to bottom, #F7F6F2 0%, #F7F6F2 42%, rgba(247, 246, 242, 0.85) 55%, rgba(247, 246, 242, 0.3) 70%, transparent 85%)',
          }}
        />

        {/* Top Header Transition Fade */}
        <div
          className="absolute top-0 inset-x-0 h-20 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(247, 246, 242, 0.85) 0%, rgba(247, 246, 242, 0.3) 50%, transparent 100%)',
          }}
        />

        {/* Bottom Transition connecting to Facts Strip */}
        <div
          className="absolute bottom-0 inset-x-0 h-20 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, #F7F6F2 0%, rgba(247, 246, 242, 0.85) 45%, transparent 100%)',
          }}
        />
      </div>

      {/* =========================================================
          2. MAIN FOREGROUND: LEFT-ALIGNED EDITORIAL TEXT
          Calibrated vertical padding so 100% of hero + facts fit in 100vh
          ========================================================= */}
      <div
        className="relative z-20 pt-[74px] flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-8 w-full min-h-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center py-2 sm:py-3">
          
          {/* LEFT CONTENT COLUMN (~60% width on large screens) */}
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col justify-center">
            
            {/* 01 / THE VISION Eyebrow */}
            <div
              className={`flex items-center space-x-2 text-[10.5px] font-mono tracking-[0.25em] text-[#5A6862] uppercase mb-2 transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <span className="w-4 h-[1.5px] bg-[#C5A880]" />
              <span>01 / THE VISION</span>
            </div>

            {/* Main Wordmark Title: ANTELIA GROVES */}
            <h1
              className={`font-editorial text-[34px] sm:text-[42px] lg:text-[48px] xl:text-[54px] leading-[1.02] text-[#1D2421] font-normal tracking-[-0.01em] transition-all duration-700 delay-100 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              ANTELIA GROVES
            </h1>

            {/* Supporting Tagline: 10 ACRES. ONE VISION. */}
            <p
              className={`font-sans font-light text-[16px] sm:text-[19px] lg:text-[21px] tracking-[0.18em] text-[#B89047] uppercase mt-1 leading-tight transition-all duration-700 delay-200 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              10 ACRES. ONE VISION.
            </p>

            {/* Warm Sand Accent Line */}
            <div
              className={`w-12 h-[2px] bg-[#C5A880] rounded-full my-2.5 sm:my-3 transition-all duration-700 delay-300 ${
                loaded ? 'opacity-100 scale-x-100 origin-left' : 'opacity-0 scale-x-0'
              }`}
            />

            {/* Description */}
            <p
              className={`font-sans text-[13px] sm:text-[14.5px] leading-[1.6] text-[#3D4944] max-w-lg font-normal mb-4 sm:mb-5 transition-all duration-700 delay-300 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              Independent 3 & 4 BHK split-level villas within a thoughtfully planned 10-acre gated sanctuary in South Bengaluru, where architectural clarity, serene nature and everyday living come together.
            </p>

            {/* Clean Architectural Dual CTAs */}
            <div
              className={`flex flex-wrap items-center gap-4 sm:gap-6 transition-all duration-700 delay-400 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              {/* Primary CTA */}
              <a
                href="#villas"
                onClick={(e) => {
                  if (onExploreVillas) {
                    e.preventDefault();
                    onExploreVillas();
                  }
                }}
                className="inline-flex items-center space-x-2 px-6 sm:px-7 py-3 bg-gradient-to-r from-[#C5A880] to-[#B89047] text-white text-[11.5px] font-semibold uppercase tracking-[0.18em] rounded-xs hover:bg-[#122E23] transition-all duration-300 shadow-subtle hover:shadow group cursor-pointer"
              >
                <span>EXPLORE THE VILLAS</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#journey"
                onClick={(e) => {
                  if (onExploreJourney) {
                    e.preventDefault();
                    onExploreJourney();
                  }
                }}
                className="inline-flex items-center space-x-2 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[#B89047] border-b border-[#B89047] pb-0.5 hover:text-[#967433] hover:border-[#967433] transition-all group cursor-pointer"
              >
                <span>THE DEVELOPMENT JOURNEY</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Completely Clean Negative Space allowing full villa image visibility */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5 pointer-events-none" />

        </div>
      </div>

      {/* =========================================================
          3. QUICK PROJECT FACTS SPECIFICATION STRIP
          Pinned cleanly right at the bottom edge of the 100vh screen.
          All 4 facts are 100% visible with zero scrollbar needed.
          ========================================================= */}
      <div className="relative z-20 border-t border-[#E7E4DD] bg-[#F7F6F2]/95 backdrop-blur-md shrink-0 py-3 sm:py-3.5 lg:py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#E7E4DD]">
            {projectFacts.map((fact, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center ${
                  index !== 0 ? 'pt-2.5 lg:pt-0 lg:pl-8' : ''
                }`}
              >
                <div className="text-[19px] sm:text-[22px] lg:text-[25px] font-sans font-bold text-[#B89047] tracking-tight leading-none mb-1">
                  {fact.num}
                </div>
                <div className="text-[11.5px] sm:text-[12px] font-sans font-semibold text-[#1D2421] tracking-wide uppercase">
                  {fact.title}
                </div>
                <div className="text-[10.5px] sm:text-[11px] font-sans text-[#5A6862] mt-0.5">
                  {fact.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

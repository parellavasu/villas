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
          title: 'Contemporary Villa Facade',
          subtitle: 'Travertine Stone, Teak Louvers & Landscaped Entrance',
          url: '/images/hero/01_hero_villa_exterior.jpg',
        },
        {
          key: 'HERO_LIVING_PAVILION',
          title: 'Double-Height Living Pavilion',
          subtitle: '18-Foot Soaring Volume Opening to Courtyard Pool',
          url: '/images/hero/02_hero_living_pavilion.jpg',
        },
        {
          key: 'HERO_COURTYARD_DINING',
          title: 'Courtyard Dining & Deck',
          subtitle: 'Indoor-Outdoor Spatial Entertaining Harmony',
          url: '/images/hero/03_hero_dining_courtyard.jpg',
        },
        {
          key: 'HERO_SIGNATURE_CLUBHOUSE',
          title: '15,000 Sq.Ft Resort Clubhouse',
          subtitle: '25-Meter Heated Lap Pool, Amphitheater & Wellness',
          url: '/images/hero/04_hero_clubhouse_pool.jpg',
        },
        {
          key: 'HERO_SUNSET_ENCLAVE',
          title: 'Sunset Garden Residences',
          subtitle: 'Split-Level Rooftop Terraces Framing Linear Green Park',
          url: '/images/hero/05_hero_sunset_enclave.jpg',
        },
        {
          key: 'HERO_AERIAL_MASTERPLAN',
          title: '10-Acre Aerial Sanctuary',
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

  const rafRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setParallax({ x, y });
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setParallax({ x: 0, y: 0 });
  };

  // 4 Project Facts
  const projectFacts = [
    {
      num: '10+ Acres',
      title: 'Gated Community',
      detail: 'Low-Density Planned Enclave',
    },
    {
      num: '3 & 4 BHK',
      title: 'Independent Villas',
      detail: 'Split-Level Private Residences',
    },
    {
      num: '2,262–3,000 Sq.Ft',
      title: 'Built-Up Area Range',
      detail: 'Articulated Spatial Layouts',
    },
    {
      num: '15,000+ Sq.Ft',
      title: 'Signature Clubhouse',
      detail: '25m Heated Pool & Wellness',
    },
  ];

  return (
    <div
      id="vision"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[100dvh] h-[100dvh] max-h-[100dvh] flex flex-col justify-between overflow-hidden bg-white text-[#111827] scroll-mt-[74px] select-none font-sans"
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
          Ultra-Smooth Multi-Stop Horizontal White Gradient
          Fades from solid #FFFFFF on the left into 100% transparent on the right.
          Zero hard borders. Natural, seamless architectural blending.
        */}
        <div
          className="absolute inset-0 z-10 pointer-events-none hidden sm:block"
          style={{
            background:
              'linear-gradient(to right, #FFFFFF 0%, #FFFFFF 28%, rgba(255, 255, 255, 0.94) 38%, rgba(255, 255, 255, 0.72) 48%, rgba(255, 255, 255, 0.35) 60%, rgba(255, 255, 255, 0.1) 70%, rgba(255, 255, 255, 0) 80%)',
          }}
        />

        {/* Mobile-specific smooth top-to-bottom dissolve */}
        <div
          className="absolute inset-0 z-10 pointer-events-none sm:hidden"
          style={{
            background:
              'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 42%, rgba(255, 255, 255, 0.85) 55%, rgba(255, 255, 255, 0.3) 70%, transparent 85%)',
          }}
        />

        {/* Top Header Transition Fade */}
        <div
          className="absolute top-0 inset-x-0 h-20 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
          }}
        />

        {/* Bottom Transition connecting to Facts Strip */}
        <div
          className="absolute bottom-0 inset-x-0 h-20 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, #FFFFFF 0%, rgba(255, 255, 255, 0.85) 45%, transparent 100%)',
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
            
            {/* 01 / The Vision Eyebrow */}
            <div
              className={`flex items-center space-x-2 text-[10.5px] font-mono tracking-[0.16em] text-[#EA580C] font-semibold mb-2 transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <span className="w-4 h-[1.5px] bg-[#EA580C]" />
              <span>01 / The Vision</span>
            </div>

            {/* Main Wordmark Title: Antelia Groves */}
            <h1
              className={`font-display font-semibold text-[32px] sm:text-[38px] lg:text-[44px] leading-tight text-[#111827] tracking-display transition-all duration-700 delay-100 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              Antelia Groves
            </h1>

            {/* Supporting Tagline: 10 Acres. One Vision. */}
            <p
              className={`font-sans font-medium text-[16px] sm:text-[19px] lg:text-[21px] tracking-[0.1em] text-[#EA580C] mt-1 leading-tight transition-all duration-700 delay-200 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              10 Acres. One Vision.
            </p>

            {/* Vibrant Orange Accent Line */}
            <div
              className={`w-12 h-[2.5px] bg-[#EA580C] rounded-full my-2.5 sm:my-3 transition-all duration-700 delay-300 ${
                loaded ? 'opacity-100 scale-x-100 origin-left' : 'opacity-0 scale-x-0'
              }`}
            />

            {/* Description */}
            <p
              className={`font-sans text-[13px] sm:text-[14.5px] leading-[1.6] text-[#4B5563] max-w-lg font-normal mb-4 sm:mb-5 transition-all duration-700 delay-300 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              Independent 3 &amp; 4 BHK split-level villas set within a private 10-acre gated enclave in South Bengaluru, framed by quiet courtyards and expansive greenery.
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
                className="inline-flex items-center space-x-2 px-6 sm:px-7 py-3 bg-[#EA580C] hover:bg-[#C2410C] text-white text-[11.5px] font-bold tracking-[0.04em] rounded-full transition-all duration-300 shadow-sm hover:shadow group cursor-pointer"
              >
                <span>Explore The Villas</span>
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
                className="inline-flex items-center space-x-2 text-[11.5px] font-semibold tracking-[0.04em] text-[#EA580C] border-b border-[#EA580C] pb-0.5 hover:text-[#C2410C] hover:border-[#C2410C] transition-all group cursor-pointer"
              >
                <span>The Development Journey</span>
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
      <div className="relative z-20 border-t border-gray-100 bg-white/95 backdrop-blur-md shrink-0 py-3 sm:py-3.5 lg:py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            {projectFacts.map((fact, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center ${
                  index !== 0 ? 'pt-2.5 lg:pt-0 lg:pl-8' : ''
                }`}
              >
                <div className="text-[19px] sm:text-[22px] lg:text-[25px] font-sans font-bold text-[#EA580C] tracking-tight leading-none mb-1">
                  {fact.num}
                </div>
                <div className="text-[11.5px] sm:text-[12px] font-sans font-semibold text-[#111827] tracking-wide">
                  {fact.title}
                </div>
                <div className="text-[10.5px] sm:text-[11px] font-sans text-[#6B7280] mt-0.5">
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

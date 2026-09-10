import React, { useState } from 'react';
import { Waves, Dumbbell, Trophy, Users, Trees, Sparkles } from 'lucide-react';
import SmartMedia from './common/SmartMedia';
import { PROJECT_MEDIA } from '../config/projectMedia';

export default function Section04Lifestyle() {
  const [activeCatIdx, setActiveCatIdx] = useState(0);

  const categories = [
    {
      id: 1,
      title: 'The Aquatic Sanctuary',
      tag: 'AQUATICS & WATER COURTS',
      image: '/images/antelia_clubhouse_pool.jpg',
      lead: '25-Meter Heated Lap Pool & Sunken Lounges',
      desc: 'A resort-style aquatic pavilion featuring a 25-meter temperature-controlled lap pool, shallow kids splash pool, sunken lounge islands, and private poolside cabanas.',
      amenities: [
        '25-Meter Heated Lap Pool',
        'Sunken Poolside Cabanas',
        'Kids Splash & Water Court',
        'Poolside Refreshment Deck',
      ],
    },
    {
      id: 2,
      title: 'Health, Wellness & Movement',
      tag: 'FITNESS & MINDFULNESS',
      image: '/images/journey/19_signature_clubhouse.jpg',
      lead: 'State-of-the-Art Gymnasium & Yoga Pavilion',
      desc: 'Equipped with commercial-grade strength and cardio systems, dedicated wooden-floor Zumba and yoga studios, outdoor meditation reflexology paths, and jogging tracks.',
      amenities: [
        'Fully-Equipped TechnoGym',
        'Zumba & Aerobics Studio',
        'Tranquil Yoga & Meditation Deck',
        'Shaded 1.2km Jogging Track',
      ],
    },
    {
      id: 3,
      title: 'Sports & Active Recreation',
      tag: 'INDOOR & OUTDOOR SPORTS',
      image: '/images/antelia_aerial_masterplan.jpg',
      lead: 'Badminton, Squash & Indoor Games Arena',
      desc: 'Indoor sports courts with international-standard sprung wooden flooring, air-conditioned squash arena, billiards lounge, table tennis, and dedicated children’s creative play zones.',
      amenities: [
        'Sprung Wooden Badminton Courts',
        'Air-Conditioned Squash Arena',
        'Billiards & Table Tennis Lounge',
        'Safe Rubberized Kids Play Park',
      ],
    },
    {
      id: 4,
      title: 'Social Gatherings & Leisure',
      tag: 'HOSPITALITY & COMMUNITY',
      image: '/images/antelia_villa_living.jpg',
      lead: 'Banquet Hall, Cafe Lounge & Guest Suites',
      desc: 'A community hub crafted for celebration and relaxation: multi-purpose party banquet hall, coffee lounge, guest accommodation suites, quiet reading nooks, BBQ pits, and open-air amphitheatre.',
      amenities: [
        'Multi-Purpose Banquet Hall',
        'Private Guest Accommodation',
        'Artisanal Coffee & Reading Lounge',
        'BBQ Pits & Open Amphitheatre',
      ],
    },
  ];

  const currentCat = categories[activeCatIdx];

  return (
    <section
      id="lifestyle"
      className="relative bg-[#FAFAF7] text-[#141917] py-14 sm:py-16 border-t border-[#EBE7DF] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-[#EBE7DF]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2.5 mb-2">
              <span className="w-5 h-[1.5px] bg-[#B89047]" />
              <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-[#B89047] uppercase">
                05 / THE LIFESTYLE
              </span>
            </div>
            <h2 className="font-sans font-semibold text-[30px] sm:text-[36px] lg:text-[38px] tracking-tight text-[#141917] leading-tight">
              EVERYDAY LIFE, ELEVATED.
            </h2>
          </div>

          <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#5A6862] max-w-md mt-3 md:mt-0 font-normal">
            A 15,000+ sq.ft architectural clubhouse pavilion and comprehensive lifestyle ecosystem designed around fitness, wellness, and restorative community life.
          </p>
        </div>

        {/* 4 Category Filter Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {categories.map((cat, idx) => {
            const isSelected = activeCatIdx === idx;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCatIdx(idx)}
                className={`p-5 text-left border rounded-xs transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#B89047] text-white border-[#B89047] shadow-luxury'
                    : 'bg-white text-[#1D2421] border-[#EBE7DF] hover:border-[#B8A58A]'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-[10.5px] font-mono uppercase tracking-widest ${isSelected ? 'text-[#B8A58A]' : 'text-[#8C9A93]'}`}>
                    0{cat.id} / 04
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#B8A58A]" />}
                </div>
                <div>
                  <div className={`text-[14px] sm:text-[15px] font-semibold tracking-wide ${isSelected ? 'text-white' : 'text-[#1D2421]'}`}>
                    {cat.title}
                  </div>
                  <div className={`text-[11px] mt-1 line-clamp-1 font-mono uppercase ${isSelected ? 'text-[#D8D4CA]' : 'text-[#5A6862]'}`}>
                    {cat.tag}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Category Presentation: Large Image + Curated Amenities */}
        <div className="bg-white border border-[#EBE7DF] rounded-xs overflow-hidden shadow-subtle grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Large Image (~60%) */}
          <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto">
            <SmartMedia
              media={currentCat.image}
              alt={currentCat.title}
              className="w-full h-full object-cover animate-cinematic-push"
              showBadge={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D2421]/60 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-5 left-6 right-6 text-white pointer-events-none">
              <div className="text-[10.5px] font-mono text-[#B8A58A] uppercase tracking-widest mb-1">
                SIGNATURE CLUBHOUSE PAVILION · 15,000+ SQ.FT
              </div>
              <div className="text-[20px] sm:text-[24px] font-semibold">
                {currentCat.lead}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Description + Amenity Chips (~40%) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-[11px] font-mono text-[#8C9A93] uppercase tracking-widest mb-2">
                AMENITY PILLAR 0{currentCat.id}
              </div>
              <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#1D2421] mb-3 leading-tight">
                {currentCat.title}
              </h3>
              <p className="text-[14.5px] text-[#3D4944] leading-relaxed">
                {currentCat.desc}
              </p>
            </div>

            {/* Documented Amenities List */}
            <div className="pt-5 border-t border-[#EBE7DF]">
              <div className="text-[11px] font-mono text-[#5A6862] uppercase tracking-wider mb-3">
                KEY INCLUSIONS:
              </div>
              <div className="space-y-2.5">
                {currentCat.amenities.map((am, i) => (
                  <div key={i} className="flex items-center space-x-2.5 text-[13px] text-[#1D2421]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B89047] shrink-0" />
                    <span>{am}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

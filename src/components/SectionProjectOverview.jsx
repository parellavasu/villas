import React from 'react';
import { Home, Layers, Trees, Briefcase, SunMedium, Compass, ArrowUpRight } from 'lucide-react';
import SmartMedia from './common/SmartMedia';
import { PROJECT_MEDIA } from '../config/projectMedia';

export default function SectionProjectOverview({ onExploreVillas, onOpenBooking }) {
  const overviewFeatures = [
    {
      icon: Home,
      title: '10+ Acre Gated Community',
      desc: 'A masterplanned low-density enclave featuring 189 private independent villas set in protected landscape.',
    },
    {
      icon: Layers,
      title: 'Split-Level Architectural Design',
      desc: 'Articulated spatial separation between living and dining areas without restrictive interior walls.',
    },
    {
      icon: SunMedium,
      title: 'Double-Height Living Foyer',
      desc: '18-foot soaring volume welcoming abundant natural daylight, ventilation, and a sense of calm grandeur.',
    },
    {
      icon: Trees,
      title: 'Seamless Indoor-Outdoor Living',
      desc: 'Floor-to-ceiling glass sliding open directly to a 180+ sq.ft landscaped rear courtyard garden.',
    },
    {
      icon: Briefcase,
      title: 'Dedicated Home Office Suite',
      desc: 'A quiet, sunlit executive workspace intentionally isolated for modern professional focus.',
    },
    {
      icon: Compass,
      title: 'Open-Air Sky Terrace Lounge',
      desc: 'Private rooftop entertaining deck framing panoramic canopy views across the lush estate.',
    },
  ];

  const overviewMedia = PROJECT_MEDIA.villas[1] || {
    url: '/images/antelia_villa_living.jpg',
    title: 'Double-Height Living Pavilion',
  };

  return (
    <section
      id="overview"
      className="relative bg-[#FBFBF9] text-[#141917] py-14 sm:py-16 border-t border-[#E3DFD5] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Eyebrow & Heading */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <div className="flex items-center space-x-2.5 text-[11px] font-mono tracking-[0.25em] text-[#5A6862] uppercase mb-2">
            <span className="w-5 h-[1.5px] bg-[#C5A880]" />
            <span>THE PHILOSOPHY</span>
          </div>
          <h2 className="font-sans font-semibold text-[30px] sm:text-[36px] lg:text-[38px] tracking-tight text-[#141917] leading-tight">
            A COMMUNITY DESIGNED AROUND LIVING
          </h2>
          <p className="font-sans text-[14.5px] sm:text-[15.5px] text-[#5A6862] mt-2 leading-relaxed">
            Antelia Groves balances contemporary architectural precision with an organic connection to nature, giving every family an enduring sanctuary.
          </p>
        </div>

        {/* Split Grid: Large Realistic Image + Short Readable Feature Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Large Realistic Living Pavilion Photo (~50%) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full rounded-xs overflow-hidden shadow-luxury border border-[#E7E4DD] bg-[#E7E4DD]">
              <SmartMedia
                media={overviewMedia}
                className="w-full h-full object-cover animate-cinema-pan"
                showBadge={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D2421]/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-6 right-6 text-white pointer-events-none">
                <div className="text-[10.5px] font-mono text-[#B8A58A] uppercase tracking-widest mb-1">
                  INTERIOR ARCHITECTURE
                </div>
                <div className="text-[18px] sm:text-[20px] font-semibold">
                  Double-Height Living Pavilion & Private Courtyard
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Short Readable Architectural Feature Blocks (~50%) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {overviewFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-white border border-[#E7E4DD] rounded-xs shadow-subtle hover:border-[#B8A58A] transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-xs bg-[#183C2F]/5 border border-[#183C2F]/10 flex items-center justify-center text-[#183C2F] mb-3 group-hover:bg-[#183C2F] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-sans text-[15px] font-semibold text-[#1D2421] tracking-tight mb-1.5">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[13px] text-[#5A6862] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Consultation Trigger */}
            <div className="mt-8 flex items-center justify-between p-4 bg-[#F1EFEA] border border-[#E7E4DD] rounded-xs">
              <div className="text-[12.5px] font-sans text-[#3D4944]">
                <strong className="text-[#183C2F] font-semibold">Ready to explore?</strong> Review detailed floorplans and community masterplan.
              </div>
              <button
                onClick={onExploreVillas}
                className="shrink-0 inline-flex items-center space-x-1.5 px-4 py-2 bg-[#183C2F] text-white text-[11px] font-mono uppercase tracking-wider rounded-xs hover:bg-[#122E23] transition-colors ml-4"
              >
                <span>EXPLORE VILLAS</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

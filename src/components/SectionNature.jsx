import React, { useState } from 'react';
import { Trees, Flower2, Footprints, Droplets, Sparkles, Wind, Sun, ArrowUpRight } from 'lucide-react';
import SmartMedia from './common/SmartMedia';
import { PROJECT_MEDIA } from '../config/projectMedia';

export default function SectionNature({ onOpenBooking }) {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 'avenues',
      icon: Trees,
      title: '40ft Shaded Avenues',
      subtitle: 'NATIVE SPECIMEN CANOPIES',
      desc: 'Wide internal arterial boulevards framed by mature Gulmohar, Neem, and Tabebuia trees, casting continuous shade and cooling ambient ground temperatures by up to 3°C.',
      stat: '40 FT',
      statLabel: 'BOULEVARD WIDTH',
      highlight: 'Continuous canopy coverage for pedestrian walks',
    },
    {
      id: 'butterfly',
      icon: Flower2,
      title: 'Biodiverse Butterfly Park',
      subtitle: 'POLLINATOR BOTANICAL CORRIDOR',
      desc: 'A curated 1.2-acre sanctuary planted with indigenous nectar flora, flowering perennials, and micro-wetlands designed to sustain regional butterfly species and birds.',
      stat: '1.2 ACRES',
      statLabel: 'SANCTUARY FOOTPRINT',
      highlight: '38+ documented species of indigenous flora & pollinators',
    },
    {
      id: 'paths',
      icon: Footprints,
      title: 'Porous Pebble Walkways',
      subtitle: 'PERMEABLE WALKING TRAILS',
      desc: 'Over 2.4 km of interlocking permeable gravel and stabilized earthen pathways allowing rainwater to soak naturally into aquifers rather than running off into storm drains.',
      stat: '2.4 KM',
      statLabel: 'NATURE TRAIL NETWORK',
      highlight: 'Zero hard-surface runoff with reflexology segments',
    },
    {
      id: 'rainwater',
      icon: Droplets,
      title: '100% Rainwater Recharging',
      subtitle: 'DEEP AQUIFER STEWARDSHIP',
      desc: 'An integrated network of percolation trenches, recharge wells, and bio-retention swales ensuring every drop of monsoon rainfall replenishes the groundwater table.',
      stat: '100%',
      statLabel: 'RAINFALL CONSERVATION',
      highlight: '42 deep recharge shafts across the 10-acre site',
    },
  ];

  const natureMedia = PROJECT_MEDIA.nature || {
    url: '/images/antelia_nature_landscape.jpg',
    title: 'Shaded Walking Trails & Natural Water Features',
    subtitle: 'BIOPHILIC LANDSCAPE · OVER 45% GREEN OPEN SPACE',
    caption: 'Native Gulmohar & Neem avenues, porous pebble walkways, and rainwater recharging',
  };

  return (
    <section
      id="nature"
      className="relative bg-[#FFFFFF] text-[#141917] py-14 sm:py-16 border-t border-[#EBE7DF] overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Eyebrow & Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-[#EBE7DF]">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2.5 text-[11px] font-mono tracking-[0.25em] text-[#B89047] uppercase mb-2">
              <span className="w-5 h-[1.5px] bg-[#B89047]" />
              <span>05 / NATURE</span>
            </div>
            <h2 className="font-sans font-semibold text-[30px] sm:text-[36px] lg:text-[38px] tracking-tight text-[#141917] leading-tight">
              NATURE IS PART OF THE LIVING EXPERIENCE
            </h2>
          </div>

          <p className="text-[14px] sm:text-[15px] text-[#5A6862] max-w-md mt-3 md:mt-0 font-normal leading-relaxed">
            Antelia Groves preserves the land’s original contours. Over 45% of the total 10-acre estate remains open green space, woven into everyday pedestrian life.
          </p>
        </div>

        {/* Top 4 Quick Ecological Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {[
            { metric: '45%+', label: 'GREEN OPEN SPACE', sub: 'Native woodlands & parkland' },
            { metric: '1,200+', label: 'CATALOGED TREES', sub: 'Preserved specimen canopies' },
            { metric: '2.4 KM', label: 'WALKING & JOGGING TRAILS', sub: 'Porous pebble pathways' },
            { metric: '100%', label: 'RAINWATER RECHARGE', sub: 'Sustainable zero-runoff aquifer' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-white border border-[#E7E4DD] rounded-xs shadow-xs"
            >
              <div className="text-[26px] sm:text-[30px] font-sans font-semibold text-[#B89047] tracking-tight">
                {item.metric}
              </div>
              <div className="text-[11px] font-mono font-semibold tracking-wider text-[#1D2421] uppercase mt-1">
                {item.label}
              </div>
              <div className="text-[12px] text-[#5A6862] mt-0.5 font-normal">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Split Visual & Interactive Nature Feature Theater */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Photorealistic SmartMedia Landscape Image */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative h-full min-h-[420px] sm:min-h-[480px] rounded-xs overflow-hidden border border-[#E7E4DD] shadow-sm group">
              <SmartMedia
                media={natureMedia}
                aspectRatio="h-full w-full"
                className="w-full h-full object-cover animate-living-breeze"
                priorityBadge={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D2421]/75 via-[#1D2421]/15 to-transparent pointer-events-none" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <div className="inline-flex items-center space-x-2 text-[10.5px] font-mono tracking-widest text-[#B8A58A] uppercase mb-1">
                  <Wind className="w-3.5 h-3.5" />
                  <span>BIOPHILIC WALKING SANCTUARY</span>
                </div>
                <div className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-[#F7F6F2]">
                  {natureMedia.title}
                </div>
                <div className="text-[12.5px] text-[#D8D4CA] mt-1 line-clamp-2">
                  {natureMedia.caption}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Nature Pillars Interactive Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              const isSelected = activePillar === idx;

              return (
                <div
                  key={p.id}
                  onClick={() => setActivePillar(idx)}
                  className={`p-5 rounded-xs border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#B89047] shadow-md ring-1 ring-[#183C2F]/20'
                      : 'bg-[#F0EDE5]/60 border-[#E7E4DD] hover:bg-white hover:border-[#D8D4CA]'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-xs transition-colors ${
                        isSelected ? 'bg-[#B89047] text-white' : 'bg-white border border-[#E7E4DD] text-[#B89047]'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono tracking-wider text-[#B8A58A] uppercase font-semibold">
                          {p.subtitle}
                        </div>
                        <h4 className="text-[16px] sm:text-[17px] font-semibold text-[#1D2421] tracking-tight">
                          {p.title}
                        </h4>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-[15px] font-mono font-bold text-[#B89047]">
                        {p.stat}
                      </div>
                      <div className="text-[9px] font-mono text-[#5A6862] tracking-wider uppercase">
                        {p.statLabel}
                      </div>
                    </div>
                  </div>

                  <p className="text-[13px] text-[#5A6862] leading-relaxed mt-2 font-normal">
                    {p.desc}
                  </p>

                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-[#E7E4DD] flex items-center space-x-2 text-[11.5px] font-medium text-[#B89047]">
                      <Sparkles className="w-3.5 h-3.5 text-[#B8A58A] shrink-0" />
                      <span>{p.highlight}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

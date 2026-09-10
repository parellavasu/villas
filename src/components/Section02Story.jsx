import React, { useState } from 'react';
import { Home, Briefcase, Sparkles, ArrowRight } from 'lucide-react';

export default function Section02Story() {
  const [activeTab, setActiveTab] = useState('live');

  const pillars = [
    {
      id: 'live',
      title: 'LIVE',
      subtitle: 'Homes & Private Gardens',
      icon: <Home size={16} className="text-cobalt-600" />,
      description: 'Thoughtfully designed homes, private gardens, balconies and open spaces.',
      badge: 'RESIDENCE'
    },
    {
      id: 'work',
      title: 'WORK',
      subtitle: 'Workspaces & Connectivity',
      icon: <Briefcase size={16} className="text-cobalt-600" />,
      description: 'Dedicated workspaces and convenient access to employment and technology hubs.',
      badge: 'CONNECTED'
    },
    {
      id: 'play',
      title: 'PLAY',
      subtitle: 'Clubhouse & Open Lawns',
      icon: <Sparkles size={16} className="text-cobalt-600" />,
      description: 'Clubhouse facilities, sports, gardens and community spaces designed for connection.',
      badge: 'RECREATION'
    }
  ];

  return (
    <section
      id="story"
      className="relative py-12 sm:py-16 px-6 md:px-12 bg-gradient-to-r from-white via-[#F8FAFC] via-45% to-sky-50/60 border-t border-sky-100 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header: Label (11-13px) -> 8-16px gap -> Heading (30-40px) -> 12-20px gap -> Description (15-17px) */}
        <div className="max-w-xl mb-6">
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono tracking-widest text-cobalt-600 uppercase mb-2 font-semibold">
            <span>02 / THE STORY</span>
            <div className="w-5 h-[1.5px] bg-cobalt-600"></div>
          </div>
          {/* Main Section Heading: 30–40px Desktop, 24–30px Mobile, Weight 600 */}
          <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-sans font-semibold tracking-tight text-navy-950 uppercase leading-snug mb-2">
            LIVE. WORK. <span className="text-cobalt-600 font-semibold">PLAY.</span>
          </h2>
          <p className="text-[15px] sm:text-[16px] font-sans text-slate-600 font-normal leading-[1.6]">
            A balanced lifestyle vision where personal sanctuary, seamless productivity, and leisure converge.
          </p>
        </div>

        {/* 3 Compact Content Areas: 24-40px gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((pillar) => {
            const isSelected = activeTab === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`cursor-pointer rounded-xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-cobalt-500 shadow-sm"
                    : "bg-white/80 border-sky-100 hover:border-sky-300 hover:bg-white shadow-2xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="p-1.5 rounded-lg bg-sky-50 border border-sky-100">
                      {pillar.icon}
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-cobalt-600 px-2 py-0.5 rounded-full bg-sky-50">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Subheading: 18-24px, font-semibold */}
                  <h3 className="text-[18px] sm:text-[20px] font-sans font-semibold text-navy-950 uppercase mb-0.5">
                    {pillar.title}
                  </h3>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    {pillar.subtitle}
                  </span>

                  {/* Body: 15-17px, line height 1.5-1.7, Sentence Case */}
                  <p className="text-[14px] sm:text-[15px] font-sans text-slate-600 leading-[1.6] font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-sans font-semibold text-cobalt-600">
                  <span className="tracking-wider uppercase">EXPLORE {pillar.title}</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

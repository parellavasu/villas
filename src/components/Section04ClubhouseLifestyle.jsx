import React, { useState } from 'react';
import { Waves, Dumbbell, Trophy, Utensils, Sparkles, Bed, Coffee, Trees, Heart, Activity } from 'lucide-react';

export default function Section04ClubhouseLifestyle() {
  const [filter, setFilter] = useState('all');

  const amenities = [
    { name: 'Swimming Pool', cat: 'clubhouse', icon: <Waves size={14} />, desc: '25-meter temperature-controlled lap pool with timber sundeck.' },
    { name: 'Indoor Gym', cat: 'clubhouse', icon: <Dumbbell size={14} />, desc: 'Modern fitness floor overlooking landscaped central greens.' },
    { name: 'Zumba & Yoga Studio', cat: 'clubhouse', icon: <Activity size={14} />, desc: 'Mirrored studio with wooden sprung flooring for wellness classes.' },
    { name: 'Badminton & Squash', cat: 'clubhouse', icon: <Trophy size={14} />, desc: 'Indoor tournament-grade courts with shock-absorbent flooring.' },
    { name: 'Party Hall & Banquet', cat: 'clubhouse', icon: <Utensils size={14} />, desc: 'Spacious celebration hall opening to outdoor banquet lawns.' },
    { name: 'Guest Rooms', cat: 'clubhouse', icon: <Bed size={14} />, desc: 'Boutique hospitality suites for visiting family and guests.' },
    { name: 'Café & Lounges', cat: 'clubhouse', icon: <Coffee size={14} />, desc: 'Open-air terrace café with tranquil community vistas.' },
    { name: 'Hobby & Reading Rooms', cat: 'clubhouse', icon: <Sparkles size={14} />, desc: 'Quiet library lounge and indoor board games salon.' },
    { name: 'Outdoor Sports Courts', cat: 'outdoor', icon: <Trophy size={14} />, desc: 'Basketball, volleyball, and tennis court facilities.' },
    { name: 'Cricket Practice Nets', cat: 'outdoor', icon: <Activity size={14} />, desc: 'Dedicated pitch nets for batting and bowling practice.' },
    { name: 'Jogging Tracks', cat: 'outdoor', icon: <Activity size={14} />, desc: '1.2 km cushioned perimeter jogging loop through canopy trees.' },
    { name: 'Kids Play Areas', cat: 'outdoor', icon: <Sparkles size={14} />, desc: 'Safe rubberized play zones with slides and climbing frames.' },
    { name: 'BBQ Patio & Lawns', cat: 'outdoor', icon: <Utensils size={14} />, desc: 'Open-air grilling pavilions and picnic dining lawns.' },
    { name: 'Meditation Court', cat: 'mindfulness', icon: <Heart size={14} />, desc: 'Tranquil zen sanctuary shielded for quiet reflection.' },
    { name: 'Reflecting Water Court', cat: 'mindfulness', icon: <Waves size={14} />, desc: 'Calming shallow pool with natural stone circulation.' },
    { name: 'Herb & Butterfly Gardens', cat: 'mindfulness', icon: <Trees size={14} />, desc: 'Aromatic flora attracting native butterflies and birds.' },
  ];

  const filtered = filter === 'all' ? amenities : amenities.filter(a => a.cat === filter);

  return (
    <section
      id="amenities"
      className="relative py-12 sm:py-16 px-6 md:px-12 bg-gradient-to-r from-white via-[#F8FAFC] via-45% to-sky-100/50 border-t border-sky-100 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header: Controlled Max Width */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 pb-4 border-b border-slate-100">
          <div className="max-w-md">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono tracking-widest text-cobalt-600 uppercase mb-2 font-semibold">
              <span>04 / CLUBHOUSE & LIFESTYLE</span>
              <div className="w-5 h-[1.5px] bg-cobalt-600"></div>
            </div>
            {/* Main Section Heading: 30–40px Desktop, 24–30px Mobile, Weight 600 */}
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-sans font-semibold tracking-tight text-navy-950 uppercase leading-snug mb-1.5">
              A COMMUNITY <span className="text-cobalt-600 font-semibold">DESIGNED AROUND YOU</span>
            </h2>
            <p className="text-[14px] sm:text-[15px] font-sans text-slate-600 font-normal leading-[1.6]">
              A 15,000+ sq.ft clubhouse with curated indoor and outdoor amenities for leisure, fitness, and community.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-4 lg:mt-0 flex flex-wrap items-center gap-1 p-1 rounded-lg bg-white border border-sky-200/80 shadow-2xs">
            {[
              { id: 'all', label: 'ALL' },
              { id: 'clubhouse', label: 'CLUBHOUSE' },
              { id: 'outdoor', label: 'OUTDOOR' },
              { id: 'mindfulness', label: 'MINDFULNESS' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-2.5 py-1 rounded text-[10px] font-mono font-semibold uppercase tracking-wider transition-all ${
                  filter === tab.id
                    ? 'bg-navy-950 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-navy-950'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-sky-100 bg-white/90 hover:bg-white hover:border-cobalt-400 hover:shadow-2xs transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1 rounded-md bg-sky-50 text-cobalt-600 group-hover:bg-cobalt-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                    {item.cat}
                  </span>
                </div>
                {/* Subheading: 14-16px, font-semibold */}
                <h4 className="text-[14px] font-sans font-semibold text-navy-950 mb-0.5 group-hover:text-cobalt-600 transition-colors">
                  {item.name}
                </h4>
                {/* Body: 12-13px, Sentence Case */}
                <p className="text-[12px] font-sans text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

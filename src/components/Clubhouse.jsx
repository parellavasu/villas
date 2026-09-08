import React, { useState } from 'react';
import Clubhouse3D from '../three/Clubhouse3D';
import { clubhouseDetails } from '../data/projectData';
import { Building2, Waves, Wine, UtensilsCrossed, Bed, BookOpen, Coffee } from 'lucide-react';

export default function Clubhouse() {
  const [activeSpace, setActiveSpace] = useState('all');

  const spaceIcons = {
    all: <Building2 size={14} />,
    pool: <Waves size={14} />,
    party: <Wine size={14} />,
    bbq: <UtensilsCrossed size={14} />,
    guest: <Bed size={14} />,
    cafe: <Coffee size={14} />
  };

  const spacesList = [
    { id: 'all', name: 'Complete 3D Architecture' },
    { id: 'pool', name: '25M Lap Pool & Deck' },
    { id: 'party', name: 'Grand Party & Banquet Hall' },
    { id: 'bbq', name: 'Open-Air BBQ Patio' },
    { id: 'guest', name: 'Boutique Guest Suites' },
    { id: 'cafe', name: 'Rooftop Sunset Café' }
  ];

  return (
    <section id="clubhouse" className="relative py-28 px-6 md:px-12 bg-charcoal-900 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-bronze-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 bg-bronze-400 rounded-full"></span>
              <span>CHAPTER 08 // THE SOCIAL ANCHOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-semibold tracking-wider text-ivory-100 uppercase">
              {clubhouseDetails.title}
            </h2>
            <p className="mt-3 text-sm md:text-base font-editorial italic text-stone-300 max-w-xl">
              "{clubhouseDetails.subtitle}"
            </p>
          </div>
          <p className="mt-4 lg:mt-0 text-xs sm:text-sm font-light text-stone-400 max-w-lg leading-relaxed">
            Positioned at the geographical heart of the 10-acre enclave, the Clubhouse acts as an architectural pavilion for leisure, hospitality, wellness, and milestone celebrations.
          </p>
        </div>

        {/* Spatial Navigation Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {spacesList.map((sp) => (
            <button
              key={sp.id}
              onClick={() => setActiveSpace(sp.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider flex items-center space-x-2 transition-all ${
                activeSpace === sp.id
                  ? "bg-bronze-500 text-charcoal-950 font-bold shadow-glow-bronze"
                  : "bg-charcoal-950 text-stone-400 border border-white/10 hover:border-white/20"
              }`}
            >
              {spaceIcons[sp.id]}
              <span>{sp.name}</span>
            </button>
          ))}
        </div>

        {/* 3D Clubhouse Interactive Canvas */}
        <div className="mb-12">
          <Clubhouse3D activeSpace={activeSpace} onSelectSpace={setActiveSpace} />
        </div>

        {/* Six Curated Spatial Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubhouseDetails.spaces.map((space, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-white/10 bg-charcoal-950/70 backdrop-blur-md flex flex-col justify-between group hover:border-bronze-500/40 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-bronze-400 uppercase">
                    {space.level}
                  </span>
                  <span className="text-xs font-mono text-stone-400">AMENITY 0{idx + 1}</span>
                </div>
                <h4 className="text-lg font-cinzel text-ivory-100 uppercase font-semibold mb-2 group-hover:text-bronze-300 transition-colors">
                  {space.name}
                </h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {space.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-stone-400">
                <span>RESERVED FOR RESIDENTS & GUESTS</span>
                <span className="text-emerald-400">ALL-SEASON ACCESS</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

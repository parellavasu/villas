import React, { useState } from 'react';
import Clubhouse3D from '../three/Clubhouse3D';
import { clubhouseDetails } from '../data/projectData';
import { Building2, Waves, Wine, UtensilsCrossed, Bed, Coffee } from 'lucide-react';

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
    <section id="clubhouse" className="relative py-28 px-6 md:px-12 bg-gradient-to-r from-white via-[#F8FAFC] via-45% to-sky-100/50 border-t border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-cobalt-600 uppercase mb-3 font-bold">
              <span>09 / THE CLUBHOUSE</span>
              <div className="w-10 h-[1.5px] bg-cobalt-600"></div>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-navy-900 uppercase">
              15,000+ SQ.FT <span className="text-cobalt-600">OF COMMUNITY.</span>
            </h2>
            <p className="mt-3 text-sm md:text-base font-editorial italic text-slate-600 max-w-xl">
              "{clubhouseDetails.subtitle}"
            </p>
          </div>
          <p className="mt-4 lg:mt-0 text-xs sm:text-sm font-sans text-slate-600 max-w-lg leading-relaxed font-normal">
            Positioned at the geographical heart of the 10-acre enclave, the Clubhouse acts as an architectural pavilion for leisure, hospitality, wellness, and milestone celebrations.
          </p>
        </div>

        {/* Spatial Navigation Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {spacesList.map((sp) => (
            <button
              key={sp.id}
              onClick={() => setActiveSpace(sp.id)}
              className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wider flex items-center space-x-2 transition-all ${
                activeSpace === sp.id
                  ? "bg-navy-900 text-white font-bold shadow-sm"
                  : "bg-white text-slate-600 border border-sky-200 hover:border-cobalt-400 font-semibold"
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
              className="p-6 rounded-2xl border border-sky-100 bg-white shadow-arch-card flex flex-col justify-between group hover:border-cobalt-300 hover:shadow-arch-hover transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-cobalt-600 uppercase font-bold bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
                    {space.level}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-semibold">AMENITY 0{idx + 1}</span>
                </div>
                <h4 className="text-lg font-sans text-navy-900 uppercase font-bold mb-2 group-hover:text-cobalt-600 transition-colors">
                  {space.name}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {space.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>RESERVED FOR RESIDENTS & GUESTS</span>
                <span className="text-cobalt-600 font-semibold">ALL-SEASON ACCESS</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

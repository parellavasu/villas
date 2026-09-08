import React from 'react';
import { projectStats } from '../data/projectData';
import { Layers, Compass, ShieldCheck, MapPin } from 'lucide-react';

export default function LandCanvas() {
  return (
    <section id="land" className="relative py-28 px-6 md:px-12 bg-charcoal-900 border-t border-white/10 overflow-hidden">
      {/* Background Architectural Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-bronze-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 bg-bronze-400 rounded-full"></span>
              <span>SECTION 00 // THE CANVAS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-semibold tracking-wider text-ivory-100 uppercase">
              10 ACRES. ONE CANVAS.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base font-light text-stone-300 max-w-md leading-relaxed">
            A unified ten-acre topography shaped into a secure, low-density gated community. 
            Every parcel is oriented to embrace natural sunlight, cross-breezes, and tranquil green vistas.
          </p>
        </div>

        {/* Project Statistics Metrics Grid with Subtle Motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projectStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl border border-white/10 bg-charcoal-950/80 backdrop-blur-md relative overflow-hidden group hover:border-bronze-500/50 transition-all duration-500 shadow-xl"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-forest-900/20 rounded-bl-full pointer-events-none group-hover:bg-bronze-500/10 transition-colors"></div>
              
              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-cinzel font-bold text-ivory-100 group-hover:text-bronze-400 transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs font-mono tracking-widest text-bronze-500 uppercase font-semibold">
                  {stat.unit}
                </span>
              </div>

              <h3 className="text-sm font-mono tracking-wider text-ivory-200 uppercase font-semibold mb-2">
                {stat.label}
              </h3>
              
              <p className="text-xs text-stone-400 leading-relaxed">
                {stat.description}
              </p>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-stone-400">
                <span>SPECIFICATION ID // 0{idx + 1}</span>
                <span className="text-bronze-400/80">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Site Boundary & Spatial Matrix Card */}
        <div className="p-8 md:p-10 rounded-2xl border border-bronze-500/30 bg-gradient-to-r from-charcoal-950 via-forest-950/40 to-charcoal-950 shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest text-bronze-400 uppercase">
                GEOMETRIC INTEGRITY
              </span>
              <h4 className="text-xl font-cinzel text-ivory-100 uppercase">
                Continuous 10-Acre Perimeter
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Protected by an engineered 2,780-linear-foot perimeter bio-buffer with acoustic tree barriers and CCTV-controlled gated access.
              </p>
            </div>

            <div className="space-y-3 md:border-l md:border-white/10 md:pl-8">
              <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
                LOW-DENSITY MASTERPLAN
              </span>
              <h4 className="text-xl font-cinzel text-ivory-100 uppercase">
                189 Exclusive Residences
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Average footprint ratio strictly limited to allow expansive 40ft/30ft avenues, central water bodies, and private backyards.
              </p>
            </div>

            <div className="space-y-3 md:border-l md:border-white/10 md:pl-8">
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
                COMMUNAL SPINE
              </span>
              <h4 className="text-xl font-cinzel text-ivory-100 uppercase">
                15,000+ Sq.Ft Social Hub
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Centralized multi-level clubhouse with half-Olympic lap pool, banquet halls, and guest accommodations within 3 minutes of every villa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

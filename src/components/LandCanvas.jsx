import React from 'react';
import { projectStats } from '../data/projectData';
import { ArrowRight } from 'lucide-react';

export default function LandCanvas() {
  return (
    <section id="land" className="relative py-28 px-6 md:px-12 bg-gradient-to-r from-white via-white via-45% to-sky-50/70 border-t border-sky-100 overflow-hidden">
      {/* Background Architectural Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-slate-100">
          <div>
            {/* Architectural Line & Eyebrow */}
            <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-cobalt-600 uppercase mb-3 font-bold">
              <span>01 / THE LAND</span>
              <div className="w-10 h-[1.5px] bg-cobalt-600"></div>
            </div>
            {/* Clear, Highly Readable Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-navy-900 uppercase">
              10 ACRES. <span className="text-cobalt-600">ONE CANVAS.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base font-sans text-slate-600 max-w-md leading-relaxed font-normal">
            A continuous ten-acre topography shaped into a secure, low-density gated community. 
            Every parcel is oriented to embrace natural daylight, cross-breezes, and tranquil green vistas.
          </p>
        </div>

        {/* Minimal Architectural Information Blocks (Statistics) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projectStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-sky-100 bg-white/90 backdrop-blur-md relative overflow-hidden group hover:border-cobalt-400 hover:shadow-arch-hover transition-all duration-300 shadow-arch-card"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-sky-50 rounded-bl-full pointer-events-none group-hover:bg-sky-100/60 transition-colors"></div>
              
              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-navy-900 group-hover:text-cobalt-600 transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs font-mono tracking-widest text-cobalt-600 uppercase font-bold">
                  {stat.unit}
                </span>
              </div>

              <h3 className="text-sm font-sans tracking-wide text-navy-900 uppercase font-bold mb-2">
                {stat.label}
              </h3>
              
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {stat.description}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>SPECIFICATION // 0{idx + 1}</span>
                <span className="text-cobalt-600 font-semibold">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Site Boundary & Spatial Matrix Card — Clean Architectural Layout */}
        <div className="p-8 md:p-10 rounded-2xl border border-sky-200 bg-gradient-to-r from-white via-sky-50/40 to-white shadow-arch-card relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="space-y-2.5">
              <span className="text-xs font-mono tracking-widest text-cobalt-600 uppercase font-bold">
                GEOMETRIC INTEGRITY
              </span>
              <h4 className="text-xl font-sans text-navy-900 uppercase font-extrabold">
                Continuous 10-Acre Perimeter
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Protected by an engineered 2,780-linear-foot perimeter bio-buffer with acoustic tree barriers and CCTV-controlled gated access.
              </p>
            </div>

            <div className="space-y-2.5 md:border-l md:border-slate-200 md:pl-8">
              <span className="text-xs font-mono tracking-widest text-cobalt-600 uppercase font-bold">
                LOW-DENSITY MASTERPLAN
              </span>
              <h4 className="text-xl font-sans text-navy-900 uppercase font-extrabold">
                189 Exclusive Residences
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Average footprint ratio strictly limited to allow expansive 40ft/30ft avenues, central water bodies, and private backyards.
              </p>
            </div>

            <div className="space-y-2.5 md:border-l md:border-slate-200 md:pl-8">
              <span className="text-xs font-mono tracking-widest text-cobalt-600 uppercase font-bold">
                COMMUNAL SPINE
              </span>
              <h4 className="text-xl font-sans text-navy-900 uppercase font-extrabold">
                15,000+ Sq.Ft Social Hub
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Centralized multi-level clubhouse with half-Olympic lap pool, banquet halls, and guest accommodations within 3 minutes of every villa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

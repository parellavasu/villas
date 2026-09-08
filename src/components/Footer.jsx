import React from 'react';
import { Compass, ShieldCheck, MapPin, ArrowUp } from 'lucide-react';
import { projectMeta, journeyChapters } from '../data/projectData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-charcoal-950 border-t border-white/10 pt-20 pb-12 px-6 md:px-12 text-stone-400">
      <div className="max-w-7xl mx-auto">
        {/* Upper Brand & Coordinates Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded border border-bronze-500/50 bg-charcoal-900 flex items-center justify-center text-bronze-400 font-cinzel font-bold text-base">
                AG
              </div>
              <span className="font-cinzel text-xl font-bold tracking-widest text-ivory-100 uppercase">
                ANTELIA GROVES
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 font-light max-w-sm leading-relaxed">
              A 10-acre low-density sanctuary of 189 contemporary villas and a 15,000+ sq.ft clubhouse. 
              Crafted as an architectural dialogue between raw earth and refined living.
            </p>

            <div className="flex items-center space-x-3 text-[11px] font-mono text-bronze-400/90 pt-2">
              <Compass size={14} />
              <span>12.9842° N, 77.5946° E • ELEVATION: 924M AMSL</span>
            </div>
          </div>

          {/* Quick Chapter Navigation */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-bronze-400 uppercase block">
              // PROJECT CHAPTERS
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {journeyChapters.slice(0, 10).map((ch) => (
                <a
                  key={ch.id}
                  href={`#${ch.id}`}
                  className="text-stone-400 hover:text-ivory-100 transition-colors py-0.5"
                >
                  {ch.number} {ch.title}
                </a>
              ))}
            </div>
          </div>

          {/* Specifications Snapshot */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-bronze-400 uppercase block">
              // ARCHITECTURAL DOSSIER
            </span>
            <div className="space-y-1.5 text-xs font-mono text-stone-300">
              <div>TOTAL AREA: <span className="text-ivory-100 font-semibold">10.0 ACRES</span></div>
              <div>VILLAS: <span className="text-ivory-100 font-semibold">189 HOMES (G+2)</span></div>
              <div>TYPE A EAST/WEST: <span className="text-ivory-100 font-semibold">2,262 SQ.FT BUA</span></div>
              <div>PRIVATE BACKYARDS: <span className="text-ivory-100 font-semibold">180 SQ.FT</span></div>
              <div>CLUBHOUSE: <span className="text-ivory-100 font-semibold">15,000+ SQ.FT</span></div>
            </div>
          </div>
        </div>

        {/* Lower Legal & Disclaimer Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-mono">
          <p className="text-stone-400 max-w-xl">
            Disclaimer: The land-development sequence and 3D architectural representations presented are artistic concepts and design visualizations of Antelia Groves. All dimensions, specifications, and layout plans are subject to final municipal approvals and RERA guidelines.
          </p>

          <div className="flex items-center space-x-6 shrink-0">
            <span>© {new Date().getFullYear()} ANTELIA GROVES</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-white/10 hover:border-bronze-400 text-stone-400 hover:text-ivory-100 transition-colors"
              title="Return to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

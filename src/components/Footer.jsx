import React from 'react';
import { Compass, ArrowUp } from 'lucide-react';
import { journeyChapters } from '../data/projectData';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-arch-100 border-t border-sky-100 pt-20 pb-12 px-6 md:px-12 text-slate-600">
      <div className="max-w-7xl mx-auto">
        {/* Upper Brand & Coordinates Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-200">
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" />

            <p className="text-xs sm:text-sm text-slate-500 font-sans font-normal max-w-sm leading-relaxed pt-2">
              A 10-acre low-density sanctuary of 189 contemporary villas and a 15,000+ sq.ft clubhouse. 
              Crafted as an architectural dialogue between raw earth and refined modern living.
            </p>

            <div className="flex items-center space-x-3 text-[11px] font-mono text-cobalt-600 font-semibold pt-1">
              <Compass size={14} />
              <span>12.9842° N, 77.5946° E • ELEVATION: 924M AMSL</span>
            </div>
          </div>

          {/* Quick Chapter Navigation */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-cobalt-600 uppercase block font-bold">
              // PROJECT CHAPTERS
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-sans">
              {journeyChapters.slice(0, 10).map((ch) => (
                <a
                  key={ch.id}
                  href={`#${ch.id}`}
                  className="text-slate-600 hover:text-cobalt-600 transition-colors py-0.5 font-medium"
                >
                  {ch.number} {ch.title}
                </a>
              ))}
            </div>
          </div>

          {/* Specifications Snapshot */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-cobalt-600 uppercase block font-bold">
              // ARCHITECTURAL DOSSIER
            </span>
            <div className="space-y-1.5 text-xs font-sans text-slate-700 bg-white p-4 rounded-xl border border-sky-100 shadow-sm">
              <div>TOTAL AREA: <span className="text-navy-900 font-bold">10.0 ACRES</span></div>
              <div>VILLAS: <span className="text-navy-900 font-bold">189 HOMES (G+2)</span></div>
              <div>TYPE A EAST/WEST: <span className="text-navy-900 font-bold">2,262 SQ.FT BUA</span></div>
              <div>PRIVATE BACKYARDS: <span className="text-navy-900 font-bold">180 SQ.FT</span></div>
              <div>CLUBHOUSE: <span className="text-navy-900 font-bold">15,000+ SQ.FT</span></div>
            </div>
          </div>
        </div>

        {/* Lower Legal & Disclaimer Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-sans text-slate-400">
          <p className="max-w-xl leading-relaxed">
            Disclaimer: The land-development sequence and 3D architectural representations presented are artistic concepts and design visualizations of Antelia Groves. All dimensions, specifications, and layout plans are subject to final municipal approvals and RERA guidelines.
          </p>

          <div className="flex items-center space-x-6 shrink-0">
            <span className="font-semibold text-slate-500">© {new Date().getFullYear()} ANTELIA GROVES</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-slate-200 hover:border-cobalt-500 text-slate-600 hover:text-cobalt-600 transition-colors bg-white shadow-sm"
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

import React from 'react';
import Logo from './Logo';
import { ArrowUpRight, ArrowRight, ShieldCheck, Calendar, PhoneCall, Compass, CheckCircle2 } from 'lucide-react';

export default function Section06ExploreFinal({ onExploreVillas, onOpenBooking }) {
  return (
    <section
      id="explore"
      className="relative bg-[#FAF9F5] text-[#141917] pt-16 sm:pt-20 pb-12 overflow-hidden border-t border-[#EBE7DF] font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* =========================================================
            1. SECTION HEADER
            ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-2.5 mb-2.5">
            <span className="w-6 h-[1.5px] bg-[#C5A880]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-[#B89047] uppercase">
              08 / DISCOVER & INQUIRE
            </span>
            <span className="w-6 h-[1.5px] bg-[#C5A880]" />
          </div>
          <h2 className="font-sans font-semibold text-[30px] sm:text-[38px] lg:text-[42px] tracking-tight text-[#141917] leading-tight mb-3">
            DISCOVER ANTELIA GROVES
          </h2>
          <p className="text-[14.5px] sm:text-[15.5px] text-[#5A6862] font-normal leading-relaxed">
            189 bespoke independent split-level residences set amidst 10 contiguous acres of preserved nature, crafted for discerning families who value architectural clarity and lasting heritage.
          </p>
        </div>

        {/* =========================================================
            2. PANORAMIC AERIAL SANCTUARY RENDER
            ========================================================= */}
        <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full rounded-xs overflow-hidden border border-[#EBE7DF] shadow-xl mb-12 group bg-[#F2EDE4]">
          <img
            src="/images/masterplan/01_masterplan_aerial_10acres.jpg"
            alt="Antelia Groves 10-Acre Panoramic Community View"
            className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141917]/75 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-white pointer-events-none">
            <div className="font-mono text-[11px] sm:text-[12px] tracking-widest text-[#E8D8BA] uppercase font-semibold">
              10 ACRES · 189 INDEPENDENT RESIDENCES · A LIVING SANCTUARY
            </div>
            <div className="hidden sm:block font-mono text-[11px] text-white/90 uppercase tracking-wider">
              SOUTH BENGALURU CORRIDOR
            </div>
          </div>
        </div>

        {/* =========================================================
            3. CENTRAL VIP CALL-TO-ACTION ESTATE CARD
            Refined White & Gold luxury styling with crystal-clear readability
            ========================================================= */}
        <div className="max-w-3xl mx-auto text-center p-8 sm:p-11 bg-white border border-[#C5A880]/50 rounded-xs mb-16 shadow-xl">
          <div className="text-[11px] font-mono tracking-widest text-[#B89047] uppercase font-semibold mb-2">
            PRIVATE CONSULTATIONS & SITE VIEWINGS
          </div>
          <h3 className="text-[24px] sm:text-[30px] font-semibold text-[#141917] mb-3 leading-tight">
            Schedule Your Private Estate Experience
          </h3>
          <p className="text-[14px] sm:text-[14.5px] text-[#5A6862] mb-8 max-w-xl mx-auto leading-relaxed">
            Walk the 10-acre site, inspect split-level villa architectural drawings, and consult directly with our senior development advisors.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#B89047] hover:bg-[#967433] text-white text-[12px] font-semibold uppercase tracking-[0.2em] rounded-xs transition-all duration-300 shadow-md group cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>SCHEDULE A VISIT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-white border-2 border-[#B89047] text-[#B89047] hover:bg-[#FAF8F5] text-[12px] font-semibold uppercase tracking-[0.2em] rounded-xs transition-all duration-300 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B89047]" />
              <span>ENQUIRE NOW</span>
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-[#EBE7DF] flex flex-wrap items-center justify-center gap-6 text-[12px] font-mono text-[#4A5750]">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#B89047]" />
              <span>Immediate Brochure Dispatch</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#B89047]" />
              <span>No Spam Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#B89047]" />
              <span>Dedicated Villa Concierge</span>
            </div>
          </div>
        </div>

        {/* =========================================================
            4. CLEAR, HIGH-CONTRAST ARCHITECTURAL FOOTER
            ========================================================= */}
        <footer className="pt-10 border-t border-[#EBE7DF] grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 text-[13px] text-[#4A5750]">
          
          {/* Col 1: Wordmark Logo & Project Identity */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <Logo size="md" light={false} />
            <p className="text-[13px] text-[#5A6862] max-w-sm font-normal leading-relaxed pt-1">
              A 10-acre gated villa community in South Bengaluru. Designed with architectural clarity, split-level living, biophilic landscapes, and generational permanence.
            </p>
            <div className="text-[12px] font-mono text-[#8C9E96]">
              A Flagship Development by the Creators of Krafted Homes
            </div>
          </div>

          {/* Col 2: Navigation Chapters */}
          <div className="md:col-span-4 flex flex-col space-y-2">
            <div className="text-[11px] font-mono tracking-widest text-[#B89047] uppercase mb-1.5 font-semibold">
              PROJECT CHAPTERS
            </div>
            <div className="grid grid-cols-2 gap-2 text-[12.5px]">
              <a href="#vision" className="text-[#3D4944] hover:text-[#B89047] font-medium transition-colors">01 / The Vision</a>
              <a href="#overview" className="text-[#3D4944] hover:text-[#B89047] font-medium transition-colors">02 / Current Project</a>
              <a href="#about" className="text-[#3D4944] hover:text-[#B89047] font-medium transition-colors">03 / About Us</a>
              <a href="#journey" className="text-[#3D4944] hover:text-[#B89047] font-medium transition-colors">04 / The Process</a>
              <a href="#masterplan" className="text-[#3D4944] hover:text-[#B89047] font-medium transition-colors">05 / The Masterplan</a>
              <a href="#villas" className="text-[#3D4944] hover:text-[#B89047] font-medium transition-colors">06 / The Villas</a>
              <a href="#portfolio" className="text-[#3D4944] hover:text-[#B89047] font-medium transition-colors">07 / Previous Works</a>
              <a href="#location" className="text-[#3D4944] hover:text-[#B89047] font-medium transition-colors">08 / The Location</a>
            </div>
          </div>

          {/* Col 3: RERA & Statutory Compliance */}
          <div className="md:col-span-4 flex flex-col space-y-2 text-[12px]">
            <div className="text-[11px] font-mono tracking-widest text-[#B89047] uppercase mb-1.5 font-semibold">
              STATUTORY COMPLIANCE
            </div>
            <div className="flex items-start space-x-2 text-[#141917] font-semibold bg-[#F5F2EA] p-3 rounded-xs border border-[#EBE7DF]">
              <ShieldCheck className="w-4 h-4 text-[#B89047] shrink-0 mt-0.5" />
              <span>Karnataka RERA Approved:<br /><span className="text-[#B89047] font-mono">PRM/KA/RERA/1251/308/PR/210219/003920</span></span>
            </div>
            <div className="text-[#5A6862] mt-2 font-sans">
              Site Coordinates: 12°47'28"N 77°41'12"E · Electronic City Corridor, Bengaluru
            </div>
            <div className="text-[#8C9E96] font-mono text-[11px]">
              © {new Date().getFullYear()} Antelia Groves. All Rights Reserved.
            </div>
          </div>

        </footer>

      </div>
    </section>
  );
}

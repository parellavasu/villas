import React from 'react';
import Logo from './Logo';
import { ArrowUpRight, ArrowRight, ShieldCheck, Calendar, PhoneCall, Compass, CheckCircle2 } from 'lucide-react';

export default function Section06ExploreFinal({ onExploreVillas, onOpenBooking }) {
  return (
    <section
      id="explore"
      className="relative bg-white text-[#111827] py-5 sm:py-6 lg:py-8 overflow-hidden border-t border-gray-200 font-sans scroll-mt-[74px] lg:min-h-[calc(100vh-74px)] flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full flex-1 flex flex-col justify-between">
        
        {/* =========================================================
            1. SECTION HEADER: COMPACT
            ========================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-3 sm:mb-3.5">
          <div className="inline-flex items-center space-x-2 mb-1">
            <span className="w-4 h-[1.5px] bg-[#EA580C]" />
            <span className="font-mono text-[10px] sm:text-[10.5px] font-semibold tracking-[0.25em] text-[#EA580C]">
              09 / Discover &amp; Inquire
            </span>
            <span className="w-4 h-[1.5px] bg-[#EA580C]" />
          </div>
          <h2 className="font-serif font-bold text-[24px] sm:text-[28px] lg:text-[32px] tracking-tight text-[#111827] leading-tight mb-1">
            Discover Antelia Groves
          </h2>
          <p className="text-[12px] sm:text-[13px] text-[#4B5563] font-normal leading-relaxed">
            189 bespoke split-level residences set amidst 10 contiguous acres of preserved nature in South Bengaluru.
          </p>
        </div>

        {/* =========================================================
            2. PANORAMIC AERIAL SANCTUARY RENDER
            ========================================================= */}
        <div className="relative aspect-[28/7] h-[85px] sm:h-[105px] lg:h-[115px] w-full rounded-xs overflow-hidden border border-gray-200 shadow-xs mb-3 sm:mb-4 group bg-[#FAFAF9]">
          <img
            src="/images/masterplan/01_masterplan_aerial_10acres.jpg"
            alt="Antelia Groves 10-Acre Panoramic Community View"
            className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white pointer-events-none">
            <div className="font-mono text-[9px] sm:text-[9.5px] tracking-widest text-[#FED7AA] font-semibold">
              10 Acres · 189 Independent Residences · A Living Sanctuary
            </div>
            <div className="hidden sm:block font-mono text-[9px] text-white/90 tracking-wider">
              South Bengaluru Corridor
            </div>
          </div>
        </div>

        {/* =========================================================
            3. CENTRAL VIP CALL-TO-ACTION ESTATE CARD
            ========================================================= */}
        <div className="max-w-2xl mx-auto text-center p-4 sm:p-5 bg-gradient-to-b from-white to-[#FFF7ED]/50 border border-[#FED7AA] rounded-sm mb-4 sm:mb-5 shadow-luxury w-full">
          <div className="text-[9.5px] font-mono tracking-widest text-[#EA580C] font-semibold mb-0.5">
            Private Consultations &amp; Site Viewings
          </div>
          <h3 className="font-serif text-[19px] sm:text-[22px] font-bold text-[#111827] mb-1 leading-tight">
            Schedule Your Private Estate Experience
          </h3>
          <p className="text-[12px] sm:text-[12.5px] text-[#4B5563] mb-3 max-w-lg mx-auto leading-relaxed">
            Walk the 10-acre site, inspect split-level villa architectural drawings, and consult directly with our senior development advisors.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center space-x-1.5 px-5 py-2 bg-[#EA580C] hover:bg-[#C2410C] text-white text-[10.5px] font-bold tracking-[0.16em] rounded-xs transition-all duration-300 shadow-sm group cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Schedule A Visit</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center space-x-1.5 px-5 py-2 bg-white border-2 border-[#EA580C] text-[#EA580C] hover:bg-[#FFF7ED] text-[10.5px] font-semibold tracking-[0.16em] rounded-xs transition-all duration-300 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Enquire Now</span>
            </button>
          </div>

          <div className="mt-3 pt-2.5 border-t border-gray-200 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10.5px] font-mono text-[#6B7280]">
            <div className="flex items-center space-x-1">
              <CheckCircle2 className="w-3 h-3 text-[#EA580C]" />
              <span>Immediate Brochure Dispatch</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle2 className="w-3 h-3 text-[#EA580C]" />
              <span>No Spam Guarantee</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle2 className="w-3 h-3 text-[#EA580C]" />
              <span>Dedicated Villa Concierge</span>
            </div>
          </div>
        </div>

        {/* =========================================================
            4. CLEAR, HIGH-CONTRAST ARCHITECTURAL FOOTER
            ========================================================= */}
        <footer className="pt-3.5 border-t border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 text-[12px] text-[#6B7280]">
          
          {/* Col 1: Wordmark Logo & Project Identity */}
          <div className="md:col-span-4 flex flex-col space-y-1.5">
            <Logo size="sm" light={false} />
            <p className="text-[11.5px] text-[#6B7280] max-w-sm font-normal leading-relaxed pt-0.5">
              A 10-acre gated villa community in South Bengaluru. Designed with architectural clarity, split-level living, and generational permanence.
            </p>
            <div className="text-[10.5px] font-mono text-[#EA580C] font-semibold">
              A Flagship Development by the Creators of Krafted Homes
            </div>
          </div>

          {/* Col 2: Navigation Chapters */}
          <div className="md:col-span-4 flex flex-col space-y-1">
            <div className="text-[9.5px] font-mono tracking-widest text-[#EA580C] mb-0.5 font-semibold">
              Project Chapters
            </div>
            <div className="grid grid-cols-2 gap-1 text-[11px]">
              <a href="#vision" className="text-[#6B7280] hover:text-[#EA580C] font-medium transition-colors">01 / The Vision</a>
              <a href="#overview" className="text-[#6B7280] hover:text-[#EA580C] font-medium transition-colors">02 / Current Project</a>
              <a href="#about" className="text-[#6B7280] hover:text-[#EA580C] font-medium transition-colors">03 / About Us</a>
              <a href="#journey" className="text-[#6B7280] hover:text-[#EA580C] font-medium transition-colors">04 / The Process</a>
              <a href="#masterplan" className="text-[#6B7280] hover:text-[#EA580C] font-medium transition-colors">05 / The Masterplan</a>
              <a href="#villas" className="text-[#6B7280] hover:text-[#EA580C] font-medium transition-colors">06 / The Villas</a>
              <a href="#portfolio" className="text-[#6B7280] hover:text-[#EA580C] font-medium transition-colors">07 / Previous Works</a>
              <a href="#location" className="text-[#6B7280] hover:text-[#EA580C] font-medium transition-colors">08 / The Location</a>
            </div>
          </div>

          {/* Col 3: RERA & Statutory Compliance */}
          <div className="md:col-span-4 flex flex-col space-y-1 text-[11px]">
            <div className="text-[9.5px] font-mono tracking-widest text-[#EA580C] mb-0.5 font-semibold">
              Statutory Compliance
            </div>
            <div className="flex items-start space-x-1.5 text-[#111827] font-semibold bg-[#FAFAF9] p-2 rounded-xs border border-gray-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#EA580C] shrink-0 mt-0.5" />
              <span>Karnataka RERA Approved:<br /><span className="text-[#EA580C] font-mono text-[10px]">PRM/KA/RERA/1251/308/PR/210219/003920</span></span>
            </div>
            <div className="text-[#6B7280] font-sans text-[10.5px]">
              Coordinates: 12°47'28"N 77°41'12"E · Electronic City Corridor, Bengaluru
            </div>
            <div className="text-gray-400 font-mono text-[10px]">
              © {new Date().getFullYear()} Antelia Groves. All Rights Reserved.
            </div>
          </div>

        </footer>

      </div>
    </section>
  );
}

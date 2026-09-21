import React, { useState } from 'react';
import { MapPin, Navigation, Train, Building, GraduationCap, HeartPulse, Compass, ExternalLink, Car, Clock } from 'lucide-react';
import RealisticLocationMap from './RealisticLocationMap';

export default function Section05NatureLocation() {
  const [activeTab, setActiveTab] = useState('work');

  const categories = {
    work: {
      label: 'WORK HUBS',
      icon: Building,
      items: [
        { name: 'Electronic City Phase 1 & 2', dist: '10–12 Mins', km: '6.5 km', note: 'Wipro HQ, Infosys Campus, TCS, Continental, Tech Mahindra' },
        { name: 'Bommasandra Industrial Corridor', dist: '8 Mins', km: '4.8 km', note: 'Biocon Park, Micro Labs, Schneider Electric, SKF India' },
        { name: 'Jigani Tech Corridor', dist: '14 Mins', km: '9.2 km', note: 'TVS Motor Company, Ashok Leyland, HCL Technologies' },
        { name: 'Sarjapur IT Spine', dist: '20 Mins', km: '14.0 km', note: 'Wipro Corporate Campus, RGA Tech Park, Decathlon HQ' },
      ],
    },
    transit: {
      label: 'TRANSIT & HIGHWAYS',
      icon: Train,
      items: [
        { name: 'Hosur Road (NH 44 Expressway)', dist: '6 Mins', km: '3.2 km', note: 'Direct elevated 10-lane expressway into Koramangala & Central Bengaluru' },
        { name: 'NICE Peripheral Ring Road', dist: '9 Mins', km: '5.6 km', note: 'Signal-free ring road to Bannerghatta Rd, Kanakapura Rd & Tumkur Rd' },
        { name: 'Bommasandra Metro Station (Yellow Line)', dist: '8–10 Mins', km: '4.8 km', note: 'Operational Namma Metro connecting to Silk Board & RV Road' },
        { name: 'Proposed Metro Neo Extension', dist: '5 Mins', km: '2.8 km', note: 'Direct planned rapid feeder corridor connecting to Electronic City' },
      ],
    },
    health: {
      label: 'HEALTHCARE',
      icon: HeartPulse,
      items: [
        { name: 'Narayana Health City', dist: '10 Mins', km: '5.2 km', note: 'World-renowned 5,000+ bed multispecialty hospital campus & cardiac center' },
        { name: 'Sparsh Superspecialty Hospital', dist: '12 Mins', km: '7.1 km', note: 'Tier-1 trauma center, orthopedic surgery and tertiary medical care' },
        { name: 'Vimalaya Multispecialty Hospital', dist: '8 Mins', km: '4.5 km', note: '24/7 pediatric emergency, general medicine and intensive care' },
        { name: 'Mazumdar Shaw Cancer Center', dist: '11 Mins', km: '6.8 km', note: 'Leading oncology and robotic surgery institution' },
      ],
    },
    education: {
      label: 'ACADEMIC CAMPUSES',
      icon: GraduationCap,
      items: [
        { name: 'Alliance University Campus', dist: '12 Mins', km: '7.0 km', note: 'Premier engineering, business, and liberal arts residential campus' },
        { name: 'PES University South Campus', dist: '15 Mins', km: '9.8 km', note: 'Leading technology and scientific research institution' },
        { name: 'Treamis World School', dist: '9 Mins', km: '5.2 km', note: 'IB World School offering Cambridge & CBSE international curricula' },
        { name: 'Delhi Public School (DPS) South', dist: '14 Mins', km: '8.9 km', note: 'Reputed K-12 primary and secondary educational institution' },
      ],
    },
  };

  const activeData = categories[activeTab];

  return (
    <section
      id="location"
      className="relative bg-[#FAFAF9] text-[#111827] py-5 sm:py-6 lg:py-8 border-t border-gray-200 overflow-hidden scroll-mt-[74px] font-sans lg:min-h-[calc(100vh-74px)] flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        
        {/* COMPACT SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-3 sm:mb-4 pb-3 border-b border-gray-200 gap-2">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 mb-1">
              <span className="w-4 h-[1.5px] bg-[#EA580C]" />
              <span className="font-mono text-[10.5px] font-semibold tracking-[0.25em] text-[#EA580C] uppercase">
                08 / THE LOCATION
              </span>
            </div>
            <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] lg:text-[28px] tracking-tight text-[#111827] leading-tight">
              CONNECTED TO BENGALURU. CLOSE TO WHAT MATTERS.
            </h2>
          </div>

          <p className="text-[12.5px] sm:text-[13px] text-[#4B5563] max-w-md md:text-right font-normal leading-relaxed">
            Positioned in South Bengaluru’s high-growth corridor. 10 mins to Electronic City, yet insulated in nature.
          </p>
        </div>

        {/* 4 QUICK TRAVEL TIME BANNERS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-3.5 sm:mb-4">
          {[
            { dest: 'HOSUR RD (NH 44)', time: '6 MINS', sub: 'Signal-free flyover' },
            { dest: 'NICE EXPRESSWAY', time: '9 MINS', sub: 'Peripheral ring road' },
            { dest: 'ELECTRONIC CITY', time: '10–12 MINS', sub: 'Major IT tech hubs' },
            { dest: 'SARJAPUR ROAD', time: '20 MINS', sub: 'Wipro HQ & tech corridor' },
          ].map((h, i) => (
            <div
              key={i}
              className="p-2.5 sm:p-3 bg-white border border-gray-200 rounded-sm shadow-xs hover:border-[#EA580C] transition-all duration-300 flex items-center justify-between"
            >
              <div>
                <div className="flex items-center space-x-1 text-[9px] font-mono tracking-widest text-[#EA580C] uppercase font-semibold">
                  <Clock className="w-2.5 h-2.5 text-[#EA580C]" />
                  <span>{h.dest}</span>
                </div>
                <div className="text-[17px] sm:text-[19px] font-sans font-bold text-[#111827] tracking-tight mt-0.5 leading-tight">
                  {h.time}
                </div>
              </div>
              <div className="text-[10px] text-[#6B7280] text-right font-mono hidden sm:block">{h.sub}</div>
            </div>
          ))}
        </div>

        {/* SPLIT ROUTE MATRIX & INTERACTIVE MAP CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* Left Column: Realistic Interactive Map */}
          <div className="lg:col-span-7 flex flex-col bg-white border border-gray-200 rounded-sm overflow-hidden shadow-luxury">
            <RealisticLocationMap activeTab={activeTab} />
          </div>

          {/* Right Column: Interactive Category Filter & List */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-gray-200 rounded-sm overflow-hidden shadow-luxury">
            
            <div>
              {/* 4 Filter Tabs */}
              <div className="grid grid-cols-4 gap-1 p-1.5 bg-[#FAFAF9] border-b border-gray-200">
                {Object.entries(categories).map(([key, cat]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`py-1.5 px-1 text-center text-[9.5px] sm:text-[10px] font-mono tracking-wider uppercase transition-all rounded-xs cursor-pointer ${
                      activeTab === key
                        ? 'bg-[#EA580C] text-white font-bold shadow-xs'
                        : 'text-[#6B7280] hover:text-[#111827] hover:bg-white/80'
                    }`}
                  >
                    {cat.label.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Selected Category Header */}
              <div className="py-2.5 px-3.5 bg-white border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <activeData.icon className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-[#111827] uppercase">
                    {activeData.label}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#EA580C] font-semibold">
                  {activeData.items.length} DESTINATIONS
                </span>
              </div>

              {/* Items List */}
              <div className="p-3 sm:p-3.5 space-y-2">
                {activeData.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 sm:p-2.5 bg-[#FAFAF9] rounded-xs border border-gray-200 flex items-center justify-between hover:bg-[#FFF7ED]/50 hover:border-[#FED7AA] transition-colors"
                  >
                    <div className="pr-2">
                      <div className="text-[12.5px] font-semibold text-[#111827] leading-tight">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-[#6B7280] leading-snug line-clamp-1 mt-0.5">
                        {item.note}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-[12px] font-mono font-bold text-[#EA580C]">
                        {item.dist}
                      </div>
                      <div className="text-[9.5px] font-mono text-[#6B7280]">
                        {item.km}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="py-2 px-3 bg-[#FAFAF9] border-t border-gray-200 text-center">
              <span className="text-[11px] text-[#6B7280]">
                Complimentary chauffeur estate shuttles available during private viewings.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

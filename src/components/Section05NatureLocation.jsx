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
      className="relative bg-[#FAFAF7] text-[#141917] py-14 sm:py-16 border-t border-[#EBE7DF] overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-[#EBE7DF]">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2.5 text-[11px] font-mono tracking-[0.25em] text-[#B89047] uppercase mb-2">
              <span className="w-5 h-[1.5px] bg-[#B89047]" />
              <span>08 / THE LOCATION</span>
            </div>
            <h2 className="font-sans font-semibold text-[30px] sm:text-[36px] lg:text-[38px] tracking-tight text-[#141917] leading-tight">
              CONNECTED TO BENGALURU. CLOSE TO WHAT MATTERS.
            </h2>
          </div>

          <p className="text-[14px] sm:text-[15px] text-[#5A6862] max-w-md mt-3 md:mt-0 font-normal leading-relaxed">
            Positioned in South Bengaluru’s high-growth corridor. Close to Electronic City, major expressways, and premier civic infrastructure—yet completely insulated within a 10-acre peaceful grove.
          </p>
        </div>

        {/* 4 Quick Travel Time Banners */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
          {[
            { dest: 'HOSUR ROAD (NH 44)', time: '6 MINS', sub: 'Signal-free expressway' },
            { dest: 'NICE EXPRESSWAY', time: '9 MINS', sub: 'Peripheral ring connectivity' },
            { dest: 'ELECTRONIC CITY', time: '10–12 MINS', sub: 'Major IT tech campuses' },
            { dest: 'SARJAPUR ROAD', time: '20 MINS', sub: 'Tech corridor & Wipro HQ' },
          ].map((h, i) => (
            <div
              key={i}
              className="p-5 bg-white border border-[#E7E4DD] rounded-xs shadow-xs"
            >
              <div className="flex items-center space-x-1.5 text-[10.5px] font-mono tracking-widest text-[#B8A58A] uppercase font-semibold">
                <Clock className="w-3 h-3 text-[#B8A58A]" />
                <span>{h.dest}</span>
              </div>
              <div className="text-[26px] sm:text-[30px] font-sans font-semibold text-[#B89047] tracking-tight mt-1">
                {h.time}
              </div>
              <div className="text-[12px] text-[#5A6862] mt-0.5">
                {h.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Split Route Matrix & Interactive Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Realistic Interactive Map with Prominently Highlighted Antelia Groves */}
          <div className="lg:col-span-7 flex flex-col bg-white border border-[#E7E4DD] rounded-xs overflow-hidden shadow-sm">
            <RealisticLocationMap activeTab={activeTab} />
          </div>

          {/* Right Column: Interactive Category Filter & List */}
          <div className="lg:col-span-5 flex flex-col bg-white border border-[#E7E4DD] rounded-xs overflow-hidden shadow-sm">
            
            {/* 4 Filter Tabs */}
            <div className="grid grid-cols-4 gap-1 p-2 bg-[#F7F6F2] border-b border-[#E7E4DD]">
              {Object.entries(categories).map(([key, cat]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`py-2 px-1 text-center text-[10px] sm:text-[11px] font-mono tracking-wider uppercase transition-all rounded-xs ${
                    activeTab === key
                      ? 'bg-[#B89047] text-white font-semibold shadow-xs'
                      : 'text-[#5A6862] hover:text-[#1D2421] hover:bg-white'
                  }`}
                >
                  {cat.label.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Selected Category Header */}
            <div className="p-4 bg-white border-b border-[#E7E4DD] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <activeData.icon className="w-4 h-4 text-[#B89047]" />
                <span className="text-[12px] font-mono font-semibold tracking-wider text-[#1D2421] uppercase">
                  {activeData.label}
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#B8A58A] font-semibold">
                {activeData.items.length} KEY DESTINATIONS
              </span>
            </div>

            {/* Items List */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
              {activeData.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-[#F7F6F2]/70 rounded-xs border border-[#E7E4DD] flex items-start justify-between hover:bg-white hover:border-[#D8D4CA] transition-colors"
                >
                  <div className="pr-3">
                    <div className="text-[14px] font-semibold text-[#1D2421]">
                      {item.name}
                    </div>
                    <div className="text-[12px] text-[#5A6862] mt-0.5 leading-relaxed">
                      {item.note}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-[13.5px] font-mono font-bold text-[#B89047]">
                      {item.dist}
                    </div>
                    <div className="text-[10px] font-mono text-[#5A6862]">
                      {item.km}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Callout */}
            <div className="p-4 bg-[#F0EDE5]/60 border-t border-[#E7E4DD] text-center">
              <span className="text-[12px] text-[#5A6862]">
                Complimentary chauffeur estate shuttles available during private viewings.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

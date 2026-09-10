import React from 'react';
import { MapPin, Navigation2, Trees } from 'lucide-react';

export default function Section05NatureConnectivity() {
  const natureHighlights = [
    { title: 'Private Villa Gardens', desc: '180–300+ sq.ft enclosed backyard garden connecting to living room.' },
    { title: 'Green Balconies', desc: 'Cantilevered glass balconies with planters overlooking shaded avenues.' },
    { title: 'Community Gardens', desc: 'Central park with manicured lawns and native canopy trees.' },
    { title: 'Butterfly Meadows', desc: 'Biodiverse flowering gardens sustaining native butterfly species.' },
    { title: 'Shaded Walkways', desc: 'Pedestrian corridors shaded by mature mahogany trees.' }
  ];

  const connectivityDestinations = [
    { hub: 'Electronic City Tech Hub', time: '12 MINS', desc: 'Wipro, Infosys, TCS, TVS Motors, Ashok Leyland' },
    { hub: 'Hosur Road Expressway (NH 44)', time: '08 MINS', desc: 'Direct 10-lane highway connecting central Bengaluru' },
    { hub: 'NICE Ring Road Corridor', time: '10 MINS', desc: 'Signal-free connection to Bannerghatta and Kanakapura Road' },
    { hub: 'Proposed Metro Neo Station', time: '06 MINS', desc: 'Upcoming mass rapid transit line on Bommasandra-Jigani link' },
    { hub: 'Healthcare & Universities', time: '10-15 MINS', desc: 'Narayana Hrudayalaya, Oxford Medical, Alliance & PES University' },
  ];

  return (
    <section
      id="location"
      className="relative py-12 sm:py-16 px-6 md:px-12 bg-gradient-to-r from-white via-[#F6FAFD] via-45% to-navy-950/[0.08] border-t border-sky-100 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header: Controlled Max Width with Natural Line Break */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-4 border-b border-slate-100">
          <div className="max-w-md">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono tracking-widest text-cobalt-600 uppercase mb-2 font-semibold">
              <span>05 / NATURE & CONNECTIVITY</span>
              <div className="w-5 h-[1.5px] bg-cobalt-600"></div>
            </div>
            {/* Main Section Heading: 30–40px Desktop, 24–30px Mobile, Weight 600 */}
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-sans font-semibold tracking-tight text-navy-950 uppercase leading-snug mb-1.5">
              CONNECTED TO<br />EVERYTHING THAT MATTERS
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-[14px] sm:text-[15px] font-sans text-slate-600 max-w-sm leading-[1.6] font-normal">
            A quiet biophilic sanctuary positioned minutes away from Electronic City, expressways, and essential institutions.
          </p>
        </div>

        {/* 2-Column Split: Nature (5 cols) & Connectivity (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Nature Area (5 cols) */}
          <div className="lg:col-span-5 rounded-xl p-4 sm:p-5 border border-sky-200/80 bg-white/95 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-widest text-emerald-600 font-semibold mb-1.5">
                <Trees size={13} />
                <span>NATURE & BIOPHILIC LIVING</span>
              </div>
              <h3 className="text-[17px] sm:text-[19px] font-sans font-semibold text-navy-950 uppercase mb-1.5">
                45%+ Landscaped Green Canopy
              </h3>
              <p className="text-[12.5px] sm:text-[13px] font-sans text-slate-600 leading-relaxed font-normal mb-3">
                Over 45% of Antelia Groves is dedicated to landscaped open space, shaded tree avenues, and private garden plots.
              </p>

              <div className="space-y-1.5">
                {natureHighlights.map((item, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-sky-50/50 border border-sky-100">
                    <h5 className="text-[12.5px] font-sans font-semibold text-navy-950">
                      {item.title}
                    </h5>
                    <p className="text-[11.5px] font-sans text-slate-600 leading-normal font-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>CANOPY-FILTERED AIR</span>
              <span className="text-emerald-600 font-semibold">45%+ GREEN RATIO</span>
            </div>
          </div>

          {/* Connectivity Area (7 cols) */}
          <div className="lg:col-span-7 rounded-xl p-4 sm:p-5 border border-sky-200/80 bg-white/95 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-widest text-cobalt-600 font-semibold mb-1.5">
                <Navigation2 size={13} />
                <span>STRATEGIC CONNECTIVITY</span>
              </div>
              <h3 className="text-[17px] sm:text-[19px] font-sans font-semibold text-navy-950 uppercase mb-1.5">
                Minutes to Electronic City & Hosur Road
              </h3>

              {/* Destination Routes List */}
              <div className="space-y-1.5 mb-3">
                {connectivityDestinations.map((dest, idx) => (
                  <div
                    key={idx}
                    className="p-2 sm:p-2.5 rounded-lg bg-white border border-sky-100 flex items-center justify-between hover:border-cobalt-400 transition-colors"
                  >
                    <div className="flex items-start space-x-2">
                      <MapPin size={13} className="text-cobalt-600 mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-[12.5px] font-sans font-semibold text-navy-950 block">
                          {dest.hub}
                        </strong>
                        <span className="text-[11.5px] font-sans text-slate-500 font-normal">
                          {dest.desc}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-cobalt-600 shrink-0 ml-2 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-100">
                      {dest.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Institutions */}
              <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-mono text-slate-600">
                <div className="p-1 rounded bg-white border border-slate-100">
                  <span className="block font-semibold text-navy-950">WIPRO / INFOSYS</span>
                  <span>12 Mins</span>
                </div>
                <div className="p-1 rounded bg-white border border-slate-100">
                  <span className="block font-semibold text-navy-950">NARAYANA HOSP.</span>
                  <span>10 Mins</span>
                </div>
                <div className="p-1 rounded bg-white border border-slate-100">
                  <span className="block font-semibold text-navy-950">ALLIANCE / PES</span>
                  <span>08 Mins</span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>NH 44 & NICE ROAD ADJACENT</span>
              <span className="text-cobalt-600 font-semibold">PROPOSED METRO NEO 6 MINS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

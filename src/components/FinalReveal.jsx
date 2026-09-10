import React, { useState } from 'react';
import { ArrowRight, Download, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import Logo from './Logo';

export default function FinalReveal({ onOpenBooking }) {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    villaPreference: 'East Facing Type A',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#0284C7', '#0A2540', '#38BDF8']
      });
    } catch (err) {
      // ignore
    }
  };

  return (
    <section id="reveal" className="relative py-36 px-6 md:px-12 bg-gradient-to-r from-white via-sky-50/50 via-45% to-navy-950/15 border-t border-sky-100 overflow-hidden text-center">
      {/* Subtle Blue Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-100/30 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Editorial Sub-Headline */}
        <div className="inline-flex items-center space-x-3 text-xs font-mono tracking-widest text-cobalt-600 uppercase mb-6 font-bold">
          <span>13 / THE ARCHITECTURAL FINALE</span>
          <div className="w-10 h-[1.5px] bg-cobalt-600"></div>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-sans text-slate-500 uppercase tracking-wide mb-2 font-bold">
          FROM 10 ACRES OF LAND
        </h3>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-extrabold text-navy-900 uppercase tracking-tight mb-8">
          TO A PLACE <span className="text-cobalt-600">TO BELONG.</span>
        </h2>

        {/* Master Monogram Emblem */}
        <div className="mb-8 flex justify-center transform hover:scale-105 transition-transform duration-300">
          <Logo size="hero" />
        </div>

        {/* Living Landscape Creed */}
        <div className="max-w-2xl mx-auto space-y-2 mb-14 text-sm sm:text-base font-sans tracking-wide text-cobalt-600 uppercase font-extrabold">
          <p>A VIBRANT LIFESTYLE.</p>
          <p>A THOUGHTFULLY PLANNED COMMUNITY.</p>
          <p>A LANDSCAPE DESIGNED FOR LIVING.</p>
        </div>

        {/* VIP Private Inquiry & Dossier Request Box */}
        <div className="max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl border border-sky-200 bg-white/95 backdrop-blur-xl shadow-arch-card text-left">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-cobalt-600 uppercase font-bold">
                PRIVATE RESIDENCE INQUIRY
              </span>
              <h4 className="text-xl font-sans text-navy-900 uppercase font-extrabold mt-1">
                Schedule a Private Site Tour
              </h4>
            </div>
            <div className="hidden sm:flex items-center space-x-1 text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-semibold">
              <ShieldCheck size={16} />
              <span>BY APPOINTMENT ONLY</span>
            </div>
          </div>

          {inquirySubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center font-bold text-xl">
                ✓
              </div>
              <h5 className="text-lg font-sans text-navy-900 uppercase font-bold">
                Inquiry Received
              </h5>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Our Senior Architectural Curator will contact you with the complete Antelia Groves masterplan dossier and coordinates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mb-1.5 font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Dr. Julian Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-cobalt-500 focus:bg-white rounded-lg px-4 py-3 text-xs font-sans text-navy-900 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mb-1.5 font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-cobalt-500 focus:bg-white rounded-lg px-4 py-3 text-xs font-sans text-navy-900 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mb-1.5 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="julian.vance@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-cobalt-500 focus:bg-white rounded-lg px-4 py-3 text-xs font-sans text-navy-900 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mb-1.5 font-semibold">
                    Villa Orientation Preference
                  </label>
                  <select
                    value={formData.villaPreference}
                    onChange={(e) => setFormData({ ...formData, villaPreference: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-cobalt-500 focus:bg-white rounded-lg px-4 py-3 text-xs font-sans text-navy-900 outline-none transition-colors"
                  >
                    <option value="East Facing Type A">Type A — East Facing (1,200 sq.ft)</option>
                    <option value="West Facing Type A">Type A — West Facing (1,200 sq.ft)</option>
                    <option value="Undecided">Undecided / Discuss with Architect</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 bg-navy-900 hover:bg-cobalt-600 text-white font-bold py-3.5 px-6 rounded-lg text-xs font-sans uppercase tracking-widest flex items-center justify-center space-x-2 transition-all shadow-glow-navy active:scale-95 group"
                >
                  <span>REQUEST PRIVATE SITE VISIT</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-lg border border-sky-200 hover:border-cobalt-500 text-xs font-sans uppercase tracking-wider text-slate-700 hover:text-cobalt-600 transition-colors flex items-center justify-center space-x-2 bg-white font-semibold"
                >
                  <Download size={14} />
                  <span>SPECIFICATIONS PDF</span>
                </button>
              </div>
            </form>
          )}

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono text-slate-400">
            <span>RERA REGISTERED MASTERPLAN</span>
            <span>PRIVACY RESPECTED • NO UNSOLICITED CALLS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

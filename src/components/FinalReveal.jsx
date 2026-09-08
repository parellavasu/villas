import React, { useState } from 'react';
import { ArrowRight, Download, Calendar, Mail, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

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
        colors: ['#BA996E', '#E8E2D7', '#375242']
      });
    } catch (err) {
      // ignore
    }
  };

  return (
    <section id="reveal" className="relative py-36 px-6 md:px-12 bg-charcoal-950 border-t border-white/10 overflow-hidden text-center">
      {/* Subtle Atmospheric Vignette Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bronze-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Editorial Sub-Headline */}
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-bronze-400 uppercase mb-6">
          <Sparkles size={14} />
          <span>CHAPTER 12 // THE ARCHITECTURAL FINALE</span>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-cinzel text-stone-300 uppercase tracking-widest mb-4">
          FROM 10 ACRES OF LAND
        </h3>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-cinzel font-bold text-ivory-100 uppercase tracking-wider mb-8">
          TO A PLACE TO BELONG.
        </h2>

        {/* Master Monogram Emblem */}
        <div className="w-16 h-16 mx-auto rounded-full border border-bronze-500/50 bg-charcoal-900/80 flex items-center justify-center text-bronze-400 font-cinzel text-xl font-bold tracking-widest shadow-glow-bronze mb-8">
          AG
        </div>

        {/* Brand Lockup & Living Landscape Creed */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-cinzel font-bold text-ivory-100 uppercase tracking-widest mb-6">
          ANTELIA GROVES
        </h1>

        <div className="max-w-2xl mx-auto space-y-2 mb-14 text-sm sm:text-base font-mono tracking-widest text-bronze-400 uppercase">
          <p>A VIBRANT LIFESTYLE.</p>
          <p>A THOUGHTFULLY PLANNED COMMUNITY.</p>
          <p>A LANDSCAPE DESIGNED FOR LIVING.</p>
        </div>

        {/* VIP Private Inquiry & Dossier Request Box */}
        <div className="max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl border border-bronze-500/40 bg-charcoal-900/80 backdrop-blur-xl shadow-2xl text-left">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-bronze-400 uppercase">
                PRIVATE RESIDENCE INQUIRY
              </span>
              <h4 className="text-xl font-cinzel text-ivory-100 uppercase mt-1">
                Schedule a Private Site Tour
              </h4>
            </div>
            <div className="hidden sm:flex items-center space-x-1 text-xs font-mono text-emerald-400">
              <ShieldCheck size={16} />
              <span>BY APPOINTMENT ONLY</span>
            </div>
          </div>

          {inquirySubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                ✓
              </div>
              <h5 className="text-lg font-cinzel text-ivory-100 uppercase">
                Inquiry Received
              </h5>
              <p className="text-xs text-stone-300 max-w-sm mx-auto leading-relaxed">
                Our Senior Architectural Curator will contact you with the complete Antelia Groves masterplan dossier and coordinates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono tracking-widest text-stone-400 uppercase block mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Dr. Julian Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-charcoal-950 border border-white/10 focus:border-bronze-400 rounded-lg px-4 py-3 text-xs font-mono text-ivory-100 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono tracking-widest text-stone-400 uppercase block mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-charcoal-950 border border-white/10 focus:border-bronze-400 rounded-lg px-4 py-3 text-xs font-mono text-ivory-100 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono tracking-widest text-stone-400 uppercase block mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="julian.vance@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-charcoal-950 border border-white/10 focus:border-bronze-400 rounded-lg px-4 py-3 text-xs font-mono text-ivory-100 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono tracking-widest text-stone-400 uppercase block mb-1.5">
                    Villa Orientation Preference
                  </label>
                  <select
                    value={formData.villaPreference}
                    onChange={(e) => setFormData({ ...formData, villaPreference: e.target.value })}
                    className="w-full bg-charcoal-950 border border-white/10 focus:border-bronze-400 rounded-lg px-4 py-3 text-xs font-mono text-ivory-100 outline-none transition-colors"
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
                  className="w-full sm:w-auto flex-1 bg-gradient-to-r from-bronze-600 to-bronze-500 hover:from-bronze-500 hover:to-bronze-400 text-charcoal-950 font-bold py-3 px-6 rounded-lg text-xs font-mono uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-glow-bronze active:scale-95"
                >
                  <span>REQUEST PRIVATE SITE VISIT & DOSSIER</span>
                  <ArrowRight size={15} />
                </button>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-5 py-3 rounded-lg border border-white/15 hover:border-bronze-400 text-xs font-mono uppercase tracking-wider text-stone-300 hover:text-ivory-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <Download size={14} />
                  <span>SPECIFICATIONS PDF</span>
                </button>
              </div>
            </form>
          )}

          <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono text-stone-400">
            <span>RERA REGISTERED MASTERPLAN</span>
            <span>PRIVACY RESPECTED • NO UNSOLICITED CALLS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

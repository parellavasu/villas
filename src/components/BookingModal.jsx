import React, { useState } from 'react';
import { X, Calendar, Download, Check, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    visitDate: '',
    notes: '',
    villaModel: 'Type A East'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#BA996E', '#E8E2D7', '#2E4839']
      });
    } catch (err) {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-2xl border border-bronze-500/40 bg-charcoal-900 p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-stone-400 hover:text-ivory-100 hover:bg-white/10 transition-colors"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-2xl">
              ✓
            </div>
            <h3 className="text-2xl font-cinzel text-ivory-100 uppercase">
              Reservation Confirmed
            </h3>
            <p className="text-xs text-stone-300 max-w-sm mx-auto leading-relaxed">
              Thank you, {formData.name || 'Valued Guest'}. A private concierge representative has reserved your inspection appointment and sent the digital masterplan dossier to {formData.email || 'your email'}.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-bronze-500 text-charcoal-950 font-mono font-bold text-xs uppercase tracking-wider hover:bg-bronze-400 transition-colors shadow-glow-bronze"
              >
                RETURN TO EXPLORATION
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-mono tracking-widest text-bronze-400 uppercase">
                // ANTELIA GROVES PRIVATE REGISTRY
              </span>
              <h3 className="text-2xl font-cinzel text-ivory-100 uppercase font-semibold mt-1">
                Schedule Private Site Tour
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Experience the 10-acre sanctuary firsthand with our senior architectural lead.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-mono tracking-widest text-stone-400 uppercase block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-charcoal-950 border border-white/10 focus:border-bronze-400 rounded-lg px-4 py-2.5 text-xs font-mono text-ivory-100 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono tracking-widest text-stone-400 uppercase block mb-1">
                    Mobile Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-charcoal-950 border border-white/10 focus:border-bronze-400 rounded-lg px-4 py-2.5 text-xs font-mono text-ivory-100 outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono tracking-widest text-stone-400 uppercase block mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                    className="w-full bg-charcoal-950 border border-white/10 focus:border-bronze-400 rounded-lg px-4 py-2.5 text-xs font-mono text-ivory-100 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono tracking-widest text-stone-400 uppercase block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-charcoal-950 border border-white/10 focus:border-bronze-400 rounded-lg px-4 py-2.5 text-xs font-mono text-ivory-100 outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono tracking-widest text-stone-400 uppercase block mb-1">
                  Villa Focus
                </label>
                <select
                  value={formData.villaModel}
                  onChange={(e) => setFormData({ ...formData, villaModel: e.target.value })}
                  className="w-full bg-charcoal-950 border border-white/10 focus:border-bronze-400 rounded-lg px-4 py-2.5 text-xs font-mono text-ivory-100 outline-none"
                >
                  <option value="Type A East">Type A East (1200 sq.ft Land • 2262 sq.ft BUA)</option>
                  <option value="Type A West">Type A West (1200 sq.ft Land • 2262 sq.ft BUA)</option>
                  <option value="All Models">Comprehensive Project Masterplan Tour</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-bronze-600 to-bronze-500 hover:from-bronze-500 hover:to-bronze-400 text-charcoal-950 font-bold py-3 rounded-lg text-xs font-mono uppercase tracking-wider transition-all shadow-glow-bronze"
                >
                  CONFIRM PRIVATE TOUR APPOINTMENT
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

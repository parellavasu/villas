import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    typology: '4 BHK Luxury Villa (3,000 Sq.Ft)',
    date: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg rounded-xs border border-stone-300 bg-ivory-100 p-7 sm:p-9 shadow-luxury overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-charcoal-500 hover:text-charcoal-900 hover:bg-stone-200/50 rounded-xs transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-forest-100 text-forest-700 border border-forest-300 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-[22px] font-sans font-semibold text-charcoal-900">
              Appointment Registered
            </h3>
            <p className="text-[13.5px] text-charcoal-600 max-w-sm mx-auto leading-relaxed">
              Thank you, {formData.name || 'Valued Guest'}. An architectural advisory director has been assigned to coordinate your private consultation and review the Antelia Groves portfolio with you.
            </p>
            <div className="pt-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-forest-700 text-white text-[11.5px] font-semibold uppercase tracking-[0.18em] rounded-xs hover:bg-forest-800 transition-colors"
              >
                RETURN TO PRESENTATION
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-[10px] font-mono tracking-[0.25em] text-forest-700 uppercase">
                PRIVATE ARCHITECTURAL ADVISORY
              </div>
              <h3 className="text-[22px] font-sans font-semibold text-charcoal-900 mt-1">
                Schedule a Consultation
              </h3>
              <p className="text-[13px] text-charcoal-600 mt-1 font-normal">
                Receive confidential project blueprints, pricing, and personalized plot reservation details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10.5px] font-mono tracking-widest text-charcoal-600 uppercase block mb-1">
                  FULL NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Raghavendra Rao"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-stone-300 focus:border-forest-700 rounded-xs px-3.5 py-2 text-[13px] font-sans text-charcoal-900 outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10.5px] font-mono tracking-widest text-charcoal-600 uppercase block mb-1">
                    MOBILE NUMBER
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-stone-300 focus:border-forest-700 rounded-xs px-3.5 py-2 text-[13px] font-sans text-charcoal-900 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10.5px] font-mono tracking-widest text-charcoal-600 uppercase block mb-1">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-stone-300 focus:border-forest-700 rounded-xs px-3.5 py-2 text-[13px] font-sans text-charcoal-900 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10.5px] font-mono tracking-widest text-charcoal-600 uppercase block mb-1">
                    PREFERRED TYPOLOGY
                  </label>
                  <select
                    value={formData.typology}
                    onChange={(e) => setFormData({ ...formData, typology: e.target.value })}
                    className="w-full bg-white border border-stone-300 focus:border-forest-700 rounded-xs px-3 py-2 text-[12.5px] font-sans text-charcoal-900 outline-none transition-colors"
                  >
                    <option value="3 BHK Premium Villa (2,262 Sq.Ft)">3 BHK Premium Villa (2,262 Sq.Ft)</option>
                    <option value="4 BHK Luxury Villa (3,000 Sq.Ft)">4 BHK Luxury Villa (3,000 Sq.Ft)</option>
                    <option value="Corner Plot Enclave">Corner Plot Enclave</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10.5px] font-mono tracking-widest text-charcoal-600 uppercase block mb-1">
                    PREFERRED DATE
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-white border border-stone-300 focus:border-forest-700 rounded-xs px-3.5 py-2 text-[12.5px] font-sans text-charcoal-900 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10.5px] font-mono tracking-widest text-charcoal-600 uppercase block mb-1">
                  SPECIAL REQUIREMENTS / NOTES
                </label>
                <textarea
                  rows={2}
                  placeholder="Orientation preferences, Vastu specifications, investment timeline..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white border border-stone-300 focus:border-forest-700 rounded-xs px-3.5 py-2 text-[12.5px] font-sans text-charcoal-900 outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-forest-700 text-white text-[12px] font-semibold uppercase tracking-[0.2em] rounded-xs hover:bg-forest-800 transition-colors shadow-subtle flex items-center justify-center space-x-2"
                >
                  <span>REQUEST CONFIDENTIAL APPOINTMENT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}

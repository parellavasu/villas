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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-[14px] border border-gray-200 bg-white p-7 sm:p-9 shadow-2xl overflow-hidden text-[#111827]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#6B7280] hover:text-[#111827] hover:bg-[#FFF7ED] rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#FFF7ED] text-[#EA580C] border border-[#FED7AA] flex items-center justify-center shadow-sm">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-[22px] font-display font-semibold tracking-display text-[#111827]">
              Appointment Registered
            </h3>
            <p className="text-[13.5px] text-[#4B5563] max-w-sm mx-auto leading-relaxed">
              Thank you, {formData.name || 'Valued Guest'}. An architectural advisory director has been assigned to coordinate your private consultation and review the Antelia Groves portfolio with you.
            </p>
            <div className="pt-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#EA580C] hover:bg-[#C2410C] text-white text-[11.5px] font-bold tracking-[0.18em] rounded-full shadow-md transition-colors cursor-pointer"
              >
                Return To Presentation
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-[10px] font-mono tracking-[0.25em] text-[#EA580C] font-semibold">
                Private Architectural Advisory
              </div>
              <h3 className="text-[22px] font-display font-semibold tracking-display text-[#111827] mt-1">
                Schedule A Consultation
              </h3>
              <p className="text-[13px] text-[#4B5563] mt-1 font-normal">
                Receive confidential project blueprints, pricing, and personalized plot reservation details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10.5px] font-mono tracking-widest text-[#6B7280] block mb-1 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Raghavendra Rao"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#FAFAF9] border border-gray-200 focus:border-[#EA580C] focus:bg-white rounded-[14px] px-3.5 py-2 text-[13px] font-sans text-[#111827] outline-none transition-colors placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10.5px] font-mono tracking-widest text-[#6B7280] block mb-1 font-medium">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAFAF9] border border-gray-200 focus:border-[#EA580C] focus:bg-white rounded-[14px] px-3.5 py-2 text-[13px] font-sans text-[#111827] outline-none transition-colors placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="text-[10.5px] font-mono tracking-widest text-[#6B7280] block mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAFAF9] border border-gray-200 focus:border-[#EA580C] focus:bg-white rounded-[14px] px-3.5 py-2 text-[13px] font-sans text-[#111827] outline-none transition-colors placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10.5px] font-mono tracking-widest text-[#6B7280] block mb-1 font-medium">
                    Preferred Typology
                  </label>
                  <select
                    value={formData.typology}
                    onChange={(e) => setFormData({ ...formData, typology: e.target.value })}
                    className="w-full bg-[#FAFAF9] border border-gray-200 focus:border-[#EA580C] focus:bg-white rounded-[14px] px-3 py-2 text-[12.5px] font-sans text-[#111827] outline-none transition-colors cursor-pointer"
                  >
                    <option value="3 BHK Premium Villa (2,262 Sq.Ft)">3 BHK Premium Villa (2,262 Sq.Ft)</option>
                    <option value="4 BHK Luxury Villa (3,000 Sq.Ft)">4 BHK Luxury Villa (3,000 Sq.Ft)</option>
                    <option value="Corner Plot Enclave">Corner Plot Enclave</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10.5px] font-mono tracking-widest text-[#6B7280] block mb-1 font-medium">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#FAFAF9] border border-gray-200 focus:border-[#EA580C] focus:bg-white rounded-[14px] px-3.5 py-2 text-[12.5px] font-sans text-[#111827] outline-none transition-colors cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10.5px] font-mono tracking-widest text-[#6B7280] block mb-1 font-medium">
                  Special Requirements / Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Orientation preferences, Vastu specifications, investment timeline..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#FAFAF9] border border-gray-200 focus:border-[#EA580C] focus:bg-white rounded-[14px] px-3.5 py-2 text-[12.5px] font-sans text-[#111827] outline-none transition-colors resize-none placeholder:text-gray-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#EA580C] hover:bg-[#C2410C] text-white text-[12px] font-bold tracking-[0.2em] rounded-full shadow-md transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Request Confidential Appointment</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}

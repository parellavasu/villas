import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Compass, ArrowUpRight } from 'lucide-react';
import { ambientSound } from '../utils/sound';

export default function Navigation({ onOpenBooking, scrollProgress = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = ambientSound.toggle();
    setAudioPlaying(active);
  };

  const navLinks = [
    { name: "The Land", href: "#land" },
    { name: "Survey", href: "#survey" },
    { name: "Masterplan", href: "#masterplan" },
    { name: "Villas", href: "#villas" },
    { name: "Clubhouse", href: "#clubhouse" },
    { name: "Landscape", href: "#landscape" },
    { name: "Mindfulness", href: "#mindfulness" },
    { name: "Comparison", href: "#transformation" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-charcoal-950/85 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl"
            : "bg-gradient-to-b from-charcoal-950/90 via-charcoal-950/40 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Monogram & Title */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-sm border border-bronze-500/60 bg-charcoal-900/80 flex items-center justify-center text-bronze-400 font-cinzel font-bold text-sm tracking-widest group-hover:border-bronze-400 group-hover:bg-charcoal-800 transition-all shadow-glow-bronze">
              AG
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-base md:text-lg tracking-widest text-ivory-100 font-semibold uppercase group-hover:text-bronze-400 transition-colors">
                ANTELIA GROVES
              </span>
              <span className="text-[9px] font-mono tracking-widest text-stone-400 uppercase -mt-1">
                10-ACRE VILLA SANCTUARY
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-8 text-xs font-mono tracking-widest uppercase text-stone-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-bronze-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-bronze-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Controls & CTA */}
          <div className="flex items-center space-x-4">
            {/* Ambient Soundscape Toggle */}
            <button
              onClick={toggleSound}
              aria-label={audioPlaying ? "Mute ambient natural sound" : "Enable ambient natural sound"}
              className={`p-2 rounded-full border transition-all flex items-center space-x-2 text-xs font-mono ${
                audioPlaying
                  ? "border-bronze-500 bg-bronze-500/10 text-bronze-400 shadow-glow-bronze"
                  : "border-white/15 bg-charcoal-900/60 text-stone-400 hover:border-white/30"
              }`}
              title={audioPlaying ? "Mute nature soundscape" : "Play ambient breeze & nature sound"}
            >
              {audioPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
              <span className="hidden xl:inline text-[10px] uppercase">
                {audioPlaying ? "SOUND ON" : "SOUND OFF"}
              </span>
            </button>

            {/* VIP Site Visit Booking CTA */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-bronze-600 to-bronze-500 hover:from-bronze-500 hover:to-bronze-400 text-charcoal-950 font-semibold px-4 py-2 rounded-sm text-xs font-mono tracking-wider uppercase transition-all shadow-glow-bronze active:scale-95"
            >
              <span>INQUIRE</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-ivory-100 hover:text-bronze-400 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Line */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-forest-700 via-bronze-500 to-bronze-400 transition-all duration-150" style={{ width: `${scrollProgress}%` }}></div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-charcoal-950/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-12 px-8">
          <div className="flex flex-col space-y-6">
            <span className="text-[10px] font-mono tracking-widest text-bronze-400 uppercase">
              // PROJECT NAVIGATION
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-cinzel tracking-wider text-ivory-100 hover:text-bronze-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col space-y-4 pt-8 border-t border-white/10">
            <button
              onClick={() => {
                toggleSound();
              }}
              className="w-full py-3 border border-white/15 rounded text-xs font-mono uppercase text-stone-300 flex items-center justify-center space-x-2"
            >
              {audioPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
              <span>{audioPlaying ? "MUTING SOUNDSCAPE" : "ENABLE AMBIENT SOUNDSCAPE"}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-bronze-500 text-charcoal-950 font-bold font-mono text-xs uppercase tracking-wider rounded shadow-glow-bronze"
            >
              REQUEST PRIVATE VILLA DOSSIER
            </button>
          </div>
        </div>
      )}
    </>
  );
}

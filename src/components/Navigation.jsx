import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navigation({ onOpenBooking, scrollProgress = 0 }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('VISION');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = [
        { id: 'vision', label: 'VISION' },
        { id: 'overview', label: 'OVERVIEW' },
        { id: 'about', label: 'ABOUT' },
        { id: 'journey', label: 'PROCESS' },
        { id: 'masterplan', label: 'MASTERPLAN' },
        { id: 'villas', label: 'VILLAS' },
        { id: 'portfolio', label: 'PORTFOLIO' },
        { id: 'location', label: 'LOCATION' },
      ];

      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].label);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'OVERVIEW', href: '#overview' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROCESS', href: '#journey' },
    { label: 'MASTERPLAN', href: '#masterplan' },
    { label: 'VILLAS', href: '#villas' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'LOCATION', href: '#location' },
  ];

  const handleNavClick = (href, label) => {
    setActiveSection(label);
    setMobileMenuOpen(false);
    if (href === '#vision') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      const headerOffset = 74;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top Scroll Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-[#E7E4DD]/60">
        <div
          className="h-full bg-[#B89047] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Header (Fixed 74px Height, Never Overlaps Content) */}
      <header
        className={`fixed top-0 left-0 right-0 h-[74px] z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#EBE7DF] shadow-subtle text-[#1D2421]'
            : 'bg-white/90 backdrop-blur-md border-b border-[#EBE7DF]/60 text-[#1D2421]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-full flex items-center justify-between">
          
          {/* ZONE 1: LEFT LOGO */}
          <div className="shrink-0">
            <a
              href="#vision"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#vision', 'VISION');
              }}
              className="flex items-center"
            >
              <Logo size="md" light={false} />
            </a>
          </div>

          {/* ZONE 2: CENTER NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 flex-1 px-8">
            {navLinks.map((item) => {
              const isActive = activeSection === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.label);
                  }}
                  className={`font-sans text-[12px] uppercase tracking-[0.2em] transition-all relative py-1.5 whitespace-nowrap ${
                    isActive
                      ? 'text-[#B89047] font-semibold border-b-[2px] border-[#B89047]'
                      : 'text-[#555555] hover:text-[#B89047] font-medium'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* ZONE 3: RIGHT SCHEDULE VISIT CTA */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center space-x-2 px-5 py-2 border border-[#183C2F]/70 text-[#B89047] text-[11.5px] font-medium uppercase tracking-[0.16em] rounded-full hover:bg-[#B89047] hover:text-white transition-all duration-300 shadow-subtle group whitespace-nowrap"
            >
              <span>SCHEDULE VISIT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal-800 hover:text-forest-700 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#F7F6F2]/98 backdrop-blur-lg flex flex-col justify-center px-8 md:hidden">
          <div className="flex flex-col space-y-5 text-center">
            <div className="flex justify-center mb-4">
              <Logo size="lg" />
            </div>
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="font-sans text-[15px] uppercase tracking-[0.22em] text-charcoal-800 hover:text-forest-700 font-medium py-2 border-b border-stone-200"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="mt-6 w-full py-3.5 bg-forest-700 text-white text-[13px] font-semibold uppercase tracking-[0.2em] rounded-xs"
            >
              SCHEDULE PRIVATE VISIT
            </button>
          </div>
        </div>
      )}
    </>
  );
}

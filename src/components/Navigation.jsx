import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navigation({ onOpenBooking, scrollProgress: externalProgress }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('VISION');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);

          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
          }

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

          const scrollPos = window.scrollY + 180;
          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i].id);
            if (el && el.offsetTop <= scrollPos) {
              setActiveSection(sections[i].label);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
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
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-[#FED7AA]/40">
        <div
          className="h-full bg-[#EA580C] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Header (Fixed 74px Height, Never Overlaps Content) */}
      <header
        className={`fixed top-0 left-0 right-0 h-[74px] z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm text-[#111827]'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-100 text-[#111827]'
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
              className="flex items-center cursor-pointer"
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
                  className={`font-sans text-[12px] uppercase tracking-[0.2em] transition-all relative py-1.5 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-[#EA580C] font-bold border-b-[2px] border-[#EA580C]'
                      : 'text-gray-600 hover:text-[#EA580C] font-medium'
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
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#EA580C] hover:bg-[#C2410C] text-white text-[11.5px] font-bold uppercase tracking-[0.16em] rounded-full transition-all duration-300 shadow-sm group whitespace-nowrap cursor-pointer"
            >
              <span>SCHEDULE VISIT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-800 hover:text-[#EA580C] transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white/98 backdrop-blur-xl flex flex-col justify-center px-8 md:hidden border-b border-gray-100">
          <div className="flex flex-col space-y-5 text-center">
            <div className="flex justify-center mb-4">
              <Logo size="lg" light={false} />
            </div>
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, item.label);
                }}
                className="font-sans text-[15px] uppercase tracking-[0.22em] text-gray-800 hover:text-[#EA580C] font-medium py-2 border-b border-gray-100"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="mt-6 w-full py-3.5 bg-[#EA580C] hover:bg-[#C2410C] text-white text-[13px] font-bold uppercase tracking-[0.2em] rounded-xs shadow-sm cursor-pointer"
            >
              SCHEDULE PRIVATE VISIT
            </button>
          </div>
        </div>
      )}
    </>
  );
}

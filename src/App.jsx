import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import JourneyIndicator from './components/JourneyIndicator';
import Hero from './components/Hero';
import LandCanvas from './components/LandCanvas';
import UnderstandingLand from './components/UnderstandingLand';
import ClearingWay from './components/ClearingWay';
import Masterplanning from './components/Masterplanning';
import Infrastructure from './components/Infrastructure';
import VillaArchitecture from './components/VillaArchitecture';
import LivingExperience from './components/LivingExperience';
import LandscapeTransformation from './components/LandscapeTransformation';
import Clubhouse from './components/Clubhouse';
import SportsFitness from './components/SportsFitness';
import GreenMindfulness from './components/GreenMindfulness';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import FinalReveal from './components/FinalReveal';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState('land');

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Scroll progress handler
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      // Track active section for JourneyIndicator
      const sections = [
        'land', 'survey', 'clearing', 'masterplan', 'infrastructure',
        'villas', 'living', 'landscape', 'clubhouse', 'sports',
        'mindfulness', 'transformation', 'reveal'
      ];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveChapter(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-charcoal-950 text-ivory-100 min-h-screen selection:bg-bronze-500 selection:text-charcoal-950 font-sans">
      {/* Floating Header */}
      <Navigation
        onOpenBooking={() => setBookingOpen(true)}
        scrollProgress={scrollProgress}
      />

      {/* Side Journey Progress Rail */}
      <JourneyIndicator activeChapter={activeChapter} />

      {/* Main Sequential Architectural Chapters */}
      <main>
        <Hero onExploreJourney={() => {
          const el = document.getElementById('land');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* Chapter 00: The Land */}
        <LandCanvas />

        {/* Chapter 01: Understanding the Land */}
        <UnderstandingLand />

        {/* Chapter 02: Clearing the Way */}
        <ClearingWay />

        {/* Chapter 03: From Land to Masterplan */}
        <Masterplanning />

        {/* Chapter 04: Building the Foundation */}
        <Infrastructure />

        {/* Chapter 05: The Villas Take Form */}
        <VillaArchitecture />

        {/* Chapter 06: Living Experience */}
        <LivingExperience />

        {/* Chapter 07: Where Landscape Becomes Life */}
        <LandscapeTransformation />

        {/* Chapter 08: The Clubhouse */}
        <Clubhouse />

        {/* Chapter 09: Sports & Fitness */}
        <SportsFitness />

        {/* Chapter 10: Green Mindfulness */}
        <GreenMindfulness />

        {/* Chapter 11: Before & After Slider */}
        <BeforeAfterSlider />

        {/* Chapter 12: The Final Reveal */}
        <FinalReveal onOpenBooking={() => setBookingOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* VIP Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}

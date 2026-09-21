import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Section01Vision from './components/Section01Vision';
import SectionCurrentProject from './components/SectionCurrentProject';
import SectionAboutUs from './components/SectionAboutUs';
import SectionProcess from './components/SectionProcess';
import Section02Masterplan from './components/Section02Masterplan';
import Section03Villas from './components/Section03Villas';
import SectionPreviousWorks from './components/SectionPreviousWorks';
import Section05NatureLocation from './components/Section05NatureLocation';
import Section06ExploreFinal from './components/Section06ExploreFinal';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
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
    <div className="relative bg-white text-[#111827] min-h-screen selection:bg-[#EA580C]/20 selection:text-[#9A3412] font-sans overflow-x-hidden">
      
      {/* Floating Architectural Header */}
      <Navigation
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* CURATED ARCHITECTURAL CHAPTERS */}
      <main>
        {/* Chapter 01: Hero Vision & 4 Quick Facts */}
        <Section01Vision
          onExploreJourney={() => scrollTo('#journey')}
          onExploreVillas={() => scrollTo('#villas')}
        />

        {/* Chapter 02: Current Project Overview & Living Philosophy */}
        <SectionCurrentProject
          onExploreVillas={() => scrollTo('#villas')}
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* Chapter 03: About Us (Project Philosophy & 4 Core Principles) */}
        <SectionAboutUs />

        {/* Chapter 04: The Process (7-Stage Architectural Development Journey) */}
        <SectionProcess />

        {/* Chapter 05: The Masterplan (10-Acre Blueprint & Drone View) */}
        <Section02Masterplan />

        {/* Chapter 05: The Villas (Type A East/West + 7-Part Architectural Story) */}
        <Section03Villas
          onSelectVilla={() => setBookingOpen(true)}
        />

        {/* Chapter 06: Previous Works & Evolution (From Krafted Homes to Antelia Groves) */}
        <SectionPreviousWorks
          onOpenBooking={() => setBookingOpen(true)}
          onExploreVillas={() => scrollTo('#villas')}
        />

        {/* Chapter 08: The Location (Electronic City & Bengaluru Expressway Connectivity) */}
        <Section05NatureLocation />

        {/* Chapter 09: Discover Antelia Groves (Climax & Architectural Footer) */}
        <Section06ExploreFinal
          onExploreVillas={() => scrollTo('#villas')}
          onOpenBooking={() => setBookingOpen(true)}
        />
      </main>

      {/* VIP Architectural Booking & Consultation Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}

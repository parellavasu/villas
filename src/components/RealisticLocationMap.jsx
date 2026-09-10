import React, { useState } from 'react';
import { Compass, Navigation, ExternalLink, MapPin, Layers, Sparkles, CheckCircle2, Car, Shield } from 'lucide-react';

export default function RealisticLocationMap({ activeTab = 'work' }) {
  const [mapMode, setMapMode] = useState('google'); // 'google' | 'satellite' | 'aerial'

  // Antelia Groves Exact Coordinates (South Bengaluru / Chandapura-Electronic City Corridor)
  const latitude = 12.7911;
  const longitude = 77.6867;

  // Google Maps embed URLs (100% free, crystal-clear, zero watermarks, zero API key required)
  const googleMapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=13&output=embed`;
  const satelliteMapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=14&t=k&output=embed`;

  return (
    <div className="relative w-full h-full min-h-[460px] sm:min-h-[500px] flex flex-col bg-white border border-[#E7E4DD] rounded-xs shadow-sm overflow-hidden font-sans">
      
      {/* =========================================================
          1. TOP BAR: TITLE + GPS COORDINATES + VIEW SWITCHER
          ========================================================= */}
      <div className="p-3.5 sm:p-4 bg-[#F5F2EA] border-b border-[#E7E4DD] flex flex-wrap items-center justify-between gap-3 z-10">
        
        {/* Title & Coordinates */}
        <div className="flex items-center space-x-2.5">
          <div className="w-7 h-7 rounded-xs bg-[#B89047]/10 flex items-center justify-center text-[#B89047]">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#141917] font-bold leading-tight">
              LOCATION &amp; CONNECTIVITY MAP
            </div>
            <div className="font-mono text-[9.5px] text-[#73827B]">
              12°47'28"N 77°41'12"E · Chandapura Corridor
            </div>
          </div>
        </div>

        {/* 3 Clean Map Mode Switcher Tabs */}
        <div className="flex items-center space-x-1 bg-white border border-[#E0DACF] p-1 rounded-xs shadow-xs">
          <button
            onClick={() => setMapMode('google')}
            className={`px-3 py-1 font-mono text-[10px] uppercase tracking-wider rounded-xs transition-all ${
              mapMode === 'google'
                ? 'bg-[#B89047] text-white font-bold shadow-xs'
                : 'text-[#5A6862] hover:text-[#141917] hover:bg-[#FAF8F5]'
            }`}
          >
            STREET MAP
          </button>
          <button
            onClick={() => setMapMode('satellite')}
            className={`px-3 py-1 font-mono text-[10px] uppercase tracking-wider rounded-xs transition-all ${
              mapMode === 'satellite'
                ? 'bg-[#B89047] text-white font-bold shadow-xs'
                : 'text-[#5A6862] hover:text-[#141917] hover:bg-[#FAF8F5]'
            }`}
          >
            SATELLITE
          </button>
          <button
            onClick={() => setMapMode('aerial')}
            className={`px-3 py-1 font-mono text-[10px] uppercase tracking-wider rounded-xs transition-all ${
              mapMode === 'aerial'
                ? 'bg-[#B89047] text-white font-bold shadow-xs'
                : 'text-[#5A6862] hover:text-[#141917] hover:bg-[#FAF8F5]'
            }`}
          >
            3D ENCLAVE
          </button>
        </div>

      </div>

      {/* =========================================================
          2. MAP VIEWPORT: REAL GOOGLE MAPS / SATELLITE / 3D AERIAL
          ========================================================= */}
      <div className="relative flex-1 w-full min-h-[380px] bg-[#EAE6DE]">
        
        {/* Mode 1: Real Google Maps Street View */}
        {mapMode === 'google' && (
          <iframe
            title="Antelia Groves Google Street Map"
            src={googleMapUrl}
            className="w-full h-full min-h-[380px] border-0"
            loading="lazy"
            allowFullScreen
          />
        )}

        {/* Mode 2: Real Google Maps Satellite View */}
        {mapMode === 'satellite' && (
          <iframe
            title="Antelia Groves Google Satellite Map"
            src={satelliteMapUrl}
            className="w-full h-full min-h-[380px] border-0"
            loading="lazy"
            allowFullScreen
          />
        )}

        {/* Mode 3: Photorealistic 3D Architectural Sanctuary Enclave View */}
        {mapMode === 'aerial' && (
          <div className="relative w-full h-full min-h-[380px] overflow-hidden bg-[#141917] group">
            <img
              src="/images/overview/02_overview_sunset_enclave.jpg"
              alt="Antelia Groves 10-Acre Master Sanctuary Aerial Render"
              className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141917]/80 via-[#141917]/20 to-transparent" />
            
            {/* Architectural Callout Overlay */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#141917]/85 backdrop-blur-md border border-[#C5A880]/50 text-[#FAF8F5] font-mono text-[10px] uppercase tracking-[0.16em] rounded-xs shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89047] animate-pulse" />
                <span>10-ACRE BOTANICAL SANCTUARY</span>
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#C5A880] mb-0.5">
                AERIAL ARCHITECTURAL PERSPECTIVE
              </div>
              <div className="font-sans text-[15px] font-bold text-white drop-shadow-md">
                Antelia Groves Master Enclave &amp; Surrounding Green Buffer
              </div>
              <div className="font-sans text-[12px] text-[#D8D4CA] mt-0.5">
                Low-density master community of just 76 bespoke triplex villas.
              </div>
            </div>
          </div>
        )}

        {/* Permanent High-Contrast Floating Gold Highlight Card for Antelia Groves */}
        <div className="absolute bottom-3 left-3 z-20 bg-[#141917]/95 backdrop-blur-md border border-[#D4AF37] p-3 rounded-xs shadow-2xl max-w-[260px] pointer-events-none">
          <div className="flex items-center space-x-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="font-mono text-[9px] font-bold text-[#D4AF37] uppercase tracking-wider">
              PRIME EPICENTER
            </span>
          </div>
          <div className="font-sans text-[13.5px] font-extrabold text-white leading-tight">
            ANTELIA GROVES
          </div>
          <div className="font-sans text-[11.5px] text-[#C5CDC8] leading-tight mt-0.5">
            10-Acre Gated Villa Sanctuary
          </div>
          <div className="font-mono text-[9.5px] text-[#8C9A93] mt-1.5 pt-1.5 border-t border-white/10 flex items-center justify-between">
            <span>NH 44 FLYOVER</span>
            <span className="text-[#D4AF37] font-semibold">6 MINS</span>
          </div>
        </div>

      </div>

      {/* =========================================================
          3. BOTTOM CORRIDOR STRIP: KEY COMMUTE TIMES
          ========================================================= */}
      <div className="p-3 sm:p-3.5 bg-[#FAF8F5] border-t border-[#E7E4DD] flex flex-wrap items-center justify-between gap-3 text-[11.5px] text-[#5A6862] z-10">
        
        {/* Transit Feature */}
        <div className="flex items-center space-x-2">
          <Car className="w-3.5 h-3.5 text-[#B89047]" />
          <span className="font-sans text-[12px] font-medium text-[#1D2421]">
            Signal-Free Access via NH 44 Elevated Flyover
          </span>
        </div>

        {/* Google Maps External Link */}
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 font-mono text-[11px] font-bold text-[#B89047] hover:text-[#967433] transition-colors"
        >
          <span>Get Live Directions</span>
          <ExternalLink className="w-3 h-3" />
        </a>

      </div>

    </div>
  );
}

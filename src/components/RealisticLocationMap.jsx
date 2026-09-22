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
    <div className="relative w-full h-full min-h-[320px] sm:min-h-[350px] lg:h-[380px] flex flex-col bg-white border border-gray-200 rounded-sm shadow-luxury overflow-hidden font-sans">
      
      {/* =========================================================
          1. TOP BAR: TITLE + GPS COORDINATES + VIEW SWITCHER
          ========================================================= */}
      <div className="p-2.5 sm:p-3 bg-[#FAFAF9] border-b border-gray-200 flex flex-wrap items-center justify-between gap-2 z-10">
        
        {/* Title & Coordinates */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center text-[#EA580C]">
            <Compass className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-widest text-[#111827] font-bold leading-tight">
              Location &amp; Connectivity Map
            </div>
            <div className="font-mono text-[9px] text-[#6B7280]">
              12°47'28"N 77°41'12"E · Chandapura Corridor
            </div>
          </div>
        </div>

        {/* 3 Clean Map Mode Switcher Tabs */}
        <div className="flex items-center space-x-1 bg-white border border-gray-200 p-0.5 rounded-full shadow-xs">
          <button
            onClick={() => setMapMode('google')}
            className={`px-2.5 py-0.5 font-mono text-[9.5px] tracking-wider rounded-full transition-all cursor-pointer ${
              mapMode === 'google'
                ? 'bg-[#EA580C] text-white font-bold shadow-xs'
                : 'text-[#6B7280] hover:text-[#111827]'
            }`}
          >
            Street Map
          </button>
          <button
            onClick={() => setMapMode('satellite')}
            className={`px-2.5 py-0.5 font-mono text-[9.5px] tracking-wider rounded-full transition-all cursor-pointer ${
              mapMode === 'satellite'
                ? 'bg-[#EA580C] text-white font-bold shadow-xs'
                : 'text-[#6B7280] hover:text-[#111827]'
            }`}
          >
            Satellite
          </button>
          <button
            onClick={() => setMapMode('aerial')}
            className={`px-2.5 py-0.5 font-mono text-[9.5px] tracking-wider rounded-full transition-all cursor-pointer ${
              mapMode === 'aerial'
                ? 'bg-[#EA580C] text-white font-bold shadow-xs'
                : 'text-[#6B7280] hover:text-[#111827]'
            }`}
          >
            3D Enclave
          </button>
        </div>

      </div>

      {/* =========================================================
          2. MAP VIEWPORT: REAL GOOGLE MAPS / SATELLITE / 3D AERIAL
          ========================================================= */}
      <div className="relative flex-1 w-full min-h-[220px] bg-[#FAFAF9]">
        
        {/* Mode 1: Real Google Maps Street View */}
        {mapMode === 'google' && (
          <iframe
            title="Antelia Groves Google Street Map"
            src={googleMapUrl}
            className="w-full h-full min-h-[220px] border-0"
            loading="lazy"
            allowFullScreen
          />
        )}

        {/* Mode 2: Real Google Maps Satellite View */}
        {mapMode === 'satellite' && (
          <iframe
            title="Antelia Groves Google Satellite Map"
            src={satelliteMapUrl}
            className="w-full h-full min-h-[220px] border-0"
            loading="lazy"
            allowFullScreen
          />
        )}

        {/* Mode 3: Photorealistic 3D Architectural Sanctuary Enclave View */}
        {mapMode === 'aerial' && (
          <div className="relative w-full h-full min-h-[220px] overflow-hidden bg-gray-900 group">
            <img
              src="/images/overview/02_overview_sunset_enclave.jpg"
              alt="Antelia Groves 10-Acre Master Sanctuary Aerial Render"
              className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-[#111827]/20 to-transparent" />
            
            {/* Architectural Callout Overlay */}
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 bg-white/95 backdrop-blur-md border border-gray-200 text-[#111827] font-mono text-[9px] tracking-[0.16em] rounded-full shadow-md font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
                <span>10-Acre Botanical Sanctuary</span>
              </span>
            </div>

            <div className="absolute bottom-3 left-3 right-3 text-white">
              <div className="font-mono text-[8.5px] tracking-[0.2em] text-[#FED7AA] mb-0.5">
                Aerial Architectural Perspective
              </div>
              <div className="font-sans text-[13px] font-bold text-white drop-shadow-md">
                Antelia Groves Master Enclave &amp; Green Buffer
              </div>
            </div>
          </div>
        )}

        {/* Permanent High-Contrast Floating Orange Highlight Card for Antelia Groves */}
        <div className="absolute bottom-2.5 left-2.5 z-20 bg-white/95 backdrop-blur-md border border-[#EA580C] p-2.5 rounded-[14px] shadow-luxury max-w-[220px] pointer-events-none">
          <div className="flex items-center space-x-1 mb-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-ping" />
            <span className="font-mono text-[8.5px] font-bold text-[#EA580C] tracking-wider">
              Prime Epicenter
            </span>
          </div>
          <div className="font-sans text-[12px] font-extrabold text-[#111827] leading-tight">
            Antelia Groves
          </div>
          <div className="font-sans text-[10.5px] text-[#6B7280] leading-tight mt-0.5">
            10-Acre Gated Villa Sanctuary
          </div>
          <div className="font-mono text-[8.5px] text-[#6B7280] mt-1 pt-1 border-t border-gray-200 flex items-center justify-between">
            <span>NH 44 Flyover</span>
            <span className="text-[#EA580C] font-bold">6 Mins</span>
          </div>
        </div>

      </div>

      {/* =========================================================
          3. BOTTOM CORRIDOR STRIP: KEY COMMUTE TIMES
          ========================================================= */}
      <div className="p-2.5 sm:p-3 bg-[#FAFAF9] border-t border-gray-200 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#4B5563] z-10">
        <div className="flex items-center space-x-1.5">
          <Car className="w-3.5 h-3.5 text-[#EA580C]" />
          <span className="font-sans text-[11.5px] font-medium text-[#111827]">
            Signal-Free Access via NH 44 Elevated Flyover
          </span>
        </div>

        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1 font-mono text-[10.5px] font-bold text-[#EA580C] hover:text-[#C2410C] transition-colors cursor-pointer"
        >
          <span>Get Directions</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

    </div>
  );
}

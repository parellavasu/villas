import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  beforeCaption = '',
  afterCaption = '',
  className = '',
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className={`relative w-full select-none ${className}`}>
      {/* Outer Viewport Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/9] min-h-[380px] sm:min-h-[480px] lg:min-h-[540px] rounded-xs overflow-hidden border border-[#31483D]/70 shadow-2xl cursor-ew-resize bg-[#0E1310]"
      >
        {/* AFTER LAYER (FULL BACKGROUND) */}
        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt={afterLabel}
            className="w-full h-full object-cover object-center pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1310]/70 via-transparent to-transparent pointer-events-none" />
          
          {/* After Metadata Badge */}
          <div className="absolute top-5 right-5 z-10 bg-[#0E1310]/85 backdrop-blur-md px-3.5 py-1.5 border border-[#B8A58A]/40 text-[11px] font-mono text-white rounded-xs">
            <span className="text-[#B8A58A] font-semibold tracking-wider uppercase mr-2">{afterLabel}</span>
          </div>

          {afterCaption && (
            <div className="absolute bottom-5 right-5 z-10 hidden sm:block max-w-xs text-right bg-[#0E1310]/80 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[11px] font-mono text-[#D8D4CA] rounded-xs">
              {afterCaption}
            </div>
          )}
        </div>

        {/* BEFORE LAYER (CLIPPED ON TOP) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative w-full h-full">
            <img
              src={beforeImage}
              alt={beforeLabel}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none max-w-none"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw',
                height: '100%',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1310]/70 via-transparent to-transparent pointer-events-none" />

            {/* Before Metadata Badge */}
            <div className="absolute top-5 left-5 z-10 bg-[#0E1310]/85 backdrop-blur-md px-3.5 py-1.5 border border-white/20 text-[11px] font-mono text-white rounded-xs">
              <span className="text-white/90 font-semibold tracking-wider uppercase mr-2">{beforeLabel}</span>
            </div>

            {beforeCaption && (
              <div className="absolute bottom-5 left-5 z-10 hidden sm:block max-w-xs bg-[#0E1310]/80 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[11px] font-mono text-[#D8D4CA] rounded-xs">
                {beforeCaption}
              </div>
            )}
          </div>
        </div>

        {/* DRAGGABLE DIVIDER LINE & HANDLE */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none flex items-center justify-center"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Vertical Fine Rule */}
          <div className="w-[2px] h-full bg-[#B8A58A] shadow-[0_0_10px_rgba(184,165,138,0.6)]" />

          {/* Minimalist Tactile Handle */}
          <div className="absolute w-8 h-8 rounded-full bg-[#183C2F] border-2 border-[#B8A58A] shadow-luxury flex items-center justify-center text-white pointer-events-auto cursor-ew-resize transition-transform hover:scale-110 active:scale-95">
            <ArrowLeftRight className="w-3.5 h-3.5 text-[#E7E4DD]" />
          </div>
        </div>
      </div>

      {/* Preset Quick Scrub Buttons */}
      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#8C9A93]">
        <div className="flex items-center space-x-2">
          <span>DRAG SLIDER TO COMPARE</span>
        </div>
        <div className="flex items-center space-x-1.5">
          {[
            { label: '25%', pos: 25 },
            { label: '50%', pos: 50 },
            { label: '75%', pos: 75 },
          ].map((btn) => (
            <button
              key={btn.label}
              onClick={() => setSliderPos(btn.pos)}
              className={`px-2.5 py-1 rounded-xs border transition-colors ${
                Math.round(sliderPos) === btn.pos
                  ? 'bg-[#183C2F] text-white border-[#B8A58A]'
                  : 'bg-[#0E1310] text-[#A4B0AA] border-[#31483D]/60 hover:text-white'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

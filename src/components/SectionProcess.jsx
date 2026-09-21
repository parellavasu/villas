import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, ChevronRight, ChevronLeft, RotateCcw, 
  Layers, HardHat, Compass, Sparkles, Trees, Building2, Check
} from 'lucide-react';

export default function SectionProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  const STEP_DURATION_MS = 5000; // 5.0 seconds per step for comfortable viewing

  // 6 Realistic 3D Architectural Animation Process Steps
  const processSteps = [
    {
      stepNum: '01',
      title: 'Land Survey',
      eyebrow: 'STEP 01 OF 06',
      subheading: '10-ACRE UNTOUCHED TERRAIN',
      description: 'The journey begins on 10 acres of untouched natural countryside. Civil engineers and surveyors equipped with digital total stations and GPS mapping instruments map elevations while strictly demarcating tree conservation zones.',
      scale: 'Approximately 10 Contiguous Acres',
      vision: 'Comprehensive topographical survey, contour elevations, and green conservation baseline.',
      image: '/images/process/01_raw_land_survey.jpg',
      badge: 'SITE SURVEY & TOPOGRAPHY',
      highlights: [
        'Digital Total Station & GPS Mapping on Ground',
        '100% Boundary Demarcation & Contour Analysis',
        'Specimen Tree & Natural Greenery Preservation Zones'
      ],
    },
    {
      stepNum: '02',
      title: 'Site Preparation',
      eyebrow: 'STEP 02 OF 06',
      subheading: 'CIVIL GRADING & TREE PROTECTION',
      description: 'Modern heavy excavators and earthmoving machinery carefully clear wild scrub and grade the rich soil. All mature canopy trees are protected in place behind barricaded root protection zones under engineer supervision.',
      scale: 'Civil Earthwork & Selective Clearing',
      vision: 'Engineered cut-and-fill equilibrium with site engineers verifying masterplan alignment.',
      image: '/images/process/02_site_preparation.jpg',
      badge: 'EARTHMOVING & ROOT ZONES',
      highlights: [
        'Heavy Excavators & Earthmovers for Terrain Grading',
        'Protective Root Demarcation for 100% Mature Canopy Trees',
        'Civil Engineers Directing Site Masterplan Blueprints'
      ],
    },
    {
      stepNum: '03',
      title: 'Infrastructure',
      eyebrow: 'STEP 03 OF 06',
      subheading: '40FT BOULEVARDS & CONCEALED UTILITIES',
      description: 'Heavy asphalt pavers and roller compactors lay smooth 40-foot wide tree-lined boulevards and quiet residential streets, alongside deep channels housing precast stormwater drains and color-coded underground conduits.',
      scale: '40ft Avenues & Complete Subsurface Grid',
      vision: '100% underground infrastructure ensuring zero overhead wires or visual utility clutter.',
      image: '/images/process/03_infrastructure_roads.jpg',
      badge: 'ROADS & UNDERGROUND UTILITIES',
      highlights: [
        'Asphalt Pavers & Heavy Rollers Creating 40ft Main Boulevards',
        'Precast Stormwater Pipes & Color-Coded Power/Fiber Conduits',
        'Granite Kerbing & Permeable Percolation Channels'
      ],
    },
    {
      stepNum: '04',
      title: 'Villa Construction',
      eyebrow: 'STEP 04 OF 06',
      subheading: 'ENGINEERED RCC FRAMING & MASONRY',
      description: 'Independent split-level residences take shape with earthquake-resistant reinforced concrete (RCC) skeletal frames, floor slabs, scaffolding, and precision aerated block masonry under crane-assisted material handling.',
      scale: 'Split-Level 3 & 4 BHK Enclaves',
      vision: 'High-strength structural skeleton featuring double-height foyers and soaring living volumes.',
      image: '/images/process/04_villa_construction.jpg',
      badge: 'STRUCTURAL RCC BUILD',
      highlights: [
        'Engineered RCC Columns, Beams & Multi-Tier Slabs',
        'Autoclaved Aerated Thermal Block Masonry',
        'Tower Crane Precision Material Handling & Expert Safety'
      ],
    },
    {
      stepNum: '05',
      title: 'Finishes & Greens',
      eyebrow: 'STEP 05 OF 06',
      subheading: 'GLASS FAÇADES & PRIVATE LANDSCAPING',
      description: 'Villas receive expansive floor-to-ceiling double-glazed sliding glass doors and warm teak wood privacy louvers, while landscape crews roll fresh Bermuda sod grass, plant frangipani trees, and lay flagstone courtyard paths.',
      scale: '180+ Sq.Ft Private Rear Gardens',
      vision: 'Biophilic integration connecting interior living pavilions directly to private outdoor nature.',
      image: '/images/process/05_landscaping_finishes.jpg',
      badge: 'GLAZING & COURTYARDS',
      highlights: [
        'Expansive Double-Glazed Glass Sliding Patio Systems',
        'Warm Architectural Teak Privacy Louvers & Shading',
        'Fresh Sod Turf, Mature Flowering Trees & Flagstone Trails'
      ],
    },
    {
      stepNum: '06',
      title: 'Completed Community',
      eyebrow: 'STEP 06 OF 06',
      subheading: 'THE LIVING SANCTUARY',
      description: 'The finished 10-acre sanctuary comes alive: luxury white-and-sand villas nestled in lush greenery, wide tree-lined avenues, a grand resort clubhouse with a glowing pool, and a thriving, active neighborhood.',
      scale: '10+ Acres • 189 Villas • 15,000+ Sq.Ft Clubhouse',
      vision: 'A tranquil architectural retreat where luxurious living seamlessly integrates with nature.',
      image: '/images/process/06_completed_community.jpg',
      badge: 'COMPLETED LIVING MASTERPIECE',
      highlights: [
        '189 Bespoke Luxury Split-Level Villas with Private Gardens',
        'Grand Resort-Style Clubhouse with Turquoise Swimming Pool',
        'Tree-Lined Avenues, Parks, Jogging Trails & 24/7 Security'
      ],
    },
  ];

  const currentStepData = processSteps[activeStep];

  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      setActiveStep((curr) => (curr + 1) % processSteps.length);
    }, STEP_DURATION_MS);

    return () => clearInterval(timerRef.current);
  }, [isPlaying, processSteps.length]);

  const handleSelectStep = (idx) => {
    setActiveStep(idx);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      id="journey"
      className="relative bg-[#FAFAF9] text-[#111827] py-5 sm:py-6 lg:py-8 border-t border-gray-200 scroll-mt-[74px] overflow-hidden font-sans lg:min-h-[calc(100vh-74px)] flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        
        {/* COMPACT HORIZONTAL SECTION INTRO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 sm:mb-5 pb-3.5 border-b border-gray-200 gap-3">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2.5 mb-1.5">
              <span className="w-5 h-[1.5px] bg-[#EA580C]" />
              <span className="font-mono text-[10.5px] sm:text-[11px] font-semibold tracking-[0.22em] text-[#EA580C] uppercase">
                THE PROCESS
              </span>
            </div>

            <h2 className="font-sans font-semibold text-[20px] sm:text-[24px] lg:text-[28px] leading-tight text-[#111827] tracking-tight">
              FROM VIRGIN LAND TO A LIVING COMMUNITY
            </h2>
          </div>

          {/* Autoplay Status & Play/Pause Controller */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-[#6B7280]">
                STATUS
              </div>
              <div className="font-mono text-[10.5px] text-[#EA580C] font-semibold tracking-wider">
                {isPlaying ? 'PLAYING STEP-BY-STEP' : 'PAUSED — SELECT STEP'}
              </div>
            </div>

            <button
              onClick={togglePlay}
              className="w-8 h-8 rounded-xs bg-white border border-gray-200 text-[#111827] hover:border-[#EA580C] hover:text-[#EA580C] hover:bg-[#FFF7ED] flex items-center justify-center transition-colors shadow-sm shrink-0 cursor-pointer"
              title={isPlaying ? 'Pause auto progression' : 'Resume auto progression'}
              aria-label={isPlaying ? 'Pause auto progression' : 'Resume auto progression'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#EA580C]" /> : <Play className="w-3.5 h-3.5 text-[#EA580C] ml-0.5" />}
            </button>
          </div>
        </div>

        {/* 6 STEP COMPACT TIMELINE BUTTONS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 mb-4 sm:mb-5">
          {processSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelectStep(idx)}
                className={`relative text-left p-2.5 rounded-sm border transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  isActive
                    ? 'bg-white border-[#EA580C] shadow-md ring-1 ring-[#EA580C]/30'
                    : 'bg-white border-gray-200 hover:border-[#EA580C]/60 hover:bg-[#FFF7ED]/40 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`font-mono text-[9px] tracking-wider font-semibold ${
                        isActive ? 'text-[#EA580C]' : 'text-gray-400'
                      }`}
                    >
                      {step.stepNum}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
                    )}
                  </div>
                  <div
                    className={`font-sans text-[11.5px] sm:text-[12px] font-semibold tracking-tight leading-snug line-clamp-1 ${
                      isActive ? 'text-[#111827]' : 'text-[#6B7280] group-hover:text-[#111827]'
                    }`}
                  >
                    {step.title}
                  </div>
                </div>

                <div className="w-full bg-[#FFF7ED] h-[2px] rounded-full overflow-hidden mt-2">
                  <div
                    key={`${idx}-${activeStep === idx ? 'active' : 'inactive'}-${isPlaying ? 'play' : 'pause'}`}
                    className="h-full bg-[#EA580C]"
                    style={{
                      width: idx < activeStep ? '100%' : idx === activeStep ? (isPlaying ? undefined : '50%') : '0%',
                      animation: isActive && isPlaying ? 'processStepTimer 5s linear infinite' : 'none',
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* MAIN VISUAL & INFORMATION CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-center bg-white border border-gray-200 rounded-sm p-4 sm:p-5 lg:p-6 shadow-luxury">
          
          {/* LEFT: Realistic 3D Architectural Visual */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] lg:h-[310px] w-full rounded-xs overflow-hidden border border-gray-200 bg-[#FAFAF9] shadow-md group">
              <img
                key={currentStepData.image}
                src={currentStepData.image}
                alt={`Antelia Groves — ${currentStepData.title}`}
                className="w-full h-full object-cover object-center transform transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/75 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 flex items-center space-x-2 pointer-events-none">
                <span className="inline-block px-2.5 py-0.5 bg-white/95 backdrop-blur-sm text-[#EA580C] font-mono text-[9px] uppercase tracking-[0.2em] border border-gray-200 rounded-xs shadow-sm font-semibold">
                  {currentStepData.badge}
                </span>
              </div>

              <div className="absolute bottom-3 left-3.5 right-3.5 text-white pointer-events-none flex items-end justify-between">
                <div>
                  <div className="font-mono text-[9px] text-[#FED7AA] uppercase tracking-widest mb-0.5 font-medium">
                    {currentStepData.subheading}
                  </div>
                  <div className="font-sans text-[13px] sm:text-[14.5px] font-semibold text-white tracking-wide">
                    {currentStepData.title} · Antelia Groves
                  </div>
                </div>
                <div className="hidden sm:block font-mono text-[9.5px] text-[#FED7AA] font-semibold tracking-wider">
                  STAGE {currentStepData.stepNum} / 06
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Step Architectural Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="inline-flex items-center space-x-2 mb-1.5">
              <span className="w-3.5 h-[1.5px] bg-[#EA580C]" />
              <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-[#EA580C] uppercase">
                {currentStepData.eyebrow}
              </span>
            </div>

            <h3 className="font-sans font-semibold text-[20px] sm:text-[23px] leading-tight text-[#111827] tracking-tight mb-1">
              {currentStepData.title}
            </h3>

            <div className="font-mono text-[10.5px] text-[#EA580C] uppercase tracking-wider mb-2.5 font-medium">
              {currentStepData.subheading}
            </div>

            <p className="font-sans text-[12.5px] sm:text-[13px] leading-relaxed text-[#4B5563] font-normal mb-3 line-clamp-2 sm:line-clamp-3">
              {currentStepData.description}
            </p>

            <div className="space-y-1.5 mb-3 pt-2.5 border-t border-gray-200">
              {currentStepData.highlights.slice(0, 3).map((item, hIdx) => (
                <div key={hIdx} className="flex items-start space-x-2 text-[11.5px] sm:text-[12px] text-[#4B5563]">
                  <Check className="w-3 h-3 text-[#EA580C] mt-0.5 shrink-0" />
                  <span className="line-clamp-1">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 p-2 bg-[#FAFAF9] border border-gray-200 rounded-xs mb-3">
              <div>
                <div className="font-mono text-[8.5px] uppercase tracking-widest text-[#6B7280] mb-0.5">
                  PROJECT SCALE
                </div>
                <div className="font-sans text-[11.5px] font-semibold text-[#111827] line-clamp-1">
                  {currentStepData.scale}
                </div>
              </div>
              <div>
                <div className="font-mono text-[8.5px] uppercase tracking-widest text-[#6B7280] mb-0.5">
                  VISION
                </div>
                <div className="font-sans text-[11px] text-[#4B5563] line-clamp-1">
                  {currentStepData.vision}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2.5 border-t border-gray-200">
              <button
                onClick={() => handleSelectStep((activeStep - 1 + processSteps.length) % processSteps.length)}
                className="inline-flex items-center space-x-1 text-[10.5px] font-mono uppercase tracking-wider text-[#6B7280] hover:text-[#EA580C] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-3 h-3" />
                <span>PREVIOUS</span>
              </button>

              <div className="font-mono text-[10px] text-[#6B7280] font-medium">
                {activeStep + 1} / {processSteps.length}
              </div>

              <button
                onClick={() => handleSelectStep((activeStep + 1) % processSteps.length)}
                className="inline-flex items-center space-x-1 text-[10.5px] font-mono uppercase tracking-wider text-[#EA580C] hover:text-[#C2410C] transition-colors font-semibold cursor-pointer"
              >
                <span>NEXT STEP</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @keyframes processStepTimer {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}

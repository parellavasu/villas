import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, RotateCcw, ChevronRight, ChevronLeft, SlidersHorizontal, 
  Film, HardHat, Wrench, ShieldCheck, Clock, Layers, Activity, Users, Truck, Sparkles, Compass
} from 'lucide-react';
import BeforeAfterSlider from './common/BeforeAfterSlider';
import { PROJECT_MEDIA } from '../config/projectMedia';

export default function SectionLandToLiving() {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [activeAngleIdx, setActiveAngleIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [viewMode, setViewMode] = useState('timelapse'); // 'timelapse' | 'slider'
  const [activeHudTab, setActiveHudTab] = useState('machinery'); // 'machinery' | 'personnel' | 'actions'

  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  const stages = PROJECT_MEDIA.journeyStages || [];
  const currentStage = stages[activeStageIdx] || stages[0];
  const angles = currentStage.angles || [
    { label: 'PRIMARY VIEW', url: currentStage.url, desc: currentStage.title }
  ];
  const currentImageUrl = angles[activeAngleIdx]?.url || currentStage.url;

  const STAGE_DURATION_MS = 6000 / playbackSpeed;

  // Reset angle index when changing stage
  useEffect(() => {
    setActiveAngleIdx(0);
  }, [activeStageIdx]);

  // Video-like auto playback progression
  useEffect(() => {
    if (!isPlaying || viewMode !== 'timelapse') return;

    const intervalStep = 50;
    const stepIncrement = (intervalStep / STAGE_DURATION_MS) * 100;

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (activeStageIdx === stages.length - 1) {
            setIsPlaying(false);
            return 100;
          }
          setActiveStageIdx((curr) => curr + 1);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => clearInterval(timerRef.current);
  }, [isPlaying, activeStageIdx, viewMode, stages.length, STAGE_DURATION_MS]);

  const handleSelectStage = (idx) => {
    setActiveStageIdx(idx);
    setProgress(0);
  };

  const handleTogglePlay = () => {
    if (!isPlaying && activeStageIdx === stages.length - 1) {
      setActiveStageIdx(0);
      setProgress(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleReplay = () => {
    setActiveStageIdx(0);
    setProgress(0);
    setIsPlaying(true);
  };

  const togglePlaybackSpeed = () => {
    setPlaybackSpeed((prev) => (prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1));
  };

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative bg-[#0C120F] text-[#E7E4DD] py-16 sm:py-20 overflow-hidden border-t border-[#1C2C24] scroll-mt-20"
    >
      {/* Background Architectural Watermark Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#15221b_1px,transparent_1px),linear-gradient(to_bottom,#15221b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* =========================================================
            SECTION HEADER & CINEMATIC CONTROLS
            ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-[#22362C]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2.5 mb-2">
              <span className="w-5 h-[1.5px] bg-[#C5A880]" />
              <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-[#C5A880] uppercase">
                02 / THE JOURNEY
              </span>
            </div>
            <h2 className="font-sans font-semibold text-[30px] sm:text-[36px] lg:text-[40px] tracking-tight text-white leading-tight">
              FROM RAW LAND TO LIVING SANCTUARY
            </h2>
            <p className="text-[12px] font-mono text-[#8C9A93] tracking-wider uppercase mt-1">
              5-Stage Engineering Timeline: Raw Site · Earthwork · Infrastructure · Construction · Living
            </p>
          </div>

          {/* Mode Switcher & Video Controls */}
          <div className="mt-5 md:mt-0 flex flex-wrap items-center gap-3">
            
            {/* View Mode Toggle: Timelapse Film vs Before/After Slider */}
            <div className="inline-flex p-1 bg-[#070D0A] border border-[#22362C] rounded-xs">
              <button
                onClick={() => setViewMode('timelapse')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded-xs transition-all ${
                  viewMode === 'timelapse'
                    ? 'bg-[#183C2F] text-white font-semibold shadow-xs'
                    : 'text-[#8C9A93] hover:text-white'
                }`}
              >
                <Film className="w-3 h-3" />
                <span>VIDEO PLAYER</span>
              </button>

              <button
                onClick={() => setViewMode('slider')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded-xs transition-all ${
                  viewMode === 'slider'
                    ? 'bg-[#183C2F] text-white font-semibold shadow-xs'
                    : 'text-[#8C9A93] hover:text-white'
                }`}
              >
                <SlidersHorizontal className="w-3 h-3" />
                <span>BEFORE & AFTER</span>
              </button>
            </div>

            {viewMode === 'timelapse' && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleTogglePlay}
                  className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#183C2F] hover:bg-[#204E3E] text-white border border-[#2D4D3D] rounded-xs text-[11px] font-mono uppercase tracking-wider transition-all shadow-xs"
                  title={isPlaying ? 'Pause Timeline' : 'Play Timeline'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
                </button>

                <button
                  onClick={togglePlaybackSpeed}
                  className="px-2.5 py-1.5 bg-[#070D0A] hover:bg-[#14221A] text-[#C5A880] border border-[#22362C] rounded-xs text-[11px] font-mono font-semibold transition-colors"
                  title="Toggle Playback Speed"
                >
                  {playbackSpeed}x
                </button>

                <button
                  onClick={handleReplay}
                  className="p-1.5 bg-[#070D0A] hover:bg-[#14221A] text-[#8C9A93] hover:text-white border border-[#22362C] rounded-xs transition-colors"
                  title="Restart from Stage 01"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* =========================================================
            MODE 1: 5-STAGE CINEMATIC VIDEO-LIKE THEATER
            ========================================================= */}
        {viewMode === 'timelapse' ? (
          <>
            {/* 1. HORIZONTAL VIDEO TIMELINE SCRUBBER (5 Interactive Segments) */}
            <div className="grid grid-cols-5 gap-2 mb-4">
              {stages.map((st, idx) => {
                const isActive = idx === activeStageIdx;
                const isPassed = idx < activeStageIdx;

                return (
                  <button
                    key={st.id}
                    onClick={() => handleSelectStage(idx)}
                    className={`text-left p-2.5 sm:p-3 rounded-xs border transition-all duration-300 relative overflow-hidden ${
                      isActive
                        ? 'bg-[#132019] border-[#C5A880] shadow-md ring-1 ring-[#C5A880]/30'
                        : 'bg-[#080E0B] border-[#1C2C24] hover:border-[#2D4638]'
                    }`}
                  >
                    {/* Live Segment Progress Bar */}
                    <div
                      className="absolute bottom-0 left-0 h-[2px] bg-[#C5A880] transition-all duration-75"
                      style={{
                        width: isActive ? `${progress}%` : isPassed ? '100%' : '0%',
                      }}
                    />

                    <div className="flex items-center justify-between text-[10px] font-mono uppercase mb-1">
                      <span className={isActive ? 'text-[#C5A880] font-bold' : 'text-[#64746D]'}>
                        STEP 0{st.stageNumber}
                      </span>
                      <span className="text-[#8C9A93] hidden md:inline">{st.phaseTime}</span>
                    </div>

                    <div className={`text-[12px] sm:text-[13px] font-semibold truncate leading-tight ${
                      isActive ? 'text-white' : 'text-[#A4B0AA]'
                    }`}>
                      {st.title.split('&')[0].trim()}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* 2. THE MAIN WIDESCREEN CINEMATIC SCREEN (16:9 Aspect) */}
            <div className="relative w-full aspect-[16/9] min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] rounded-xs overflow-hidden border border-[#22362C] bg-[#070D0A] shadow-2xl">
              
              {/* Active Image with Cinematic Camera Drift */}
              <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
                <img
                  src={currentImageUrl}
                  alt={currentStage.title}
                  className="w-full h-full object-cover object-center animate-cinematic-push"
                />
              </div>

              {/* Architectural Film Gradient Vignettes */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D0A]/95 via-transparent to-[#070D0A]/50 pointer-events-none z-15" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070D0A]/85 via-transparent to-transparent pointer-events-none z-15" />

              {/* Top-Left Live Video Telemetry HUD */}
              <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2">
                <div className="bg-[#070D0A]/85 backdrop-blur-md px-3 py-1.5 border border-[#C5A880]/40 rounded-xs flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#52B788] animate-pulse" />
                  <span className="text-[10.5px] font-mono text-white tracking-widest uppercase font-semibold">
                    STEP 0{currentStage.stageNumber} / 05 · {currentStage.phaseTime}
                  </span>
                </div>
                <div className="bg-[#070D0A]/70 backdrop-blur-sm px-2.5 py-1.5 border border-white/10 rounded-xs text-[10px] font-mono text-[#8C9A93]">
                  GPS: 12°47'28"N 77°41'12"E
                </div>
              </div>

              {/* Top-Right Multi-Angle Perspective Switcher */}
              <div className="absolute top-4 right-4 z-20 flex items-center space-x-1.5 bg-[#070D0A]/85 backdrop-blur-md p-1 border border-white/15 rounded-xs">
                <span className="text-[9.5px] font-mono text-[#8C9A93] uppercase px-2 hidden sm:inline">
                  CAMERA:
                </span>
                {angles.map((ang, aIdx) => (
                  <button
                    key={aIdx}
                    onClick={() => setActiveAngleIdx(aIdx)}
                    className={`px-2.5 py-1 text-[10.5px] font-mono uppercase tracking-wider rounded-xs transition-all ${
                      activeAngleIdx === aIdx
                        ? 'bg-[#183C2F] text-white font-semibold border border-[#3A6B56]'
                        : 'text-[#A4B0AA] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {ang.label.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Bottom-Left Stage Narrative Overlay */}
              <div className="absolute bottom-5 left-5 right-5 lg:right-auto lg:max-w-xl z-20 pointer-events-auto">
                <div className="bg-[#070D0A]/90 backdrop-blur-md p-5 sm:p-6 border border-[#22362C] rounded-xs shadow-2xl">
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#C5A880] uppercase font-semibold">
                      {currentStage.headline}
                    </span>
                    <span className="text-[10.5px] font-mono text-[#8C9A93]">
                      {currentStage.videoTimestamp}
                    </span>
                  </div>

                  <h3 className="text-[20px] sm:text-[24px] font-semibold text-white leading-tight mb-2">
                    {currentStage.subtitle}
                  </h3>

                  <p className="text-[12.5px] sm:text-[13.5px] text-[#D8D4CA] leading-relaxed mb-3 font-normal">
                    {currentStage.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-[#1C2C24] text-[11px] font-mono text-[#8C9A93]">
                    {currentStage.stats?.slice(0, 4).map((st, i) => (
                      <div key={i} className="flex items-center space-x-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#52B788] shrink-0" />
                        <span className="truncate"><strong className="text-white">{st.label}:</strong> {st.value}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Floating Prev / Next Arrow Controls */}
              <div className="absolute bottom-5 right-5 z-20 hidden sm:flex items-center space-x-2">
                <button
                  onClick={() => handleSelectStage(Math.max(0, activeStageIdx - 1))}
                  disabled={activeStageIdx === 0}
                  className={`p-2 rounded-xs border backdrop-blur-md transition-all ${
                    activeStageIdx === 0
                      ? 'bg-black/30 border-white/5 text-white/20 cursor-not-allowed'
                      : 'bg-[#070D0A]/80 border-white/20 text-white hover:bg-[#183C2F]'
                  }`}
                  title="Previous Step"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleSelectStage(Math.min(stages.length - 1, activeStageIdx + 1))}
                  disabled={activeStageIdx === stages.length - 1}
                  className={`p-2 rounded-xs border backdrop-blur-md transition-all ${
                    activeStageIdx === stages.length - 1
                      ? 'bg-black/30 border-white/5 text-white/20 cursor-not-allowed'
                      : 'bg-[#070D0A]/80 border-white/20 text-white hover:bg-[#183C2F]'
                  }`}
                  title="Next Step"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* 3. ON-SITE PERSONNEL, MACHINERY & ENGINEERING BREAKDOWN (Real-Life Specifications) */}
            <div className="mt-6 bg-[#070D0A] border border-[#22362C] rounded-xs overflow-hidden">
              
              {/* Tab Selector Bar */}
              <div className="p-2 bg-[#0C120F] border-b border-[#1C2C24] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveHudTab('machinery')}
                    className={`flex items-center space-x-2 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded-xs transition-all ${
                      activeHudTab === 'machinery'
                        ? 'bg-[#183C2F] text-white font-semibold border border-[#3A6B56]'
                        : 'text-[#8C9A93] hover:text-white'
                    }`}
                  >
                    <Truck className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>MACHINERY & TOOLS ({currentStage.machinery?.length || 0})</span>
                  </button>

                  <button
                    onClick={() => setActiveHudTab('personnel')}
                    className={`flex items-center space-x-2 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded-xs transition-all ${
                      activeHudTab === 'personnel'
                        ? 'bg-[#183C2F] text-white font-semibold border border-[#3A6B56]'
                        : 'text-[#8C9A93] hover:text-white'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5 text-[#52B788]" />
                    <span>ON-SITE PERSONNEL ({currentStage.personnel?.length || 0})</span>
                  </button>

                  <button
                    onClick={() => setActiveHudTab('actions')}
                    className={`flex items-center space-x-2 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded-xs transition-all ${
                      activeHudTab === 'actions'
                        ? 'bg-[#183C2F] text-white font-semibold border border-[#3A6B56]'
                        : 'text-[#8C9A93] hover:text-white'
                    }`}
                  >
                    <Activity className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>ENGINEERING ACTIONS ({currentStage.actions?.length || 0})</span>
                  </button>
                </div>

                <div className="hidden sm:block text-[10.5px] font-mono text-[#8C9A93]">
                  STEP 0{currentStage.stageNumber} SPECIFICATIONS
                </div>
              </div>

              {/* Tab Content Display */}
              <div className="p-4 sm:p-5">
                
                {/* TAB 1: MACHINERY & TOOLS USED */}
                {activeHudTab === 'machinery' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {currentStage.machinery?.map((item, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3.5 bg-[#0D1511] border border-[#1C2C24] rounded-xs hover:border-[#C5A880]/50 transition-colors"
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#C5A880] uppercase mb-1">
                          <span>{item.category}</span>
                          <Wrench className="w-3 h-3 text-[#C5A880]" />
                        </div>
                        <div className="text-[13px] font-semibold text-white mb-1">
                          {item.name}
                        </div>
                        <div className="text-[11.5px] text-[#8C9A93] leading-relaxed">
                          {item.note}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* TAB 2: ON-SITE PERSONNEL & SUPERVISION */}
                {activeHudTab === 'personnel' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {currentStage.personnel?.map((per, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-3.5 bg-[#0D1511] border border-[#1C2C24] rounded-xs hover:border-[#52B788]/50 transition-colors"
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#52B788] uppercase mb-1">
                          <span>{per.badge}</span>
                          <HardHat className="w-3 h-3 text-[#52B788]" />
                        </div>
                        <div className="text-[13px] font-semibold text-white mb-1">
                          {per.role}
                        </div>
                        <div className="text-[11.5px] text-[#8C9A93] leading-relaxed">
                          {per.task}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* TAB 3: KEY ENGINEERING ACTIONS PERFORMED */}
                {activeHudTab === 'actions' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentStage.actions?.map((act, aIdx) => (
                      <div
                        key={aIdx}
                        className="p-3.5 bg-[#0D1511] border border-[#1C2C24] rounded-xs flex items-start space-x-2.5"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#183C2F] text-white flex items-center justify-center text-[10.5px] font-mono shrink-0 mt-0.5 font-bold">
                          {aIdx + 1}
                        </span>
                        <div className="text-[12.5px] text-[#D8D4CA] leading-relaxed">
                          {act}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>

            </div>
          </>
        ) : (
          /* =========================================================
              MODE 2: BEFORE / AFTER COMPARISON SLIDER
              ========================================================= */
          <div className="bg-[#070D0A] border border-[#22362C] rounded-xs p-6 shadow-2xl">
            <BeforeAfterSlider />
          </div>
        )}

      </div>
    </section>
  );
}

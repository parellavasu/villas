import React, { useState, useEffect } from 'react';

export default function IntroLogoAnimation({ onComplete }) {
  const [step, setStep] = useState(1); // 1: line, 2: symbol, 3: antelia, 4: groves, 5: glow & settle, 6: done
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Step 1 -> 2: Line forms symbol
    const t1 = setTimeout(() => setStep(2), 700);
    // Step 2 -> 3: "ANTELIA" appears
    const t2 = setTimeout(() => setStep(3), 1500);
    // Step 3 -> 4: "GROVES" appears
    const t3 = setTimeout(() => setStep(4), 2300);
    // Step 4 -> 5: Subtle blue glow & settle
    const t4 = setTimeout(() => setStep(5), 3100);
    // Step 5 -> 6: Smooth fade out of curtain
    const t5 = setTimeout(() => {
      setStep(6);
      setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 700);
    }, 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  const handleSkip = () => {
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-opacity duration-700 ease-out ${
        step === 6 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center select-none">
        {/* Step 1 & 2: Architectural Blue Line Drawing Minimal Abstract Emblem */}
        <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
          <svg
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Outer Architectural Perimeter Box */}
            <rect
              x="4"
              y="4"
              width="72"
              height="72"
              rx="18"
              stroke="#0284C7"
              strokeWidth="2"
              strokeDasharray="288"
              strokeDashoffset={step >= 1 ? "0" : "288"}
              className="transition-all duration-1000 ease-out"
              fill={step >= 2 ? "#F8FAFC" : "none"}
            />

            {/* Central 'A' Apex & Canopy Archway */}
            <path
              d="M40 18L24 60H31.5L40 37L48.5 60H56L40 18Z"
              fill="#0A2540"
              className={`transition-all duration-700 ease-out ${
                step >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transformOrigin: 'center' }}
            />

            {/* Architectural Horizon Line */}
            <path
              d="M28 47H52"
              stroke="#0284C7"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="30"
              strokeDashoffset={step >= 2 ? "0" : "30"}
              className="transition-all duration-700 ease-out delay-200"
            />

            {/* Zenith Grove Leaf Accent */}
            <circle
              cx="40"
              cy="27"
              r="2.8"
              fill="#0284C7"
              className={`transition-all duration-500 ease-out ${
                step >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            />
          </svg>

          {/* Subtle Royal Blue Glow Ripple */}
          <div
            className={`absolute inset-0 rounded-3xl bg-sky-400/20 blur-xl transition-opacity duration-1000 ${
              step >= 5 ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>

        {/* Step 3: "Antelia" appears with refined letter spacing */}
        <div className="overflow-hidden text-center">
          <h1
            className={`font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.28em] text-navy-900 transition-all duration-800 ease-out ${
              step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Antelia
          </h1>
        </div>

        {/* Step 4: "Groves" appears underneath with elegant spacing */}
        <div className="overflow-hidden text-center mt-2">
          <p
            className={`font-sans text-sm sm:text-base font-bold tracking-[0.52em] text-cobalt-600 transition-all duration-800 ease-out ${
              step >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Groves
          </p>
        </div>

        {/* Subtle Architectural Descriptor */}
        <div
          className={`mt-6 text-[10px] font-mono tracking-widest text-slate-400 transition-opacity duration-700 ${
            step >= 5 ? "opacity-100" : "opacity-0"
          }`}
        >
          10 Acres // One Vision // A Living Landscape
        </div>
      </div>

      {/* Skip button in bottom-right for instant access */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 text-xs font-mono tracking-widest text-slate-400 hover:text-navy-900 transition-colors px-3 py-1.5 rounded-full border border-slate-200 hover:border-slate-300"
      >
        Skip Intro →
      </button>
    </div>
  );
}

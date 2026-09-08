import React from 'react';
import { journeyChapters } from '../data/projectData';

export default function JourneyIndicator({ activeChapter = "land" }) {
  return (
    <aside
      aria-label="Transformation Journey Navigation"
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col items-center space-y-4 pointer-events-none"
    >
      <div className="text-[9px] font-mono tracking-widest text-stone-400 rotate-180 uppercase [writing-mode:vertical-lr]">
        TRANSFORMATION JOURNEY
      </div>
      <div className="w-[1px] h-12 bg-white/15"></div>

      <nav className="flex flex-col space-y-2 pointer-events-auto">
        {journeyChapters.map((chapter) => {
          const isActive = activeChapter === chapter.id;
          return (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className="group flex items-center space-x-3 py-0.5"
              title={`${chapter.number} — ${chapter.title}`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-bronze-400 scale-125 ring-4 ring-bronze-500/20"
                    : "bg-white/20 group-hover:bg-white/60"
                }`}
              />
              <span
                className={`text-[10px] font-mono tracking-widest uppercase transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${
                  isActive ? "text-bronze-400 font-semibold opacity-100 translate-x-0" : "text-stone-400"
                }`}
              >
                {chapter.number} {chapter.title}
              </span>
            </a>
          );
        })}
      </nav>

      <div className="w-[1px] h-12 bg-white/15"></div>
      <span className="text-[9px] font-mono text-bronze-500">10 AC</span>
    </aside>
  );
}

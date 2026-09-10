import React from 'react';
import { journeyChapters } from '../data/projectData';

export default function JourneyIndicator({ activeChapter = "land" }) {
  return (
    <aside
      aria-label="Transformation Journey Navigation"
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col items-center space-y-4 pointer-events-none"
    >
      <div className="text-[9px] font-mono tracking-widest text-slate-400 rotate-180 uppercase [writing-mode:vertical-lr] font-semibold">
        TRANSFORMATION JOURNEY
      </div>
      <div className="w-[1.5px] h-12 bg-sky-200"></div>

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
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-cobalt-600 scale-125 ring-4 ring-sky-200"
                    : "bg-slate-300 group-hover:bg-cobalt-500"
                }`}
              />
              <span
                className={`text-[10px] font-mono tracking-widest uppercase transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${
                  isActive ? "text-navy-900 font-bold opacity-100 translate-x-0" : "text-slate-500"
                }`}
              >
                {chapter.number} {chapter.title}
              </span>
            </a>
          );
        })}
      </nav>

      <div className="w-[1.5px] h-12 bg-sky-200"></div>
      <span className="text-[9px] font-mono text-cobalt-600 font-bold">10 AC</span>
    </aside>
  );
}

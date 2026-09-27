import React from 'react';
import { STORY_METADATA } from '../data/storyData';
import { CyberCurrencyBackground } from './CyberCurrencyBackground';

export const HeroCover: React.FC = () => {
  return (
    <div>
      {/* 16:9 Cover Box with Title */}
      <section className="relative w-full aspect-video min-h-[420px] max-h-[85vh] flex flex-col justify-center overflow-hidden bg-[#061238] text-white shadow-2xl">
        {/* Animated Futuristic Cyber Currency Background matching user image */}
        <CyberCurrencyBackground />

        {/* Main Editorial Title Box */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 py-6 md:py-10 text-center flex flex-col justify-center items-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[92px] font-serif font-normal tracking-tight text-white leading-[1.08] max-w-5xl mx-auto drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
            <span className="block">Chuyển hóa</span>
            <span className="block text-sky-200">vốn ngoại</span>
            <span className="block italic font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-sky-200 drop-shadow-[0_0_25px_rgba(254,240,138,0.5)]">
              thành nội lực
            </span>
          </h1>
        </div>
      </section>

      {/* Subhead placed directly underneath the cover */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-8 sm:pt-10 pb-2 text-center">
        <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-slate-700 max-w-3xl mx-auto leading-relaxed border-b border-stone-300/80 pb-6 sm:pb-8">
          {STORY_METADATA.subhead}
        </p>
      </div>
    </div>
  );
};


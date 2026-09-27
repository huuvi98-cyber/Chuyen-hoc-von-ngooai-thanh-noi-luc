import React from 'react';
import { STORY_METADATA } from '../data/storyData';
import { CyberCurrencyBackground } from './CyberCurrencyBackground';

export const HeroCover: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#020924] pt-14 text-white">
      {/* Animated Futuristic Cyber Currency Background matching user image */}
      <CyberCurrencyBackground />

      {/* Main Editorial Title Box */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 py-16 md:py-28 text-center flex-1 flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-white leading-[1.12] max-w-4xl mx-auto drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
          <span className="block">Chuyển hóa</span>
          <span className="block">vốn ngoại</span>
          <span className="block italic font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-sky-200 drop-shadow-[0_0_25px_rgba(254,240,138,0.5)]">
            thành nội lực
          </span>
        </h1>

        <p className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl font-light text-sky-200/90 max-w-3xl mx-auto leading-relaxed font-sans drop-shadow-md">
          {STORY_METADATA.subhead}
        </p>
      </div>
    </section>
  );
};


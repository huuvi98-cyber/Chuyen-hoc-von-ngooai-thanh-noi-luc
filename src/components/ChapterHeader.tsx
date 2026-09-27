import React from 'react';
import { Chapter } from '../types/story';

interface ChapterHeaderProps {
  chapter: Chapter;
}

export const ChapterHeader: React.FC<ChapterHeaderProps> = ({ chapter }) => {
  return (
    <div id={chapter.id} className="pt-20 pb-4 mb-8">
      <h2 className="text-2xl sm:text-4xl md:text-[42px] font-sans uppercase font-bold text-[#1e3a8a] tracking-wider leading-snug whitespace-pre-line border-l-4 sm:border-l-[6px] border-[#dc2626] pl-4 sm:pl-6 py-1">
        {chapter.title}
      </h2>
    </div>
  );
};

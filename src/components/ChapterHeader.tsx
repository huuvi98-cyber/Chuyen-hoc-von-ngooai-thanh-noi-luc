import React from 'react';
import { Chapter } from '../types/story';

interface ChapterHeaderProps {
  chapter: Chapter;
}

export const ChapterHeader: React.FC<ChapterHeaderProps> = ({ chapter }) => {
  return (
    <div id={chapter.id} className="pt-20 pb-4 border-b border-sky-500/25 mb-8">
      <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal tracking-tight">
        {chapter.title}
      </h2>
    </div>
  );
};

import React from 'react';

interface PullQuoteProps {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

export const PullQuote: React.FC<PullQuoteProps> = ({ quote, author, role, organization }) => {
  return (
    <figure className="my-12 sm:my-16 max-w-4xl mx-auto py-8 sm:py-10 px-6 sm:px-12 border-y border-sky-400/25 bg-[#0a1e4e]/50 backdrop-blur-xs text-center relative shadow-lg">
      <span className="text-5xl sm:text-6xl text-sky-400/30 font-serif leading-none select-none block -mb-4">“</span>
      <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif font-normal italic text-white leading-relaxed text-wrap-balance">
        {quote}
      </blockquote>
      <figcaption className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-sans">
        <strong className="text-amber-200 font-medium tracking-wide">{author}</strong>
        <span aria-hidden="true" className="text-sky-400/50">·</span>
        <span className="text-sky-200/90">{role}</span>
        <span aria-hidden="true" className="text-sky-400/50">·</span>
        <span className="text-cyan-300 font-mono text-xs sm:text-sm">{organization}</span>
      </figcaption>
    </figure>
  );
};

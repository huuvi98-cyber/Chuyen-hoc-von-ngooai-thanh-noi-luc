import React from 'react';

interface PullQuoteProps {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

export const PullQuote: React.FC<PullQuoteProps> = ({ quote, author, role, organization }) => {
  return (
    <figure className="my-12 sm:my-16 max-w-4xl mx-auto py-8 sm:py-10 px-6 sm:px-12 border-y-2 border-blue-200/80 bg-[#f3ecd5]/60 backdrop-blur-xs text-center relative shadow-sm rounded-lg">
      <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif font-normal italic text-slate-900 leading-relaxed text-wrap-balance">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-sans">
        <strong className="text-[#1e3a8a] font-bold tracking-wide">{author}</strong>
        <span aria-hidden="true" className="text-slate-400">·</span>
        <span className="text-slate-600">{role}</span>
        <span aria-hidden="true" className="text-slate-400">·</span>
        <span className="text-slate-600">{organization}</span>
      </figcaption>
    </figure>
  );
};

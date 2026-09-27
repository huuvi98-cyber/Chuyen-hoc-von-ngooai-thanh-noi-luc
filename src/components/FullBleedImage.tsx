import React from 'react';

interface FullBleedImageProps {
  src: string;
  alt: string;
  caption: string;
  credit?: string;
}

export const FullBleedImage: React.FC<FullBleedImageProps> = ({
  src,
  alt,
  caption,
  credit,
}) => {
  return (
    <figure className="relative my-12 sm:my-16 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-hidden">
      <div className="w-full bg-slate-900 shadow-xl overflow-hidden">
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-auto max-h-[85vh] object-cover object-center mx-auto transition-transform duration-700 hover:scale-[1.01]"
          loading="lazy"
        />
      </div>
      <div className="max-w-4xl mx-auto px-5 sm:px-8 mt-3">
        <figcaption className="text-sm sm:text-[15px] font-sans text-slate-600 leading-relaxed border-l-2 border-slate-400 pl-3 py-0.5">
          <span>{caption}</span>
          {credit && <span className="font-semibold text-slate-800 ml-1.5">{credit}</span>}
        </figcaption>
      </div>
    </figure>
  );
};

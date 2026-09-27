import React from 'react';

interface ExpertPortraitProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  positionClass?: string;
  className?: string;
}

export const ExpertPortrait: React.FC<ExpertPortraitProps> = ({
  src,
  alt,
  size = 'lg',
  positionClass = 'object-center',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10 sm:w-11 sm:h-11',
    md: 'w-16 h-16 sm:w-20 sm:h-20',
    lg: 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32'
  };

  return (
    <div
      className={`relative rounded-full overflow-hidden shrink-0 border-2 border-cyan-400/80 shadow-[0_0_20px_rgba(56,189,248,0.35)] ring-2 ring-sky-300/40 bg-[#091f58] ${sizeClasses[size]} ${className}`}
      title={alt}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${positionClass}`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

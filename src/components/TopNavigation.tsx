import React, { useState, useEffect } from 'react';

export const TopNavigation: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const current = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, current)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Horizontal reading progress bar at very top edge */}
      <div 
        className="h-[3px] bg-gradient-to-r from-blue-700 via-sky-500 to-blue-600 transition-all duration-150 ease-out shadow-xs shadow-blue-500/30"
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
};

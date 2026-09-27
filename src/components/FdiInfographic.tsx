import React, { useEffect, useRef, useState } from 'react';

// Custom hook to animate numbers smoothly when scrolled into view
function useCountUp(target: number, decimals: number, trigger: boolean, duration: number = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setValue(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOut * target;

      setValue(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [trigger, target, duration]);

  // Format with Vietnamese comma decimal separator
  const formatted = value.toFixed(decimals).replace('.', ',');
  // If integer with thousands, format with dot (e.g. 2.771)
  if (decimals === 0 && target >= 1000) {
    return Math.round(value).toLocaleString('vi-VN');
  }
  return formatted;
}

export const FdiInfographic: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.25 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  // Animated values
  const valTongVon = useCountUp(40.63, 2, isVisible);
  const valTangTong = useCountUp(55.4, 1, isVisible);
  const valCapMoi = useCountUp(21.72, 2, isVisible);
  const valTangCapMoi = useCountUp(96.8, 1, isVisible);
  const valTangThem = useCountUp(12.21, 2, isVisible);
  const valLuotDuAn = useCountUp(819, 0, isVisible);
  const valThucHien = useCountUp(17.25, 2, isVisible);
  const valTangThucHien = useCountUp(12.0, 0, isVisible);
  const valSoDuAnCapMoi = useCountUp(2771, 0, isVisible);
  const valTangSoDuAn = useCountUp(9.4, 1, isVisible);

  return (
    <div 
      ref={containerRef}
      className="my-12 sm:my-16 overflow-hidden rounded-2xl border-2 border-sky-400/40 bg-gradient-to-br from-[#0c2464] via-[#091b4f] to-[#06143c] p-5 sm:p-8 md:p-10 shadow-2xl text-white font-sans relative backdrop-blur-md"
    >
      {/* Ambient background glow & subtle grid */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(56, 189, 248, 0.4) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Infographic Grid matching info.jpg */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* ============================================================ */}
        {/* LEFT COLUMN: Title & Visual Illustrations */}
        {/* ============================================================ */}
        <div className="lg:col-span-5 flex flex-col justify-start space-y-6 sm:space-y-7 border-b lg:border-b-0 lg:border-r border-sky-400/25 pb-6 lg:pb-0 lg:pr-8">
          <div>
            {/* Big Brand Title */}
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-200 leading-none select-none drop-shadow-[0_2px_12px_rgba(56,189,248,0.4)]">
                  FDI
                </h3>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider text-white mt-2 uppercase whitespace-nowrap block drop-shadow-sm">
                  VIỆT NAM
                </h4>
                
                {/* 8 tháng năm 2026 Badge on 1 line */}
                <div className="inline-block mt-3 px-3.5 py-1 rounded-md bg-[#030b24] border border-sky-400/50 text-white font-bold text-xs sm:text-sm tracking-wide whitespace-nowrap shadow-inner">
                  8 tháng năm 2026
                </div>
              </div>

              {/* Ascending Bar Chart & Arrows Illustration */}
              <div className="w-16 sm:w-20 md:w-24 h-14 sm:h-16 md:h-20 shrink-0 relative pt-1">
                <svg className="w-full h-full" viewBox="0 0 120 100" fill="none">
                  {/* Ascending bars */}
                  <rect x="15" y="60" width="14" height="35" rx="2" fill="#0284c7" opacity="0.6" />
                  <rect x="35" y="45" width="14" height="50" rx="2" fill="#0ea5e9" opacity="0.8" />
                  <rect x="55" y="25" width="14" height="70" rx="2" fill="#38bdf8" />
                  {/* Upward Arrows */}
                  <path d="M75 35 L105 10 M105 10 L92 10 M105 10 L105 23" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M50 55 L80 30 M80 30 L68 30 M80 30 L80 42" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
                </svg>
              </div>
            </div>
          </div>

          {/* Metric: ĐƯỢC CẤP MỚI 2.771 dự án */}
          <div className="pt-5 border-t border-sky-400/25">
            <div className="text-xs sm:text-sm uppercase tracking-wider text-sky-300 font-bold">
              ĐƯỢC CẤP MỚI
            </div>
            <div className="mt-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-300 font-mono tracking-tight drop-shadow-[0_0_14px_rgba(56,189,248,0.45)] leading-none">
                {valSoDuAnCapMoi}
              </div>
              <div className="mt-1.5 flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-100">
                <span>dự án</span>
                <span className="text-xs sm:text-sm font-bold text-sky-200 inline-flex items-center gap-1">
                  (▲ <span className="text-cyan-300 font-extrabold">{valTangSoDuAn}%</span>)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: 4 Main Metrics with Horizontal Dividers */}
        {/* ============================================================ */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-7">
          
          {/* Item 1: TỔNG VỐN FDI ĐĂNG KÝ */}
          <div className="pb-5 border-b border-sky-400/25">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-200">
              TỔNG VỐN FDI ĐĂNG KÝ
            </div>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mt-1">
              <span className="text-4xl sm:text-5xl font-black text-cyan-300 font-mono tracking-tight drop-shadow-[0_0_15px_rgba(56,189,248,0.45)]">
                {valTongVon}
              </span>
              <span className="text-base sm:text-lg font-bold text-white">tỷ USD</span>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 font-bold text-sm ml-2">
                <span>▲</span>
                <span>{valTangTong}%</span>
              </div>
            </div>
          </div>

          {/* Item 2: VỐN ĐĂNG KÝ CẤP MỚI */}
          <div className="pb-5 border-b border-sky-400/25">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-200">
              VỐN ĐĂNG KÝ CẤP MỚI
            </div>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mt-1">
              <span className="text-4xl sm:text-5xl font-black text-sky-300 font-mono tracking-tight drop-shadow-[0_0_15px_rgba(14,165,233,0.45)]">
                {valCapMoi}
              </span>
              <span className="text-base sm:text-lg font-bold text-white">tỷ USD</span>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-950/70 border border-sky-400/40 text-sky-300 font-bold text-sm ml-2">
                <span>▲</span>
                <span>{valTangCapMoi}%</span>
              </div>
            </div>
          </div>

          {/* Item 3: VỐN ĐĂNG KÝ TĂNG THÊM */}
          <div className="pb-5 border-b border-sky-400/25">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-200">
              VỐN ĐĂNG KÝ TĂNG THÊM
            </div>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mt-1">
              <span className="text-4xl sm:text-5xl font-black text-cyan-200 font-mono tracking-tight drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                {valTangThem}
              </span>
              <span className="text-base sm:text-lg font-bold text-white">tỷ USD</span>
              <span className="text-sm sm:text-base font-semibold text-slate-200 ml-2">
                (<strong className="text-amber-200 font-bold font-mono">{valLuotDuAn}</strong> lượt dự án)
              </span>
            </div>
          </div>

          {/* Item 4: VỐN FDI THỰC HIỆN */}
          <div className="pt-1">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-200">
              VỐN FDI THỰC HIỆN
            </div>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mt-1">
              <span className="text-4xl sm:text-5xl font-black text-cyan-300 font-mono tracking-tight drop-shadow-[0_0_15px_rgba(56,189,248,0.45)]">
                {valThucHien}
              </span>
              <span className="text-base sm:text-lg font-bold text-white">tỷ USD</span>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 font-bold text-sm ml-2">
                <span>▲</span>
                <span>{valTangThucHien}%</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-sky-300/80 font-medium italic mt-1.5">
              mức cao nhất của 8 tháng trong 5 năm
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

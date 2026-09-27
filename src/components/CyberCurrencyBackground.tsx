import React, { useEffect, useRef } from 'react';

export const CyberCurrencyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Soft Canvas Particle Effect: Gentle wisps softly drawn INWARD toward the portal (NO shooting out)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle, gentle floating particles flowing INWARD from right to left
    const particleCount = 35;
    const originX = () => width * 0.14;
    const originY = () => height * 0.52;

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width * 0.7 + width * 0.25,
      y: (Math.random() - 0.5) * height * 0.7 + height * 0.5,
      radius: Math.random() * 1.5 + 0.8,
      speed: Math.random() * 0.35 + 0.2, // Gentle, slow movement
      opacity: Math.random() * 0.35 + 0.1, // Subtle, soft opacity
      hue: Math.random() > 0.5 ? 195 : 215, // Soft cyan to deep blue
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const targetX = originX();
      const targetY = originY();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Gravitational attraction vector towards the portal center
        const dx = targetX - p.x;
        const dy = targetY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Slow, calm inward suction
        p.x -= p.speed * 1.2;
        p.y += (dy / (dist + 50)) * p.speed * 0.8;

        // When particle reaches near the portal, respawn gently far on the right
        if (p.x < targetX + 30 || dist < 40) {
          p.x = width + Math.random() * 80;
          p.y = (Math.random() - 0.5) * height * 0.65 + height * 0.5;
          p.opacity = Math.random() * 0.35 + 0.1;
        }

        // Calculate proximity fade (fades out as it gets absorbed into the core)
        const fade = Math.min(1, Math.max(0.1, dist / 250));
        const currentOpacity = p.opacity * fade;

        // Draw soft glowing particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 75%, ${currentOpacity})`;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 65%, ${currentOpacity * 0.8})`;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-[#020926]">
      {/* Deep Cyber Radial Gradient Backdrop */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at 16% 52%, rgba(10, 80, 220, 0.55) 0%, rgba(4, 30, 120, 0.4) 45%, rgba(2, 9, 36, 0.95) 85%),
            linear-gradient(135deg, #020924 0%, #031442 50%, #01061a 100%)
          `,
        }}
      />

      {/* Gentle Canvas Inward Flow Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 w-full h-full" />

      {/* Rotating Cyber HUD Portal on the Left (Gravitational Center) */}
      <div className="absolute left-[2%] sm:left-[6%] md:left-[9%] top-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] md:w-[540px] h-[340px] sm:h-[460px] md:h-[540px] -translate-x-1/4 sm:-translate-x-1/6 pointer-events-none z-10">
        
        {/* Soft breathing inward suction pulse */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/15 via-blue-600/20 to-indigo-600/10 blur-2xl animate-[pulse_6s_ease-in-out_infinite]" />

        {/* 3D Perspective Wrapper for the Portal */}
        <div 
          className="w-full h-full relative"
          style={{
            transform: 'perspective(1000px) rotateY(36deg) rotateX(8deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Layer 1: Outermost Ticked Gauge Ring (Slow, calm clockwise rotation) */}
          <div 
            className="absolute inset-0 flex items-center justify-center animate-[spin_80s_linear_infinite]"
          >
            <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="195" stroke="#00b4d8" strokeWidth="1" strokeOpacity="0.3" />
              <circle cx="200" cy="200" r="185" stroke="#0077b6" strokeWidth="1.2" strokeDasharray="3 8" strokeOpacity="0.45" />
              <circle cx="200" cy="200" r="172" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="16 14 4 14" strokeOpacity="0.5" />
            </svg>
          </div>

          {/* Layer 2: Segmented Tech Arc Ring (Calm counter-clockwise rotation) */}
          <div 
            className="absolute inset-[8%] flex items-center justify-center animate-[spin_50s_linear_infinite_reverse]"
          >
            <svg className="w-full h-full" viewBox="0 0 340 340" fill="none">
              <circle cx="170" cy="170" r="162" stroke="#00f0ff" strokeWidth="2.5" strokeDasharray="50 18 20 18 80 25" strokeOpacity="0.65" />
              <circle cx="170" cy="170" r="148" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="6 6" strokeOpacity="0.4" />
              <circle cx="170" cy="170" r="135" stroke="#60a5fa" strokeWidth="0.8" strokeDasharray="160 8 4 8" strokeOpacity="0.5" />
            </svg>
          </div>

          {/* Layer 3: Inner Inward-Converging Vortex Core */}
          <div 
            className="absolute inset-[20%] rounded-full border border-cyan-400/60 shadow-[0_0_20px_rgba(0,240,255,0.4),inset_0_0_25px_rgba(0,180,255,0.35)] flex items-center justify-center animate-[spin_30s_linear_infinite]"
            style={{
              background: 'radial-gradient(circle, rgba(0, 210, 255, 0.28) 0%, rgba(2, 50, 180, 0.22) 55%, rgba(1, 12, 50, 0.75) 100%)',
            }}
          >
            <svg className="w-full h-full p-4" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="90" stroke="#00f0ff" strokeWidth="1" strokeDasharray="30 8 8 8" strokeOpacity="0.6" />
            </svg>
          </div>

          {/* Layer 4: Soft tokens inside the vortex */}
          <div className="absolute inset-0 flex items-center justify-center opacity-50">
            {/* Dollar $ inside */}
            <div className="absolute left-[38%] top-[55%] flex items-center justify-center w-11 h-11 rounded-full border border-cyan-400/50 bg-cyan-950/40 shadow-[0_0_8px_rgba(0,240,255,0.3)] animate-[gentlePulseInward_6s_ease-in-out_infinite]">
              <span className="text-cyan-300/80 font-mono font-bold text-lg drop-shadow-[0_0_4px_#00f0ff]">$</span>
            </div>

            {/* Euro € inside */}
            <div className="absolute left-[47%] top-[30%] flex items-center justify-center w-9 h-9 rounded-full border border-sky-400/50 bg-blue-950/40 shadow-[0_0_8px_rgba(56,189,248,0.3)] animate-[gentlePulseInward_5s_ease-in-out_infinite_1s]">
              <span className="text-sky-300/80 font-mono font-bold text-base drop-shadow-[0_0_4px_#38bdf8]">€</span>
            </div>

            {/* Rupee ₹ inside */}
            <div className="absolute left-[60%] top-[42%] flex items-center justify-center w-10 h-10 rounded-full border border-cyan-300/50 bg-cyan-950/40 shadow-[0_0_8px_rgba(0,240,255,0.3)] animate-[gentlePulseInward_7s_ease-in-out_infinite_2s]">
              <span className="text-cyan-200/80 font-mono font-bold text-base drop-shadow-[0_0_4px_#00f0ff]">₹</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Currency Hologram Tokens: MỜ HƠN & HÚT VÔ VÒNG TRÒN, CHUYỂN ĐỘNG NHẸ */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        
        {/* Token 1: Pound £ */}
        <div 
          className="absolute left-[32%] top-[35%] w-13 h-13 sm:w-15 sm:h-15 rounded-full border border-cyan-400/40 bg-[#03236e]/25 backdrop-blur-xs flex items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.25)] opacity-50"
          style={{
            animation: 'suckInward 20s cubic-bezier(0.4, 0, 0.2, 1) infinite',
            ['--inward-y' as string]: '22px',
          }}
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-cyan-300/30 flex items-center justify-center">
            <span className="text-cyan-200/80 font-serif font-medium text-xl sm:text-2xl drop-shadow-[0_0_6px_rgba(0,240,255,0.4)]">£</span>
          </div>
        </div>

        {/* Token 2: Franc ₣ */}
        <div 
          className="absolute left-[44%] top-[36%] w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-cyan-300/45 bg-[#023396]/30 backdrop-blur-xs flex items-center justify-center shadow-[0_0_16px_rgba(0,240,255,0.3)] opacity-55"
          style={{
            animation: 'suckInward 24s cubic-bezier(0.4, 0, 0.2, 1) infinite 3s',
            ['--inward-y' as string]: '18px',
          }}
        >
          <div className="w-12 h-12 sm:w-15 sm:h-15 rounded-full border border-cyan-200/35 flex items-center justify-center">
            <span className="text-cyan-100/85 font-sans font-medium text-2xl sm:text-3xl drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]">₣</span>
          </div>
        </div>

        {/* Token 3: Dollar $ */}
        <div 
          className="absolute left-[56%] top-[34%] w-18 h-18 sm:w-22 sm:h-22 rounded-full border border-cyan-400/50 bg-[#043bb0]/30 backdrop-blur-xs flex items-center justify-center shadow-[0_0_18px_rgba(0,240,255,0.35)] opacity-65"
          style={{
            animation: 'suckInward 22s cubic-bezier(0.4, 0, 0.2, 1) infinite 7s',
            ['--inward-y' as string]: '26px',
          }}
        >
          <div className="w-14 h-14 sm:w-17 sm:h-17 rounded-full border border-cyan-200/40 flex items-center justify-center">
            <span className="text-cyan-100 font-mono font-bold text-3xl sm:text-4xl drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]">$</span>
          </div>
        </div>

        {/* Token 4: Yen ¥ */}
        <div 
          className="absolute left-[38%] top-[56%] w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-sky-400/40 bg-[#021f66]/25 flex items-center justify-center shadow-[0_0_10px_rgba(56,189,248,0.25)] opacity-45"
          style={{
            animation: 'suckInward 18s cubic-bezier(0.4, 0, 0.2, 1) infinite 2s',
            ['--inward-y' as string]: '-20px',
          }}
        >
          <span className="text-sky-200/80 font-mono font-medium text-lg sm:text-xl drop-shadow-[0_0_5px_rgba(56,189,248,0.4)]">¥</span>
        </div>

        {/* Token 5: Rupee ₹ */}
        <div 
          className="absolute left-[49%] top-[58%] w-15 h-15 sm:w-18 sm:h-18 rounded-full border border-cyan-400/45 bg-[#022b85]/25 flex items-center justify-center shadow-[0_0_14px_rgba(0,240,255,0.25)] opacity-50"
          style={{
            animation: 'suckInward 23s cubic-bezier(0.4, 0, 0.2, 1) infinite 5s',
            ['--inward-y' as string]: '-25px',
          }}
        >
          <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-cyan-300/30 flex items-center justify-center">
            <span className="text-cyan-200/80 font-mono font-medium text-xl sm:text-2xl drop-shadow-[0_0_6px_rgba(0,240,255,0.4)]">₹</span>
          </div>
        </div>

        {/* Token 6: Large Yen ¥ */}
        <div 
          className="absolute left-[68%] top-[50%] w-20 h-20 sm:w-26 sm:h-26 rounded-full border border-cyan-400/45 bg-[#053299]/25 backdrop-blur-xs flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.25)] opacity-50"
          style={{
            animation: 'suckInward 28s cubic-bezier(0.4, 0, 0.2, 1) infinite 9s',
            ['--inward-y' as string]: '-15px',
          }}
        >
          <div className="w-15 h-15 sm:w-20 sm:h-20 rounded-full border border-cyan-300/30 flex items-center justify-center">
            <span className="text-cyan-100/80 font-mono font-medium text-3xl sm:text-5xl drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]">¥</span>
          </div>
        </div>

        {/* Token 7: Franc ₣ */}
        <div 
          className="absolute left-[72%] top-[22%] w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-cyan-400/35 bg-[#021f66]/20 flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.2)] opacity-40"
          style={{
            animation: 'suckInward 25s cubic-bezier(0.4, 0, 0.2, 1) infinite 11s',
            ['--inward-y' as string]: '35px',
          }}
        >
          <span className="text-cyan-200/75 font-mono font-medium text-lg sm:text-xl drop-shadow-[0_0_5px_rgba(0,240,255,0.3)]">₣</span>
        </div>

        {/* Token 8: Ruble ₽ */}
        <div 
          className="absolute -right-4 sm:right-[3%] top-[20%] w-24 h-24 sm:w-34 sm:h-34 rounded-full border border-blue-400/30 bg-[#031d61]/15 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)] opacity-35"
          style={{
            animation: 'suckInward 32s cubic-bezier(0.4, 0, 0.2, 1) infinite 13s',
            ['--inward-y' as string]: '40px',
          }}
        >
          <div className="w-18 h-18 sm:w-26 sm:h-26 rounded-full border border-blue-300/20 flex items-center justify-center">
            <span className="text-blue-200/50 font-mono font-medium text-3xl sm:text-5xl">₽</span>
          </div>
        </div>

        {/* Token 9: Dollar $ */}
        <div 
          className="absolute left-[50%] top-[19%] w-12 h-12 rounded-full border border-cyan-400/45 bg-[#03236e]/30 backdrop-blur-xs flex items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.3)] opacity-60"
          style={{
            animation: 'suckInward 21s cubic-bezier(0.4, 0, 0.2, 1) infinite 6s',
            ['--inward-y' as string]: '30px',
          }}
        >
          <span className="text-cyan-200/90 font-mono font-bold text-lg drop-shadow-[0_0_6px_rgba(0,240,255,0.4)]">$</span>
        </div>
      </div>

      {/* Ambient Vignette & Smooth Fade at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#061238]/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-[#061238] pointer-events-none" />
    </div>
  );
};

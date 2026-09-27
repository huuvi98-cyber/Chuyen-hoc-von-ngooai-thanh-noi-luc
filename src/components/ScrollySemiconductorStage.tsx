import React, { useState } from 'react';
import { SEMICONDUCTOR_TIERS } from '../data/storyData';
import { SemiconductorTier } from '../types/story';
import { Cpu, Layers, Zap, AlertTriangle, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export const ScrollySemiconductorStage: React.FC = () => {
  const [activeTierId, setActiveTierId] = useState<string>('tier-1');
  const activeTier = SEMICONDUCTOR_TIERS.find(t => t.id === activeTierId) || SEMICONDUCTOR_TIERS[0];

  const getStatusBadge = (status: SemiconductorTier['statusInVietnam']) => {
    switch (status) {
      case 'Mạnh mẽ':
        return <span className="text-emerald-400 font-mono text-xs flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Vị thế hàng đầu</span>;
      case 'Đang bứt phá':
        return <span className="text-amber-400 font-mono text-xs flex items-center gap-1"><Sparkles className="w-3.5 h-3.5" /> Đang bứt phá nhanh</span>;
      case 'Thách thức cao':
        return <span className="text-rose-400 font-mono text-xs flex items-center gap-1"><AlertTriangle className="w-3.5 h-3.5" /> Rào cản vốn & hạ tầng</span>;
      default:
        return <span className="text-sky-400 font-mono text-xs">Tiềm năng</span>;
    }
  };

  return (
    <div className="my-14 rounded-2xl border border-stone-800 bg-[#0d0f14] p-4 sm:p-6 lg:p-8 shadow-2xl">
      {/* Kicker & Title */}
      <div className="border-b border-stone-800/80 pb-5">
        <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-1 flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5" />
          <span>Giải phẫu Chuỗi Giá Trị Bán Dẫn · Semiconductor Value Matrix</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-serif text-stone-100 font-normal">
          Bốn Nấc Thang Chuỗi Giá Trị & Định Vị Chiến Lược Của Việt Nam
        </h3>
        <p className="text-xs sm:text-sm text-stone-400 mt-1 font-sans">
          Bấm vào từng khâu trong chuỗi cung ứng vi mạch để xem tỷ suất lợi nhuận toàn cầu và cơ hội thăng hạng giá trị gia tăng của Việt Nam.
        </p>
      </div>

      {/* Value Chain Stepper / Interactive Timeline */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 my-6">
        {SEMICONDUCTOR_TIERS.map((tier) => {
          const isActive = tier.id === activeTierId;
          return (
            <button
              key={tier.id}
              onClick={() => setActiveTierId(tier.id)}
              className={`p-3 rounded-xl border text-left transition-all relative ${
                isActive
                  ? 'bg-amber-950/20 border-amber-500/80 shadow-lg shadow-amber-950/30'
                  : 'bg-stone-900/40 border-stone-800/80 hover:bg-stone-800/60 hover:border-stone-700'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                <span className={isActive ? 'text-amber-400 font-bold' : 'text-stone-500'}>
                  BƯỚC {tier.stepNumber}
                </span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                  isActive ? 'bg-amber-400 text-stone-950 font-semibold' : 'text-stone-400 bg-stone-800'
                }`}>
                  {tier.profitMargin}
                </span>
              </div>
              <div className={`text-xs sm:text-sm font-semibold truncate ${isActive ? 'text-white' : 'text-stone-300'}`}>
                {tier.name}
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Interactive Visual Split Screen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Graphic Simulation of the Silicon Stage */}
        <div className="lg:col-span-5 bg-[#090b0e] border border-stone-800/80 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Ambient Circuit SVG */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 300 300">
              <circle cx="150" cy="150" r="100" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 4" fill="none" />
              <circle cx="150" cy="150" r="60" stroke="#38bdf8" strokeWidth="1" fill="none" />
              <line x1="150" y1="50" x2="150" y2="250" stroke="#f59e0b" strokeWidth="0.5" />
              <line x1="50" y1="150" x2="250" y2="150" stroke="#f59e0b" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                Khâu số {activeTier.stepNumber} / 04
              </span>
              {getStatusBadge(activeTier.statusInVietnam)}
            </div>

            <div className="p-4 rounded-lg bg-stone-900/60 border border-stone-800 mb-4">
              <div className="text-[11px] font-mono text-stone-400 uppercase">Quy mô Thị trường Toàn cầu</div>
              <div className="text-2xl font-serif text-stone-100 font-medium mt-0.5">{activeTier.globalMarketValue}</div>
              
              <div className="mt-3 pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs">
                <span className="text-stone-400">Biên lợi nhuận ròng:</span>
                <span className="font-mono font-bold text-amber-400 text-sm">{activeTier.profitMargin}</span>
              </div>
            </div>
          </div>

          {/* Graphical Silicon Wafer Simulation representation */}
          <div className="relative z-10 my-4 flex items-center justify-center">
            <div className="w-36 h-36 rounded-full border-2 border-dashed border-amber-500/40 relative flex items-center justify-center p-2 bg-gradient-to-tr from-stone-900 to-stone-950 shadow-inner">
              <div className="w-24 h-24 rounded-full border border-sky-500/30 flex items-center justify-center bg-stone-900/80">
                <Cpu className="w-8 h-8 text-amber-400 animate-pulse" />
              </div>
              <div className="absolute top-1 right-2 text-[9px] font-mono text-amber-300 bg-stone-900 px-1 border border-stone-800 rounded">
                300mm
              </div>
            </div>
          </div>

          <div className="relative z-10 text-[11px] text-stone-500 font-mono text-center">
            Mục tiêu Quốc gia: 50.000 kỹ sư vi mạch đến năm 2030
          </div>
        </div>

        {/* Right: Analytical Narrative & Strategic Implications */}
        <div className="lg:col-span-7 bg-stone-900/40 border border-stone-800 rounded-xl p-5 sm:p-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">{activeTier.name}</div>
            <h4 className="text-xl sm:text-2xl font-serif text-stone-100 font-medium mt-1">
              {activeTier.vietnameseTitle}
            </h4>
            <p className="text-sm text-stone-300 leading-relaxed mt-3 font-sans">
              {activeTier.description}
            </p>
          </div>

          <div className="space-y-3 pt-3 border-t border-stone-800">
            {/* Vietnam presence */}
            <div className="bg-stone-900/80 p-3.5 rounded-lg border border-stone-800">
              <div className="text-xs font-mono text-sky-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>Thực trạng hiện diện tại Việt Nam</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-200">{activeTier.vietnamPresence}</p>
            </div>

            {/* Key Players */}
            <div>
              <div className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
                Các doanh nghiệp tiêu biểu
              </div>
              <div className="flex flex-wrap gap-2">
                {activeTier.keyPlayersInVietnam.map((player, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-stone-800 border border-stone-700 rounded text-xs text-amber-200/90 font-medium"
                  >
                    {player}
                  </span>
                ))}
              </div>
            </div>

            {/* Critical bottleneck */}
            <div className="bg-rose-950/20 border border-rose-900/40 p-3.5 rounded-lg">
              <div className="text-xs font-mono text-rose-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Nút thắt chiến lược cần tháo gỡ</span>
              </div>
              <p className="text-xs text-rose-200/90 leading-relaxed">{activeTier.keyChallenge}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

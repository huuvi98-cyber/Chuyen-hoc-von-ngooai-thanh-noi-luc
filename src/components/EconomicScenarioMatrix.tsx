import React, { useState } from 'react';
import { ECONOMIC_SCENARIOS } from '../data/storyData';
import { EconomicForecastScenario } from '../types/story';
import { Target, TrendingUp, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';

export const EconomicScenarioMatrix: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('scenario-breakthrough');
  const activeScenario = ECONOMIC_SCENARIOS.find(s => s.id === selectedScenarioId) || ECONOMIC_SCENARIOS[1];

  return (
    <div className="my-14 rounded-2xl border border-stone-800 bg-[#0d0f15] p-4 sm:p-6 lg:p-8 shadow-2xl">
      {/* Header */}
      <div className="border-b border-stone-800/80 pb-5">
        <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-1 flex items-center gap-1.5">
          <Target className="w-3.5 h-3.5" />
          <span>Mô Hình Dự Báo Chiến Lược 2030 - 2045 · Strategic Foresight</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-serif text-stone-100 font-normal">
          Ba Kịch Bản Tương Lai Của Nền Kinh Tế Việt Nam
        </h3>
        <p className="text-xs sm:text-sm text-stone-400 mt-1 font-sans">
          Lựa chọn từng kịch bản để phân tích tốc độ tăng trưởng GDP, thu nhập bình quân đầu người và các điều kiện tiền đề mang tính quyết định.
        </p>
      </div>

      {/* Scenario Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        {ECONOMIC_SCENARIOS.map((sc) => {
          const isSelected = sc.id === selectedScenarioId;
          return (
            <button
              key={sc.id}
              onClick={() => setSelectedScenarioId(sc.id)}
              className={`p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-950/20 border-amber-500/80 shadow-lg shadow-amber-950/30 ring-1 ring-amber-500/30'
                  : 'bg-stone-900/40 border-stone-800/80 hover:bg-stone-800/60 hover:border-stone-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={isSelected ? 'text-amber-400 font-bold' : 'text-stone-500'}>
                    KỊCH BẢN
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-stone-800 text-stone-300 font-semibold">
                    {sc.gdpGrowthRate}
                  </span>
                </div>
                <div className="text-base font-semibold text-stone-100 font-serif">
                  {sc.name}
                </div>
                <div className="text-xs text-stone-400 mt-1 line-clamp-2 font-sans">
                  {sc.tagline}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                <span className="text-stone-400 font-mono">GDP/người 2035:</span>
                <span className="font-mono font-bold text-amber-300">{sc.gdpPerCapita2035}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Scenario Deep-Dive Panel */}
      <div className="bg-[#090b0e] border border-stone-800 rounded-xl p-5 sm:p-7 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800/80 gap-3">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              {activeScenario.name}
            </span>
            <h4 className="text-2xl font-serif text-stone-100 font-medium mt-0.5">
              {activeScenario.tagline}
            </h4>
          </div>
          <div className="px-3.5 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded text-left sm:text-right">
            <div className="text-[10px] text-stone-400 font-mono uppercase">Tốc độ tăng trưởng mục tiêu</div>
            <div className="text-lg font-mono font-bold text-amber-300">{activeScenario.gdpGrowthRate}</div>
          </div>
        </div>

        {/* 4 Quantitative Target Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-3.5 rounded-lg bg-stone-900/60 border border-stone-800">
            <div className="text-[11px] font-mono text-stone-400">GDP BÌNH QUÂN (2035)</div>
            <div className="text-lg font-mono font-bold text-stone-100 mt-1">{activeScenario.gdpPerCapita2035}</div>
          </div>

          <div className="p-3.5 rounded-lg bg-stone-900/60 border border-stone-800">
            <div className="text-[11px] font-mono text-stone-400">TỶ TRỌNG CÔNG NGHỆ CAO</div>
            <div className="text-lg font-mono font-bold text-amber-400 mt-1">{activeScenario.highTechExportRatio}</div>
          </div>

          <div className="p-3.5 rounded-lg bg-stone-900/60 border border-stone-800">
            <div className="text-[11px] font-mono text-stone-400">TỶ LỆ NỘI ĐỊA HÓA</div>
            <div className="text-lg font-mono font-bold text-sky-400 mt-1">{activeScenario.localSupplyChainRatio}</div>
          </div>

          <div className="p-3.5 rounded-lg bg-stone-900/60 border border-stone-800">
            <div className="text-[11px] font-mono text-stone-400">VỊ THẾ QUỐC TẾ</div>
            <div className="text-sm font-semibold text-emerald-400 mt-1 truncate">
              {activeScenario.id === 'scenario-breakthrough' ? 'Ngưỡng Thu Nhập Cao' : 'Thu Nhập Trung Bình Cao'}
            </div>
          </div>
        </div>

        {/* Narrative Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {/* Primary condition */}
          <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800">
            <div className="text-xs font-mono text-stone-300 uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Điều kiện tiên quyết để hiện thực hóa</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              {activeScenario.primaryCondition}
            </p>
          </div>

          {/* Risk factors */}
          <div className="p-4 rounded-xl bg-rose-950/15 border border-rose-900/30">
            <div className="text-xs font-mono text-rose-300 uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>Yếu tố rủi ro & Nguy cơ cản trở</span>
            </div>
            <p className="text-xs sm:text-sm text-rose-200/90 leading-relaxed font-sans">
              {activeScenario.riskFactor}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

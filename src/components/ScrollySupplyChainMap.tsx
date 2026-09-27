import React, { useState } from 'react';
import { SUPPLY_CHAIN_NODES } from '../data/storyData';
import { SupplyChainNode } from '../types/story';
import { MapPin, Building2, DollarSign, Users, Award, ShieldCheck } from 'lucide-react';

export const ScrollySupplyChainMap: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<SupplyChainNode>(SUPPLY_CHAIN_NODES[0]);
  const [activeRegion, setActiveRegion] = useState<string>('Tất cả');

  const filteredNodes = activeRegion === 'Tất cả' 
    ? SUPPLY_CHAIN_NODES 
    : SUPPLY_CHAIN_NODES.filter(n => n.region === activeRegion);

  return (
    <div className="my-14 rounded-2xl border border-stone-800 bg-[#0f1117] p-4 sm:p-6 lg:p-8 overflow-hidden shadow-2xl">
      {/* Header of Interactive Infographic */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-800/80 pb-5 gap-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Bản đồ Dữ liệu Tương tác · Interactive Graphic</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif text-stone-100 font-normal">
            Bản đồ Phân bổ Dòng vốn FDI & Mắt xích Chuỗi Cung ứng Trọng điểm
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 mt-1 font-sans">
            Bấm chọn từng cụm công nghiệp để xem chi tiết vốn đầu tư, các tập đoàn đa quốc gia và lợi thế hạ tầng.
          </p>
        </div>

        {/* Region filter tabs */}
        <div className="flex items-center gap-1 p-1 bg-stone-900 border border-stone-800 rounded-lg text-xs self-start md:self-auto shrink-0">
          {['Tất cả', 'Bắc Bộ', 'Miền Trung', 'Nam Bộ'].map((reg) => (
            <button
              key={reg}
              onClick={() => setActiveRegion(reg)}
              className={`px-3 py-1.5 rounded transition-all whitespace-nowrap font-medium ${
                activeRegion === reg 
                  ? 'bg-amber-500 text-stone-950 shadow' 
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {reg}
            </button>
          ))}
        </div>
      </div>

      {/* Main interactive grid: Map on left/top, Node details on right */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Schematic Map Canvas (100% vector SVG) */}
        <div className="lg:col-span-6 bg-[#0a0c10] border border-stone-800 rounded-xl p-4 sm:p-6 relative min-h-[380px] sm:min-h-[440px] flex flex-col justify-between overflow-hidden">
          {/* Subtle vector background of maritime lines */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 400 500" fill="none">
              <path d="M 120 40 Q 240 160 180 280 T 140 460" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
              <path d="M 220 80 Q 290 200 240 320 T 190 480" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 6" />
            </svg>
          </div>

          <div className="text-[11px] font-mono text-stone-500 flex justify-between z-10">
            <span>HÀNH LANG CÔNG NGHỆ CAO VIỆT NAM</span>
            <span>TỌA ĐỘ VĨ MÔ</span>
          </div>

          {/* Interactive node buttons styled on map layout */}
          <div className="relative z-10 my-6 flex flex-col gap-2.5">
            {filteredNodes.map((node) => {
              const isSelected = selectedNode.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-500/70 text-amber-200 shadow-md shadow-amber-950/20'
                      : 'bg-stone-900/60 border-stone-800 text-stone-300 hover:bg-stone-800/80 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-3 h-3 rounded-full flex items-center justify-center ${
                      isSelected ? 'bg-amber-400 ring-4 ring-amber-400/20' : 'bg-stone-600 group-hover:bg-stone-400'
                    }`} />
                    <div>
                      <div className="text-sm font-semibold">{node.name}</div>
                      <div className="text-[11px] text-stone-400 font-mono">Vùng: {node.region}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs font-semibold text-amber-400">{node.totalFdi}</span>
                    <div className="text-[10px] text-stone-500">Tổng vốn FDI</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Map legend */}
          <div className="relative z-10 pt-3 border-t border-stone-800/60 flex flex-wrap items-center justify-between text-[11px] font-mono text-stone-400 gap-2">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Cụm Bán dẫn & Điện tử lõi
            </span>
            <span className="text-stone-500">Dữ liệu Bộ KH&ĐT & GSO 2026</span>
          </div>
        </div>

        {/* Right: Detailed Node Inspector Card */}
        <div className="lg:col-span-6 bg-stone-900/40 border border-stone-800 rounded-xl p-5 sm:p-6 space-y-5">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-mono text-amber-400 tracking-wider uppercase">{selectedNode.region}</span>
              <h4 className="text-2xl font-serif text-stone-100 font-medium mt-0.5">{selectedNode.name}</h4>
            </div>
            <div className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded text-right">
              <div className="text-[10px] text-stone-400 font-mono uppercase">Vốn FDI Lũy Kế</div>
              <div className="text-base font-mono font-bold text-amber-300">{selectedNode.totalFdi}</div>
            </div>
          </div>

          {/* Key Multi-nationals */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-stone-400 flex items-center gap-1.5 mb-2">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Các tập đoàn công nghệ & đối tác chiến lược</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedNode.majorCorporations.map((corp, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-stone-800/90 border border-stone-700/80 rounded text-xs font-medium text-stone-200"
                >
                  {corp}
                </span>
              ))}
            </div>
          </div>

          {/* Key Industries */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-stone-400 flex items-center gap-1.5 mb-2">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Ngành công nghiệp then chốt</span>
            </div>
            <ul className="space-y-1.5">
              {selectedNode.keyIndustries.map((ind, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-stone-300 flex items-start gap-2">
                  <span className="text-amber-400 mt-1">▸</span>
                  <span>{ind}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Workforce and Advantage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-stone-800">
            <div className="bg-stone-900/60 p-3 rounded border border-stone-800">
              <div className="text-[11px] font-mono text-stone-400 flex items-center gap-1 mb-1">
                <Users className="w-3 h-3 text-sky-400" />
                <span>Quy mô nhân lực</span>
              </div>
              <p className="text-xs text-stone-200 font-medium">{selectedNode.workforce}</p>
            </div>

            <div className="bg-stone-900/60 p-3 rounded border border-stone-800">
              <div className="text-[11px] font-mono text-stone-400 flex items-center gap-1 mb-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Lợi thế cốt lõi</span>
              </div>
              <p className="text-xs text-stone-200 font-medium">{selectedNode.strategicAdvantage}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

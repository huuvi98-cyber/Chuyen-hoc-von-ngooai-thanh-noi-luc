import React, { useState } from 'react';
import { Leaf, Sliders, DollarSign, ShieldAlert, Award, TrendingDown } from 'lucide-react';

export const GreenTransitionSimulator: React.FC = () => {
  // Simulator states
  const [renewableRate, setRenewableRate] = useState<number>(35); // 10% to 100%
  const [cbamTaxRate, setCbamTaxRate] = useState<number>(75); // $40 to $130 per ton CO2
  const [productionVolume, setProductionVolume] = useState<number>(100); // in thousand metric tons

  // Physics & Economics calculations
  // Baseline emission factor: 0.65 ton CO2 per ton product
  const baselineEmission = productionVolume * 0.65; // thousand tons CO2
  const greenReduction = baselineEmission * (renewableRate / 100);
  const taxedEmission = Math.max(0, baselineEmission - greenReduction); // in thousand tons CO2
  const totalTaxPayable = (taxedEmission * cbamTaxRate) / 1000; // in Million USD
  const taxSaved = ((baselineEmission * cbamTaxRate) / 1000) - totalTaxPayable; // in Million USD

  // Supply chain retention score (e.g. Apple/Nike RE100 requirements)
  const complianceScore = Math.min(100, Math.round((renewableRate / 80) * 100));

  return (
    <div className="my-14 rounded-2xl border border-stone-800 bg-[#0c0f14] p-4 sm:p-6 lg:p-8 shadow-2xl">
      {/* Header */}
      <div className="border-b border-stone-800/80 pb-5">
        <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1 flex items-center gap-1.5">
          <Leaf className="w-3.5 h-3.5" />
          <span>Mô Phỏng Kinh Tế Xanh & Thuế Carbon · CBAM Interactive Simulator</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-serif text-stone-100 font-normal">
          Thử Nghiệm Áp Lực Chi Phí: Thuế Carbon Châu Âu & Cơ Chế Năng Lượng Tái Tạo
        </h3>
        <p className="text-xs sm:text-sm text-stone-400 mt-1 font-sans">
          Điều chỉnh tỷ lệ sử dụng điện xanh và mức thuế carbon để thấy tác động trực tiếp lên chi phí xuất khẩu và khả năng giữ chân các tập đoàn toàn cầu.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6 items-start">
        {/* Sliders Input Panel */}
        <div className="lg:col-span-6 space-y-6 bg-stone-900/40 p-5 rounded-xl border border-stone-800">
          <div className="flex items-center justify-between text-xs font-mono text-stone-400 border-b border-stone-800 pb-2">
            <span className="flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              <span>BẢNG ĐIỀU KHIỂN THAM SỐ DOANH NGHIỆP</span>
            </span>
          </div>

          {/* Slider 1: Renewable Rate */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-stone-300 font-medium">Tỷ lệ Năng lượng Tái tạo (DPPA / Rooftop Solar)</span>
              <span className="font-mono text-emerald-400 font-bold text-sm">{renewableRate}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={renewableRate}
              onChange={(e) => setRenewableRate(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer h-2 bg-stone-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] font-mono text-stone-500">
              <span>10% (Chủ yếu nhiệt điện than)</span>
              <span>100% (RE100 Tiêu chuẩn Apple/Lego)</span>
            </div>
          </div>

          {/* Slider 2: CBAM Tax Price */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-stone-300 font-medium">Mức Thuế Carbon EU (CBAM) dự kiến</span>
              <span className="font-mono text-amber-400 font-bold text-sm">${cbamTaxRate} USD / tấn CO2</span>
            </div>
            <input
              type="range"
              min="40"
              max="130"
              step="5"
              value={cbamTaxRate}
              onChange={(e) => setCbamTaxRate(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] font-mono text-stone-500">
              <span>$40 (Mức sàn)</span>
              <span>$130 (Mức trần ETS Châu Âu)</span>
            </div>
          </div>

          {/* Slider 3: Production Volume */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-stone-300 font-medium">Quy mô sản lượng xuất khẩu sang EU / Mỹ</span>
              <span className="font-mono text-sky-400 font-bold text-sm">{productionVolume}.000 Tấn</span>
            </div>
            <input
              type="range"
              min="20"
              max="300"
              step="10"
              value={productionVolume}
              onChange={(e) => setProductionVolume(Number(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer h-2 bg-stone-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] font-mono text-stone-500">
              <span>20.000 Tấn (Quy mô vừa)</span>
              <span>300.000 Tấn (Đại công xưởng)</span>
            </div>
          </div>
        </div>

        {/* Dynamic Calculation Outputs */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Tax Saved */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40">
              <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5" />
                <span>Chi phí thuế tiết kiệm được</span>
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-300 mt-1">
                ${taxSaved.toFixed(2)}M <span className="text-xs font-normal text-emerald-400">USD</span>
              </div>
              <p className="text-[11px] text-stone-400 mt-1">
                Nhờ chuyển đổi {renewableRate}% năng lượng xanh sạch.
              </p>
            </div>

            {/* Tax Incurred */}
            <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
              <div className="text-[11px] font-mono text-stone-400 uppercase tracking-wider flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-rose-400" />
                <span>Thuế CBAM phải nộp thêm</span>
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-rose-300 mt-1">
                ${totalTaxPayable.toFixed(2)}M <span className="text-xs font-normal text-rose-400">USD</span>
              </div>
              <p className="text-[11px] text-stone-400 mt-1">
                Ứng với {taxedEmission.toFixed(1)}k tấn phát thải còn lại.
              </p>
            </div>
          </div>

          {/* Compliance Meter */}
          <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800">
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="text-stone-300">Khả năng đạt chuẩn RE100 của chuỗi cung ứng:</span>
              <span className={`font-bold ${
                complianceScore >= 80 ? 'text-emerald-400' : complianceScore >= 50 ? 'text-amber-400' : 'text-rose-400'
              }`}>
                {complianceScore}% - {complianceScore >= 80 ? 'Đạt chuẩn xuất sắc' : complianceScore >= 50 ? 'Rủi ro trung bình' : 'Nguy cơ bị hủy đơn hàng'}
              </span>
            </div>
            
            <div className="h-3 w-full bg-stone-800 rounded-full overflow-hidden p-0.5 border border-stone-700">
              <div 
                className={`h-full rounded-full transition-all duration-300 ${
                  complianceScore >= 80 ? 'bg-emerald-500' : complianceScore >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                }`}
                style={{ width: `${complianceScore}%` }}
              />
            </div>
            
            <p className="text-xs text-stone-400 mt-2.5 leading-relaxed font-sans">
              Từ năm 2026, cơ chế mua bán điện trực tiếp (DPPA) và cam kết xanh không còn là khẩu hiệu PR mà đã trở thành giấy thông hành sống còn để các doanh nghiệp Việt Nam giữ chân đơn hàng từ các tập đoàn toàn cầu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

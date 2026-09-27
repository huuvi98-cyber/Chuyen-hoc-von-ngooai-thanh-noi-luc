import React, { useState } from 'react';
import { DollarSign, ArrowRight, PieChart, CheckCircle, AlertCircle } from 'lucide-react';

export const InteractiveComparisonSlider: React.FC = () => {
  const [modelMode, setModelMode] = useState<'current' | 'target'>('current');

  const currentBreakdown = [
    { label: 'Linh kiện & nguyên phụ liệu nhập khẩu', percentage: 67, color: 'bg-rose-500/80', desc: 'Chip xử lý, màn hình, cảm biến nhập từ Hàn Quốc, Trung Quốc, Đài Loan' },
    { label: 'Lợi nhuận chuyển hồi hương của khối FDI', percentage: 14, color: 'bg-indigo-500/80', desc: 'Thặng dư vốn và cổ tức chuyển về tập đoàn mẹ' },
    { label: 'Chi phí nhân công gia công & vận hành cơ bản', percentage: 12, color: 'bg-amber-500/80', desc: 'Lương công nhân dây chuyền, đóng gói, bảo trì nhà xưởng' },
    { label: 'Doanh nghiệp nội địa Việt Nam thụ hưởng', percentage: 7, color: 'bg-emerald-500/90', desc: 'Bao bì, in ấn, khay nhựa định hình, vận tải nội địa (Tier-2/3)' },
  ];

  const targetBreakdown = [
    { label: 'Linh kiện công nghệ chuyên sâu nhập khẩu', percentage: 38, color: 'bg-rose-500/80', desc: 'Các linh kiện bán dẫn tối tân chưa sản xuất được trong nước' },
    { label: 'Doanh nghiệp cung ứng & phần mềm Việt Nam (Tier 1)', percentage: 26, color: 'bg-emerald-500/90', desc: 'Bản mạch in nhiều lớp, cơ khí chính xác CNC, vi mạch nhúng' },
    { label: 'Lợi nhuận chia sẻ & tái đầu tư R&D nội địa', percentage: 18, color: 'bg-indigo-500/80', desc: 'Giữ chân vốn tái đầu tư vào trung tâm đổi mới sáng tạo' },
    { label: 'Nhân sự kỹ thuật cao, R&D & Thiết kế vi mạch', percentage: 18, color: 'bg-amber-500/80', desc: 'Mức lương kỹ sư bậc cao, kỹ sư thiết kế EDA, bản quyền sáng chế' },
  ];

  const activeData = modelMode === 'current' ? currentBreakdown : targetBreakdown;
  const domesticValueAdd = modelMode === 'current' ? 19 : 44; // Labor + Domestic Suppliers

  return (
    <div className="my-14 rounded-2xl border border-stone-800 bg-[#0d0f15] p-4 sm:p-6 lg:p-8 shadow-2xl">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-stone-800/80 gap-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-1 flex items-center gap-1.5">
            <PieChart className="w-3.5 h-3.5" />
            <span>Mô Hình Phân Bổ Giá Trị Thặng Dư · Economic Value Breakdown</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif text-stone-100 font-normal">
            Giải Mã 100 USD Xuất Khẩu Điện Tử: Ai Là Người Thực Hưởng?
          </h3>
        </div>

        {/* Mode Switcher */}
        <div className="inline-flex p-1 bg-stone-900 border border-stone-800 rounded-lg text-xs font-medium self-start sm:self-auto">
          <button
            onClick={() => setModelMode('current')}
            className={`px-3 py-1.5 rounded transition-all ${
              modelMode === 'current'
                ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Hiện trạng 2026 (Gia công)
          </button>
          <button
            onClick={() => setModelMode('target')}
            className={`px-3 py-1.5 rounded transition-all ${
              modelMode === 'target'
                ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Mục tiêu 2035 (Tự chủ giá trị)
          </button>
        </div>
      </div>

      {/* Visual Stacked Bar Metric */}
      <div className="my-6">
        <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
          <span>TỶ LỆ PHÂN BỔ DOANH THU TRÊN 100 USD KIM NGẠCH</span>
          <span className="text-amber-400 font-semibold">
            Tổng giá trị giữ lại nội địa: <strong className="text-white text-sm">{domesticValueAdd}%</strong>
          </span>
        </div>

        {/* Stacked bar */}
        <div className="h-9 w-full bg-stone-900 rounded-lg overflow-hidden flex border border-stone-800 p-0.5">
          {activeData.map((item, idx) => (
            <div
              key={idx}
              style={{ width: `${item.percentage}%` }}
              className={`${item.color} h-full transition-all duration-500 flex items-center justify-center text-[11px] font-mono font-bold text-white shadow-xs`}
              title={`${item.label}: ${item.percentage}%`}
            >
              {item.percentage >= 10 ? `${item.percentage}%` : ''}
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Component Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {activeData.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-stone-900/40 border border-stone-800/80 flex items-start gap-3.5"
          >
            <div className={`w-3.5 h-3.5 rounded-sm mt-1 shrink-0 ${item.color}`} />
            <div>
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold text-stone-200">{item.label}</span>
                <span className="font-mono text-sm font-bold text-amber-300">{item.percentage} USD</span>
              </div>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed font-sans">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Analytical Callout */}
      <div className={`p-4 rounded-xl border flex items-start gap-3 transition-colors ${
        modelMode === 'current'
          ? 'bg-amber-950/20 border-amber-900/40 text-amber-200'
          : 'bg-emerald-950/20 border-emerald-900/40 text-emerald-200'
      }`}>
        {modelMode === 'current' ? (
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        ) : (
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        )}
        <div className="text-xs sm:text-sm leading-relaxed">
          {modelMode === 'current' ? (
            <span>
              <strong>Nhận định chuyên gia:</strong> Hiện nay, với mỗi 100 USD hàng điện tử xuất khẩu từ Việt Nam, có tới 67 USD phải chi để nhập khẩu linh kiện nguồn. Nếu không nhanh chóng phát triển doanh nghiệp hỗ trợ trong nước, Việt Nam sẽ chỉ giữ lại được phần tiền công thợ rẻ mạt thay vì tích lũy tư bản công nghệ.
            </span>
          ) : (
            <span>
              <strong>Mục tiêu chiến lược 2035:</strong> Nâng tỷ trọng nội địa hóa lên trên 44% thông qua chính sách phát triển 500 doanh nghiệp công nghiệp hỗ trợ cấp 1, thúc đẩy làm chủ thiết kế chip và các bản mạch điện tử chuyên dụng cho xe điện và năng lượng thông minh.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

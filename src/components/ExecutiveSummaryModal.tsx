import React, { useState } from 'react';
import { X, Copy, Check, FileText, CheckCircle2 } from 'lucide-react';
import { STORY_METADATA } from '../data/storyData';

interface ExecutiveSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveSummaryModal: React.FC<ExecutiveSummaryModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const summaryPoints = [
    {
      title: 'Làn sóng dịch chuyển FDI công nghệ cao thế hệ mới',
      content: 'Việt Nam đã vươn lên trở thành một trong những điểm đến hàng đầu của chiến lược "China+1" và Friend-shoring, thu hút hơn 36 tỷ USD FDI với sự hiện diện của Intel, Samsung, Foxconn, Amkor và Luxshare.',
    },
    {
      title: 'Thăng hạng trong chuỗi giá trị bán dẫn toàn cầu',
      content: 'Việt Nam đang làm chủ khâu Đóng gói & Kiểm thử (ATP/OSAT) quy mô lớn nhất thế giới, đồng thời hình thành hơn 50 doanh nghiệp thiết kế chip vi mạch (IC Design) với mục tiêu chiến lược đào tạo 50.000 kỹ sư vi mạch đến năm 2030.',
    },
    {
      title: 'Hóa giải nghịch lý "Xuất khẩu lớn - Thặng dư nội địa thấp"',
      content: 'Trong mỗi 100 USD kim ngạch điện tử, giá trị gia tăng giữ lại trong nước hiện mới chỉ đạt ~19 USD (chủ yếu là tiền lương gia công). Trọng tâm thập kỷ tới là phát triển 500 nhà cung ứng cấp 1 (Tier-1) bản địa để nâng tỷ lệ nội địa hóa lên trên 45%.',
    },
    {
      title: 'Năng lượng tái tạo & Cơ chế CBAM: Hộ chiếu thông hành',
      content: 'Các tập đoàn toàn cầu bắt buộc nhà cung ứng đạt chuẩn RE100. Việc triển khai cơ chế mua bán điện trực tiếp (DPPA) và chuyển dịch năng lượng là điều kiện sinh tử để tránh mức thuế carbon biên giới từ EU và Mỹ.',
    },
    {
      title: 'Mục tiêu 2035 - 2045: Vượt bẫy thu nhập trung bình',
      content: 'Nếu duy trì được tốc độ cải cách thể chế, bảo vệ sở hữu trí tuệ và nâng cấp hạ tầng số/xanh, Việt Nam có thể đạt mức tăng trưởng GDP 7-8%/năm, đưa thu nhập bình quân đầu người vượt 13.000 USD vào năm 2035.',
    },
  ];

  const handleCopy = async () => {
    const textToCopy = `BẢN TÓM TẮT ĐIỀU HÀNH (EXECUTIVE SUMMARY)
${STORY_METADATA.title} - ${STORY_METADATA.subhead}
Tác giả: ${STORY_METADATA.author}

${summaryPoints.map((p, i) => `${i + 1}. ${p.title}\n${p.content}`).join('\n\n')}

Nguồn: Vietnam Economic Review`;

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="bg-[#FFFDF7] border border-stone-300 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-[#FBF7EB]">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-700" />
            <span className="text-sm font-semibold text-blue-950 font-sans">
              Bản Tóm Tắt Điều Hành (Executive Summary)
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-stone-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="border-l-3 border-blue-600 pl-4 py-1">
            <h4 className="text-lg font-serif text-[#1e3a8a] font-bold">{STORY_METADATA.title}</h4>
            <p className="text-xs text-slate-500 mt-0.5">{STORY_METADATA.subhead}</p>
          </div>

          <div className="space-y-3 pt-2">
            {summaryPoints.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#F6EFE0]/60 border border-stone-200/90">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1e40af] font-sans mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{idx + 1}. {item.title}</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-sans pl-5.5">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 flex items-center justify-between bg-[#FBF7EB]">
          <span className="text-[11px] font-mono text-slate-500">Thời gian đọc: ~3 phút</span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3.5 py-2 bg-white hover:bg-stone-50 border border-stone-300 text-slate-700 text-xs font-medium rounded transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Đã sao chép' : 'Sao chép tóm tắt'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-2 bg-[#1e3a8a] hover:bg-blue-800 text-white text-xs font-semibold rounded transition-colors shadow-xs"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

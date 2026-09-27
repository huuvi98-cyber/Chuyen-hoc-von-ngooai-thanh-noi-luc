import React, { useState } from 'react';
import { ExpertPortrait } from './ExpertPortrait';

interface ExpertOpinion {
  id: string;
  name: string;
  titleAndOrg: string;
  topic: string;
  avatarUrl: string;
  avatarPosition: string;
  paragraphs: string[];
}

const EXPERT_DATA: ExpertOpinion[] = [
  {
    id: 'vu-minh-khuong',
    name: 'GS-TS Vũ Minh Khương',
    titleAndOrg: 'Trường Chính sách công Lý Quang Diệu, Đại học Quốc gia Singapore',
    topic: 'Xây năng lực hấp thụ công nghệ',
    avatarUrl: '/vu-minh-khuong.jpg',
    avatarPosition: 'object-center',
    paragraphs: [
      'Muốn nâng sức hấp thụ công nghệ, chính sách KH-CN và đổi mới sáng tạo cần chuyển từ hỗ trợ từng hoạt động R&D sang kiến tạo hệ sinh thái kết nối Nhà nước, đại học, viện nghiên cứu, doanh nghiệp, tập đoàn đa quốc gia, startup, vốn đầu tư, nhân tài và mạng lưới toàn cầu. Năng lực nghiên cứu đi cùng khả năng kết nối, tiếp nhận và hấp thụ tri thức, công nghệ. Trọng tâm là xây dựng hạ tầng dữ liệu, AI, tiêu chuẩn công nghệ, nền tảng kết nối nhân tài; thúc đẩy liên kết đại học - doanh nghiệp và thương mại hóa kết quả nghiên cứu, đồng thời tạo điều kiện để công nghệ lan tỏa tới doanh nghiệp nhỏ và vừa thay vì tập trung ở một số tập đoàn lớn.',
      'Thước đo cũng nên chuyển từ “chi bao nhiêu cho R&D” sang công nghệ tạo ra bao nhiêu năng lực và giá trị, thể hiện qua tỷ lệ thương mại hóa, mức độ hợp tác đại học - doanh nghiệp, năng lực đổi mới của doanh nghiệp và khả năng phổ cập công nghệ. Đích cuối cùng là biến tri thức, công nghệ thành năng suất, sức cạnh tranh và năng lực nội sinh của nền kinh tế.'
    ]
  },
  {
    id: 'vo-thi-lan-phuong',
    name: 'Bà Võ Thị Lan Phương',
    titleAndOrg: 'Giám đốc Điều hành Vriens & Partners Việt Nam',
    topic: 'Giảm chi phí tuân thủ',
    avatarUrl: '/vo-thi-lan-phuong.jpg',
    avatarPosition: 'object-[center_15%]',
    paragraphs: [
      'Trong cạnh tranh thu hút FDI chất lượng cao, ưu đãi chỉ là một yếu tố; khả năng dự báo chính sách và chi phí tuân thủ cũng tác động trực tiếp đến quyết định đầu tư. Vì vậy, nên rà soát các quy định về kiểm tra, báo cáo; loại bỏ yêu cầu trùng lặp, cung cấp lại dữ liệu Nhà nước đã có hoặc chấn chỉnh tình trạng nhiều cơ quan cùng kiểm tra một nội dung. Khi thay đổi chính sách cũng nên có lộ trình, thời gian chuyển tiếp hợp lý để doanh nghiệp chủ động kế hoạch đầu tư. Phương thức quản lý nên chuyển từ tiền kiểm sang hậu kiểm khi phù hợp, áp dụng quản lý theo mức độ rủi ro và chỉ đặt thêm nghĩa vụ khi lợi ích quản lý lớn hơn chi phí tuân thủ. Nhờ đó, nguồn lực doanh nghiệp đang dành cho thủ tục có thể chuyển sang đầu tư và đổi mới. Với công nghệ và mô hình kinh doanh mới, nên mở rộng cơ chế thử nghiệm có kiểm soát, quản lý theo kết quả thay vì buộc công nghệ mới vận hành theo khuôn khổ dành cho công nghệ cũ.'
    ]
  },
  {
    id: 'dinh-duc-quang',
    name: 'Ông Đinh Đức Quang',
    titleAndOrg: 'Giám đốc Khối Kinh doanh tiền tệ Ngân hàng UOB Việt Nam',
    topic: 'Tiếp vốn cho doanh nghiệp tham gia chuỗi FDI',
    avatarUrl: '/dinh-duc-quang.jpg',
    avatarPosition: 'object-[center_20%]',
    paragraphs: [
      'Khi Việt Nam hướng tới thu hút FDI công nghệ cao, giá trị gia tăng lớn, nguồn vốn cũng cần đi sâu hơn vào hệ sinh thái sản xuất. Vốn ngân hàng không chỉ phục vụ doanh nghiệp FDI mà cần hỗ trợ hạ tầng khu công nghiệp, logistics và doanh nghiệp Việt Nam tham gia chuỗi cung ứng. Với nhà đầu tư nước ngoài, ngân hàng đáp ứng nhu cầu vốn, thanh toán, quản trị dòng tiền, ngoại hối và phòng ngừa rủi ro. Trong khi đó, doanh nghiệp trong nước cần vốn đầu tư công nghệ, mở rộng sản xuất để đáp ứng tiêu chuẩn của các tập đoàn quốc tế. Khi nguồn lực tài chính đồng hành với cả hai khu vực, FDI sẽ có điều kiện tạo chuỗi cung ứng và tăng sức lan tỏa trong nền kinh tế.',
      'Ngân hàng nước ngoài đã tham gia kết nối doanh nghiệp Việt Nam với nguồn vốn quốc tế, qua đó vừa hỗ trợ hoạt động của doanh nghiệp FDI, vừa góp phần nâng năng lực của doanh nghiệp Việt Nam trong chuỗi cung ứng.'
    ]
  }
];

export const ExpertPerspectives: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeExpert = EXPERT_DATA[activeIndex];

  return (
    <section className="mt-8 mb-12">
      {/* 3 Interactive Tabs with Real Author Avatars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-4">
        {EXPERT_DATA.map((expert, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={expert.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                isActive
                  ? 'bg-gradient-to-r from-[#0c2870] to-[#081d52] border-sky-400 text-white shadow-lg shadow-sky-950/50 ring-1 ring-sky-400/40'
                  : 'bg-[#061742]/80 hover:bg-[#081e59]/90 border-sky-400/25 text-slate-300 hover:text-white'
              }`}
            >
              <ExpertPortrait
                src={expert.avatarUrl}
                alt={expert.name}
                size="sm"
                positionClass={expert.avatarPosition}
                className={isActive ? 'border-cyan-300 ring-2 ring-cyan-400/50' : 'opacity-80 border-sky-400/40'}
              />
              <div className="min-w-0 flex-1">
                <div className={`font-bold text-sm sm:text-base leading-snug truncate ${isActive ? 'text-white' : 'text-slate-200'}`}>
                  {expert.name}
                </div>
                <div className="text-xs text-sky-200/80 truncate mt-0.5">
                  {expert.titleAndOrg}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Clean Reading Card with High-Res Real Portrait */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-sky-400/40 bg-gradient-to-b from-[#0b2466]/95 to-[#071644]/98 p-6 sm:p-10 shadow-2xl backdrop-blur-md text-white">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400/20 via-cyan-300 to-sky-400/20" />

        {/* Header with Real Portrait */}
        <div className="mb-6 pb-5 border-b border-sky-400/25">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <ExpertPortrait
              src={activeExpert.avatarUrl}
              alt={activeExpert.name}
              size="lg"
              positionClass={activeExpert.avatarPosition}
            />

            <div className="min-w-0 flex-1">
              <div className="text-xs sm:text-sm text-sky-200 font-semibold mb-1">
                {activeExpert.name}, {activeExpert.titleAndOrg}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-cyan-300 font-bold tracking-tight">
                {activeExpert.topic}
              </h3>
            </div>
          </div>
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-4 text-white font-serif leading-[1.8] text-[17px] sm:text-[18px] font-normal">
          {activeExpert.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

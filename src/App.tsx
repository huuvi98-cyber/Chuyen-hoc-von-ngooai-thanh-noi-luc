import React, { useState } from 'react';
import { TopNavigation } from './components/TopNavigation';
import { HeroCover } from './components/HeroCover';
import { ChapterHeader } from './components/ChapterHeader';
import { PullQuote } from './components/PullQuote';
import { FdiInfographic } from './components/FdiInfographic';
import { ExecutiveSummaryModal } from './components/ExecutiveSummaryModal';
import { GlossaryModal } from './components/GlossaryModal';
import { CHAPTERS, STORY_METADATA } from './data/storyData';
import { 
  HelpCircle
} from 'lucide-react';

export default function App() {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [activeGlossaryTermId, setActiveGlossaryTermId] = useState<string | undefined>(undefined);

  const openGlossaryWithTerm = (termId: string) => {
    setActiveGlossaryTermId(termId);
    setIsGlossaryOpen(true);
  };

  const handleStartReading = () => {
    const ch1 = document.getElementById('chapter-1');
    if (ch1) {
      ch1.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#061238] text-white font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Fixed Progress Indicator */}
      <TopNavigation />

      {/* Hero Cover (Shorthand Title Section) */}
      <HeroCover />

      {/* Main Longform Reading Container */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 py-12">
        
        {/* ============================================================ */}
        {/* CHƯƠNG 01: Cơn địa chấn chuỗi cung ứng */}
        {/* ============================================================ */}
        <article className="space-y-8">
          <ChapterHeader chapter={CHAPTERS[0]} />

          <p className="editorial-drop-cap text-[17px] sm:text-[18px] md:text-[19px] leading-[1.85] font-serif text-slate-100 font-normal">
            Dòng vốn ngoại đang tăng tốc vào những lĩnh vực sản xuất có giá trị cao. Cuối tháng 7-2026, TP Hải Phòng cấp giấy chứng nhận đăng ký đầu tư dự án sản xuất chất nền, đế mạch đóng gói bán dẫn của LG Innotek Việt Nam với tổng vốn <span className="text-amber-200 font-medium">1 tỷ USD</span>. Samsung cũng có kế hoạch đầu tư khoảng <span className="text-amber-200 font-medium">1,5 tỷ USD</span> cho cơ sở kiểm thử chất bán dẫn tại Thái Nguyên. Cùng thời điểm, DHL Supply Chain khởi công khu logistics trị giá <span className="text-amber-200 font-medium">1.900 tỷ đồng</span> tại Hưng Yên.
          </p>

          <PullQuote 
            quote="Sức hút FDI hiện nay là kết quả của quá trình chuẩn bị nhiều năm, cùng lợi thế về thị trường, lao động và hội nhập quốc tế. Việt Nam đã hình thành hệ sinh thái FDI trong nhiều ngành như điện tử, máy tính, cơ khí, chế biến - chế tạo. Khi các tập đoàn lớn đã xây dựng cơ sở sản xuất, việc mở rộng công suất và kéo thêm nhà cung ứng vào Việt Nam thuận lợi hơn."
            author="PGS.TS Nguyễn Thường Lạng"
            role="Chuyên gia Kinh tế & Thương mại quốc tế"
            organization="Trường Đại học Kinh tế Quốc dân"
          />

          <p className="text-[17px] sm:text-[18px] md:text-[19px] leading-[1.85] font-serif text-slate-100 font-normal">
            Xu hướng này thể hiện rõ qua quy mô dòng vốn mới. Theo Cục Thống kê (Bộ Tài chính), tính đến ngày 31-8, tổng vốn đầu tư nước ngoài đăng ký đạt <span className="text-amber-200 font-medium">40,63 tỷ USD</span>, tăng <span className="text-amber-200 font-medium">55,4%</span> so với cùng kỳ. Trong đó, 2.771 dự án được cấp mới, tăng 9,4% so với cùng kỳ; tổng vốn đăng ký <span className="text-amber-200 font-medium">21,72 tỷ USD</span>, tăng tới <span className="text-amber-200 font-medium">96,8%</span>, cho thấy quy mô dự án mới tăng đáng kể. Công nghiệp chế biến, chế tạo dẫn đầu với <span className="text-amber-200 font-medium">12,15 tỷ USD</span> vốn đăng ký mới, chiếm 55,9%.
          </p>

          <p className="text-[17px] sm:text-[18px] md:text-[19px] leading-[1.85] font-serif text-slate-100 font-normal">
            Một điểm đáng chú ý khác là tốc độ tăng giữa vốn đăng ký và vốn thực hiện có khoảng cách khá lớn. Trong khi tổng vốn đăng ký tăng 55,4%, vốn thực hiện đạt <span className="text-amber-200 font-medium">17,25 tỷ USD</span>, tăng 12%. Qua đó phần nào phản ánh độ trễ từ quyết định đầu tư đến triển khai dự án, đồng thời đặt ra yêu cầu nâng khả năng hấp thụ dòng vốn, rút ngắn quá trình từ đăng ký đầu tư đến khi nhà máy, công nghệ và năng lực sản xuất mới thực sự đi vào nền kinh tế.
          </p>

          <p className="text-[17px] sm:text-[18px] md:text-[19px] leading-[1.85] font-serif text-slate-100 font-normal">
            Tại TPHCM, xu hướng tăng vốn cũng thể hiện rõ. 8 tháng đầu năm, thành phố thu hút hơn <span className="text-amber-200 font-medium">10,06 tỷ USD</span> vốn FDI, tăng <span className="text-amber-200 font-medium">167,3%</span> so với cùng kỳ. Trong đó, 1.364 dự án cấp mới với tổng vốn hơn <span className="text-amber-200 font-medium">3,73 tỷ USD</span> (riêng lĩnh vực KH-CN thu hút 467 dự án mới, vốn đăng ký hơn 599 triệu USD). TPHCM đang ưu tiên thu hút đầu tư vào công nghệ cao, bán dẫn, trí tuệ nhân tạo (AI), trung tâm dữ liệu, nghiên cứu và phát triển (R&D), logistics, tài chính quốc tế và kinh tế xanh. Quy mô vốn tăng nhanh cùng sự dịch chuyển vào sản xuất, công nghệ và những mắt xích mới của chuỗi cung ứng cho thấy Việt Nam đang đứng trước thời điểm thuận lợi để nâng chất dòng vốn ngoại.
          </p>

          {/* Animated Infographic matching info.jpg */}
          <FdiInfographic />
        </article>

        {/* ============================================================ */}
        {/* CHƯƠNG 02: Ván cờ Bán dẫn tỷ đô */}
        {/* ============================================================ */}
        <article className="space-y-8 pt-10">
          <ChapterHeader chapter={CHAPTERS[1]} />

          <p className="editorial-drop-cap text-[17px] sm:text-[18px] md:text-[19px] leading-[1.85] font-serif text-slate-100 font-normal">
            Khi dòng vốn hướng nhiều hơn vào bán dẫn, AI, trung tâm dữ liệu, R&D và sản xuất tiên tiến, tiêu chí lựa chọn địa điểm đầu tư cũng thay đổi. Bên cạnh đất đai và chi phí lao động, nhà đầu tư ngày càng đòi hỏi cao về khả năng cung ứng điện, logistics, hạ tầng số, môi trường chính sách, bảo hộ sở hữu trí tuệ và bảo mật công nghệ. Vì vậy, cạnh tranh FDI đang chuyển dần từ ưu đãi sang mức độ sẵn sàng của điểm đến. Theo TS Phan Hữu Thắng, nguyên Cục trưởng Cục Đầu tư nước ngoài (Bộ Kế hoạch và Đầu tư trước đây), muốn thu hút FDI chất lượng cao, Việt Nam nên tập trung phát triển hạ tầng công nghệ quốc gia, chuẩn bị nguồn nhân lực cho những ngành công nghệ mới và tận dụng nền sản xuất FDI hiện hữu để triển khai công nghệ mới, nâng năng suất.
          </p>

          <p className="text-[17px] sm:text-[18px] md:text-[19px] leading-[1.85] font-serif text-slate-100 font-normal">
            TPHCM là một trường hợp cho thấy yêu cầu chuẩn bị đồng bộ này khi dòng vốn đang tập trung mạnh. Không gian phát triển mới tạo khả năng bổ trợ giữa nền sản xuất và quỹ đất công nghiệp của khu vực Bình Dương trước đây, cụm cảng nước sâu Cái Mép - Thị Vải với lợi thế tài chính, dịch vụ, đổi mới sáng tạo và công nghệ cao của TPHCM.
          </p>

          <p className="text-[17px] sm:text-[18px] md:text-[19px] leading-[1.85] font-serif text-slate-100 font-normal">
            Theo ông Bùi Minh Trí, Trưởng Ban Quản lý Các khu chế xuất và công nghiệp TPHCM (HEPZA), những khu công nghiệp mới được định hướng theo mô hình “khu công nghiệp đô thị dịch vụ xanh”, dành quỹ đất thu hút các ngành công nghệ cao, bán dẫn và khởi nghiệp sáng tạo. Sự chuẩn bị còn đi vào hạ tầng chuyên biệt. Tại Khu Công nghệ cao TPHCM (SHTP), khoảng 52,92ha được dành cho Trung tâm Phát triển Công nghệ chiến lược, tập trung AI, trung tâm dữ liệu, vi mạch bán dẫn và R&D. Ông Nguyễn Kỳ Phùng, Trưởng Ban Quản lý SHTP, cho biết, trung tâm được thiết kế như một hệ sinh thái cho các tập đoàn và nhà phát triển công nghệ lõi, với trạm cấp điện độc lập khoảng 63MW và kết nối trực tiếp 15 tuyến cáp quang quốc tế.
          </p>
        </article>

        {/* ============================================================ */}
        {/* CHƯƠNG 03: Giá trị thặng dư thực chất */}
        {/* ============================================================ */}
        <article className="space-y-8 pt-10">
          <ChapterHeader chapter={CHAPTERS[2]} />

          <p className="editorial-drop-cap text-[17px] sm:text-[18px] md:text-[19px] leading-[1.85] font-serif text-slate-100 font-normal">
            Đến năm 2030, Việt Nam đặt mục tiêu có khoảng <span className="text-amber-200 font-medium">10.000 doanh nghiệp</span> trong nước tham gia chuỗi cung ứng của doanh nghiệp FDI, trong đó <span className="text-amber-200 font-medium">500-1.000 doanh nghiệp</span> trở thành nhà cung ứng cấp I; tỷ lệ nội địa hóa trong các ngành công nghiệp chủ lực đạt <span className="text-amber-200 font-medium">45%-50%</span>. Thách thức đặt ra là chuyển doanh nghiệp Việt từ vị thế nhà cung ứng tiềm năng thành nhà cung ứng thực sự. Theo bà Whitney Phạm, thành viên Ban điều hành Global Onchain Economic Alliance (GOEA), thu hút FDI cần gắn chặt hơn với khả năng hấp thụ của nền kinh tế trong nước. Muốn đi sâu vào chuỗi giá trị, doanh nghiệp Việt phải nâng chuẩn sản xuất, chất lượng nhân lực, năng lực quản trị, đổi mới sáng tạo và khả năng tiếp nhận công nghệ. Tham gia được chuỗi cung ứng mới là bước đầu; quan trọng hơn là từng bước làm chủ công nghệ và dịch chuyển lên những công đoạn có giá trị gia tăng cao hơn.
          </p>

          <p className="text-[17px] sm:text-[18px] md:text-[19px] leading-[1.85] font-serif text-slate-100 font-normal">
            Ở chiều ngược lại, chính sách thu hút FDI cũng cần tạo động lực để nhà đầu tư tăng liên kết với khu vực trong nước. Ông Phan Đức Hiếu, Ủy viên chuyên trách Ủy ban Kinh tế và Tài chính của Quốc hội, đề xuất, việc hỗ trợ nên gắn với kết quả thực hiện cam kết của nhà đầu tư về nội địa hóa, chuyển giao công nghệ, R&D, đào tạo nhân lực, liên kết với doanh nghiệp trong nước và chuyển đổi xanh. Qua đó, nguồn lực chính sách được tập trung vào những dự án thực sự tạo sức lan tỏa. Cùng với doanh nghiệp và cơ chế chính sách, nguồn nhân lực là điều kiện quyết định khả năng hấp thụ công nghệ. Đào tạo kỹ sư, đội ngũ R&D và nhân lực quản trị công nghệ phải đi cùng quá trình phát triển nhà cung ứng. Máy móc, quy trình có thể được chuyển giao, nhưng công nghệ chỉ trở thành năng lực của nền kinh tế khi doanh nghiệp và người lao động trong nước có thể tiếp nhận, vận hành, cải tiến và từng bước làm chủ.
          </p>

          <p className="text-[17px] sm:text-[18px] md:text-[19px] leading-[1.85] font-serif text-slate-100 font-normal">
            Nâng sức hấp thụ FDI vì vậy không dừng ở thu hút thêm dự án công nghệ cao, mà phải tạo được đường dẫn để vốn, công nghệ và thị trường chuyển hóa thành năng lực trong nước: Từ đơn hàng hình thành nhà cung ứng, từ chuyển giao công nghệ nâng năng lực sản xuất, từ đào tạo nhân lực tiến tới làm chủ công nghệ.
          </p>
        </article>

        {/* ============================================================ */}
        {/* BOX CHUYÊN ĐỀ: Tạo giá trị gia tăng cho sản xuất */}
        {/* ============================================================ */}
        <article className="my-14 pb-16">
          <div id="chapter-4" className="relative overflow-hidden rounded-2xl border border-sky-400/35 bg-gradient-to-b from-[#0b2466]/90 to-[#071644]/95 p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400/0 via-amber-300/80 to-sky-400/0" />
            
            <h2 className="text-2xl sm:text-3xl font-serif text-[#fef08a] font-medium tracking-tight mb-6">
              Tạo giá trị gia tăng cho sản xuất
            </h2>

            <div className="space-y-4 text-slate-100 font-serif leading-[1.8] text-[17px] sm:text-[18px] font-normal">
              <p className="text-sky-100 font-medium leading-relaxed">
                Thu hút được dòng vốn chất lượng cao mới là bước đầu. Giá trị lớn hơn nằm ở khả năng biến vốn, công nghệ, đơn hàng và mạng lưới sản xuất của khu vực FDI thành năng lực của nền kinh tế trong nước.
              </p>
              <p>
                Vai trò của khu vực FDI trong xuất khẩu ngày càng lớn nhưng năng lực tham gia của doanh nghiệp trong nước chưa theo kịp. Trong 8 tháng năm 2026, khu vực FDI xuất khẩu <span className="text-amber-200 font-medium">300,37 tỷ USD</span>, tăng <span className="text-amber-200 font-medium">26,9%</span> và chiếm <span className="text-amber-200 font-medium">80,1%</span> tổng kim ngạch xuất khẩu cả nước; khu vực kinh tế trong nước đạt <span className="text-amber-200 font-medium">74,47 tỷ USD</span>, tăng 7,4%, chiếm 19,9%. Tỷ lệ doanh nghiệp nội địa tham gia chuỗi giá trị toàn cầu đã giảm từ 35% năm 2009 xuống 18% năm 2023.
              </p>
              <p>
                Theo bà Bùi Thu Thủy, Phó Cục trưởng Cục Đầu tư nước ngoài (Bộ Tài chính), sức lan tỏa của khu vực FDI đối với kinh tế trong nước chưa đạt như kỳ vọng. Nhiều doanh nghiệp FDI khi vào Việt Nam mang theo hệ sinh thái nhà cung cấp quen thuộc. Trong khi đó, phần lớn doanh nghiệp Việt còn hạn chế về vốn, quản trị và công nghệ; số doanh nghiệp đủ chuẩn tham gia chuỗi cung ứng chưa nhiều. Chuyển giao công nghệ cũng còn chậm, chủ yếu diễn ra trong nội bộ tập đoàn, từ công ty mẹ sang công ty con.
              </p>
            </div>
          </div>
        </article>

      </main>

      {/* Executive Summary Modal */}
      <ExecutiveSummaryModal 
        isOpen={isSummaryOpen}
        onClose={() => setIsSummaryOpen(false)}
      />

      {/* Glossary Modal */}
      <GlossaryModal
        isOpen={isGlossaryOpen}
        initialTermId={activeGlossaryTermId}
        onClose={() => setIsGlossaryOpen(false)}
      />
    </div>
  );
}

import { X, Calendar, Tag, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/i18n/simple-i18n';

interface NewsDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  articleKey: string | null;
}

const articleDetails = {
  article1: {
    vi: {
      title: 'Nhà Máy 150MW Mới Đi Vào Vận Hành',
      date: '15/01/2026',
      category: 'Dự Án',
      readTime: '5 phút đọc',
      content: `
        <p class="mb-4">Hôm nay, chúng tôi vui mừng thông báo nhà máy thủy điện mới với công suất 150MW đã chính thức đi vào vận hành. Đây là cột mốc quan trọng trong chiến lược mở rộng năng lực sản xuất điện sạch của công ty.</p>
        
        <h3 class="text-xl font-bold text-[#0a1e3f] mt-6 mb-3">Công nghệ tiên tiến</h3>
        <p class="mb-4">Nhà máy được trang bị hệ thống tuabin Francis thế hệ mới nhất, đạt hiệu suất chuyển đổi lên đến 94%. Hệ thống giám sát tự động 24/7 đảm bảo vận hành an toàn và hiệu quả.</p>
        
        <h3 class="text-xl font-bold text-[#0a1e3f] mt-6 mb-3">Tác động môi trường tích cực</h3>
        <p class="mb-4">Với công suất 150MW, nhà máy dự kiến sản xuất khoảng 600 triệu kWh điện mỗi năm, tương đương với việc giảm phát thải khoảng 500,000 tấn CO2. Đây là minh chứng cho cam kết bền vững của chúng tôi.</p>
        
        <h3 class="text-xl font-bold text-[#0a1e3f] mt-6 mb-3">Tạo việc làm và phát triển cộng đồng</h3>
        <p class="mb-4">Dự án đã tạo ra hơn 200 việc làm trực tiếp và gián tiếp cho người dân địa phương. Chúng tôi cũng đầu tư 5 tỷ đồng vào các chương trình phát triển cộng đồng xung quanh khu vực nhà máy.</p>
        
        <blockquote class="border-l-4 border-cyan-500 pl-4 my-6 italic text-gray-700">
          "Đây là minh chứng cho cam kết của chúng tôi trong việc cung cấp năng lượng sạch và bền vững cho Việt Nam."
        </blockquote>
        
        <p class="mb-4">Nhà máy mới sẽ góp phần đáp ứng nhu cầu điện ngày càng tăng của khu vực miền Trung, đồng thời hỗ trợ mục tiêu phát triển năng lượng tái tạo của quốc gia.</p>
      `,
    },
    en: {
      title: 'New 150MW Plant Commissioned',
      date: 'Jan 15, 2026',
      category: 'Projects',
      readTime: '5 min read',
      content: `
        <p class="mb-4">Today, we are proud to announce that our new 150MW hydropower plant has officially commenced operations. This marks a significant milestone in our strategy to expand clean energy production capacity.</p>
        
        <h3 class="text-xl font-bold text-[#0a1e3f] mt-6 mb-3">Advanced Technology</h3>
        <p class="mb-4">The plant is equipped with the latest generation Francis turbines, achieving conversion efficiency of up to 94%. The 24/7 automated monitoring system ensures safe and efficient operations.</p>
        
        <h3 class="text-xl font-bold text-[#0a1e3f] mt-6 mb-3">Positive Environmental Impact</h3>
        <p class="mb-4">With a capacity of 150MW, the plant is expected to generate approximately 600 million kWh of electricity annually, equivalent to reducing CO2 emissions by about 500,000 tons. This demonstrates our commitment to sustainability.</p>
        
        <h3 class="text-xl font-bold text-[#0a1e3f] mt-6 mb-3">Job Creation and Community Development</h3>
        <p class="mb-4">The project has created over 200 direct and indirect jobs for local residents. We have also invested 5 billion VND in community development programs around the plant area.</p>
        
        <blockquote class="border-l-4 border-cyan-500 pl-4 my-6 italic text-gray-700">
          "This demonstrates our commitment to providing clean and sustainable energy for Vietnam."
        </blockquote>
        
        <p class="mb-4">The new plant will help meet the increasing electricity demand of the Central region while supporting the country's renewable energy development goals.</p>
      `,
    },
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=600&fit=crop',
  },
  article2: {
    vi: {
      title: 'Giải Thưởng Xuất Sắc Môi Trường 2025',
      date: '20/12/2025',
      category: 'Giải Thưởng',
      readTime: '3 phút đọc',
      content: `
        <p class="mb-4">Chúng tôi vinh dự nhận được Giải thưởng Xuất sắc Môi trường 2025 do Bộ Tài nguyên và Môi trường trao tặng. Đây là sự ghi nhận cho những nỗ lực bền bỉ trong việc bảo vệ môi trường.</p>
        
        <h3 class="text-xl font-bold text-[#0a1e3f] mt-6 mb-3">Thành tựu nổi bật</h3>
        <p class="mb-4">Giải thưởng được trao dựa trên các tiêu chí: quản lý môi trường xuất sắc, giảm thiểu tác động sinh thái, và các chương trình phát triển bền vững. Chúng tôi đã đạt điểm cao nhất trong tất cả các hạng mục.</p>
        
        <h3 class="text-xl font-bold text-[#0a1e3f] mt-6 mb-3">Các sáng kiến xanh</h3>
        <p class="mb-4">Trong năm 2025, chúng tôi đã triển khai nhiều sáng kiến bảo vệ môi trường: hệ thống lọc nước thải công nghệ cao, chương trình trồng rừng phục hồi sinh thái, và dự án bảo tồn đa dạng sinh học thủy sinh.</p>
        
        <blockquote class="border-l-4 border-amber-500 pl-4 my-6 italic text-gray-700">
          "Giải thưởng này thuộc về toàn thể đội ngũ nhân viên và cộng đồng địa phương."
        </blockquote>
        
        <p class="mb-4">Chúng tôi cam kết tiếp tục đầu tư vào các giải pháp xanh và chia sẻ kinh nghiệm với ngành năng lượng Việt Nam.</p>
      `,
    },
    en: {
      title: 'Environmental Excellence Award 2025',
      date: 'Dec 20, 2025',
      category: 'Awards',
      readTime: '3 min read',
      content: `
        <p class="mb-4">We are honored to receive the 2025 Environmental Excellence Award presented by the Ministry of Natural Resources and Environment. This recognizes our persistent efforts in environmental protection.</p>
        
        <h3 class="text-xl font-bold text-[#0a1e3f] mt-6 mb-3">Outstanding Achievements</h3>
        <p class="mb-4">The award was given based on criteria including: excellent environmental management, minimized ecological impact, and sustainable development programs. We achieved the highest scores in all categories.</p>
        
        <h3 class="text-xl font-bold text-[#0a1e3f] mt-6 mb-3">Green Initiatives</h3>
        <p class="mb-4">In 2025, we implemented numerous environmental protection initiatives: high-tech wastewater treatment systems, ecological restoration reforestation programs, and aquatic biodiversity conservation projects.</p>
        
        <blockquote class="border-l-4 border-amber-500 pl-4 my-6 italic text-gray-700">
          "This award belongs to all our employees and the local community."
        </blockquote>
        
        <p class="mb-4">We are committed to continuing investment in green solutions and sharing our experience with Vietnam's energy sector.</p>
      `,
    },
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=600&fit=crop',
  },
  article3: {
    vi: {
      title: 'Mở Rộng Công Suất Năng Lượng Tái Tạo',
      date: '10/11/2025',
      category: 'Tin Tức',
      readTime: '4 phút đọc',
      content: `
        <p class="mb-4">Công ty công bố kế hoạch đầu tư mở rộng công suất năng lượng tái tạo thêm 500MW trong giai đoạn 2026-2028. Đây là bước tiến quan trọng trong chiến lược phát triển bền vững.</p>
        
        <h3 class="text-xl font-bold text-[#0a1e3f] mt-6 mb-3">Các dự án trọng điểm</h3>
        <p class="mb-4">Kế hoạch bao gồm xây dựng 3 nhà máy thủy điện mới và nâng cấp 5 nhà máy hiện có. Tổng vốn đầu tư dự kiến lên đến 15,000 tỷ đồng.</p>
        
        <h3 class="text-xl font-bold text-[#0a1e3f] mt-6 mb-3">Hợp tác quốc tế</h3>
        <p class="mb-4">Chúng tôi đã ký kết hợp tác với các đối tác châu Âu và Nhật Bản để chuyển giao công nghệ tiên tiến nhất trong lĩnh vực thủy điện.</p>
        
        <h3 class="text-xl font-bold text-[#0a1e3f] mt-6 mb-3">Lộ trình thực hiện</h3>
        <ul class="list-disc list-inside mb-4 text-gray-600">
          <li>2026: Khởi công nhà máy thủy điện Sông Xanh (200MW)</li>
          <li>2027: Vận hành nhà máy và khởi công dự án mới</li>
          <li>2028: Hoàn thành toàn bộ lộ trình mở rộng</li>
        </ul>
        
        <blockquote class="border-l-4 border-green-500 pl-4 my-6 italic text-gray-700">
          "Chúng tôi tin tưởng vào tương lai năng lượng sạch của Việt Nam."
        </blockquote>
        
        <p class="mb-4">Kế hoạch này sẽ giúp chúng tôi đóng góp tích cực vào mục tiêu giảm phát thải ròng bằng 0 của quốc gia.</p>
      `,
    },
    en: {
      title: 'Expanding Renewable Capacity',
      date: 'Nov 10, 2025',
      category: 'News',
      readTime: '4 min read',
      content: `
        <p class="mb-4">The company announces plans to invest in expanding renewable energy capacity by an additional 500MW during 2026-2028. This is a significant step in our sustainable development strategy.</p>
        
        <h3 class="text-xl font-bold text-[#0a1e3f] mt-6 mb-3">Key Projects</h3>
        <p class="mb-4">The plan includes constructing 3 new hydropower plants and upgrading 5 existing facilities. Total estimated investment is 15,000 billion VND.</p>
        
        <h3 class="text-xl font-bold text-[#0a1e3f] mt-6 mb-3">International Cooperation</h3>
        <p class="mb-4">We have signed partnerships with European and Japanese partners to transfer the most advanced hydroelectric technology.</p>
        
        <h3 class="text-xl font-bold text-[#0a1e3f] mt-6 mb-3">Implementation Roadmap</h3>
        <ul class="list-disc list-inside mb-4 text-gray-600">
          <li>2026: Begin Sông Xanh hydropower plant construction (200MW)</li>
          <li>2027: Plant operations and new project groundbreaking</li>
          <li>2028: Complete entire expansion roadmap</li>
        </ul>
        
        <blockquote class="border-l-4 border-green-500 pl-4 my-6 italic text-gray-700">
          "We believe in Vietnam's clean energy future."
        </blockquote>
        
        <p class="mb-4">This plan will help us contribute positively to the country's net-zero emission target.</p>
      `,
    },
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop',
  },
};

const categoryColors: Record<string, string> = {
  'Projects': 'bg-blue-100 text-blue-700',
  'Dự Án': 'bg-blue-100 text-blue-700',
  'Awards': 'bg-amber-100 text-amber-700',
  'Giải Thưởng': 'bg-amber-100 text-amber-700',
  'News': 'bg-green-100 text-green-700',
  'Tin Tức': 'bg-green-100 text-green-700',
};

export function NewsDetailModal({ isOpen, onClose, articleKey }: NewsDetailModalProps) {
  const { currentLanguage } = useTranslation();

  if (!isOpen || !articleKey) return null;

  const article = articleDetails[articleKey as keyof typeof articleDetails];
  const content = article[currentLanguage as keyof typeof article] as typeof article.vi;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Header Image */}
        <div className="relative h-48 sm:h-64">
          <img
            src={article.image}
            alt={content.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge className={categoryColors[content.category]}>
              <Tag className="w-3 h-3 mr-1" />
              {content.category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {content.date}
            </div>
            <span>•</span>
            <span>{content.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0a1e3f] mb-6">
            {content.title}
          </h1>

          {/* Article Content */}
          <div 
            className="prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />

          {/* Actions */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={onClose}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {currentLanguage === 'vi' ? 'Quay lại' : 'Back'}
            </Button>
            
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

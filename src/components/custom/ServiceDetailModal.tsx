import { useState } from 'react';
import { X, Zap, Settings, Leaf, Check, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/i18n/simple-i18n';

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceKey: string | null;
  onContactClick: () => void;
}

const serviceDetails = {
  powerGeneration: {
    icon: Zap,
    color: 'from-blue-500 to-blue-600',
    vi: {
      title: 'Sản Xuất Điện',
      subtitle: 'Giải pháp phát điện sạch, hiệu quả',
      description: 'Chúng tôi cung cấp dịch vụ sản xuất điện từ nguồn năng lượng thủy điện với công nghệ tiên tiến nhất, đảm bảo hiệu suất cao và tác động môi trường thấp.',
      features: [
        { title: 'Thiết kế tối ưu', desc: 'Tính toán chính xác công suất và hiệu suất' },
        { title: 'Vận hành 24/7', desc: 'Giám sát liên tục, đảm bảo ổn định' },
        { title: 'Bảo trì định kỳ', desc: 'Kế hoạch bảo trì chuyên nghiệp' },
        { title: 'Báo cáo minh bạch', desc: 'Số liệu sản lượng chi tiết' },
      ],
      technologies: [
        'Tuabin Francis hiệu suất cao',
        'Hệ thống điều khiển tự động SCADA',
        'Giám sát rung động real-time',
        'Tối ưu hóa phát điện theo mùa',
      ],
      benefits: [
        'Giảm 40% chi phí năng lượng',
        'Nguồn cung ổn định, đáng tin cậy',
        'Chứng chỉ năng lượng xanh',
        'Hỗ trợ tuân thủ ESG',
      ],
      faqs: [
        { q: 'Công suất tối thiểu là bao nhiêu?', a: 'Chúng tôi hỗ trợ các dự án từ 1MW trở lên.' },
        { q: 'Thời gian triển khai?', a: 'Thông thường 12-24 tháng tùy quy mô.' },
        { q: 'Có hỗ trợ tài chính không?', a: 'Chúng tôi liên kết với các định chế tài chính để hỗ trợ vay vốn.' },
      ],
    },
    en: {
      title: 'Power Generation',
      subtitle: 'Clean, efficient power solutions',
      description: 'We provide electricity generation services from hydroelectric sources with the most advanced technology, ensuring high efficiency and low environmental impact.',
      features: [
        { title: 'Optimal Design', desc: 'Precise capacity and efficiency calculations' },
        { title: '24/7 Operations', desc: 'Continuous monitoring, guaranteed stability' },
        { title: 'Scheduled Maintenance', desc: 'Professional maintenance planning' },
        { title: 'Transparent Reporting', desc: 'Detailed output metrics' },
      ],
      technologies: [
        'High-efficiency Francis turbines',
        'SCADA automated control systems',
        'Real-time vibration monitoring',
        'Seasonal power generation optimization',
      ],
      benefits: [
        'Reduce energy costs by 40%',
        'Stable, reliable supply',
        'Green energy certification',
        'ESG compliance support',
      ],
      faqs: [
        { q: 'What is the minimum capacity?', a: 'We support projects from 1MW and above.' },
        { q: 'Implementation timeline?', a: 'Typically 12-24 months depending on scale.' },
        { q: 'Financial support available?', a: 'We partner with financial institutions for funding support.' },
      ],
    },
  },
  plantOperations: {
    icon: Settings,
    color: 'from-cyan-500 to-cyan-600',
    vi: {
      title: 'Vận Hành Nhà Máy',
      subtitle: 'Quản lý vận hành chuyên nghiệp',
      description: 'Dịch vụ vận hành và bảo trì toàn diện cho các nhà máy thủy điện, đảm bảo hiệu suất tối đa và tuổi thọ thiết bị.',
      features: [
        { title: 'Giám sát real-time', desc: 'Hệ thống SCADA hiện đại' },
        { title: 'Bảo trì dự đoán', desc: 'AI phân tích, phòng ngừa sự cố' },
        { title: 'Đội ngũ chuyên gia', desc: 'Kỹ sư giàu kinh nghiệm' },
        { title: 'An toàn lao động', desc: 'Tuân thủ nghiêm ngặt tiêu chuẩn' },
      ],
      technologies: [
        'Hệ thống SCADA tích hợp',
        'Cảm biến IoT thông minh',
        'Phân tích dữ liệu lớn',
        'Digital twin mô phỏng',
      ],
      benefits: [
        'Tăng 15% hiệu suất vận hành',
        'Giảm 30% thời gian dừng máy',
        'Kéo dài tuổi thọ thiết bị',
        'Tiết kiệm chi phí bảo trì',
      ],
      faqs: [
        { q: 'Có hỗ trợ khẩn cấp không?', a: 'Đội ngũ 24/7 sẵn sàng xử lý sự cố.' },
        { q: 'Báo cáo tần suất thế nào?', a: 'Báo cáo hàng ngày, tổng kết hàng tháng.' },
        { q: 'Có đào tạo nhân sự không?', a: 'Có, chúng tôi cung cấp đào tạo chuyên sâu.' },
      ],
    },
    en: {
      title: 'Plant Operations',
      subtitle: 'Professional operations management',
      description: 'Comprehensive operation and maintenance services for hydropower plants, ensuring maximum efficiency and equipment longevity.',
      features: [
        { title: 'Real-time Monitoring', desc: 'Modern SCADA systems' },
        { title: 'Predictive Maintenance', desc: 'AI analysis, incident prevention' },
        { title: 'Expert Team', desc: 'Experienced engineers' },
        { title: 'Work Safety', desc: 'Strict compliance with standards' },
      ],
      technologies: [
        'Integrated SCADA systems',
        'Smart IoT sensors',
        'Big data analytics',
        'Digital twin simulation',
      ],
      benefits: [
        'Increase operational efficiency by 15%',
        'Reduce downtime by 30%',
        'Extend equipment lifespan',
        'Save maintenance costs',
      ],
      faqs: [
        { q: 'Emergency support available?', a: '24/7 team ready to handle incidents.' },
        { q: 'Reporting frequency?', a: 'Daily reports, monthly summaries.' },
        { q: 'Staff training provided?', a: 'Yes, we provide in-depth training.' },
      ],
    },
  },
  environmental: {
    icon: Leaf,
    color: 'from-green-500 to-green-600',
    vi: {
      title: 'Quản Lý Môi Trường',
      subtitle: 'Phát triển bền vững song hành',
      description: 'Các giải pháp quản lý môi trường toàn diện, đảm bảo các dự án thủy điện tuân thủ nghiêm ngặt các tiêu chuẩn môi trường quốc tế.',
      features: [
        { title: 'Đánh giá tác động', desc: 'EIA chi tiết, đầy đủ' },
        { title: 'Giám sát sinh thái', desc: 'Theo dõi đa dạng sinh học' },
        { title: 'Xử lý nước thải', desc: 'Công nghệ tiên tiến' },
        { title: 'Phục hồi rừng', desc: 'Chương trình trồng cây xanh' },
      ],
      technologies: [
        'Hệ thống lọc sinh học',
        'Cầu cá thân thiện',
        'Giám sát chất lượng nước tự động',
        'AI phân tích dữ liệu sinh thái',
      ],
      benefits: [
        'Đạt chứng nhận ISO 14001',
        'Giảm thiểu tác động sinh thái',
        'Nâng cao hình ảnh doanh nghiệp',
        'Tuân thủ quy định pháp luật',
      ],
      faqs: [
        { q: 'Có cam kết bảo vệ rừng không?', a: 'Có, chúng tôi cam kết tái định cây gấp 3 diện tích ảnh hưởng.' },
        { q: 'Giám sát đa dạng sinh học?', a: 'Theo dõi định kỳ hàng quý với báo cáo chi tiết.' },
        { q: 'Có hỗ trợ cộng đồng không?', a: 'Có các chương trình phát triển cộng đồng đi kèm.' },
      ],
    },
    en: {
      title: 'Environmental Management',
      subtitle: 'Sustainable development together',
      description: 'Comprehensive environmental management solutions ensuring hydroelectric projects strictly comply with international environmental standards.',
      features: [
        { title: 'Impact Assessment', desc: 'Detailed, comprehensive EIA' },
        { title: 'Ecological Monitoring', desc: 'Biodiversity tracking' },
        { title: 'Wastewater Treatment', desc: 'Advanced technology' },
        { title: 'Forest Restoration', desc: 'Tree planting programs' },
      ],
      technologies: [
        'Biological filtration systems',
        'Fish-friendly passages',
        'Automated water quality monitoring',
        'AI ecological data analysis',
      ],
      benefits: [
        'ISO 14001 certification',
        'Minimized ecological impact',
        'Enhanced corporate image',
        'Regulatory compliance',
      ],
      faqs: [
        { q: 'Forest protection commitment?', a: 'Yes, we commit to replanting 3x the affected area.' },
        { q: 'Biodiversity monitoring?', a: 'Quarterly tracking with detailed reports.' },
        { q: 'Community support provided?', a: 'Community development programs included.' },
      ],
    },
  },
};

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900">{question}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}

export function ServiceDetailModal({ isOpen, onClose, serviceKey, onContactClick }: ServiceDetailModalProps) {
  const { currentLanguage } = useTranslation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!isOpen || !serviceKey) return null;

  const service = serviceDetails[serviceKey as keyof typeof serviceDetails];
  const content = service[currentLanguage as keyof typeof service] as typeof service.vi;
  const Icon = service.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className={`sticky top-0 bg-gradient-to-r ${service.color} text-white p-6 rounded-t-2xl`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{content.title}</h2>
              <p className="text-white/80">{content.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Description */}
          <p className="text-gray-600 mb-8 leading-relaxed">{content.description}</p>

          {/* Features Grid */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-[#0a1e3f] mb-4">
              {currentLanguage === 'vi' ? 'Tính năng chính' : 'Key Features'}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {content.features.map((feature, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-[#0a1e3f] mb-4">
              {currentLanguage === 'vi' ? 'Công nghệ sử dụng' : 'Technologies'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {content.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-8 p-4 bg-blue-50 rounded-xl">
            <h3 className="text-lg font-bold text-[#0a1e3f] mb-4">
              {currentLanguage === 'vi' ? 'Lợi ích' : 'Benefits'}
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {content.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQs */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-[#0a1e3f] mb-4">
              {currentLanguage === 'vi' ? 'Câu hỏi thường gặp' : 'FAQs'}
            </h3>
            <div className="space-y-2">
              {content.faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFaqIndex === index}
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <Button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className={`w-full bg-gradient-to-r ${service.color} text-white group`}
          >
            {currentLanguage === 'vi' ? 'Tư vấn dịch vụ' : 'Consult for Service'}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}

import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Zap, Settings, Leaf, Check, ArrowRight, ChevronDown, ChevronUp, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/i18n/simple-i18n';

const serviceDetails = {
  powerGeneration: {
    icon: Zap,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    vi: {
      title: 'Sản Xuất Điện',
      subtitle: 'Giải pháp phát điện sạch, hiệu quả cho tương lai',
      description: 'Chúng tôi cung cấp dịch vụ sản xuất điện từ nguồn năng lượng thủy điện với công nghệ tiên tiến nhất, đảm bảo hiệu suất cao và tác động môi trường thấp nhất.',
      longDescription: 'Với hơn 20 năm kinh nghiệm trong lĩnh vực thủy điện, chúng tôi đã phát triển và vận hành nhiều nhà máy thủy điện với tổng công suất hơn 2,500 MW. Các giải pháp của chúng tôi được thiết kế tùy chỉnh cho từng địa hình và điều kiện thủy văn cụ thể, đảm bảo hiệu suất tối đa trong khi giảm thiểu tác động môi trường.',
      features: [
        { title: 'Thiết kế tối ưu', desc: 'Tính toán chính xác công suất và hiệu suất cho từng địa điểm cụ thể' },
        { title: 'Vận hành 24/7', desc: 'Giám sát liên tục, đảm bảo ổn định và tin cậy' },
        { title: 'Bảo trì định kỳ', desc: 'Kế hoạch bảo trì chuyên nghiệp, chủ động' },
        { title: 'Báo cáo minh bạch', desc: 'Số liệu sản lượng chi tiết theo thờ gian thực' },
        { title: 'Tối ưu hóa theo mùa', desc: 'Điều chỉnh vận hành theo lưu lượng nước mùa' },
        { title: 'Chứng chỉ xanh', desc: 'Hỗ trợ đạt các chứng chỉ năng lượng tái tạo' },
      ],
      technologies: [
        'Tuabin Francis hiệu suất cao (>94%)',
        'Hệ thống điều khiển tự động SCADA',
        'Giám sát rung động real-time',
        'Tối ưu hóa phát điện theo mùa',
        'Hệ thống dự báo dòng chảy',
        'AI tối ưu vận hành',
      ],
      benefits: [
        'Giảm 40% chi phí năng lượng so với nhiên liệu hóa thạch',
        'Nguồn cung ổn định, đáng tin cậy 24/7',
        'Chứng chỉ năng lượng xanh quốc tế',
        'Hỗ trợ tuân thủ ESG và báo cáo bền vững',
        'Tuổi thọ thiết bị >50 năm',
        'Bảo hành toàn diện 10 năm',
      ],
      process: [
        { step: '01', title: 'Khảo sát', desc: 'Đánh giá địa hình và tiềm năng thủy điện' },
        { step: '02', title: 'Thiết kế', desc: 'Tối ưu hóa thiết kế cho hiệu suất cao nhất' },
        { step: '03', title: 'Thi công', desc: 'Xây dựng theo tiêu chuẩn quốc tế' },
        { step: '04', title: 'Vận hành', desc: 'Giám sát và vận hành chuyên nghiệp' },
      ],
      faqs: [
        { q: 'Công suất tối thiểu là bao nhiêu?', a: 'Chúng tôi hỗ trợ các dự án từ 1MW trở lên. Đối với các dự án nhỏ hơn, chúng tôi có thể tư vấn giải pháp phù hợp.' },
        { q: 'Thờ gian triển khai một dự án?', a: 'Thông thường 12-24 tháng tùy quy mô. Dự án <10MW khoảng 12 tháng, dự án >100MW khoảng 24-36 tháng.' },
        { q: 'Có hỗ trợ tài chính không?', a: 'Chúng tôi liên kết với các định chế tài chính để hỗ trợ vay vốn ưu đãi cho các dự án năng lượng tái tạo.' },
        { q: 'Chi phí vận hành bao nhiêu?', a: 'Chi phí vận hành trung bình 0.5-1 cent/kWh, bao gồm bảo trì định kỳ và nhân sự.' },
      ],
      stats: [
        { value: '2,500+', label: 'MW tổng công suất' },
        { value: '15+', label: 'Nhà máy đang vận hành' },
        { value: '25+', label: 'Năm kinh nghiệm' },
      ],
    },
    en: {
      title: 'Power Generation',
      subtitle: 'Clean, efficient power solutions for the future',
      description: 'We provide electricity generation services from hydroelectric sources with the most advanced technology, ensuring high efficiency and minimal environmental impact.',
      longDescription: 'With over 20 years of experience in hydropower, we have developed and operated numerous hydroelectric plants with a total capacity exceeding 2,500 MW. Our solutions are custom-designed for each terrain and specific hydrological conditions, ensuring maximum performance while minimizing environmental impact.',
      features: [
        { title: 'Optimal Design', desc: 'Precise capacity and efficiency calculations for each specific location' },
        { title: '24/7 Operations', desc: 'Continuous monitoring, ensuring stability and reliability' },
        { title: 'Scheduled Maintenance', desc: 'Professional, proactive maintenance planning' },
        { title: 'Transparent Reporting', desc: 'Real-time detailed output metrics' },
        { title: 'Seasonal Optimization', desc: 'Operation adjustments based on seasonal water flow' },
        { title: 'Green Certification', desc: 'Support for achieving renewable energy certifications' },
      ],
      technologies: [
        'High-efficiency Francis turbines (>94%)',
        'SCADA automated control systems',
        'Real-time vibration monitoring',
        'Seasonal power generation optimization',
        'Flow forecasting systems',
        'AI operation optimization',
      ],
      benefits: [
        'Reduce energy costs by 40% compared to fossil fuels',
        'Stable, reliable 24/7 supply',
        'International green energy certification',
        'ESG compliance and sustainability reporting support',
        'Equipment lifespan >50 years',
        'Comprehensive 10-year warranty',
      ],
      process: [
        { step: '01', title: 'Survey', desc: 'Assess terrain and hydropower potential' },
        { step: '02', title: 'Design', desc: 'Optimize design for maximum efficiency' },
        { step: '03', title: 'Construction', desc: 'Build to international standards' },
        { step: '04', title: 'Operation', desc: 'Professional monitoring and operation' },
      ],
      faqs: [
        { q: 'What is the minimum capacity?', a: 'We support projects from 1MW and above. For smaller projects, we can advise on suitable solutions.' },
        { q: 'Project implementation timeline?', a: 'Typically 12-24 months depending on scale. <10MW projects take about 12 months, >100MW projects take 24-36 months.' },
        { q: 'Financial support available?', a: 'We partner with financial institutions to provide preferential loans for renewable energy projects.' },
        { q: 'What are the operating costs?', a: 'Average operating costs are 0.5-1 cent/kWh, including scheduled maintenance and personnel.' },
      ],
      stats: [
        { value: '2,500+', label: 'MW total capacity' },
        { value: '15+', label: 'Plants operating' },
        { value: '25+', label: 'Years experience' },
      ],
    },
  },
  plantOperations: {
    icon: Settings,
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    vi: {
      title: 'Vận Hành Nhà Máy',
      subtitle: 'Quản lý vận hành chuyên nghiệp, hiệu quả',
      description: 'Dịch vụ vận hành và bảo trì toàn diện cho các nhà máy thủy điện, đảm bảo hiệu suất tối đa và tuổi thọ thiết bị.',
      longDescription: 'Đội ngũ vận hành của chúng tôi được đào tạo chuyên sâu với chứng chỉ quốc tế, sẵn sàng 24/7 để đảm bảo nhà máy của bạn hoạt động ở hiệu suất tối ưu. Chúng tôi áp dụng công nghệ giám sát tiên tiến để phát hiện và xử lý sự cố trước khi chúng ảnh hưởng đến hoạt động.',
      features: [
        { title: 'Giám sát real-time', desc: 'Hệ thống SCADA hiện đại 24/7' },
        { title: 'Bảo trì dự đoán', desc: 'AI phân tích, phòng ngừa sự cố trước khi xảy ra' },
        { title: 'Đội ngũ chuyên gia', desc: 'Kỹ sư giàu kinh nghiệm, chứng chỉ quốc tế' },
        { title: 'An toàn lao động', desc: 'Tuân thủ nghiêm ngặt tiêu chuẩn an toàn' },
        { title: 'Báo cáo định kỳ', desc: 'Báo cáo hiệu suất hàng ngày, tuần, tháng' },
        { title: 'Xử lý sự cố 24/7', desc: 'Đội ngũ ứng cứu nhanh 24/7/365' },
      ],
      technologies: [
        'Hệ thống SCADA tích hợp',
        'Cảm biến IoT thông minh',
        'Phân tích dữ liệu lớn',
        'Digital twin mô phỏng',
        'AR/VR hỗ trợ bảo trì',
        'Hệ thống quản lý tài sản EAM',
      ],
      benefits: [
        'Tăng 15% hiệu suất vận hành',
        'Giảm 30% thờ gian dừng máy không kế hoạch',
        'Kéo dài tuổi thọ thiết bị 20%',
        'Tiết kiệm 25% chi phí bảo trì',
        'Giảm 50% rủi ro sự cố',
        'Tuân thủ 100% quy định an toàn',
      ],
      process: [
        { step: '01', title: 'Đánh giá', desc: 'Đánh giá hiện trạng nhà máy' },
        { step: '02', title: 'Lập kế hoạch', desc: 'Xây dựng kế hoạch vận hành' },
        { step: '03', title: 'Triển khai', desc: 'Thực hiện vận hành và giám sát' },
        { step: '04', title: 'Cải tiến', desc: 'Liên tục cải tiến hiệu suất' },
      ],
      faqs: [
        { q: 'Có hỗ trợ khẩn cấp không?', a: 'Đội ngũ 24/7 sẵn sàng xử lý sự cố. Thờ gian đến hiện trường <2 giờ trong bán kính 100km.' },
        { q: 'Báo cáo tần suất thế nào?', a: 'Báo cáo hàng ngày, tổng kết hàng tuần, phân tích hàng tháng, và báo cáo chiến lược hàng quý.' },
        { q: 'Có đào tạo nhân sự không?', a: 'Có, chúng tôi cung cấp đào tạo chuyên sâu cho nhân viên vận hành của bạn.' },
        { q: 'Hợp đồng tối thiểu bao lâu?', a: 'Hợp đồng tối thiểu 1 năm, khuyến khích hợp đồng 3-5 năm để tối ưu chi phí.' },
      ],
      stats: [
        { value: '99.5%', label: 'Uptime đạt được' },
        { value: '<2h', label: 'Thờ gian phản hồi' },
        { value: '50+', label: 'Chuyên gia' },
      ],
    },
    en: {
      title: 'Plant Operations',
      subtitle: 'Professional, efficient operations management',
      description: 'Comprehensive operation and maintenance services for hydropower plants, ensuring maximum efficiency and equipment longevity.',
      longDescription: 'Our operations team is extensively trained with international certifications, available 24/7 to ensure your plant operates at optimal performance. We apply advanced monitoring technology to detect and address issues before they affect operations.',
      features: [
        { title: 'Real-time Monitoring', desc: 'Modern SCADA system 24/7' },
        { title: 'Predictive Maintenance', desc: 'AI analysis, incident prevention before occurrence' },
        { title: 'Expert Team', desc: 'Experienced engineers with international certifications' },
        { title: 'Work Safety', desc: 'Strict compliance with safety standards' },
        { title: 'Regular Reporting', desc: 'Daily, weekly, monthly performance reports' },
        { title: '24/7 Incident Response', desc: 'Rapid response team 24/7/365' },
      ],
      technologies: [
        'Integrated SCADA systems',
        'Smart IoT sensors',
        'Big data analytics',
        'Digital twin simulation',
        'AR/VR maintenance support',
        'EAM asset management system',
      ],
      benefits: [
        'Increase operational efficiency by 15%',
        'Reduce unplanned downtime by 30%',
        'Extend equipment lifespan by 20%',
        'Save 25% on maintenance costs',
        'Reduce incident risk by 50%',
        '100% safety compliance',
      ],
      process: [
        { step: '01', title: 'Assessment', desc: 'Evaluate plant current status' },
        { step: '02', title: 'Planning', desc: 'Develop operations plan' },
        { step: '03', title: 'Implementation', desc: 'Execute operations and monitoring' },
        { step: '04', title: 'Improvement', desc: 'Continuously improve performance' },
      ],
      faqs: [
        { q: 'Emergency support available?', a: '24/7 team ready to handle incidents. On-site response time <2 hours within 100km radius.' },
        { q: 'Reporting frequency?', a: 'Daily reports, weekly summaries, monthly analysis, and quarterly strategic reports.' },
        { q: 'Staff training provided?', a: 'Yes, we provide in-depth training for your operations staff.' },
        { q: 'Minimum contract duration?', a: 'Minimum 1-year contract, 3-5 year contracts recommended for cost optimization.' },
      ],
      stats: [
        { value: '99.5%', label: 'Uptime achieved' },
        { value: '<2h', label: 'Response time' },
        { value: '50+', label: 'Experts' },
      ],
    },
  },
  environmental: {
    icon: Leaf,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    vi: {
      title: 'Quản Lý Môi Trường',
      subtitle: 'Phát triển bền vững song hành cùng thiên nhiên',
      description: 'Các giải pháp quản lý môi trường toàn diện, đảm bảo các dự án thủy điện tuân thủ nghiêm ngặt các tiêu chuẩn môi trường quốc tế.',
      longDescription: 'Chúng tôi tin rằng phát triển năng lượng sạch phải đi đôi với bảo vệ môi trường. Đội ngũ chuyên gia môi trường của chúng tôi đảm bảo mọi dự án đều đạt và vượt các tiêu chuẩn bảo vệ môi trường khắt khe nhất, từ đánh giá tác động ban đầu đến giám sát liên tục suốt vòng đời dự án.',
      features: [
        { title: 'Đánh giá tác động EIA', desc: 'Đánh giá tác động môi trường chi tiết, đầy đủ' },
        { title: 'Giám sát sinh thái', desc: 'Theo dõi đa dạng sinh học liên tục' },
        { title: 'Xử lý nước thải', desc: 'Công nghệ xử lý nước thải tiên tiến' },
        { title: 'Phục hồi rừng', desc: 'Chương trình trồng cây xanh gấp 3 diện tích ảnh hưởng' },
        { title: 'Bảo tồn thủy sinh', desc: 'Thiết kế thân thiện với hệ sinh thái thủy sinh' },
        { title: 'Quản lý chất thải', desc: 'Xử lý chất thải theo quy định pháp luật' },
      ],
      technologies: [
        'Hệ thống lọc sinh học tiên tiến',
        'Cầu cá (fish ladder) thân thiện',
        'Giám sát chất lượng nước tự động',
        'AI phân tích dữ liệu sinh thái',
        'Hệ thống cảnh báo ô nhiễm',
        'Drone khảo sát rừng',
      ],
      benefits: [
        'Đạt chứng nhận ISO 14001 quốc tế',
        'Giảm thiểu tác động sinh thái tối đa',
        'Nâng cao hình ảnh doanh nghiệp xanh',
        'Tuân thủ 100% quy định pháp luật',
        'Mối quan hệ tốt với cộng đồng địa phương',
        'Giảm rủi ro pháp lý và tranh chấp',
      ],
      process: [
        { step: '01', title: 'Khảo sát', desc: 'Đánh giá hiện trạng môi trường' },
        { step: '02', title: 'Lập kế hoạch', desc: 'Xây dựng kế hoạch bảo vệ môi trường' },
        { step: '03', title: 'Thực hiện', desc: 'Triển khai các biện pháp giảm thiểu' },
        { step: '04', title: 'Giám sát', desc: 'Theo dõi và báo cáo liên tục' },
      ],
      faqs: [
        { q: 'Có cam kết bảo vệ rừng không?', a: 'Có, chúng tôi cam kết tái định cây gấp 3 diện tích bị ảnh hưởng và duy trì rừng vĩnh viễn.' },
        { q: 'Giám sát đa dạng sinh học?', a: 'Theo dõi định kỳ hàng quý với báo cáo chi tiết cho chính quyền địa phương và các bên liên quan.' },
        { q: 'Có hỗ trợ cộng đồng không?', a: 'Có các chương trình phát triển cộng đồng đi kèm như xây trường học, cầu đường, đào tạo nghề.' },
        { q: 'Chi phí quản lý môi trường?', a: 'Chi phí thường chiếm 2-5% tổng đầu tư dự án, tùy thuộc quy mô và điều kiện địa phương.' },
      ],
      stats: [
        { value: '100%', label: 'Tuân thủ ISO 14001' },
        { value: '3:1', label: 'Tỷ lệ tái định cây' },
        { value: '50+', label: 'Dự án đã triển khai' },
      ],
    },
    en: {
      title: 'Environmental Management',
      subtitle: 'Sustainable development alongside nature',
      description: 'Comprehensive environmental management solutions ensuring hydroelectric projects strictly comply with international environmental standards.',
      longDescription: 'We believe that clean energy development must go hand in hand with environmental protection. Our environmental expert team ensures every project meets and exceeds the most stringent environmental protection standards, from initial impact assessment to continuous monitoring throughout the project lifecycle.',
      features: [
        { title: 'EIA Assessment', desc: 'Detailed, comprehensive environmental impact assessment' },
        { title: 'Ecological Monitoring', desc: 'Continuous biodiversity tracking' },
        { title: 'Wastewater Treatment', desc: 'Advanced wastewater treatment technology' },
        { title: 'Forest Restoration', desc: 'Reforestation program 3x the affected area' },
        { title: 'Aquatic Conservation', desc: 'Design friendly to aquatic ecosystems' },
        { title: 'Waste Management', desc: 'Waste treatment in compliance with regulations' },
      ],
      technologies: [
        'Advanced biological filtration systems',
        'Fish-friendly fish ladders',
        'Automated water quality monitoring',
        'AI ecological data analysis',
        'Pollution alert systems',
        'Forest survey drones',
      ],
      benefits: [
        'ISO 14001 international certification',
        'Maximum ecological impact minimization',
        'Enhanced green corporate image',
        '100% regulatory compliance',
        'Good relations with local communities',
        'Reduced legal risks and disputes',
      ],
      process: [
        { step: '01', title: 'Survey', desc: 'Assess environmental baseline' },
        { step: '02', title: 'Planning', desc: 'Develop environmental protection plan' },
        { step: '03', title: 'Implementation', desc: 'Deploy mitigation measures' },
        { step: '04', title: 'Monitoring', desc: 'Continuous tracking and reporting' },
      ],
      faqs: [
        { q: 'Forest protection commitment?', a: 'Yes, we commit to replanting 3x the affected area and maintaining permanent forests.' },
        { q: 'Biodiversity monitoring?', a: 'Quarterly tracking with detailed reports for local authorities and stakeholders.' },
        { q: 'Community support provided?', a: 'Community development programs included such as building schools, bridges, vocational training.' },
        { q: 'Environmental management costs?', a: 'Costs typically account for 2-5% of total project investment, depending on scale and local conditions.' },
      ],
      stats: [
        { value: '100%', label: 'ISO 14001 compliant' },
        { value: '3:1', label: 'Reforestation ratio' },
        { value: '50+', label: 'Projects implemented' },
      ],
    },
  },
};

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const { currentLanguage } = useTranslation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!serviceId || !serviceDetails[serviceId as keyof typeof serviceDetails]) {
    return (
      <div className="min-h-screen pt-32 pb-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Service not found</h1>
        <Button onClick={() => navigate('/')} className="mt-4">Back to Home</Button>
      </div>
    );
  }

  const service = serviceDetails[serviceId as keyof typeof serviceDetails];
  const content = service[currentLanguage as keyof typeof service] as typeof service.vi;
  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <div className={`bg-gradient-to-br ${service.color} py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {currentLanguage === 'vi' ? 'Quay lại trang chủ' : 'Back to Home'}
          </button>

          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className={`w-24 h-24 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0`}>
              <Icon className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{content.title}</h1>
              <p className="text-xl text-white/80">{content.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid md:grid-cols-3 gap-6">
          {content.stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="text-4xl font-bold text-[#0a1e3f] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-[#0a1e3f] mb-4">
                {currentLanguage === 'vi' ? 'Tổng quan dịch vụ' : 'Service Overview'}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">{content.description}</p>
              <p className="text-gray-600 leading-relaxed">{content.longDescription}</p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold text-[#0a1e3f] mb-6">
                {currentLanguage === 'vi' ? 'Tính năng chính' : 'Key Features'}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {content.features.map((feature, index) => (
                  <div key={index} className="p-5 bg-gray-50 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section>
              <h2 className="text-2xl font-bold text-[#0a1e3f] mb-6">
                {currentLanguage === 'vi' ? 'Quy trình làm việc' : 'Our Process'}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {content.process.map((step, index) => (
                  <div key={index} className="relative">
                    <div className={`p-5 rounded-xl ${service.bgColor} h-full`}>
                      <div className="text-3xl font-bold text-gray-300 mb-3">{step.step}</div>
                      <h4 className="font-semibold text-[#0a1e3f] mb-2">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section>
              <h2 className="text-2xl font-bold text-[#0a1e3f] mb-6">
                {currentLanguage === 'vi' ? 'Công nghệ sử dụng' : 'Technologies'}
              </h2>
              <div className="flex flex-wrap gap-3">
                {content.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-2xl font-bold text-[#0a1e3f] mb-6">
                {currentLanguage === 'vi' ? 'Câu hỏi thường gặp' : 'Frequently Asked Questions'}
              </h2>
              <div className="space-y-3">
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
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <div className={`${service.bgColor} rounded-2xl p-6`}>
              <h3 className="text-xl font-bold text-[#0a1e3f] mb-6">
                {currentLanguage === 'vi' ? 'Lợi ích' : 'Benefits'}
              </h3>
              <ul className="space-y-4">
                {content.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="bg-[#0a1e3f] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">
                {currentLanguage === 'vi' ? 'Cần tư vấn?' : 'Need Consultation?'}
              </h3>
              <p className="text-white/80 mb-6">
                {currentLanguage === 'vi' 
                  ? 'Liên hệ với chúng tôi để được tư vấn chi tiết về dịch vụ.' 
                  : 'Contact us for detailed consultation about our services.'}
              </p>
              <Button
                onClick={() => navigate('/contact')}
                className="w-full bg-white text-[#0a1e3f] hover:bg-white/90 group"
              >
                {currentLanguage === 'vi' ? 'Liên hệ ngay' : 'Contact Now'}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#0a1e3f] mb-4">
                {currentLanguage === 'vi' ? 'Thông tin liên hệ' : 'Contact Info'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-600">+84 28 1234 5678</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-600">info@hydropower.vn</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-600">Mon-Fri: 8:00 - 17:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

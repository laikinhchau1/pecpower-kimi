import { X, MapPin, Zap, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/i18n/simple-i18n';

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectKey: string | null;
  onContactClick: () => void;
}

const projectDetails = {
  project1: {
    vi: {
      title: 'Thủy Điện Nậm Nghiệp 2A - Lào',
      location: 'Lào',
      capacity: 'Lắp hạ rotor TM1',
      completed: '2024',
      description: 'Dự án thủy điện Nậm Nghiệp 2A tại nước bạn Lào. Lễ lắp hạ rotor TM1 đã diễn ra thành công tốt đẹp vào tháng 6/2024, đánh dấu cột mốc quan trọng trong tiến độ thi công.',
      features: [
        'Lắp hạ rotor TM1 thành công',
        'Thiết bị cơ điện thủy điện nhập khẩu',
        'Đội ngũ kỹ sư giàu kinh nghiệm',
        'Thi công tại nước bạn Lào',
        'Hệ thống tuabin hiện đại',
        'Đảm bảo tiến độ và chất lượng',
      ],
      impact: 'Góp phần vào sự phát triển năng lượng sạch tại Lào, khẳng định năng lực EPC thủy điện quốc tế của PEC Power.',
    },
    en: {
      title: 'Nam Nghiep 2A Hydropower - Laos',
      location: 'Laos',
      capacity: 'TM1 Rotor Installation',
      completed: '2024',
      description: 'The Nam Nghiep 2A Hydropower project in Laos. The TM1 rotor installation ceremony took place successfully in June 2024, marking a significant milestone in construction progress.',
      features: [
        'Successful TM1 rotor installation',
        'Imported mechanical & electrical equipment',
        'Experienced engineering team',
        'Construction in Laos',
        'Modern turbine system',
        'Schedule and quality assurance',
      ],
      impact: 'Contributing to clean energy development in Laos, affirming PEC Power\'s international hydropower EPC capability.',
    },
    image: 'https://images.unsplash.com/photo-1518182170546-0766bc6f9213?w=1200&h=600&fit=crop',
  },
  project2: {
    vi: {
      title: 'Tổ Hợp Thủy Điện Đồng Nai',
      location: 'Tỉnh Lâm Đồng',
      capacity: '180 MW',
      completed: '2015',
      description: 'Tổ hợp thủy điện Đồng Nai là hệ thống đa đập tiên tiến, cung cấp năng lượng sạch ổn định cho miền Nam Việt Nam.',
      features: [
        'Tổng công suất: 180 MW',
        'Sản lượng điện: 720 triệu kWh/năm',
        'Gồm 3 nhà máy liên hoàn',
        'Công nghệ tuabin Kaplan hiệu suất cao',
        'Hệ thống điều tiết thông minh',
        'Thiết kế thân thiện với sinh vật thủy sinh',
      ],
      impact: 'Đáp ứng nhu cầu điện cho khu vực Tây Nguyên và miền Nam, hỗ trợ phát triển kinh tế địa phương.',
    },
    en: {
      title: 'Đồng Nai Hydro Complex',
      location: 'Lâm Đồng Province',
      capacity: '180 MW',
      completed: '2015',
      description: 'The Đồng Nai Hydro Complex is an advanced multi-dam system providing stable clean energy to Southern Vietnam.',
      features: [
        'Total capacity: 180 MW',
        'Power output: 720 million kWh/year',
        '3 interconnected power plants',
        'High-efficiency Kaplan turbine technology',
        'Smart regulation system',
        'Aquatic life-friendly design',
      ],
      impact: 'Meets electricity demands for the Central Highlands and Southern regions, supporting local economic development.',
    },
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=1200&h=600&fit=crop',
  },
};

export function ProjectDetailModal({ isOpen, onClose, projectKey, onContactClick }: ProjectDetailModalProps) {
  const { currentLanguage } = useTranslation();

  if (!isOpen || !projectKey) return null;

  const project = projectDetails[projectKey as keyof typeof projectDetails];
  const content = project[currentLanguage as keyof typeof project] as typeof project.vi;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80">
          <img
            src={project.image}
            alt={content.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <Badge className="mb-3 bg-cyan-500 hover:bg-cyan-600">
              <Zap className="w-3 h-3 mr-1" />
              {content.capacity}
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{content.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-500" />
              {content.location}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-500" />
              {currentLanguage === 'vi' ? 'Hoàn thành: ' : 'Completed: '}{content.completed}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#0a1e3f] mb-3">
              {currentLanguage === 'vi' ? 'Giới thiệu' : 'Overview'}
            </h3>
            <p className="text-gray-600 leading-relaxed">{content.description}</p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#0a1e3f] mb-3">
              {currentLanguage === 'vi' ? 'Thông số kỹ thuật' : 'Technical Specifications'}
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {content.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="mb-6 p-4 bg-blue-50 rounded-xl">
            <h3 className="text-lg font-bold text-[#0a1e3f] mb-2">
              {currentLanguage === 'vi' ? 'Tác động' : 'Impact'}
            </h3>
            <p className="text-gray-600">{content.impact}</p>
          </div>

          {/* CTA */}
          <Button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="w-full bg-[#0a1e3f] hover:bg-[#1e3a5f] text-white group"
          >
            {currentLanguage === 'vi' ? 'Liên hệ tư vấn dự án' : 'Contact for Project Inquiry'}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}

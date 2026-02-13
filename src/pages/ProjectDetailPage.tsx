import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Zap, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/i18n/simple-i18n';

const projectDetails = {
  project1: {
    vi: {
      title: 'Thủy Điện Nậm Nghiệp 2A - Lào',
      location: 'Lào',
      capacity: 'Lắp hạ rotor TM1',
      completed: '2024',
      status: 'Đang thi công',
      description: 'Dự án thủy điện Nậm Nghiệp 2A tại nước bạn Lào là một trong những dự án quan trọng của PEC Power. Lễ lắp hạ rotor TM1 đã diễn ra thành công tốt đẹp vào tháng 6/2024, đánh dấu cột mốc quan trọng trong tiến độ thi công nhà máy.',
      features: [
        'Lắp hạ rotor TM1 thành công',
        'Thiết bị cơ điện thủy điện nhập khẩu',
        'Đội ngũ kỹ sư giàu kinh nghiệm',
        'Thi công tại nước bạn Lào',
        'Hệ thống tuabin hiện đại',
        'Đảm bảo tiến độ và chất lượng',
        'An toàn lao động tuyệt đối',
        'Kỹ thuật xây lắp điện chuyên nghiệp',
      ],
      impact: 'Góp phần vào sự phát triển năng lượng sạch tại Lào, tạo việc làm cho ngườ dân địa phương và thúc đẩy hợp tác kinh tế Việt Nam - Lào. Dự án khẳng định năng lực của PEC Power trong lĩnh vực EPC thủy điện quốc tế.',
      technologies: [
        'Thiết bị cơ điện thủy điện tiên tiến',
        'Kỹ thuật lắp đặt rotor chuyên nghiệp',
        'Hệ thống điều khiển tự động',
        'Công nghệ thi công hiện đại',
      ],
    },
    en: {
      title: 'Nam Nghiep 2A Hydropower - Laos',
      location: 'Laos',
      capacity: 'TM1 Rotor Installation',
      completed: '2024',
      status: 'Under Construction',
      description: 'The Nam Nghiep 2A Hydropower project in Laos is one of PEC Power\'s important projects. The TM1 rotor installation ceremony took place successfully in June 2024, marking a significant milestone in the plant construction progress.',
      features: [
        'Successful TM1 rotor installation',
        'Imported mechanical & electrical equipment',
        'Experienced engineering team',
        'Construction in Laos',
        'Modern turbine system',
        'Schedule and quality assurance',
        'Absolute work safety',
        'Professional electrical installation',
      ],
      impact: 'Contributing to clean energy development in Laos, creating jobs for local people and promoting Vietnam-Laos economic cooperation. The project affirms PEC Power\'s capability in international hydropower EPC.',
      technologies: [
        'Advanced mechanical & electrical equipment',
        'Professional rotor installation technique',
        'Automated control systems',
        'Modern construction technology',
      ],
    },
    image: 'https://images.unsplash.com/photo-1518182170546-0766bc6f9213?w=1200&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop',
    ],
  },
  project2: {
    vi: {
      title: 'Tổ Hợp Thủy Điện Đồng Nai',
      location: 'Tỉnh Lâm Đồng',
      capacity: '180 MW',
      completed: '2015',
      status: 'Đang vận hành',
      description: 'Tổ hợp thủy điện Đồng Nai là hệ thống đa đập tiên tiến, cung cấp năng lượng sạch ổn định cho miền Nam Việt Nam. Đây là dự án liên doanh giữa Việt Nam và các đối tác quốc tế.',
      features: [
        'Tổng công suất: 180 MW',
        'Sản lượng điện: 720 triệu kWh/năm',
        'Gồm 3 nhà máy liên hoàn',
        'Tổng chiều dài đường ống áp lực: 4.2 km',
        'Hệ thống tuabin Kaplan hiệu suất cao',
        'Hệ thống điều tiết thông minh',
        'Thiết kế thân thiện với sinh vật thủy sinh',
      ],
      impact: 'Đáp ứng nhu cầu điện cho khu vực Tây Nguyên và miền Nam, hỗ trợ phát triển kinh tế địa phương. Giảm phát thải CO2 khoảng 600,000 tấn/năm.',
      technologies: [
        'Tuabin Kaplan hiệu suất cao',
        'Hệ thống điều tiết thông minh',
        'Công nghệ giảm tiếng ồn',
        'Hệ thống giám sát môi trường',
      ],
    },
    en: {
      title: 'Đồng Nai Hydro Complex',
      location: 'Lâm Đồng Province',
      capacity: '180 MW',
      completed: '2015',
      status: 'Operational',
      description: 'The Đồng Nai Hydro Complex is an advanced multi-dam system providing stable clean energy to Southern Vietnam. This is a joint venture project between Vietnam and international partners.',
      features: [
        'Total capacity: 180 MW',
        'Power output: 720 million kWh/year',
        '3 interconnected power plants',
        'Total penstock length: 4.2 km',
        'High-efficiency Kaplan turbine technology',
        'Smart regulation system',
        'Aquatic life-friendly design',
      ],
      impact: 'Meets electricity demands for the Central Highlands and Southern regions, supporting local economic development. Reduces CO2 emissions by approximately 600,000 tons/year.',
      technologies: [
        'High-efficiency Kaplan turbines',
        'Smart regulation system',
        'Noise reduction technology',
        'Environmental monitoring system',
      ],
    },
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=1200&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518182170546-0766bc6f9213?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
    ],
  },
};

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { currentLanguage } = useTranslation();

  if (!projectId || !projectDetails[projectId as keyof typeof projectDetails]) {
    return (
      <div className="min-h-screen pt-32 pb-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Project not found</h1>
        <Button onClick={() => navigate('/')} className="mt-4">Back to Home</Button>
      </div>
    );
  }

  const project = projectDetails[projectId as keyof typeof projectDetails];
  const content = project[currentLanguage as keyof typeof project] as typeof project.vi;

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src={project.image}
          alt={content.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-6 left-4 sm:left-8 flex items-center gap-2 text-white/90 hover:text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          {currentLanguage === 'vi' ? 'Quay lại' : 'Back'}
        </button>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
          <div className="max-w-7xl mx-auto">
            <Badge className="mb-4 bg-cyan-500 hover:bg-cyan-600 text-white">
              <Zap className="w-3 h-3 mr-1" />
              {content.capacity}
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">{content.title}</h1>
            <div className="flex flex-wrap gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {content.location}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {currentLanguage === 'vi' ? 'Hoàn thành: ' : 'Completed: '}{content.completed}
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white">
                {content.status}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-[#0a1e3f] mb-4">
                {currentLanguage === 'vi' ? 'Giới thiệu dự án' : 'Project Overview'}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">{content.description}</p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold text-[#0a1e3f] mb-4">
                {currentLanguage === 'vi' ? 'Thông số kỹ thuật' : 'Technical Specifications'}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {content.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section>
              <h2 className="text-2xl font-bold text-[#0a1e3f] mb-4">
                {currentLanguage === 'vi' ? 'Công nghệ' : 'Technologies'}
              </h2>
              <div className="flex flex-wrap gap-3">
                {content.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="text-2xl font-bold text-[#0a1e3f] mb-4">
                {currentLanguage === 'vi' ? 'Hình ảnh' : 'Gallery'}
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {project.gallery.map((img, index) => (
                  <div key={index} className="rounded-xl overflow-hidden aspect-[4/3]">
                    <img
                      src={img}
                      alt={`${content.title} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Impact Card */}
            <div className="bg-gradient-to-br from-[#0a1e3f] to-[#1e3a5f] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">
                {currentLanguage === 'vi' ? 'Tác động' : 'Impact'}
              </h3>
              <p className="text-white/80 leading-relaxed">{content.impact}</p>
            </div>

            {/* CTA Card */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#0a1e3f] mb-4">
                {currentLanguage === 'vi' ? 'Quan tâm đến dự án?' : 'Interested in this project?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {currentLanguage === 'vi' 
                  ? 'Liên hệ với chúng tôi để biết thêm thông tin chi tiết.' 
                  : 'Contact us for more detailed information.'}
              </p>
              <Button
                onClick={() => navigate('/contact')}
                className="w-full bg-[#0a1e3f] hover:bg-[#1e3a5f] text-white group"
              >
                {currentLanguage === 'vi' ? 'Liên hệ tư vấn' : 'Contact for Inquiry'}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#0a1e3f] mb-4">
                {currentLanguage === 'vi' ? 'Thông tin nhanh' : 'Quick Facts'}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">{currentLanguage === 'vi' ? 'Công suất' : 'Capacity'}</span>
                  <span className="font-semibold text-[#0a1e3f]">{content.capacity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{currentLanguage === 'vi' ? 'Vị trí' : 'Location'}</span>
                  <span className="font-semibold text-[#0a1e3f]">{content.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{currentLanguage === 'vi' ? 'Hoàn thành' : 'Completed'}</span>
                  <span className="font-semibold text-[#0a1e3f]">{content.completed}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

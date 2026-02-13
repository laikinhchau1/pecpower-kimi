import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  Newspaper, 
  Settings, 
  Save, 
  Download, 
  Upload, 
  RotateCcw, 
  Eye, 
  LogOut,
  ChevronRight,
  Menu,
  X,
  Globe,
  Type,
  Image,
  Hash
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useAdmin } from '@/hooks/useAdmin';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import viData from '@/i18n/locales/vi.json';
import enData from '@/i18n/locales/en.json';

interface SectionConfig {
  key: string;
  title: string;
  icon: React.ReactNode;
  fields: FieldConfig[];
}

interface FieldConfig {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'number';
  placeholder?: string;
}

const sections: SectionConfig[] = [
  {
    key: 'hero',
    title: 'Hero Section',
    icon: <LayoutDashboard className="w-4 h-4" />,
    fields: [
      { key: 'hero.tagline', label: 'Tagline', type: 'text', placeholder: 'NĂNG LƯỢNG SẠCH...' },
      { key: 'hero.title', label: 'Tiêu đề chính', type: 'text', placeholder: 'Khai Thác Sức Mạnh...' },
      { key: 'hero.description', label: 'Mô tả', type: 'textarea', placeholder: 'Mô tả ngắn...' },
      { key: 'hero.ctaPrimary', label: 'Nút chính', type: 'text', placeholder: 'Khám Phá Dự Án' },
      { key: 'hero.ctaSecondary', label: 'Nút phụ', type: 'text', placeholder: 'Tìm Hiểu Thêm' },
    ],
  },
  {
    key: 'stats',
    title: 'Thống kê',
    icon: <Hash className="w-4 h-4" />,
    fields: [
      { key: 'stats.capacity.value', label: 'Công suất - Giá trị', type: 'text', placeholder: '2.500+' },
      { key: 'stats.capacity.label', label: 'Công suất - Nhãn', type: 'text', placeholder: 'Tổng Công Suất' },
      { key: 'stats.plants.value', label: 'Nhà máy - Giá trị', type: 'text', placeholder: '15+' },
      { key: 'stats.plants.unit', label: 'Nhà máy - Đơn vị', type: 'text', placeholder: '' },
      { key: 'stats.plants.label', label: 'Nhà máy - Nhãn', type: 'text', placeholder: 'Nhà Máy' },
      { key: 'stats.homes.value', label: 'Hộ gia đình - Giá trị', type: 'text', placeholder: '5M+' },
      { key: 'stats.homes.unit', label: 'Hộ gia đình - Đơn vị', type: 'text', placeholder: '' },
      { key: 'stats.homes.label', label: 'Hộ gia đình - Nhãn', type: 'text', placeholder: 'Hộ Gia Đình' },
      { key: 'stats.experience.value', label: 'Kinh nghiệm - Giá trị', type: 'text', placeholder: '25+' },
      { key: 'stats.experience.unit', label: 'Kinh nghiệm - Đơn vị', type: 'text', placeholder: '' },
      { key: 'stats.experience.label', label: 'Kinh nghiệm - Nhãn', type: 'text', placeholder: 'Năm Kinh Nghiệm' },
    ],
  },
  {
    key: 'about',
    title: 'Về chúng tôi',
    icon: <FileText className="w-4 h-4" />,
    fields: [
      { key: 'about.tagline', label: 'Tagline', type: 'text', placeholder: 'Về Chúng Tôi' },
      { key: 'about.title', label: 'Tiêu đề', type: 'text', placeholder: 'Tiên Phong Năng Lượng...' },
      { key: 'about.description1', label: 'Mô tả 1', type: 'textarea', placeholder: 'Mô tả đoạn 1...' },
      { key: 'about.description2', label: 'Mô tả 2', type: 'textarea', placeholder: 'Mô tả đoạn 2...' },
      { key: 'about.features.certified', label: 'Tính năng 1', type: 'text', placeholder: 'Chứng Nhận ISO...' },
      { key: 'about.features.technology', label: 'Tính năng 2', type: 'text', placeholder: 'Công Nghệ Tuabin...' },
      { key: 'about.features.monitoring', label: 'Tính năng 3', type: 'text', placeholder: 'Hệ Thống Giám Sát...' },
      { key: 'about.features.community', label: 'Tính năng 4', type: 'text', placeholder: 'Chương Trình Phát Triển...' },
      { key: 'about.cta', label: 'Nút CTA', type: 'text', placeholder: 'Tìm Hiểu Câu Chuyện' },
    ],
  },
  {
    key: 'services',
    title: 'Dịch vụ',
    icon: <Briefcase className="w-4 h-4" />,
    fields: [
      { key: 'services.tagline', label: 'Tagline', type: 'text', placeholder: 'Dịch Vụ' },
      { key: 'services.title', label: 'Tiêu đề', type: 'text', placeholder: 'Giải Pháp Thủy Điện...' },
      { key: 'services.subtitle', label: 'Phụ đề', type: 'textarea', placeholder: 'Từ phát triển đến vận hành...' },
      { key: 'services.powerGeneration.title', label: 'Dịch vụ 1 - Tiêu đề', type: 'text', placeholder: 'Sản Xuất Điện' },
      { key: 'services.powerGeneration.description', label: 'Dịch vụ 1 - Mô tả', type: 'textarea', placeholder: 'Mô tả...' },
      { key: 'services.plantOperations.title', label: 'Dịch vụ 2 - Tiêu đề', type: 'text', placeholder: 'Vận Hành Nhà Máy' },
      { key: 'services.plantOperations.description', label: 'Dịch vụ 2 - Mô tả', type: 'textarea', placeholder: 'Mô tả...' },
      { key: 'services.environmental.title', label: 'Dịch vụ 3 - Tiêu đề', type: 'text', placeholder: 'Quản Lý Môi Trường' },
      { key: 'services.environmental.description', label: 'Dịch vụ 3 - Mô tả', type: 'textarea', placeholder: 'Mô tả...' },
      { key: 'services.learnMore', label: 'Nút Tìm hiểu', type: 'text', placeholder: 'Tìm Hiểu Thêm' },
    ],
  },
  {
    key: 'projects',
    title: 'Dự án',
    icon: <Image className="w-4 h-4" />,
    fields: [
      { key: 'projects.tagline', label: 'Tagline', type: 'text', placeholder: 'Dự Án Tiêu Biểu' },
      { key: 'projects.title', label: 'Tiêu đề', type: 'text', placeholder: 'Các Dự Án Lớn' },
      { key: 'projects.subtitle', label: 'Phụ đề', type: 'textarea', placeholder: 'Thể hiện cam kết...' },
      { key: 'projects.project1.title', label: 'Dự án 1 - Tiêu đề', type: 'text', placeholder: 'Nhà Máy Thủy Điện...' },
      { key: 'projects.project1.location', label: 'Dự án 1 - Vị trí', type: 'text', placeholder: 'Tỉnh...' },
      { key: 'projects.project1.capacity', label: 'Dự án 1 - Công suất', type: 'text', placeholder: '220 MW' },
      { key: 'projects.project1.description', label: 'Dự án 1 - Mô tả', type: 'textarea', placeholder: 'Mô tả...' },
      { key: 'projects.project2.title', label: 'Dự án 2 - Tiêu đề', type: 'text', placeholder: 'Tổ Hợp Thủy Điện...' },
      { key: 'projects.project2.location', label: 'Dự án 2 - Vị trí', type: 'text', placeholder: 'Tỉnh...' },
      { key: 'projects.project2.capacity', label: 'Dự án 2 - Công suất', type: 'text', placeholder: '180 MW' },
      { key: 'projects.project2.description', label: 'Dự án 2 - Mô tả', type: 'textarea', placeholder: 'Mô tả...' },
      { key: 'projects.viewDetails', label: 'Nút Xem chi tiết', type: 'text', placeholder: 'Xem Chi Tiết' },
    ],
  },
  {
    key: 'technology',
    title: 'Công nghệ',
    icon: <Settings className="w-4 h-4" />,
    fields: [
      { key: 'technology.tagline', label: 'Tagline', type: 'text', placeholder: 'Công Nghệ' },
      { key: 'technology.title', label: 'Tiêu đề', type: 'text', placeholder: 'Công Nghệ Tiên Tiến' },
      { key: 'technology.description', label: 'Mô tả', type: 'textarea', placeholder: 'Chúng tôi áp dụng...' },
      { key: 'technology.features.turbines.title', label: 'Tính năng 1 - Tiêu đề', type: 'text', placeholder: 'Tuabin Francis...' },
      { key: 'technology.features.turbines.description', label: 'Tính năng 1 - Mô tả', type: 'textarea', placeholder: 'Mô tả...' },
      { key: 'technology.features.smartGrid.title', label: 'Tính năng 2 - Tiêu đề', type: 'text', placeholder: 'Lưới Điện Thông Minh...' },
      { key: 'technology.features.smartGrid.description', label: 'Tính năng 2 - Mô tả', type: 'textarea', placeholder: 'Mô tả...' },
      { key: 'technology.features.maintenance.title', label: 'Tính năng 3 - Tiêu đề', type: 'text', placeholder: 'Bảo Trì Dự Đoán...' },
      { key: 'technology.features.maintenance.description', label: 'Tính năng 3 - Mô tả', type: 'textarea', placeholder: 'Mô tả...' },
      { key: 'technology.features.eco.title', label: 'Tính năng 4 - Tiêu đề', type: 'text', placeholder: 'Thiết Kế Thân Thiện...' },
      { key: 'technology.features.eco.description', label: 'Tính năng 4 - Mô tả', type: 'textarea', placeholder: 'Mô tả...' },
    ],
  },
  {
    key: 'testimonials',
    title: 'Đánh giá',
    icon: <Type className="w-4 h-4" />,
    fields: [
      { key: 'testimonials.tagline', label: 'Tagline', type: 'text', placeholder: 'Đánh Giá' },
      { key: 'testimonials.title', label: 'Tiêu đề', type: 'text', placeholder: 'Đối Tác Nói Gì' },
      { key: 'testimonials.testimonial1.quote', label: 'Đánh giá 1 - Nội dung', type: 'textarea', placeholder: 'Cam kết của họ...' },
      { key: 'testimonials.testimonial1.name', label: 'Đánh giá 1 - Tên', type: 'text', placeholder: 'Nguyễn Văn An' },
      { key: 'testimonials.testimonial1.role', label: 'Đánh giá 1 - Chức vụ', type: 'text', placeholder: 'CEO...' },
      { key: 'testimonials.testimonial2.quote', label: 'Đánh giá 2 - Nội dung', type: 'textarea', placeholder: 'Nguồn cung điện...' },
      { key: 'testimonials.testimonial2.name', label: 'Đánh giá 2 - Tên', type: 'text', placeholder: 'Trần Thị Bình' },
      { key: 'testimonials.testimonial2.role', label: 'Đánh giá 2 - Chức vụ', type: 'text', placeholder: 'Giám Đốc...' },
      { key: 'testimonials.testimonial3.quote', label: 'Đánh giá 3 - Nội dung', type: 'textarea', placeholder: 'Dẫn đầu trong đổi mới...' },
      { key: 'testimonials.testimonial3.name', label: 'Đánh giá 3 - Tên', type: 'text', placeholder: 'Lê Hoàng Nam' },
      { key: 'testimonials.testimonial3.role', label: 'Đánh giá 3 - Chức vụ', type: 'text', placeholder: 'Bộ Công Thương' },
    ],
  },
  {
    key: 'news',
    title: 'Tin tức',
    icon: <Newspaper className="w-4 h-4" />,
    fields: [
      { key: 'news.tagline', label: 'Tagline', type: 'text', placeholder: 'Tin Tức Mới' },
      { key: 'news.title', label: 'Tiêu đề', type: 'text', placeholder: 'Cập Nhật Công Ty' },
      { key: 'news.subtitle', label: 'Phụ đề', type: 'textarea', placeholder: 'Cập nhật những phát triển...' },
      { key: 'news.article1.title', label: 'Tin 1 - Tiêu đề', type: 'text', placeholder: 'Nhà Máy 150MW...' },
      { key: 'news.article1.date', label: 'Tin 1 - Ngày', type: 'text', placeholder: '15/01/2026' },
      { key: 'news.article1.excerpt', label: 'Tin 1 - Tóm tắt', type: 'textarea', placeholder: 'Cơ sở thủy điện...' },
      { key: 'news.article1.category', label: 'Tin 1 - Danh mục', type: 'text', placeholder: 'Dự Án' },
      { key: 'news.article2.title', label: 'Tin 2 - Tiêu đề', type: 'text', placeholder: 'Giải Thưởng...' },
      { key: 'news.article2.date', label: 'Tin 2 - Ngày', type: 'text', placeholder: '20/12/2025' },
      { key: 'news.article2.excerpt', label: 'Tin 2 - Tóm tắt', type: 'textarea', placeholder: 'Được ghi nhận...' },
      { key: 'news.article2.category', label: 'Tin 2 - Danh mục', type: 'text', placeholder: 'Giải Thưởng' },
      { key: 'news.article3.title', label: 'Tin 3 - Tiêu đề', type: 'text', placeholder: 'Mở Rộng Công Suất...' },
      { key: 'news.article3.date', label: 'Tin 3 - Ngày', type: 'text', placeholder: '10/11/2025' },
      { key: 'news.article3.excerpt', label: 'Tin 3 - Tóm tắt', type: 'textarea', placeholder: 'Công bố kế hoạch...' },
      { key: 'news.article3.category', label: 'Tin 3 - Danh mục', type: 'text', placeholder: 'Tin Tức' },
      { key: 'news.readMore', label: 'Nút Đọc thêm', type: 'text', placeholder: 'Đọc Thêm' },
    ],
  },
  {
    key: 'cta',
    title: 'CTA Section',
    icon: <Globe className="w-4 h-4" />,
    fields: [
      { key: 'cta.title', label: 'Tiêu đề', type: 'text', placeholder: 'Sẵn Sàng Cung Cấp...' },
      { key: 'cta.description', label: 'Mô tả', type: 'textarea', placeholder: 'Hợp tác với chúng tôi...' },
      { key: 'cta.primary', label: 'Nút chính', type: 'text', placeholder: 'Liên Hệ Ngay' },
      { key: 'cta.secondary', label: 'Nút phụ', type: 'text', placeholder: 'Tải Brochure' },
    ],
  },
  {
    key: 'footer',
    title: 'Footer',
    icon: <FileText className="w-4 h-4" />,
    fields: [
      { key: 'footer.description', label: 'Mô tả', type: 'textarea', placeholder: 'Dẫn đầu chuyển đổi...' },
      { key: 'footer.address', label: 'Địa chỉ', type: 'text', placeholder: '123 Đường...' },
      { key: 'footer.phone', label: 'Điện thoại', type: 'text', placeholder: '+84 28...' },
      { key: 'footer.email', label: 'Email', type: 'text', placeholder: 'info@...' },
      { key: 'footer.hours', label: 'Giờ làm việc', type: 'text', placeholder: 'Thứ 2 - Thứ 6...' },
      { key: 'footer.copyright', label: 'Copyright', type: 'text', placeholder: '© 2026...' },
      { key: 'footer.privacy', label: 'Chính sách bảo mật', type: 'text', placeholder: 'Chính Sách...' },
      { key: 'footer.terms', label: 'Điều khoản', type: 'text', placeholder: 'Điều Khoản...' },
    ],
  },
  {
    key: 'seo',
    title: 'SEO',
    icon: <Settings className="w-4 h-4" />,
    fields: [
      { key: 'seo.title', label: 'Tiêu đề trang', type: 'text', placeholder: 'HydroPower Vietnam...' },
      { key: 'seo.description', label: 'Meta description', type: 'textarea', placeholder: 'Công ty thủy điện...' },
      { key: 'seo.keywords', label: 'Keywords', type: 'text', placeholder: 'thủy điện, Việt Nam...' },
    ],
  },
];

export function AdminPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { 
    isLoaded, 
    getNestedContent, 
    updateNestedContent, 
    exportData, 
    importData, 
    resetData,
    mergeWithOriginal,
  } = useAdmin();
  
  const [activeSection, setActiveSection] = useState('hero');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'vi' | 'en'>('vi');
  const [importText, setImportText] = useState('');
  const [showImportDialog, setShowImportDialog] = useState(false);

  // Load original data on first load
  useEffect(() => {
    if (isLoaded) {
      mergeWithOriginal({ vi: viData, en: enData });
    }
  }, [isLoaded]);

  const handleSave = () => {
    toast.success('Đã lưu thay đổi thành công!');
  };

  const handleExport = () => {
    const json = exportData();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'admin-data.json';
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Đã xuất dữ liệu!');
  };

  const handleImport = () => {
    if (importData(importText)) {
      setShowImportDialog(false);
      setImportText('');
      toast.success('Đã nhập dữ liệu thành công!');
    } else {
      toast.error('Dữ liệu không hợp lệ!');
    }
  };

  const handleReset = () => {
    resetData();
    mergeWithOriginal({ vi: viData, en: enData });
    toast.success('Đã đặt lại về mặc định!');
  };

  const handleFieldChange = (path: string, value: string) => {
    updateNestedContent(activeTab, path, value);
  };

  const activeSectionConfig = sections.find(s => s.key === activeSection);

  const getOriginalValue = (path: string) => {
    const keys = path.split('.');
    let current: any = activeTab === 'vi' ? viData : enData;
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return '';
      }
    }
    return current || '';
  };

  if (!isLoaded) {
    return <div className="flex items-center justify-center h-screen">Đang tải...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside 
        className={`bg-slate-900 text-white transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-16'
        } flex flex-col`}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-700">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <LayoutDashboard className="w-5 h-5 text-cyan-400" />
              <span className="font-bold text-lg">Admin</span>
            </div>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-slate-400 hover:text-white hover:bg-slate-800"
          >
            {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 space-y-1">
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveSection(section.key)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                activeSection === section.key 
                  ? 'bg-cyan-600 text-white' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {section.icon}
              {sidebarOpen && <span className="text-sm">{section.title}</span>}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700 space-y-2">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2 text-slate-400 hover:text-white hover:bg-slate-800"
            onClick={() => navigate('/')}
          >
            <Eye className="w-4 h-4" />
            {sidebarOpen && <span className="text-sm">Xem trang web</span>}
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2 text-slate-400 hover:text-white hover:bg-slate-800"
            onClick={() => {
              logout();
              navigate('/');
            }}
          >
            <LogOut className="w-4 h-4" />
            {sidebarOpen && <span className="text-sm">Đăng xuất</span>}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Admin</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">{activeSectionConfig?.title}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleExport} className="gap-2">
              <Download className="w-4 h-4" />
              Xuất
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowImportDialog(true)} className="gap-2">
              <Upload className="w-4 h-4" />
              Nhập
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 text-orange-600">
                  <RotateCcw className="w-4 h-4" />
                  Đặt lại
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Xác nhận đặt lại?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Tất cả thay đổi sẽ bị xóa và quay về dữ liệu mặc định.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Hủy</AlertDialogCancel>
                  <AlertDialogAction onClick={handleReset} className="bg-orange-600">
                    Đặt lại
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button size="sm" onClick={handleSave} className="gap-2 bg-cyan-600 hover:bg-cyan-700">
              <Save className="w-4 h-4" />
              Lưu
            </Button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'vi' | 'en')} className="w-full">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{activeSectionConfig?.title}</h1>
                <p className="text-gray-500 mt-1">Chỉnh sửa nội dung cho phần này</p>
              </div>
              <TabsList>
                <TabsTrigger value="vi">Tiếng Việt</TabsTrigger>
                <TabsTrigger value="en">English</TabsTrigger>
              </TabsList>
            </div>

            {['vi', 'en'].map((lang) => (
              <TabsContent key={lang} value={lang} className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Nội dung {lang === 'vi' ? 'Tiếng Việt' : 'English'}</CardTitle>
                    <CardDescription>
                      Chỉnh sửa các trường bên dưới để cập nhật nội dung hiển thị trên website
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {activeSectionConfig?.fields.map((field) => {
                      const currentValue = getNestedContent(lang as 'vi' | 'en', field.key, getOriginalValue(field.key));
                      return (
                        <div key={field.key} className="space-y-2">
                          <Label htmlFor={`${lang}-${field.key}`} className="text-sm font-medium">
                            {field.label}
                          </Label>
                          {field.type === 'textarea' ? (
                            <Textarea
                              id={`${lang}-${field.key}`}
                              value={currentValue}
                              onChange={(e) => handleFieldChange(field.key, e.target.value)}
                              placeholder={field.placeholder}
                              rows={3}
                              className="resize-none"
                            />
                          ) : (
                            <Input
                              id={`${lang}-${field.key}`}
                              value={currentValue}
                              onChange={(e) => handleFieldChange(field.key, e.target.value)}
                              placeholder={field.placeholder}
                            />
                          )}
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>

      {/* Import Dialog */}
      <AlertDialog open={showImportDialog} onOpenChange={setShowImportDialog}>
        <AlertDialogContent className="max-w-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Nhập dữ liệu</AlertDialogTitle>
            <AlertDialogDescription>
              Dán nội dung JSON để nhập dữ liệu. Lưu ý: Dữ liệu hiện tại sẽ bị ghi đè.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Textarea
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder='{"vi": {...}, "en": {...}}'
            rows={10}
            className="font-mono text-sm"
          />
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setImportText('')}>Hủy</AlertDialogCancel>
            <AlertDialogAction onClick={handleImport}>Nhập</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

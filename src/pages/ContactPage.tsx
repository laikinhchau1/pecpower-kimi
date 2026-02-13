import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, User, Mail, Phone, MessageSquare, CheckCircle, ArrowLeft, Building2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useTranslation } from '@/i18n/simple-i18n';

export function ContactPage() {
  const navigate = useNavigate();
  const { currentLanguage } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const content = {
    vi: {
      title: 'Liên Hệ Với Chúng Tôi',
      subtitle: 'Hãy để lại thông tin, chúng tôi sẽ tư vấn miễn phí cho bạn',
      name: 'Họ và tên *',
      email: 'Email *',
      phone: 'Số điện thoại *',
      company: 'Công ty',
      subject: 'Tiêu đề',
      message: 'Nội dung yêu cầu *',
      submit: 'Gửi yêu cầu',
      back: 'Quay lại trang chủ',
      success: 'Gửi thành công!',
      successMessage: 'Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thờ gian sớm nhất.',
      contactInfo: 'Thông tin liên hệ',
      address: '123 Đường Năng Lượng, Quận 1, TP. Hồ Chí Minh',
      phoneLabel: 'Điện thoại',
      emailLabel: 'Email',
      hours: 'Thứ 2 - Thứ 6: 8:00 - 17:00',
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Leave your information for a free consultation',
      name: 'Full Name *',
      email: 'Email *',
      phone: 'Phone Number *',
      company: 'Company',
      subject: 'Subject',
      message: 'Your Message *',
      submit: 'Send Request',
      back: 'Back to Home',
      success: 'Sent Successfully!',
      successMessage: 'Thank you for contacting us. We will respond as soon as possible.',
      contactInfo: 'Contact Information',
      address: '123 Energy Street, District 1, Ho Chi Minh City',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      hours: 'Mon-Fri: 8:00 - 17:00',
    }
  };

  const c = content[currentLanguage];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          {c.back}
        </button>

        {isSubmitted ? (
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{c.success}</h2>
            <p className="text-gray-600 text-lg mb-8">{c.successMessage}</p>
            <Button onClick={() => navigate('/')} className="bg-[#0a1e3f] hover:bg-[#1e3a5f]">
              {c.back}
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-[#0a1e3f] mb-2">{c.title}</h1>
                <p className="text-gray-600 mb-8">{c.subtitle}</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-500" />
                        {c.name}
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        {c.email}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        {c.phone}
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-gray-500" />
                        {c.company}
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{c.subject}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-gray-500" />
                      {c.message}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#0a1e3f] hover:bg-[#1e3a5f] text-white group h-12"
                  >
                    {c.submit}
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#0a1e3f] to-[#1e3a5f] rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-6">{c.contactInfo}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">{currentLanguage === 'vi' ? 'Địa chỉ' : 'Address'}</p>
                      <p className="text-white/80 text-sm">{c.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">{c.phoneLabel}</p>
                      <p className="text-white/80 text-sm">+84 28 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">{c.emailLabel}</p>
                      <p className="text-white/80 text-sm">info@hydropower.vn</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 rounded-xl overflow-hidden bg-white/10 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-2 text-white/60" />
                    <p className="text-white/60 text-sm">Google Maps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

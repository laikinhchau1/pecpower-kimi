import { Droplets, MapPin, Phone, Mail, Clock, Facebook, Linkedin, Youtube, Twitter, Settings } from 'lucide-react';
import { useTranslation } from '@/i18n/simple-i18n';
import { Link } from 'react-router-dom';

const quickLinks = ['home', 'about', 'projects', 'services', 'news'];
const serviceLinks = ['powerGeneration', 'plantOperations', 'environmental'];

interface FooterProps {
  onScrollToSection: (href: string) => void;
}

export function Footer({ onScrollToSection }: FooterProps) {
  const { t } = useTranslation();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onScrollToSection(href);
  };

  return (
    <footer className="bg-[#0a1e3f] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">HydroPower</span>
            </a>

            {/* Description */}
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Linkedin, Youtube, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    onClick={(e) => handleLinkClick(e, `#${link}`)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {t(`nav.${link}`)}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, '#services')}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {t(`services.${link}.title`)}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Maintenance
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+842812345678" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.phone')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@hydropower.vn" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.email')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">{t('footer.hours')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex gap-6 items-center">
              <a 
                href="#" 
                onClick={(e) => e.preventDefault()}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('footer.privacy')}
              </a>
              <a 
                href="#" 
                onClick={(e) => e.preventDefault()}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('footer.terms')}
              </a>
              <Link 
                to="/admin"
                className="text-gray-500 hover:text-cyan-400 text-sm transition-colors flex items-center gap-1"
              >
                <Settings className="w-3 h-3" />
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

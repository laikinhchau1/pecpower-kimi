import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/i18n/simple-i18n';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { key: 'home', href: '#home', path: '/' },
  { key: 'about', href: '#about', path: '/#about' },
  { key: 'projects', href: '#projects', path: '/#projects' },
  { key: 'services', href: '#services', path: '/#services' },
  { key: 'news', href: '#news', path: '/#news' },
  { key: 'contact', href: '#contact', path: '/#contact' },
];

interface NavigationProps {
  onScrollToSection: (href: string) => void;
}

export function Navigation({ onScrollToSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t, currentLanguage, toggleLanguage } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle intersection observer for active section (only on homepage)
  useEffect(() => {
    if (!isHomePage) return;

    const observerOptions = {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  const handleNavClick = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onScrollToSection(href);
    setIsMobileMenuOpen(false);
  }, [onScrollToSection]);

  const handleContactClick = () => {
    navigate('/contact');
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHomePage
            ? 'glass shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
            >
              <img 
                src="/logo.svg" 
                alt="PECPower" 
                className="h-14 w-auto transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                const isDark = isScrolled || !isHomePage;
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative text-sm font-medium transition-colors duration-300 ${
                      isDark
                        ? isActive
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                        : isActive
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {t(`nav.${link.key}`)}
                    {isActive && isHomePage && (
                      <span className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                        isDark ? 'bg-blue-600' : 'bg-white'
                      }`} />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled || !isHomePage
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>{currentLanguage === 'vi' ? 'VI' : 'EN'}</span>
              </button>

              {/* CTA Button */}
              <Button
                onClick={handleContactClick}
                className={`transition-all duration-300 ${
                  isScrolled || !isHomePage
                    ? 'bg-[#0a1e3f] hover:bg-[#1e3a5f] text-white'
                    : 'bg-white text-[#0a1e3f] hover:bg-white/90'
                }`}
              >
                {t('nav.getQuote')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled || !isHomePage
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors duration-300 ${
                      isActive && isHomePage
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-800 hover:bg-gray-50 hover:text-blue-600'
                    }`}
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              >
                <Globe className="w-5 h-5" />
                <span className="font-medium">
                  {currentLanguage === 'vi' ? 'Tiếng Việt' : 'English'}
                </span>
              </button>

              {/* CTA Button */}
              <Button 
                onClick={handleContactClick}
                className="w-full mt-4 bg-[#0a1e3f] hover:bg-[#1e3a5f] text-white"
              >
                {t('nav.getQuote')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

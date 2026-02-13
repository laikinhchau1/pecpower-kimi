import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigation } from './Navigation';
import { Footer } from '@/sections/Footer';
import { ScrollToTop } from './ScrollToTop';

export function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleScrollToSection = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onScrollToSection={handleScrollToSection} />
      <main>
        <Outlet />
      </main>
      <Footer onScrollToSection={handleScrollToSection} />
      <ScrollToTop />
    </div>
  );
}

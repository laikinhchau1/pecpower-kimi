import { useState, useCallback } from 'react';
import { Navigation, ScrollToTop, ContactModal, ProjectDetailModal, NewsDetailModal, ServiceDetailModal } from '@/components/custom';
import {
  Hero,
  Stats,
  About,
  Services,
  Projects,
  Technology,
  Testimonials,
  News,
  CTA,
  Footer,
} from '@/sections';
import { I18nProvider } from '@/i18n/simple-i18n';
import './App.css';

function AppContent() {
  // Contact Modal State
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Project Detail Modal State
  const [isProjectDetailOpen, setIsProjectDetailOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // News Detail Modal State
  const [isNewsDetailOpen, setIsNewsDetailOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  // Service Detail Modal State
  const [isServiceDetailOpen, setIsServiceDetailOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Contact Modal Handlers
  const openContactModal = useCallback(() => {
    setIsContactOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setIsContactOpen(false);
  }, []);

  // Project Detail Handlers
  const openProjectDetail = useCallback((projectKey: string) => {
    setSelectedProject(projectKey);
    setIsProjectDetailOpen(true);
  }, []);

  const closeProjectDetail = useCallback(() => {
    setIsProjectDetailOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  }, []);

  // News Detail Handlers
  const openNewsDetail = useCallback((articleKey: string) => {
    setSelectedArticle(articleKey);
    setIsNewsDetailOpen(true);
  }, []);

  const closeNewsDetail = useCallback(() => {
    setIsNewsDetailOpen(false);
    setTimeout(() => setSelectedArticle(null), 300);
  }, []);

  // Service Detail Handlers
  const openServiceDetail = useCallback((serviceKey: string) => {
    setSelectedService(serviceKey);
    setIsServiceDetailOpen(true);
  }, []);

  const closeServiceDetail = useCallback(() => {
    setIsServiceDetailOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  }, []);

  // Scroll to section helper
  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onContactClick={openContactModal} />
      
      <main>
        <Hero />
        <Stats />
        <About onContactClick={openContactModal} />
        <Services onLearnMore={openServiceDetail} />
        <Projects onViewDetails={openProjectDetail} />
        <Technology />
        <Testimonials />
        <News onReadMore={openNewsDetail} />
        <CTA onContactClick={openContactModal} />
      </main>
      
      <Footer onScrollToSection={scrollToSection} />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={closeContactModal} 
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        isOpen={isProjectDetailOpen}
        onClose={closeProjectDetail}
        projectKey={selectedProject}
        onContactClick={openContactModal}
      />

      {/* News Detail Modal */}
      <NewsDetailModal
        isOpen={isNewsDetailOpen}
        onClose={closeNewsDetail}
        articleKey={selectedArticle}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        isOpen={isServiceDetailOpen}
        onClose={closeServiceDetail}
        serviceKey={selectedService}
        onContactClick={openContactModal}
      />
    </div>
  );
}

function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}

export default App;

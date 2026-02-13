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
} from '@/sections';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleViewProject = (projectKey: string) => {
    navigate(`/projects/${projectKey}`);
  };

  const handleViewService = (serviceKey: string) => {
    navigate(`/services/${serviceKey}`);
  };

  const handleViewNews = (articleKey: string) => {
    navigate(`/news/${articleKey}`);
  };

  return (
    <>
      <Hero />
      <Stats />
      <About onContactClick={handleContactClick} />
      <Services onLearnMore={handleViewService} />
      <Projects onViewDetails={handleViewProject} />
      <Technology />
      <Testimonials />
      <News onReadMore={handleViewNews} />
      <CTA onContactClick={handleContactClick} />
    </>
  );
}

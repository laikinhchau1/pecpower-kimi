import { MapPin, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslation } from '@/i18n/simple-i18n';

const projects = [
  {
    key: 'project1',
    image: 'https://images.unsplash.com/photo-1518182170546-0766bc6f9213?w=800&h=500&fit=crop',
  },
  {
    key: 'project2',
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&h=500&fit=crop',
  },
];

interface ProjectsProps {
  onViewDetails: (projectKey: string) => void;
}

export function Projects({ onViewDetails }: ProjectsProps) {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 gradient-hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
            {t('projects.tagline')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-white/70 text-lg">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.key}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 200}ms` }}
            >
              {/* Image */}
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={project.image}
                  alt={t(`projects.${project.key}.title`)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3f] via-[#0a1e3f]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                {/* Capacity Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 backdrop-blur-sm text-cyan-300 text-sm font-medium mb-4">
                  <Zap className="w-4 h-4" />
                  {t(`projects.${project.key}.capacity`)}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {t(`projects.${project.key}.title`)}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-white/70 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{t(`projects.${project.key}.location`)}</span>
                </div>

                {/* Description */}
                <p className="text-white/60 mb-6">
                  {t(`projects.${project.key}.description`)}
                </p>

                {/* CTA */}
                <Button
                  variant="outline"
                  onClick={() => onViewDetails(project.key)}
                  className="border-white/30 text-black hover:bg-white/10 hover:text-white group/btn"
                >
                  {t('projects.viewDetails')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslation } from '@/i18n/simple-i18n';

const features = ['certified', 'technology', 'monitoring', 'community'];

interface AboutProps {
  onContactClick: () => void;
}

export function About({ onContactClick }: AboutProps) {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&h=600&fit=crop"
                alt="Hydroelectric Dam"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3f]/60 via-transparent to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold text-[#0a1e3f]">15+</div>
                  <div className="text-sm text-gray-600">Power Plants</div>
                </div>
                <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold text-[#0a1e3f]">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              {t('about.tagline')}
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1e3f] mb-6">
              {t('about.title')}
            </h2>

            {/* Descriptions */}
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {t('about.description2')}
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    {t(`about.features.${feature}`)}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              size="lg"
              onClick={onContactClick}
              className="bg-[#0a1e3f] hover:bg-[#1e3a5f] text-white group"
            >
              {t('about.cta')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

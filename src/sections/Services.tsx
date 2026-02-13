import { Zap, Settings, Leaf, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslation } from '@/i18n/simple-i18n';

const services = [
  {
    key: 'powerGeneration',
    icon: Zap,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    key: 'plantOperations',
    icon: Settings,
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
  },
  {
    key: 'environmental',
    icon: Leaf,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
  },
];

interface ServicesProps {
  onLearnMore: (serviceKey: string) => void;
}

export function Services({ onLearnMore }: ServicesProps) {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 bg-white"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            {t('services.tagline')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1e3f] mb-4">
            {t('services.title')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.key}
                className={`group relative p-8 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0a1e3f] mb-3">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t(`services.${service.key}.description`)}
                </p>

                {/* Link */}
                <button
                  onClick={() => onLearnMore(service.key)}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium group/link"
                >
                  <span className="underline-animation">
                    {t('services.learnMore')}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>

                {/* Hover gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Cog, Wifi, Brain, Fish } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslation } from '@/i18n/simple-i18n';

const features = [
  {
    key: 'turbines',
    icon: Cog,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    key: 'smartGrid',
    icon: Wifi,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100',
  },
  {
    key: 'maintenance',
    icon: Brain,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    key: 'eco',
    icon: Fish,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
];

export function Technology() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="technology"
      ref={ref}
      className="py-24 bg-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              {t('technology.tagline')}
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1e3f] mb-6">
              {t('technology.title')}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              {t('technology.description')}
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.key}
                    className={`flex gap-4 transition-all duration-500 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>

                    {/* Text */}
                    <div>
                      <h4 className="font-bold text-[#0a1e3f] mb-1">
                        {t(`technology.features.${feature.key}.title`)}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {t(`technology.features.${feature.key}.description`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop"
                  alt="Hydroelectric Technology"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Cog className="w-6 h-6 text-white animate-spin" style={{ animationDuration: '3s' }} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0a1e3f]">98%</div>
                    <div className="text-sm text-gray-600">Efficiency Rate</div>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

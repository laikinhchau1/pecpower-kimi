import { useEffect, useState } from 'react';
import { Zap, Building2, Home, Award } from 'lucide-react';
import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import { useTranslation } from '@/i18n/simple-i18n';

const stats = [
  { key: 'capacity', icon: Zap, color: 'from-blue-500 to-cyan-500' },
  { key: 'plants', icon: Building2, color: 'from-cyan-500 to-teal-500' },
  { key: 'homes', icon: Home, color: 'from-teal-500 to-green-500' },
  { key: 'experience', icon: Award, color: 'from-green-500 to-blue-500' },
];

function StatCard({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) {
  const { t } = useTranslation();
  const value = t(`stats.${stat.key}.value`);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const { count, startAnimation } = useCountUp(numericValue, 2000);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      startAnimation();
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated, startAnimation]);

  const Icon = stat.icon;
  const displayValue = value.replace(/[0-9,]+/, count.toLocaleString());

  return (
    <div
      className={`relative group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 hover-lift ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Value */}
      <div className="text-4xl font-bold text-[#0a1e3f] mb-2">
        {displayValue}
        <span className="text-xl text-gray-500 ml-1">
          {t(`stats.${stat.key}.unit`) || ''}
        </span>
      </div>

      {/* Label */}
      <div className="text-gray-600 font-medium">
        {t(`stats.${stat.key}.label`)}
      </div>

      {/* Decorative gradient line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </div>
  );
}

export function Stats() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="stats"
      ref={ref}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.key}
              stat={stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

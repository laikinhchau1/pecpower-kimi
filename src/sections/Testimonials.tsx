import { Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslation } from '@/i18n/simple-i18n';

const testimonials = ['testimonial1', 'testimonial2', 'testimonial3'];

const avatars = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
];

export function Testimonials() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="testimonials"
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
            {t('testimonials.tagline')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1e3f]">
            {t('testimonials.title')}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial}
              className={`relative p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500 group ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-blue-500" />
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "{t(`testimonials.${testimonial}.quote`)}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={avatars[index]}
                  alt={t(`testimonials.${testimonial}.name`)}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-md"
                />
                <div>
                  <div className="font-bold text-[#0a1e3f]">
                    {t(`testimonials.${testimonial}.name`)}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {t(`testimonials.${testimonial}.role`)}
                  </div>
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

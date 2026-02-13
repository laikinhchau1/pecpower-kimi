import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslation } from '@/i18n/simple-i18n';

const articles = ['article1', 'article2', 'article3'];

const images = [
  'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
];

const categoryColors: Record<string, string> = {
  'Projects': 'bg-blue-100 text-blue-700',
  'Dự Án': 'bg-blue-100 text-blue-700',
  'Awards': 'bg-amber-100 text-amber-700',
  'Giải Thưởng': 'bg-amber-100 text-amber-700',
  'News': 'bg-green-100 text-green-700',
  'Tin Tức': 'bg-green-100 text-green-700',
};

interface NewsProps {
  onReadMore: (articleKey: string) => void;
}

export function News({ onReadMore }: NewsProps) {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="news"
      ref={ref}
      className="py-24 bg-gray-50"
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
            {t('news.tagline')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1e3f] mb-4">
            {t('news.title')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('news.subtitle')}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => {
            const category = t(`news.${article}.category`);
            return (
              <article
                key={article}
                className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden cursor-pointer" onClick={() => onReadMore(article)}>
                  <img
                    src={images[index]}
                    alt={t(`news.${article}.title`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${categoryColors[category] || 'bg-gray-100 text-gray-700'}`}>
                    <Tag className="w-3 h-3" />
                    {category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {t(`news.${article}.date`)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0a1e3f] mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 cursor-pointer" onClick={() => onReadMore(article)}>
                    {t(`news.${article}.title`)}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {t(`news.${article}.excerpt`)}
                  </p>

                  {/* Read More */}
                  <button
                    onClick={() => onReadMore(article)}
                    className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm group/link"
                  >
                    <span className="underline-animation">
                      {t('news.readMore')}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WaterParticles } from '@/components/custom/WaterParticles';
import { useTranslation } from '@/i18n/simple-i18n';

export function Hero() {
  const { t, currentLanguage } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center gradient-hero overflow-hidden"
    >
      {/* 3D Water Particles */}
      <WaterParticles />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1e3f]/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Tagline */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 transition-all duration-700 ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-medium tracking-wider">
                {t('hero.tagline')}
              </span>
            </div>

            {/* Title */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-700 ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              {t('hero.title')}
            </h1>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl text-white/80 mb-8 max-w-xl transition-all duration-700 ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="bg-white text-[#0a1e3f] hover:bg-white/90 font-semibold px-8 group"
              >
                {t('hero.ctaPrimary')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#about')}
                className="border-white/30 text-black hover:bg-white/10 font-semibold px-8"
              >
                {t('hero.ctaSecondary')}
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Visual */}
          <div
            className={`hidden lg:flex justify-center items-center transition-all duration-1000 ${
              isLoaded
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative w-96 h-96">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin" style={{ animationDuration: '20s' }} />
              
              {/* Middle Ring */}
              <div className="absolute inset-8 rounded-full border-2 border-cyan-400/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              
              {/* Inner Ring */}
              <div className="absolute inset-16 rounded-full border-2 border-blue-400/40 animate-spin" style={{ animationDuration: '10s' }} />
              
              {/* Center Icon */}
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl">
                <div className="text-white text-center">
                  <div className="text-5xl font-bold">2.5K+</div>
                  <div className="text-sm opacity-80">MW Capacity</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center animate-float">
                <span className="text-2xl">💧</span>
              </div>
              <div className="absolute bottom-8 left-0 w-12 h-12 rounded-full bg-cyan-400/20 backdrop-blur-sm flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-xl">⚡</span>
              </div>
              <div className="absolute bottom-8 right-0 w-14 h-14 rounded-full bg-blue-400/20 backdrop-blur-sm flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-xl">🌱</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '800ms' }}
      >
        <button
          onClick={() => scrollToSection('#stats')}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-sm">{currentLanguage === 'vi' ? 'Cuộn xuống' : 'Scroll Down'}</span>
          <ChevronDown className="w-6 h-6 animate-bounce-slow" />
        </button>
      </div>
    </section>
  );
}

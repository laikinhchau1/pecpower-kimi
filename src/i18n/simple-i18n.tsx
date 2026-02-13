import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import enTranslations from './locales/en.json';
import viTranslations from './locales/vi.json';

type Translations = typeof enTranslations;

type Language = 'en' | 'vi';

interface I18nContextType {
  t: (key: string) => string;
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const translations: Record<Language, Translations> = {
  en: enTranslations,
  vi: viTranslations,
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.');
  let value: unknown = obj;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  
  return typeof value === 'string' ? value : path;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('vi');

  const t = useCallback(
    (key: string): string => {
      return getNestedValue(translations[currentLanguage] as Record<string, unknown>, key);
    },
    [currentLanguage]
  );

  const changeLanguage = useCallback((lang: Language) => {
    setCurrentLanguage(lang);
    document.documentElement.lang = lang;
  }, []);

  const toggleLanguage = useCallback(() => {
    setCurrentLanguage((prev) => {
      const newLang = prev === 'vi' ? 'en' : 'vi';
      document.documentElement.lang = newLang;
      return newLang;
    });
  }, []);

  return (
    <I18nContext.Provider
      value={{ t, currentLanguage, changeLanguage, toggleLanguage }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
}

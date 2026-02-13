import { createContext, useContext, useState, useCallback, type ReactNode, useEffect } from 'react';
import enTranslations from './locales/en.json';
import viTranslations from './locales/vi.json';

type Translations = typeof enTranslations;

type Language = 'en' | 'vi';

interface I18nContextType {
  t: (key: string) => string;
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  refreshTranslations: () => void;
}

const ADMIN_STORAGE_KEY = 'hydropower_admin_data';

// Merge admin data with original translations
function getMergedTranslations(lang: Language): Translations {
  const original = lang === 'en' ? enTranslations : viTranslations;
  
  try {
    const stored = localStorage.getItem(ADMIN_STORAGE_KEY);
    if (stored) {
      const adminData = JSON.parse(stored);
      if (adminData[lang]) {
        return deepMerge(original, adminData[lang]);
      }
    }
  } catch (e) {
    console.error('Failed to load admin translations:', e);
  }
  
  return original;
}

// Deep merge two objects
function deepMerge<T>(target: T, source: Partial<T>): T {
  const result = { ...target };
  
  for (const key in source) {
    if (source[key] !== null && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] as any, source[key] as any);
    } else {
      result[key] = source[key] as any;
    }
  }
  
  return result;
}

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
  const [translations, setTranslations] = useState<Record<Language, Translations>>({
    en: enTranslations,
    vi: viTranslations,
  });

  // Load merged translations on mount
  useEffect(() => {
    setTranslations({
      en: getMergedTranslations('en'),
      vi: getMergedTranslations('vi'),
    });
  }, []);

  const refreshTranslations = useCallback(() => {
    setTranslations({
      en: getMergedTranslations('en'),
      vi: getMergedTranslations('vi'),
    });
  }, []);

  const t = useCallback(
    (key: string): string => {
      return getNestedValue(translations[currentLanguage] as Record<string, unknown>, key);
    },
    [currentLanguage, translations]
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
      value={{ t, currentLanguage, changeLanguage, toggleLanguage, refreshTranslations }}
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

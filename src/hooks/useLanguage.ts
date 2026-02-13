import { useTranslation } from '@/i18n/simple-i18n';

export function useLanguage() {
  const { currentLanguage, changeLanguage, toggleLanguage, t } = useTranslation();

  return {
    currentLanguage,
    changeLanguage,
    toggleLanguage,
    t,
  };
}

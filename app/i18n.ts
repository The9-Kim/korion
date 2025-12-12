import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ko from "./locales/ko.json";
import en from "./locales/en.json";


const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const lang = window.navigator.language || window.navigator.languages?.[0] || 'en';
    return lang.startsWith('ko') ? 'ko' : 'en';
  }
  return 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ko: { translation: ko },
      en: { translation: en },
    },
    lng: getInitialLanguage(),
    fallbackLng: "ko",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

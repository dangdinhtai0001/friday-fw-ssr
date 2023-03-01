import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '@/locales/en.json'; // import file ngôn ngữ mặc định
import vi from '@/locales/vi.json'; // import file ngôn ngữ tiếng Việt

i18n
  .use(LanguageDetector) // sử dụng trình phát hiện ngôn ngữ
  .use(initReactI18next) // sử dụng React hook
  .init({
    resources: {
      en: {
        translation: en, // đặt tên key theo ngôn ngữ, ví dụ: en cho tiếng Anh
      },
      vi: {
        translation: vi, // đặt tên key theo ngôn ngữ, ví dụ: vi cho tiếng Việt
      },
    },
    fallbackLng: 'en', // ngôn ngữ mặc định sẽ là tiếng Anh
    debug: false, // bật debug để hiển thị log
    interpolation: {
      escapeValue: false, // không escape HTML
    },
  });

export default i18n;

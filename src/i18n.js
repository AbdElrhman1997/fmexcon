import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationAr from "./locales/ar.json";
import translationEn from "./locales/en.json";

// Define translations
const resources = {
  en: {
    translation: translationEn,
  },
  ar: {
    translation: translationAr,
  },
};

// Retrieve the saved language from localStorage or default to Arabic
const savedLanguage = localStorage.getItem("i18nLang") || "ar";

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: savedLanguage, // Use saved language or default to "ar"
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;

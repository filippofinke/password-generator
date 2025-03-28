import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en";
import it from "./locales/it";
import de from "./locales/de";

// the translations
const resources = {
  en: {
    translation: en,
  },
  it: {
    translation: it,
  },
  de: {
    translation: de,
  },
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["navigator", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["localStorage"],
    },
  });

export default i18n;

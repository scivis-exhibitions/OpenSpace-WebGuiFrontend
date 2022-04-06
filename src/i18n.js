import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationENG from '../public/translations/eng.json';
import translationSWE from '../public/translations/swe.json';

// the translations
const resources = {
  eng: {
    translation: translationENG
  },
  swe: {
    translation: translationSWE
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "swe",
    fallbackLng: 'swe',
    debug: false,
    returnObjects: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: {
      suspense: false
    }
  });

export default i18n;
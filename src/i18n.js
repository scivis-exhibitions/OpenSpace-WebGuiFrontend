import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    resources: {
        en: {
          translations: {
            "Story_Climate_Global_Title": "Climate on Earth Shit",
            "Story_Climate_Arctic_Title": "Climate in the Arctic",
            "Story_Climate_Polarstern_Title": "Mission of Polarstern in April 2020"
          }
        },
        sv: {
          translations: {
            "Story_Climate_Global_Title": "Jordens klimats",
            "Story_Climate_Arctic_Title": "Arktis klimat",
            "Story_Climate_Polarstern_Title": "Polarsterns uppdrag under April 2020"
          }
        }
    },
    fallbackLng: 'en',
    debug: true,
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ","
    },
    react: {
      suspense: false
    }
  });

export default i18n;
import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next"

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en-US",
    lng: "en-US",
    debug: true,

    interpolation: {
      escapeValue: false
    },

    ns: ["landing"],
    defaultNS: "landing"
  })

export default i18n

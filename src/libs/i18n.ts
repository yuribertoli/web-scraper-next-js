import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from '../../public/locales/en-US/translation.json'
import translationIT from '../../public/locales/it-IT/translation.json'
import translationFR from '../../public/locales/fr-FR/translation.json'

const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
  fr: {
    translation: translationFR,
  },
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

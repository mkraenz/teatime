import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import i18next, { LanguageDetectorAsyncModule } from 'i18next';
import { noop } from 'lodash';
import { initReactI18next } from 'react-i18next';
import { Language, translations } from './translations';

const persistedLangStorageKey = 'daily-questions/language';
// https://www.i18next.com/misc/creating-own-plugins#languagedetector
const langDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector' as const,
  async: true, // flags below detection to be async
  detect: async () => {
    const cachedLang = await AsyncStorage.getItem(persistedLangStorageKey);
    return cachedLang ?? Localization.locale.slice(0, 2);
  },
  init: noop,
  cacheUserLanguage: (lng) => {
    AsyncStorage.setItem('daily-questions/language', lng);
  },
};

export const createI18n = (
  languageDetector: LanguageDetectorAsyncModule | null = langDetector,
  lng?: Language | 'cimode'
) => {
  if (languageDetector) i18next.use(languageDetector);
  i18next.use(initReactI18next).init({
    compatibilityJSON: 'v4',
    resources: translations,
    fallbackLng: 'en',
    // debug: true,
    lng,
    appendNamespaceToCIMode: true,

    interpolation: {
      escapeValue: false, // react already safes from xss attacks
    },
    cleanCode: true,
  });
  return i18next;
};

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translationEN.json';
import translationHI from './locales/hi/translationHI.json';
import translationPT from './locales/pt/translaationPT.json';

// the translations
const resources = {
	en: {
		translation: translationEN
	},
	hi: {
		translation: translationHI
	},
	pt: {
		translation: translationPT
	}
};
i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: 'hi',
		keySeparator: false, // we do not use keys in form messages.welcome
		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
  en: {
    translation: {
      Number: 'Number',
      Settings: 'Settings',
      'Minimum Number': 'Minimum Number',
      'Maximum Number': 'Maximum Number',
      'This will set the minimum number':
        'This will set the minimum number',
      'This will set the maximum number':
        'This will set the maximum number',
      Operations: 'Operations',
      'Select operations you want': 'Select operations you want',
    },
  },
  de: {
    translation: {
      Number: 'Nummer',
      Settings: 'Einstellungen',
      'Minimum Number': 'Mindestanzahl',
      'Maximum Number': 'Maximale Anzahl',
      'This will set the minimum number':
        'Dadurch wird die Mindestanzahl festgelegt',
      'This will set the maximum number':
        'Dadurch wird die maximale Anzahl festgelegt ',
      Operations: 'Betrieb',
      'Select operations you want':
        'Wählen Sie die gewünschten Operationen aus',
    },
  },
  est: {
    translation: {
      Number: 'Number',
      Settings: 'Seaded',
      'Minimum Number': 'Minimaalne Number',
      'Maximum Number': 'Maksimaalne Number',
      'This will set the minimum number': 'See määrab minimaalse numbri',
      'This will set the maximum number': 'See määrab maksimaalse numbri',
      Operations: 'Operatsioonid',
      'Select operations you want': 'Vali operatsioonid',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

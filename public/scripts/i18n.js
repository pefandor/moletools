// MoleTools Internationalization (i18n) System
// Pure JavaScript translation system with localStorage persistence

var MoleI18n = (function() {
  var currentLang = localStorage.getItem('lang') || 'en';
  var translations = {
    en: {},
    ru: {}
  };

  // Get current language
  function getCurrentLang() {
    return currentLang;
  }

  // Add translations (merge with existing)
  function addTranslations(lang, newTranslations) {
    if (translations[lang]) {
      Object.assign(translations[lang], newTranslations);
    }
  }

  // Get translation by key
  function t(key) {
    return translations[currentLang][key] || translations.en[key] || key;
  }

  // Set language and update all elements with data-i18n
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update all [data-i18n] elements (textContent)
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });

    // Update all [data-i18n-placeholder] elements (placeholder attribute)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var translated = translations[lang][key] || translations.en[key];
      if (translated) {
        el.placeholder = translated;
      }
    });

    // Dispatch custom event for language change
    var event = new CustomEvent('languagechange', { detail: { lang: lang } });
    document.dispatchEvent(event);
  }

  // Initialize - set language without updating DOM (useful for initial load)
  function init() {
    currentLang = localStorage.getItem('lang') || 'en';
  }

  return {
    getCurrentLang: getCurrentLang,
    addTranslations: addTranslations,
    t: t,
    setLanguage: setLanguage,
    init: init
  };
})();

// Auto-export for use in other scripts
if (typeof window !== 'undefined') {
  window.MoleI18n = MoleI18n;
}

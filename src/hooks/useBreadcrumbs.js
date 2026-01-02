import { useState, useCallback } from 'react';

/**
 * Хук для керування breadcrumbs навігацією
 */
export const useBreadcrumbs = (currentLang = 'de') => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  // Переклади для різних розділів
  const translations = {
    calculators: {
      de: 'Rechner',
      en: 'Calculators',
      uk: 'Калькулятори',
      ru: 'Калькуляторы'
    },
    strength: {
      de: 'Festigkeitslehre',
      en: 'Strength of Materials',
      uk: 'Опір матеріалів',
      ru: 'Сопротивление материалов'
    },
    hydraulic: {
      de: 'Hydraulik',
      en: 'Hydraulics',
      uk: 'Гідравліка',
      ru: 'Гидравлика'
    },
    thermodynamic: {
      de: 'Thermodynamik',
      en: 'Thermodynamics',
      uk: 'Термодинаміка',
      ru: 'Термодинамика'
    },
    energy: {
      de: 'Energietechnik',
      en: 'Energy Technology',
      uk: 'Енергетика',
      ru: 'Энергетика'
    },
    contact: {
      de: 'Kontakt',
      en: 'Contact',
      uk: 'Контакти',
      ru: 'Контакты'
    },
    faq: {
      de: 'FAQ',
      en: 'FAQ',
      uk: 'FAQ',
      ru: 'FAQ'
    },
    impressum: {
      de: 'Impressum',
      en: 'Legal Notice',
      uk: 'Імпресум',
      ru: 'Импрессум'
    }
  };

  // Отримати переклад для ключа
  const getTranslation = useCallback((key) => {
    return translations[key]?.[currentLang] || key;
  }, [currentLang]);

  // Встановити breadcrumbs для головної сторінки
  const setHomeBreadcrumbs = useCallback(() => {
    setBreadcrumbs([]);
  }, []);

  // Встановити breadcrumbs для розділу калькуляторів
  const setCalculatorsBreadcrumbs = useCallback(() => {
    setBreadcrumbs([
      { label: getTranslation('calculators'), url: '#calculators' }
    ]);
  }, [getTranslation]);

  // Встановити breadcrumbs для конкретного калькулятора
  const setCalculatorDetailBreadcrumbs = useCallback((categoryKey, calculatorName) => {
    setBreadcrumbs([
      { label: getTranslation('calculators'), url: '#calculators' },
      { label: getTranslation(categoryKey), url: `#calculators` },
      { label: calculatorName } // Останній елемент без URL (поточна сторінка)
    ]);
  }, [getTranslation]);

  // Встановити breadcrumbs для контактів
  const setContactBreadcrumbs = useCallback(() => {
    setBreadcrumbs([
      { label: getTranslation('contact'), url: '#contact' }
    ]);
  }, [getTranslation]);

  // Встановити breadcrumbs для FAQ
  const setFAQBreadcrumbs = useCallback(() => {
    setBreadcrumbs([
      { label: getTranslation('faq'), url: '#faq' }
    ]);
  }, [getTranslation]);

  // Встановити breadcrumbs для Impressum
  const setImpressumBreadcrumbs = useCallback(() => {
    setBreadcrumbs([
      { label: getTranslation('impressum'), url: '#impressum' }
    ]);
  }, [getTranslation]);

  // Встановити кастомні breadcrumbs
  const setCustomBreadcrumbs = useCallback((items) => {
    setBreadcrumbs(items);
  }, []);

  return {
    breadcrumbs,
    setHomeBreadcrumbs,
    setCalculatorsBreadcrumbs,
    setCalculatorDetailBreadcrumbs,
    setContactBreadcrumbs,
    setFAQBreadcrumbs,
    setImpressumBreadcrumbs,
    setCustomBreadcrumbs
  };
};
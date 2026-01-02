// Structured Data для калькуляторів
// Це допомагає Google краще розуміти ваш контент

/**
 * Генерує Schema.org markup для окремого калькулятора
 */
export const getCalculatorSchema = (calculatorData) => {
  const { name, description, category, lang = 'de' } = calculatorData;
  
  const translations = {
    de: {
      applicationCategory: 'Ingenieurtechnische Rechner',
      offer: 'Kostenlos'
    },
    en: {
      applicationCategory: 'Engineering Calculators',
      offer: 'Free'
    },
    uk: {
      applicationCategory: 'Інженерні калькулятори',
      offer: 'Безкоштовно'
    },
    ru: {
      applicationCategory: 'Инженерные калькуляторы',
      offer: 'Бесплатно'
    }
  };

  const t = translations[lang] || translations.de;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "applicationCategory": t.applicationCategory,
    "applicationSubCategory": category,
    "operatingSystem": "Web Browser",
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    },
    "creator": {
      "@type": "Person",
      "name": "Viktor Sukaylo"
    },
    "inLanguage": ["de", "en", "uk", "ru"],
    "featureList": description,
    "browserRequirements": "Requires JavaScript. Modern browser recommended.",
    "softwareVersion": "1.0",
    "datePublished": "2026-01-02",
    "dateModified": new Date().toISOString().split('T')[0]
  };
};

/**
 * Генерує Schema.org для категорії калькуляторів
 */
export const getCategorySchema = (categoryData) => {
  const { name, description, calculators, lang = 'de' } = categoryData;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": name,
    "description": description,
    "numberOfItems": calculators.length,
    "itemListElement": calculators.map((calc, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": calc.name,
        "description": calc.description,
        "url": `https://tarasmysiuratutor.github.io/EngSim/#${calc.id}`
      }
    }))
  };
};

/**
 * Інжектує Schema.org в DOM
 */
export const injectSchema = (schema) => {
  // Видаляємо старий schema якщо є
  const oldScript = document.getElementById('calculator-schema');
  if (oldScript) {
    oldScript.remove();
  }

  // Додаємо новий
  const script = document.createElement('script');
  script.id = 'calculator-schema';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Дані про категорії калькуляторів (приклад)
 * Замініть на свої реальні дані
 */
export const calculatorCategories = {
  de: {
    strength: {
      name: 'Festigkeitslehre',
      description: 'Rechner für Festigkeitsberechnungen: Spannung, Biegung, Torsion, Verformung',
      calculators: [
        { id: 'stress', name: 'Spannungsberechnung', description: 'Berechnung von Normal- und Schubspannungen' },
        { id: 'beam', name: 'Balkenberechnung', description: 'Durchbiegung und Biegespannung von Balken' },
        { id: 'torsion', name: 'Torsionsberechnung', description: 'Verdrehwinkel und Schubspannung bei Torsion' },
        { id: 'deformation', name: 'Verformungsberechnung', description: 'Längenänderung unter Belastung' },
        { id: 'column', name: 'Knickberechnung', description: 'Kritische Knicklast nach Euler' },
        { id: 'spring', name: 'Federberechnung', description: 'Federkonstante und Durchbiegung' },
        { id: 'fatigue', name: 'Ermüdungsberechnung', description: 'Lebensdauer bei zyklischer Belastung' },
        { id: 'bolts', name: 'Schraubenberechnung', description: 'Schraubenverbindung dimensionieren' }
      ]
    },
    hydraulic: {
      name: 'Hydraulik',
      description: 'Hydraulikrechner: Rohrleitungen, Pumpen, Strömung, Druckverlust',
      calculators: [
        { id: 'pipe', name: 'Rohrberechnung', description: 'Druckverlust in Rohrleitungen' },
        { id: 'pump', name: 'Pumpenauslegung', description: 'Erforderliche Pumpenleistung' },
        { id: 'ventilation', name: 'Lüftungsberechnung', description: 'Volumenstrom und Luftwechsel' },
        { id: 'orifice', name: 'Ausflussberechnung', description: 'Durchfluss aus Öffnungen' },
        { id: 'resistance', name: 'Strömungswiderstand', description: 'Widerstandsbeiwert und Druckverlust' },
        { id: 'tank', name: 'Behälterentleerung', description: 'Entleerungszeit von Behältern' },
        { id: 'cavitation', name: 'Kavitationsberechnung', description: 'NPSH und Kavitationsgefahr' },
        { id: 'local', name: 'Lokale Verluste', description: 'Druckverlust in Armaturen' }
      ]
    },
    thermodynamic: {
      name: 'Thermodynamik',
      description: 'Thermodynamik Rechner: Wärmeübertragung, Wirkungsgrad, Prozesse',
      calculators: [
        { id: 'heat-transfer', name: 'Wärmeübertragung', description: 'Wärmestrom durch Wände' },
        { id: 'insulation', name: 'Wärmedämmung', description: 'U-Wert und Dämmstärke' },
        { id: 'efficiency', name: 'Wirkungsgrad', description: 'Thermischer Wirkungsgrad von Prozessen' },
        { id: 'ideal-gas', name: 'Ideales Gas', description: 'Zustandsgleichung idealer Gase' },
        { id: 'enthalpy', name: 'Enthalpie', description: 'Enthalpieänderung berechnen' },
        { id: 'entropy', name: 'Entropie', description: 'Entropieänderung und Irreversibilität' },
        { id: 'carnot', name: 'Carnot-Prozess', description: 'Maximaler Wirkungsgrad nach Carnot' },
        { id: 'heat-capacity', name: 'Wärmekapazität', description: 'Spezifische Wärmekapazität' }
      ]
    },
    energy: {
      name: 'Energietechnik',
      description: 'Energietechnik Rechner: Effizienz, Solar, Wind, Wärmepumpen',
      calculators: [
        { id: 'energy-saving', name: 'Energieeinsparung', description: 'ROI von Energiesparmaßnahmen' },
        { id: 'equipment-power', name: 'Anlagenleistung', description: 'Leistungsaufnahme von Geräten' },
        { id: 'solar', name: 'Solarenergie', description: 'PV-Ertrag berechnen' },
        { id: 'wind', name: 'Windenergie', description: 'Windkraftleistung berechnen' },
        { id: 'heat-pump', name: 'Wärmepumpe', description: 'JAZ und Effizienz' },
        { id: 'battery', name: 'Batteriespeicher', description: 'Kapazität und Entladezeit' },
        { id: 'transformer', name: 'Transformator', description: 'Übersetzungsverhältnis und Verluste' },
        { id: 'power-line', name: 'Leitung', description: 'Leitungsverluste berechnen' }
      ]
    }
  },
  en: {
    strength: {
      name: 'Strength of Materials',
      description: 'Calculators for strength calculations: stress, bending, torsion, deformation',
      calculators: [
        { id: 'stress', name: 'Stress Calculator', description: 'Calculate normal and shear stress' },
        { id: 'beam', name: 'Beam Calculator', description: 'Deflection and bending stress of beams' },
        { id: 'torsion', name: 'Torsion Calculator', description: 'Angle of twist and shear stress' },
        { id: 'deformation', name: 'Deformation Calculator', description: 'Length change under load' },
        { id: 'column', name: 'Column Stability', description: 'Critical buckling load (Euler)' },
        { id: 'spring', name: 'Spring Calculator', description: 'Spring constant and deflection' },
        { id: 'fatigue', name: 'Fatigue Calculator', description: 'Life under cyclic loading' },
        { id: 'bolts', name: 'Bolt Calculator', description: 'Design bolt connections' }
      ]
    }
    // Додайте інші категорії англійською...
  }
  // Додайте uk та ru версії...
};

/**
 * Хук для використання в React компонентах
 */
export const useCalculatorSchema = (calculatorId, category, currentLang = 'de') => {
  const categoryData = calculatorCategories[currentLang]?.[category];
  
  if (!categoryData) return null;

  const calculator = categoryData.calculators.find(c => c.id === calculatorId);
  
  if (!calculator) return null;

  return getCalculatorSchema({
    name: calculator.name,
    description: calculator.description,
    category: categoryData.name,
    lang: currentLang
  });
};
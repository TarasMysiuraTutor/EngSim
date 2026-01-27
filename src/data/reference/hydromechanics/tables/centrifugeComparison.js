// ============================================
// FILE: src/data/reference/hydromechanics/tables/centrifugeComparison.js
// ============================================

export const centrifugeComparisonTable = {
  id: "centrifuge-comparison",
  category: "centrifugation",
  title: {
    uk: "Порівняння типів центрифуг",
    ru: "Сравнение типов центрифуг",
    en: "Centrifuge Types Comparison",
    de: "Vergleich der Zentrifugentypen"
  },
  headers: {
    uk: ["Тип", "Фактор розділення", "Продуктивність", "Застосування"],
    ru: ["Тип", "Фактор разделения", "Производительность", "Применение"],
    en: ["Type", "Separation Factor", "Capacity", "Application"],
    de: ["Typ", "Trennfaktor", "Kapazität", "Anwendung"]
  },
  rows: [
    [
      {
        uk: "Осаджувальна",
        ru: "Отстойная",
        en: "Sedimenting",
        de: "Sedimentierende"
      },
      "500-5000",
      {
        uk: "Висока",
        ru: "Высокая",
        en: "High",
        de: "Hoch"
      },
      {
        uk: "Суспензії, емульсії",
        ru: "Суспензии, эмульсии",
        en: "Suspensions, emulsions",
        de: "Suspensionen, Emulsionen"
      }
    ],
    [
      {
        uk: "Фільтруюча",
        ru: "Фильтрующая",
        en: "Filtering",
        de: "Filtrierende"
      },
      "1000-3500",
      {
        uk: "Середня",
        ru: "Средняя",
        en: "Medium",
        de: "Mittel"
      },
      {
        uk: "Кристалічні суспензії",
        ru: "Кристаллические суспензии",
        en: "Crystalline suspensions",
        de: "Kristalline Suspensionen"
      }
    ],
    [
      {
        uk: "Надцентрифуга",
        ru: "Сверхцентрифуга",
        en: "Ultracentrifuge",
        de: "Ultrazentrifuge"
      },
      "> 50000",
      {
        uk: "Низька",
        ru: "Низкая",
        en: "Low",
        de: "Niedrig"
      },
      {
        uk: "Колоїдні розчини",
        ru: "Коллоидные растворы",
        en: "Colloidal solutions",
        de: "Kolloidale Lösungen"
      }
    ]
  ],
  source: {
    name: "Процеси і апарати хімічної технології",
    url: null
  }
};


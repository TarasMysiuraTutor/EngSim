// ============================================
// FILE: src/data/reference/hydromechanics/tables/filterTypes.js
// ============================================

export const filterTypesTable = {
  id: "filter-types",
  category: "filtration",
  title: {
    uk: "Типи фільтрів та їх характеристики",
    ru: "Типы фильтров и их характеристики",
    en: "Filter Types and Characteristics",
    de: "Filtertypen und Eigenschaften"
  },
  headers: {
    uk: ["Тип фільтру", "Принцип роботи", "Переваги", "Недоліки"],
    ru: ["Тип фильтра", "Принцип работы", "Преимущества", "Недостатки"],
    en: ["Filter Type", "Working Principle", "Advantages", "Disadvantages"],
    de: ["Filtertyp", "Funktionsprinzip", "Vorteile", "Nachteile"]
  },
  rows: [
    [
      {
        uk: "Нутч-фільтр",
        ru: "Нутч-фильтр",
        en: "Nutsche filter",
        de: "Nutschenfilter"
      },
      {
        uk: "Фільтрування під вакуумом",
        ru: "Фильтрование под вакуумом",
        en: "Vacuum filtration",
        de: "Vakuumfiltration"
      },
      {
        uk: "Простота, низька вартість",
        ru: "Простота, низкая стоимость",
        en: "Simplicity, low cost",
        de: "Einfachheit, niedrige Kosten"
      },
      {
        uk: "Періодична дія",
        ru: "Периодическое действие",
        en: "Batch operation",
        de: "Chargenbetrieb"
      }
    ],
    [
      {
        uk: "Барабанний вакуум-фільтр",
        ru: "Барабанный вакуум-фильтр",
        en: "Rotary drum vacuum filter",
        de: "Drehtrommelvakuumfilter"
      },
      {
        uk: "Безперервне фільтрування",
        ru: "Непрерывное фильтрование",
        en: "Continuous filtration",
        de: "Kontinuierliche Filtration"
      },
      {
        uk: "Автоматизація, продуктивність",
        ru: "Автоматизация, производительность",
        en: "Automation, high capacity",
        de: "Automatisierung, hohe Kapazität"
      },
      {
        uk: "Складність конструкції",
        ru: "Сложность конструкции",
        en: "Complex design",
        de: "Komplexes Design"
      }
    ],
    [
      {
        uk: "Фільтр-прес",
        ru: "Фильтр-пресс",
        en: "Filter press",
        de: "Filterpresse"
      },
      {
        uk: "Фільтрування під тиском",
        ru: "Фильтрование под давлением",
        en: "Pressure filtration",
        de: "Druckfiltration"
      },
      {
        uk: "Високий ступінь очищення",
        ru: "Высокая степень очистки",
        en: "High purification degree",
        de: "Hoher Reinigungsgrad"
      },
      {
        uk: "Складне обслуговування",
        ru: "Сложное обслуживание",
        en: "Complex maintenance",
        de: "Komplexe Wartung"
      }
    ]
  ],
  source: {
    name: "Обладнання хімічних виробництв",
    url: null
  }
};
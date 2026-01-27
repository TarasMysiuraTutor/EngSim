// ============================================
// FILE: src/data/reference/hydromechanics/tables/fluidizationRegimes.js
// ============================================

export const fluidizationRegimesTable = {
  id: "fluidization-regimes",
  category: "fluidization",
  title: {
    uk: "Режими псевдозрідження",
    ru: "Режимы псевдоожижения",
    en: "Fluidization Regimes",
    de: "Wirbelschichtregime"
  },
  headers: {
    uk: ["Режим", "Швидкість газу", "Характеристика", "Застосування"],
    ru: ["Режим", "Скорость газа", "Характеристика", "Применение"],
    en: ["Regime", "Gas Velocity", "Characteristics", "Application"],
    de: ["Regime", "Gasgeschwindigkeit", "Eigenschaften", "Anwendung"]
  },
  rows: [
    [
      {
        uk: "Нерухомий шар",
        ru: "Неподвижный слой",
        en: "Fixed bed",
        de: "Festbett"
      },
      "u < umf",
      {
        uk: "Частинки нерухомі, високий опір",
        ru: "Частицы неподвижны, высокое сопротивление",
        en: "Particles stationary, high resistance",
        de: "Partikel stationär, hoher Widerstand"
      },
      {
        uk: "Каталітичні реактори",
        ru: "Каталитические реакторы",
        en: "Catalytic reactors",
        de: "Katalytische Reaktoren"
      }
    ],
    [
      {
        uk: "Киплячий шар",
        ru: "Кипящий слой",
        en: "Bubbling bed",
        de: "Blasenbett"
      },
      "umf < u < umb",
      {
        uk: "Утворення бульбашок, інтенсивне перемішування",
        ru: "Образование пузырей, интенсивное перемешивание",
        en: "Bubble formation, intense mixing",
        de: "Blasenbildung, intensive Vermischung"
      },
      {
        uk: "Сушіння, спалювання",
        ru: "Сушка, сжигание",
        en: "Drying, combustion",
        de: "Trocknung, Verbrennung"
      }
    ],
    [
      {
        uk: "Турбулентний",
        ru: "Турбулентный",
        en: "Turbulent",
        de: "Turbulent"
      },
      "umb < u < utr",
      {
        uk: "Руйнування бульбашок, велика турбулентність",
        ru: "Разрушение пузырей, большая турбулентность",
        en: "Bubble breakup, high turbulence",
        de: "Blasenzerfall, hohe Turbulenz"
      },
      {
        uk: "Хімічні реакції, кракінг",
        ru: "Химические реакции, крекинг",
        en: "Chemical reactions, cracking",
        de: "Chemische Reaktionen, Cracken"
      }
    ],
    [
      {
        uk: "Швидкий",
        ru: "Быстрый",
        en: "Fast",
        de: "Schnell"
      },
      "utr < u < utr",
      {
        uk: "Винесення частинок, потребує рециркуляції",
        ru: "Унос частиц, требуется рециркуляция",
        en: "Particle entrainment, requires recirculation",
        de: "Partikelmitnahme, erfordert Rezirkulation"
      },
      {
        uk: "Циркулюючий киплячий шар",
        ru: "Циркулирующий кипящий слой",
        en: "Circulating fluidized bed",
        de: "Zirkulierendes Wirbelbett"
      }
    ],
    [
      {
        uk: "Пневмотранспорт",
        ru: "Пневмотранспорт",
        en: "Pneumatic conveying",
        de: "Pneumatischer Transport"
      },
      "u >> utr",
      {
        uk: "Повне винесення матеріалу",
        ru: "Полный унос материала",
        en: "Complete material entrainment",
        de: "Vollständige Materialmitnahme"
      },
      {
        uk: "Транспортування сипких матеріалів",
        ru: "Транспортировка сыпучих материалов",
        en: "Bulk material transport",
        de: "Schüttguttransport"
      }
    ]
  ],
  source: {
    name: "Fluidization Engineering",
    url: null
  }
};
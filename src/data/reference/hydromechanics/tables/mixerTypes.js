// ============================================
// FILE: src/data/reference/hydromechanics/tables/mixerTypes.js
// ============================================

export const mixerTypesTable = {
  id: "mixer-types",
  category: "mixing",
  title: {
    uk: "Типи мішалок та їх застосування",
    ru: "Типы мешалок и их применение",
    en: "Mixer Types and Applications",
    de: "Rührertypen und Anwendungen"
  },
  headers: {
    uk: ["Тип мішалки", "Діапазон в'язкості, Па·с", "Число Re", "Застосування"],
    ru: ["Тип мешалки", "Диапазон вязкости, Па·с", "Число Re", "Применение"],
    en: ["Mixer Type", "Viscosity Range, Pa·s", "Re Number", "Application"],
    de: ["Rührertyp", "Viskositätsbereich, Pa·s", "Re-Zahl", "Anwendung"]
  },
  rows: [
    [
      {
        uk: "Лопатева",
        ru: "Лопастная",
        en: "Paddle",
        de: "Blattrührer"
      },
      "< 2",
      "50-300",
      {
        uk: "Рідкі середовища, суспензії",
        ru: "Жидкие среды, суспензии",
        en: "Liquid media, suspensions",
        de: "Flüssige Medien, Suspensionen"
      }
    ],
    [
      {
        uk: "Турбінна",
        ru: "Турбинная",
        en: "Turbine",
        de: "Turbine"
      },
      "< 5",
      "10⁴-10⁵",
      {
        uk: "Високі швидкості, диспергування газів",
        ru: "Высокие скорости, диспергирование газов",
        en: "High speeds, gas dispersion",
        de: "Hohe Geschwindigkeiten, Gasdispersion"
      }
    ],
    [
      {
        uk: "Пропелерна",
        ru: "Пропеллерная",
        en: "Propeller",
        de: "Propeller"
      },
      "< 1",
      "10⁴-10⁶",
      {
        uk: "Швидке перемішування рідин",
        ru: "Быстрое перемешивание жидкостей",
        en: "Fast liquid mixing",
        de: "Schnelles Flüssigkeitsmischen"
      }
    ],
    [
      {
        uk: "Якірна",
        ru: "Якорная",
        en: "Anchor",
        de: "Ankerrührer"
      },
      "5-50",
      "10-100",
      {
        uk: "В'язкі рідини, теплопередача",
        ru: "Вязкие жидкости, теплопередача",
        en: "Viscous liquids, heat transfer",
        de: "Viskose Flüssigkeiten, Wärmeübertragung"
      }
    ],
    [
      {
        uk: "Стрічкова",
        ru: "Ленточная",
        en: "Ribbon",
        de: "Bandrührer"
      },
      "> 50",
      "< 50",
      {
        uk: "Високов'язкі пасти, теплочутливі продукти",
        ru: "Высоковязкие пасты, теплочувствительные продукты",
        en: "High-viscosity pastes, heat-sensitive products",
        de: "Hochviskose Pasten, wärmeempfindliche Produkte"
      }
    ],
    [
      {
        uk: "Шнекова",
        ru: "Шнековая",
        en: "Screw",
        de: "Schneckenrührer"
      },
      "> 100",
      "< 10",
      {
        uk: "Дуже в'язкі продукти, пластмаси",
        ru: "Очень вязкие продукты, пластмассы",
        en: "Very viscous products, plastics",
        de: "Sehr viskose Produkte, Kunststoffe"
      }
    ]
  ],
  source: {
    name: "Обладнання для перемішування",
    url: null
  }
};

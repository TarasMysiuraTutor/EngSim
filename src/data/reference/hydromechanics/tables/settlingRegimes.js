// ============================================
// FILE: src/data/reference/hydromechanics/tables/settlingRegimes.js
// ============================================

export const settlingRegimesTable = {
  id: "settling-regimes",
  category: "settling",
  title: {
    uk: "Режими осадження частинок",
    ru: "Режимы осаждения частиц",
    en: "Particle Settling Regimes",
    de: "Partikelsedimentationsregime"
  },
  headers: {
    uk: ["Режим", "Число Рейнольдса", "Формула швидкості", "Опис"],
    ru: ["Режим", "Число Рейнольдса", "Формула скорости", "Описание"],
    en: ["Regime", "Reynolds Number", "Velocity Formula", "Description"],
    de: ["Regime", "Reynolds-Zahl", "Geschwindigkeitsformel", "Beschreibung"]
  },
  rows: [
    [
      { uk: "Ламінарний", ru: "Ламинарный", en: "Laminar", de: "Laminar" },
      "Re < 1",
      "v ∝ d²",
      { 
        uk: "Закон Стокса, дуже малі частинки",
        ru: "Закон Стокса, очень малые частицы",
        en: "Stokes' law, very small particles",
        de: "Stokes-Gesetz, sehr kleine Partikel"
      }
    ],
    [
      { uk: "Перехідний", ru: "Переходный", en: "Transition", de: "Übergang" },
      "1 < Re < 1000",
      "v ∝ d^1.5",
      {
        uk: "Проміжний режим, середні частинки",
        ru: "Промежуточный режим, средние частицы",
        en: "Intermediate regime, medium particles",
        de: "Zwischenregime, mittlere Partikel"
      }
    ],
    [
      { uk: "Турбулентний", ru: "Турбулентный", en: "Turbulent", de: "Turbulent" },
      "Re > 1000",
      "v ∝ d^0.5",
      {
        uk: "Закон Ньютона, великі частинки",
        ru: "Закон Ньютона, большие частицы",
        en: "Newton's law, large particles",
        de: "Newton-Gesetz, große Partikel"
      }
    ]
  ],
  source: {
    name: "Процеси і апарати",
    url: null
  }
};

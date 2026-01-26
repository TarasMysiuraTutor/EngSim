// src/data/reference/hydromechanics/formulas/centrifugation.js

export const centrifugationFormulas = [
  {
    id: "centrifuge-force",
    category: "centrifugation",
    title: {
      uk: "Центробіжна сила в центрифузі",
      ru: "Центробежная сила в центрифуге",
      en: "Centrifugal Force in Centrifuge",
      de: "Zentrifugalkraft in der Zentrifuge"
    },
    latex: "F_c = m \\cdot \\omega^2 \\cdot r",
    variables: [
      {
        uk: "Fc - центробіжна сила, Н",
        ru: "Fc - центробежная сила, Н",
        en: "Fc - centrifugal force, N",
        de: "Fc - Zentrifugalkraft, N"
      },
      {
        uk: "m - маса частинки, кг",
        ru: "m - масса частицы, кг",
        en: "m - particle mass, kg",
        de: "m - Partikelmasse, kg"
      },
      {
        uk: "ω - кутова швидкість, рад/с",
        ru: "ω - угловая скорость, рад/с",
        en: "ω - angular velocity, rad/s",
        de: "ω - Winkelgeschwindigkeit, rad/s"
      },
      {
        uk: "r - радіус обертання, м",
        ru: "r - радиус вращения, м",
        en: "r - radius of rotation, m",
        de: "r - Rotationsradius, m"
      }
    ],
    source: {
      name: "Unit Operations of Chemical Engineering",
      url: null
    }
  },
  {
    id: "separation-factor",
    category: "centrifugation",
    title: {
      uk: "Фактор розділення центрифуги",
      ru: "Фактор разделения центрифуги",
      en: "Centrifuge Separation Factor",
      de: "Zentrifugen-Trennfaktor"
    },
    latex: "Fr = \\frac{\\omega^2 \\cdot r}{g}",
    variables: [
      {
        uk: "Fr - фактор розділення (безрозмірний)",
        ru: "Fr - фактор разделения (безразмерный)",
        en: "Fr - separation factor (dimensionless)",
        de: "Fr - Trennfaktor (dimensionslos)"
      },
      {
        uk: "ω - кутова швидкість, рад/с",
        ru: "ω - угловая скорость, рад/с",
        en: "ω - angular velocity, rad/s",
        de: "ω - Winkelgeschwindigkeit, rad/s"
      },
      {
        uk: "r - радіус обертання, м",
        ru: "r - радиус вращения, м",
        en: "r - radius of rotation, m",
        de: "r - Rotationsradius, m"
      },
      {
        uk: "g - прискорення вільного падіння, 9.81 м/с²",
        ru: "g - ускорение свободного падения, 9.81 м/с²",
        en: "g - gravitational acceleration, 9.81 m/s²",
        de: "g - Erdbeschleunigung, 9.81 m/s²"
      }
    ],
    example: {
      uk: "Приклад: При ω=100 рад/с і r=0.2 м:\nFr = (100)²×0.2 / 9.81 ≈ 204\nЦентробіжне прискорення у 204 рази більше за гравітаційне",
      ru: "Пример: При ω=100 рад/с и r=0.2 м:\nFr = (100)²×0.2 / 9.81 ≈ 204\nЦентробежное ускорение в 204 раза больше гравитационного",
      en: "Example: At ω=100 rad/s and r=0.2 m:\nFr = (100)²×0.2 / 9.81 ≈ 204\nCentrifugal acceleration is 204 times greater than gravitational",
      de: "Beispiel: Bei ω=100 rad/s und r=0.2 m:\nFr = (100)²×0.2 / 9.81 ≈ 204\nZentrifugalbeschleunigung ist 204-mal größer als Gravitationsbeschleunigung"
    },
    source: {
      name: "Процеси і апарати",
      url: null
    }
  },
  {
    id: "centrifuge-settling-velocity",
    category: "centrifugation",
    title: {
      uk: "Швидкість осадження в центрифузі",
      ru: "Скорость осаждения в центрифуге",
      en: "Settling Velocity in Centrifuge",
      de: "Sedimentationsgeschwindigkeit in Zentrifuge"
    },
    latex: "v_c = \\frac{d^2(\\rho_p - \\rho_f)\\omega^2 r}{18\\mu}",
    variables: [
      {
        uk: "vc - швидкість осадження в центрифузі, м/с",
        ru: "vc - скорость осаждения в центрифуге, м/с",
        en: "vc - settling velocity in centrifuge, m/s",
        de: "vc - Sedimentationsgeschwindigkeit, m/s"
      },
      {
        uk: "d - діаметр частинки, м",
        ru: "d - диаметр частицы, м",
        en: "d - particle diameter, m",
        de: "d - Partikeldurchmesser, m"
      },
      {
        uk: "ω - кутова швидкість, рад/с",
        ru: "ω - угловая скорость, рад/с",
        en: "ω - angular velocity, rad/s",
        de: "ω - Winkelgeschwindigkeit, rad/s"
      },
      {
        uk: "r - радіус, м",
        ru: "r - радиус, м",
        en: "r - radius, m",
        de: "r - Radius, m"
      }
    ],
    source: {
      name: "Процеси і апарати хімічної технології",
      url: null
    }
  }
];
// ============================================
// FILE: src/data/reference/hydromechanics/formulas/centrifugation.js
// ============================================

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
    id: "centrifuge-separation-factor",
    category: "centrifugation",
    title: {
      uk: "Фактор розділення центрифуги",
      ru: "Фактор разделения центрифуги",
      en: "Centrifuge Separation Factor",
      de: "Zentrifugentrennfaktor"
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
      uk: "Fr показує, у скільки разів центробіжне прискорення більше за прискорення вільного падіння.\nТипові значення: 500-5000 для промислових центрифуг, >50000 для надцентрифуг",
      ru: "Fr показывает, во сколько раз центробежное ускорение больше ускорения свободного падения.\nТипичные значения: 500-5000 для промышленных центрифуг, >50000 для сверхцентрифуг",
      en: "Fr shows how many times centrifugal acceleration exceeds gravitational acceleration.\nTypical values: 500-5000 for industrial centrifuges, >50000 for ultracentrifuges",
      de: "Fr zeigt, um wie viel die Zentrifugalbeschleunigung die Erdbeschleunigung übersteigt.\nTypische Werte: 500-5000 für Industriezentrifugen, >50000 für Ultrazentrifugen"
    },
    source: {
      name: "Центрифугування в хімічній промисловості",
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
      de: "Sedimentationsgeschwindigkeit in der Zentrifuge"
    },
    latex: "v_c = \\frac{d^2(\\rho_p - \\rho_f)\\omega^2 r}{18\\mu}",
    variables: [
      {
        uk: "vc - швидкість осадження в центрифузі, м/с",
        ru: "vc - скорость осаждения в центрифуге, м/с",
        en: "vc - settling velocity in centrifuge, m/s",
        de: "vc - Sedimentationsgeschwindigkeit in Zentrifuge, m/s"
      },
      {
        uk: "d - діаметр частинки, м",
        ru: "d - диаметр частицы, м",
        en: "d - particle diameter, m",
        de: "d - Partikeldurchmesser, m"
      },
      {
        uk: "ρp - щільність частинки, кг/м³",
        ru: "ρp - плотность частицы, кг/м³",
        en: "ρp - particle density, kg/m³",
        de: "ρp - Partikeldichte, kg/m³"
      },
      {
        uk: "ρf - щільність рідини, кг/м³",
        ru: "ρf - плотность жидкости, кг/м³",
        en: "ρf - fluid density, kg/m³",
        de: "ρf - Fluiddichte, kg/m³"
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
      },
      {
        uk: "μ - динамічна в'язкість, Па·с",
        ru: "μ - динамическая вязкость, Па·с",
        en: "μ - dynamic viscosity, Pa·s",
        de: "μ - dynamische Viskosität, Pa·s"
      }
    ],
    example: {
      uk: "Швидкість осадження в центрифузі у Fr разів більша за швидкість гравітаційного осадження",
      ru: "Скорость осаждения в центрифуге в Fr раз больше скорости гравитационного осаждения",
      en: "Settling velocity in centrifuge is Fr times greater than gravitational settling velocity",
      de: "Die Sedimentationsgeschwindigkeit in der Zentrifuge ist Fr-mal größer als die Gravitationssedimentationsgeschwindigkeit"
    },
    source: {
      name: "Процеси і апарати",
      url: null
    }
  }
];
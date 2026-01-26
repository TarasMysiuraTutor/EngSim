// src/data/reference/hydraulics/formulas/basics.js
export const basicsFormulas = [
  {
    id: 'continuity_equation',
    category: 'basics',
    title: {
      uk: 'Рівняння нерозривності',
      ru: 'Уравнение неразрывности',
      en: 'Continuity Equation',
      de: 'Kontinuitätsgleichung'
    },
    formula: 'Q = v₁A₁ = v₂A₂ = const',
    latex: 'Q = v_1 A_1 = v_2 A_2 = \\text{const}',
    variables: [
      { uk: 'Q — об\'ємна витрата, м³/с', ru: 'Q — объемный расход, м³/с', en: 'Q — volumetric flow rate, m³/s', de: 'Q — Volumenstrom, m³/s' },
      { uk: 'v — швидкість потоку, м/с', ru: 'v — скорость потока, м/с', en: 'v — flow velocity, m/s', de: 'v — Strömungsgeschwindigkeit, m/s' },
      { uk: 'A — площа перерізу, м²', ru: 'A — площадь сечения, м²', en: 'A — cross-sectional area, m²', de: 'A — Querschnittsfläche, m²' }
    ],
    example: {
      uk: 'Приклад: труба Ø100мм, v=2м/с → Q = 0.0157 м³/с',
      ru: 'Пример: труба Ø100мм, v=2м/с → Q = 0.0157 м³/с',
      en: 'Example: pipe Ø100mm, v=2m/s → Q = 0.0157 m³/s',
      de: 'Beispiel: Rohr Ø100mm, v=2m/s → Q = 0.0157 m³/s'
    },
    source: {
      name: 'ДБН В.2.5-64:2012',
      url: 'https://dbn.co.ua/'
    }
  },
  {
    id: 'bernoulli_equation',
    category: 'basics',
    title: {
      uk: 'Рівняння Бернуллі',
      ru: 'Уравнение Бернулли',
      en: 'Bernoulli Equation',
      de: 'Bernoulli-Gleichung'
    },
    formula: 'z₁ + p₁/γ + v₁²/2g = z₂ + p₂/γ + v₂²/2g + h',
    latex: 'z_1 + \\frac{p_1}{\\gamma} + \\frac{v_1^2}{2g} = z_2 + \\frac{p_2}{\\gamma} + \\frac{v_2^2}{2g} + h',
    variables: [
      { uk: 'z — геометрична висота, м', ru: 'z — геометрическая высота, м', en: 'z — elevation, m', de: 'z — Höhe, m' },
      { uk: 'p — тиск, Па', ru: 'p — давление, Па', en: 'p — pressure, Pa', de: 'p — Druck, Pa' },
      { uk: 'γ — питома вага, Н/м³', ru: 'γ — удельный вес, Н/м³', en: 'γ — specific weight, N/m³', de: 'γ — spezifisches Gewicht, N/m³' },
      { uk: 'v — швидкість, м/с', ru: 'v — скорость, м/с', en: 'v — velocity, m/s', de: 'v — Geschwindigkeit, m/s' },
      { uk: 'g — прискорення вільного падіння, 9.81 м/с²', ru: 'g — ускорение свободного падения, 9.81 м/с²', en: 'g — gravitational acceleration, 9.81 m/s²', de: 'g — Erdbeschleunigung, 9.81 m/s²' },
      { uk: 'h — втрати напору, м', ru: 'h — потери напора, м', en: 'h — head loss, m', de: 'h — Druckverlust, m' }
    ],
    source: {
      name: 'ДБН В.2.5-64:2012',
      url: 'https://dbn.co.ua/'
    }
  },
  {
    id: 'hydrostatic_pressure',
    category: 'basics',
    title: {
      uk: 'Гідростатичний тиск',
      ru: 'Гидростатическое давление',
      en: 'Hydrostatic Pressure',
      de: 'Hydrostatischer Druck'
    },
    formula: 'p = ρgh',
    latex: 'p = \\rho g h',
    variables: [
      { uk: 'p — тиск, Па', ru: 'p — давление, Па', en: 'p — pressure, Pa', de: 'p — Druck, Pa' },
      { uk: 'ρ — щільність рідини, кг/м³', ru: 'ρ — плотность жидкости, кг/м³', en: 'ρ — fluid density, kg/m³', de: 'ρ — Dichte, kg/m³' },
      { uk: 'g — прискорення вільного падіння, 9.81 м/с²', ru: 'g — ускорение свободного падения, 9.81 м/с²', en: 'g — gravitational acceleration, 9.81 m/s²', de: 'g — Erdbeschleunigung, 9.81 m/s²' },
      { uk: 'h — глибина, м', ru: 'h — глубина, м', en: 'h — depth, m', de: 'h — Tiefe, m' }
    ],
    example: {
      uk: 'Приклад: вода, h=10м → p = 1000×9.81×10 = 98100 Па ≈ 0.98 бар',
      ru: 'Пример: вода, h=10м → p = 1000×9.81×10 = 98100 Па ≈ 0.98 бар',
      en: 'Example: water, h=10m → p = 1000×9.81×10 = 98100 Pa ≈ 0.98 bar',
      de: 'Beispiel: Wasser, h=10m → p = 1000×9.81×10 = 98100 Pa ≈ 0.98 bar'
    }
  },
  {
    id: 'reynolds_number',
    category: 'basics',
    title: {
      uk: 'Число Рейнольдса',
      ru: 'Число Рейнольдса',
      en: 'Reynolds Number',
      de: 'Reynolds-Zahl'
    },
    formula: 'Re = vd/ν',
    latex: 'Re = \\frac{vd}{\\nu}',
    variables: [
      { uk: 'Re — число Рейнольдса (безрозмірне)', ru: 'Re — число Рейнольдса (безразмерное)', en: 'Re — Reynolds number (dimensionless)', de: 'Re — Reynolds-Zahl (dimensionslos)' },
      { uk: 'v — швидкість потоку, м/с', ru: 'v — скорость потока, м/с', en: 'v — flow velocity, m/s', de: 'v — Strömungsgeschwindigkeit, m/s' },
      { uk: 'd — діаметр труби, м', ru: 'd — диаметр трубы, м', en: 'd — pipe diameter, m', de: 'd — Rohrdurchmesser, m' },
      { uk: 'ν — кінематична в\'язкість, м²/с', ru: 'ν — кинематическая вязкость, м²/с', en: 'ν — kinematic viscosity, m²/s', de: 'ν — kinematische Viskosität, m²/s' }
    ],
    example: {
      uk: 'Re < 2320 — ламінарний режим\nRe > 4000 — турбулентний режим',
      ru: 'Re < 2320 — ламинарный режим\nRe > 4000 — турбулентный режим',
      en: 'Re < 2320 — laminar flow\nRe > 4000 — turbulent flow',
      de: 'Re < 2320 — laminare Strömung\nRe > 4000 — turbulente Strömung'
    }
  },
  {
    id: 'mass_flow_rate',
    category: 'basics',
    title: {
      uk: 'Масова витрата',
      ru: 'Массовый расход',
      en: 'Mass Flow Rate',
      de: 'Massenstrom'
    },
    formula: 'ṁ = ρQ = ρvA',
    latex: '\\dot{m} = \\rho Q = \\rho v A',
    variables: [
      { uk: 'ṁ — масова витрата, кг/с', ru: 'ṁ — массовый расход, кг/с', en: 'ṁ — mass flow rate, kg/s', de: 'ṁ — Massenstrom, kg/s' },
      { uk: 'ρ — щільність рідини, кг/м³', ru: 'ρ — плотность жидкости, кг/м³', en: 'ρ — fluid density, kg/m³', de: 'ρ — Dichte, kg/m³' },
      { uk: 'Q — об\'ємна витрата, м³/с', ru: 'Q — объемный расход, м³/с', en: 'Q — volumetric flow rate, m³/s', de: 'Q — Volumenstrom, m³/s' }
    ]
  }
];
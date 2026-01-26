// src/data/reference/hydraulics/formulas/pressure.js
export const pressureFormulas = [
  {
    id: 'pressure_head',
    category: 'pressure',
    title: {
      uk: 'Напір (висота стовпа рідини)',
      ru: 'Напор (высота столба жидкости)',
      en: 'Pressure Head',
      de: 'Druckhöhe'
    },
    formula: 'H = p/(ρg)',
    latex: 'H = \\frac{p}{\\rho g}',
    variables: [
      { uk: 'H — напір, м', ru: 'H — напор, м', en: 'H — head, m', de: 'H — Druckhöhe, m' },
      { uk: 'p — тиск, Па', ru: 'p — давление, Па', en: 'p — pressure, Pa', de: 'p — Druck, Pa' },
      { uk: 'ρ — щільність, кг/м³', ru: 'ρ — плотность, кг/м³', en: 'ρ — density, kg/m³', de: 'ρ — Dichte, kg/m³' }
    ],
    example: {
      uk: 'Приклад: p=100кПа, вода → H = 100000/(1000×9.81) ≈ 10.2 м',
      ru: 'Пример: p=100кПа, вода → H = 100000/(1000×9.81) ≈ 10.2 м',
      en: 'Example: p=100kPa, water → H = 100000/(1000×9.81) ≈ 10.2 m',
      de: 'Beispiel: p=100kPa, Wasser → H = 100000/(1000×9.81) ≈ 10.2 m'
    }
  },
  {
    id: 'velocity_head',
    category: 'pressure',
    title: {
      uk: 'Швидкісний напір',
      ru: 'Скоростной напор',
      en: 'Velocity Head',
      de: 'Geschwindigkeitshöhe'
    },
    formula: 'hᵥ = v²/(2g)',
    latex: 'h_v = \\frac{v^2}{2g}',
    variables: [
      { uk: 'hᵥ — швидкісний напір, м', ru: 'hᵥ — скоростной напор, м', en: 'hᵥ — velocity head, m', de: 'hᵥ — Geschwindigkeitshöhe, m' },
      { uk: 'v — швидкість, м/с', ru: 'v — скорость, м/с', en: 'v — velocity, m/s', de: 'v — Geschwindigkeit, m/s' }
    ],
    example: {
      uk: 'Приклад: v=3 м/с → hᵥ = 3²/(2×9.81) = 0.46 м',
      ru: 'Пример: v=3 м/с → hᵥ = 3²/(2×9.81) = 0.46 м',
      en: 'Example: v=3 m/s → hᵥ = 3²/(2×9.81) = 0.46 m',
      de: 'Beispiel: v=3 m/s → hᵥ = 3²/(2×9.81) = 0.46 m'
    }
  },
  {
    id: 'total_head',
    category: 'pressure',
    title: {
      uk: 'Повний напір',
      ru: 'Полный напор',
      en: 'Total Head',
      de: 'Gesamtdruckhöhe'
    },
    formula: 'H = z + p/(ρg) + v²/(2g)',
    latex: 'H = z + \\frac{p}{\\rho g} + \\frac{v^2}{2g}',
    variables: [
      { uk: 'H — повний напір, м', ru: 'H — полный напор, м', en: 'H — total head, m', de: 'H — Gesamtdruckhöhe, m' },
      { uk: 'z — геометрична висота, м', ru: 'z — геометрическая высота, м', en: 'z — elevation, m', de: 'z — Höhe, m' },
      { uk: 'p/(ρg) — п\'єзометричний напір, м', ru: 'p/(ρg) — пьезометрический напор, м', en: 'p/(ρg) — pressure head, m', de: 'p/(ρg) — Druckhöhe, m' },
      { uk: 'v²/(2g) — швидкісний напір, м', ru: 'v²/(2g) — скоростной напор, м', en: 'v²/(2g) — velocity head, m', de: 'v²/(2g) — Geschwindigkeitshöhe, m' }
    ]
  },
  {
    id: 'pressure_loss_friction',
    category: 'pressure',
    title: {
      uk: 'Втрати тиску по довжині (формула Дарсі-Вейсбаха)',
      ru: 'Потери давления по длине (формула Дарси-Вейсбаха)',
      en: 'Friction Head Loss (Darcy-Weisbach)',
      de: 'Reibungsdruckverlust (Darcy-Weisbach)'
    },
    formula: 'Δp = λ(L/d)(ρv²/2)',
    latex: '\\Delta p = \\lambda \\frac{L}{d} \\frac{\\rho v^2}{2}',
    variables: [
      { uk: 'Δp — втрати тиску, Па', ru: 'Δp — потери давления, Па', en: 'Δp — pressure loss, Pa', de: 'Δp — Druckverlust, Pa' },
      { uk: 'λ — коефіцієнт тертя (безрозмірний)', ru: 'λ — коэффициент трения (безразмерный)', en: 'λ — friction factor (dimensionless)', de: 'λ — Reibungsbeiwert (dimensionslos)' },
      { uk: 'L — довжина труби, м', ru: 'L — длина трубы, м', en: 'L — pipe length, m', de: 'L — Rohrlänge, m' },
      { uk: 'd — діаметр труби, м', ru: 'd — диаметр трубы, м', en: 'd — pipe diameter, m', de: 'd — Rohrdurchmesser, m' }
    ],
    source: {
      name: 'ДБН В.2.5-64:2012',
      url: 'https://dbn.co.ua/'
    }
  },
  {
    id: 'pressure_loss_local',
    category: 'pressure',
    title: {
      uk: 'Місцеві втрати тиску',
      ru: 'Местные потери давления',
      en: 'Minor (Local) Head Loss',
      de: 'Lokale Druckverluste'
    },
    formula: 'Δp = ζ(ρv²/2)',
    latex: '\\Delta p = \\zeta \\frac{\\rho v^2}{2}',
    variables: [
      { uk: 'Δp — втрати тиску, Па', ru: 'Δp — потери давления, Па', en: 'Δp — pressure loss, Pa', de: 'Δp — Druckverlust, Pa' },
      { uk: 'ζ — коефіцієнт місцевого опору', ru: 'ζ — коэффициент местного сопротивления', en: 'ζ — loss coefficient', de: 'ζ — Widerstandsbeiwert' },
      { uk: 'ρ — щільність, кг/м³', ru: 'ρ — плотность, кг/м³', en: 'ρ — density, kg/m³', de: 'ρ — Dichte, kg/m³' },
      { uk: 'v — швидкість, м/с', ru: 'v — скорость, м/с', en: 'v — velocity, m/s', de: 'v — Geschwindigkeit, m/s' }
    ]
  }
];
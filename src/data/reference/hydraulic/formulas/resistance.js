// src/data/reference/hydraulics/formulas/resistance.js
export const resistanceFormulas = [
  {
    id: 'friction_factor_laminar',
    category: 'resistance',
    title: {
      uk: 'Коефіцієнт тертя (ламінарний режим)',
      ru: 'Коэффициент трения (ламинарный режим)',
      en: 'Friction Factor (Laminar Flow)',
      de: 'Reibungsbeiwert (laminar)'
    },
    formula: 'λ = 64/Re',
    latex: '\\lambda = \\frac{64}{Re}',
    variables: [
      { uk: 'λ — коефіцієнт тертя', ru: 'λ — коэффициент трения', en: 'λ — friction factor', de: 'λ — Reibungsbeiwert' },
      { uk: 'Re — число Рейнольдса', ru: 'Re — число Рейнольдса', en: 'Re — Reynolds number', de: 'Re — Reynolds-Zahl' }
    ],
    example: {
      uk: 'Застосовується при Re < 2320',
      ru: 'Применяется при Re < 2320',
      en: 'Applies when Re < 2320',
      de: 'Gilt für Re < 2320'
    }
  },
  {
    id: 'colebrook_white',
    category: 'resistance',
    title: {
      uk: 'Формула Кольбрука-Уайта',
      ru: 'Формула Кольбрука-Уайта',
      en: 'Colebrook-White Equation',
      de: 'Colebrook-White-Gleichung'
    },
    formula: '1/√λ = -2×log₁₀(k/(3.71d) + 2.51/(Re√λ))',
    latex: '\\frac{1}{\\sqrt{\\lambda}} = -2\\log_{10}\\left(\\frac{k}{3.71d} + \\frac{2.51}{Re\\sqrt{\\lambda}}\\right)',
    variables: [
      { uk: 'λ — коефіцієнт тертя', ru: 'λ — коэффициент трения', en: 'λ — friction factor', de: 'λ — Reibungsbeiwert' },
      { uk: 'k — абсолютна шорсткість, мм', ru: 'k — абсолютная шероховатость, мм', en: 'k — absolute roughness, mm', de: 'k — absolute Rauigkeit, mm' },
      { uk: 'd — діаметр труби, мм', ru: 'd — диаметр трубы, мм', en: 'd — pipe diameter, mm', de: 'd — Rohrdurchmesser, mm' },
      { uk: 'Re — число Рейнольдса', ru: 'Re — число Рейнольдса', en: 'Re — Reynolds number', de: 'Re — Reynolds-Zahl' }
    ]
  },
  {
    id: 'equivalent_length',
    category: 'resistance',
    title: {
      uk: 'Еквівалентна довжина',
      ru: 'Эквивалентная длина',
      en: 'Equivalent Length',
      de: 'Äquivalente Länge'
    },
    formula: 'Lекв = ζ×d/λ',
    latex: 'L_{\\text{экв}} = \\frac{\\zeta \\cdot d}{\\lambda}',
    variables: [
      { uk: 'Lекв — еквівалентна довжина, м', ru: 'Lекв — эквивалентная длина, м', en: 'Lекв — equivalent length, m', de: 'Lекв — äquivalente Länge, m' },
      { uk: 'ζ — коефіцієнт місцевого опору', ru: 'ζ — коэффициент местного сопротивления', en: 'ζ — loss coefficient', de: 'ζ — Widerstandsbeiwert' },
      { uk: 'd — діаметр труби, м', ru: 'd — диаметр трубы, м', en: 'd — pipe diameter, m', de: 'd — Rohrdurchmesser, m' },
      { uk: 'λ — коефіцієнт тертя', ru: 'λ — коэффициент трения', en: 'λ — friction factor', de: 'λ — Reibungsbeiwert' }
    ]
  },
  {
    id: 'sudden_expansion',
    category: 'resistance',
    title: {
      uk: 'Раптове розширення (формула Борда)',
      ru: 'Внезапное расширение (формула Борда)',
      en: 'Sudden Expansion (Borda Formula)',
      de: 'Plötzliche Erweiterung (Borda-Formel)'
    },
    formula: 'ζ = (1 - A₁/A₂)²',
    latex: '\\zeta = \\left(1 - \\frac{A_1}{A_2}\\right)^2',
    variables: [
      { uk: 'ζ — коефіцієнт опору', ru: 'ζ — коэффициент сопротивления', en: 'ζ — loss coefficient', de: 'ζ — Widerstandsbeiwert' },
      { uk: 'A₁ — площа меншого перерізу, м²', ru: 'A₁ — площадь меньшего сечения, м²', en: 'A₁ — smaller cross-section, m²', de: 'A₁ — kleinerer Querschnitt, m²' },
      { uk: 'A₂ — площа більшого перерізу, м²', ru: 'A₂ — площадь большего сечения, м²', en: 'A₂ — larger cross-section, m²', de: 'A₂ — größerer Querschnitt, m²' }
    ]
  },
  {
    id: 'sudden_contraction',
    category: 'resistance',
    title: {
      uk: 'Раптове звуження',
      ru: 'Внезапное сужение',
      en: 'Sudden Contraction',
      de: 'Plötzliche Verengung'
    },
    formula: 'ζ = 0.5(1 - A₂/A₁)',
    latex: '\\zeta = 0.5\\left(1 - \\frac{A_2}{A_1}\\right)',
    variables: [
      { uk: 'A₁ — площа більшого перерізу, м²', ru: 'A₁ — площадь большего сечения, м²', en: 'A₁ — larger cross-section, m²', de: 'A₁ — größerer Querschnitt, m²' },
      { uk: 'A₂ — площа меншого перерізу, м²', ru: 'A₂ — площадь меньшего сечения, м²', en: 'A₂ — smaller cross-section, m²', de: 'A₂ — kleinerer Querschnitt, m²' }
    ]
  }
];
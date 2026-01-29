// src/data/reference/strength/formulas/stability.js
// ФОРМУЛИ ДЛЯ СТІЙКОСТІ

export const stabilityFormulas = [
  {
    id: 'euler-critical-load',
    category: 'stability',
    title: {
      uk: 'Критична сила Ейлера',
      ru: 'Критическая сила Эйлера',
      en: 'Euler\'s Critical Load',
      de: 'Eulersche Knicklast'
    },
    formula: 'P_{cr} = \\frac{\\pi^2 EI}{(\\mu l)^2}',
    latex: 'P_{cr} = \\frac{\\pi^2 EI}{(\\mu l)^2}',
    variables: [
      { uk: 'Pᶜʳ - критична сила, Н', ru: 'Pᶜʳ - критическая сила, Н', en: 'Pᶜʳ - critical load, N', de: 'Pᶜʳ - Knicklast, N' },
      { uk: 'E - модуль пружності, Па', ru: 'E - модуль упругости, Па', en: 'E - elastic modulus, Pa', de: 'E - Elastizitätsmodul, Pa' },
      { uk: 'I - момент інерції, м⁴', ru: 'I - момент инерции, м⁴', en: 'I - moment of inertia, m⁴', de: 'I - Trägheitsmoment, m⁴' },
      { uk: 'μ - коефіцієнт приведеної довжини', ru: 'μ - коэффициент приведенной длины', en: 'μ - effective length factor', de: 'μ - Beiwert der Knicklänge' },
      { uk: 'l - довжина стержня, м', ru: 'l - длина стержня, м', en: 'l - column length, m', de: 'l - Stablänge, m' }
    ],
    example: {
      uk: 'Для защемленого з двох кінців стержня: μ = 0.5',
      ru: 'Для защемленного с двух концов стержня: μ = 0.5',
      en: 'For fixed-fixed column: μ = 0.5',
      de: 'Für beidseitig eingespannte Stütze: μ = 0.5'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'slenderness-ratio',
    category: 'stability',
    title: {
      uk: 'Гнучкість стержня',
      ru: 'Гибкость стержня',
      en: 'Slenderness Ratio',
      de: 'Schlankheitsgrad'
    },
    formula: '\\lambda = \\frac{\\mu l}{i}',
    latex: '\\lambda = \\frac{\\mu l}{i}',
    variables: [
      { uk: 'λ - гнучкість (безрозмірна)', ru: 'λ - гибкость (безразмерная)', en: 'λ - slenderness ratio', de: 'λ - Schlankheitsgrad' },
      { uk: 'μ - коефіцієнт приведеної довжини', ru: 'μ - коэффициент приведенной длины', en: 'μ - effective length factor', de: 'μ - Beiwert der Knicklänge' },
      { uk: 'l - довжина стержня, м', ru: 'l - длина стержня, м', en: 'l - column length, m', de: 'l - Stablänge, m' },
      { uk: 'i - радіус інерції, м', ru: 'i - радиус инерции, м', en: 'i - radius of gyration, m', de: 'i - Trägheitsradius, m' }
    ],
    example: {
      uk: 'μl = 3 м, i = 0.05 м → λ = 3 / 0.05 = 60',
      ru: 'μl = 3 м, i = 0.05 м → λ = 3 / 0.05 = 60',
      en: 'μl = 3 m, i = 0.05 m → λ = 3 / 0.05 = 60',
      de: 'μl = 3 m, i = 0.05 m → λ = 3 / 0.05 = 60'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'radius-of-gyration',
    category: 'stability',
    title: {
      uk: 'Радіус інерції',
      ru: 'Радіус инерции',
      en: 'Radius of Gyration',
      de: 'Trägheitsradius'
    },
    formula: 'i = \\sqrt{\\frac{I}{A}}',
    latex: 'i = \\sqrt{\\frac{I}{A}}',
    variables: [
      { uk: 'i - радіус інерції, м', ru: 'i - радиус инерции, м', en: 'i - radius of gyration, m', de: 'i - Trägheitsradius, m' },
      { uk: 'I - момент інерції, м⁴', ru: 'I - момент инерции, м⁴', en: 'I - moment of inertia, m⁴', de: 'I - Trägheitsmoment, m⁴' },
      { uk: 'A - площа перерізу, м²', ru: 'A - площадь сечения, м²', en: 'A - cross-sectional area, m²', de: 'A - Querschnittsfläche, m²' }
    ],
    example: {
      uk: 'I = 1×10⁻⁵ м⁴, A = 0.004 м² → i = √(1×10⁻⁵/0.004) = 0.05 м',
      ru: 'I = 1×10⁻⁵ м⁴, A = 0.004 м² → i = √(1×10⁻⁵/0.004) = 0.05 м',
      en: 'I = 1×10⁻⁵ m⁴, A = 0.004 m² → i = √(1×10⁻⁵/0.004) = 0.05 m',
      de: 'I = 1×10⁻⁵ m⁴, A = 0.004 m² → i = √(1×10⁻⁵/0.004) = 0.05 m'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'critical-stress',
    category: 'stability',
    title: {
      uk: 'Критичне напруження',
      ru: 'Критическое напряжение',
      en: 'Critical Stress',
      de: 'Kritische Spannung'
    },
    formula: '\\sigma_{cr} = \\frac{P_{cr}}{A} = \\frac{\\pi^2 E}{\\lambda^2}',
    latex: '\\sigma_{cr} = \\frac{P_{cr}}{A} = \\frac{\\pi^2 E}{\\lambda^2}',
    variables: [
      { uk: 'σᶜʳ - критичне напруження, Па', ru: 'σᶜʳ - критическое напряжение, Па', en: 'σᶜʳ - critical stress, Pa', de: 'σᶜʳ - kritische Spannung, Pa' },
      { uk: 'Pᶜʳ - критична сила, Н', ru: 'Pᶜʳ - критическая сила, Н', en: 'Pᶜʳ - critical load, N', de: 'Pᶜʳ - Knicklast, N' },
      { uk: 'A - площа перерізу, м²', ru: 'A - площадь сечения, м²', en: 'A - cross-sectional area, m²', de: 'A - Querschnittsfläche, m²' },
      { uk: 'E - модуль пружності, Па', ru: 'E - модуль упругости, Па', en: 'E - elastic modulus, Pa', de: 'E - Elastizitätsmodul, Pa' },
      { uk: 'λ - гнучкість', ru: 'λ - гибкость', en: 'λ - slenderness ratio', de: 'λ - Schlankheitsgrad' }
    ],
    example: {
      uk: 'E = 200 ГПа, λ = 100 → σᶜʳ = π² × 200×10⁹ / 100² ≈ 197 МПа',
      ru: 'E = 200 ГПа, λ = 100 → σᶜʳ = π² × 200×10⁹ / 100² ≈ 197 МПа',
      en: 'E = 200 GPa, λ = 100 → σᶜʳ = π² × 200×10⁹ / 100² ≈ 197 MPa',
      de: 'E = 200 GPa, λ = 100 → σᶜʳ = π² × 200×10⁹ / 100² ≈ 197 MPa'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'buckling-reduction-factor',
    category: 'stability',
    title: {
      uk: 'Коефіцієнт поздовжнього згину (EN 1993)',
      ru: 'Коэффициент продольного изгиба (EN 1993)',
      en: 'Buckling Reduction Factor (EN 1993)',
      de: 'Abminderungsfaktor (EN 1993)'
    },
    formula: '\\chi = \\frac{1}{\\Phi + \\sqrt{\\Phi^2 - \\bar{\\lambda}^2}}',
    latex: '\\chi = \\frac{1}{\\Phi + \\sqrt{\\Phi^2 - \\bar{\\lambda}^2}}',
    variables: [
      { uk: 'χ - коефіцієнт поздовжнього згину', ru: 'χ - коэффициент продольного изгиба', en: 'χ - reduction factor', de: 'χ - Abminderungsfaktor' },
      { uk: 'Φ = 0.5[1 + α(λ̄ - 0.2) + λ̄²]', ru: 'Φ = 0.5[1 + α(λ̄ - 0.2) + λ̄²]', en: 'Φ = 0.5[1 + α(λ̄ - 0.2) + λ̄²]', de: 'Φ = 0.5[1 + α(λ̄ - 0.2) + λ̄²]' },
      { uk: 'λ̄ - відносна гнучкість', ru: 'λ̄ - относительная гибкость', en: 'λ̄ - relative slenderness', de: 'λ̄ - bezogener Schlankheitsgrad' },
      { uk: 'α - коефіцієнт недосконалості', ru: 'α - коэффициент несовершенства', en: 'α - imperfection factor', de: 'α - Imperfektionsbeiwert' }
    ],
    example: {
      uk: 'Застосовується згідно EN 1993-1-1 для перевірки стійкості стиснутих елементів',
      ru: 'Применяется согласно EN 1993-1-1 для проверки устойчивости сжатых элементов',
      en: 'Applied according to EN 1993-1-1 for buckling resistance of compression members',
      de: 'Angewendet gemäß EN 1993-1-1 zur Berechnung der Knickfestigkeit von Druckstäben'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'relative-slenderness',
    category: 'stability',
    title: {
      uk: 'Відносна гнучкість',
      ru: 'Относительная гибкость',
      en: 'Relative Slenderness',
      de: 'Bezogener Schlankheitsgrad'
    },
    formula: '\\bar{\\lambda} = \\sqrt{\\frac{A f_y}{P_{cr}}} = \\frac{\\lambda}{\\lambda_1}',
    latex: '\\bar{\\lambda} = \\sqrt{\\frac{A f_y}{P_{cr}}} = \\frac{\\lambda}{\\lambda_1}',
    variables: [
      { uk: 'λ̄ - відносна гнучкість', ru: 'λ̄ - относительная гибкость', en: 'λ̄ - relative slenderness', de: 'λ̄ - bezogener Schlankheitsgrad' },
      { uk: 'A - площа перерізу, м²', ru: 'A - площадь сечения, м²', en: 'A - cross-sectional area, m²', de: 'A - Querschnittsfläche, m²' },
      { uk: 'fᵧ - межа текучості, Па', ru: 'fᵧ - предел текучести, Па', en: 'fᵧ - yield strength, Pa', de: 'fᵧ - Streckgrenze, Pa' },
      { uk: 'Pᶜʳ - критична сила Ейлера, Н', ru: 'Pᶜʳ - критическая сила Эйлера, Н', en: 'Pᶜʳ - Euler critical load, N', de: 'Pᶜʳ - Eulersche Knicklast, N' },
      { uk: 'λ₁ = π√(E/fᵧ) ≈ 93.9ε', ru: 'λ₁ = π√(E/fᵧ) ≈ 93.9ε', en: 'λ₁ = π√(E/fᵧ) ≈ 93.9ε', de: 'λ₁ = π√(E/fᵧ) ≈ 93.9ε' }
    ],
    example: {
      uk: 'Для S235: λ₁ ≈ 93.9 × 1.0 = 93.9',
      ru: 'Для S235: λ₁ ≈ 93.9 × 1.0 = 93.9',
      en: 'For S235: λ₁ ≈ 93.9 × 1.0 = 93.9',
      de: 'Für S235: λ₁ ≈ 93.9 × 1.0 = 93.9'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'effective-length-factors',
    category: 'stability',
    title: {
      uk: 'Коефіцієнти приведеної довжини μ',
      ru: 'Коэффициенты приведенной длины μ',
      en: 'Effective Length Factors μ',
      de: 'Beiwerte der Knicklänge μ'
    },
    formula: '\\mu l_{ef} = \\mu \\cdot l',
    latex: '\\mu l_{ef} = \\mu \\cdot l',
    variables: [
      { uk: 'μ = 1.0 - обидва кінці шарнірно закріплені', ru: 'μ = 1.0 - оба конца шарнирно закреплены', en: 'μ = 1.0 - both ends pinned', de: 'μ = 1.0 - beidseitig gelenkig' },
      { uk: 'μ = 0.7 - один кінець защемлений, інший шарнірний', ru: 'μ = 0.7 - один конец защемлен, другой шарнирный', en: 'μ = 0.7 - one end fixed, other pinned', de: 'μ = 0.7 - einseitig eingespannt, andere gelenkig' },
      { uk: 'μ = 0.5 - обидва кінці защемлені', ru: 'μ = 0.5 - оба конца защемлены', en: 'μ = 0.5 - both ends fixed', de: 'μ = 0.5 - beidseitig eingespannt' },
      { uk: 'μ = 2.0 - один кінець защемлений, інший вільний', ru: 'μ = 2.0 - один конец защемлен, другой свободный', en: 'μ = 2.0 - one end fixed, other free', de: 'μ = 2.0 - einseitig eingespannt, andere frei' }
    ],
    example: {
      uk: 'Для колони висотою 3 м з защемленими кінцями: lₑf = 0.5 × 3 = 1.5 м',
      ru: 'Для колонны высотой 3 м с защемленными концами: lₑf = 0.5 × 3 = 1.5 м',
      en: 'For 3 m column with fixed ends: lₑf = 0.5 × 3 = 1.5 m',
      de: 'Für 3 m Stütze mit eingespannten Enden: lₑf = 0.5 × 3 = 1.5 m'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  }
];

export default stabilityFormulas;
// src/data/reference/strength/formulas/bending.js
// ФОРМУЛИ ДЛЯ ЗГИНУ

export const bendingFormulas = [
  {
    id: 'bending-stress',
    category: 'bending',
    title: {
      uk: 'Нормальне напруження при згині',
      ru: 'Нормальное напряжение при изгибе',
      en: 'Normal Bending Stress',
      de: 'Normalspannung bei Biegung'
    },
    formula: '\\sigma = \\frac{M}{W}',
    latex: '\\sigma = \\frac{M}{W}',
    variables: [
      { uk: 'σ - нормальне напруження, Па', ru: 'σ - нормальное напряжение, Па', en: 'σ - normal stress, Pa', de: 'σ - Normalspannung, Pa' },
      { uk: 'M - згинальний момент, Н·м', ru: 'M - изгибающий момент, Н·м', en: 'M - bending moment, N·m', de: 'M - Biegemoment, N·m' },
      { uk: 'W - момент опору перерізу, м³', ru: 'W - момент сопротивления сечения, м³', en: 'W - section modulus, m³', de: 'W - Widerstandsmoment, m³' }
    ],
    example: {
      uk: 'M = 50 кН·м, W = 500×10⁻⁶ м³ → σ = 50000 / 0.0005 = 100 МПа',
      ru: 'M = 50 кН·м, W = 500×10⁻⁶ м³ → σ = 50000 / 0.0005 = 100 МПа',
      en: 'M = 50 kN·m, W = 500×10⁻⁶ m³ → σ = 50000 / 0.0005 = 100 MPa',
      de: 'M = 50 kN·m, W = 500×10⁻⁶ m³ → σ = 50000 / 0.0005 = 100 MPa'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'bending-stress-general',
    category: 'bending',
    title: {
      uk: 'Напруження при згині (загальна формула)',
      ru: 'Напряжение при изгибе (общая формула)',
      en: 'General Bending Stress Formula',
      de: 'Allgemeine Biegespannungsformel'
    },
    formula: '\\sigma = \\frac{M \\cdot y}{I}',
    latex: '\\sigma = \\frac{M \\cdot y}{I}',
    variables: [
      { uk: 'σ - нормальне напруження, Па', ru: 'σ - нормальное напряжение, Па', en: 'σ - normal stress, Pa', de: 'σ - Normalspannung, Pa' },
      { uk: 'M - згинальний момент, Н·м', ru: 'M - изгибающий момент, Н·м', en: 'M - bending moment, N·m', de: 'M - Biegemoment, N·m' },
      { uk: 'y - відстань від нейтральної осі, м', ru: 'y - расстояние от нейтральной оси, м', en: 'y - distance from neutral axis, m', de: 'y - Abstand von neutraler Achse, m' },
      { uk: 'I - момент інерції перерізу, м⁴', ru: 'I - момент инерции сечения, м⁴', en: 'I - moment of inertia, m⁴', de: 'I - Trägheitsmoment, m⁴' }
    ],
    example: {
      uk: 'Формула Нав\'є для визначення нормальних напружень при згині',
      ru: 'Формула Навье для определения нормальных напряжений при изгибе',
      en: 'Navier\'s formula for normal stress in bending',
      de: 'Navier-Formel für Normalspannung bei Biegung'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'section-modulus',
    category: 'bending',
    title: {
      uk: 'Момент опору перерізу',
      ru: 'Момент сопротивления сечения',
      en: 'Section Modulus',
      de: 'Widerstandsmoment'
    },
    formula: 'W = \\frac{I}{y_{max}}',
    latex: 'W = \\frac{I}{y_{max}}',
    variables: [
      { uk: 'W - момент опору, м³', ru: 'W - момент сопротивления, м³', en: 'W - section modulus, m³', de: 'W - Widerstandsmoment, m³' },
      { uk: 'I - момент інерції, м⁴', ru: 'I - момент инерции, м⁴', en: 'I - moment of inertia, m⁴', de: 'I - Trägheitsmoment, m⁴' },
      { uk: 'yₘₐₓ - відстань до крайнього волокна, м', ru: 'yₘₐₓ - расстояние до крайнего волокна, м', en: 'yₘₐₓ - distance to extreme fiber, m', de: 'yₘₐₓ - Abstand zur Randfaser, m' }
    ],
    example: {
      uk: 'Для прямокутного перерізу: W = bh²/6',
      ru: 'Для прямоугольного сечения: W = bh²/6',
      en: 'For rectangular section: W = bh²/6',
      de: 'Für Rechteckquerschnitt: W = bh²/6'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'deflection-cantilever',
    category: 'bending',
    title: {
      uk: 'Прогин консолі з зосередженим навантаженням',
      ru: 'Прогиб консоли с сосредоточенной нагрузкой',
      en: 'Cantilever Deflection - Point Load',
      de: 'Durchbiegung Kragarm - Einzellast'
    },
    formula: '\\delta = \\frac{P L^3}{3 EI}',
    latex: '\\delta = \\frac{P L^3}{3 EI}',
    variables: [
      { uk: 'δ - прогин на кінці консолі, м', ru: 'δ - прогиб на конце консоли, м', en: 'δ - deflection at free end, m', de: 'δ - Durchbiegung am freien Ende, m' },
      { uk: 'P - зосереджена сила, Н', ru: 'P - сосредоточенная сила, Н', en: 'P - point load, N', de: 'P - Einzellast, N' },
      { uk: 'L - довжина консолі, м', ru: 'L - длина консоли, м', en: 'L - cantilever length, m', de: 'L - Kragarmlänge, m' },
      { uk: 'E - модуль пружності, Па', ru: 'E - модуль упругости, Па', en: 'E - elastic modulus, Pa', de: 'E - Elastizitätsmodul, Pa' },
      { uk: 'I - момент інерції, м⁴', ru: 'I - момент инерции, м⁴', en: 'I - moment of inertia, m⁴', de: 'I - Trägheitsmoment, m⁴' }
    ],
    example: {
      uk: 'P = 1000 Н, L = 1 м, EI = 10⁴ Н·м² → δ = 1000 × 1³ / (3 × 10⁴) ≈ 0.033 м',
      ru: 'P = 1000 Н, L = 1 м, EI = 10⁴ Н·м² → δ = 1000 × 1³ / (3 × 10⁴) ≈ 0.033 м',
      en: 'P = 1000 N, L = 1 m, EI = 10⁴ N·m² → δ = 1000 × 1³ / (3 × 10⁴) ≈ 0.033 m',
      de: 'P = 1000 N, L = 1 m, EI = 10⁴ N·m² → δ = 1000 × 1³ / (3 × 10⁴) ≈ 0.033 m'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'deflection-simply-supported',
    category: 'bending',
    title: {
      uk: 'Прогин шарнірно-опертої балки з рівномірним навантаженням',
      ru: 'Прогиб шарнирно-опертой балки с равномерной нагрузкой',
      en: 'Simply Supported Beam Deflection - Uniform Load',
      de: 'Durchbiegung gelenkig gelagerter Balken - Gleichlast'
    },
    formula: '\\delta_{max} = \\frac{5 q L^4}{384 EI}',
    latex: '\\delta_{max} = \\frac{5 q L^4}{384 EI}',
    variables: [
      { uk: 'δₘₐₓ - максимальний прогин (в центрі), м', ru: 'δₘₐₓ - максимальный прогиб (в центре), м', en: 'δₘₐₓ - maximum deflection (at center), m', de: 'δₘₐₓ - maximale Durchbiegung (in Mitte), m' },
      { uk: 'q - рівномірно розподілене навантаження, Н/м', ru: 'q - равномерно распределенная нагрузка, Н/м', en: 'q - uniformly distributed load, N/m', de: 'q - Gleichlast, N/m' },
      { uk: 'L - проліт балки, м', ru: 'L - пролет балки, м', en: 'L - span, m', de: 'L - Spannweite, m' },
      { uk: 'E - модуль пружності, Па', ru: 'E - модуль упругости, Па', en: 'E - elastic modulus, Pa', de: 'E - Elastizitätsmodul, Pa' },
      { uk: 'I - момент інерції, м⁴', ru: 'I - момент инерции, м⁴', en: 'I - moment of inertia, m⁴', de: 'I - Trägheitsmoment, m⁴' }
    ],
    example: {
      uk: 'q = 10 кН/м, L = 6 м, E = 200 ГПа, I = 1×10⁻⁴ м⁴ → δₘₐₓ ≈ 0.0169 м',
      ru: 'q = 10 кН/м, L = 6 м, E = 200 ГПа, I = 1×10⁻⁴ м⁴ → δₘₐₓ ≈ 0.0169 м',
      en: 'q = 10 kN/m, L = 6 m, E = 200 GPa, I = 1×10⁻⁴ m⁴ → δₘₐₓ ≈ 0.0169 m',
      de: 'q = 10 kN/m, L = 6 m, E = 200 GPa, I = 1×10⁻⁴ m⁴ → δₘₐₓ ≈ 0.0169 m'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'moment-inertia-rectangle',
    category: 'bending',
    title: {
      uk: 'Момент інерції прямокутного перерізу',
      ru: 'Момент инерции прямоугольного сечения',
      en: 'Moment of Inertia for Rectangular Section',
      de: 'Trägheitsmoment für Rechteckquerschnitt'
    },
    formula: 'I = \\frac{b h^3}{12}',
    latex: 'I = \\frac{b h^3}{12}',
    variables: [
      { uk: 'I - момент інерції, м⁴', ru: 'I - момент инерции, м⁴', en: 'I - moment of inertia, m⁴', de: 'I - Trägheitsmoment, m⁴' },
      { uk: 'b - ширина перерізу, м', ru: 'b - ширина сечения, м', en: 'b - width, m', de: 'b - Breite, m' },
      { uk: 'h - висота перерізу, м', ru: 'h - высота сечения, м', en: 'h - height, m', de: 'h - Höhe, m' }
    ],
    example: {
      uk: 'b = 0.2 м, h = 0.4 м → I = 0.2 × 0.4³ / 12 ≈ 1.07×10⁻³ м⁴',
      ru: 'b = 0.2 м, h = 0.4 м → I = 0.2 × 0.4³ / 12 ≈ 1.07×10⁻³ м⁴',
      en: 'b = 0.2 m, h = 0.4 m → I = 0.2 × 0.4³ / 12 ≈ 1.07×10⁻³ m⁴',
      de: 'b = 0.2 m, h = 0.4 m → I = 0.2 × 0.4³ / 12 ≈ 1.07×10⁻³ m⁴'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'moment-inertia-circle',
    category: 'bending',
    title: {
      uk: 'Момент інерції круглого перерізу',
      ru: 'Момент инерции круглого сечения',
      en: 'Moment of Inertia for Circular Section',
      de: 'Trägheitsmoment für Kreisquerschnitt'
    },
    formula: 'I = \\frac{\\pi d^4}{64}',
    latex: 'I = \\frac{\\pi d^4}{64}',
    variables: [
      { uk: 'I - момент інерції, м⁴', ru: 'I - момент инерции, м⁴', en: 'I - moment of inertia, m⁴', de: 'I - Trägheitsmoment, m⁴' },
      { uk: 'd - діаметр перерізу, м', ru: 'd - диаметр сечения, м', en: 'd - diameter, m', de: 'd - Durchmesser, m' }
    ],
    example: {
      uk: 'd = 0.1 м → I = π × 0.1⁴ / 64 ≈ 4.91×10⁻⁶ м⁴',
      ru: 'd = 0.1 м → I = π × 0.1⁴ / 64 ≈ 4.91×10⁻⁶ м⁴',
      en: 'd = 0.1 m → I = π × 0.1⁴ / 64 ≈ 4.91×10⁻⁶ m⁴',
      de: 'd = 0.1 m → I = π × 0.1⁴ / 64 ≈ 4.91×10⁻⁶ m⁴'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'plastic-section-modulus',
    category: 'bending',
    title: {
      uk: 'Пластичний момент опору',
      ru: 'Пластический момент сопротивления',
      en: 'Plastic Section Modulus',
      de: 'Plastisches Widerstandsmoment'
    },
    formula: 'W_{pl} = A \\cdot z',
    latex: 'W_{pl} = A \\cdot z',
    variables: [
      { uk: 'Wₚₗ - пластичний момент опору, м³', ru: 'Wₚₗ - пластический момент сопротивления, м³', en: 'Wₚₗ - plastic section modulus, m³', de: 'Wₚₗ - plastisches Widerstandsmoment, m³' },
      { uk: 'A - площа частини перерізу, м²', ru: 'A - площадь части сечения, м²', en: 'A - area of section part, m²', de: 'A - Teilfläche, m²' },
      { uk: 'z - відстань між центрами ваги частин, м', ru: 'z - расстояние между центрами тяжести частей, м', en: 'z - distance between centroids, m', de: 'z - Abstand zwischen Schwerpunkten, m' }
    ],
    example: {
      uk: 'Для прямокутника: Wₚₗ = bh²/4',
      ru: 'Для прямоугольника: Wₚₗ = bh²/4',
      en: 'For rectangle: Wₚₗ = bh²/4',
      de: 'Für Rechteck: Wₚₗ = bh²/4'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  }
];

export default bendingFormulas;
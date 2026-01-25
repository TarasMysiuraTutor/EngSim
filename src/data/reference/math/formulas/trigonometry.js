// src/data/reference/math/formulas/trigonometry.js
export const trigonometryFormulas = [
  {
    id: 'trig_identity',
    category: 'trigonometry',
    title: {
      uk: 'Основна тригонометрична тотожність',
      ru: 'Основное тригонометрическое тождество',
      en: 'Pythagorean Trigonometric Identity',
      de: 'Trigonometrischer Pythagoras'
    },
    formula: 'sin²(α) + cos²(α) = 1',
    latex: '\\sin^2(\\alpha) + \\cos^2(\\alpha) = 1',
    variables: [
      { uk: 'α — кут', ru: 'α — угол', en: 'α — angle', de: 'α — Winkel' }
    ],
    source: {
      name: 'ISO 80000-2:2019',
      url: 'https://www.iso.org/standard/64973.html'
    }
  },
  {
    id: 'tan_identity',
    category: 'trigonometry',
    title: {
      uk: 'Тангенс через синус і косинус',
      ru: 'Тангенс через синус и косинус',
      en: 'Tangent Identity',
      de: 'Tangens-Identität'
    },
    formula: 'tan(α) = sin(α)/cos(α)',
    latex: '\\tan(\\alpha) = \\frac{\\sin(\\alpha)}{\\cos(\\alpha)}',
    variables: [
      { uk: 'cos(α) ≠ 0', ru: 'cos(α) ≠ 0', en: 'cos(α) ≠ 0', de: 'cos(α) ≠ 0' }
    ]
  },
  {
    id: 'cot_identity',
    category: 'trigonometry',
    title: {
      uk: 'Котангенс через косинус і синус',
      ru: 'Котангенс через косинус и синус',
      en: 'Cotangent Identity',
      de: 'Kotangens-Identität'
    },
    formula: 'cot(α) = cos(α)/sin(α)',
    latex: '\\cot(\\alpha) = \\frac{\\cos(\\alpha)}{\\sin(\\alpha)}',
    variables: [
      { uk: 'sin(α) ≠ 0', ru: 'sin(α) ≠ 0', en: 'sin(α) ≠ 0', de: 'sin(α) ≠ 0' }
    ]
  },
  {
    id: 'sec_csc_identity',
    category: 'trigonometry',
    title: {
      uk: 'Секанс і косеканс',
      ru: 'Секанс и косеканс',
      en: 'Secant and Cosecant',
      de: 'Sekans und Kosekans'
    },
    formula: 'sec(α) = 1/cos(α), csc(α) = 1/sin(α)',
    latex: '\\sec(\\alpha) = \\frac{1}{\\cos(\\alpha)}, \\quad \\csc(\\alpha) = \\frac{1}{\\sin(\\alpha)}'
  },
  {
    id: 'law_of_sines',
    category: 'trigonometry',
    title: {
      uk: 'Теорема синусів',
      ru: 'Теорема синусов',
      en: 'Law of Sines',
      de: 'Sinussatz'
    },
    formula: 'a/sin(α) = b/sin(β) = c/sin(γ)',
    latex: '\\frac{a}{\\sin(\\alpha)} = \\frac{b}{\\sin(\\beta)} = \\frac{c}{\\sin(\\gamma)}',
    variables: [
      { uk: 'a, b, c — сторони трикутника', ru: 'a, b, c — стороны треугольника', en: 'a, b, c — triangle sides', de: 'a, b, c — Dreiecksseiten' },
      { uk: 'α, β, γ — протилежні кути', ru: 'α, β, γ — противолежащие углы', en: 'α, β, γ — opposite angles', de: 'α, β, γ — gegenüberliegende Winkel' }
    ]
  },
  {
    id: 'law_of_cosines',
    category: 'trigonometry',
    title: {
      uk: 'Теорема косинусів',
      ru: 'Теорема косинусов',
      en: 'Law of Cosines',
      de: 'Kosinussatz'
    },
    formula: 'c² = a² + b² − 2ab×cos(γ)',
    latex: 'c^2 = a^2 + b^2 - 2ab\\cos(\\gamma)',
    variables: [
      { uk: 'a, b, c — сторони трикутника', ru: 'a, b, c — стороны треугольника', en: 'a, b, c — triangle sides', de: 'a, b, c — Dreiecksseiten' },
      { uk: 'γ — кут між a і b', ru: 'γ — угол между a и b', en: 'γ — angle between a and b', de: 'γ — Winkel zwischen a und b' }
    ]
  },
  {
    id: 'double_angle_sin',
    category: 'trigonometry',
    title: {
      uk: 'Синус подвійного кута',
      ru: 'Синус двойного угла',
      en: 'Double Angle Sine',
      de: 'Doppelwinkelsinus'
    },
    formula: 'sin(2α) = 2sin(α)cos(α)',
    latex: '\\sin(2\\alpha) = 2\\sin(\\alpha)\\cos(\\alpha)'
  },
  {
    id: 'double_angle_cos',
    category: 'trigonometry',
    title: {
      uk: 'Косинус подвійного кута',
      ru: 'Косинус двойного угла',
      en: 'Double Angle Cosine',
      de: 'Doppelwinkelkosinus'
    },
    formula: 'cos(2α) = cos²(α) − sin²(α)',
    latex: '\\cos(2\\alpha) = \\cos^2(\\alpha) - \\sin^2(\\alpha)'
  },
  {
    id: 'sum_angles_sin',
    category: 'trigonometry',
    title: {
      uk: 'Синус суми кутів',
      ru: 'Синус суммы углов',
      en: 'Sine of Sum',
      de: 'Sinus der Summe'
    },
    formula: 'sin(α + β) = sin(α)cos(β) + cos(α)sin(β)',
    latex: '\\sin(\\alpha + \\beta) = \\sin(\\alpha)\\cos(\\beta) + \\cos(\\alpha)\\sin(\\beta)'
  },
  {
    id: 'sum_angles_cos',
    category: 'trigonometry',
    title: {
      uk: 'Косинус суми кутів',
      ru: 'Косинус суммы углов',
      en: 'Cosine of Sum',
      de: 'Kosinus der Summe'
    },
    formula: 'cos(α + β) = cos(α)cos(β) − sin(α)sin(β)',
    latex: '\\cos(\\alpha + \\beta) = \\cos(\\alpha)\\cos(\\beta) - \\sin(\\alpha)\\sin(\\beta)'
  },
  {
    id: 'half_angle_sin',
    category: 'trigonometry',
    title: {
      uk: 'Синус половинного кута',
      ru: 'Синус половинного угла',
      en: 'Half Angle Sine',
      de: 'Halbwinkelsinus'
    },
    formula: 'sin(α/2) = ±√((1−cos(α))/2)',
    latex: '\\sin\\left(\\frac{\\alpha}{2}\\right) = \\pm\\sqrt{\\frac{1-\\cos(\\alpha)}{2}}'
  },
  {
    id: 'triangle_area_trig',
    category: 'trigonometry',
    title: {
      uk: 'Площа трикутника (тригонометрична)',
      ru: 'Площадь треугольника (тригонометрическая)',
      en: 'Triangle Area (Trigonometric)',
      de: 'Dreiecksfläche (trigonometrisch)'
    },
    formula: 'A = (1/2)ab×sin(γ)',
    latex: 'A = \\frac{1}{2}ab\\sin(\\gamma)',
    variables: [
      { uk: 'a, b — сторони', ru: 'a, b — стороны', en: 'a, b — sides', de: 'a, b — Seiten' },
      { uk: 'γ — кут між ними', ru: 'γ — угол между ними', en: 'γ — angle between them', de: 'γ — Winkel dazwischen' }
    ]
  }
];
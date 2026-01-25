export const calculusFormulas = [
  // ПОХІДНІ
  {
    id: 'power_rule',
    category: 'calculus',
    title: {
      uk: 'Похідна степеневої функції',
      ru: 'Производная степенной функции',
      en: 'Power Rule',
      de: 'Potenzregel'
    },
    formula: 'd(xⁿ)/dx = n×xⁿ⁻¹',
    latex: '\\frac{d}{dx}(x^n) = nx^{n-1}',
    variables: [
      { uk: 'n — будь-яке дійсне число', ru: 'n — любое действительное число', en: 'n — any real number', de: 'n — beliebige reelle Zahl' }
    ],
    example: {
      uk: 'Приклад: d(x³)/dx = 3x²',
      ru: 'Пример: d(x³)/dx = 3x²',
      en: 'Example: d(x³)/dx = 3x²',
      de: 'Beispiel: d(x³)/dx = 3x²'
    }
  },
  {
    id: 'derivative_sin',
    category: 'calculus',
    title: {
      uk: 'Похідна синуса',
      ru: 'Производная синуса',
      en: 'Derivative of Sine',
      de: 'Ableitung des Sinus'
    },
    formula: 'd(sin x)/dx = cos x',
    latex: '\\frac{d}{dx}(\\sin x) = \\cos x'
  },
  {
    id: 'derivative_cos',
    category: 'calculus',
    title: {
      uk: 'Похідна косинуса',
      ru: 'Производная косинуса',
      en: 'Derivative of Cosine',
      de: 'Ableitung des Kosinus'
    },
    formula: 'd(cos x)/dx = −sin x',
    latex: '\\frac{d}{dx}(\\cos x) = -\\sin x'
  },
  {
    id: 'derivative_tan',
    category: 'calculus',
    title: {
      uk: 'Похідна тангенса',
      ru: 'Производная тангенса',
      en: 'Derivative of Tangent',
      de: 'Ableitung des Tangens'
    },
    formula: 'd(tan x)/dx = 1/cos²(x)',
    latex: '\\frac{d}{dx}(\\tan x) = \\frac{1}{\\cos^2 x} = \\sec^2 x'
  },
  {
    id: 'derivative_exp',
    category: 'calculus',
    title: {
      uk: 'Похідна експоненти',
      ru: 'Производная экспоненты',
      en: 'Derivative of Exponential',
      de: 'Ableitung der Exponentialfunktion'
    },
    formula: 'd(eˣ)/dx = eˣ',
    latex: '\\frac{d}{dx}(e^x) = e^x',
    variables: [
      { uk: 'e ≈ 2.71828', ru: 'e ≈ 2.71828', en: 'e ≈ 2.71828', de: 'e ≈ 2.71828' }
    ]
  },
  {
    id: 'derivative_ln',
    category: 'calculus',
    title: {
      uk: 'Похідна натурального логарифму',
      ru: 'Производная натурального логарифма',
      en: 'Derivative of Natural Logarithm',
      de: 'Ableitung des natürlichen Logarithmus'
    },
    formula: 'd(ln x)/dx = 1/x',
    latex: '\\frac{d}{dx}(\\ln x) = \\frac{1}{x}',
    variables: [
      { uk: 'x > 0', ru: 'x > 0', en: 'x > 0', de: 'x > 0' }
    ]
  },
  {
    id: 'derivative_log',
    category: 'calculus',
    title: {
      uk: 'Похідна логарифму за основою a',
      ru: 'Производная логарифма по основанию a',
      en: 'Derivative of Logarithm Base a',
      de: 'Ableitung des Logarithmus zur Basis a'
    },
    formula: 'd(logₐ x)/dx = 1/(x×ln a)',
    latex: '\\frac{d}{dx}(\\log_a x) = \\frac{1}{x \\ln a}'
  },
  {
    id: 'derivative_arcsin',
    category: 'calculus',
    title: {
      uk: 'Похідна арксинуса',
      ru: 'Производная арксинуса',
      en: 'Derivative of Arcsine',
      de: 'Ableitung des Arkussinus'
    },
    formula: 'd(arcsin x)/dx = 1/√(1−x²)',
    latex: '\\frac{d}{dx}(\\arcsin x) = \\frac{1}{\\sqrt{1-x^2}}'
  },
  {
    id: 'derivative_arctan',
    category: 'calculus',
    title: {
      uk: 'Похідна арктангенса',
      ru: 'Производная арктангенса',
      en: 'Derivative of Arctangent',
      de: 'Ableitung des Arkustangens'
    },
    formula: 'd(arctan x)/dx = 1/(1+x²)',
    latex: '\\frac{d}{dx}(\\arctan x) = \\frac{1}{1+x^2}'
  },
  {
    id: 'product_rule',
    category: 'calculus',
    title: {
      uk: 'Правило добутку',
      ru: 'Правило произведения',
      en: 'Product Rule',
      de: 'Produktregel'
    },
    formula: 'd(uv)/dx = u\'v + uv\'',
    latex: '\\frac{d}{dx}(uv) = u\'v + uv\''
  },
  {
    id: 'quotient_rule',
    category: 'calculus',
    title: {
      uk: 'Правило частки',
      ru: 'Правило частного',
      en: 'Quotient Rule',
      de: 'Quotientenregel'
    },
    formula: 'd(u/v)/dx = (u\'v − uv\')/v²',
    latex: '\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{u\'v - uv\'}{v^2}'
  },
  {
    id: 'chain_rule',
    category: 'calculus',
    title: {
      uk: 'Правило ланцюга',
      ru: 'Правило цепи',
      en: 'Chain Rule',
      de: 'Kettenregel'
    },
    formula: 'd(f(g(x)))/dx = f\'(g(x))×g\'(x)',
    latex: '\\frac{d}{dx}f(g(x)) = f\'(g(x)) \\cdot g\'(x)'
  },

  // ІНТЕГРАЛИ
  {
    id: 'integral_power',
    category: 'calculus',
    title: {
      uk: 'Інтеграл степеневої функції',
      ru: 'Интеграл степенной функции',
      en: 'Integral of Power Function',
      de: 'Integral der Potenzfunktion'
    },
    formula: '∫ xⁿ dx = xⁿ⁺¹/(n+1) + C',
    latex: '\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C',
    variables: [
      { uk: 'n ≠ −1', ru: 'n ≠ −1', en: 'n ≠ −1', de: 'n ≠ −1' },
      { uk: 'C — константа', ru: 'C — константа', en: 'C — constant', de: 'C — Konstante' }
    ]
  },
  {
    id: 'integral_exp',
    category: 'calculus',
    title: {
      uk: 'Інтеграл експоненти',
      ru: 'Интеграл экспоненты',
      en: 'Integral of Exponential',
      de: 'Integral der Exponentialfunktion'
    },
    formula: '∫ eˣ dx = eˣ + C',
    latex: '\\int e^x \\, dx = e^x + C'
  },
  {
    id: 'integral_sin',
    category: 'calculus',
    title: {
      uk: 'Інтеграл синуса',
      ru: 'Интеграл синуса',
      en: 'Integral of Sine',
      de: 'Integral des Sinus'
    },
    formula: '∫ sin x dx = −cos x + C',
    latex: '\\int \\sin x \\, dx = -\\cos x + C'
  },
  {
    id: 'integral_cos',
    category: 'calculus',
    title: {
      uk: 'Інтеграл косинуса',
      ru: 'Интеграл косинуса',
      en: 'Integral of Cosine',
      de: 'Integral des Kosinus'
    },
    formula: '∫ cos x dx = sin x + C',
    latex: '\\int \\cos x \\, dx = \\sin x + C'
  },
  {
    id: 'integral_1_over_x',
    category: 'calculus',
    title: {
      uk: 'Інтеграл 1/x',
      ru: 'Интеграл 1/x',
      en: 'Integral of 1/x',
      de: 'Integral von 1/x'
    },
    formula: '∫ (1/x) dx = ln|x| + C',
    latex: '\\int \\frac{1}{x} \\, dx = \\ln|x| + C'
  },
  {
    id: 'integral_tan',
    category: 'calculus',
    title: {
      uk: 'Інтеграл тангенса',
      ru: 'Интеграл тангенса',
      en: 'Integral of Tangent',
      de: 'Integral des Tangens'
    },
    formula: '∫ tan x dx = −ln|cos x| + C',
    latex: '\\int \\tan x \\, dx = -\\ln|\\cos x| + C'
  },
  {
    id: 'integration_by_parts',
    category: 'calculus',
    title: {
      uk: 'Інтегрування частинами',
      ru: 'Интегрирование по частям',
      en: 'Integration by Parts',
      de: 'Partielle Integration'
    },
    formula: '∫ u dv = uv − ∫ v du',
    latex: '\\int u \\, dv = uv - \\int v \\, du'
  },
  {
    id: 'fundamental_theorem',
    category: 'calculus',
    title: {
      uk: 'Основна теорема математичного аналізу',
      ru: 'Основная теорема математического анализа',
      en: 'Fundamental Theorem of Calculus',
      de: 'Hauptsatz der Differential- und Integralrechnung'
    },
    formula: '∫ₐᵇ f(x) dx = F(b) − F(a)',
    latex: '\\int_a^b f(x) \\, dx = F(b) - F(a)',
    variables: [
      { uk: 'F\' = f', ru: 'F\' = f', en: 'F\' = f', de: 'F\' = f' }
    ]
  }
];
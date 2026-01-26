// src/data/reference/massTransfer/formulas/distillation.js
export const distillationFormulas = [
  {
    id: 'raoult_law',
    category: 'distillation',
    title: {
      uk: 'Закон Рауля',
      ru: 'Закон Рауля',
      en: 'Raoult\'s Law',
      de: 'Raoult-Gesetz'
    },
    formula: 'p_i = x_i × p_i°',
    latex: 'p_i = x_i p_i^\\circ',
    variables: [
      { uk: 'p_i — парціальний тиск компонента i, Па', ru: 'p_i — парциальное давление компонента i, Па', en: 'p_i — partial pressure of component i, Pa', de: 'p_i — Partialdruck der Komponente i, Pa' },
      { uk: 'x_i — мольна частка в рідині', ru: 'x_i — мольная доля в жидкости', en: 'x_i — mole fraction in liquid', de: 'x_i — Molenbruch in Flüssigkeit' },
      { uk: 'p_i° — тиск насиченої пари, Па', ru: 'p_i° — давление насыщенного пара, Па', en: 'p_i° — saturated vapor pressure, Pa', de: 'p_i° — Sättigungsdampfdruck, Pa' }
    ],
    source: {
      name: 'Рауль Ф.-М., 1887',
      url: 'https://en.wikipedia.org/wiki/Raoult%27s_law'
    }
  },
  {
    id: 'dalton_law',
    category: 'distillation',
    title: {
      uk: 'Закон Дальтона',
      ru: 'Закон Дальтона',
      en: 'Dalton\'s Law',
      de: 'Dalton-Gesetz'
    },
    formula: 'P = Σp_i',
    latex: 'P = \\sum p_i',
    variables: [
      { uk: 'P — загальний тиск, Па', ru: 'P — общее давление, Па', en: 'P — total pressure, Pa', de: 'P — Gesamtdruck, Pa' },
      { uk: 'p_i — парціальний тиск компонента i', ru: 'p_i — парциальное давление компонента i', en: 'p_i — partial pressure of component i', de: 'p_i — Partialdruck der Komponente i' }
    ]
  },
  {
    id: 'relative_volatility',
    category: 'distillation',
    title: {
      uk: 'Відносна леткість',
      ru: 'Относительная летучесть',
      en: 'Relative Volatility',
      de: 'Relative Flüchtigkeit'
    },
    formula: 'α = (y_A/x_A) / (y_B/x_B)',
    latex: '\\alpha = \\frac{y_A/x_A}{y_B/x_B}',
    variables: [
      { uk: 'y — мольна частка в парі', ru: 'y — мольная доля в паре', en: 'y — mole fraction in vapor', de: 'y — Molenbruch im Dampf' },
      { uk: 'x — мольна частка в рідині', ru: 'x — мольная доля в жидкости', en: 'x — mole fraction in liquid', de: 'x — Molenbruch in Flüssigkeit' }
    ]
  },
  {
    id: 'mccabe_thiele',
    category: 'distillation',
    title: {
      uk: 'Рівняння робочої лінії зміцнення (МакКейб-Тіле)',
      ru: 'Уравнение рабочей линии укрепления (МакКейб-Тиле)',
      en: 'Rectifying Section Operating Line (McCabe-Thiele)',
      de: 'Verstärkungsabschnitt Arbeitslinie (McCabe-Thiele)'
    },
    formula: 'y = (R/(R+1)) × x + x_D/(R+1)',
    latex: 'y = \\frac{R}{R+1} x + \\frac{x_D}{R+1}',
    variables: [
      { uk: 'R — флегмове число', ru: 'R — флегмовое число', en: 'R — reflux ratio', de: 'R — Rücklaufverhältnis' },
      { uk: 'x_D — склад дистиляту', ru: 'x_D — состав дистиллята', en: 'x_D — distillate composition', de: 'x_D — Destillatzusammensetzung' }
    ]
  },
  {
    id: 'fenske_equation',
    category: 'distillation',
    title: {
      uk: 'Рівняння Фенске (мінімальне число тарілок)',
      ru: 'Уравнение Фенске (минимальное число тарелок)',
      en: 'Fenske Equation (Minimum Number of Stages)',
      de: 'Fenske-Gleichung (Mindestzahl der Böden)'
    },
    formula: 'N_min = log[(x_D/(1-x_D)) × ((1-x_W)/x_W)] / log(α)',
    latex: 'N_{min} = \\frac{\\log\\left[\\frac{x_D}{1-x_D} \\cdot \\frac{1-x_W}{x_W}\\right]}{\\log(\\alpha)}',
    variables: [
      { uk: 'x_D — склад дистиляту', ru: 'x_D — состав дистиллята', en: 'x_D — distillate composition', de: 'x_D — Destillatzusammensetzung' },
      { uk: 'x_W — склад кубового залишку', ru: 'x_W — состав кубового остатка', en: 'x_W — bottom composition', de: 'x_W — Sumpfzusammensetzung' },
      { uk: 'α — відносна леткість', ru: 'α — относительная летучесть', en: 'α — relative volatility', de: 'α — relative Flüchtigkeit' }
    ]
  },
  {
    id: 'underwood_equation',
    category: 'distillation',
    title: {
      uk: 'Рівняння Андервуда (мінімальне флегмове число)',
      ru: 'Уравнение Андервуда (минимальное флегмовое число)',
      en: 'Underwood Equation (Minimum Reflux)',
      de: 'Underwood-Gleichung (Mindestrücklauf)'
    },
    formula: 'R_min = Σ(α_i × x_i,D)/(α_i - θ) - 1',
    latex: 'R_{min} = \\sum \\frac{\\alpha_i x_{i,D}}{\\alpha_i - \\theta} - 1',
    variables: [
      { uk: 'α_i — відносна леткість компонента i', ru: 'α_i — относительная летучесть компонента i', en: 'α_i — relative volatility of component i', de: 'α_i — relative Flüchtigkeit der Komponente i' },
      { uk: 'θ — параметр Андервуда', ru: 'θ — параметр Андервуда', en: 'θ — Underwood parameter', de: 'θ — Underwood-Parameter' }
    ]
  },
  {
    id: 'gilliland_correlation',
    category: 'distillation',
    title: {
      uk: 'Кореляція Гіллілeнда',
      ru: 'Корреляция Гиллиленда',
      en: 'Gilliland Correlation',
      de: 'Gilliland-Korrelation'
    },
    formula: '(N-N_min)/(N+1) = f((R-R_min)/(R+1))',
    latex: '\\frac{N-N_{min}}{N+1} = f\\left(\\frac{R-R_{min}}{R+1}\\right)',
    variables: [
      { uk: 'N — дійсне число тарілок', ru: 'N — действительное число тарелок', en: 'N — actual number of stages', de: 'N — tatsächliche Bodenzahl' },
      { uk: 'R — робоче флегмове число', ru: 'R — рабочее флегмовое число', en: 'R — operating reflux ratio', de: 'R — Betriebsrücklaufverhältnis' }
    ]
  }
];
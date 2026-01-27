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
  },
  {
    id: 'antoine_equation',
    category: 'distillation',
    title: {
      uk: 'Рівняння Антуана (тиск насиченої пари)',
      ru: 'Уравнение Антуана (давление насыщенного пара)',
      en: 'Antoine Equation (Vapor Pressure)',
      de: 'Antoine-Gleichung (Dampfdruck)'
    },
    formula: 'log₁₀(P°) = A - B/(C + T)',
    latex: '\\log_{10}(P^\\circ) = A - \\frac{B}{C + T}',
    variables: [
      { uk: 'P° — тиск насиченої пари, мм рт.ст.', ru: 'P° — давление насыщенного пара, мм рт.ст.', en: 'P° — vapor pressure, mmHg', de: 'P° — Dampfdruck, mmHg' },
      { uk: 'T — температура, °C', ru: 'T — температура, °C', en: 'T — temperature, °C', de: 'T — Temperatur, °C' },
      { uk: 'A, B, C — константи Антуана (табличні)', ru: 'A, B, C — константы Антуана (табличные)', en: 'A, B, C — Antoine constants (tabulated)', de: 'A, B, C — Antoine-Konstanten (tabelliert)' }
    ],
    example: {
      uk: 'Для води: A=8.07131, B=1730.63, C=233.426',
      ru: 'Для воды: A=8.07131, B=1730.63, C=233.426',
      en: 'For water: A=8.07131, B=1730.63, C=233.426',
      de: 'Für Wasser: A=8.07131, B=1730.63, C=233.426'
    }
  },
  {
    id: 'clausius_clapeyron',
    category: 'distillation',
    title: {
      uk: 'Рівняння Клаузіуса-Клапейрона',
      ru: 'Уравнение Клаузиуса-Клапейрона',
      en: 'Clausius-Clapeyron Equation',
      de: 'Clausius-Clapeyron-Gleichung'
    },
    formula: 'ln(P₂/P₁) = -(ΔH_vap/R) × (1/T₂ - 1/T₁)',
    latex: '\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{vap}}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)',
    variables: [
      { uk: 'P — тиск пари, Па', ru: 'P — давление пара, Па', en: 'P — vapor pressure, Pa', de: 'P — Dampfdruck, Pa' },
      { uk: 'ΔH_vap — теплота випаровування, Дж/моль', ru: 'ΔH_vap — теплота испарения, Дж/моль', en: 'ΔH_vap — heat of vaporization, J/mol', de: 'ΔH_vap — Verdampfungswärme, J/mol' },
      { uk: 'R — газова константа, 8.314 Дж/(моль·К)', ru: 'R — газовая постоянная, 8.314 Дж/(моль·К)', en: 'R — gas constant, 8.314 J/(mol·K)', de: 'R — Gaskonstante, 8.314 J/(mol·K)' }
    ]
  },
  {
    id: 'murphree_efficiency',
    category: 'distillation',
    title: {
      uk: 'ККД тарілки за Мерфі',
      ru: 'КПД тарелки по Мерфи',
      en: 'Murphree Plate Efficiency',
      de: 'Murphree-Bodenwirkungsgrad'
    },
    formula: 'E_MV = (y_n - y_(n+1))/(y_n* - y_(n+1))',
    latex: 'E_{MV} = \\frac{y_n - y_{n+1}}{y_n^* - y_{n+1}}',
    variables: [
      { uk: 'y_n — фактична концентрація пари з тарілки n', ru: 'y_n — фактическая концентрация пара с тарелки n', en: 'y_n — actual vapor composition from plate n', de: 'y_n — tatsächliche Dampfzusammensetzung von Boden n' },
      { uk: 'y_n* — рівноважна концентрація пари', ru: 'y_n* — равновесная концентрация пара', en: 'y_n* — equilibrium vapor composition', de: 'y_n* — Gleichgewichtsdampfzusammensetzung' },
      { uk: 'y_(n+1) — концентрація вхідної пари', ru: 'y_(n+1) — концентрация входящего пара', en: 'y_(n+1) — inlet vapor composition', de: 'y_(n+1) — Eintrittsdampfzusammensetzung' }
    ]
  },
  {
    id: 'hetp',
    category: 'distillation',
    title: {
      uk: 'Висота, еквівалентна теоретичній тарілці (HETP)',
      ru: 'Высота, эквивалентная теоретической тарелке (HETP)',
      en: 'Height Equivalent to Theoretical Plate (HETP)',
      de: 'Höhe äquivalent zum theoretischen Boden (HETP)'
    },
    formula: 'HETP = Z/N',
    latex: 'HETP = \\frac{Z}{N}',
    variables: [
      { uk: 'Z — висота насадки, м', ru: 'Z — высота насадки, м', en: 'Z — packing height, m', de: 'Z — Packungshöhe, m' },
      { uk: 'N — кількість теоретичних тарілок', ru: 'N — количество теоретических тарелок', en: 'N — number of theoretical plates', de: 'N — Anzahl theoretischer Böden' }
    ]
  },
  {
    id: 'azeotrope_composition',
    category: 'distillation',
    title: {
      uk: 'Склад азеотропної суміші',
      ru: 'Состав азеотропной смеси',
      en: 'Azeotrope Composition',
      de: 'Azeotrope Zusammensetzung'
    },
    formula: 'x_az = y_az (при T_az)',
    latex: 'x_{az} = y_{az} \\quad \\text{at } T_{az}',
    variables: [
      { uk: 'x_az, y_az — склад рідини та пари в точці азеотропу', ru: 'x_az, y_az — состав жидкости и пара в точке азеотропа', en: 'x_az, y_az — liquid and vapor composition at azeotrope', de: 'x_az, y_az — Flüssigkeits- und Dampfzusammensetzung am Azeotrop' },
      { uk: 'T_az — температура азеотропу', ru: 'T_az — температура азеотропа', en: 'T_az — azeotrope temperature', de: 'T_az — Azeotroptemperatur' }
    ]
  },
  {
    id: 'ponchon_savarit',
    category: 'distillation',
    title: {
      uk: 'Метод Поншона-Саваріта (ентальпійний метод)',
      ru: 'Метод Поншона-Саварита (энтальпийный метод)',
      en: 'Ponchon-Savarit Method (Enthalpy Method)',
      de: 'Ponchon-Savarit-Methode (Enthalpiemethode)'
    },
    formula: 'Q = L × (H_V - h_L)',
    latex: 'Q = L(H_V - h_L)',
    variables: [
      { uk: 'Q — тепловий потік, Вт', ru: 'Q — тепловой поток, Вт', en: 'Q — heat duty, W', de: 'Q — Wärmeleistung, W' },
      { uk: 'L — мольний потік рідини, моль/с', ru: 'L — мольный поток жидкости, моль/с', en: 'L — liquid molar flow, mol/s', de: 'L — Flüssigkeitsmolstrom, mol/s' },
      { uk: 'H_V — ентальпія пари, Дж/моль', ru: 'H_V — энтальпия пара, Дж/моль', en: 'H_V — vapor enthalpy, J/mol', de: 'H_V — Dampfenthalpie, J/mol' },
      { uk: 'h_L — ентальпія рідини, Дж/моль', ru: 'h_L — энтальпия жидкости, Дж/моль', en: 'h_L — liquid enthalpy, J/mol', de: 'h_L — Flüssigkeitsenthalpie, J/mol' }
    ]
  },
  {
    id: 'minimum_boilup_ratio',
    category: 'distillation',
    title: {
      uk: 'Мінімальне парове число',
      ru: 'Минимальное паровое число',
      en: 'Minimum Boilup Ratio',
      de: 'Minimales Verdampfungsverhältnis'
    },
    formula: 'V_min/B = (x_B - x_F)/(x_F - y_F*)',
    latex: '\\frac{V_{min}}{B} = \\frac{x_B - x_F}{x_F - y_F^*}',
    variables: [
      { uk: 'V — паровий потік, моль/с', ru: 'V — паровой поток, моль/с', en: 'V — vapor flow, mol/s', de: 'V — Dampfstrom, mol/s' },
      { uk: 'B — потік кубового залишку, моль/с', ru: 'B — поток кубового остатка, моль/с', en: 'B — bottom product flow, mol/s', de: 'B — Sumpfproduktstrom, mol/s' },
      { uk: 'x_B — склад кубового залишку', ru: 'x_B — состав кубового остатка', en: 'x_B — bottom composition', de: 'x_B — Sumpfzusammensetzung' }
    ]
  }
];
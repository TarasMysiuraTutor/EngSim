// src/data/reference/massTransfer/formulas/diffusion.js
export const diffusionFormulas = [
  {
    id: 'fick_first_law',
    category: 'diffusion',
    title: {
      uk: 'Перший закон Фіка',
      ru: 'Первый закон Фика',
      en: 'Fick\'s First Law',
      de: 'Ficksches Erstes Gesetz'
    },
    formula: 'J = −D × (dc/dx)',
    latex: 'J = -D \\frac{dc}{dx}',
    variables: [
      { uk: 'J — дифузійний потік, моль/(м²·с)', ru: 'J — диффузионный поток, моль/(м²·с)', en: 'J — diffusion flux, mol/(m²·s)', de: 'J — Diffusionsfluss, mol/(m²·s)' },
      { uk: 'D — коефіцієнт дифузії, м²/с', ru: 'D — коэффициент диффузии, м²/с', en: 'D — diffusion coefficient, m²/s', de: 'D — Diffusionskoeffizient, m²/s' },
      { uk: 'dc/dx — градієнт концентрації, моль/м⁴', ru: 'dc/dx — градиент концентрации, моль/м⁴', en: 'dc/dx — concentration gradient, mol/m⁴', de: 'dc/dx — Konzentrationsgradient, mol/m⁴' }
    ],
    source: {
      name: 'Фік А., 1855',
      url: 'https://en.wikipedia.org/wiki/Fick%27s_laws_of_diffusion'
    }
  },
  {
    id: 'fick_second_law',
    category: 'diffusion',
    title: {
      uk: 'Другий закон Фіка',
      ru: 'Второй закон Фика',
      en: 'Fick\'s Second Law',
      de: 'Ficksches Zweites Gesetz'
    },
    formula: '∂c/∂t = D × (∂²c/∂x²)',
    latex: '\\frac{\\partial c}{\\partial t} = D \\frac{\\partial^2 c}{\\partial x^2}',
    variables: [
      { uk: 'c — концентрація, моль/м³', ru: 'c — концентрация, моль/м³', en: 'c — concentration, mol/m³', de: 'c — Konzentration, mol/m³' },
      { uk: 't — час, с', ru: 't — время, с', en: 't — time, s', de: 't — Zeit, s' },
      { uk: 'D — коефіцієнт дифузії, м²/с', ru: 'D — коэффициент диффузии, м²/с', en: 'D — diffusion coefficient, m²/s', de: 'D — Diffusionskoeffizient, m²/s' }
    ]
  },
  {
    id: 'stokes_einstein',
    category: 'diffusion',
    title: {
      uk: 'Рівняння Стокса-Ейнштейна',
      ru: 'Уравнение Стокса-Эйнштейна',
      en: 'Stokes-Einstein Equation',
      de: 'Stokes-Einstein-Gleichung'
    },
    formula: 'D = (kT)/(6πηr)',
    latex: 'D = \\frac{kT}{6\\pi\\eta r}',
    variables: [
      { uk: 'k — константа Больцмана, 1.38×10⁻²³ Дж/К', ru: 'k — постоянная Больцмана, 1.38×10⁻²³ Дж/К', en: 'k — Boltzmann constant, 1.38×10⁻²³ J/K', de: 'k — Boltzmann-Konstante, 1.38×10⁻²³ J/K' },
      { uk: 'T — температура, К', ru: 'T — температура, К', en: 'T — temperature, K', de: 'T — Temperatur, K' },
      { uk: 'η — в\'язкість, Па·с', ru: 'η — вязкость, Па·с', en: 'η — viscosity, Pa·s', de: 'η — Viskosität, Pa·s' },
      { uk: 'r — радіус частинки, м', ru: 'r — радиус частицы, м', en: 'r — particle radius, m', de: 'r — Teilchenradius, m' }
    ]
  },
  {
    id: 'wilke_chang',
    category: 'diffusion',
    title: {
      uk: 'Рівняння Вілке-Ченга',
      ru: 'Уравнение Уилке-Ченга',
      en: 'Wilke-Chang Equation',
      de: 'Wilke-Chang-Gleichung'
    },
    formula: 'D = (7.4×10⁻⁸ × (φM)^0.5 × T) / (η × V^0.6)',
    latex: 'D = \\frac{7.4 \\times 10^{-8} (\\varphi M)^{0.5} T}{\\eta V^{0.6}}',
    variables: [
      { uk: 'φ — асоціаційний параметр розчинника', ru: 'φ — ассоциационный параметр растворителя', en: 'φ — association parameter', de: 'φ — Assoziationsparameter' },
      { uk: 'M — молярна маса розчинника, г/моль', ru: 'M — молярная масса растворителя, г/моль', en: 'M — solvent molar mass, g/mol', de: 'M — Molmasse des Lösungsmittels, g/mol' },
      { uk: 'T — температура, К', ru: 'T — температура, К', en: 'T — temperature, K', de: 'T — Temperatur, K' },
      { uk: 'η — в\'язкість, сП', ru: 'η — вязкость, сП', en: 'η — viscosity, cP', de: 'η — Viskosität, cP' },
      { uk: 'V — мольний об\'єм речовини, см³/моль', ru: 'V — мольный объем вещества, см³/моль', en: 'V — molar volume, cm³/mol', de: 'V — Molvolumen, cm³/mol' }
    ]
  },
  {
    id: 'fuller_correlation',
    category: 'diffusion',
    title: {
      uk: 'Кореляція Фуллера (газова дифузія)',
      ru: 'Корреляция Фуллера (газовая диффузия)',
      en: 'Fuller Correlation (Gas Diffusion)',
      de: 'Fuller-Korrelation (Gasdiffusion)'
    },
    formula: 'D = (0.00143 × T^1.75) / (P × M_AB^0.5 × (Σv_A^1/3 + Σv_B^1/3)²)',
    latex: 'D = \\frac{0.00143 T^{1.75}}{P M_{AB}^{0.5} (\\Sigma v_A^{1/3} + \\Sigma v_B^{1/3})^2}',
    variables: [
      { uk: 'T — температура, К', ru: 'T — температура, К', en: 'T — temperature, K', de: 'T — Temperatur, K' },
      { uk: 'P — тиск, атм', ru: 'P — давление, атм', en: 'P — pressure, atm', de: 'P — Druck, atm' },
      { uk: 'M_AB — зведена молярна маса', ru: 'M_AB — приведенная молярная масса', en: 'M_AB — reduced molar mass', de: 'M_AB — reduzierte Molmasse' },
      { uk: 'Σv — сума атомних дифузійних об\'ємів', ru: 'Σv — сумма атомных диффузионных объемов', en: 'Σv — sum of atomic diffusion volumes', de: 'Σv — Summe der atomaren Diffusionsvolumina' }
    ]
  },
  {
    id: 'schmidt_number',
    category: 'diffusion',
    title: {
      uk: 'Число Шмідта',
      ru: 'Число Шмидта',
      en: 'Schmidt Number',
      de: 'Schmidt-Zahl'
    },
    formula: 'Sc = ν/D',
    latex: 'Sc = \\frac{\\nu}{D}',
    variables: [
      { uk: 'ν — кінематична в\'язкість, м²/с', ru: 'ν — кинематическая вязкость, м²/с', en: 'ν — kinematic viscosity, m²/s', de: 'ν — kinematische Viskosität, m²/s' },
      { uk: 'D — коефіцієнт дифузії, м²/с', ru: 'D — коэффициент диффузии, м²/с', en: 'D — diffusion coefficient, m²/s', de: 'D — Diffusionskoeffizient, m²/s' }
    ]
  },
  {
    id: 'sherwood_number',
    category: 'diffusion',
    title: {
      uk: 'Число Шервуда',
      ru: 'Число Шервуда',
      en: 'Sherwood Number',
      de: 'Sherwood-Zahl'
    },
    formula: 'Sh = (k_c × L)/D',
    latex: 'Sh = \\frac{k_c L}{D}',
    variables: [
      { uk: 'k_c — коефіцієнт масовіддачі, м/с', ru: 'k_c — коэффициент массоотдачи, м/с', en: 'k_c — mass transfer coefficient, m/s', de: 'k_c — Stoffübergangskoeffizient, m/s' },
      { uk: 'L — характерний розмір, м', ru: 'L — характерный размер, м', en: 'L — characteristic length, m', de: 'L — charakteristische Länge, m' },
      { uk: 'D — коефіцієнт дифузії, м²/с', ru: 'D — коэффициент диффузии, м²/с', en: 'D — diffusion coefficient, m²/s', de: 'D — Diffusionskoeffizient, m²/s' }
    ]
  }
];
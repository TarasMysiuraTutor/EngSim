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
  },
  {
    id: 'chapman_enskog',
    category: 'diffusion',
    title: {
      uk: 'Рівняння Чепмена-Енскога',
      ru: 'Уравнение Чепмена-Энскога',
      en: 'Chapman-Enskog Equation',
      de: 'Chapman-Enskog-Gleichung'
    },
    formula: 'D_AB = (0.00266 × T^(3/2)) / (P × M_AB^(1/2) × σ_AB² × Ω_D)',
    latex: 'D_{AB} = \\frac{0.00266 T^{3/2}}{P M_{AB}^{1/2} \\sigma_{AB}^2 \\Omega_D}',
    variables: [
      { uk: 'T — температура, К', ru: 'T — температура, К', en: 'T — temperature, K', de: 'T — Temperatur, K' },
      { uk: 'P — тиск, атм', ru: 'P — давление, атм', en: 'P — pressure, atm', de: 'P — Druck, atm' },
      { uk: 'M_AB = 2/(1/M_A + 1/M_B)', ru: 'M_AB = 2/(1/M_A + 1/M_B)', en: 'M_AB = 2/(1/M_A + 1/M_B)', de: 'M_AB = 2/(1/M_A + 1/M_B)' },
      { uk: 'σ_AB — діаметр зіткнення, Å', ru: 'σ_AB — диаметр столкновения, Å', en: 'σ_AB — collision diameter, Å', de: 'σ_AB — Stoßdurchmesser, Å' },
      { uk: 'Ω_D — інтеграл зіткнень', ru: 'Ω_D — интеграл столкновений', en: 'Ω_D — collision integral', de: 'Ω_D — Stoßintegral' }
    ],
    source: {
      name: 'Chapman S., Cowling T.G., 1970',
      url: 'https://en.wikipedia.org/wiki/Chapman%E2%80%93Enskog_theory'
    }
  },
  {
    id: 'arrhenius_diffusion',
    category: 'diffusion',
    title: {
      uk: 'Температурна залежність коефіцієнта дифузії (Арреніус)',
      ru: 'Температурная зависимость коэффициента диффузии (Аррениус)',
      en: 'Arrhenius Temperature Dependence of Diffusion',
      de: 'Arrhenius-Temperaturabhängigkeit der Diffusion'
    },
    formula: 'D = D₀ × exp(-E_a/(RT))',
    latex: 'D = D_0 \\exp\\left(-\\frac{E_a}{RT}\\right)',
    variables: [
      { uk: 'D₀ — передекспоненціальний множник, м²/с', ru: 'D₀ — предэкспоненциальный множитель, м²/с', en: 'D₀ — pre-exponential factor, m²/s', de: 'D₀ — präexponentieller Faktor, m²/s' },
      { uk: 'E_a — енергія активації, Дж/моль', ru: 'E_a — энергия активации, Дж/моль', en: 'E_a — activation energy, J/mol', de: 'E_a — Aktivierungsenergie, J/mol' },
      { uk: 'R — газова константа, 8.314 Дж/(моль·К)', ru: 'R — газовая постоянная, 8.314 Дж/(моль·К)', en: 'R — gas constant, 8.314 J/(mol·K)', de: 'R — Gaskonstante, 8.314 J/(mol·K)' },
      { uk: 'T — температура, К', ru: 'T — температура, К', en: 'T — temperature, K', de: 'T — Temperatur, K' }
    ]
  },
  {
    id: 'knudsen_diffusion',
    category: 'diffusion',
    title: {
      uk: 'Кнудсенівська дифузія',
      ru: 'Кнудсеновская диффузия',
      en: 'Knudsen Diffusion',
      de: 'Knudsen-Diffusion'
    },
    formula: 'D_K = (d_pore/3) × √(8RT/(πM))',
    latex: 'D_K = \\frac{d_{pore}}{3} \\sqrt{\\frac{8RT}{\\pi M}}',
    variables: [
      { uk: 'd_pore — діаметр пори, м', ru: 'd_pore — диаметр поры, м', en: 'd_pore — pore diameter, m', de: 'd_pore — Porendurchmesser, m' },
      { uk: 'M — молярна маса, кг/моль', ru: 'M — молярная масса, кг/моль', en: 'M — molar mass, kg/mol', de: 'M — Molmasse, kg/mol' }
    ]
  },
  {
    id: 'effective_diffusivity',
    category: 'diffusion',
    title: {
      uk: 'Ефективний коефіцієнт дифузії в пористому середовищі',
      ru: 'Эффективный коэффициент диффузии в пористой среде',
      en: 'Effective Diffusivity in Porous Media',
      de: 'Effektive Diffusivität in porösen Medien'
    },
    formula: 'D_eff = (ε/τ) × D',
    latex: 'D_{eff} = \\frac{\\varepsilon}{\\tau} D',
    variables: [
      { uk: 'ε — порожнинність', ru: 'ε — пористость', en: 'ε — porosity', de: 'ε — Porosität' },
      { uk: 'τ — звивистість', ru: 'τ — извилистость', en: 'τ — tortuosity', de: 'τ — Tortuosität' },
      { uk: 'D — коефіцієнт дифузії у вільному об\'ємі, м²/с', ru: 'D — коэффициент диффузии в свободном объеме, м²/с', en: 'D — bulk diffusion coefficient, m²/s', de: 'D — Volumendiffusionskoeffizient, m²/s' }
    ]
  },
  {
    id: 'prandtl_number',
    category: 'diffusion',
    title: {
      uk: 'Число Прандтля',
      ru: 'Число Прандтля',
      en: 'Prandtl Number',
      de: 'Prandtl-Zahl'
    },
    formula: 'Pr = ν/α = (c_p × μ)/k',
    latex: 'Pr = \\frac{\\nu}{\\alpha} = \\frac{c_p \\mu}{k}',
    variables: [
      { uk: 'ν — кінематична в\'язкість, м²/с', ru: 'ν — кинематическая вязкость, м²/с', en: 'ν — kinematic viscosity, m²/s', de: 'ν — kinematische Viskosität, m²/s' },
      { uk: 'α — температуропровідність, м²/с', ru: 'α — температуропроводность, м²/с', en: 'α — thermal diffusivity, m²/s', de: 'α — Temperaturleitfähigkeit, m²/s' },
      { uk: 'c_p — теплоємність, Дж/(кг·К)', ru: 'c_p — теплоемкость, Дж/(кг·К)', en: 'c_p — heat capacity, J/(kg·K)', de: 'c_p — Wärmekapazität, J/(kg·K)' },
      { uk: 'μ — динамічна в\'язкість, Па·с', ru: 'μ — динамическая вязкость, Па·с', en: 'μ — dynamic viscosity, Pa·s', de: 'μ — dynamische Viskosität, Pa·s' },
      { uk: 'k — теплопровідність, Вт/(м·К)', ru: 'k — теплопроводность, Вт/(м·К)', en: 'k — thermal conductivity, W/(m·K)', de: 'k — Wärmeleitfähigkeit, W/(m·K)' }
    ]
  },
  {
    id: 'lewis_number',
    category: 'diffusion',
    title: {
      uk: 'Число Льюїса',
      ru: 'Число Льюиса',
      en: 'Lewis Number',
      de: 'Lewis-Zahl'
    },
    formula: 'Le = α/D = Sc/Pr',
    latex: 'Le = \\frac{\\alpha}{D} = \\frac{Sc}{Pr}',
    variables: [
      { uk: 'α — температуропровідність, м²/с', ru: 'α — температуропроводность, м²/с', en: 'α — thermal diffusivity, m²/s', de: 'α — Temperaturleitfähigkeit, m²/s' },
      { uk: 'D — коефіцієнт дифузії, м²/с', ru: 'D — коэффициент диффузии, м²/с', en: 'D — diffusion coefficient, m²/s', de: 'D — Diffusionskoeffizient, m²/s' }
    ]
  }
];
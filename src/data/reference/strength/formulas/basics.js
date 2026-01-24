// src/data/reference/strength/formulas/basics.js
// ОСНОВНІ ФОРМУЛИ ОПОРУ МАТЕРІАЛІВ

export const basicsFormulas = [
  {
    id: 'normal-stress',
    category: 'basics',
    title: {
      uk: 'Нормальне напруження при розтягу/стиску',
      ru: 'Нормальное напряжение при растяжении/сжатии',
      en: 'Normal Stress in Tension/Compression',
      de: 'Normalspannung bei Zug/Druck'
    },
    formula: '\\sigma = \\frac{N}{A}',
    variables: [
      { uk: 'σ - нормальне напруження, Па', ru: 'σ - нормальное напряжение, Па', en: 'σ - normal stress, Pa', de: 'σ - Normalspannung, Pa' },
      { uk: 'N - поздовжня сила, Н', ru: 'N - продольная сила, Н', en: 'N - axial force, N', de: 'N - Längskraft, N' },
      { uk: 'A - площа поперечного перерізу, м²', ru: 'A - площадь поперечного сечения, м²', en: 'A - cross-sectional area, m²', de: 'A - Querschnittsfläche, m²' }
    ],
    example: {
      uk: 'N = 10000 Н, A = 0.001 м² → σ = 10000 / 0.001 = 10 МПа',
      ru: 'N = 10000 Н, A = 0.001 м² → σ = 10000 / 0.001 = 10 МПа',
      en: 'N = 10000 N, A = 0.001 m² → σ = 10000 / 0.001 = 10 MPa',
      de: 'N = 10000 N, A = 0.001 m² → σ = 10000 / 0.001 = 10 MPa'
    },
    diagram: null, // Можна додати: '/diagrams/tension-compression.svg'
    relatedFiles: [],
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/',
      description: {
        uk: 'Єврокод 3: Проектування сталевих конструкцій',
        ru: 'Еврокод 3: Проектирование стальных конструкций',
        en: 'Eurocode 3: Design of steel structures',
        de: 'Eurocode 3: Bemessung und Konstruktion von Stahlbauten'
      }
    }
  },

  {
    id: 'strain',
    category: 'basics',
    title: {
      uk: 'Відносна деформація',
      ru: 'Относительная деформация',
      en: 'Strain',
      de: 'Dehnung'
    },
    formula: '\\varepsilon = \\frac{\\Delta l}{l_0} = \\frac{l - l_0}{l_0}',
    variables: [
      { uk: 'ε - відносна деформація (безрозмірна)', ru: 'ε - относительная деформация (безразмерная)', en: 'ε - strain (dimensionless)', de: 'ε - Dehnung (dimensionslos)' },
      { uk: 'Δl - абсолютне подовження, м', ru: 'Δl - абсолютное удлинение, м', en: 'Δl - absolute elongation, m', de: 'Δl - absolute Verlängerung, m' },
      { uk: 'l₀ - початкова довжина, м', ru: 'l₀ - начальная длина, м', en: 'l₀ - initial length, m', de: 'l₀ - Anfangslänge, m' }
    ],
    example: {
      uk: 'l₀ = 1 м, Δl = 0.002 м → ε = 0.002 = 0.2%',
      ru: 'l₀ = 1 м, Δl = 0.002 м → ε = 0.002 = 0.2%',
      en: 'l₀ = 1 m, Δl = 0.002 m → ε = 0.002 = 0.2%',
      de: 'l₀ = 1 m, Δl = 0.002 m → ε = 0.002 = 0.2%'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'hookes-law',
    category: 'basics',
    title: {
      uk: 'Закон Гука',
      ru: 'Закон Гука',
      en: 'Hooke\'s Law',
      de: 'Hookesches Gesetz'
    },
    formula: '\\sigma = E \\cdot \\varepsilon',
    variables: [
      { uk: 'σ - напруження, Па', ru: 'σ - напряжение, Па', en: 'σ - stress, Pa', de: 'σ - Spannung, Pa' },
      { uk: 'E - модуль пружності (модуль Юнга), Па', ru: 'E - модуль упругости (модуль Юнга), Па', en: 'E - elastic modulus (Young\'s modulus), Pa', de: 'E - Elastizitätsmodul (Youngscher Modul), Pa' },
      { uk: 'ε - відносна деформація', ru: 'ε - относительная деформация', en: 'ε - strain', de: 'ε - Dehnung' }
    ],
    example: {
      uk: 'Для сталі: E = 200 ГПа, ε = 0.001 → σ = 200 МПа',
      ru: 'Для стали: E = 200 ГПа, ε = 0.001 → σ = 200 МПа',
      en: 'For steel: E = 200 GPa, ε = 0.001 → σ = 200 MPa',
      de: 'Für Stahl: E = 200 GPa, ε = 0.001 → σ = 200 MPa'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  }
];

export default basicsFormulas;
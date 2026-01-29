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
    formula: 'sigma = N/A',
    latex: '\\sigma = \\frac{N}{A}',
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
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
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
    formula: 'varepsilon = Delta l/l_0 = (l - l_0)/l_0',
    latex: '\\varepsilon = \\frac{\\Delta l}{l_0} = \\frac{l - l_0}{l_0}',
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
    latex: '\\sigma = E \\cdot \\varepsilon',
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
  },

  {
    id: 'elongation',
    category: 'basics',
    title: {
      uk: 'Абсолютне подовження стержня',
      ru: 'Абсолютное удлинение стержня',
      en: 'Absolute Elongation of Rod',
      de: 'Absolute Verlängerung des Stabes'
    },
    formula: '\\Delta l = \\frac{N \\cdot l}{E \\cdot A}',
    latex: '\\Delta l = \\frac{N \\cdot l}{E \\cdot A}',
    variables: [
      { uk: 'Δl - абсолютне подовження, м', ru: 'Δl - абсолютное удлинение, м', en: 'Δl - absolute elongation, m', de: 'Δl - absolute Verlängerung, m' },
      { uk: 'N - поздовжня сила, Н', ru: 'N - продольная сила, Н', en: 'N - axial force, N', de: 'N - Längskraft, N' },
      { uk: 'l - довжина стержня, м', ru: 'l - длина стержня, м', en: 'l - rod length, m', de: 'l - Stablänge, m' },
      { uk: 'E - модуль пружності, Па', ru: 'E - модуль упругости, Па', en: 'E - elastic modulus, Pa', de: 'E - Elastizitätsmodul, Pa' },
      { uk: 'A - площа перерізу, м²', ru: 'A - площадь сечения, м²', en: 'A - cross-sectional area, m²', de: 'A - Querschnittsfläche, m²' }
    ],
    example: {
      uk: 'N = 50 кН, l = 2 м, E = 200 ГПа, A = 0.001 м² → Δl = 0.0005 м = 0.5 мм',
      ru: 'N = 50 кН, l = 2 м, E = 200 ГПа, A = 0.001 м² → Δl = 0.0005 м = 0.5 мм',
      en: 'N = 50 kN, l = 2 m, E = 200 GPa, A = 0.001 m² → Δl = 0.0005 m = 0.5 mm',
      de: 'N = 50 kN, l = 2 m, E = 200 GPa, A = 0.001 m² → Δl = 0.0005 m = 0.5 mm'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'poisson-ratio',
    category: 'basics',
    title: {
      uk: 'Коефіцієнт Пуассона',
      ru: 'Коэффициент Пуассона',
      en: 'Poisson\'s Ratio',
      de: 'Poissonzahl'
    },
    formula: '\\nu = -\\frac{\\varepsilon_{transverse}}{\\varepsilon_{axial}}',
    latex: '\\nu = -\\frac{\\varepsilon_{transverse}}{\\varepsilon_{axial}}',
    variables: [
      { uk: 'ν - коефіцієнт Пуассона (безрозмірний)', ru: 'ν - коэффициент Пуассона (безразмерный)', en: 'ν - Poisson\'s ratio (dimensionless)', de: 'ν - Poissonzahl (dimensionslos)' },
      { uk: 'εₜᵣₐₙₛᵥₑᵣₛₑ - поперечна деформація', ru: 'εₜᵣₐₙₛᵥₑᵣₛₑ - поперечная деформация', en: 'εₜᵣₐₙₛᵥₑᵣₛₑ - transverse strain', de: 'εₜᵣₐₙₛᵥₑᵣₛₑ - Querdehnung' },
      { uk: 'εₐₓᵢₐₗ - поздовжня деформація', ru: 'εₐₓᵢₐₗ - продольная деформация', en: 'εₐₓᵢₐₗ - axial strain', de: 'εₐₓᵢₐₗ - Längsdehnung' }
    ],
    example: {
      uk: 'Для сталі: ν ≈ 0.3, для гуми: ν ≈ 0.5',
      ru: 'Для стали: ν ≈ 0.3, для резины: ν ≈ 0.5',
      en: 'For steel: ν ≈ 0.3, for rubber: ν ≈ 0.5',
      de: 'Für Stahl: ν ≈ 0.3, für Gummi: ν ≈ 0.5'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'strain-energy',
    category: 'basics',
    title: {
      uk: 'Потенціальна енергія деформації',
      ru: 'Потенциальная энергия деформации',
      en: 'Strain Energy',
      de: 'Formänderungsenergie'
    },
    formula: 'U = \\frac{N^2 l}{2 E A} = \\frac{\\sigma^2 V}{2 E}',
    latex: 'U = \\frac{N^2 l}{2 E A} = \\frac{\\sigma^2 V}{2 E}',
    variables: [
      { uk: 'U - потенціальна енергія деформації, Дж', ru: 'U - потенциальная энергия деформации, Дж', en: 'U - strain energy, J', de: 'U - Formänderungsenergie, J' },
      { uk: 'N - поздовжня сила, Н', ru: 'N - продольная сила, Н', en: 'N - axial force, N', de: 'N - Längskraft, N' },
      { uk: 'l - довжина, м', ru: 'l - длина, м', en: 'l - length, m', de: 'l - Länge, m' },
      { uk: 'E - модуль пружності, Па', ru: 'E - модуль упругости, Па', en: 'E - elastic modulus, Pa', de: 'E - Elastizitätsmodul, Pa' },
      { uk: 'A - площа перерізу, м²', ru: 'A - площадь сечения, м²', en: 'A - cross-sectional area, m²', de: 'A - Querschnittsfläche, m²' },
      { uk: 'σ - напруження, Па', ru: 'σ - напряжение, Па', en: 'σ - stress, Pa', de: 'σ - Spannung, Pa' },
      { uk: 'V - об\'єм, м³', ru: 'V - объем, м³', en: 'V - volume, m³', de: 'V - Volumen, m³' }
    ],
    example: {
      uk: 'Енергія, накопичена в пружно деформованому тілі',
      ru: 'Энергия, накопленная в упруго деформированном теле',
      en: 'Energy stored in elastically deformed body',
      de: 'In elastisch verformtem Körper gespeicherte Energie'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'thermal-stress',
    category: 'basics',
    title: {
      uk: 'Термічні напруження',
      ru: 'Термические напряжения',
      en: 'Thermal Stress',
      de: 'Wärmespannung'
    },
    formula: '\\sigma_T = E \\cdot \\alpha \\cdot \\Delta T',
    latex: '\\sigma_T = E \\cdot \\alpha \\cdot \\Delta T',
    variables: [
      { uk: 'σₜ - термічне напруження, Па', ru: 'σₜ - термическое напряжение, Па', en: 'σₜ - thermal stress, Pa', de: 'σₜ - Wärmespannung, Pa' },
      { uk: 'E - модуль пружності, Па', ru: 'E - модуль упругости, Па', en: 'E - elastic modulus, Pa', de: 'E - Elastizitätsmodul, Pa' },
      { uk: 'α - коефіцієнт лінійного розширення, 1/°C', ru: 'α - коэффициент линейного расширения, 1/°C', en: 'α - coefficient of thermal expansion, 1/°C', de: 'α - Wärmeausdehnungskoeffizient, 1/°C' },
      { uk: 'ΔT - зміна температури, °C', ru: 'ΔT - изменение температуры, °C', en: 'ΔT - temperature change, °C', de: 'ΔT - Temperaturänderung, °C' }
    ],
    example: {
      uk: 'Для сталі: α = 12×10⁻⁶ 1/°C, E = 200 ГПа, ΔT = 50°C → σₜ = 120 МПа',
      ru: 'Для стали: α = 12×10⁻⁶ 1/°C, E = 200 ГПа, ΔT = 50°C → σₜ = 120 МПа',
      en: 'For steel: α = 12×10⁻⁶ 1/°C, E = 200 GPa, ΔT = 50°C → σₜ = 120 MPa',
      de: 'Für Stahl: α = 12×10⁻⁶ 1/°C, E = 200 GPa, ΔT = 50°C → σₜ = 120 MPa'
    },
    source: {
      name: 'EN 1993-1-2:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-2-2005-eurocode-3-design-of-steel-structures-structural-fire-design/'
    }
  },

  {
    id: 'safety-factor',
    category: 'basics',
    title: {
      uk: 'Коефіцієнт запасу міцності',
      ru: 'Коэффициент запаса прочности',
      en: 'Safety Factor',
      de: 'Sicherheitsfaktor'
    },
    formula: 'n = \\frac{\\sigma_{ultimate}}{\\sigma_{working}}',
    latex: 'n = \\frac{\\sigma_{ultimate}}{\\sigma_{working}}',
    variables: [
      { uk: 'n - коефіцієнт запасу', ru: 'n - коэффициент запаса', en: 'n - safety factor', de: 'n - Sicherheitsfaktor' },
      { uk: 'σᵤₗₜᵢₘₐₜₑ - гранична міцність, Па', ru: 'σᵤₗₜᵢₘₐₜₑ - предельная прочность, Па', en: 'σᵤₗₜᵢₘₐₜₑ - ultimate strength, Pa', de: 'σᵤₗₜᵢₘₐₜₑ - Bruchfestigkeit, Pa' },
      { uk: 'σᵥₒᵣₖᵢₙ𝓰 - робоче напруження, Па', ru: 'σᵥₒᵣₖᵢₙ𝓰 - рабочее напряжение, Па', en: 'σᵥₒᵣₖᵢₙ𝓰 - working stress, Pa', de: 'σᵥₒᵣₖᵢₙ𝓰 - Betriebsspannung, Pa' }
    ],
    example: {
      uk: 'Для сталі зазвичай n = 1.5-2.0',
      ru: 'Для стали обычно n = 1.5-2.0',
      en: 'For steel typically n = 1.5-2.0',
      de: 'Für Stahl typischerweise n = 1.5-2.0'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  }
];

export default basicsFormulas;
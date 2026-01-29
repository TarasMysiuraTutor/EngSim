// src/data/reference/strength/formulas/torsion.js
// ФОРМУЛИ ДЛЯ КРУЧЕННЯ

export const torsionFormulas = [
  {
    id: 'torsion-stress',
    category: 'torsion',
    title: {
      uk: 'Дотичне напруження при крученні',
      ru: 'Касательное напряжение при кручении',
      en: 'Torsional Shear Stress',
      de: 'Torsionsspannung'
    },
    formula: '\\tau = \\frac{M_t \\cdot \\rho}{I_p}',
    latex: '\\tau = \\frac{M_t \\cdot \\rho}{I_p}',
    variables: [
      { uk: 'τ - дотичне напруження, Па', ru: 'τ - касательное напряжение, Па', en: 'τ - shear stress, Pa', de: 'τ - Schubspannung, Pa' },
      { uk: 'Mₜ - крутний момент, Н·м', ru: 'Mₜ - крутящий момент, Н·м', en: 'Mₜ - torsional moment, N·m', de: 'Mₜ - Torsionsmoment, N·m' },
      { uk: 'ρ - відстань від центра, м', ru: 'ρ - расстояние от центра, м', en: 'ρ - distance from center, m', de: 'ρ - Abstand vom Zentrum, m' },
      { uk: 'Iₚ - полярний момент інерції, м⁴', ru: 'Iₚ - полярный момент инерции, м⁴', en: 'Iₚ - polar moment of inertia, m⁴', de: 'Iₚ - polares Trägheitsmoment, m⁴' }
    ],
    example: {
      uk: 'Mₜ = 500 Н·м, ρ = 0.05 м, Iₚ = 1×10⁻⁶ м⁴ → τ = 25 МПа',
      ru: 'Mₜ = 500 Н·м, ρ = 0.05 м, Iₚ = 1×10⁻⁶ м⁴ → τ = 25 МПа',
      en: 'Mₜ = 500 N·m, ρ = 0.05 m, Iₚ = 1×10⁻⁶ m⁴ → τ = 25 MPa',
      de: 'Mₜ = 500 N·m, ρ = 0.05 m, Iₚ = 1×10⁻⁶ m⁴ → τ = 25 MPa'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'max-torsion-stress',
    category: 'torsion',
    title: {
      uk: 'Максимальне напруження при крученні',
      ru: 'Максимальное напряжение при кручении',
      en: 'Maximum Torsional Stress',
      de: 'Maximale Torsionsspannung'
    },
    formula: '\\tau_{max} = \\frac{M_t}{W_p}',
    latex: '\\tau_{max} = \\frac{M_t}{W_p}',
    variables: [
      { uk: 'τₘₐₓ - максимальне дотичне напруження, Па', ru: 'τₘₐₓ - максимальное касательное напряжение, Па', en: 'τₘₐₓ - maximum shear stress, Pa', de: 'τₘₐₓ - maximale Schubspannung, Pa' },
      { uk: 'Mₜ - крутний момент, Н·м', ru: 'Mₜ - крутящий момент, Н·м', en: 'Mₜ - torsional moment, N·m', de: 'Mₜ - Torsionsmoment, N·m' },
      { uk: 'Wₚ - полярний момент опору, м³', ru: 'Wₚ - полярный момент сопротивления, м³', en: 'Wₚ - polar section modulus, m³', de: 'Wₚ - polares Widerstandsmoment, m³' }
    ],
    example: {
      uk: 'Mₜ = 1000 Н·м, Wₚ = 5×10⁻⁵ м³ → τₘₐₓ = 20 МПа',
      ru: 'Mₜ = 1000 Н·м, Wₚ = 5×10⁻⁵ м³ → τₘₐₓ = 20 МПа',
      en: 'Mₜ = 1000 N·m, Wₚ = 5×10⁻⁵ m³ → τₘₐₓ = 20 MPa',
      de: 'Mₜ = 1000 N·m, Wₚ = 5×10⁻⁵ m³ → τₘₐₓ = 20 MPa'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'torsion-angle',
    category: 'torsion',
    title: {
      uk: 'Кут закручування',
      ru: 'Угол закручивания',
      en: 'Angle of Twist',
      de: 'Verdrehwinkel'
    },
    formula: '\\theta = \\frac{M_t \\cdot l}{G \\cdot I_p}',
    latex: '\\theta = \\frac{M_t \\cdot l}{G \\cdot I_p}',
    variables: [
      { uk: 'θ - кут закручування, рад', ru: 'θ - угол закручивания, рад', en: 'θ - angle of twist, rad', de: 'θ - Verdrehwinkel, rad' },
      { uk: 'Mₜ - крутний момент, Н·м', ru: 'Mₜ - крутящий момент, Н·м', en: 'Mₜ - torsional moment, N·m', de: 'Mₜ - Torsionsmoment, N·m' },
      { uk: 'l - довжина стержня, м', ru: 'l - длина стержня, м', en: 'l - length of shaft, m', de: 'l - Wellenlänge, m' },
      { uk: 'G - модуль зсуву, Па', ru: 'G - модуль сдвига, Па', en: 'G - shear modulus, Pa', de: 'G - Schubmodul, Pa' },
      { uk: 'Iₚ - полярний момент інерції, м⁴', ru: 'Iₚ - полярный момент инерции, м⁴', en: 'Iₚ - polar moment of inertia, m⁴', de: 'Iₚ - polares Trägheitsmoment, m⁴' }
    ],
    example: {
      uk: 'Mₜ = 500 Н·м, l = 2 м, G = 80 ГПа, Iₚ = 1×10⁻⁶ м⁴ → θ = 0.0125 рад ≈ 0.72°',
      ru: 'Mₜ = 500 Н·м, l = 2 м, G = 80 ГПа, Iₚ = 1×10⁻⁶ м⁴ → θ = 0.0125 рад ≈ 0.72°',
      en: 'Mₜ = 500 N·m, l = 2 m, G = 80 GPa, Iₚ = 1×10⁻⁶ m⁴ → θ = 0.0125 rad ≈ 0.72°',
      de: 'Mₜ = 500 N·m, l = 2 m, G = 80 GPa, Iₚ = 1×10⁻⁶ m⁴ → θ = 0.0125 rad ≈ 0.72°'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'polar-moment-circle',
    category: 'torsion',
    title: {
      uk: 'Полярний момент інерції круглого перерізу',
      ru: 'Полярный момент инерции круглого сечения',
      en: 'Polar Moment of Inertia for Circular Section',
      de: 'Polares Trägheitsmoment für Kreisquerschnitt'
    },
    formula: 'I_p = \\frac{\\pi d^4}{32}',
    latex: 'I_p = \\frac{\\pi d^4}{32}',
    variables: [
      { uk: 'Iₚ - полярний момент інерції, м⁴', ru: 'Iₚ - полярный момент инерции, м⁴', en: 'Iₚ - polar moment of inertia, m⁴', de: 'Iₚ - polares Trägheitsmoment, m⁴' },
      { uk: 'd - діаметр перерізу, м', ru: 'd - диаметр сечения, м', en: 'd - diameter, m', de: 'd - Durchmesser, m' }
    ],
    example: {
      uk: 'd = 0.05 м → Iₚ = π × 0.05⁴ / 32 ≈ 6.14×10⁻⁷ м⁴',
      ru: 'd = 0.05 м → Iₚ = π × 0.05⁴ / 32 ≈ 6.14×10⁻⁷ м⁴',
      en: 'd = 0.05 m → Iₚ = π × 0.05⁴ / 32 ≈ 6.14×10⁻⁷ m⁴',
      de: 'd = 0.05 m → Iₚ = π × 0.05⁴ / 32 ≈ 6.14×10⁻⁷ m⁴'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'polar-moment-hollow',
    category: 'torsion',
    title: {
      uk: 'Полярний момент інерції порожнистого перерізу',
      ru: 'Полярный момент инерции полого сечения',
      en: 'Polar Moment of Inertia for Hollow Section',
      de: 'Polares Trägheitsmoment für Hohlquerschnitt'
    },
    formula: 'I_p = \\frac{\\pi (d_o^4 - d_i^4)}{32}',
    latex: 'I_p = \\frac{\\pi (d_o^4 - d_i^4)}{32}',
    variables: [
      { uk: 'Iₚ - полярний момент інерції, м⁴', ru: 'Iₚ - полярный момент инерции, м⁴', en: 'Iₚ - polar moment of inertia, m⁴', de: 'Iₚ - polares Trägheitsmoment, m⁴' },
      { uk: 'dₒ - зовнішній діаметр, м', ru: 'dₒ - внешний диаметр, м', en: 'dₒ - outer diameter, m', de: 'dₒ - Außendurchmesser, m' },
      { uk: 'dᵢ - внутрішній діаметр, м', ru: 'dᵢ - внутренний диаметр, м', en: 'dᵢ - inner diameter, m', de: 'dᵢ - Innendurchmesser, m' }
    ],
    example: {
      uk: 'dₒ = 0.06 м, dᵢ = 0.05 м → Iₚ = π(0.06⁴ - 0.05⁴)/32 ≈ 6.79×10⁻⁷ м⁴',
      ru: 'dₒ = 0.06 м, dᵢ = 0.05 м → Iₚ = π(0.06⁴ - 0.05⁴)/32 ≈ 6.79×10⁻⁷ м⁴',
      en: 'dₒ = 0.06 m, dᵢ = 0.05 m → Iₚ = π(0.06⁴ - 0.05⁴)/32 ≈ 6.79×10⁻⁷ m⁴',
      de: 'dₒ = 0.06 m, dᵢ = 0.05 m → Iₚ = π(0.06⁴ - 0.05⁴)/32 ≈ 6.79×10⁻⁷ m⁴'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'polar-section-modulus',
    category: 'torsion',
    title: {
      uk: 'Полярний момент опору',
      ru: 'Полярный момент сопротивления',
      en: 'Polar Section Modulus',
      de: 'Polares Widerstandsmoment'
    },
    formula: 'W_p = \\frac{I_p}{r}',
    latex: 'W_p = \\frac{I_p}{r}',
    variables: [
      { uk: 'Wₚ - полярний момент опору, м³', ru: 'Wₚ - полярный момент сопротивления, м³', en: 'Wₚ - polar section modulus, m³', de: 'Wₚ - polares Widerstandsmoment, m³' },
      { uk: 'Iₚ - полярний момент інерції, м⁴', ru: 'Iₚ - полярный момент инерции, м⁴', en: 'Iₚ - polar moment of inertia, m⁴', de: 'Iₚ - polares Trägheitsmoment, m⁴' },
      { uk: 'r - радіус перерізу, м', ru: 'r - радиус сечения, м', en: 'r - radius, m', de: 'r - Radius, m' }
    ],
    example: {
      uk: 'Для круглого перерізу: Wₚ = πd³/16',
      ru: 'Для круглого сечения: Wₚ = πd³/16',
      en: 'For circular section: Wₚ = πd³/16',
      de: 'Für Kreisquerschnitt: Wₚ = πd³/16'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'power-transmission',
    category: 'torsion',
    title: {
      uk: 'Передача потужності через вал',
      ru: 'Передача мощности через вал',
      en: 'Power Transmission through Shaft',
      de: 'Leistungsübertragung durch Welle'
    },
    formula: 'P = M_t \\cdot \\omega = \\frac{2\\pi M_t \\cdot n}{60}',
    latex: 'P = M_t \\cdot \\omega = \\frac{2\\pi M_t \\cdot n}{60}',
    variables: [
      { uk: 'P - потужність, Вт', ru: 'P - мощность, Вт', en: 'P - power, W', de: 'P - Leistung, W' },
      { uk: 'Mₜ - крутний момент, Н·м', ru: 'Mₜ - крутящий момент, Н·м', en: 'Mₜ - torsional moment, N·m', de: 'Mₜ - Torsionsmoment, N·m' },
      { uk: 'ω - кутова швидкість, рад/с', ru: 'ω - угловая скорость, рад/с', en: 'ω - angular velocity, rad/s', de: 'ω - Winkelgeschwindigkeit, rad/s' },
      { uk: 'n - частота обертання, об/хв', ru: 'n - частота вращения, об/мин', en: 'n - rotational speed, rpm', de: 'n - Drehzahl, U/min' }
    ],
    example: {
      uk: 'P = 10 кВт, n = 1500 об/хв → Mₜ = 60×10000/(2π×1500) ≈ 63.7 Н·м',
      ru: 'P = 10 кВт, n = 1500 об/мин → Mₜ = 60×10000/(2π×1500) ≈ 63.7 Н·м',
      en: 'P = 10 kW, n = 1500 rpm → Mₜ = 60×10000/(2π×1500) ≈ 63.7 N·m',
      de: 'P = 10 kW, n = 1500 U/min → Mₜ = 60×10000/(2π×1500) ≈ 63.7 N·m'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  }
];

export default torsionFormulas;
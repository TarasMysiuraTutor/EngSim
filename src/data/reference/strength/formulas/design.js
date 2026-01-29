// src/data/reference/strength/formulas/design.js
// ФОРМУЛИ ДЛЯ ПРОЕКТУВАННЯ

export const designFormulas = [
  {
    id: 'design-resistance',
    category: 'design',
    title: {
      uk: 'Розрахунковий опір',
      ru: 'Расчетное сопротивление',
      en: 'Design Resistance',
      de: 'Bemessungswiderstand'
    },
    formula: 'f_d = \\frac{f_k}{\\gamma_M}',
    latex: 'f_d = \\frac{f_k}{\\gamma_M}',
    variables: [
      { uk: 'fₐ - розрахунковий опір, Па', ru: 'fₐ - расчетное сопротивление, Па', en: 'fₐ - design resistance, Pa', de: 'fₐ - Bemessungswiderstand, Pa' },
      { uk: 'fₖ - характеристичний опір, Па', ru: 'fₖ - характеристическое сопротивление, Па', en: 'fₖ - characteristic resistance, Pa', de: 'fₖ - charakteristischer Widerstand, Pa' },
      { uk: 'γₘ - частковий коефіцієнт безпеки', ru: 'γₘ - частичный коэффициент безопасности', en: 'γₘ - partial safety factor', de: 'γₘ - Teilsicherheitsbeiwert' }
    ],
    example: {
      uk: 'Для сталі S235: γₘ₀ = 1.0, γₘ₁ = 1.0, γₘ₂ = 1.25',
      ru: 'Для стали S235: γₘ₀ = 1.0, γₘ₁ = 1.0, γₘ₂ = 1.25',
      en: 'For steel S235: γₘ₀ = 1.0, γₘ₁ = 1.0, γₘ₂ = 1.25',
      de: 'Für Stahl S235: γₘ₀ = 1.0, γₘ₁ = 1.0, γₘ₂ = 1.25'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'tension-resistance',
    category: 'design',
    title: {
      uk: 'Несуча здатність при розтягу',
      ru: 'Несущая способность при растяжении',
      en: 'Tension Resistance',
      de: 'Zugwiderstand'
    },
    formula: 'N_{t,Rd} = \\frac{A f_y}{\\gamma_{M0}}',
    latex: 'N_{t,Rd} = \\frac{A f_y}{\\gamma_{M0}}',
    variables: [
      { uk: 'Nₜ,ᴿᵈ - розрахунковий опір розтягу, Н', ru: 'Nₜ,ᴿᵈ - расчетное сопротивление растяжению, Н', en: 'Nₜ,ᴿᵈ - design tension resistance, N', de: 'Nₜ,ᴿᵈ - Bemessungszugwiderstand, N' },
      { uk: 'A - площа перерізу, м²', ru: 'A - площадь сечения, м²', en: 'A - cross-sectional area, m²', de: 'A - Querschnittsfläche, m²' },
      { uk: 'fᵧ - межа текучості, Па', ru: 'fᵧ - предел текучести, Па', en: 'fᵧ - yield strength, Pa', de: 'fᵧ - Streckgrenze, Pa' },
      { uk: 'γₘ₀ = 1.0', ru: 'γₘ₀ = 1.0', en: 'γₘ₀ = 1.0', de: 'γₘ₀ = 1.0' }
    ],
    example: {
      uk: 'A = 0.005 м², fᵧ = 235 МПа → Nₜ,ᴿᵈ = 0.005 × 235×10⁶ / 1.0 = 1175 кН',
      ru: 'A = 0.005 м², fᵧ = 235 МПа → Nₜ,ᴿᵈ = 0.005 × 235×10⁶ / 1.0 = 1175 кН',
      en: 'A = 0.005 m², fᵧ = 235 MPa → Nₜ,ᴿᵈ = 0.005 × 235×10⁶ / 1.0 = 1175 kN',
      de: 'A = 0.005 m², fᵧ = 235 MPa → Nₜ,ᴿᵈ = 0.005 × 235×10⁶ / 1.0 = 1175 kN'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'compression-resistance',
    category: 'design',
    title: {
      uk: 'Несуча здатність при стиску з урахуванням стійкості',
      ru: 'Несущая способность при сжатии с учетом устойчивости',
      en: 'Compression Resistance with Buckling',
      de: 'Druckwiderstand mit Knicknachweis'
    },
    formula: 'N_{b,Rd} = \\frac{\\chi A f_y}{\\gamma_{M1}}',
    latex: 'N_{b,Rd} = \\frac{\\chi A f_y}{\\gamma_{M1}}',
    variables: [
      { uk: 'Nᵦ,ᴿᵈ - розрахунковий опір стиску, Н', ru: 'Nᵦ,ᴿᵈ - расчетное сопротивление сжатию, Н', en: 'Nᵦ,ᴿᵈ - design buckling resistance, N', de: 'Nᵦ,ᴿᵈ - Bemessungsknickwiderstand, N' },
      { uk: 'χ - коефіцієнт поздовжнього згину', ru: 'χ - коэффициент продольного изгиба', en: 'χ - reduction factor for buckling', de: 'χ - Abminderungsfaktor' },
      { uk: 'A - площа перерізу, м²', ru: 'A - площадь сечения, м²', en: 'A - cross-sectional area, m²', de: 'A - Querschnittsfläche, m²' },
      { uk: 'fᵧ - межа текучості, Па', ru: 'fᵧ - предел текучести, Па', en: 'fᵧ - yield strength, Pa', de: 'fᵧ - Streckgrenze, Pa' },
      { uk: 'γₘ₁ = 1.0', ru: 'γₘ₁ = 1.0', en: 'γₘ₁ = 1.0', de: 'γₘ₁ = 1.0' }
    ],
    example: {
      uk: 'χ = 0.8, A = 0.005 м², fᵧ = 235 МПа → Nᵦ,ᴿᵈ = 0.8 × 0.005 × 235×10⁶ = 940 кН',
      ru: 'χ = 0.8, A = 0.005 м², fᵧ = 235 МПа → Nᵦ,ᴿᵈ = 0.8 × 0.005 × 235×10⁶ = 940 кН',
      en: 'χ = 0.8, A = 0.005 m², fᵧ = 235 MPa → Nᵦ,ᴿᵈ = 0.8 × 0.005 × 235×10⁶ = 940 kN',
      de: 'χ = 0.8, A = 0.005 m², fᵧ = 235 MPa → Nᵦ,ᴿᵈ = 0.8 × 0.005 × 235×10⁶ = 940 kN'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'bending-moment-resistance',
    category: 'design',
    title: {
      uk: 'Несуча здатність при згині',
      ru: 'Несущая способность при изгибе',
      en: 'Bending Moment Resistance',
      de: 'Biegewiderstand'
    },
    formula: 'M_{c,Rd} = \\frac{W_{pl} f_y}{\\gamma_{M0}}',
    latex: 'M_{c,Rd} = \\frac{W_{pl} f_y}{\\gamma_{M0}}',
    variables: [
      { uk: 'Mᶜ,ᴿᵈ - розрахунковий момент опору, Н·м', ru: 'Mᶜ,ᴿᵈ - расчетный момент сопротивления, Н·м', en: 'Mᶜ,ᴿᵈ - design moment resistance, N·m', de: 'Mᶜ,ᴿᵈ - Bemessungsbiegewiderstand, N·m' },
      { uk: 'Wₚₗ - пластичний момент опору, м³', ru: 'Wₚₗ - пластический момент сопротивления, м³', en: 'Wₚₗ - plastic section modulus, m³', de: 'Wₚₗ - plastisches Widerstandsmoment, m³' },
      { uk: 'fᵧ - межа текучості, Па', ru: 'fᵧ - предел текучести, Па', en: 'fᵧ - yield strength, Pa', de: 'fᵧ - Streckgrenze, Pa' },
      { uk: 'γₘ₀ = 1.0', ru: 'γₘ₀ = 1.0', en: 'γₘ₀ = 1.0', de: 'γₘ₀ = 1.0' }
    ],
    example: {
      uk: 'Wₚₗ = 500×10⁻⁶ м³, fᵧ = 235 МПа → Mᶜ,ᴿᵈ = 500×10⁻⁶ × 235×10⁶ = 117.5 кН·м',
      ru: 'Wₚₗ = 500×10⁻⁶ м³, fᵧ = 235 МПа → Mᶜ,ᴿᵈ = 500×10⁻⁶ × 235×10⁶ = 117.5 кН·м',
      en: 'Wₚₗ = 500×10⁻⁶ m³, fᵧ = 235 MPa → Mᶜ,ᴿᵈ = 500×10⁻⁶ × 235×10⁶ = 117.5 kN·m',
      de: 'Wₚₗ = 500×10⁻⁶ m³, fᵧ = 235 MPa → Mᶜ,ᴿᵈ = 500×10⁻⁶ × 235×10⁶ = 117.5 kN·m'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'shear-resistance',
    category: 'design',
    title: {
      uk: 'Несуча здатність при зсуві',
      ru: 'Несущая способность при сдвиге',
      en: 'Shear Resistance',
      de: 'Schubwiderstand'
    },
    formula: 'V_{pl,Rd} = \\frac{A_v (f_y/\\sqrt{3})}{\\gamma_{M0}}',
    latex: 'V_{pl,Rd} = \\frac{A_v (f_y/\\sqrt{3})}{\\gamma_{M0}}',
    variables: [
      { uk: 'Vₚₗ,ᴿᵈ - розрахунковий опір зсуву, Н', ru: 'Vₚₗ,ᴿᵈ - расчетное сопротивление сдвигу, Н', en: 'Vₚₗ,ᴿᵈ - design plastic shear resistance, N', de: 'Vₚₗ,ᴿᵈ - plastischer Schubtragwiderstand, N' },
      { uk: 'Aᵥ - площа зсуву, м²', ru: 'Aᵥ - площадь среза, м²', en: 'Aᵥ - shear area, m²', de: 'Aᵥ - Schubfläche, m²' },
      { uk: 'fᵧ - межа текучості, Па', ru: 'fᵧ - предел текучести, Па', en: 'fᵧ - yield strength, Pa', de: 'fᵧ - Streckgrenze, Pa' },
      { uk: 'γₘ₀ = 1.0', ru: 'γₘ₀ = 1.0', en: 'γₘ₀ = 1.0', de: 'γₘ₀ = 1.0' }
    ],
    example: {
      uk: 'Aᵥ = 0.002 м², fᵧ = 235 МПа → Vₚₗ,ᴿᵈ = 0.002 × (235×10⁶/√3) / 1.0 = 271 кН',
      ru: 'Aᵥ = 0.002 м², fᵧ = 235 МПа → Vₚₗ,ᴿᵈ = 0.002 × (235×10⁶/√3) / 1.0 = 271 кН',
      en: 'Aᵥ = 0.002 m², fᵧ = 235 MPa → Vₚₗ,ᴿᵈ = 0.002 × (235×10⁶/√3) / 1.0 = 271 kN',
      de: 'Aᵥ = 0.002 m², fᵧ = 235 MPa → Vₚₗ,ᴿᵈ = 0.002 × (235×10⁶/√3) / 1.0 = 271 kN'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'interaction-n-m',
    category: 'design',
    title: {
      uk: 'Взаємодія поздовжньої сили та згинального моменту',
      ru: 'Взаимодействие продольной силы и изгибающего момента',
      en: 'Interaction of Axial Force and Bending Moment',
      de: 'Interaktion von Normalkraft und Biegemoment'
    },
    formula: '\\frac{N_{Ed}}{N_{Rd}} + \\frac{M_{Ed}}{M_{Rd}} \\leq 1.0',
    latex: '\\frac{N_{Ed}}{N_{Rd}} + \\frac{M_{Ed}}{M_{Rd}} \\leq 1.0',
    variables: [
      { uk: 'Nᴱᵈ - розрахункова поздовжня сила, Н', ru: 'Nᴱᵈ - расчетная продольная сила, Н', en: 'Nᴱᵈ - design axial force, N', de: 'Nᴱᵈ - Bemessungsnormalkraft, N' },
      { uk: 'Nᴿᵈ - несуча здатність при стиску/розтягу, Н', ru: 'Nᴿᵈ - несущая способность при сжатии/растяжении, Н', en: 'Nᴿᵈ - axial resistance, N', de: 'Nᴿᵈ - Normalkrafttragfähigkeit, N' },
      { uk: 'Mᴱᵈ - розрахунковий згинальний момент, Н·м', ru: 'Mᴱᵈ - расчетный изгибающий момент, Н·м', en: 'Mᴱᵈ - design bending moment, N·m', de: 'Mᴱᵈ - Bemessungsbiegemoment, N·m' },
      { uk: 'Mᴿᵈ - несуча здатність при згині, Н·м', ru: 'Mᴿᵈ - несущая способность при изгибе, Н·м', en: 'Mᴿᵈ - moment resistance, N·m', de: 'Mᴿᵈ - Biegetragfähigkeit, N·m' }
    ],
    example: {
      uk: 'Спрощена форма перевірки взаємодії навантажень',
      ru: 'Упрощенная форма проверки взаимодействия нагрузок',
      en: 'Simplified interaction check',
      de: 'Vereinfachter Interaktionsnachweis'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  },

  {
    id: 'deflection-limit',
    category: 'design',
    title: {
      uk: 'Граничний прогин балки',
      ru: 'Предельный прогиб балки',
      en: 'Deflection Limit for Beams',
      de: 'Durchbiegungsgrenze für Balken'
    },
    formula: '\\delta_{max} \\leq \\frac{L}{250}',
    latex: '\\delta_{max} \\leq \\frac{L}{250}',
    variables: [
      { uk: 'δₘₐₓ - максимальний прогин, м', ru: 'δₘₐₓ - максимальный прогиб, м', en: 'δₘₐₓ - maximum deflection, m', de: 'δₘₐₓ - maximale Durchbiegung, m' },
      { uk: 'L - проліт балки, м', ru: 'L - пролет балки, м', en: 'L - span of beam, m', de: 'L - Spannweite, m' }
    ],
    example: {
      uk: 'Для прольоту L = 6 м: δₘₐₓ ≤ 6000/250 = 24 мм',
      ru: 'Для пролета L = 6 м: δₘₐₓ ≤ 6000/250 = 24 мм',
      en: 'For span L = 6 m: δₘₐₓ ≤ 6000/250 = 24 mm',
      de: 'Für Spannweite L = 6 m: δₘₐₓ ≤ 6000/250 = 24 mm'
    },
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-1-2005-eurocode-3-design-of-steel-structures-general-rules-and-rules-for-buildings/'
    }
  }
];

export default designFormulas;
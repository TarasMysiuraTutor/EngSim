// src/data/reference/strength/formulas/connections.js
// ФОРМУЛИ ДЛЯ З'ЄДНАНЬ

export const connectionsFormulas = [
  {
    id: 'bolt-shear-resistance',
    category: 'connections',
    title: {
      uk: 'Несуча здатність болта на зріз',
      ru: 'Несущая способность болта на срез',
      en: 'Bolt Shear Resistance',
      de: 'Schrauben-Schubtragfähigkeit'
    },
    formula: 'F_{v,Rd} = \\frac{\\alpha_v f_{ub} A_s}{\\gamma_{M2}}',
    latex: 'F_{v,Rd} = \\frac{\\alpha_v f_{ub} A_s}{\\gamma_{M2}}',
    variables: [
      { uk: 'Fᵥ,ᴿᵈ - розрахунковий опір зрізу болта, Н', ru: 'Fᵥ,ᴿᵈ - расчетное сопротивление срезу болта, Н', en: 'Fᵥ,ᴿᵈ - design shear resistance per bolt, N', de: 'Fᵥ,ᴿᵈ - Bemessungsschertragfähigkeit je Schraube, N' },
      { uk: 'αᵥ = 0.6 для класу 4.6, 5.6, 8.8', ru: 'αᵥ = 0.6 для класса 4.6, 5.6, 8.8', en: 'αᵥ = 0.6 for grade 4.6, 5.6, 8.8', de: 'αᵥ = 0.6 für Festigkeitsklasse 4.6, 5.6, 8.8' },
      { uk: 'fᵤᵦ - межа міцності болта, Па', ru: 'fᵤᵦ - предел прочности болта, Па', en: 'fᵤᵦ - ultimate tensile strength of bolt, Pa', de: 'fᵤᵦ - Zugfestigkeit der Schraube, Pa' },
      { uk: 'Aₛ - площа перерізу стержня, м²', ru: 'Aₛ - площадь сечения стержня, м²', en: 'Aₛ - stress area, m²', de: 'Aₛ - Spannungsquerschnitt, m²' },
      { uk: 'γₘ₂ = 1.25', ru: 'γₘ₂ = 1.25', en: 'γₘ₂ = 1.25', de: 'γₘ₂ = 1.25' }
    ],
    example: {
      uk: 'Болт M16, клас 8.8: fᵤᵦ = 800 МПа, Aₛ = 157 мм² → Fᵥ,ᴿᵈ = 0.6 × 800 × 157 / 1.25 ≈ 60.3 кН',
      ru: 'Болт M16, класс 8.8: fᵤᵦ = 800 МПа, Aₛ = 157 мм² → Fᵥ,ᴿᵈ = 0.6 × 800 × 157 / 1.25 ≈ 60.3 кН',
      en: 'Bolt M16, grade 8.8: fᵤᵦ = 800 MPa, Aₛ = 157 mm² → Fᵥ,ᴿᵈ = 0.6 × 800 × 157 / 1.25 ≈ 60.3 kN',
      de: 'Schraube M16, Klasse 8.8: fᵤᵦ = 800 MPa, Aₛ = 157 mm² → Fᵥ,ᴿᵈ = 0.6 × 800 × 157 / 1.25 ≈ 60.3 kN'
    },
    source: {
      name: 'EN 1993-1-8:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-8-2005-eurocode-3-design-of-steel-structures-design-of-joints/'
    }
  },

  {
    id: 'bolt-bearing-resistance',
    category: 'connections',
    title: {
      uk: 'Несуча здатність на зминання',
      ru: 'Несущая способность на смятие',
      en: 'Bolt Bearing Resistance',
      de: 'Lochleibungstragfähigkeit'
    },
    formula: 'F_{b,Rd} = \\frac{k_1 \\alpha_b f_u d t}{\\gamma_{M2}}',
    latex: 'F_{b,Rd} = \\frac{k_1 \\alpha_b f_u d t}{\\gamma_{M2}}',
    variables: [
      { uk: 'Fᵦ,ᴿᵈ - розрахунковий опір зминанню, Н', ru: 'Fᵦ,ᴿᵈ - расчетное сопротивление смятию, Н', en: 'Fᵦ,ᴿᵈ - design bearing resistance, N', de: 'Fᵦ,ᴿᵈ - Bemessungslochleibungswiderstand, N' },
      { uk: 'k₁ - коефіцієнт (залежить від відстаней)', ru: 'k₁ - коэффициент (зависит от расстояний)', en: 'k₁ - factor (depends on spacing)', de: 'k₁ - Beiwert (abhängig von Abständen)' },
      { uk: 'αᵦ - коефіцієнт (залежить від напрямку сили)', ru: 'αᵦ - коэффициент (зависит от направления силы)', en: 'αᵦ - factor (depends on force direction)', de: 'αᵦ - Beiwert (abhängig von Kraftrichtung)' },
      { uk: 'fᵤ - межа міцності пластини, Па', ru: 'fᵤ - предел прочности пластины, Па', en: 'fᵤ - ultimate strength of plate, Pa', de: 'fᵤ - Zugfestigkeit des Blechs, Pa' },
      { uk: 'd - діаметр болта, м', ru: 'd - диаметр болта, м', en: 'd - bolt diameter, m', de: 'd - Schraubendurchmesser, m' },
      { uk: 't - товщина пластини, м', ru: 't - толщина пластины, м', en: 't - plate thickness, m', de: 't - Blechdicke, m' },
      { uk: 'γₘ₂ = 1.25', ru: 'γₘ₂ = 1.25', en: 'γₘ₂ = 1.25', de: 'γₘ₂ = 1.25' }
    ],
    example: {
      uk: 'M16, t = 10 мм, fᵤ = 360 МПа, k₁αᵦ = 2.5 → Fᵦ,ᴿᵈ ≈ 115 кН',
      ru: 'M16, t = 10 мм, fᵤ = 360 МПа, k₁αᵦ = 2.5 → Fᵦ,ᴿᵈ ≈ 115 кН',
      en: 'M16, t = 10 mm, fᵤ = 360 MPa, k₁αᵦ = 2.5 → Fᵦ,ᴿᵈ ≈ 115 kN',
      de: 'M16, t = 10 mm, fᵤ = 360 MPa, k₁αᵦ = 2.5 → Fᵦ,ᴿᵈ ≈ 115 kN'
    },
    source: {
      name: 'EN 1993-1-8:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-8-2005-eurocode-3-design-of-steel-structures-design-of-joints/'
    }
  },

  {
    id: 'bolt-tension-resistance',
    category: 'connections',
    title: {
      uk: 'Несуча здатність болта на розтяг',
      ru: 'Несущая способность болта на растяжение',
      en: 'Bolt Tension Resistance',
      de: 'Schrauben-Zugtragfähigkeit'
    },
    formula: 'F_{t,Rd} = \\frac{k_2 f_{ub} A_s}{\\gamma_{M2}}',
    latex: 'F_{t,Rd} = \\frac{k_2 f_{ub} A_s}{\\gamma_{M2}}',
    variables: [
      { uk: 'Fₜ,ᴿᵈ - розрахунковий опір розтягу болта, Н', ru: 'Fₜ,ᴿᵈ - расчетное сопротивление растяжению болта, Н', en: 'Fₜ,ᴿᵈ - design tension resistance per bolt, N', de: 'Fₜ,ᴿᵈ - Bemessungszugtragfähigkeit je Schraube, N' },
      { uk: 'k₂ = 0.9', ru: 'k₂ = 0.9', en: 'k₂ = 0.9', de: 'k₂ = 0.9' },
      { uk: 'fᵤᵦ - межа міцності болта, Па', ru: 'fᵤᵦ - предел прочности болта, Па', en: 'fᵤᵦ - ultimate tensile strength of bolt, Pa', de: 'fᵤᵦ - Zugfestigkeit der Schraube, Pa' },
      { uk: 'Aₛ - площа перерізу стержня, м²', ru: 'Aₛ - площадь сечения стержня, м²', en: 'Aₛ - stress area, m²', de: 'Aₛ - Spannungsquerschnitt, m²' },
      { uk: 'γₘ₂ = 1.25', ru: 'γₘ₂ = 1.25', en: 'γₘ₂ = 1.25', de: 'γₘ₂ = 1.25' }
    ],
    example: {
      uk: 'Болт M16, клас 8.8: fᵤᵦ = 800 МПа, Aₛ = 157 мм² → Fₜ,ᴿᵈ = 0.9 × 800 × 157 / 1.25 ≈ 90.4 кН',
      ru: 'Болт M16, класс 8.8: fᵤᵦ = 800 МПа, Aₛ = 157 мм² → Fₜ,ᴿᵈ = 0.9 × 800 × 157 / 1.25 ≈ 90.4 кН',
      en: 'Bolt M16, grade 8.8: fᵤᵦ = 800 MPa, Aₛ = 157 mm² → Fₜ,ᴿᵈ = 0.9 × 800 × 157 / 1.25 ≈ 90.4 kN',
      de: 'Schraube M16, Klasse 8.8: fᵤᵦ = 800 MPa, Aₛ = 157 mm² → Fₜ,ᴿᵈ = 0.9 × 800 × 157 / 1.25 ≈ 90.4 kN'
    },
    source: {
      name: 'EN 1993-1-8:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-8-2005-eurocode-3-design-of-steel-structures-design-of-joints/'
    }
  },

  {
    id: 'weld-throat-thickness',
    category: 'connections',
    title: {
      uk: 'Розрахункова товщина шва',
      ru: 'Расчетная толщина шва',
      en: 'Weld Throat Thickness',
      de: 'Schweißnahtdicke'
    },
    formula: 'a = \\frac{t}{\\sqrt{2}}',
    latex: 'a = \\frac{t}{\\sqrt{2}}',
    variables: [
      { uk: 'a - розрахункова товщина шва, м', ru: 'a - расчетная толщина шва, м', en: 'a - throat thickness, m', de: 'a - Nahtdicke, m' },
      { uk: 't - катет шва, м', ru: 't - катет шва, м', en: 't - leg length, m', de: 't - Nahtdicke (Schenkel), m' }
    ],
    example: {
      uk: 'Катет шва t = 6 мм → a = 6/√2 ≈ 4.24 мм',
      ru: 'Катет шва t = 6 мм → a = 6/√2 ≈ 4.24 мм',
      en: 'Leg length t = 6 mm → a = 6/√2 ≈ 4.24 mm',
      de: 'Schenkel t = 6 mm → a = 6/√2 ≈ 4.24 mm'
    },
    source: {
      name: 'EN 1993-1-8:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-8-2005-eurocode-3-design-of-steel-structures-design-of-joints/'
    }
  },

  {
    id: 'weld-resistance',
    category: 'connections',
    title: {
      uk: 'Несуча здатність зварного шва',
      ru: 'Несущая способность сварного шва',
      en: 'Weld Resistance',
      de: 'Schweißnahttragfähigkeit'
    },
    formula: 'F_{w,Rd} = \\frac{f_{vw,d} \\cdot a \\cdot l}{\\sqrt{3}}',
    latex: 'F_{w,Rd} = \\frac{f_{vw,d} \\cdot a \\cdot l}{\\sqrt{3}}',
    variables: [
      { uk: 'Fᵥ,ᴿᵈ - розрахунковий опір шва, Н', ru: 'Fᵥ,ᴿᵈ - расчетное сопротивление шва, Н', en: 'Fᵥ,ᴿᵈ - design weld resistance, N', de: 'Fᵥ,ᴿᵈ - Bemessungstragfähigkeit der Schweißnaht, N' },
      { uk: 'fᵥᵥ,ᵈ - розрахунковий опір зсуву шва, Па', ru: 'fᵥᵥ,ᵈ - расчетное сопротивление срезу шва, Па', en: 'fᵥᵥ,ᵈ - design shear strength of weld, Pa', de: 'fᵥᵥ,ᵈ - Bemessungsscherfestigkeit der Schweißnaht, Pa' },
      { uk: 'a - розрахункова товщина шва, м', ru: 'a - расчетная толщина шва, м', en: 'a - throat thickness, m', de: 'a - Nahtdicke, m' },
      { uk: 'l - довжина шва, м', ru: 'l - длина шва, м', en: 'l - weld length, m', de: 'l - Nahtlänge, m' }
    ],
    example: {
      uk: 'fᵥᵥ,ᵈ = 215 МПа, a = 4 мм, l = 100 мм → Fᵥ,ᴿᵈ = 215 × 4 × 100 / √3 ≈ 49.6 кН',
      ru: 'fᵥᵥ,ᵈ = 215 МПа, a = 4 мм, l = 100 мм → Fᵥ,ᴿᵈ = 215 × 4 × 100 / √3 ≈ 49.6 кН',
      en: 'fᵥᵥ,ᵈ = 215 MPa, a = 4 mm, l = 100 mm → Fᵥ,ᴿᵈ = 215 × 4 × 100 / √3 ≈ 49.6 kN',
      de: 'fᵥᵥ,ᵈ = 215 MPa, a = 4 mm, l = 100 mm → Fᵥ,ᴿᵈ = 215 × 4 × 100 / √3 ≈ 49.6 kN'
    },
    source: {
      name: 'EN 1993-1-8:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-8-2005-eurocode-3-design-of-steel-structures-design-of-joints/'
    }
  },

  {
    id: 'slip-resistance',
    category: 'connections',
    title: {
      uk: 'Опір тертю високоміцного болта',
      ru: 'Сопротивление трению высокопрочного болта',
      en: 'Slip Resistance of High-Strength Bolt',
      de: 'Gleitwiderstand hochfester Schraube'
    },
    formula: 'F_{s,Rd} = \\frac{k_s n \\mu F_{p,C}}{\\gamma_{M3}}',
    latex: 'F_{s,Rd} = \\frac{k_s n \\mu F_{p,C}}{\\gamma_{M3}}',
    variables: [
      { uk: 'Fₛ,ᴿᵈ - розрахунковий опір тертю, Н', ru: 'Fₛ,ᴿᵈ - расчетное сопротивление трению, Н', en: 'Fₛ,ᴿᵈ - design slip resistance, N', de: 'Fₛ,ᴿᵈ - Bemessungsgleitwiderstand, N' },
      { uk: 'kₛ = 1.0 для отворів нормального розміру', ru: 'kₛ = 1.0 для отверстий нормального размера', en: 'kₛ = 1.0 for standard holes', de: 'kₛ = 1.0 für Normallöcher' },
      { uk: 'n - кількість площин тертя', ru: 'n - количество плоскостей трения', en: 'n - number of friction surfaces', de: 'n - Anzahl der Reibflächen' },
      { uk: 'μ - коефіцієнт тертя', ru: 'μ - коэффициент трения', en: 'μ - slip factor', de: 'μ - Reibungsbeiwert' },
      { uk: 'Fₚ,ᴄ - сила попереднього натягу, Н', ru: 'Fₚ,ᴄ - сила предварительного натяга, Н', en: 'Fₚ,ᴄ - preloading force, N', de: 'Fₚ,ᴄ - Vorspannkraft, N' },
      { uk: 'γₘ₃ = 1.25', ru: 'γₘ₃ = 1.25', en: 'γₘ₃ = 1.25', de: 'γₘ₃ = 1.25' }
    ],
    example: {
      uk: 'M20, клас 10.9: Fₚ,ᴄ = 172 кН, n = 1, μ = 0.5 → Fₛ,ᴿᵈ = 1.0 × 1 × 0.5 × 172 / 1.25 = 68.8 кН',
      ru: 'M20, класс 10.9: Fₚ,ᴄ = 172 кН, n = 1, μ = 0.5 → Fₛ,ᴿᵈ = 1.0 × 1 × 0.5 × 172 / 1.25 = 68.8 кН',
      en: 'M20, grade 10.9: Fₚ,ᴄ = 172 kN, n = 1, μ = 0.5 → Fₛ,ᴿᵈ = 1.0 × 1 × 0.5 × 172 / 1.25 = 68.8 kN',
      de: 'M20, Klasse 10.9: Fₚ,ᴄ = 172 kN, n = 1, μ = 0.5 → Fₛ,ᴿᵈ = 1.0 × 1 × 0.5 × 172 / 1.25 = 68.8 kN'
    },
    source: {
      name: 'EN 1993-1-8:2005',
      url: 'https://www.en-standard.eu/bs-en-1993-1-8-2005-eurocode-3-design-of-steel-structures-design-of-joints/'
    }
  }
];

export default connectionsFormulas;
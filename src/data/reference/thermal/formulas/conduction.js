// src/data/reference/thermal/formulas/conduction.js
export const conductionFormulas = [
  {
    id: 'fourier-law',
    category: 'conduction',
    title: {
      uk: 'Закон Фур\'є',
      ru: 'Закон Фурье',
      en: 'Fourier\'s Law',
      de: 'Fouriersches Gesetz'
    },
    formula: 'Q = -λ × A × (dT/dx)',
    variables: [
      { uk: 'Q - тепловий потік, Вт', ru: 'Q - тепловой поток, Вт', en: 'Q - heat flow rate, W', de: 'Q - Wärmestrom, W' },
      { uk: 'λ - коефіцієнт теплопровідності, Вт/(м·К)', ru: 'λ - коэффициент теплопроводности, Вт/(м·К)', en: 'λ - thermal conductivity, W/(m·K)', de: 'λ - Wärmeleitfähigkeit, W/(m·K)' },
      { uk: 'A - площа поперечного перерізу, м²', ru: 'A - площадь поперечного сечения, м²', en: 'A - cross-sectional area, m²', de: 'A - Querschnittsfläche, m²' },
      { uk: 'dT/dx - градієнт температури, К/м', ru: 'dT/dx - градиент температуры, К/м', en: 'dT/dx - temperature gradient, K/m', de: 'dT/dx - Temperaturgradient, K/m' }
    ],
    example: {
      uk: 'λ = 50 Вт/(м·К), A = 2 м², ΔT/Δx = 100 К/м → Q = 10000 Вт',
      ru: 'λ = 50 Вт/(м·К), A = 2 м², ΔT/Δx = 100 К/м → Q = 10000 Вт',
      en: 'λ = 50 W/(m·K), A = 2 m², ΔT/Δx = 100 K/m → Q = 10000 W',
      de: 'λ = 50 W/(m·K), A = 2 m², ΔT/Δx = 100 K/m → Q = 10000 W'
    },
    source: {
      name: 'ISO 80000-5:2019',
      url: 'https://www.iso.org/standard/64978.html',
      description: {
        uk: 'Величини та одиниці — Частина 5: Термодинаміка',
        ru: 'Величины и единицы — Часть 5: Термодинамика',
        en: 'Quantities and units — Part 5: Thermodynamics',
        de: 'Größen und Einheiten — Teil 5: Thermodynamik'
      }
    }
  },

  {
    id: 'plane-wall-conduction',
    category: 'conduction',
    title: {
      uk: 'Теплопровідність плоскої стінки',
      ru: 'Теплопроводность плоской стенки',
      en: 'Heat Conduction Through Plane Wall',
      de: 'Wärmeleitung durch ebene Wand'
    },
    formula: 'Q = (λ × A × (T₁ - T₂)) / δ',
    variables: [
      { uk: 'T₁, T₂ - температури поверхонь, К', ru: 'T₁, T₂ - температуры поверхностей, К', en: 'T₁, T₂ - surface temperatures, K', de: 'T₁, T₂ - Oberflächentemperaturen, K' },
      { uk: 'δ - товщина стінки, м', ru: 'δ - толщина стенки, м', en: 'δ - wall thickness, m', de: 'δ - Wanddicke, m' }
    ],
    example: {
      uk: 'λ = 0.8 Вт/(м·К), A = 10 м², T₁ = 100°C, T₂ = 20°C, δ = 0.2 м → Q = 3200 Вт',
      ru: 'λ = 0.8 Вт/(м·К), A = 10 м², T₁ = 100°C, T₂ = 20°C, δ = 0.2 м → Q = 3200 Вт',
      en: 'λ = 0.8 W/(m·K), A = 10 m², T₁ = 100°C, T₂ = 20°C, δ = 0.2 m → Q = 3200 W',
      de: 'λ = 0.8 W/(m·K), A = 10 m², T₁ = 100°C, T₂ = 20°C, δ = 0.2 m → Q = 3200 W'
    },
    source: {
      name: 'EN 673:2011',
      url: 'https://standards.iteh.ai/catalog/standards/cen/en673',
      description: {
        uk: 'Скло в будівництві. Визначення коефіцієнта теплопередачі',
        ru: 'Стекло в строительстве. Определение коэффициента теплопередачи',
        en: 'Glass in building - Determination of thermal transmittance',
        de: 'Glas im Bauwesen - Bestimmung des Wärmedurchgangskoeffizienten'
      }
    }
  },

  {
    id: 'cylindrical-wall-conduction',
    category: 'conduction',
    title: {
      uk: 'Теплопровідність циліндричної стінки',
      ru: 'Теплопроводность цилиндрической стенки',
      en: 'Heat Conduction Through Cylindrical Wall',
      de: 'Wärmeleitung durch Zylinderwand'
    },
    formula: 'Q = (2π × λ × L × (T₁ - T₂)) / ln(r₂/r₁)',
    variables: [
      { uk: 'L - довжина труби, м', ru: 'L - длина трубы, м', en: 'L - pipe length, m', de: 'L - Rohrlänge, m' },
      { uk: 'r₁, r₂ - внутрішній та зовнішній радіуси, м', ru: 'r₁, r₂ - внутренний и наружный радиусы, м', en: 'r₁, r₂ - inner and outer radii, m', de: 'r₁, r₂ - Innen- und Außenradien, m' }
    ],
    source: {
      name: 'ISO 12241:2008',
      url: 'https://www.iso.org/standard/51336.html',
      description: {
        uk: 'Теплоізоляція трубопроводів',
        ru: 'Теплоизоляция трубопроводов',
        en: 'Thermal insulation for building equipment',
        de: 'Wärmedämmung für Gebäudeausrüstung'
      }
    }
  },

  {
    id: 'thermal-resistance',
    category: 'conduction',
    title: {
      uk: 'Термічний опір плоскої стінки',
      ru: 'Термическое сопротивление плоской стенки',
      en: 'Thermal Resistance of Plane Wall',
      de: 'Wärmedurchlasswiderstand ebener Wand'
    },
    formula: 'R = δ / λ',
    variables: [
      { uk: 'R - термічний опір, м²·К/Вт', ru: 'R - термическое сопротивление, м²·К/Вт', en: 'R - thermal resistance, m²·K/W', de: 'R - Wärmedurchlasswiderstand, m²·K/W' },
      { uk: 'δ - товщина матеріалу, м', ru: 'δ - толщина материала, м', en: 'δ - material thickness, m', de: 'δ - Materialdicke, m' },
      { uk: 'λ - коефіцієнт теплопровідності, Вт/(м·К)', ru: 'λ - коэффициент теплопроводности, Вт/(м·К)', en: 'λ - thermal conductivity, W/(m·K)', de: 'λ - Wärmeleitfähigkeit, W/(m·K)' }
    ],
    example: {
      uk: 'δ = 0.1 м, λ = 0.04 Вт/(м·К) → R = 2.5 м²·К/Вт',
      ru: 'δ = 0.1 м, λ = 0.04 Вт/(м·К) → R = 2.5 м²·К/Вт',
      en: 'δ = 0.1 m, λ = 0.04 W/(m·K) → R = 2.5 m²·K/W',
      de: 'δ = 0.1 m, λ = 0.04 W/(m·K) → R = 2.5 m²·K/W'
    },
    source: {
      name: 'ДСТУ Б В.2.6-31:2016',
      description: {
        uk: 'Теплова ізоляція будівель',
        ru: 'Тепловая изоляция зданий',
        en: 'Thermal insulation of buildings',
        de: 'Wärmedämmung von Gebäuden'
      }
    }
  },

  {
    id: 'overall-heat-transfer',
    category: 'conduction',
    title: {
      uk: 'Коефіцієнт теплопередачі багатошарової стінки',
      ru: 'Коэффициент теплопередачи многослойной стенки',
      en: 'Overall Heat Transfer Coefficient (Multilayer Wall)',
      de: 'Wärmedurchgangskoeffizient (mehrschichtige Wand)'
    },
    formula: '1/k = 1/α₁ + Σ(δᵢ/λᵢ) + 1/α₂',
    variables: [
      { uk: 'k - коефіцієнт теплопередачі, Вт/(м²·К)', ru: 'k - коэффициент теплопередачи, Вт/(м²·К)', en: 'k - overall heat transfer coefficient, W/(m²·K)', de: 'k - Wärmedurchgangskoeffizient, W/(m²·K)' },
      { uk: 'α₁, α₂ - коефіцієнти тепловіддачі, Вт/(м²·К)', ru: 'α₁, α₂ - коэффициенты теплоотдачи, Вт/(м²·К)', en: 'α₁, α₂ - heat transfer coefficients, W/(m²·K)', de: 'α₁, α₂ - Wärmeübergangskoeffizienten, W/(m²·K)' },
      { uk: 'δᵢ - товщина i-го шару, м', ru: 'δᵢ - толщина i-го слоя, м', en: 'δᵢ - thickness of i-th layer, m', de: 'δᵢ - Dicke der i-ten Schicht, m' },
      { uk: 'λᵢ - теплопровідність i-го шару, Вт/(м·К)', ru: 'λᵢ - теплопроводность i-го слоя, Вт/(м·К)', en: 'λᵢ - thermal conductivity of i-th layer, W/(m·K)', de: 'λᵢ - Wärmeleitfähigkeit der i-ten Schicht, W/(m·K)' }
    ],
    source: {
      name: 'ДСТУ Б В.2.6-31:2016'
    }
  }
];

export default conductionFormulas;
// src/data/reference/thermal/formulas/phaseChange.js
export const phaseChangeFormulas = [
  {
    id: 'heat-of-fusion',
    category: 'phase_change',
    title: {
      uk: 'Теплота плавлення',
      ru: 'Теплота плавления',
      en: 'Heat of Fusion',
      de: 'Schmelzwärme'
    },
    formula: 'Q = m × Lf',
    variables: [
      { uk: 'Q - кількість теплоти, Дж', ru: 'Q - количество теплоты, Дж', en: 'Q - heat quantity, J', de: 'Q - Wärmemenge, J' },
      { uk: 'm - маса речовини, кг', ru: 'm - масса вещества, кг', en: 'm - substance mass, kg', de: 'm - Substanzmasse, kg' },
      { uk: 'Lf - питома теплота плавлення, Дж/кг', ru: 'Lf - удельная теплота плавления, Дж/кг', en: 'Lf - specific heat of fusion, J/kg', de: 'Lf - spezifische Schmelzwärme, J/kg' }
    ],
    example: {
      uk: 'Для льоду: Lf = 334 кДж/кг при 0°C',
      ru: 'Для льда: Lf = 334 кДж/кг при 0°C',
      en: 'For ice: Lf = 334 kJ/kg at 0°C',
      de: 'Für Eis: Lf = 334 kJ/kg bei 0°C'
    },
    source: {
      name: 'ISO 80000-5:2019',
      url: 'https://www.iso.org/standard/64978.html'
    }
  },

  {
    id: 'heat-of-vaporization',
    category: 'phase_change',
    title: {
      uk: 'Теплота пароутворення',
      ru: 'Теплота парообразования',
      en: 'Heat of Vaporization',
      de: 'Verdampfungswärme'
    },
    formula: 'Q = m × Lv',
    variables: [
      { uk: 'Q - кількість теплоти, Дж', ru: 'Q - количество теплоты, Дж', en: 'Q - heat quantity, J', de: 'Q - Wärmemenge, J' },
      { uk: 'm - маса рідини, кг', ru: 'm - масса жидкости, кг', en: 'm - liquid mass, kg', de: 'm - Flüssigkeitsmasse, kg' },
      { uk: 'Lv - питома теплота пароутворення, Дж/кг', ru: 'Lv - удельная теплота парообразования, Дж/кг', en: 'Lv - specific heat of vaporization, J/kg', de: 'Lv - spezifische Verdampfungswärme, J/kg' }
    ],
    example: {
      uk: 'Для води при 100°C: Lv = 2257 кДж/кг',
      ru: 'Для воды при 100°C: Lv = 2257 кДж/кг',
      en: 'For water at 100°C: Lv = 2257 kJ/kg',
      de: 'Für Wasser bei 100°C: Lv = 2257 kJ/kg'
    },
    source: {
      name: 'ISO 80000-5:2019',
      url: 'https://www.iso.org/standard/64978.html'
    }
  },

  {
    id: 'nusselt-condensation',
    category: 'phase_change',
    title: {
      uk: 'Формула Нуссельта для плівкової конденсації',
      ru: 'Формула Нуссельта для пленочной конденсации',
      en: 'Nusselt Formula for Film Condensation',
      de: 'Nusselt-Formel für Filmkondensation'
    },
    formula: 'α = 0.943 × [λ³ × ρ² × g × Lv / (μ × L × ΔT)]^(1/4)',
    variables: [
      { uk: 'α - коефіцієнт тепловіддачі, Вт/(м²·К)', ru: 'α - коэффициент теплоотдачи, Вт/(м²·К)', en: 'α - heat transfer coefficient, W/(m²·K)', de: 'α - Wärmeübergangskoeffizient, W/(m²·K)' },
      { uk: 'λ - теплопровідність конденсату, Вт/(м·К)', ru: 'λ - теплопроводность конденсата, Вт/(м·К)', en: 'λ - condensate thermal conductivity, W/(m·K)', de: 'λ - Kondensat-Wärmeleitfähigkeit, W/(m·K)' },
      { uk: 'ρ - густина конденсату, кг/м³', ru: 'ρ - плотность конденсата, кг/м³', en: 'ρ - condensate density, kg/m³', de: 'ρ - Kondensat-Dichte, kg/m³' },
      { uk: 'g - прискорення вільного падіння, 9.81 м/с²', ru: 'g - ускорение свободного падения, 9.81 м/с²', en: 'g - gravitational acceleration, 9.81 m/s²', de: 'g - Erdbeschleunigung, 9.81 m/s²' },
      { uk: 'Lv - теплота конденсації, Дж/кг', ru: 'Lv - теплота конденсации, Дж/кг', en: 'Lv - latent heat of condensation, J/kg', de: 'Lv - Kondensationswärme, J/kg' },
      { uk: 'μ - динамічна в\'язкість конденсату, Па·с', ru: 'μ - динамическая вязкость конденсата, Па·с', en: 'μ - condensate dynamic viscosity, Pa·s', de: 'μ - Kondensat dynamische Viskosität, Pa·s' },
      { uk: 'L - висота поверхні, м', ru: 'L - высота поверхности, м', en: 'L - surface height, m', de: 'L - Oberflächenhöhe, m' },
      { uk: 'ΔT - переохолодження стінки, К', ru: 'ΔT - переохлаждение стенки, К', en: 'ΔT - wall subcooling, K', de: 'ΔT - Wandunterkühlung, K' }
    ],
    source: {
      name: 'VDI Heat Atlas 2010'
    }
  },

  {
    id: 'rohsenow-boiling',
    category: 'phase_change',
    title: {
      uk: 'Кореляція Росеноу для кипіння',
      ru: 'Корреляция Розеноу для кипения',
      en: 'Rohsenow Correlation for Boiling',
      de: 'Rohsenow-Korrelation für Sieden'
    },
    formula: 'q = μ × Lv × [g(ρl - ρv) / σ]^0.5 × [(cₚ × ΔT) / (Csf × Lv × Pr^n)]³',
    variables: [
      { uk: 'q - щільність теплового потоку, Вт/м²', ru: 'q - плотность теплового потока, Вт/м²', en: 'q - heat flux, W/m²', de: 'q - Wärmestromdichte, W/m²' },
      { uk: 'ρl, ρv - густина рідини та пари, кг/м³', ru: 'ρl, ρv - плотность жидкости и пара, кг/м³', en: 'ρl, ρv - liquid and vapor density, kg/m³', de: 'ρl, ρv - Flüssigkeits- und Dampfdichte, kg/m³' },
      { uk: 'σ - поверхневий натяг, Н/м', ru: 'σ - поверхностное натяжение, Н/м', en: 'σ - surface tension, N/m', de: 'σ - Oberflächenspannung, N/m' },
      { uk: 'Csf - константа поверхні (0.006-0.015)', ru: 'Csf - константа поверхности (0.006-0.015)', en: 'Csf - surface constant (0.006-0.015)', de: 'Csf - Oberflächenkonstante (0.006-0.015)' },
      { uk: 'n = 1.0 для води, n = 1.7 для інших рідин', ru: 'n = 1.0 для воды, n = 1.7 для других жидкостей', en: 'n = 1.0 for water, n = 1.7 for other liquids', de: 'n = 1.0 für Wasser, n = 1.7 für andere Flüssigkeiten' }
    ],
    source: {
      name: 'VDI Heat Atlas 2010'
    }
  },

  {
    id: 'clausius-clapeyron',
    category: 'phase_change',
    title: {
      uk: 'Рівняння Клаузіуса-Клапейрона',
      ru: 'Уравнение Клаузиуса-Клапейрона',
      en: 'Clausius-Clapeyron Equation',
      de: 'Clausius-Clapeyron-Gleichung'
    },
    formula: 'dP/dT = Lv / (T × Δv)',
    variables: [
      { uk: 'dP/dT - зміна тиску з температурою, Па/К', ru: 'dP/dT - изменение давления с температурой, Па/К', en: 'dP/dT - pressure change with temperature, Pa/K', de: 'dP/dT - Druckänderung mit Temperatur, Pa/K' },
      { uk: 'Lv - теплота пароутворення, Дж/кг', ru: 'Lv - теплота парообразования, Дж/кг', en: 'Lv - heat of vaporization, J/kg', de: 'Lv - Verdampfungswärme, J/kg' },
      { uk: 'T - абсолютна температура, К', ru: 'T - абсолютная температура, К', en: 'T - absolute temperature, K', de: 'T - absolute Temperatur, K' },
      { uk: 'Δv - зміна питомого об\'єму, м³/кг', ru: 'Δv - изменение удельного объема, м³/кг', en: 'Δv - specific volume change, m³/kg', de: 'Δv - spezifische Volumenänderung, m³/kg' }
    ],
    source: {
      name: 'ISO 80000-5:2019',
      url: 'https://www.iso.org/standard/64978.html'
    }
  }
];

export default phaseChangeFormulas;
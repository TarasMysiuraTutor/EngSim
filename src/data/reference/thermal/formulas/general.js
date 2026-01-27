// src/data/reference/thermal/formulas/general.js
export const generalFormulas = [
  {
    id: 'thermal-diffusivity',
    category: 'general',
    title: {
      uk: 'Температуропровідність',
      ru: 'Температуропроводность',
      en: 'Thermal Diffusivity',
      de: 'Temperaturleitfähigkeit'
    },
    formula: 'a = λ / (ρ × cₚ)',
    variables: [
      { uk: 'a - температуропровідність, м²/с', ru: 'a - температуропроводность, м²/с', en: 'a - thermal diffusivity, m²/s', de: 'a - Temperaturleitfähigkeit, m²/s' },
      { uk: 'λ - теплопровідність, Вт/(м·К)', ru: 'λ - теплопроводность, Вт/(м·К)', en: 'λ - thermal conductivity, W/(m·K)', de: 'λ - Wärmeleitfähigkeit, W/(m·K)' },
      { uk: 'ρ - густина, кг/м³', ru: 'ρ - плотность, кг/м³', en: 'ρ - density, kg/m³', de: 'ρ - Dichte, kg/m³' },
      { uk: 'cₚ - питома теплоємність, Дж/(кг·К)', ru: 'cₚ - удельная теплоемкость, Дж/(кг·К)', en: 'cₚ - specific heat capacity, J/(kg·K)', de: 'cₚ - spezifische Wärmekapazität, J/(kg·K)' }
    ],
    source: {
      name: 'ISO 80000-5:2019',
      url: 'https://www.iso.org/standard/64978.html'
    }
  },

  {
    id: 'heat-quantity',
    category: 'general',
    title: {
      uk: 'Кількість теплоти при нагріванні/охолодженні',
      ru: 'Количество теплоты при нагреве/охлаждении',
      en: 'Heat Quantity for Heating/Cooling',
      de: 'Wärmemenge beim Erwärmen/Abkühlen'
    },
    formula: 'Q = m × cₚ × ΔT',
    variables: [
      { uk: 'Q - кількість теплоти, Дж', ru: 'Q - количество теплоты, Дж', en: 'Q - heat quantity, J', de: 'Q - Wärmemenge, J' },
      { uk: 'm - маса речовини, кг', ru: 'm - масса вещества, кг', en: 'm - substance mass, kg', de: 'm - Substanzmasse, kg' },
      { uk: 'ΔT - зміна температури, К', ru: 'ΔT - изменение температуры, К', en: 'ΔT - temperature change, K', de: 'ΔT - Temperaturänderung, K' }
    ],
    example: {
      uk: 'Нагрів 10 кг води на 50°C: Q = 10 × 4186 × 50 = 2093 кДж',
      ru: 'Нагрев 10 кг воды на 50°C: Q = 10 × 4186 × 50 = 2093 кДж',
      en: 'Heating 10 kg water by 50°C: Q = 10 × 4186 × 50 = 2093 kJ',
      de: 'Erwärmen 10 kg Wasser um 50°C: Q = 10 × 4186 × 50 = 2093 kJ'
    },
    source: {
      name: 'ISO 80000-5:2019',
      url: 'https://www.iso.org/standard/64978.html'
    }
  },

  {
    id: 'heat-capacity',
    category: 'general',
    title: {
      uk: 'Теплоємність тіла',
      ru: 'Теплоемкость тела',
      en: 'Heat Capacity',
      de: 'Wärmekapazität'
    },
    formula: 'C = m × cₚ',
    variables: [
      { uk: 'C - теплоємність, Дж/К', ru: 'C - теплоемкость, Дж/К', en: 'C - heat capacity, J/K', de: 'C - Wärmekapazität, J/K' },
      { uk: 'm - маса, кг', ru: 'm - масса, кг', en: 'm - mass, kg', de: 'm - Masse, kg' }
    ],
    source: {
      name: 'ISO 80000-5:2019',
      url: 'https://www.iso.org/standard/64978.html'
    }
  },

  {
    id: 'heat-of-vaporization',
    category: 'general',
    title: {
      uk: 'Теплота пароутворення',
      ru: 'Теплота парообразования',
      en: 'Heat of Vaporization',
      de: 'Verdampfungswärme'
    },
    formula: 'Q = m × r',
    variables: [
      { uk: 'Q - кількість теплоти, Дж', ru: 'Q - количество теплоты, Дж', en: 'Q - heat quantity, J', de: 'Q - Wärmemenge, J' },
      { uk: 'r - питома теплота пароутворення, Дж/кг', ru: 'r - удельная теплота парообразования, Дж/кг', en: 'r - specific heat of vaporization, J/kg', de: 'r - spezifische Verdampfungswärme, J/kg' }
    ],
    example: {
      uk: 'Для води при 100°C: r = 2257 кДж/кг',
      ru: 'Для воды при 100°C: r = 2257 кДж/кг',
      en: 'For water at 100°C: r = 2257 kJ/kg',
      de: 'Für Wasser bei 100°C: r = 2257 kJ/kg'
    },
    source: {
      name: 'ISO 80000-5:2019',
      url: 'https://www.iso.org/standard/64978.html'
    }
  },

  {
    id: 'biot-number',
    category: 'general',
    title: {
      uk: 'Число Біо',
      ru: 'Число Био',
      en: 'Biot Number',
      de: 'Biot-Zahl'
    },
    formula: 'Bi = (α × L) / λ',
    variables: [
      { uk: 'Bi - число Біо (безрозмірне)', ru: 'Bi - число Био (безразмерное)', en: 'Bi - Biot number (dimensionless)', de: 'Bi - Biot-Zahl (dimensionslos)' },
      { uk: 'α - коефіцієнт тепловіддачі, Вт/(м²·К)', ru: 'α - коэффициент теплоотдачи, Вт/(м²·К)', en: 'α - heat transfer coefficient, W/(m²·K)', de: 'α - Wärmeübergangskoeffizient, W/(m²·K)' },
      { uk: 'L - характерний розмір, м', ru: 'L - характерный размер, м', en: 'L - characteristic length, m', de: 'L - charakteristische Länge, m' },
      { uk: 'λ - теплопровідність тіла, Вт/(м·К)', ru: 'λ - теплопроводность тела, Вт/(м·К)', en: 'λ - solid thermal conductivity, W/(m·K)', de: 'λ - Festkörper-Wärmeleitfähigkeit, W/(m·K)' }
    ],
    example: {
      uk: 'Bi < 0.1 - тіло можна вважати термічно тонким',
      ru: 'Bi < 0.1 - тело можно считать термически тонким',
      en: 'Bi < 0.1 - body can be considered thermally thin',
      de: 'Bi < 0.1 - Körper kann als thermisch dünn betrachtet werden'
    },
    source: {
      name: 'VDI Heat Atlas 2010'
    }
  },

  {
    id: 'fourier-number',
    category: 'general',
    title: {
      uk: 'Число Фур\'є',
      ru: 'Число Фурье',
      en: 'Fourier Number',
      de: 'Fourier-Zahl'
    },
    formula: 'Fo = (a × τ) / L²',
    variables: [
      { uk: 'Fo - число Фур\'є (безрозмірне)', ru: 'Fo - число Фурье (безразмерное)', en: 'Fo - Fourier number (dimensionless)', de: 'Fo - Fourier-Zahl (dimensionslos)' },
      { uk: 'τ - час, с', ru: 'τ - время, с', en: 'τ - time, s', de: 'τ - Zeit, s' }
    ],
    source: {
      name: 'ISO 80000-11:2019',
      url: 'https://www.iso.org/standard/64974.html'
    }
  }
];

export default generalFormulas;
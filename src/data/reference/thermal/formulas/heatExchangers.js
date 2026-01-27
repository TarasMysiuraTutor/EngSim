// src/data/reference/thermal/formulas/heatExchangers.js
export const heatExchangersFormulas = [
  {
    id: 'heat-transfer-equation',
    category: 'heat_exchangers',
    title: {
      uk: 'Рівняння теплопередачі теплообмінника',
      ru: 'Уравнение теплопередачи теплообменника',
      en: 'Heat Exchanger Heat Transfer Equation',
      de: 'Wärmeübertrager Wärmeübertragungsgleichung'
    },
    formula: 'Q = k × A × ΔTₘ',
    variables: [
      { uk: 'Q - тепловий потік, Вт', ru: 'Q - тепловой поток, Вт', en: 'Q - heat transfer rate, W', de: 'Q - Wärmeübertragungsrate, W' },
      { uk: 'k - коефіцієнт теплопередачі, Вт/(м²·К)', ru: 'k - коэффициент теплопередачи, Вт/(м²·К)', en: 'k - overall heat transfer coefficient, W/(m²·K)', de: 'k - Wärmedurchgangskoeffizient, W/(m²·K)' },
      { uk: 'A - площа поверхні теплообміну, м²', ru: 'A - площадь поверхности теплообмена, м²', en: 'A - heat transfer area, m²', de: 'A - Wärmeübertragungsfläche, m²' },
      { uk: 'ΔTₘ - середньологарифмічний температурний напір, К', ru: 'ΔTₘ - среднелогарифмический температурный напор, К', en: 'ΔTₘ - log mean temperature difference, K', de: 'ΔTₘ - logarithmische Temperaturdifferenz, K' }
    ],
    source: {
      name: 'EN 305:2015',
      url: 'https://standards.iteh.ai/catalog/standards/cen/en305',
      description: {
        uk: 'Теплообмінники - Методи випробувань',
        ru: 'Теплообменники - Методы испытаний',
        en: 'Heat exchangers - Test procedures',
        de: 'Wärmeaustauscher - Prüfverfahren'
      }
    }
  },

  {
    id: 'lmtd',
    category: 'heat_exchangers',
    title: {
      uk: 'Логарифмічний температурний напір (LMTD)',
      ru: 'Логарифмический температурный напор (LMTD)',
      en: 'Log Mean Temperature Difference (LMTD)',
      de: 'Logarithmische Temperaturdifferenz (LMTD)'
    },
    formula: 'ΔTₘ = (ΔT₁ - ΔT₂) / ln(ΔT₁/ΔT₂)',
    variables: [
      { uk: 'ΔT₁ - різниця температур на вході', ru: 'ΔT₁ - разность температур на входе', en: 'ΔT₁ - temperature difference at inlet', de: 'ΔT₁ - Temperaturdifferenz am Einlass' },
      { uk: 'ΔT₂ - різниця температур на виході', ru: 'ΔT₂ - разность температур на выходе', en: 'ΔT₂ - temperature difference at outlet', de: 'ΔT₂ - Temperaturdifferenz am Auslass' }
    ],
    source: {
      name: 'EN 305:2015',
      url: 'https://standards.iteh.ai/catalog/standards/cen/en305'
    }
  },

  {
    id: 'effectiveness',
    category: 'heat_exchangers',
    title: {
      uk: 'Ефективність теплообмінника (NTU-метод)',
      ru: 'Эффективность теплообменника (NTU-метод)',
      en: 'Heat Exchanger Effectiveness (NTU Method)',
      de: 'Wärmeübertrager Wirkungsgrad (NTU-Methode)'
    },
    formula: 'ε = Q / Qₘₐₓ',
    variables: [
      { uk: 'ε - ефективність теплообмінника (0...1)', ru: 'ε - эффективность теплообменника (0...1)', en: 'ε - heat exchanger effectiveness (0...1)', de: 'ε - Wärmeübertrager Wirkungsgrad (0...1)' },
      { uk: 'Q - фактичний тепловий потік, Вт', ru: 'Q - фактический тепловой поток, Вт', en: 'Q - actual heat transfer rate, W', de: 'Q - tatsächliche Wärmeübertragungsrate, W' },
      { uk: 'Qₘₐₓ - максимально можливий тепловий потік, Вт', ru: 'Qₘₐₓ - максимально возможный тепловой поток, Вт', en: 'Qₘₐₓ - maximum possible heat transfer rate, W', de: 'Qₘₐₓ - maximal mögliche Wärmeübertragungsrate, W' }
    ],
    source: {
      name: 'EN 305:2015',
      url: 'https://standards.iteh.ai/catalog/standards/cen/en305'
    }
  },

  {
    id: 'ntu',
    category: 'heat_exchangers',
    title: {
      uk: 'Число одиниць переносу (NTU)',
      ru: 'Число единиц переноса (NTU)',
      en: 'Number of Transfer Units (NTU)',
      de: 'Anzahl der Übertragungseinheiten (NTU)'
    },
    formula: 'NTU = (k × A) / Cₘᵢₙ',
    variables: [
      { uk: 'NTU - число одиниць переносу', ru: 'NTU - число единиц переноса', en: 'NTU - number of transfer units', de: 'NTU - Anzahl der Übertragungseinheiten' },
      { uk: 'Cₘᵢₙ - мінімальна теплоємність потоку, Вт/К', ru: 'Cₘᵢₙ - минимальная теплоемкость потока, Вт/К', en: 'Cₘᵢₙ - minimum heat capacity rate, W/K', de: 'Cₘᵢₙ - minimale Wärmekapazitätsrate, W/K' }
    ],
    source: {
      name: 'VDI Heat Atlas 2010'
    }
  }
];

export default heatExchangersFormulas;
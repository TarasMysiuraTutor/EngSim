// src/data/reference/massTransfer/formulas/drying.js
export const dryingFormulas = [
  {
    id: 'moisture_content_dry_basis',
    category: 'drying',
    title: {
      uk: 'Вологість на суху речовину',
      ru: 'Влажность на сухое вещество',
      en: 'Moisture Content (Dry Basis)',
      de: 'Feuchtigkeitsgehalt (Trockenbasis)'
    },
    formula: 'X = (m_w / m_d) × 100%',
    latex: 'X = \\frac{m_w}{m_d} \\times 100\\%',
    variables: [
      { uk: 'm_w — маса вологи, кг', ru: 'm_w — масса влаги, кг', en: 'm_w — mass of moisture, kg', de: 'm_w — Masse der Feuchtigkeit, kg' },
      { uk: 'm_d — маса сухої речовини, кг', ru: 'm_d — масса сухого вещества, кг', en: 'm_d — mass of dry matter, kg', de: 'm_d — Masse der Trockensubstanz, kg' }
    ]
  },
  {
    id: 'moisture_content_wet_basis',
    category: 'drying',
    title: {
      uk: 'Вологість на загальну масу',
      ru: 'Влажность на общую массу',
      en: 'Moisture Content (Wet Basis)',
      de: 'Feuchtigkeitsgehalt (Nassbasis)'
    },
    formula: 'W = (m_w / (m_w + m_d)) × 100%',
    latex: 'W = \\frac{m_w}{m_w + m_d} \\times 100\\%',
    variables: [
      { uk: 'm_w — маса вологи, кг', ru: 'm_w — масса влаги, кг', en: 'm_w — mass of moisture, kg', de: 'm_w — Masse der Feuchtigkeit, kg' },
      { uk: 'm_d — маса сухої речовини, кг', ru: 'm_d — масса сухого вещества, кг', en: 'm_d — mass of dry matter, kg', de: 'm_d — Masse der Trockensubstanz, kg' }
    ]
  },
  {
    id: 'drying_rate',
    category: 'drying',
    title: {
      uk: 'Швидкість сушіння',
      ru: 'Скорость сушки',
      en: 'Drying Rate',
      de: 'Trocknungsgeschwindigkeit'
    },
    formula: 'R = -m_d × (dX/dt)',
    latex: 'R = -m_d \\frac{dX}{dt}',
    variables: [
      { uk: 'R — швидкість сушіння, кг/с', ru: 'R — скорость сушки, кг/с', en: 'R — drying rate, kg/s', de: 'R — Trocknungsgeschwindigkeit, kg/s' },
      { uk: 'm_d — маса сухої речовини, кг', ru: 'm_d — масса сухого вещества, кг', en: 'm_d — mass of dry matter, kg', de: 'm_d — Masse der Trockensubstanz, kg' },
      { uk: 'X — вологість на суху речовину', ru: 'X — влажность на сухое вещество', en: 'X — moisture content (dry basis)', de: 'X — Feuchtigkeitsgehalt (Trockenbasis)' }
    ]
  },
  {
    id: 'constant_rate_period',
    category: 'drying',
    title: {
      uk: 'Період постійної швидкості сушіння',
      ru: 'Период постоянной скорости сушки',
      en: 'Constant Rate Period',
      de: 'Periode konstanter Trocknungsgeschwindigkeit'
    },
    formula: 'R_c = h_c × A × (T_g - T_s)',
    latex: 'R_c = h_c A (T_g - T_s)',
    variables: [
      { uk: 'h_c — коефіцієнт тепловіддачі, Вт/(м²·К)', ru: 'h_c — коэффициент теплоотдачи, Вт/(м²·К)', en: 'h_c — heat transfer coefficient, W/(m²·K)', de: 'h_c — Wärmeübergangskoeffizient, W/(m²·K)' },
      { uk: 'A — площа поверхні, м²', ru: 'A — площадь поверхности, м²', en: 'A — surface area, m²', de: 'A — Oberfläche, m²' },
      { uk: 'T_g — температура газу, К', ru: 'T_g — температура газа, К', en: 'T_g — gas temperature, K', de: 'T_g — Gastemperatur, K' },
      { uk: 'T_s — температура поверхні, К', ru: 'T_s — температура поверхности, К', en: 'T_s — surface temperature, K', de: 'T_s — Oberflächentemperatur, K' }
    ]
  },
  {
    id: 'falling_rate_period',
    category: 'drying',
    title: {
      uk: 'Період падаючої швидкості сушіння',
      ru: 'Период падающей скорости сушки',
      en: 'Falling Rate Period',
      de: 'Periode fallender Trocknungsgeschwindigkeit'
    },
    formula: 'R_f = R_c × (X - X_e)/(X_c - X_e)',
    latex: 'R_f = R_c \\frac{X - X_e}{X_c - X_e}',
    variables: [
      { uk: 'R_c — швидкість у періоді постійної швидкості', ru: 'R_c — скорость в периоде постоянной скорости', en: 'R_c — constant rate period rate', de: 'R_c — Geschwindigkeit in konstanter Periode' },
      { uk: 'X — поточна вологість', ru: 'X — текущая влажность', en: 'X — current moisture content', de: 'X — aktueller Feuchtigkeitsgehalt' },
      { uk: 'X_c — критична вологість', ru: 'X_c — критическая влажность', en: 'X_c — critical moisture content', de: 'X_c — kritischer Feuchtigkeitsgehalt' },
      { uk: 'X_e — рівноважна вологість', ru: 'X_e — равновесная влажность', en: 'X_e — equilibrium moisture content', de: 'X_e — Gleichgewichtsfeuchtigkeitsgehalt' }
    ]
  },
  {
    id: 'drying_time',
    category: 'drying',
    title: {
      uk: 'Час сушіння',
      ru: 'Время сушки',
      en: 'Drying Time',
      de: 'Trocknungszeit'
    },
    formula: 't = (m_d / (R_c × A)) × (X_0 - X_f)',
    latex: 't = \\frac{m_d}{R_c A} (X_0 - X_f)',
    variables: [
      { uk: 'X_0 — початкова вологість', ru: 'X_0 — начальная влажность', en: 'X_0 — initial moisture content', de: 'X_0 — Anfangsfeuchtigkeitsgehalt' },
      { uk: 'X_f — кінцева вологість', ru: 'X_f — конечная влажность', en: 'X_f — final moisture content', de: 'X_f — Endfeuchtigkeitsgehalt' }
    ]
  },
  {
    id: 'psychrometric_ratio',
    category: 'drying',
    title: {
      uk: 'Психрометричне відношення',
      ru: 'Психрометрическое отношение',
      en: 'Psychrometric Ratio',
      de: 'Psychrometrisches Verhältnis'
    },
    formula: 'γ = h_c / (k_y × λ)',
    latex: '\\gamma = \\frac{h_c}{k_y \\lambda}',
    variables: [
      { uk: 'h_c — коефіцієнт тепловіддачі, Вт/(м²·К)', ru: 'h_c — коэффициент теплоотдачи, Вт/(м²·К)', en: 'h_c — heat transfer coefficient, W/(m²·K)', de: 'h_c — Wärmeübergangskoeffizient, W/(m²·K)' },
      { uk: 'k_y — коефіцієнт масовіддачі, кг/(м²·с)', ru: 'k_y — коэффициент массоотдачи, кг/(м²·с)', en: 'k_y — mass transfer coefficient, kg/(m²·s)', de: 'k_y — Stoffübergangskoeffizient, kg/(m²·s)' },
      { uk: 'λ — теплота випаровування, Дж/кг', ru: 'λ — теплота испарения, Дж/кг', en: 'λ — latent heat of vaporization, J/kg', de: 'λ — Verdampfungswärme, J/kg' }
    ]
  },
  {
    id: 'humidity_ratio',
    category: 'drying',
    title: {
      uk: 'Вологовміст повітря',
      ru: 'Влагосодержание воздуха',
      en: 'Humidity Ratio',
      de: 'Luftfeuchtigkeit'
    },
    formula: 'Y = 0.622 × (P_v / (P - P_v))',
    latex: 'Y = 0.622 \\frac{P_v}{P - P_v}',
    variables: [
      { uk: 'P_v — парціальний тиск водяної пари, Па', ru: 'P_v — парциальное давление водяного пара, Па', en: 'P_v — partial pressure of water vapor, Pa', de: 'P_v — Partialdruck des Wasserdampfes, Pa' },
      { uk: 'P — загальний тиск, Па', ru: 'P — общее давление, Па', en: 'P — total pressure, Pa', de: 'P — Gesamtdruck, Pa' }
    ]
  }
];
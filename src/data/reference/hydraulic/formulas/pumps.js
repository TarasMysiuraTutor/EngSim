// src/data/reference/hydraulics/formulas/pumps.js
export const pumpsFormulas = [
  {
    id: 'pump_power',
    category: 'pumps',
    title: {
      uk: 'Потужність насоса',
      ru: 'Мощность насоса',
      en: 'Pump Power',
      de: 'Pumpenleistung'
    },
    formula: 'N = ρgQH/η',
    latex: 'N = \\frac{\\rho g Q H}{\\eta}',
    variables: [
      { uk: 'N — потужність, Вт', ru: 'N — мощность, Вт', en: 'N — power, W', de: 'N — Leistung, W' },
      { uk: 'ρ — щільність рідини, кг/м³', ru: 'ρ — плотность жидкости, кг/м³', en: 'ρ — fluid density, kg/m³', de: 'ρ — Dichte, kg/m³' },
      { uk: 'Q — витрата, м³/с', ru: 'Q — расход, м³/с', en: 'Q — flow rate, m³/s', de: 'Q — Volumenstrom, m³/s' },
      { uk: 'H — напір, м', ru: 'H — напор, м', en: 'H — head, m', de: 'H — Förderhöhe, m' },
      { uk: 'η — ККД насоса (0.6-0.85)', ru: 'η — КПД насоса (0.6-0.85)', en: 'η — pump efficiency (0.6-0.85)', de: 'η — Wirkungsgrad (0.6-0.85)' }
    ],
    example: {
      uk: 'Приклад: Q=50 м³/год, H=30 м, η=0.75\nN = 1000×9.81×(50/3600)×30/0.75 = 5450 Вт ≈ 5.5 кВт',
      ru: 'Пример: Q=50 м³/час, H=30 м, η=0.75\nN = 1000×9.81×(50/3600)×30/0.75 = 5450 Вт ≈ 5.5 кВт',
      en: 'Example: Q=50 m³/h, H=30 m, η=0.75\nN = 1000×9.81×(50/3600)×30/0.75 = 5450 W ≈ 5.5 kW',
      de: 'Beispiel: Q=50 m³/h, H=30 m, η=0.75\nN = 1000×9.81×(50/3600)×30/0.75 = 5450 W ≈ 5.5 kW'
    },
    source: {
      name: 'ДБН В.2.5-64:2012',
      url: 'https://dbn.co.ua/'
    }
  },
  {
    id: 'pump_head',
    category: 'pumps',
    title: {
      uk: 'Необхідний напір насоса',
      ru: 'Необходимый напор насоса',
      en: 'Required Pump Head',
      de: 'Erforderliche Förderhöhe'
    },
    formula: 'H = Hгеом + Σhтр + Σhм.о + hсв',
    latex: 'H = H_{\\text{геом}} + \\Sigma h_{\\text{тр}} + \\Sigma h_{\\text{м.о}} + h_{\\text{св}}',
    variables: [
      { uk: 'H — повний напір насоса, м', ru: 'H — полный напор насоса, м', en: 'H — total pump head, m', de: 'H — Gesamtförderhöhe, m' },
      { uk: 'Hгеом — геометрична висота підйому, м', ru: 'Hгеом — геометрическая высота подъема, м', en: 'Hгеом — geometric lift, m', de: 'Hгеом — geometrische Höhe, m' },
      { uk: 'Σhтр — сума втрат по довжині, м', ru: 'Σhтр — сумма потерь по длине, м', en: 'Σhтр — sum of friction losses, m', de: 'Σhтр — Summe der Reibungsverluste, m' },
      { uk: 'Σhм.о — сума місцевих опорів, м', ru: 'Σhм.о — сумма местных сопротивлений, м', en: 'Σhм.о — sum of minor losses, m', de: 'Σhм.о — Summe der lokalen Verluste, m' },
      { uk: 'hсв — вільний напір у точці водорозбору, м', ru: 'hсв — свободный напор в точке водоразбора, м', en: 'hсв — free head at outlet, m', de: 'hсв — freier Druck am Auslass, m' }
    ]
  },
  {
    id: 'npsh_required',
    category: 'pumps',
    title: {
      uk: 'Кавітаційний запас (NPSH)',
      ru: 'Кавитационный запас (NPSH)',
      en: 'Net Positive Suction Head (NPSH)',
      de: 'Nettopositive Saughöhe (NPSH)'
    },
    formula: 'NPSH = pатм/(ρg) - pпар/(ρg) - Hгеом - Σhвс',
    latex: 'NPSH = \\frac{p_{\\text{атм}}}{\\rho g} - \\frac{p_{\\text{пар}}}{\\rho g} - H_{\\text{геом}} - \\Sigma h_{\\text{вс}}',
    variables: [
      { uk: 'NPSH — кавітаційний запас, м', ru: 'NPSH — кавитационный запас, м', en: 'NPSH — net positive suction head, m', de: 'NPSH — Nettopositive Saughöhe, m' },
      { uk: 'pатм — атмосферний тиск, Па', ru: 'pатм — атмосферное давление, Па', en: 'pатм — atmospheric pressure, Pa', de: 'pатм — atmosphärischer Druck, Pa' },
      { uk: 'pпар — тиск насичених парів, Па', ru: 'pпар — давление насыщенных паров, Па', en: 'pпар — vapor pressure, Pa', de: 'pпар — Dampfdruck, Pa' },
      { uk: 'Hгеом — геометрична висота всмоктування, м', ru: 'Hгеом — геометрическая высота всасывания, м', en: 'Hгеом — geometric suction lift, m', de: 'Hгеом — geometrische Saughöhe, m' },
      { uk: 'Σhвс — втрати на всмоктуванні, м', ru: 'Σhвс — потери на всасывании, м', en: 'Σhвс — suction losses, m', de: 'Σhвс — Saugverluste, m' }
    ]
  },
  {
    id: 'specific_speed',
    category: 'pumps',
    title: {
      uk: 'Коефіцієнт швидкохідності насоса',
      ru: 'Коэффициент быстроходности насоса',
      en: 'Specific Speed',
      de: 'Spezifische Drehzahl'
    },
    formula: 'ns = n√Q/H^0.75',
    latex: 'n_s = \\frac{n\\sqrt{Q}}{H^{0.75}}',
    variables: [
      { uk: 'ns — коефіцієнт швидкохідності', ru: 'ns — коэффициент быстроходности', en: 'ns — specific speed', de: 'ns — spezifische Drehzahl' },
      { uk: 'n — частота обертання, об/хв', ru: 'n — частота вращения, об/мин', en: 'n — rotational speed, rpm', de: 'n — Drehzahl, U/min' },
      { uk: 'Q — витрата, м³/с', ru: 'Q — расход, м³/с', en: 'Q — flow rate, m³/s', de: 'Q — Volumenstrom, m³/s' },
      { uk: 'H — напір, м', ru: 'H — напор, м', en: 'H — head, m', de: 'H — Förderhöhe, m' }
    ],
    example: {
      uk: 'Типи насосів:\nns < 80 — відцентрові\n80 < ns < 150 — діагональні\nns > 150 — осьові',
      ru: 'Типы насосов:\nns < 80 — центробежные\n80 < ns < 150 — диагональные\nns > 150 — осевые',
      en: 'Pump types:\nns < 80 — centrifugal\n80 < ns < 150 — mixed flow\nns > 150 — axial',
      de: 'Pumpentypen:\nns < 80 — Kreiselpumpen\n80 < ns < 150 — Diagonal\nns > 150 — Axialpumpen'
    }
  },
  {
    id: 'affinity_laws_flow',
    category: 'pumps',
    title: {
      uk: 'Закони подібності - витрата',
      ru: 'Законы подобия - расход',
      en: 'Affinity Laws - Flow',
      de: 'Ähnlichkeitsgesetze - Volumenstrom'
    },
    formula: 'Q₂/Q₁ = n₂/n₁',
    latex: '\\frac{Q_2}{Q_1} = \\frac{n_2}{n_1}',
    variables: [
      { uk: 'Q — витрата, м³/с', ru: 'Q — расход, м³/с', en: 'Q — flow rate, m³/s', de: 'Q — Volumenstrom, m³/s' },
      { uk: 'n — частота обертання, об/хв', ru: 'n — частота вращения, об/мин', en: 'n — speed, rpm', de: 'n — Drehzahl, U/min' }
    ]
  },
  {
    id: 'affinity_laws_head',
    category: 'pumps',
    title: {
      uk: 'Закони подібності - напір',
      ru: 'Законы подобия - напор',
      en: 'Affinity Laws - Head',
      de: 'Ähnlichkeitsgesetze - Förderhöhe'
    },
    formula: 'H₂/H₁ = (n₂/n₁)²',
    latex: '\\frac{H_2}{H_1} = \\left(\\frac{n_2}{n_1}\\right)^2',
    variables: [
      { uk: 'H — напір, м', ru: 'H — напор, м', en: 'H — head, m', de: 'H — Förderhöhe, m' },
      { uk: 'n — частота обертання, об/хв', ru: 'n — частота вращения, об/мин', en: 'n — speed, rpm', de: 'n — Drehzahl, U/min' }
    ]
  },
  {
    id: 'affinity_laws_power',
    category: 'pumps',
    title: {
      uk: 'Закони подібності - потужність',
      ru: 'Законы подобия - мощность',
      en: 'Affinity Laws - Power',
      de: 'Ähnlichkeitsgesetze - Leistung'
    },
    formula: 'N₂/N₁ = (n₂/n₁)³',
    latex: '\\frac{N_2}{N_1} = \\left(\\frac{n_2}{n_1}\\right)^3',
    variables: [
      { uk: 'N — потужність, Вт', ru: 'N — мощность, Вт', en: 'N — power, W', de: 'N — Leistung, W' },
      { uk: 'n — частота обертання, об/хв', ru: 'n — частота вращения, об/мин', en: 'n — speed, rpm', de: 'n — Drehzahl, U/min' }
    ]
  }
];
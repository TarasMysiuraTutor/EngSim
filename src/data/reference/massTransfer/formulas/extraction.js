// src/data/reference/massTransfer/formulas/extraction.js
export const extractionFormulas = [
  {
    id: 'distribution_coefficient',
    category: 'extraction',
    title: {
      uk: 'Коефіцієнт розподілу',
      ru: 'Коэффициент распределения',
      en: 'Distribution Coefficient',
      de: 'Verteilungskoeffizient'
    },
    formula: 'K_D = C_org/C_aq',
    latex: 'K_D = \\frac{C_{org}}{C_{aq}}',
    variables: [
      { uk: 'C_org — концентрація в органічній фазі', ru: 'C_org — концентрация в органической фазе', en: 'C_org — concentration in organic phase', de: 'C_org — Konzentration in organischer Phase' },
      { uk: 'C_aq — концентрація у водній фазі', ru: 'C_aq — концентрация в водной фазе', en: 'C_aq — concentration in aqueous phase', de: 'C_aq — Konzentration in wässriger Phase' }
    ]
  },
  {
    id: 'extraction_factor',
    category: 'extraction',
    title: {
      uk: 'Фактор екстракції',
      ru: 'Фактор экстракции',
      en: 'Extraction Factor',
      de: 'Extraktionsfaktor'
    },
    formula: 'E = S/(F × K_D)',
    latex: 'E = \\frac{S}{FK_D}',
    variables: [
      { uk: 'S — витрата екстрагента', ru: 'S — расход экстрагента', en: 'S — solvent flow rate', de: 'S — Extraktionsmittelstrom' },
      { uk: 'F — витрата живлення', ru: 'F — расход питания', en: 'F — feed flow rate', de: 'F — Feedstrom' },
      { uk: 'K_D — коефіцієнт розподілу', ru: 'K_D — коэффициент распределения', en: 'K_D — distribution coefficient', de: 'K_D — Verteilungskoeffizient' }
    ]
  },
  {
    id: 'single_stage_extraction',
    category: 'extraction',
    title: {
      uk: 'Односступенева екстракція',
      ru: 'Одноступенчатая экстракция',
      en: 'Single Stage Extraction',
      de: 'Einstufige Extraktion'
    },
    formula: 'X_R = X_F / (1 + (S/F) × K_D)',
    latex: 'X_R = \\frac{X_F}{1 + \\frac{S}{F} K_D}',
    variables: [
      { uk: 'X_R — концентрація в рафінаті', ru: 'X_R — концентрация в рафинате', en: 'X_R — raffinate concentration', de: 'X_R — Raffinatkonzentration' },
      { uk: 'X_F — концентрація у живленні', ru: 'X_F — концентрация в питании', en: 'X_F — feed concentration', de: 'X_F — Feedkonzentration' }
    ]
  },
  {
    id: 'multistage_crosscurrent',
    category: 'extraction',
    title: {
      uk: 'Багатоступенева перехресна екстракція',
      ru: 'Многоступенчатая перекрестная экстракция',
      en: 'Multistage Crosscurrent Extraction',
      de: 'Mehrstufige Kreuzstrom-Extraktion'
    },
    formula: 'X_n = X_F / (1 + (S/F) × K_D)^n',
    latex: 'X_n = \\frac{X_F}{\\left(1 + \\frac{S}{F} K_D\\right)^n}',
    variables: [
      { uk: 'n — кількість ступенів', ru: 'n — количество ступеней', en: 'n — number of stages', de: 'n — Anzahl der Stufen' }
    ]
  },
  {
    id: 'multistage_countercurrent',
    category: 'extraction',
    title: {
      uk: 'Багатоступенева протитечійна екстракція',
      ru: 'Многоступенчатая противоточная экстракция',
      en: 'Multistage Countercurrent Extraction',
      de: 'Mehrstufige Gegenstrom-Extraktion'
    },
    formula: 'N = log[(X_F - Y_S/K_D)/(X_R - Y_S/K_D) × (E-1)/E + 1/E] / log(E)',
    latex: 'N = \\frac{\\log\\left[\\frac{X_F - Y_S/K_D}{X_R - Y_S/K_D} \\frac{E-1}{E} + \\frac{1}{E}\\right]}{\\log(E)}',
    variables: [
      { uk: 'Y_S — концентрація екстрагента на вході', ru: 'Y_S — концентрация экстрагента на входе', en: 'Y_S — solvent inlet concentration', de: 'Y_S — Extraktionsmittel-Eintrittskonzentration' }
    ]
  },
  {
    id: 'nernst_distribution',
    category: 'extraction',
    title: {
      uk: 'Закон розподілу Нернста',
      ru: 'Закон распределения Нернста',
      en: 'Nernst Distribution Law',
      de: 'Nernstsches Verteilungsgesetz'
    },
    formula: 'K_D = C₁/C₂ = const (при T = const)',
    latex: 'K_D = \\frac{C_1}{C_2} = \\text{const} \\quad (T = \\text{const})',
    variables: [
      { uk: 'C₁, C₂ — концентрації в двох фазах', ru: 'C₁, C₂ — концентрации в двух фазах', en: 'C₁, C₂ — concentrations in two phases', de: 'C₁, C₂ — Konzentrationen in zwei Phasen' },
      { uk: 'K_D — коефіцієнт розподілу', ru: 'K_D — коэффициент распределения', en: 'K_D — distribution coefficient', de: 'K_D — Verteilungskoeffizient' }
    ],
    source: {
      name: 'Нернст В., 1891',
      url: 'https://en.wikipedia.org/wiki/Partition_coefficient'
    }
  },
  {
    id: 'extraction_efficiency',
    category: 'extraction',
    title: {
      uk: 'Ефективність екстракції',
      ru: 'Эффективность экстракции',
      en: 'Extraction Efficiency',
      de: 'Extraktionseffizienz'
    },
    formula: 'η = (C₀ - C_R)/C₀ × 100%',
    latex: '\\eta = \\frac{C_0 - C_R}{C_0} \\times 100\\%',
    variables: [
      { uk: 'C₀ — початкова концентрація', ru: 'C₀ — начальная концентрация', en: 'C₀ — initial concentration', de: 'C₀ — Anfangskonzentration' },
      { uk: 'C_R — концентрація в рафінаті', ru: 'C_R — концентрация в рафинате', en: 'C_R — raffinate concentration', de: 'C_R — Raffinatkonzentration' }
    ]
  },
  {
    id: 'selectivity',
    category: 'extraction',
    title: {
      uk: 'Селективність екстрагента',
      ru: 'Селективность экстрагента',
      en: 'Solvent Selectivity',
      de: 'Lösungsmittelselektivität'
    },
    formula: 'β = K_D,A / K_D,B',
    latex: '\\beta = \\frac{K_{D,A}}{K_{D,B}}',
    variables: [
      { uk: 'K_D,A — коефіцієнт розподілу компонента A', ru: 'K_D,A — коэффициент распределения компонента A', en: 'K_D,A — distribution coefficient of component A', de: 'K_D,A — Verteilungskoeffizient der Komponente A' },
      { uk: 'K_D,B — коефіцієнт розподілу компонента B', ru: 'K_D,B — коэффициент распределения компонента B', en: 'K_D,B — distribution coefficient of component B', de: 'K_D,B — Verteilungskoeffizient der Komponente B' },
      { uk: 'β > 1 — A краще екстрагується', ru: 'β > 1 — A лучше экстрагируется', en: 'β > 1 — A extracts better', de: 'β > 1 — A extrahiert besser' }
    ]
  },
  {
    id: 'triangular_diagram',
    category: 'extraction',
    title: {
      uk: 'Трикутна діаграма (правило важеля)',
      ru: 'Треугольная диаграмма (правило рычага)',
      en: 'Triangular Diagram (Lever Rule)',
      de: 'Dreieckdiagramm (Hebelregel)'
    },
    formula: 'M/N = (x_M - x_P)/(x_P - x_N)',
    latex: '\\frac{M}{N} = \\frac{x_M - x_P}{x_P - x_N}',
    variables: [
      { uk: 'M, N — маси фаз', ru: 'M, N — массы фаз', en: 'M, N — phase masses', de: 'M, N — Phasenmassen' },
      { uk: 'x_P — концентрація в точці P (суміш)', ru: 'x_P — концентрация в точке P (смесь)', en: 'x_P — concentration at point P (mixture)', de: 'x_P — Konzentration am Punkt P (Gemisch)' },
      { uk: 'x_M, x_N — концентрації в фазах M та N', ru: 'x_M, x_N — концентрации в фазах M и N', en: 'x_M, x_N — concentrations in phases M and N', de: 'x_M, x_N — Konzentrationen in Phasen M und N' }
    ]
  },
  {
    id: 'janecke_diagram',
    category: 'extraction',
    title: {
      uk: 'Діаграма Янеке (для системи з інертним розчинником)',
      ru: 'Диаграмма Янеке (для системы с инертным растворителем)',
      en: 'Janecke Diagram (for Inert Solvent System)',
      de: 'Janecke-Diagramm (für inertes Lösungsmittelsystem)'
    },
    formula: 'X = mass_A/(mass_A + mass_C), Y = mass_B/(mass_A + mass_C)',
    latex: 'X = \\frac{m_A}{m_A + m_C}, \\quad Y = \\frac{m_B}{m_A + m_C}',
    variables: [
      { uk: 'A — екстрагована речовина', ru: 'A — экстрагируемое вещество', en: 'A — extracted substance', de: 'A — extrahierte Substanz' },
      { uk: 'B — екстрагент', ru: 'B — экстрагент', en: 'B — extractant', de: 'B — Extraktionsmittel' },
      { uk: 'C — інертний розчинник (розріджувач)', ru: 'C — инертный растворитель (разбавитель)', en: 'C — inert solvent (diluent)', de: 'C — inertes Lösungsmittel (Verdünner)' }
    ]
  },
  {
    id: 'mixer_settler_design',
    category: 'extraction',
    title: {
      uk: 'Час перемішування в змішувачі-відстійнику',
      ru: 'Время перемешивания в смесителе-отстойнике',
      en: 'Mixing Time in Mixer-Settler',
      de: 'Mischzeit in Mischer-Abscheider'
    },
    formula: 't_mix = V_mix/(Q_tot) × ln(C₀/(C₀ - C_eq × η))',
    latex: 't_{mix} = \\frac{V_{mix}}{Q_{tot}} \\ln\\left(\\frac{C_0}{C_0 - C_{eq} \\eta}\\right)',
    variables: [
      { uk: 'V_mix — об\'єм змішувача, м³', ru: 'V_mix — объем смесителя, м³', en: 'V_mix — mixer volume, m³', de: 'V_mix — Mischervolumen, m³' },
      { uk: 'Q_tot — сумарна витрата фаз, м³/с', ru: 'Q_tot — суммарный расход фаз, м³/с', en: 'Q_tot — total flow rate, m³/s', de: 'Q_tot — Gesamtdurchfluss, m³/s' },
      { uk: 'C_eq — рівноважна концентрація', ru: 'C_eq — равновесная концентрация', en: 'C_eq — equilibrium concentration', de: 'C_eq — Gleichgewichtskonzentration' },
      { uk: 'η — ефективність змішування', ru: 'η — эффективность смешения', en: 'η — mixing efficiency', de: 'η — Mischeffizienz' }
    ]
  },
  {
    id: 'settling_time',
    category: 'extraction',
    title: {
      uk: 'Час розшарування за законом Стокса',
      ru: 'Время расслаивания по закону Стокса',
      en: 'Settling Time by Stokes Law',
      de: 'Absetzzeit nach Stokes-Gesetz'
    },
    formula: 't_settle = (18 × η × h)/(d² × Δρ × g)',
    latex: 't_{settle} = \\frac{18 \\eta h}{d^2 \\Delta\\rho g}',
    variables: [
      { uk: 'η — в\'язкість середовища, Па·с', ru: 'η — вязкость среды, Па·с', en: 'η — medium viscosity, Pa·s', de: 'η — Mediumviskosität, Pa·s' },
      { uk: 'h — висота розшарування, м', ru: 'h — высота расслаивания, м', en: 'h — settling height, m', de: 'h — Absetzhöhe, m' },
      { uk: 'd — діаметр краплі, м', ru: 'd — диаметр капли, м', en: 'd — droplet diameter, m', de: 'd — Tropfendurchmesser, m' },
      { uk: 'Δρ — різниця густин фаз, кг/м³', ru: 'Δρ — разность плотностей фаз, кг/м³', en: 'Δρ — density difference, kg/m³', de: 'Δρ — Dichtedifferenz, kg/m³' },
      { uk: 'g — прискорення вільного падіння, 9.81 м/с²', ru: 'g — ускорение свободного падения, 9.81 м/с²', en: 'g — gravitational acceleration, 9.81 m/s²', de: 'g — Erdbeschleunigung, 9.81 m/s²' }
    ]
  },
  {
    id: 'supercritical_extraction',
    category: 'extraction',
    title: {
      uk: 'Розчинність при надкритичній екстракції',
      ru: 'Растворимость при сверхкритической экстракции',
      en: 'Solubility in Supercritical Extraction',
      de: 'Löslichkeit bei überkritischer Extraktion'
    },
    formula: 'ln(y) = a + b/T + c×ρ',
    latex: '\\ln(y) = a + \\frac{b}{T} + c\\rho',
    variables: [
      { uk: 'y — розчинність (мольна частка)', ru: 'y — растворимость (мольная доля)', en: 'y — solubility (mole fraction)', de: 'y — Löslichkeit (Molenbruch)' },
      { uk: 'T — температура, К', ru: 'T — температура, К', en: 'T — temperature, K', de: 'T — Temperatur, K' },
      { uk: 'ρ — густина надкритичного флюїду, кг/м³', ru: 'ρ — плотность сверхкритического флюида, кг/м³', en: 'ρ — supercritical fluid density, kg/m³', de: 'ρ — überkritische Fluiddichte, kg/m³' },
      { uk: 'a, b, c — емпіричні константи', ru: 'a, b, c — эмпирические константы', en: 'a, b, c — empirical constants', de: 'a, b, c — empirische Konstanten' }
    ]
  }
];
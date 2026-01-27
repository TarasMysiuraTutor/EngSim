// src/data/reference/massTransfer/formulas/adsorption.js
export const adsorptionFormulas = [
  {
    id: 'langmuir_isotherm',
    category: 'adsorption',
    title: {
      uk: 'Ізотерма Ленгмюра',
      ru: 'Изотерма Ленгмюра',
      en: 'Langmuir Isotherm',
      de: 'Langmuir-Isotherme'
    },
    formula: 'q = (q_max × K_L × C) / (1 + K_L × C)',
    latex: 'q = \\frac{q_{max} K_L C}{1 + K_L C}',
    variables: [
      { uk: 'q — кількість адсорбованої речовини, моль/кг', ru: 'q — количество адсорбированного вещества, моль/кг', en: 'q — amount adsorbed, mol/kg', de: 'q — adsorbierte Menge, mol/kg' },
      { uk: 'q_max — максимальна адсорбційна ємність, моль/кг', ru: 'q_max — максимальная адсорбционная емкость, моль/кг', en: 'q_max — maximum adsorption capacity, mol/kg', de: 'q_max — maximale Adsorptionskapazität, mol/kg' },
      { uk: 'K_L — константа Ленгмюра, м³/моль', ru: 'K_L — константа Ленгмюра, м³/моль', en: 'K_L — Langmuir constant, m³/mol', de: 'K_L — Langmuir-Konstante, m³/mol' },
      { uk: 'C — концентрація в розчині, моль/м³', ru: 'C — концентрация в растворе, моль/м³', en: 'C — solution concentration, mol/m³', de: 'C — Lösungskonzentration, mol/m³' }
    ],
    source: {
      name: 'Ленгмюр І., 1918',
      url: 'https://en.wikipedia.org/wiki/Langmuir_adsorption_model'
    }
  },
  {
    id: 'freundlich_isotherm',
    category: 'adsorption',
    title: {
      uk: 'Ізотерма Фрейндліха',
      ru: 'Изотерма Фрейндлиха',
      en: 'Freundlich Isotherm',
      de: 'Freundlich-Isotherme'
    },
    formula: 'q = K_F × C^(1/n)',
    latex: 'q = K_F C^{1/n}',
    variables: [
      { uk: 'K_F — константа Фрейндліха, (моль/кг)(м³/моль)^(1/n)', ru: 'K_F — константа Фрейндлиха, (моль/кг)(м³/моль)^(1/n)', en: 'K_F — Freundlich constant, (mol/kg)(m³/mol)^(1/n)', de: 'K_F — Freundlich-Konstante, (mol/kg)(m³/mol)^(1/n)' },
      { uk: 'n — показник неоднорідності (зазвичай > 1)', ru: 'n — показатель неоднородности (обычно > 1)', en: 'n — heterogeneity factor (typically > 1)', de: 'n — Heterogenitätsfaktor (typischerweise > 1)' }
    ]
  },
  {
    id: 'bet_isotherm',
    category: 'adsorption',
    title: {
      uk: 'Ізотерма БЕТ (Брунауера-Еммета-Теллера)',
      ru: 'Изотерма БЭТ (Брунауэра-Эммета-Теллера)',
      en: 'BET Isotherm (Brunauer-Emmett-Teller)',
      de: 'BET-Isotherme (Brunauer-Emmett-Teller)'
    },
    formula: 'q = (q_m × C × C_BET) / ((C_s - C) × (1 + (C_BET - 1) × C/C_s))',
    latex: 'q = \\frac{q_m C C_{BET}}{(C_s - C)(1 + (C_{BET} - 1)C/C_s)}',
    variables: [
      { uk: 'q_m — ємність моношару, моль/кг', ru: 'q_m — емкость монослоя, моль/кг', en: 'q_m — monolayer capacity, mol/kg', de: 'q_m — Monoschichtkapazität, mol/kg' },
      { uk: 'C_s — концентрація насичення', ru: 'C_s — концентрация насыщения', en: 'C_s — saturation concentration', de: 'C_s — Sättigungskonzentration' },
      { uk: 'C_BET — константа БЕТ', ru: 'C_BET — константа БЭТ', en: 'C_BET — BET constant', de: 'C_BET — BET-Konstante' }
    ]
  },
  {
    id: 'dubinin_radushkevich',
    category: 'adsorption',
    title: {
      uk: 'Рівняння Дубініна-Радушкевича',
      ru: 'Уравнение Дубинина-Радушкевича',
      en: 'Dubinin-Radushkevich Equation',
      de: 'Dubinin-Radushkevich-Gleichung'
    },
    formula: 'q = q_max × exp(-B × ε²)',
    latex: 'q = q_{max} \\exp(-B\\varepsilon^2)',
    variables: [
      { uk: 'B — константа, пов\'язана з енергією адсорбції', ru: 'B — константа, связанная с энергией адсорбции', en: 'B — constant related to adsorption energy', de: 'B — Konstante im Zusammenhang mit Adsorptionsenergie' },
      { uk: 'ε — потенціал Поляні = RT×ln(C_s/C)', ru: 'ε — потенциал Поляни = RT×ln(C_s/C)', en: 'ε — Polanyi potential = RT×ln(C_s/C)', de: 'ε — Polanyi-Potential = RT×ln(C_s/C)' }
    ]
  },
  {
    id: 'temkin_isotherm',
    category: 'adsorption',
    title: {
      uk: 'Ізотерма Темкіна',
      ru: 'Изотерма Темкина',
      en: 'Temkin Isotherm',
      de: 'Temkin-Isotherme'
    },
    formula: 'q = (RT/b) × ln(K_T × C)',
    latex: 'q = \\frac{RT}{b} \\ln(K_T C)',
    variables: [
      { uk: 'R — універсальна газова константа, 8.314 Дж/(моль·К)', ru: 'R — универсальная газовая постоянная, 8.314 Дж/(моль·К)', en: 'R — universal gas constant, 8.314 J/(mol·K)', de: 'R — universelle Gaskonstante, 8.314 J/(mol·K)' },
      { uk: 'T — температура, К', ru: 'T — температура, К', en: 'T — temperature, K', de: 'T — Temperatur, K' },
      { uk: 'b — константа теплоти адсорбції', ru: 'b — константа теплоты адсорбции', en: 'b — heat of adsorption constant', de: 'b — Adsorptionswärme-Konstante' },
      { uk: 'K_T — константа рівноваги Темкіна', ru: 'K_T — константа равновесия Темкина', en: 'K_T — Temkin equilibrium constant', de: 'K_T — Temkin-Gleichgewichtskonstante' }
    ]
  },
  {
    id: 'mass_transfer_zone',
    category: 'adsorption',
    title: {
      uk: 'Довжина зони масопередачі',
      ru: 'Длина зоны массопередачи',
      en: 'Mass Transfer Zone Length',
      de: 'Länge der Stoffübergangszone'
    },
    formula: 'L_MTZ = (u × t_MTZ) / ε',
    latex: 'L_{MTZ} = \\frac{u \\cdot t_{MTZ}}{\\varepsilon}',
    variables: [
      { uk: 'u — швидкість потоку, м/с', ru: 'u — скорость потока, м/с', en: 'u — flow velocity, m/s', de: 'u — Strömungsgeschwindigkeit, m/s' },
      { uk: 't_MTZ — час формування зони, с', ru: 't_MTZ — время формирования зоны, с', en: 't_MTZ — zone formation time, s', de: 't_MTZ — Zonenbildungszeit, s' },
      { uk: 'ε — порожнинність шару', ru: 'ε — порозность слоя', en: 'ε — bed porosity', de: 'ε — Bettporosität' }
    ]
  },
  {
    id: 'breakthrough_time',
    category: 'adsorption',
    title: {
      uk: 'Час проскоку',
      ru: 'Время проскока',
      en: 'Breakthrough Time',
      de: 'Durchbruchszeit'
    },
    formula: 't_b = (ρ_b × q_e × L) / (C_0 × u)',
    latex: 't_b = \\frac{\\rho_b q_e L}{C_0 u}',
    variables: [
      { uk: 'ρ_b — насипна густина адсорбента, кг/м³', ru: 'ρ_b — насыпная плотность адсорбента, кг/м³', en: 'ρ_b — bulk density of adsorbent, kg/m³', de: 'ρ_b — Schüttdichte des Adsorbens, kg/m³' },
      { uk: 'q_e — рівноважна адсорбція, моль/кг', ru: 'q_e — равновесная адсорбция, моль/кг', en: 'q_e — equilibrium adsorption, mol/kg', de: 'q_e — Gleichgewichtsadsorption, mol/kg' },
      { uk: 'L — висота шару, м', ru: 'L — высота слоя, м', en: 'L — bed height, m', de: 'L — Betthöhe, m' },
      { uk: 'C_0 — початкова концентрація, моль/м³', ru: 'C_0 — начальная концентрация, моль/м³', en: 'C_0 — initial concentration, mol/m³', de: 'C_0 — Anfangskonzentration, mol/m³' }
    ]
  },
   {
    id: 'redlich_peterson',
    category: 'adsorption',
    title: {
      uk: 'Ізотерма Редліха-Петерсона',
      ru: 'Изотерма Редлиха-Петерсона',
      en: 'Redlich-Peterson Isotherm',
      de: 'Redlich-Peterson-Isotherme'
    },
    formula: 'q = (K_RP × C)/(1 + α_RP × C^β)',
    latex: 'q = \\frac{K_{RP} C}{1 + \\alpha_{RP} C^\\beta}',
    variables: [
      { uk: 'K_RP, α_RP — константи Редліха-Петерсона', ru: 'K_RP, α_RP — константы Редлиха-Петерсона', en: 'K_RP, α_RP — Redlich-Peterson constants', de: 'K_RP, α_RP — Redlich-Peterson-Konstanten' },
      { uk: 'β — показник степеня (0 < β ≤ 1)', ru: 'β — показатель степени (0 < β ≤ 1)', en: 'β — exponent (0 < β ≤ 1)', de: 'β — Exponent (0 < β ≤ 1)' },
      { uk: 'при β=1 переходить в ізотерму Ленгмюра', ru: 'при β=1 переходит в изотерму Ленгмюра', en: 'reduces to Langmuir at β=1', de: 'reduziert sich zu Langmuir bei β=1' }
    ]
  },
  {
    id: 'sips_isotherm',
    category: 'adsorption',
    title: {
      uk: 'Ізотерма Сіпса (Ленгмюра-Фрейндліха)',
      ru: 'Изотерма Сипса (Ленгмюра-Фрейндлиха)',
      en: 'Sips Isotherm (Langmuir-Freundlich)',
      de: 'Sips-Isotherme (Langmuir-Freundlich)'
    },
    formula: 'q = (q_max × (K_s × C)^n_s)/(1 + (K_s × C)^n_s)',
    latex: 'q = \\frac{q_{max} (K_s C)^{n_s}}{1 + (K_s C)^{n_s}}',
    variables: [
      { uk: 'K_s — константа Сіпса', ru: 'K_s — константа Сипса', en: 'K_s — Sips constant', de: 'K_s — Sips-Konstante' },
      { uk: 'n_s — показник неоднорідності', ru: 'n_s — показатель неоднородности', en: 'n_s — heterogeneity parameter', de: 'n_s — Heterogenitätsparameter' }
    ]
  },
  {
    id: 'toth_isotherm',
    category: 'adsorption',
    title: {
      uk: 'Ізотерма Тота',
      ru: 'Изотерма Тота',
      en: 'Toth Isotherm',
      de: 'Toth-Isotherme'
    },
    formula: 'q = (q_max × K_T × C)/((1 + (K_T × C)^t)^(1/t))',
    latex: 'q = \\frac{q_{max} K_T C}{(1 + (K_T C)^t)^{1/t}}',
    variables: [
      { uk: 'K_T — константа Тота', ru: 'K_T — константа Тота', en: 'K_T — Toth constant', de: 'K_T — Toth-Konstante' },
      { uk: 't — параметр неоднорідності (0 < t ≤ 1)', ru: 't — параметр неоднородности (0 < t ≤ 1)', en: 't — heterogeneity parameter (0 < t ≤ 1)', de: 't — Heterogenitätsparameter (0 < t ≤ 1)' }
    ]
  },
  {
    id: 'elovich_kinetics',
    category: 'adsorption',
    title: {
      uk: 'Кінетична модель Еловича',
      ru: 'Кинетическая модель Еловича',
      en: 'Elovich Kinetic Model',
      de: 'Elovich-kinetisches Modell'
    },
    formula: 'q_t = (1/β) × ln(α × β) + (1/β) × ln(t)',
    latex: 'q_t = \\frac{1}{\\beta} \\ln(\\alpha\\beta) + \\frac{1}{\\beta} \\ln(t)',
    variables: [
      { uk: 'q_t — адсорбція в час t, моль/кг', ru: 'q_t — адсорбция в момент t, моль/кг', en: 'q_t — adsorption at time t, mol/kg', de: 'q_t — Adsorption zur Zeit t, mol/kg' },
      { uk: 'α — початкова швидкість адсорбції, моль/(кг·с)', ru: 'α — начальная скорость адсорбции, моль/(кг·с)', en: 'α — initial adsorption rate, mol/(kg·s)', de: 'α — anfängliche Adsorptionsgeschwindigkeit, mol/(kg·s)' },
      { uk: 'β — константа десорбції', ru: 'β — константа десорбции', en: 'β — desorption constant', de: 'β — Desorptionskonstante' }
    ]
  },
  {
    id: 'pseudo_first_order',
    category: 'adsorption',
    title: {
      uk: 'Кінетика псевдо-першого порядку (Лагергрен)',
      ru: 'Кинетика псевдо-первого порядка (Лагергрен)',
      en: 'Pseudo-First-Order Kinetics (Lagergren)',
      de: 'Pseudo-erster-Ordnung-Kinetik (Lagergren)'
    },
    formula: 'dq/dt = k₁ × (q_e - q_t)',
    latex: '\\frac{dq}{dt} = k_1(q_e - q_t)',
    variables: [
      { uk: 'k₁ — константа швидкості, 1/с', ru: 'k₁ — константа скорости, 1/с', en: 'k₁ — rate constant, 1/s', de: 'k₁ — Geschwindigkeitskonstante, 1/s' },
      { uk: 'q_e — рівноважна адсорбція, моль/кг', ru: 'q_e — равновесная адсорбция, моль/кг', en: 'q_e — equilibrium adsorption, mol/kg', de: 'q_e — Gleichgewichtsadsorption, mol/kg' },
      { uk: 'q_t — адсорбція в час t', ru: 'q_t — адсорбция в момент t', en: 'q_t — adsorption at time t', de: 'q_t — Adsorption zur Zeit t' }
    ]
  },
  {
    id: 'pseudo_second_order',
    category: 'adsorption',
    title: {
      uk: 'Кінетика псевдо-другого порядку',
      ru: 'Кинетика псевдо-второго порядка',
      en: 'Pseudo-Second-Order Kinetics',
      de: 'Pseudo-zweiter-Ordnung-Kinetik'
    },
    formula: 'dq/dt = k₂ × (q_e - q_t)²',
    latex: '\\frac{dq}{dt} = k_2(q_e - q_t)^2',
    variables: [
      { uk: 'k₂ — константа швидкості, кг/(моль·с)', ru: 'k₂ — константа скорости, кг/(моль·с)', en: 'k₂ — rate constant, kg/(mol·s)', de: 'k₂ — Geschwindigkeitskonstante, kg/(mol·s)' }
    ]
  },
  {
    id: 'intraparticle_diffusion',
    category: 'adsorption',
    title: {
      uk: 'Внутрішньочастинкова дифузія (модель Вебера-Морріса)',
      ru: 'Внутричастичная диффузия (модель Вебера-Морриса)',
      en: 'Intraparticle Diffusion (Weber-Morris Model)',
      de: 'Intrapartikuläre Diffusion (Weber-Morris-Modell)'
    },
    formula: 'q_t = k_id × √t + C',
    latex: 'q_t = k_{id} \\sqrt{t} + C',
    variables: [
      { uk: 'k_id — константа внутрішньочастинкової дифузії, моль/(кг·с^0.5)', ru: 'k_id — константа внутричастичной диффузии, моль/(кг·с^0.5)', en: 'k_id — intraparticle diffusion constant, mol/(kg·s^0.5)', de: 'k_id — intrapartikuläre Diffusionskonstante, mol/(kg·s^0.5)' },
      { uk: 'C — константа, пов\'язана з товщиною граничного шару', ru: 'C — константа, связанная с толщиной пограничного слоя', en: 'C — constant related to boundary layer thickness', de: 'C — Konstante bezogen auf Grenzschichtdicke' }
    ]
  },
  {
    id: 'bed_depth_service_time',
    category: 'adsorption',
    title: {
      uk: 'Модель BDST (глибина шару - час роботи)',
      ru: 'Модель BDST (глубина слоя - время работы)',
      en: 'BDST Model (Bed Depth Service Time)',
      de: 'BDST-Modell (Betthöhe-Betriebszeit)'
    },
    formula: 't = (N₀ × Z)/C₀v - (1/(k_a × C₀)) × ln(C₀/C_b - 1)',
    latex: 't = \\frac{N_0 Z}{C_0 v} - \\frac{1}{k_a C_0} \\ln\\left(\\frac{C_0}{C_b} - 1\\right)',
    variables: [
      { uk: 't — час роботи до проскоку, с', ru: 't — время работы до проскока, с', en: 't — service time to breakthrough, s', de: 't — Betriebszeit bis zum Durchbruch, s' },
      { uk: 'N₀ — адсорбційна ємність шару, моль/м³', ru: 'N₀ — адсорбционная емкость слоя, моль/м³', en: 'N₀ — adsorption capacity of bed, mol/m³', de: 'N₀ — Adsorptionskapazität des Bettes, mol/m³' },
      { uk: 'Z — глибина шару, м', ru: 'Z — глубина слоя, м', en: 'Z — bed depth, m', de: 'Z — Betthöhe, m' },
      { uk: 'v — лінійна швидкість, м/с', ru: 'v — линейная скорость, м/с', en: 'v — linear velocity, m/s', de: 'v — lineare Geschwindigkeit, m/s' },
      { uk: 'C_b — концентрація проскоку', ru: 'C_b — концентрация проскока', en: 'C_b — breakthrough concentration', de: 'C_b — Durchbruchskonzentration' }
    ]
  },
  {
    id: 'yoon_nelson',
    category: 'adsorption',
    title: {
      uk: 'Модель Юна-Нельсона',
      ru: 'Модель Юна-Нельсона',
      en: 'Yoon-Nelson Model',
      de: 'Yoon-Nelson-Modell'
    },
    formula: 'ln(C/(C₀-C)) = k_YN × t - τ × k_YN',
    latex: '\\ln\\left(\\frac{C}{C_0-C}\\right) = k_{YN} t - \\tau k_{YN}',
    variables: [
      { uk: 'k_YN — константа швидкості, 1/с', ru: 'k_YN — константа скорости, 1/с', en: 'k_YN — rate constant, 1/s', de: 'k_YN — Geschwindigkeitskonstante, 1/s' },
      { uk: 'τ — час, необхідний для 50% проскоку, с', ru: 'τ — время, необходимое для 50% проскока, с', en: 'τ — time for 50% breakthrough, s', de: 'τ — Zeit für 50% Durchbruch, s' },
      { uk: 'C — концентрація на виході', ru: 'C — концентрация на выходе', en: 'C — outlet concentration', de: 'C — Austrittskonzentration' }
    ]
  }
];
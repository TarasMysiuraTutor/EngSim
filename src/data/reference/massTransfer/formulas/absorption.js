// src/data/reference/massTransfer/formulas/absorption.js
export const absorptionFormulas = [
  {
    id: "henry_law",
    category: "absorption",
    title: {
      uk: "Закон Генрі",
      ru: "Закон Генри",
      en: "Henry's Law",
      de: "Henry-Gesetz",
    },
    formula: "p = H × x",
    latex: "p = Hx",
    variables: [
      {
        uk: "p — парціальний тиск газу, Па",
        ru: "p — парциальное давление газа, Па",
        en: "p — partial pressure of gas, Pa",
        de: "p — Partialdruck des Gases, Pa",
      },
      {
        uk: "H — константа Генрі, Па",
        ru: "H — константа Генри, Па",
        en: "H — Henry's constant, Pa",
        de: "H — Henry-Konstante, Pa",
      },
      {
        uk: "x — мольна частка в рідині",
        ru: "x — мольная доля в жидкости",
        en: "x — mole fraction in liquid",
        de: "x — Molenbruch in Flüssigkeit",
      },
    ],
    source: {
      name: "Генрі В., 1803",
      url: "https://en.wikipedia.org/wiki/Henry%27s_law",
    },
  },
  {
    id: "kremser_equation",
    category: "absorption",
    title: {
      uk: "Рівняння Кремсера",
      ru: "Уравнение Кремсера",
      en: "Kremser Equation",
      de: "Kremser-Gleichung",
    },
    formula: "N = log[(Y₁-mX₂)/(Y₂-mX₂) × (1-1/A) + 1/A] / log(A)",
    latex:
      "N = \\frac{\\log\\left[\\frac{Y_1-mX_2}{Y_2-mX_2} \\left(1-\\frac{1}{A}\\right) + \\frac{1}{A}\\right]}{\\log(A)}",
    variables: [
      {
        uk: "A = L/(mG) — фактор абсорбції",
        ru: "A = L/(mG) — фактор абсорбции",
        en: "A = L/(mG) — absorption factor",
        de: "A = L/(mG) — Absorptionsfaktor",
      },
      {
        uk: "L — витрата рідини, моль/с",
        ru: "L — расход жидкости, моль/с",
        en: "L — liquid flow rate, mol/s",
        de: "L — Flüssigkeitsstrom, mol/s",
      },
      {
        uk: "G — витрата газу, моль/с",
        ru: "G — расход газа, моль/с",
        en: "G — gas flow rate, mol/s",
        de: "G — Gasstrom, mol/s",
      },
      {
        uk: "m — нахил лінії рівноваги",
        ru: "m — наклон линии равновесия",
        en: "m — slope of equilibrium line",
        de: "m — Steigung der Gleichgewichtslinie",
      },
    ],
  },
  {
    id: "absorption_factor",
    category: "absorption",
    title: {
      uk: "Фактор абсорбції",
      ru: "Фактор абсорбции",
      en: "Absorption Factor",
      de: "Absorptionsfaktor",
    },
    formula: "A = L/(m × G)",
    latex: "A = \\frac{L}{mG}",
    variables: [
      {
        uk: "L — мольна витрата абсорбента",
        ru: "L — мольный расход абсорбента",
        en: "L — molar flow rate of absorbent",
        de: "L — Molstrom des Absorptionsmittels",
      },
      {
        uk: "m — коефіцієнт розподілу (нахил рівноваги)",
        ru: "m — коэффициент распределения (наклон равновесия)",
        en: "m — distribution coefficient (equilibrium slope)",
        de: "m — Verteilungskoeffizient (Gleichgewichtssteigung)",
      },
      {
        uk: "G — мольна витрата газу",
        ru: "G — мольный расход газа",
        en: "G — molar flow rate of gas",
        de: "G — Molstrom des Gases",
      },
    ],
  },
  {
    id: "minimum_liquid_flow",
    category: "absorption",
    title: {
      uk: "Мінімальна витрата абсорбента",
      ru: "Минимальный расход абсорбента",
      en: "Minimum Liquid Flow Rate",
      de: "Minimaler Flüssigkeitsstrom",
    },
    formula: "L_min/G = (Y₁ - Y₂)/(X₁* - X₂)",
    latex: "\\frac{L_{min}}{G} = \\frac{Y_1 - Y_2}{X_1^* - X_2}",
    variables: [
      {
        uk: "X₁* — концентрація в рідині, рівноважна з Y₁",
        ru: "X₁* — концентрация в жидкости, равновесная с Y₁",
        en: "X₁* — liquid concentration in equilibrium with Y₁",
        de: "X₁* — Flüssigkeitskonzentration im Gleichgewicht mit Y₁",
      },
      {
        uk: "Y₁, Y₂ — концентрації в газі на вході/виході",
        ru: "Y₁, Y₂ — концентрации в газе на входе/выходе",
        en: "Y₁, Y₂ — gas concentrations inlet/outlet",
        de: "Y₁, Y₂ — Gaskonzentrationen Ein-/Austritt",
      },
    ],
  },
  {
    id: "overall_mass_transfer",
    category: "absorption",
    title: {
      uk: "Загальний коефіцієнт масопередачі",
      ru: "Общий коэффициент массопередачи",
      en: "Overall Mass Transfer Coefficient",
      de: "Gesamtstoffübergangskoeffizient",
    },
    formula: "1/K_G = 1/k_G + m/k_L",
    latex: "\\frac{1}{K_G} = \\frac{1}{k_G} + \\frac{m}{k_L}",
    variables: [
      {
        uk: "K_G — загальний коефіцієнт масопередачі (газова фаза)",
        ru: "K_G — общий коэффициент массопередачи (газовая фаза)",
        en: "K_G — overall mass transfer coefficient (gas phase)",
        de: "K_G — Gesamtstoffübergangskoeffizient (Gasphase)",
      },
      {
        uk: "k_G — коефіцієнт масовіддачі в газі",
        ru: "k_G — коэффициент массоотдачи в газе",
        en: "k_G — gas phase mass transfer coefficient",
        de: "k_G — Stoffübergangskoeffizient Gasphase",
      },
      {
        uk: "k_L — коефіцієнт масовіддачі в рідині",
        ru: "k_L — коэффициент массоотдачи в жидкости",
        en: "k_L — liquid phase mass transfer coefficient",
        de: "k_L — Stoffübergangskoeffizient Flüssigphase",
      },
    ],
  },
  {
    id: "operating_line_absorption",
    category: "absorption",
    title: {
      uk: "Рівняння робочої лінії абсорбції",
      ru: "Уравнение рабочей линии абсорбции",
      en: "Absorption Operating Line Equation",
      de: "Absorptions-Arbeitslinie-Gleichung",
    },
    formula: "Y = (L/G) × X + (Y₂ - (L/G) × X₂)",
    latex: "Y = \\frac{L}{G} X + \\left(Y_2 - \\frac{L}{G} X_2\\right)",
    variables: [
      {
        uk: "Y — концентрація в газі",
        ru: "Y — концентрация в газе",
        en: "Y — gas concentration",
        de: "Y — Gaskonzentration",
      },
      {
        uk: "X — концентрація в рідині",
        ru: "X — концентрация в жидкости",
        en: "X — liquid concentration",
        de: "X — Flüssigkeitskonzentration",
      },
      {
        uk: "Y₂, X₂ — концентрації на виході",
        ru: "Y₂, X₂ — концентрации на выходе",
        en: "Y₂, X₂ — outlet concentrations",
        de: "Y₂, X₂ — Austrittskonzentrationen",
      },
    ],
  },
  {
    id: "colburn_equation",
    category: "absorption",
    title: {
      uk: "Рівняння Колберна (десорбція)",
      ru: "Уравнение Колберна (десорбция)",
      en: "Colburn Equation (Stripping)",
      de: "Colburn-Gleichung (Strippen)",
    },
    formula: "N = log[(Y₁-mX₂)/(Y₂-mX₂) × (1-S)/S + S] / log(S)",
    latex:
      "N = \\frac{\\log\\left[\\frac{Y_1-mX_2}{Y_2-mX_2} \\frac{1-S}{S} + S\\right]}{\\log(S)}",
    variables: [
      {
        uk: "S = mG/L — фактор десорбції (стрипінгу)",
        ru: "S = mG/L — фактор десорбции (стриппинга)",
        en: "S = mG/L — stripping factor",
        de: "S = mG/L — Strippingfaktor",
      },
    ],
  },
  {
    id: "onda_correlation",
    category: "absorption",
    title: {
      uk: "Кореляція Онда для k_L",
      ru: "Корреляция Онда для k_L",
      en: "Onda Correlation for k_L",
      de: "Onda-Korrelation für k_L",
    },
    formula: "k_L = 0.0051 × (Re_L^(2/3)) × (Sc_L^(-1/2)) × (a×d_p)^0.4",
    latex: "k_L = 0.0051 Re_L^{2/3} Sc_L^{-1/2} (ad_p)^{0.4}",
    variables: [
      {
        uk: "Re_L — число Рейнольдса для рідини",
        ru: "Re_L — число Рейнольдса для жидкости",
        en: "Re_L — Reynolds number for liquid",
        de: "Re_L — Reynolds-Zahl für Flüssigkeit",
      },
      {
        uk: "Sc_L — число Шмідта для рідини",
        ru: "Sc_L — число Шмидта для жидкости",
        en: "Sc_L — Schmidt number for liquid",
        de: "Sc_L — Schmidt-Zahl für Flüssigkeit",
      },
      {
        uk: "a — питома поверхня насадки, м²/м³",
        ru: "a — удельная поверхность насадки, м²/м³",
        en: "a — packing specific area, m²/m³",
        de: "a — spezifische Packungsoberfläche, m²/m³",
      },
      {
        uk: "d_p — розмір насадки, м",
        ru: "d_p — размер насадки, м",
        en: "d_p — packing size, m",
        de: "d_p — Packungsgröße, m",
      },
    ],
  },
  {
    id: "two_film_theory",
    category: "absorption",
    title: {
      uk: "Теорія двох плівок (Льюїс-Уітмен)",
      ru: "Теория двух пленок (Льюис-Уитмен)",
      en: "Two-Film Theory (Lewis-Whitman)",
      de: "Zwei-Film-Theorie (Lewis-Whitman)",
    },
    formula:
      "N_A = k_G × (p_bulk - p_interface) = k_L × (C_interface - C_bulk)",
    latex: "N_A = k_G(p_{bulk} - p_{int}) = k_L(C_{int} - C_{bulk})",
    variables: [
      {
        uk: "N_A — потік речовини A, моль/(м²·с)",
        ru: "N_A — поток вещества A, моль/(м²·с)",
        en: "N_A — molar flux of A, mol/(m²·s)",
        de: "N_A — Molfluss von A, mol/(m²·s)",
      },
      {
        uk: "p — парціальний тиск у газовій фазі, Па",
        ru: "p — парциальное давление в газовой фазе, Па",
        en: "p — partial pressure in gas phase, Pa",
        de: "p — Partialdruck in Gasphase, Pa",
      },
      {
        uk: "C — концентрація в рідкій фазі, моль/м³",
        ru: "C — концентрация в жидкой фазе, моль/м³",
        en: "C — concentration in liquid phase, mol/m³",
        de: "C — Konzentration in Flüssigphase, mol/m³",
      },
    ],
  },
  {
    id: "wetted_wall_column",
    category: "absorption",
    title: {
      uk: "Коефіцієнт масовіддачі для колони зі змоченою стінкою",
      ru: "Коэффициент массоотдачи для колонны со смоченной стенкой",
      en: "Mass Transfer Coefficient for Wetted Wall Column",
      de: "Stoffübergangskoeffizient für Rieselfilmkolonne",
    },
    formula: "Sh = 0.023 × Re^0.83 × Sc^0.44",
    latex: "Sh = 0.023 Re^{0.83} Sc^{0.44}",
    variables: [
      {
        uk: "Sh — число Шервуда",
        ru: "Sh — число Шервуда",
        en: "Sh — Sherwood number",
        de: "Sh — Sherwood-Zahl",
      },
      {
        uk: "Re — число Рейнольдса",
        ru: "Re — число Рейнольдса",
        en: "Re — Reynolds number",
        de: "Re — Reynolds-Zahl",
      },
      {
        uk: "Sc — число Шмідта",
        ru: "Sc — число Шмидта",
        en: "Sc — Schmidt number",
        de: "Sc — Schmidt-Zahl",
      },
    ],
  },
  {
    id: "penetration_theory",
    category: "absorption",
    title: {
      uk: "Теорія проникнення (Хігбі)",
      ru: "Теория проникновения (Хигби)",
      en: "Penetration Theory (Higbie)",
      de: "Penetrationstheorie (Higbie)",
    },
    formula: "k_L = 2×√(D/(π×t_e))",
    latex: "k_L = 2\\sqrt{\\frac{D}{\\pi t_e}}",
    variables: [
      {
        uk: "t_e — час контакту фаз, с",
        ru: "t_e — время контакта фаз, с",
        en: "t_e — contact time, s",
        de: "t_e — Kontaktzeit, s",
      },
      {
        uk: "D — коефіцієнт дифузії, м²/с",
        ru: "D — коэффициент диффузии, м²/с",
        en: "D — diffusion coefficient, m²/s",
        de: "D — Diffusionskoeffizient, m²/s",
      },
    ],
  },
  {
    id: "packed_column_flooding",
    category: "absorption",
    title: {
      uk: "Швидкість захлинання насадкової колони",
      ru: "Скорость захлебывания насадочной колонны",
      en: "Flooding Velocity in Packed Column",
      de: "Flutgeschwindigkeit in Füllkörperkolonne",
    },
    formula: "u_flood = C_flood × √((ρ_L - ρ_G)/ρ_G) × (ε³/a)",
    latex:
      "u_{flood} = C_{flood} \\sqrt{\\frac{\\rho_L - \rho_G}{\rho_G}} \frac{\varepsilon^3}{a}",
    variables: [
      {
        uk: "C_flood — константа захлинання (0.05-0.15)",
        ru: "C_flood — константа захлебывания (0.05-0.15)",
        en: "C_flood — flooding constant (0.05-0.15)",
        de: "C_flood — Flutkonstante (0.05-0.15)",
      },
      {
        uk: "ρ_L, ρ_G — густина рідини та газу, кг/м³",
        ru: "ρ_L, ρ_G — плотность жидкости и газа, кг/м³",
        en: "ρ_L, ρ_G — liquid and gas density, kg/m³",
        de: "ρ_L, ρ_G — Flüssigkeits- und Gasdichte, kg/m³",
      },
      {
        uk: "ε — порожнинність насадки",
        ru: "ε — порозность насадки",
        en: "ε — packing void fraction",
        de: "ε — Packungshohlraumanteil",
      },
    ],
  },
];

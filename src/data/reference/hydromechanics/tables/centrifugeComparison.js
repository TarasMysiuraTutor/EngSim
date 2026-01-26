// src/data/reference/hydromechanics/formulas/filtration.js

export const filtrationFormulas = [
  {
    id: "filtration-darcy",
    category: "filtration",
    title: {
      uk: "Закон Дарсі для фільтрування",
      ru: "Закон Дарси для фильтрования",
      en: "Darcy's Law for Filtration",
      de: "Darcy-Gesetz für Filtration"
    },
    latex: "Q = \\frac{k \\cdot A \\cdot \\Delta P}{\\mu \\cdot L}",
    variables: [
      {
        uk: "Q - об'ємна витрата фільтрату, м³/с",
        ru: "Q - объемный расход фильтрата, м³/с",
        en: "Q - volumetric flow rate of filtrate, m³/s",
        de: "Q - Volumenstrom des Filtrats, m³/s"
      },
      {
        uk: "k - проникність фільтрувального середовища, м²",
        ru: "k - проницаемость фильтрующей среды, м²",
        en: "k - permeability of filter medium, m²",
        de: "k - Permeabilität des Filtermediums, m²"
      },
      {
        uk: "A - площа фільтрування, м²",
        ru: "A - площадь фильтрования, м²",
        en: "A - filtration area, m²",
        de: "A - Filtrationsfläche, m²"
      },
      {
        uk: "ΔP - перепад тиску, Па",
        ru: "ΔP - перепад давления, Па",
        en: "ΔP - pressure drop, Pa",
        de: "ΔP - Druckabfall, Pa"
      },
      {
        uk: "μ - динамічна в'язкість, Па·с",
        ru: "μ - динамическая вязкость, Па·с",
        en: "μ - dynamic viscosity, Pa·s",
        de: "μ - dynamische Viskosität, Pa·s"
      },
      {
        uk: "L - товщина шару осаду, м",
        ru: "L - толщина слоя осадка, м",
        en: "L - cake thickness, m",
        de: "L - Kuchendicke, m"
      }
    ],
    source: {
      name: "Процеси і апарати хімічної технології",
      url: null
    }
  },
  {
    id: "filtration-resistance",
    category: "filtration",
    title: {
      uk: "Опір фільтрувального шару",
      ru: "Сопротивление фильтрующего слоя",
      en: "Filter Cake Resistance",
      de: "Filterkuchenwiderstand"
    },
    latex: "R = \\frac{\\alpha \\cdot m}{A}",
    variables: [
      {
        uk: "R - питомий опір осаду, 1/м",
        ru: "R - удельное сопротивление осадка, 1/м",
        en: "R - specific cake resistance, 1/m",
        de: "R - spezifischer Kuchenwiderstand, 1/m"
      },
      {
        uk: "α - питомий опір осаду, м/кг",
        ru: "α - удельное сопротивление осадка, м/кг",
        en: "α - specific resistance, m/kg",
        de: "α - spezifischer Widerstand, m/kg"
      },
      {
        uk: "m - маса осаду, кг",
        ru: "m - масса осадка, кг",
        en: "m - cake mass, kg",
        de: "m - Kuchenmasse, kg"
      },
      {
        uk: "A - площа фільтрування, м²",
        ru: "A - площадь фильтрования, м²",
        en: "A - filtration area, m²",
        de: "A - Filtrationsfläche, m²"
      }
    ],
    source: {
      name: "Процеси і апарати",
      url: null
    }
  },
  {
    id: "filtration-time",
    category: "filtration",
    title: {
      uk: "Час фільтрування",
      ru: "Время фильтрования",
      en: "Filtration Time",
      de: "Filtrationszeit"
    },
    latex: "\\frac{t}{V} = \\frac{\\mu \\alpha c}{2A^2\\Delta P}V + \\frac{\\mu R_m}{A\\Delta P}",
    variables: [
      {
        uk: "t - час фільтрування, с",
        ru: "t - время фильтрования, с",
        en: "t - filtration time, s",
        de: "t - Filtrationszeit, s"
      },
      {
        uk: "V - об'єм фільтрату, м³",
        ru: "V - объем фильтрата, м³",
        en: "V - filtrate volume, m³",
        de: "V - Filtratvolumen, m³"
      },
      {
        uk: "c - концентрація суспензії, кг/м³",
        ru: "c - концентрация суспензии, кг/м³",
        en: "c - suspension concentration, kg/m³",
        de: "c - Suspensionskonzentration, kg/m³"
      },
      {
        uk: "Rm - опір фільтрувальної перегородки, 1/м",
        ru: "Rm - сопротивление фильтровальной перегородки, 1/м",
        en: "Rm - filter medium resistance, 1/m",
        de: "Rm - Filtermediumwiderstand, 1/m"
      }
    ],
    source: {
      name: "Процеси і апарати",
      url: null
    }
  }
];
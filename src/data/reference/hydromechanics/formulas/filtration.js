// ============================================
// FILE: src/data/reference/hydromechanics/formulas/filtration.js
// ============================================

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
    latex: "R = r_0 \\cdot \\frac{m}{A}",
    variables: [
      {
        uk: "R - опір фільтрувального шару, м⁻¹",
        ru: "R - сопротивление фильтрующего слоя, м⁻¹",
        en: "R - filter cake resistance, m⁻¹",
        de: "R - Filterkuchenwiderstand, m⁻¹"
      },
      {
        uk: "r₀ - питомий опір осаду, м/кг",
        ru: "r₀ - удельное сопротивление осадка, м/кг",
        en: "r₀ - specific cake resistance, m/kg",
        de: "r₀ - spezifischer Kuchenwiderstand, m/kg"
      },
      {
        uk: "m - маса сухого осаду, кг",
        ru: "m - масса сухого осадка, кг",
        en: "m - mass of dry cake, kg",
        de: "m - Masse des trockenen Kuchens, kg"
      },
      {
        uk: "A - площа фільтрування, м²",
        ru: "A - площадь фильтрования, м²",
        en: "A - filtration area, m²",
        de: "A - Filtrationsfläche, m²"
      }
    ],
    source: {
      name: "Фільтрувальне обладнання",
      url: null
    }
  },
  {
    id: "filtration-time",
    category: "filtration",
    title: {
      uk: "Рівняння часу фільтрування",
      ru: "Уравнение времени фильтрования",
      en: "Filtration Time Equation",
      de: "Filtrationszeit-Gleichung"
    },
    latex: "\\tau = \\frac{\\mu \\cdot r_0 \\cdot V^2}{2 \\cdot A^2 \\cdot \\Delta P}",
    variables: [
      {
        uk: "τ - час фільтрування, с",
        ru: "τ - время фильтрования, с",
        en: "τ - filtration time, s",
        de: "τ - Filtrationszeit, s"
      },
      {
        uk: "μ - динамічна в'язкість фільтрату, Па·с",
        ru: "μ - динамическая вязкость фильтрата, Па·с",
        en: "μ - dynamic viscosity of filtrate, Pa·s",
        de: "μ - dynamische Viskosität des Filtrats, Pa·s"
      },
      {
        uk: "r₀ - питомий опір осаду, м/кг",
        ru: "r₀ - удельное сопротивление осадка, м/кг",
        en: "r₀ - specific cake resistance, m/kg",
        de: "r₀ - spezifischer Kuchenwiderstand, m/kg"
      },
      {
        uk: "V - об'єм фільтрату, м³",
        ru: "V - объем фильтрата, м³",
        en: "V - volume of filtrate, m³",
        de: "V - Volumen des Filtrats, m³"
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
      }
    ],
    example: {
      uk: "Для нестискуваних осадів час фільтрування пропорційний квадрату об'єму фільтрату",
      ru: "Для несжимаемых осадков время фильтрования пропорционально квадрату объема фильтрата",
      en: "For incompressible cakes, filtration time is proportional to the square of filtrate volume",
      de: "Für inkompressible Kuchen ist die Filtrationszeit proportional zum Quadrat des Filtratvolumens"
    },
    source: {
      name: "Perry's Chemical Engineers' Handbook",
      url: null
    }
  }
];
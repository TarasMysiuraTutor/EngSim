// ============================================
// FILE: src/data/reference/hydromechanics/formulas/mixing.js
// ============================================

export const mixingFormulas = [
  {
    id: "mixing-power",
    category: "mixing",
    title: {
      uk: "Потужність перемішування",
      ru: "Мощность перемешивания",
      en: "Mixing Power",
      de: "Rührleistung"
    },
    latex: "P = N_p \\cdot \\rho \\cdot n^3 \\cdot d^5",
    variables: [
      {
        uk: "P - потужність перемішування, Вт",
        ru: "P - мощность перемешивания, Вт",
        en: "P - mixing power, W",
        de: "P - Rührleistung, W"
      },
      {
        uk: "Nₚ - критерій потужності (безрозмірний)",
        ru: "Nₚ - критерий мощности (безразмерный)",
        en: "Nₚ - power number (dimensionless)",
        de: "Nₚ - Leistungszahl (dimensionslos)"
      },
      {
        uk: "ρ - щільність рідини, кг/м³",
        ru: "ρ - плотность жидкости, кг/м³",
        en: "ρ - fluid density, kg/m³",
        de: "ρ - Fluiddichte, kg/m³"
      },
      {
        uk: "n - частота обертання мішалки, об/с",
        ru: "n - частота вращения мешалки, об/с",
        en: "n - impeller rotation speed, rev/s",
        de: "n - Rührerdrehzahl, U/s"
      },
      {
        uk: "d - діаметр мішалки, м",
        ru: "d - диаметр мешалки, м",
        en: "d - impeller diameter, m",
        de: "d - Rührerdurchmesser, m"
      }
    ],
    example: {
      uk: "Для турбінної мішалки Nₚ ≈ 6 при Re > 10⁴\nДля лопатевої мішалки Nₚ ≈ 1.5-3",
      ru: "Для турбинной мешалки Nₚ ≈ 6 при Re > 10⁴\nДля лопастной мешалки Nₚ ≈ 1.5-3",
      en: "For turbine impeller Nₚ ≈ 6 at Re > 10⁴\nFor paddle impeller Nₚ ≈ 1.5-3",
      de: "Für Turbinenrührer Nₚ ≈ 6 bei Re > 10⁴\nFür Blattrührer Nₚ ≈ 1.5-3"
    },
    source: {
      name: "Процеси і апарати",
      url: null
    }
  },
  {
    id: "mixing-reynolds",
    category: "mixing",
    title: {
      uk: "Число Рейнольдса для перемішування",
      ru: "Число Рейнольдса для перемешивания",
      en: "Reynolds Number for Mixing",
      de: "Reynolds-Zahl für Rühren"
    },
    latex: "Re = \\frac{n \\cdot d^2 \\cdot \\rho}{\\mu}",
    variables: [
      {
        uk: "Re - число Рейнольдса (безрозмірне)",
        ru: "Re - число Рейнольдса (безразмерное)",
        en: "Re - Reynolds number (dimensionless)",
        de: "Re - Reynolds-Zahl (dimensionslos)"
      },
      {
        uk: "n - частота обертання, об/с",
        ru: "n - частота вращения, об/с",
        en: "n - rotation speed, rev/s",
        de: "n - Drehzahl, U/s"
      },
      {
        uk: "d - діаметр мішалки, м",
        ru: "d - диаметр мешалки, м",
        en: "d - impeller diameter, m",
        de: "d - Rührerdurchmesser, m"
      },
      {
        uk: "ρ - щільність рідини, кг/м³",
        ru: "ρ - плотность жидкости, кг/м³",
        en: "ρ - fluid density, kg/m³",
        de: "ρ - Fluiddichte, kg/m³"
      },
      {
        uk: "μ - динамічна в'язкість, Па·с",
        ru: "μ - динамическая вязкость, Па·с",
        en: "μ - dynamic viscosity, Pa·s",
        de: "μ - dynamische Viskosität, Pa·s"
      }
    ],
    source: {
      name: "Mixing in the Process Industries",
      url: null
    }
  }
];
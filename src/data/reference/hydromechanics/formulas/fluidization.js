// src/data/reference/hydromechanics/formulas/fluidization.js

export const fluidizationFormulas = [
  {
    id: "fluidization-velocity",
    category: "fluidization",
    title: {
      uk: "Мінімальна швидкість псевдозрідження",
      ru: "Минимальная скорость псевдоожижения",
      en: "Minimum Fluidization Velocity",
      de: "Minimale Wirbelschichtgeschwindigkeit"
    },
    latex: "u_{mf} = \\frac{d^2(\\rho_p - \\rho_f)g}{150\\mu}\\cdot \\frac{\\varepsilon^3}{1-\\varepsilon}",
    variables: [
      {
        uk: "umf - мінімальна швидкість псевдозрідження, м/с",
        ru: "umf - минимальная скорость псевдоожижения, м/с",
        en: "umf - minimum fluidization velocity, m/s",
        de: "umf - minimale Wirbelschichtgeschwindigkeit, m/s"
      },
      {
        uk: "d - діаметр частинки, м",
        ru: "d - диаметр частицы, м",
        en: "d - particle diameter, m",
        de: "d - Partikeldurchmesser, m"
      },
      {
        uk: "ρp - щільність частинки, кг/м³",
        ru: "ρp - плотность частицы, кг/м³",
        en: "ρp - particle density, kg/m³",
        de: "ρp - Partikeldichte, kg/m³"
      },
      {
        uk: "ρf - щільність рідини, кг/м³",
        ru: "ρf - плотность жидкости, кг/м³",
        en: "ρf - fluid density, kg/m³",
        de: "ρf - Fluiddichte, kg/m³"
      },
      {
        uk: "g - прискорення вільного падіння, м/с²",
        ru: "g - ускорение свободного падения, м/с²",
        en: "g - gravitational acceleration, m/s²",
        de: "g - Erdbeschleunigung, m/s²"
      },
      {
        uk: "μ - динамічна в'язкість, Па·с",
        ru: "μ - динамическая вязкость, Па·с",
        en: "μ - dynamic viscosity, Pa·s",
        de: "μ - dynamische Viskosität, Pa·s"
      },
      {
        uk: "ε - порозність шару",
        ru: "ε - пористость слоя",
        en: "ε - bed porosity",
        de: "ε - Bettporosität"
      }
    ],
    source: {
      name: "Fluidization Engineering",
      url: null
    }
  },
  {
    id: "fluidization-pressure-drop",
    category: "fluidization",
    title: {
      uk: "Перепад тиску в псевдозрідженому шарі",
      ru: "Перепад давления в псевдоожиженном слое",
      en: "Pressure Drop in Fluidized Bed",
      de: "Druckabfall im Wirbelbett"
    },
    latex: "\\Delta P = H(1-\\varepsilon)(\\rho_p - \\rho_f)g",
    variables: [
      {
        uk: "ΔP - перепад тиску, Па",
        ru: "ΔP - перепад давления, Па",
        en: "ΔP - pressure drop, Pa",
        de: "ΔP - Druckabfall, Pa"
      },
      {
        uk: "H - висота шару, м",
        ru: "H - высота слоя, м",
        en: "H - bed height, m",
        de: "H - Betthöhe, m"
      },
      {
        uk: "ε - порозність шару",
        ru: "ε - пористость слоя",
        en: "ε - bed porosity",
        de: "ε - Bettporosität"
      }
    ],
    source: {
      name: "Fluidization Engineering",
      url: null
    }
  }
];
// src/data/reference/thermal/formulas/convection.js
export const convectionFormulas = [
  {
    id: 'newton-cooling-law',
    category: 'convection',
    title: {
      uk: 'Закон Ньютона-Ріхмана',
      ru: 'Закон Ньютона-Рихмана',
      en: 'Newton\'s Law of Cooling',
      de: 'Newtonsches Abkühlungsgesetz'
    },
    formula: 'Q = α × A × (Tₛ - T∞)',
    variables: [
      { uk: 'Q - тепловий потік, Вт', ru: 'Q - тепловой поток, Вт', en: 'Q - heat transfer rate, W', de: 'Q - Wärmeübertragungsrate, W' },
      { uk: 'α - коефіцієнт тепловіддачі, Вт/(м²·К)', ru: 'α - коэффициент теплоотдачи, Вт/(м²·К)', en: 'α - convective heat transfer coefficient, W/(m²·K)', de: 'α - Wärmeübergangskoeffizient, W/(m²·K)' },
      { uk: 'A - площа поверхні, м²', ru: 'A - площадь поверхности, м²', en: 'A - surface area, m²', de: 'A - Oberfläche, m²' },
      { uk: 'Tₛ - температура поверхні, К', ru: 'Tₛ - температура поверхности, К', en: 'Tₛ - surface temperature, K', de: 'Tₛ - Oberflächentemperatur, K' },
      { uk: 'T∞ - температура рідини/газу, К', ru: 'T∞ - температура жидкости/газа, К', en: 'T∞ - fluid temperature, K', de: 'T∞ - Fluidtemperatur, K' }
    ],
    example: {
      uk: 'α = 25 Вт/(м²·К), A = 5 м², Tₛ = 80°C, T∞ = 20°C → Q = 7500 Вт',
      ru: 'α = 25 Вт/(м²·К), A = 5 м², Tₛ = 80°C, T∞ = 20°C → Q = 7500 Вт',
      en: 'α = 25 W/(m²·K), A = 5 m², Tₛ = 80°C, T∞ = 20°C → Q = 7500 W',
      de: 'α = 25 W/(m²·K), A = 5 m², Tₛ = 80°C, T∞ = 20°C → Q = 7500 W'
    },
    source: {
      name: 'ISO 80000-5:2019',
      url: 'https://www.iso.org/standard/64978.html'
    }
  },

  {
    id: 'nusselt-number',
    category: 'convection',
    title: {
      uk: 'Число Нуссельта',
      ru: 'Число Нуссельта',
      en: 'Nusselt Number',
      de: 'Nusselt-Zahl'
    },
    formula: 'Nu = (α × L) / λ',
    variables: [
      { uk: 'Nu - число Нуссельта (безрозмірне)', ru: 'Nu - число Нуссельта (безразмерное)', en: 'Nu - Nusselt number (dimensionless)', de: 'Nu - Nusselt-Zahl (dimensionslos)' },
      { uk: 'α - коефіцієнт тепловіддачі, Вт/(м²·К)', ru: 'α - коэффициент теплоотдачи, Вт/(м²·К)', en: 'α - heat transfer coefficient, W/(m²·K)', de: 'α - Wärmeübergangskoeffizient, W/(m²·K)' },
      { uk: 'L - характерний розмір, м', ru: 'L - характерный размер, м', en: 'L - characteristic length, m', de: 'L - charakteristische Länge, m' },
      { uk: 'λ - теплопровідність рідини, Вт/(м·К)', ru: 'λ - теплопроводность жидкости, Вт/(м·К)', en: 'λ - fluid thermal conductivity, W/(m·K)', de: 'λ - Wärmeleitfähigkeit des Fluids, W/(m·K)' }
    ],
    source: {
      name: 'VDI Heat Atlas 2010'
    }
  },

  {
    id: 'reynolds-number',
    category: 'convection',
    title: {
      uk: 'Число Рейнольдса',
      ru: 'Число Рейнольдса',
      en: 'Reynolds Number',
      de: 'Reynolds-Zahl'
    },
    formula: 'Re = (ρ × v × L) / μ = (v × L) / ν',
    variables: [
      { uk: 'Re - число Рейнольдса (безрозмірне)', ru: 'Re - число Рейнольдса (безразмерное)', en: 'Re - Reynolds number (dimensionless)', de: 'Re - Reynolds-Zahl (dimensionslos)' },
      { uk: 'ρ - густина рідини, кг/м³', ru: 'ρ - плотность жидкости, кг/м³', en: 'ρ - fluid density, kg/m³', de: 'ρ - Fluiddichte, kg/m³' },
      { uk: 'v - швидкість потоку, м/с', ru: 'v - скорость потока, м/с', en: 'v - flow velocity, m/s', de: 'v - Strömungsgeschwindigkeit, m/s' },
      { uk: 'μ - динамічна в\'язкість, Па·с', ru: 'μ - динамическая вязкость, Па·с', en: 'μ - dynamic viscosity, Pa·s', de: 'μ - dynamische Viskosität, Pa·s' },
      { uk: 'ν - кінематична в\'язкість, м²/с', ru: 'ν - кинематическая вязкость, м²/с', en: 'ν - kinematic viscosity, m²/s', de: 'ν - kinematische Viskosität, m²/s' }
    ],
    example: {
      uk: 'Re < 2300 - ламінарний потік, Re > 4000 - турбулентний',
      ru: 'Re < 2300 - ламинарный поток, Re > 4000 - турбулентный',
      en: 'Re < 2300 - laminar flow, Re > 4000 - turbulent',
      de: 'Re < 2300 - laminare Strömung, Re > 4000 - turbulent'
    },
    source: {
      name: 'ISO 5167-1:2022',
      url: 'https://www.iso.org/standard/76403.html'
    }
  },

  {
    id: 'prandtl-number',
    category: 'convection',
    title: {
      uk: 'Число Прандтля',
      ru: 'Число Прандтля',
      en: 'Prandtl Number',
      de: 'Prandtl-Zahl'
    },
    formula: 'Pr = (μ × cₚ) / λ = ν / a',
    variables: [
      { uk: 'Pr - число Прандтля (безрозмірне)', ru: 'Pr - число Прандтля (безразмерное)', en: 'Pr - Prandtl number (dimensionless)', de: 'Pr - Prandtl-Zahl (dimensionslos)' },
      { uk: 'cₚ - питома теплоємність, Дж/(кг·К)', ru: 'cₚ - удельная теплоемкость, Дж/(кг·К)', en: 'cₚ - specific heat capacity, J/(kg·K)', de: 'cₚ - spezifische Wärmekapazität, J/(kg·K)' },
      { uk: 'a - температуропровідність, м²/с', ru: 'a - температуропроводность, м²/с', en: 'a - thermal diffusivity, m²/s', de: 'a - Temperaturleitfähigkeit, m²/s' }
    ],
    source: {
      name: 'VDI Heat Atlas 2010'
    }
  },

  {
    id: 'grashof-number',
    category: 'convection',
    title: {
      uk: 'Число Грасгофа',
      ru: 'Число Грасгофа',
      en: 'Grashof Number',
      de: 'Grashof-Zahl'
    },
    formula: 'Gr = (g × β × ΔT × L³) / ν²',
    variables: [
      { uk: 'Gr - число Грасгофа (безрозмірне)', ru: 'Gr - число Грасгофа (безразмерное)', en: 'Gr - Grashof number (dimensionless)', de: 'Gr - Grashof-Zahl (dimensionslos)' },
      { uk: 'g - прискорення вільного падіння, 9.81 м/с²', ru: 'g - ускорение свободного падения, 9.81 м/с²', en: 'g - gravitational acceleration, 9.81 m/s²', de: 'g - Erdbeschleunigung, 9.81 m/s²' },
      { uk: 'β - коефіцієнт об\'ємного розширення, 1/К', ru: 'β - коэффициент объемного расширения, 1/К', en: 'β - volumetric thermal expansion coefficient, 1/K', de: 'β - Volumenausdehnungskoeffizient, 1/K' },
      { uk: 'ΔT - різниця температур, К', ru: 'ΔT - разность температур, К', en: 'ΔT - temperature difference, K', de: 'ΔT - Temperaturdifferenz, K' }
    ],
    source: {
      name: 'VDI Heat Atlas 2010'
    }
  },

  {
    id: 'dittus-boelter',
    category: 'convection',
    title: {
      uk: 'Формула Дітуса-Болтера (турбулентна течія)',
      ru: 'Формула Диттуса-Болтера (турбулентное течение)',
      en: 'Dittus-Boelter Equation (Turbulent Flow)',
      de: 'Dittus-Boelter-Gleichung (turbulente Strömung)'
    },
    formula: 'Nu = 0.023 × Re^0.8 × Pr^n',
    variables: [
      { uk: 'n = 0.4 (нагрівання), n = 0.3 (охолодження)', ru: 'n = 0.4 (нагрев), n = 0.3 (охлаждение)', en: 'n = 0.4 (heating), n = 0.3 (cooling)', de: 'n = 0.4 (Erwärmung), n = 0.3 (Abkühlung)' },
      { uk: 'Re > 10000 (турбулентний режим)', ru: 'Re > 10000 (турбулентный режим)', en: 'Re > 10000 (turbulent regime)', de: 'Re > 10000 (turbulentes Regime)' }
    ],
    source: {
      name: 'VDI Heat Atlas 2010'
    }
  }
];

export default convectionFormulas;
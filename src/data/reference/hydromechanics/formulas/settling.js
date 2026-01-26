export const settlingFormulas = [
  {
    id: "settling-stokes",
    category: "settling",
    title: {
      uk: "Закон Стокса для осадження частинок",
      ru: "Закон Стокса для осаждения частиц",
      en: "Stokes' Law for Particle Settling",
      de: "Stokes-Gesetz für Partikelsedimentation"
    },
    latex: "v = \\frac{d^2(\\rho_p - \\rho_f)g}{18\\mu}",
    variables: [
      {
        uk: "v - швидкість осадження частинки, м/с",
        ru: "v - скорость осаждения частицы, м/с",
        en: "v - particle settling velocity, m/s",
        de: "v - Partikelsinkgeschwindigkeit, m/s"
      },
      {
        uk: "d - діаметр частинки, м",
        ru: "d - диаметр частицы, м",
        en: "d - particle diameter, m",
        de: "d - Partikeldurchmesser, m"
      },
      {
        uk: "ρₚ - щільність частинки, кг/м³",
        ru: "ρₚ - плотность частицы, кг/м³",
        en: "ρₚ - particle density, kg/m³",
        de: "ρₚ - Partikeldichte, kg/m³"
      },
      {
        uk: "ρf - щільність рідини, кг/м³",
        ru: "ρf - плотность жидкости, кг/м³",
        en: "ρf - fluid density, kg/m³",
        de: "ρf - Fluiddichte, kg/m³"
      },
      {
        uk: "g - прискорення вільного падіння, 9.81 м/с²",
        ru: "g - ускорение свободного падения, 9.81 м/с²",
        en: "g - gravitational acceleration, 9.81 m/s²",
        de: "g - Erdbeschleunigung, 9.81 m/s²"
      },
      {
        uk: "μ - динамічна в'язкість рідини, Па·с",
        ru: "μ - динамическая вязкость жидкости, Па·с",
        en: "μ - dynamic viscosity of fluid, Pa·s",
        de: "μ - dynamische Viskosität, Pa·s"
      }
    ],
    example: {
      uk: "Приклад: Частинка піску діаметром 0.1 мм (ρₚ=2650 кг/м³) осаджується у воді (ρf=1000 кг/м³, μ=0.001 Па·с).\nv = (0.0001)²(2650-1000)×9.81 / (18×0.001) ≈ 0.009 м/с = 9 мм/с",
      ru: "Пример: Частица песка диаметром 0.1 мм (ρₚ=2650 кг/м³) осаждается в воде (ρf=1000 кг/м³, μ=0.001 Па·с).\nv = (0.0001)²(2650-1000)×9.81 / (18×0.001) ≈ 0.009 м/с = 9 мм/с",
      en: "Example: Sand particle with diameter 0.1 mm (ρₚ=2650 kg/m³) settling in water (ρf=1000 kg/m³, μ=0.001 Pa·s).\nv = (0.0001)²(2650-1000)×9.81 / (18×0.001) ≈ 0.009 m/s = 9 mm/s",
      de: "Beispiel: Sandpartikel mit Durchmesser 0.1 mm (ρₚ=2650 kg/m³) sedimentiert in Wasser (ρf=1000 kg/m³, μ=0.001 Pa·s).\nv = (0.0001)²(2650-1000)×9.81 / (18×0.001) ≈ 0.009 m/s = 9 mm/s"
    },
    source: {
      name: "Perry's Chemical Engineers' Handbook",
      url: null
    }
  },
  {
    id: "reynolds-settling",
    category: "settling",
    title: {
      uk: "Число Рейнольдса для осадження",
      ru: "Число Рейнольдса для осаждения",
      en: "Reynolds Number for Settling",
      de: "Reynolds-Zahl für Sedimentation"
    },
    latex: "Re = \\frac{\\rho_f \\cdot v \\cdot d}{\\mu}",
    variables: [
      {
        uk: "Re - число Рейнольдса (безрозмірне)",
        ru: "Re - число Рейнольдса (безразмерное)",
        en: "Re - Reynolds number (dimensionless)",
        de: "Re - Reynolds-Zahl (dimensionslos)"
      },
      {
        uk: "ρf - щільність рідини, кг/м³",
        ru: "ρf - плотность жидкости, кг/м³",
        en: "ρf - fluid density, kg/m³",
        de: "ρf - Fluiddichte, kg/m³"
      },
      {
        uk: "v - швидкість осадження, м/с",
        ru: "v - скорость осаждения, м/с",
        en: "v - settling velocity, m/s",
        de: "v - Sinkgeschwindigkeit, m/s"
      },
      {
        uk: "d - діаметр частинки, м",
        ru: "d - диаметр частицы, м",
        en: "d - particle diameter, m",
        de: "d - Partikeldurchmesser, m"
      },
      {
        uk: "μ - динамічна в'язкість, Па·с",
        ru: "μ - динамическая вязкость, Па·с",
        en: "μ - dynamic viscosity, Pa·s",
        de: "μ - dynamische Viskosität, Pa·s"
      }
    ],
    example: {
      uk: "Для Re < 1 - ламінарний режим (закон Стокса)\nДля 1 < Re < 1000 - перехідний режим\nДля Re > 1000 - турбулентний режим",
      ru: "Для Re < 1 - ламинарный режим (закон Стокса)\nДля 1 < Re < 1000 - переходный режим\nДля Re > 1000 - турбулентный режим",
      en: "For Re < 1 - laminar flow (Stokes' law)\nFor 1 < Re < 1000 - transition flow\nFor Re > 1000 - turbulent flow",
      de: "Für Re < 1 - laminare Strömung (Stokes-Gesetz)\nFür 1 < Re < 1000 - Übergangsströmung\nFür Re > 1000 - turbulente Strömung"
    },
    source: {
      name: "Гідромеханічні процеси",
      url: null
    }
  },
  {
    id: "settling-velocity-large",
    category: "settling",
    title: {
      uk: "Швидкість осадження великих частинок",
      ru: "Скорость осаждения крупных частиц",
      en: "Settling Velocity for Large Particles",
      de: "Sinkgeschwindigkeit für große Partikel"
    },
    latex: "v = \\sqrt{\\frac{4gd(\\rho_p - \\rho_f)}{3C_D\\rho_f}}",
    variables: [
      {
        uk: "v - швидкість осадження, м/с",
        ru: "v - скорость осаждения, м/с",
        en: "v - settling velocity, m/s",
        de: "v - Sinkgeschwindigkeit, m/s"
      },
      {
        uk: "g - прискорення вільного падіння, м/с²",
        ru: "g - ускорение свободного падения, м/с²",
        en: "g - gravitational acceleration, m/s²",
        de: "g - Erdbeschleunigung, m/s²"
      },
      {
        uk: "d - діаметр частинки, м",
        ru: "d - диаметр частицы, м",
        en: "d - particle diameter, m",
        de: "d - Partikeldurchmesser, m"
      },
      {
        uk: "CD - коефіцієнт опору",
        ru: "CD - коэффициент сопротивления",
        en: "CD - drag coefficient",
        de: "CD - Widerstandsbeiwert"
      }
    ],
    source: {
      name: "Unit Operations of Chemical Engineering",
      url: null
    }
  }
];
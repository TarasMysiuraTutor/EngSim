// src/data/reference/hydraulics/formulas/flow.js
export const flowFormulas = [
  {
    id: 'flow_velocity',
    category: 'flow',
    title: {
      uk: 'Швидкість потоку через витрату',
      ru: 'Скорость потока через расход',
      en: 'Flow Velocity from Flow Rate',
      de: 'Strömungsgeschwindigkeit aus Volumenstrom'
    },
    formula: 'v = Q/A = 4Q/(πd²)',
    latex: 'v = \\frac{Q}{A} = \\frac{4Q}{\\pi d^2}',
    variables: [
      { uk: 'v — швидкість, м/с', ru: 'v — скорость, м/с', en: 'v — velocity, m/s', de: 'v — Geschwindigkeit, m/s' },
      { uk: 'Q — витрата, м³/с', ru: 'Q — расход, м³/с', en: 'Q — flow rate, m³/s', de: 'Q — Volumenstrom, m³/s' },
      { uk: 'd — внутрішній діаметр, м', ru: 'd — внутренний диаметр, м', en: 'd — internal diameter, m', de: 'd — Innendurchmesser, m' }
    ],
    example: {
      uk: 'Приклад: Q=10 л/с, d=100мм → v = 4×0.01/(3.14×0.1²) = 1.27 м/с',
      ru: 'Пример: Q=10 л/с, d=100мм → v = 4×0.01/(3.14×0.1²) = 1.27 м/с',
      en: 'Example: Q=10 l/s, d=100mm → v = 4×0.01/(3.14×0.1²) = 1.27 m/s',
      de: 'Beispiel: Q=10 l/s, d=100mm → v = 4×0.01/(3.14×0.1²) = 1.27 m/s'
    }
  },
  {
    id: 'pipe_diameter',
    category: 'flow',
    title: {
      uk: 'Діаметр труби за витратою і швидкістю',
      ru: 'Диаметр трубы по расходу и скорости',
      en: 'Pipe Diameter from Flow Rate and Velocity',
      de: 'Rohrdurchmesser aus Volumenstrom und Geschwindigkeit'
    },
    formula: 'd = √(4Q/(πv))',
    latex: 'd = \\sqrt{\\frac{4Q}{\\pi v}}',
    variables: [
      { uk: 'd — внутрішній діаметр, м', ru: 'd — внутренний диаметр, м', en: 'd — internal diameter, m', de: 'd — Innendurchmesser, m' },
      { uk: 'Q — витрата, м³/с', ru: 'Q — расход, м³/с', en: 'Q — flow rate, m³/s', de: 'Q — Volumenstrom, m³/s' },
      { uk: 'v — рекомендована швидкість, м/с', ru: 'v — рекомендуемая скорость, м/с', en: 'v — recommended velocity, m/s', de: 'v — empfohlene Geschwindigkeit, m/s' }
    ],
    example: {
      uk: 'Рекомендовані швидкості:\n- Всмоктувальні трубопроводи: 0.8-2 м/с\n- Напірні трубопроводи: 1.5-3 м/с\n- Магістралі: 2-4 м/с',
      ru: 'Рекомендуемые скорости:\n- Всасывающие трубопроводы: 0.8-2 м/с\n- Напорные трубопроводы: 1.5-3 м/с\n- Магистрали: 2-4 м/с',
      en: 'Recommended velocities:\n- Suction lines: 0.8-2 m/s\n- Pressure lines: 1.5-3 m/s\n- Mains: 2-4 m/s',
      de: 'Empfohlene Geschwindigkeiten:\n- Saugleitungen: 0.8-2 m/s\n- Druckleitungen: 1.5-3 m/s\n- Hauptleitungen: 2-4 m/s'
    }
  },
  {
    id: 'hazen_williams',
    category: 'flow',
    title: {
      uk: 'Формула Хейзена-Вільямса',
      ru: 'Формула Хейзена-Вильямса',
      en: 'Hazen-Williams Formula',
      de: 'Hazen-Williams-Formel'
    },
    formula: 'v = 0.849C×R^0.63×S^0.54',
    latex: 'v = 0.849 C R^{0.63} S^{0.54}',
    variables: [
      { uk: 'v — швидкість, м/с', ru: 'v — скорость, м/с', en: 'v — velocity, m/s', de: 'v — Geschwindigkeit, m/s' },
      { uk: 'C — коефіцієнт шорсткості (100-150)', ru: 'C — коэффициент шероховатости (100-150)', en: 'C — roughness coefficient (100-150)', de: 'C — Rauigkeitskoeffizient (100-150)' },
      { uk: 'R — гідравлічний радіус, м', ru: 'R — гидравлический радиус, м', en: 'R — hydraulic radius, m', de: 'R — hydraulischer Radius, m' },
      { uk: 'S — гідравлічний ухил', ru: 'S — гидравлический уклон', en: 'S — hydraulic slope', de: 'S — hydraulisches Gefälle' }
    ]
  },
  {
    id: 'manning_formula',
    category: 'flow',
    title: {
      uk: 'Формула Маннінга',
      ru: 'Формула Маннинга',
      en: 'Manning Formula',
      de: 'Manning-Formel'
    },
    formula: 'v = (1/n)×R^(2/3)×S^(1/2)',
    latex: 'v = \\frac{1}{n} R^{2/3} S^{1/2}',
    variables: [
      { uk: 'n — коефіцієнт шорсткості Маннінга', ru: 'n — коэффициент шероховатости Маннинга', en: 'n — Manning roughness coefficient', de: 'n — Manning-Rauigkeitsbeiwert' },
      { uk: 'R — гідравлічний радіус, м', ru: 'R — гидравлический радиус, м', en: 'R — hydraulic radius, m', de: 'R — hydraulischer Radius, m' },
      { uk: 'S — гідравлічний ухил', ru: 'S — гидравлический уклон', en: 'S — hydraulic slope', de: 'S — hydraulisches Gefälle' }
    ]
  }
];
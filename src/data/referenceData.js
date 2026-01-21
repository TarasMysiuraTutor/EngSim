// src/data/referenceData.js

export const referenceData = {
  // ============ ФОРМУЛИ ============
  formulas: [
    // МАТЕМАТИКА
    {
      category: 'math',
      title: {
        uk: 'Теорема Піфагора',
        ru: 'Теорема Пифагора',
        en: 'Pythagorean Theorem',
        de: 'Satz des Pythagoras'
      },
      formula: 'c² = a² + b²',
      variables: [
        { uk: 'c - гіпотенуза', ru: 'c - гипотенуза', en: 'c - hypotenuse', de: 'c - Hypotenuse' },
        { uk: 'a, b - катети', ru: 'a, b - катеты', en: 'a, b - legs', de: 'a, b - Katheten' }
      ]
    },
    {
      category: 'math',
      title: {
        uk: 'Площа кола',
        ru: 'Площадь круга',
        en: 'Circle Area',
        de: 'Kreisfläche'
      },
      formula: 'A = π × r²',
      variables: [
        { uk: 'A - площа, м²', ru: 'A - площадь, м²', en: 'A - area, m²', de: 'A - Fläche, m²' },
        { uk: 'r - радіус, м', ru: 'r - радиус, м', en: 'r - radius, m', de: 'r - Radius, m' }
      ]
    },
    {
      category: 'math',
      title: {
        uk: 'Об\'єм циліндра',
        ru: 'Объем цилиндра',
        en: 'Cylinder Volume',
        de: 'Zylindervolumen'
      },
      formula: 'V = π × r² × h',
      variables: [
        { uk: 'V - об\'єм, м³', ru: 'V - объем, м³', en: 'V - volume, m³', de: 'V - Volumen, m³' },
        { uk: 'r - радіус основи, м', ru: 'r - радиус основания, м', en: 'r - base radius, m', de: 'r - Grundradius, m' },
        { uk: 'h - висота, м', ru: 'h - высота, м', en: 'h - height, m', de: 'h - Höhe, m' }
      ]
    },

    // ОПІР МАТЕРІАЛІВ
    {
      category: 'strength',
      title: {
        uk: 'Нормальне напруження',
        ru: 'Нормальное напряжение',
        en: 'Normal Stress',
        de: 'Normalspannung'
      },
      formula: 'σ = F / A',
      variables: [
        { uk: 'σ - напруження, Па', ru: 'σ - напряжение, Па', en: 'σ - stress, Pa', de: 'σ - Spannung, Pa' },
        { uk: 'F - сила, Н', ru: 'F - сила, Н', en: 'F - force, N', de: 'F - Kraft, N' },
        { uk: 'A - площа перерізу, м²', ru: 'A - площадь сечения, м²', en: 'A - cross-section area, m²', de: 'A - Querschnittsfläche, m²' }
      ]
    },
    {
      category: 'strength',
      title: {
        uk: 'Відносна деформація',
        ru: 'Относительная деформация',
        en: 'Strain',
        de: 'Dehnung'
      },
      formula: 'ε = Δl / l₀',
      variables: [
        { uk: 'ε - відносна деформація', ru: 'ε - относительная деформация', en: 'ε - strain', de: 'ε - Dehnung' },
        { uk: 'Δl - абсолютне подовження, м', ru: 'Δl - абсолютное удлинение, м', en: 'Δl - absolute elongation, m', de: 'Δl - absolute Verlängerung, m' },
        { uk: 'l₀ - початкова довжина, м', ru: 'l₀ - начальная длина, м', en: 'l₀ - initial length, m', de: 'l₀ - Anfangslänge, m' }
      ]
    },
    {
      category: 'strength',
      title: {
        uk: 'Закон Гука',
        ru: 'Закон Гука',
        en: 'Hooke\'s Law',
        de: 'Hookesches Gesetz'
      },
      formula: 'σ = E × ε',
      variables: [
        { uk: 'σ - напруження, Па', ru: 'σ - напряжение, Па', en: 'σ - stress, Pa', de: 'σ - Spannung, Pa' },
        { uk: 'E - модуль пружності, Па', ru: 'E - модуль упругости, Па', en: 'E - elastic modulus, Pa', de: 'E - Elastizitätsmodul, Pa' },
        { uk: 'ε - відносна деформація', ru: 'ε - относительная деформация', en: 'ε - strain', de: 'ε - Dehnung' }
      ]
    },
    {
      category: 'strength',
      title: {
        uk: 'Дотичне напруження',
        ru: 'Касательное напряжение',
        en: 'Shear Stress',
        de: 'Schubspannung'
      },
      formula: 'τ = T / (W<sub>p</sub>)',
      variables: [
        { uk: 'τ - дотичне напруження, Па', ru: 'τ - касательное напряжение, Па', en: 'τ - shear stress, Pa', de: 'τ - Schubspannung, Pa' },
        { uk: 'T - крутний момент, Н·м', ru: 'T - крутящий момент, Н·м', en: 'T - torque, N·m', de: 'T - Drehmoment, N·m' },
        { uk: 'W<sub>p</sub> - полярний момент опору, м³', ru: 'W<sub>p</sub> - полярный момент сопротивления, м³', en: 'W<sub>p</sub> - polar section modulus, m³', de: 'W<sub>p</sub> - polares Widerstandsmoment, m³' }
      ]
    },

    // ГІДРАВЛІКА
    {
      category: 'hydraulic',
      title: {
        uk: 'Рівняння Бернуллі',
        ru: 'Уравнение Бернулли',
        en: 'Bernoulli Equation',
        de: 'Bernoulli-Gleichung'
      },
      formula: 'p + ρ×g×h + (ρ×v²)/2 = const',
      variables: [
        { uk: 'p - тиск, Па', ru: 'p - давление, Па', en: 'p - pressure, Pa', de: 'p - Druck, Pa' },
        { uk: 'ρ - щільність рідини, кг/м³', ru: 'ρ - плотность жидкости, кг/м³', en: 'ρ - fluid density, kg/m³', de: 'ρ - Fluiddichte, kg/m³' },
        { uk: 'g - прискорення вільного падіння, м/с²', ru: 'g - ускорение свободного падения, м/с²', en: 'g - gravitational acceleration, m/s²', de: 'g - Erdbeschleunigung, m/s²' },
        { uk: 'h - висота, м', ru: 'h - высота, м', en: 'h - height, m', de: 'h - Höhe, m' },
        { uk: 'v - швидкість потоку, м/с', ru: 'v - скорость потока, м/с', en: 'v - flow velocity, m/s', de: 'v - Strömungsgeschwindigkeit, m/s' }
      ]
    },
    {
      category: 'hydraulic',
      title: {
        uk: 'Число Рейнольдса',
        ru: 'Число Рейнольдса',
        en: 'Reynolds Number',
        de: 'Reynolds-Zahl'
      },
      formula: 'Re = (ρ × v × d) / μ',
      variables: [
        { uk: 'Re - число Рейнольдса', ru: 'Re - число Рейнольдса', en: 'Re - Reynolds number', de: 'Re - Reynolds-Zahl' },
        { uk: 'ρ - щільність, кг/м³', ru: 'ρ - плотность, кг/м³', en: 'ρ - density, kg/m³', de: 'ρ - Dichte, kg/m³' },
        { uk: 'v - швидкість, м/с', ru: 'v - скорость, м/с', en: 'v - velocity, m/s', de: 'v - Geschwindigkeit, m/s' },
        { uk: 'd - характерний розмір, м', ru: 'd - характерный размер, м', en: 'd - characteristic length, m', de: 'd - charakteristische Länge, m' },
        { uk: 'μ - динамічна в\'язкість, Па·с', ru: 'μ - динамическая вязкость, Па·с', en: 'μ - dynamic viscosity, Pa·s', de: 'μ - dynamische Viskosität, Pa·s' }
      ]
    },
    {
      category: 'hydraulic',
      title: {
        uk: 'Рівняння нерозривності',
        ru: 'Уравнение неразрывности',
        en: 'Continuity Equation',
        de: 'Kontinuitätsgleichung'
      },
      formula: 'A₁ × v₁ = A₂ × v₂',
      variables: [
        { uk: 'A₁, A₂ - площі перерізів, м²', ru: 'A₁, A₂ - площади сечений, м²', en: 'A₁, A₂ - cross-sectional areas, m²', de: 'A₁, A₂ - Querschnittsflächen, m²' },
        { uk: 'v₁, v₂ - швидкості потоку, м/с', ru: 'v₁, v₂ - скорости потока, м/с', en: 'v₁, v₂ - flow velocities, m/s', de: 'v₁, v₂ - Strömungsgeschwindigkeiten, m/s' }
      ]
    },

    // ТЕПЛООБМІН
    {
      category: 'thermal',
      title: {
        uk: 'Закон Фур\'є (теплопровідність)',
        ru: 'Закон Фурье (теплопроводность)',
        en: 'Fourier\'s Law (Heat Conduction)',
        de: 'Fouriersches Gesetz (Wärmeleitung)'
      },
      formula: 'Q = -λ × A × (dT/dx)',
      variables: [
        { uk: 'Q - тепловий потік, Вт', ru: 'Q - тепловой поток, Вт', en: 'Q - heat flux, W', de: 'Q - Wärmestrom, W' },
        { uk: 'λ - коефіцієнт теплопровідності, Вт/(м·К)', ru: 'λ - коэффициент теплопроводности, Вт/(м·К)', en: 'λ - thermal conductivity, W/(m·K)', de: 'λ - Wärmeleitfähigkeit, W/(m·K)' },
        { uk: 'A - площа, м²', ru: 'A - площадь, м²', en: 'A - area, m²', de: 'A - Fläche, m²' },
        { uk: 'dT/dx - градієнт температури, К/м', ru: 'dT/dx - градиент температуры, К/м', en: 'dT/dx - temperature gradient, K/m', de: 'dT/dx - Temperaturgradient, K/m' }
      ]
    },
    {
      category: 'thermal',
      title: {
        uk: 'Закон Ньютона-Ріхмана (конвекція)',
        ru: 'Закон Ньютона-Рихмана (конвекция)',
        en: 'Newton\'s Law of Cooling (Convection)',
        de: 'Newtonsches Abkühlungsgesetz (Konvektion)'
      },
      formula: 'Q = α × A × ΔT',
      variables: [
        { uk: 'Q - тепловий потік, Вт', ru: 'Q - тепловой поток, Вт', en: 'Q - heat flux, W', de: 'Q - Wärmestrom, W' },
        { uk: 'α - коефіцієнт тепловіддачі, Вт/(м²·К)', ru: 'α - коэффициент теплоотдачи, Вт/(м²·К)', en: 'α - heat transfer coefficient, W/(m²·K)', de: 'α - Wärmeübergangskoeffizient, W/(m²·K)' },
        { uk: 'A - площа, м²', ru: 'A - площадь, м²', en: 'A - area, m²', de: 'A - Fläche, m²' },
        { uk: 'ΔT - різниця температур, К', ru: 'ΔT - разность температур, К', en: 'ΔT - temperature difference, K', de: 'ΔT - Temperaturdifferenz, K' }
      ]
    },
    {
      category: 'thermal',
      title: {
        uk: 'Число Нуссельта',
        ru: 'Число Нуссельта',
        en: 'Nusselt Number',
        de: 'Nusselt-Zahl'
      },
      formula: 'Nu = (α × L) / λ',
      variables: [
        { uk: 'Nu - число Нуссельта', ru: 'Nu - число Нуссельта', en: 'Nu - Nusselt number', de: 'Nu - Nusselt-Zahl' },
        { uk: 'α - коефіцієнт тепловіддачі, Вт/(м²·К)', ru: 'α - коэффициент теплоотдачи, Вт/(м²·К)', en: 'α - heat transfer coefficient, W/(m²·K)', de: 'α - Wärmeübergangskoeffizient, W/(m²·K)' },
        { uk: 'L - характерний розмір, м', ru: 'L - характерный размер, м', en: 'L - characteristic length, m', de: 'L - charakteristische Länge, m' },
        { uk: 'λ - теплопровідність, Вт/(м·К)', ru: 'λ - теплопроводность, Вт/(м·К)', en: 'λ - thermal conductivity, W/(m·K)', de: 'λ - Wärmeleitfähigkeit, W/(m·K)' }
      ]
    },
    {
      category: 'thermal',
      title: {
        uk: 'Число Прандтля',
        ru: 'Число Прандтля',
        en: 'Prandtl Number',
        de: 'Prandtl-Zahl'
      },
      formula: 'Pr = (μ × c<sub>p</sub>) / λ',
      variables: [
        { uk: 'Pr - число Прандтля', ru: 'Pr - число Прандтля', en: 'Pr - Prandtl number', de: 'Pr - Prandtl-Zahl' },
        { uk: 'μ - динамічна в\'язкість, Па·с', ru: 'μ - динамическая вязкость, Па·с', en: 'μ - dynamic viscosity, Pa·s', de: 'μ - dynamische Viskosität, Pa·s' },
        { uk: 'c<sub>p</sub> - питома теплоємність, Дж/(кг·К)', ru: 'c<sub>p</sub> - удельная теплоемкость, Дж/(кг·К)', en: 'c<sub>p</sub> - specific heat, J/(kg·K)', de: 'c<sub>p</sub> - spezifische Wärme, J/(kg·K)' },
        { uk: 'λ - теплопровідність, Вт/(м·К)', ru: 'λ - теплопроводность, Вт/(м·К)', en: 'λ - thermal conductivity, W/(m·K)', de: 'λ - Wärmeleitfähigkeit, W/(m·K)' }
      ]
    },

    // МАСООБМІН
    {
      category: 'mass',
      title: {
        uk: 'Перший закон Фіка',
        ru: 'Первый закон Фика',
        en: 'Fick\'s First Law',
        de: 'Ficksches Gesetz (erstes)'
      },
      formula: 'J = -D × (dC/dx)',
      variables: [
        { uk: 'J - дифузійний потік, моль/(м²·с)', ru: 'J - диффузионный поток, моль/(м²·с)', en: 'J - diffusion flux, mol/(m²·s)', de: 'J - Diffusionsstrom, mol/(m²·s)' },
        { uk: 'D - коефіцієнт дифузії, м²/с', ru: 'D - коэффициент диффузии, м²/с', en: 'D - diffusion coefficient, m²/s', de: 'D - Diffusionskoeffizient, m²/s' },
        { uk: 'dC/dx - градієнт концентрації, моль/м⁴', ru: 'dC/dx - градиент концентрации, моль/м⁴', en: 'dC/dx - concentration gradient, mol/m⁴', de: 'dC/dx - Konzentrationsgradient, mol/m⁴' }
      ]
    },
    {
      category: 'mass',
      title: {
        uk: 'Число Шервуда',
        ru: 'Число Шервуда',
        en: 'Sherwood Number',
        de: 'Sherwood-Zahl'
      },
      formula: 'Sh = (β × L) / D',
      variables: [
        { uk: 'Sh - число Шервуда', ru: 'Sh - число Шервуда', en: 'Sh - Sherwood number', de: 'Sh - Sherwood-Zahl' },
        { uk: 'β - коефіцієнт масовіддачі, м/с', ru: 'β - коэффициент массоотдачи, м/с', en: 'β - mass transfer coefficient, m/s', de: 'β - Stoffübergangskoeffizient, m/s' },
        { uk: 'L - характерний розмір, м', ru: 'L - характерный размер, м', en: 'L - characteristic length, m', de: 'L - charakteristische Länge, m' },
        { uk: 'D - коефіцієнт дифузії, м²/с', ru: 'D - коэффициент диффузии, м²/с', en: 'D - diffusion coefficient, m²/s', de: 'D - Diffusionskoeffizient, m²/s' }
      ]
    },
    {
      category: 'mass',
      title: {
        uk: 'Число Шмідта',
        ru: 'Число Шмидта',
        en: 'Schmidt Number',
        de: 'Schmidt-Zahl'
      },
      formula: 'Sc = ν / D',
      variables: [
        { uk: 'Sc - число Шмідта', ru: 'Sc - число Шмидта', en: 'Sc - Schmidt number', de: 'Sc - Schmidt-Zahl' },
        { uk: 'ν - кінематична в\'язкість, м²/с', ru: 'ν - кинематическая вязкость, м²/с', en: 'ν - kinematic viscosity, m²/s', de: 'ν - kinematische Viskosität, m²/s' },
        { uk: 'D - коефіцієнт дифузії, м²/с', ru: 'D - коэффициент диффузии, м²/с', en: 'D - diffusion coefficient, m²/s', de: 'D - Diffusionskoeffizient, m²/s' }
      ]
    }
  ],

  // ============ ТАБЛИЦІ ============
  tables: [
    // Фізичні константи
    {
      category: 'math',
      title: {
        uk: 'Фізичні константи',
        ru: 'Физические константы',
        en: 'Physical Constants',
        de: 'Physikalische Konstanten'
      },
      headers: {
        uk: ['Назва', 'Символ', 'Значення', 'Одиниці'],
        ru: ['Название', 'Символ', 'Значение', 'Единицы'],
        en: ['Name', 'Symbol', 'Value', 'Units'],
        de: ['Name', 'Symbol', 'Wert', 'Einheiten']
      },
      rows: [
        [
          { uk: 'Число π', ru: 'Число π', en: 'Pi', de: 'Pi' },
          'π',
          '3.14159',
          '-'
        ],
        [
          { uk: 'Прискорення вільного падіння', ru: 'Ускорение свободного падения', en: 'Gravitational acceleration', de: 'Erdbeschleunigung' },
          'g',
          '9.81',
          { uk: 'м/с²', ru: 'м/с²', en: 'm/s²', de: 'm/s²' }
        ],
        [
          { uk: 'Універсальна газова стала', ru: 'Универсальная газовая постоянная', en: 'Universal gas constant', de: 'Universelle Gaskonstante' },
          'R',
          '8.314',
          { uk: 'Дж/(моль·К)', ru: 'Дж/(моль·К)', en: 'J/(mol·K)', de: 'J/(mol·K)' }
        ]
      ]
    },

    // Властивості матеріалів
    {
      category: 'strength',
      title: {
        uk: 'Механічні властивості матеріалів',
        ru: 'Механические свойства материалов',
        en: 'Mechanical Properties of Materials',
        de: 'Mechanische Eigenschaften von Materialien'
      },
      headers: {
        uk: ['Матеріал', 'Модуль пружності E, ГПа', 'Межа міцності σ<sub>в</sub>, МПа', 'Щільність ρ, кг/м³'],
        ru: ['Материал', 'Модуль упругости E, ГПа', 'Предел прочности σ<sub>в</sub>, МПа', 'Плотность ρ, кг/м³'],
        en: ['Material', 'Elastic Modulus E, GPa', 'Tensile Strength σ<sub>в</sub>, MPa', 'Density ρ, kg/m³'],
        de: ['Material', 'Elastizitätsmodul E, GPa', 'Zugfestigkeit σ<sub>в</sub>, MPa', 'Dichte ρ, kg/m³']
      },
      rows: [
        [
          { uk: 'Сталь', ru: 'Сталь', en: 'Steel', de: 'Stahl' },
          '200',
          '400-600',
          '7850'
        ],
        [
          { uk: 'Алюміній', ru: 'Алюминий', en: 'Aluminum', de: 'Aluminium' },
          '70',
          '90-300',
          '2700'
        ],
        [
          { uk: 'Мідь', ru: 'Медь', en: 'Copper', de: 'Kupfer' },
          '120',
          '200-400',
          '8900'
        ],
        [
          { uk: 'Бетон', ru: 'Бетон', en: 'Concrete', de: 'Beton' },
          '30',
          '20-40',
          '2400'
        ]
      ]
    },

    // Властивості рідин
    {
      category: 'hydraulic',
      title: {
        uk: 'Властивості рідин при 20°C',
        ru: 'Свойства жидкостей при 20°C',
        en: 'Fluid Properties at 20°C',
        de: 'Fluideigenschaften bei 20°C'
      },
      description: {
        uk: 'Теплофізичні властивості рідин за нормальних умов',
        ru: 'Теплофизические свойства жидкостей при нормальных условиях',
        en: 'Thermophysical properties of fluids at standard conditions',
        de: 'Thermophysikalische Eigenschaften von Fluiden unter Normalbedingungen'
      },
      headers: {
        uk: ['Рідина', 'Щільність ρ, кг/м³', 'В\'язкість μ, Па·с', 'Теплопровідність λ, Вт/(м·К)'],
        ru: ['Жидкость', 'Плотность ρ, кг/м³', 'Вязкость μ, Па·с', 'Теплопроводность λ, Вт/(м·К)'],
        en: ['Fluid', 'Density ρ, kg/m³', 'Viscosity μ, Pa·s', 'Thermal Conductivity λ, W/(m·K)'],
        de: ['Flüssigkeit', 'Dichte ρ, kg/m³', 'Viskosität μ, Pa·s', 'Wärmeleitfähigkeit λ, W/(m·K)']
      },
      rows: [
        [
          { uk: 'Вода', ru: 'Вода', en: 'Water', de: 'Wasser' },
          '998',
          '0.001',
          '0.60'
        ],
        [
          { uk: 'Масло машинне', ru: 'Масло машинное', en: 'Machine oil', de: 'Maschinenöl' },
          '900',
          '0.10',
          '0.14'
        ],
        [
          { uk: 'Гліцерин', ru: 'Глицерин', en: 'Glycerin', de: 'Glycerin' },
          '1260',
          '1.50',
          '0.28'
        ]
      ]
    },

    // Теплопровідність матеріалів
    {
      category: 'thermal',
      title: {
        uk: 'Коефіцієнти теплопровідності',
        ru: 'Коэффициенты теплопроводности',
        en: 'Thermal Conductivity Coefficients',
        de: 'Wärmeleitfähigkeitskoeffizienten'
      },
      headers: {
        uk: ['Матеріал', 'λ, Вт/(м·К)', 'Діапазон температур, °C'],
        ru: ['Материал', 'λ, Вт/(м·К)', 'Диапазон температур, °C'],
        en: ['Material', 'λ, W/(m·K)', 'Temperature Range, °C'],
        de: ['Material', 'λ, W/(m·K)', 'Temperaturbereich, °C']
      },
      rows: [
        [
          { uk: 'Мідь', ru: 'Медь', en: 'Copper', de: 'Kupfer' },
          '390',
          '0-100'
        ],
        [
          { uk: 'Алюміній', ru: 'Алюминий', en: 'Aluminum', de: 'Aluminium' },
          '237',
          '0-100'
        ],
        [
          { uk: 'Сталь', ru: 'Сталь', en: 'Steel', de: 'Stahl' },
          '50',
          '0-100'
        ],
        [
          { uk: 'Цегла', ru: 'Кирпич', en: 'Brick', de: 'Ziegel' },
          '0.7',
          '0-100'
        ],
        [
          { uk: 'Мінеральна вата', ru: 'Минеральная вата', en: 'Mineral wool', de: 'Mineralwolle' },
          '0.04',
          '0-100'
        ]
      ],
      note: {
        uk: 'Значення наведені для нормальних умов. При інших температурах необхідно вводити поправки.',
        ru: 'Значения приведены для нормальных условий. При других температурах необходимо вводить поправки.',
        en: 'Values are given for standard conditions. Temperature corrections needed for other conditions.',
        de: 'Werte sind für Standardbedingungen angegeben. Temperaturkorrekturen bei anderen Bedingungen erforderlich.'
      }
    },

    // Коефіцієнти тепловіддачі
    {
      category: 'thermal',
      title: {
        uk: 'Коефіцієнти тепловіддачі',
        ru: 'Коэффициенты теплоотдачи',
        en: 'Heat Transfer Coefficients',
        de: 'Wärmeübergangskoeffizienten'
      },
      headers: {
        uk: ['Умови теплообміну', 'α, Вт/(м²·К)'],
        ru: ['Условия теплообмена', 'α, Вт/(м²·К)'],
        en: ['Heat Transfer Conditions', 'α, W/(m²·K)'],
        de: ['Wärmeübertragungsbedingungen', 'α, W/(m²·K)']
      },
      rows: [
        [
          { uk: 'Природна конвекція повітря', ru: 'Естественная конвекция воздуха', en: 'Natural convection air', de: 'Natürliche Konvektion Luft' },
          '5-25'
        ],
        [
          { uk: 'Примусова конвекція повітря', ru: 'Принудительная конвекция воздуха', en: 'Forced convection air', de: 'Erzwungene Konvektion Luft' },
          '10-100'
        ],
        [
          { uk: 'Природна конвекція води', ru: 'Естественная конвекция воды', en: 'Natural convection water', de: 'Natürliche Konvektion Wasser' },
          '100-600'
        ],
        [
          { uk: 'Примусова конвекція води', ru: 'Принудительная конвекция воды', en: 'Forced convection water', de: 'Erzwungene Konvektion Wasser' },
          '500-10000'
        ],
        [
          { uk: 'Конденсація водяної пари', ru: 'Конденсация водяного пара', en: 'Water vapor condensation', de: 'Wasserdampfkondensation' },
          '5000-15000'
        ],
        [
          { uk: 'Кипіння води', ru: 'Кипение воды', en: 'Water boiling', de: 'Wasserkochen' },
          '3000-50000'
        ]
      ]
    },

    // Коефіцієнти дифузії
    {
      category: 'mass',
      title: {
        uk: 'Коефіцієнти дифузії в газах (при 20°C, 1 атм)',
        ru: 'Коэффициенты диффузии в газах (при 20°C, 1 атм)',
        en: 'Diffusion Coefficients in Gases (at 20°C, 1 atm)',
        de: 'Diffusionskoeffizienten in Gasen (bei 20°C, 1 atm)'
      },
      headers: {
        uk: ['Система', 'D×10⁵, м²/с'],
        ru: ['Система', 'D×10⁵, м²/с'],
        en: ['System', 'D×10⁵, m²/s'],
        de: ['System', 'D×10⁵, m²/s']
      },
      rows: [
        [
          { uk: 'O₂ в повітрі', ru: 'O₂ в воздухе', en: 'O₂ in air', de: 'O₂ in Luft' },
          '2.0'
        ],
        [
          { uk: 'CO₂ в повітрі', ru: 'CO₂ в воздухе', en: 'CO₂ in air', de: 'CO₂ in Luft' },
          '1.6'
        ],
        [
          { uk: 'H₂O в повітрі', ru: 'H₂O в воздухе', en: 'H₂O in air', de: 'H₂O in Luft' },
          '2.4'
        ],
        [
          { uk: 'NH₃ в повітрі', ru: 'NH₃ в воздухе', en: 'NH₃ in air', de: 'NH₃ in Luft' },
          '2.3'
        ]
      ]
    },

    // Критичні параметри речовин
    {
      category: 'thermal',
      title: {
        uk: 'Критичні параметри речовин',
        ru: 'Критические параметры веществ',
        en: 'Critical Parameters of Substances',
        de: 'Kritische Parameter von Stoffen'
      },
      description: {
        uk: 'Критичні температура, тиск та питомий об\'єм різних речовин',
        ru: 'Критические температура, давление и удельный объем различных веществ',
        en: 'Critical temperature, pressure and specific volume of various substances',
        de: 'Kritische Temperatur, Druck und spezifisches Volumen verschiedener Stoffe'
      },
      headers: {
        uk: ['Речовина', 'T<sub>кр</sub>, K', 'P<sub>кр</sub>, МПа', 'v<sub>кр</sub>, м³/кг'],
        ru: ['Вещество', 'T<sub>кр</sub>, K', 'P<sub>кр</sub>, МПа', 'v<sub>кр</sub>, м³/кг'],
        en: ['Substance', 'T<sub>cr</sub>, K', 'P<sub>cr</sub>, MPa', 'v<sub>cr</sub>, m³/kg'],
        de: ['Substanz', 'T<sub>kr</sub>, K', 'P<sub>kr</sub>, MPa', 'v<sub>kr</sub>, m³/kg']
      },
      rows: [
        [
          { uk: 'Вода', ru: 'Вода', en: 'Water', de: 'Wasser' },
          '647.3',
          '22.1',
          '0.00317'
        ],
        [
          { uk: 'Кисень', ru: 'Кислород', en: 'Oxygen', de: 'Sauerstoff' },
          '154.8',
          '5.08',
          '0.00244'
        ],
        [
          { uk: 'Азот', ru: 'Азот', en: 'Nitrogen', de: 'Stickstoff' },
          '126.2',
          '3.39',
          '0.00322'
        ],
        [
          { uk: 'Вуглекислий газ', ru: 'Углекислый газ', en: 'Carbon dioxide', de: 'Kohlendioxid' },
          '304.2',
          '7.39',
          '0.00216'
        ]
      ]
    },

    // Питомі теплоємності
    {
      category: 'thermal',
      title: {
        uk: 'Питомі теплоємності при постійному тиску',
        ru: 'Удельные теплоемкости при постоянном давлении',
        en: 'Specific Heat Capacities at Constant Pressure',
        de: 'Spezifische Wärmekapazitäten bei konstantem Druck'
      },
      headers: {
        uk: ['Речовина', 'c<sub>p</sub>, кДж/(кг·К)', 'Температура, °C'],
        ru: ['Вещество', 'c<sub>p</sub>, кДж/(кг·К)', 'Температура, °C'],
        en: ['Substance', 'c<sub>p</sub>, kJ/(kg·K)', 'Temperature, °C'],
        de: ['Substanz', 'c<sub>p</sub>, kJ/(kg·K)', 'Temperatur, °C']
      },
      rows: [
        [
          { uk: 'Вода', ru: 'Вода', en: 'Water', de: 'Wasser' },
          '4.18',
          '20'
        ],
        [
          { uk: 'Повітря', ru: 'Воздух', en: 'Air', de: 'Luft' },
          '1.01',
          '20'
        ],
        [
          { uk: 'Сталь', ru: 'Сталь', en: 'Steel', de: 'Stahl' },
          '0.46',
          '20'
        ],
        [
          { uk: 'Алюміній', ru: 'Алюминий', en: 'Aluminum', de: 'Aluminium' },
          '0.90',
          '20'
        ],
        [
          { uk: 'Масло машинне', ru: 'Масло машинное', en: 'Machine oil', de: 'Maschinenöl' },
          '1.67',
          '20'
        ]
      ]
    },

    // Коефіцієнти тертя
    {
      category: 'hydraulic',
      title: {
        uk: 'Коефіцієнти гідравлічного опору',
        ru: 'Коэффициенты гидравлического сопротивления',
        en: 'Hydraulic Resistance Coefficients',
        de: 'Hydraulische Widerstandskoeffizienten'
      },
      description: {
        uk: 'Коефіцієнти місцевих опорів для різних елементів трубопроводів',
        ru: 'Коэффициенты местных сопротивлений для различных элементов трубопроводов',
        en: 'Local resistance coefficients for various pipeline elements',
        de: 'Lokale Widerstandskoeffizienten für verschiedene Rohrleitungselemente'
      },
      headers: {
        uk: ['Елемент', 'Коефіцієнт ζ'],
        ru: ['Элемент', 'Коэффициент ζ'],
        en: ['Element', 'Coefficient ζ'],
        de: ['Element', 'Koeffizient ζ']
      },
      rows: [
        [
          { uk: 'Раптове розширення', ru: 'Внезапное расширение', en: 'Sudden expansion', de: 'Plötzliche Erweiterung' },
          '0.5-1.0'
        ],
        [
          { uk: 'Раптове звуження', ru: 'Внезапное сужение', en: 'Sudden contraction', de: 'Plötzliche Verengung' },
          '0.3-0.5'
        ],
        [
          { uk: 'Поворот 90°', ru: 'Поворот 90°', en: '90° bend', de: '90°-Biegung' },
          '0.9-1.1'
        ],
        [
          { uk: 'Засувка повністю відкрита', ru: 'Задвижка полностью открыта', en: 'Gate valve fully open', de: 'Absperrschieber voll geöffnet' },
          '0.1-0.2'
        ],
        [
          { uk: 'Кульовий кран', ru: 'Шаровой кран', en: 'Ball valve', de: 'Kugelhahn' },
          '0.05-0.1'
        ],
        [
          { uk: 'Вхід в трубу', ru: 'Вход в трубу', en: 'Pipe entrance', de: 'Rohreingang' },
          '0.5'
        ],
        [
          { uk: 'Вихід з труби', ru: 'Выход из трубы', en: 'Pipe exit', de: 'Rohrausgang' },
          '1.0'
        ]
      ]
    },

    // Стандартні розміри труб
    {
      category: 'hydraulic',
      title: {
        uk: 'Стандартні діаметри сталевих труб',
        ru: 'Стандартные диаметры стальных труб',
        en: 'Standard Steel Pipe Diameters',
        de: 'Standard-Stahlrohrdurchmesser'
      },
      headers: {
        uk: ['Умовний прохід DN, мм', 'Зовнішній діаметр, мм', 'Товщина стінки, мм', 'Внутрішній діаметр, мм'],
        ru: ['Условный проход DN, мм', 'Наружный диаметр, мм', 'Толщина стенки, мм', 'Внутренний диаметр, мм'],
        en: ['Nominal diameter DN, mm', 'Outside diameter, mm', 'Wall thickness, mm', 'Inside diameter, mm'],
        de: ['Nennweite DN, mm', 'Außendurchmesser, mm', 'Wanddicke, mm', 'Innendurchmesser, mm']
      },
      rows: [
        ['15', '21.3', '2.8', '15.7'],
        ['20', '26.9', '2.8', '21.3'],
        ['25', '33.7', '3.2', '27.3'],
        ['32', '42.4', '3.2', '36.0'],
        ['40', '48.3', '3.2', '41.9'],
        ['50', '60.3', '3.6', '53.1'],
        ['80', '88.9', '4.0', '80.9'],
        ['100', '114.3', '4.5', '105.3']
      ]
    }
  ]
};

export default referenceData;
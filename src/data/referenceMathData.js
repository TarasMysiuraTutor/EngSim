// src/data/referenceMathData.js - МАТЕМАТИКА
export const mathReferenceData = {
  
  // ФОРМУЛИ
  formulas: [
    // ГЕОМЕТРІЯ
    {
      category: 'geometry',
      title: {
        uk: 'Площа кола',
        ru: 'Площадь круга',
        en: 'Circle Area',
        de: 'Kreisfläche'
      },
      formula: 'A = π × r²',
      variables: [
        { uk: 'A - площа, м²', ru: 'A - площадь, м²', en: 'A - area, m²', de: 'A - Fläche, m²' },
        { uk: 'r - радіус, м', ru: 'r - радиус, м', en: 'r - radius, m', de: 'r - Radius, m' },
        { uk: 'π ≈ 3.14159', ru: 'π ≈ 3.14159', en: 'π ≈ 3.14159', de: 'π ≈ 3.14159' }
      ],
      example: {
        uk: 'Приклад: r = 5 м → A = 3.14159 × 5² = 78.54 м²',
        ru: 'Пример: r = 5 м → A = 3.14159 × 5² = 78.54 м²',
        en: 'Example: r = 5 m → A = 3.14159 × 5² = 78.54 m²',
        de: 'Beispiel: r = 5 m → A = 3.14159 × 5² = 78.54 m²'
      },
      source: {
        name: 'ISO 80000-3:2006',
        url: 'https://www.iso.org/standard/31889.html',
        description: {
          uk: 'Величини та одиниці — Частина 3: Простір і час',
          ru: 'Величины и единицы — Часть 3: Пространство и время',
          en: 'Quantities and units — Part 3: Space and time',
          de: 'Größen und Einheiten — Teil 3: Raum und Zeit'
        }
      }
    },

    {
      category: 'geometry',
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
      ],
      example: {
        uk: 'Приклад: r = 2 м, h = 10 м → V = 3.14159 × 2² × 10 = 125.66 м³',
        ru: 'Пример: r = 2 м, h = 10 м → V = 3.14159 × 2² × 10 = 125.66 м³',
        en: 'Example: r = 2 m, h = 10 m → V = 3.14159 × 2² × 10 = 125.66 m³',
        de: 'Beispiel: r = 2 m, h = 10 m → V = 3.14159 × 2² × 10 = 125.66 m³'
      },
      source: {
        name: 'ISO 80000-3:2006',
        url: 'https://www.iso.org/standard/31889.html'
      }
    },

    {
      category: 'geometry',
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
      ],
      example: {
        uk: 'Приклад: a = 3, b = 4 → c = √(3² + 4²) = √25 = 5',
        ru: 'Пример: a = 3, b = 4 → c = √(3² + 4²) = √25 = 5',
        en: 'Example: a = 3, b = 4 → c = √(3² + 4²) = √25 = 5',
        de: 'Beispiel: a = 3, b = 4 → c = √(3² + 4²) = √25 = 5'
      },
      source: {
        name: {
          uk: 'Евклід "Начала", Книга I',
          ru: 'Евклид "Начала", Книга I',
          en: 'Euclid\'s "Elements", Book I',
          de: 'Euklids "Elemente", Buch I'
        }
      }
    },

    // ТРИГОНОМЕТРІЯ
    {
      category: 'trigonometry',
      title: {
        uk: 'Основна тригонометрична тотожність',
        ru: 'Основное тригонометрическое тождество',
        en: 'Pythagorean Trigonometric Identity',
        de: 'Trigonometrischer Pythagoras'
      },
      formula: 'sin²(α) + cos²(α) = 1',
      variables: [
        { uk: 'α - кут у радіанах або градусах', ru: 'α - угол в радианах или градусах', en: 'α - angle in radians or degrees', de: 'α - Winkel in Radiant oder Grad' }
      ],
      example: {
        uk: 'Приклад: α = 30° → sin²(30°) + cos²(30°) = 0.25 + 0.75 = 1',
        ru: 'Пример: α = 30° → sin²(30°) + cos²(30°) = 0.25 + 0.75 = 1',
        en: 'Example: α = 30° → sin²(30°) + cos²(30°) = 0.25 + 0.75 = 1',
        de: 'Beispiel: α = 30° → sin²(30°) + cos²(30°) = 0.25 + 0.75 = 1'
      },
      source: {
        name: 'ISO 80000-2:2019',
        url: 'https://www.iso.org/standard/64973.html',
        description: {
          uk: 'Величини та одиниці — Частина 2: Математика',
          ru: 'Величины и единицы — Часть 2: Математика',
          en: 'Quantities and units — Part 2: Mathematics',
          de: 'Größen und Einheiten — Teil 2: Mathematik'
        }
      }
    },

    {
      category: 'trigonometry',
      title: {
        uk: 'Теорема синусів',
        ru: 'Теорема синусов',
        en: 'Law of Sines',
        de: 'Sinussatz'
      },
      formula: 'a/sin(α) = b/sin(β) = c/sin(γ)',
      variables: [
        { uk: 'a, b, c - сторони трикутника', ru: 'a, b, c - стороны треугольника', en: 'a, b, c - triangle sides', de: 'a, b, c - Dreiecksseiten' },
        { uk: 'α, β, γ - протилежні кути', ru: 'α, β, γ - противолежащие углы', en: 'α, β, γ - opposite angles', de: 'α, β, γ - gegenüberliegende Winkel' }
      ],
      source: {
        name: 'ISO 80000-2:2019',
        url: 'https://www.iso.org/standard/64973.html'
      }
    },

    {
      category: 'trigonometry',
      title: {
        uk: 'Теорема косинусів',
        ru: 'Теорема косинусов',
        en: 'Law of Cosines',
        de: 'Kosinussatz'
      },
      formula: 'c² = a² + b² - 2ab×cos(γ)',
      variables: [
        { uk: 'a, b, c - сторони трикутника', ru: 'a, b, c - стороны треугольника', en: 'a, b, c - triangle sides', de: 'a, b, c - Dreiecksseiten' },
        { uk: 'γ - кут між сторонами a і b', ru: 'γ - угол между сторонами a и b', en: 'γ - angle between sides a and b', de: 'γ - Winkel zwischen Seiten a und b' }
      ],
      source: {
        name: 'ISO 80000-2:2019',
        url: 'https://www.iso.org/standard/64973.html'
      }
    },

    // АЛГЕБРА
    {
      category: 'algebra',
      title: {
        uk: 'Квадратне рівняння',
        ru: 'Квадратное уравнение',
        en: 'Quadratic Equation',
        de: 'Quadratische Gleichung'
      },
      formula: 'x = (-b ± √(b² - 4ac)) / (2a)',
      variables: [
        { uk: 'a, b, c - коефіцієнти рівняння ax² + bx + c = 0', ru: 'a, b, c - коэффициенты уравнения ax² + bx + c = 0', en: 'a, b, c - coefficients of ax² + bx + c = 0', de: 'a, b, c - Koeffizienten von ax² + bx + c = 0' },
        { uk: 'D = b² - 4ac - дискримінант', ru: 'D = b² - 4ac - дискриминант', en: 'D = b² - 4ac - discriminant', de: 'D = b² - 4ac - Diskriminante' }
      ],
      example: {
        uk: 'Приклад: x² - 5x + 6 = 0 → x₁ = 2, x₂ = 3',
        ru: 'Пример: x² - 5x + 6 = 0 → x₁ = 2, x₂ = 3',
        en: 'Example: x² - 5x + 6 = 0 → x₁ = 2, x₂ = 3',
        de: 'Beispiel: x² - 5x + 6 = 0 → x₁ = 2, x₂ = 3'
      },
      source: {
        name: 'ISO 80000-2:2019',
        url: 'https://www.iso.org/standard/64973.html'
      }
    },

    // ДИФЕРЕНЦІЮВАННЯ
    {
      category: 'calculus',
      title: {
        uk: 'Похідна степеневої функції',
        ru: 'Производная степенной функции',
        en: 'Power Rule Derivative',
        de: 'Potenzregel Ableitung'
      },
      formula: 'd(xⁿ)/dx = n×xⁿ⁻¹',
      variables: [
        { uk: 'n - будь-яке дійсне число', ru: 'n - любое действительное число', en: 'n - any real number', de: 'n - beliebige reelle Zahl' }
      ],
      example: {
        uk: 'Приклад: d(x³)/dx = 3x²',
        ru: 'Пример: d(x³)/dx = 3x²',
        en: 'Example: d(x³)/dx = 3x²',
        de: 'Beispiel: d(x³)/dx = 3x²'
      },
      source: {
        name: 'ISO 80000-2:2019',
        url: 'https://www.iso.org/standard/64973.html'
      }
    },

    {
      category: 'calculus',
      title: {
        uk: 'Похідна синуса',
        ru: 'Производная синуса',
        en: 'Derivative of Sine',
        de: 'Ableitung des Sinus'
      },
      formula: 'd(sin(x))/dx = cos(x)',
      source: {
        name: 'ISO 80000-2:2019',
        url: 'https://www.iso.org/standard/64973.html'
      }
    },

    {
      category: 'calculus',
      title: {
        uk: 'Похідна косинуса',
        ru: 'Производная косинуса',
        en: 'Derivative of Cosine',
        de: 'Ableitung des Kosinus'
      },
      formula: 'd(cos(x))/dx = -sin(x)',
      source: {
        name: 'ISO 80000-2:2019',
        url: 'https://www.iso.org/standard/64973.html'
      }
    },

    {
      category: 'calculus',
      title: {
        uk: 'Похідна експоненти',
        ru: 'Производная экспоненты',
        en: 'Derivative of Exponential',
        de: 'Ableitung der Exponentialfunktion'
      },
      formula: 'd(eˣ)/dx = eˣ',
      variables: [
        { uk: 'e ≈ 2.71828 (число Ейлера)', ru: 'e ≈ 2.71828 (число Эйлера)', en: 'e ≈ 2.71828 (Euler\'s number)', de: 'e ≈ 2.71828 (Eulersche Zahl)' }
      ],
      source: {
        name: 'ISO 80000-2:2019',
        url: 'https://www.iso.org/standard/64973.html'
      }
    },

    {
      category: 'calculus',
      title: {
        uk: 'Похідна натурального логарифму',
        ru: 'Производная натурального логарифма',
        en: 'Derivative of Natural Logarithm',
        de: 'Ableitung des natürlichen Logarithmus'
      },
      formula: 'd(ln(x))/dx = 1/x',
      variables: [
        { uk: 'x > 0', ru: 'x > 0', en: 'x > 0', de: 'x > 0' }
      ],
      source: {
        name: 'ISO 80000-2:2019',
        url: 'https://www.iso.org/standard/64973.html'
      }
    }
  ],

  // ТАБЛИЦІ
  tables: [
    {
      category: 'constants',
      title: {
        uk: 'Математичні константи',
        ru: 'Математические константы',
        en: 'Mathematical Constants',
        de: 'Mathematische Konstanten'
      },
      headers: {
        uk: ['Назва', 'Символ', 'Значення', 'Опис'],
        ru: ['Название', 'Символ', 'Значение', 'Описание'],
        en: ['Name', 'Symbol', 'Value', 'Description'],
        de: ['Name', 'Symbol', 'Wert', 'Beschreibung']
      },
      rows: [
        [
          { uk: 'Число Пі', ru: 'Число Пи', en: 'Pi', de: 'Pi' },
          'π',
          '3.14159265359',
          { uk: 'Відношення довжини кола до діаметра', ru: 'Отношение длины окружности к диаметру', en: 'Ratio of circle circumference to diameter', de: 'Verhältnis Kreisumfang zu Durchmesser' }
        ],
        [
          { uk: 'Число Ейлера', ru: 'Число Эйлера', en: 'Euler\'s number', de: 'Eulersche Zahl' },
          'e',
          '2.71828182846',
          { uk: 'Основа натурального логарифму', ru: 'Основание натурального логарифма', en: 'Base of natural logarithm', de: 'Basis des natürlichen Logarithmus' }
        ],
        [
          { uk: 'Золотий перетин', ru: 'Золотое сечение', en: 'Golden ratio', de: 'Goldener Schnitt' },
          'φ',
          '1.61803398875',
          { uk: '(1 + √5) / 2', ru: '(1 + √5) / 2', en: '(1 + √5) / 2', de: '(1 + √5) / 2' }
        ]
      ],
      source: {
        name: 'ISO 80000-2:2019',
        url: 'https://www.iso.org/standard/64973.html'
      }
    },

    {
      category: 'trigonometry',
      title: {
        uk: 'Значення тригонометричних функцій',
        ru: 'Значения тригонометрических функций',
        en: 'Trigonometric Function Values',
        de: 'Werte trigonometrischer Funktionen'
      },
      headers: {
        uk: ['Кут °', 'Радіани', 'sin', 'cos', 'tg'],
        ru: ['Угол °', 'Радианы', 'sin', 'cos', 'tg'],
        en: ['Angle °', 'Radians', 'sin', 'cos', 'tan'],
        de: ['Winkel °', 'Radiant', 'sin', 'cos', 'tan']
      },
      rows: [
        ['0°', '0', '0', '1', '0'],
        ['30°', 'π/6', '1/2', '√3/2', '√3/3'],
        ['45°', 'π/4', '√2/2', '√2/2', '1'],
        ['60°', 'π/3', '√3/2', '1/2', '√3'],
        ['90°', 'π/2', '1', '0', '∞'],
        ['180°', 'π', '0', '-1', '0'],
        ['270°', '3π/2', '-1', '0', '∞'],
        ['360°', '2π', '0', '1', '0']
      ],
      source: {
        name: 'ISO 80000-2:2019',
        url: 'https://www.iso.org/standard/64973.html'
      }
    },

    {
      category: 'geometry',
      title: {
        uk: 'Формули площ плоских фігур',
        ru: 'Формулы площадей плоских фигур',
        en: 'Area Formulas for Plane Figures',
        de: 'Flächenformeln ebener Figuren'
      },
      headers: {
        uk: ['Фігура', 'Формула площі', 'Позначення'],
        ru: ['Фигура', 'Формула площади', 'Обозначение'],
        en: ['Figure', 'Area Formula', 'Notation'],
        de: ['Figur', 'Flächenformel', 'Bezeichnung']
      },
      rows: [
        [
          { uk: 'Квадрат', ru: 'Квадрат', en: 'Square', de: 'Quadrat' },
          'A = a²',
          { uk: 'a - сторона', ru: 'a - сторона', en: 'a - side', de: 'a - Seite' }
        ],
        [
          { uk: 'Прямокутник', ru: 'Прямоугольник', en: 'Rectangle', de: 'Rechteck' },
          'A = a × b',
          { uk: 'a, b - сторони', ru: 'a, b - стороны', en: 'a, b - sides', de: 'a, b - Seiten' }
        ],
        [
          { uk: 'Трикутник', ru: 'Треугольник', en: 'Triangle', de: 'Dreieck' },
          'A = (b × h) / 2',
          { uk: 'b - основа, h - висота', ru: 'b - основание, h - высота', en: 'b - base, h - height', de: 'b - Basis, h - Höhe' }
        ],
        [
          { uk: 'Коло', ru: 'Круг', en: 'Circle', de: 'Kreis' },
          'A = π × r²',
          { uk: 'r - радіус', ru: 'r - радиус', en: 'r - radius', de: 'r - Radius' }
        ],
        [
          { uk: 'Еліпс', ru: 'Эллипс', en: 'Ellipse', de: 'Ellipse' },
          'A = π × a × b',
          { uk: 'a, b - півосі', ru: 'a, b - полуоси', en: 'a, b - semi-axes', de: 'a, b - Halbachsen' }
        ],
        [
          { uk: 'Трапеція', ru: 'Трапеция', en: 'Trapezoid', de: 'Trapez' },
          'A = ((a + b) × h) / 2',
          { uk: 'a, b - основи, h - висота', ru: 'a, b - основания, h - высота', en: 'a, b - bases, h - height', de: 'a, b - Grundseiten, h - Höhe' }
        ]
      ],
      source: {
        name: 'ISO 80000-3:2006',
        url: 'https://www.iso.org/standard/31889.html'
      }
    },

    {
      category: 'geometry',
      title: {
        uk: 'Формули об\'ємів тіл',
        ru: 'Формулы объемов тел',
        en: 'Volume Formulas for Solids',
        de: 'Volumenformeln für Körper'
      },
      headers: {
        uk: ['Тіло', 'Формула об\'єму', 'Позначення'],
        ru: ['Тело', 'Формула объема', 'Обозначение'],
        en: ['Solid', 'Volume Formula', 'Notation'],
        de: ['Körper', 'Volumenformel', 'Bezeichnung']
      },
      rows: [
        [
          { uk: 'Куб', ru: 'Куб', en: 'Cube', de: 'Würfel' },
          'V = a³',
          { uk: 'a - ребро', ru: 'a - ребро', en: 'a - edge', de: 'a - Kante' }
        ],
        [
          { uk: 'Паралелепіпед', ru: 'Параллелепипед', en: 'Parallelepiped', de: 'Quader' },
          'V = a × b × c',
          { uk: 'a, b, c - ребра', ru: 'a, b, c - ребра', en: 'a, b, c - edges', de: 'a, b, c - Kanten' }
        ],
        [
          { uk: 'Циліндр', ru: 'Цилиндр', en: 'Cylinder', de: 'Zylinder' },
          'V = π × r² × h',
          { uk: 'r - радіус, h - висота', ru: 'r - радиус, h - высота', en: 'r - radius, h - height', de: 'r - Radius, h - Höhe' }
        ],
        [
          { uk: 'Конус', ru: 'Конус', en: 'Cone', de: 'Kegel' },
          'V = (π × r² × h) / 3',
          { uk: 'r - радіус, h - висота', ru: 'r - радиус, h - высота', en: 'r - radius, h - height', de: 'r - Radius, h - Höhe' }
        ],
        [
          { uk: 'Куля', ru: 'Шар', en: 'Sphere', de: 'Kugel' },
          'V = (4 × π × r³) / 3',
          { uk: 'r - радіус', ru: 'r - радиус', en: 'r - radius', de: 'r - Radius' }
        ]
      ],
      source: {
        name: 'ISO 80000-3:2006',
        url: 'https://www.iso.org/standard/31889.html'
      }
    }
  ]
};

export default mathReferenceData;
// src/data/reference/math/formulas/geometry.js
export const geometryFormulas = [
  {
    id: 'circle_area',
    category: 'geometry',
    title: {
      uk: 'Площа кола',
      ru: 'Площадь круга',
      en: 'Circle Area',
      de: 'Kreisfläche'
    },
    formula: 'A = π × r²',
    latex: 'A = \\pi r^2',
    variables: [
      { uk: 'A — площа, м²', ru: 'A — площадь, м²', en: 'A — area, m²', de: 'A — Fläche, m²' },
      { uk: 'r — радіус, м', ru: 'r — радиус, м', en: 'r — radius, m', de: 'r — Radius, m' },
      { uk: 'π ≈ 3.14159', ru: 'π ≈ 3.14159', en: 'π ≈ 3.14159', de: 'π ≈ 3.14159' }
    ],
    example: {
      uk: 'Приклад: r = 5 м → A = 78.54 м²',
      ru: 'Пример: r = 5 м → A = 78.54 м²',
      en: 'Example: r = 5 m → A = 78.54 m²',
      de: 'Beispiel: r = 5 m → A = 78.54 m²'
    },
    source: {
      name: 'ISO 80000-3:2006',
      url: 'https://www.iso.org/standard/31889.html'
    }
  },
  {
    id: 'circle_circumference',
    category: 'geometry',
    title: {
      uk: 'Довжина кола',
      ru: 'Длина окружности',
      en: 'Circle Circumference',
      de: 'Kreisumfang'
    },
    formula: 'C = 2πr = πd',
    latex: 'C = 2\\pi r = \\pi d',
    variables: [
      { uk: 'C — довжина, м', ru: 'C — длина, м', en: 'C — circumference, m', de: 'C — Umfang, m' },
      { uk: 'r — радіус, м', ru: 'r — радиус, м', en: 'r — radius, m', de: 'r — Radius, m' },
      { uk: 'd — діаметр, м', ru: 'd — диаметр, м', en: 'd — diameter, m', de: 'd — Durchmesser, m' }
    ],
    example: {
      uk: 'Приклад: r = 10 м → C = 62.83 м',
      ru: 'Пример: r = 10 м → C = 62.83 м',
      en: 'Example: r = 10 m → C = 62.83 m',
      de: 'Beispiel: r = 10 m → C = 62.83 m'
    }
  },
  {
    id: 'pythagorean',
    category: 'geometry',
    title: {
      uk: 'Теорема Піфагора',
      ru: 'Теорема Пифагора',
      en: 'Pythagorean Theorem',
      de: 'Satz des Pythagoras'
    },
    formula: 'c² = a² + b²',
    latex: 'c^2 = a^2 + b^2',
    variables: [
      { uk: 'c — гіпотенуза', ru: 'c — гипотенуза', en: 'c — hypotenuse', de: 'c — Hypotenuse' },
      { uk: 'a, b — катети', ru: 'a, b — катеты', en: 'a, b — legs', de: 'a, b — Katheten' }
    ],
    example: {
      uk: 'Приклад: a = 3, b = 4 → c = 5',
      ru: 'Пример: a = 3, b = 4 → c = 5',
      en: 'Example: a = 3, b = 4 → c = 5',
      de: 'Beispiel: a = 3, b = 4 → c = 5'
    }
  },
  {
    id: 'triangle_area',
    category: 'geometry',
    title: {
      uk: 'Площа трикутника',
      ru: 'Площадь треугольника',
      en: 'Triangle Area',
      de: 'Dreiecksfläche'
    },
    formula: 'A = (b × h) / 2',
    latex: 'A = \\frac{bh}{2}',
    variables: [
      { uk: 'A — площа, м²', ru: 'A — площадь, м²', en: 'A — area, m²', de: 'A — Fläche, m²' },
      { uk: 'b — основа, м', ru: 'b — основание, м', en: 'b — base, m', de: 'b — Basis, m' },
      { uk: 'h — висота, м', ru: 'h — высота, м', en: 'h — height, m', de: 'h — Höhe, m' }
    ]
  },
  {
    id: 'heron_formula',
    category: 'geometry',
    title: {
      uk: 'Формула Герона',
      ru: 'Формула Герона',
      en: 'Heron\'s Formula',
      de: 'Heronsche Formel'
    },
    formula: 'A = √(s(s-a)(s-b)(s-c))',
    latex: 'A = \\sqrt{s(s-a)(s-b)(s-c)}',
    variables: [
      { uk: 's = (a+b+c)/2 — напівпериметр', ru: 's = (a+b+c)/2 — полупериметр', en: 's = (a+b+c)/2 — semiperimeter', de: 's = (a+b+c)/2 — Halbumfang' },
      { uk: 'a, b, c — сторони трикутника', ru: 'a, b, c — стороны треугольника', en: 'a, b, c — triangle sides', de: 'a, b, c — Dreiecksseiten' }
    ]
  },
  {
    id: 'cylinder_volume',
    category: 'geometry',
    title: {
      uk: 'Об\'єм циліндра',
      ru: 'Объем цилиндра',
      en: 'Cylinder Volume',
      de: 'Zylindervolumen'
    },
    formula: 'V = π × r² × h',
    latex: 'V = \\pi r^2 h',
    variables: [
      { uk: 'V — об\'єм, м³', ru: 'V — объем, м³', en: 'V — volume, m³', de: 'V — Volumen, m³' },
      { uk: 'r — радіус, м', ru: 'r — радиус, м', en: 'r — radius, m', de: 'r — Radius, m' },
      { uk: 'h — висота, м', ru: 'h — высота, м', en: 'h — height, m', de: 'h — Höhe, m' }
    ]
  },
  {
    id: 'sphere_volume',
    category: 'geometry',
    title: {
      uk: 'Об\'єм кулі',
      ru: 'Объем шара',
      en: 'Sphere Volume',
      de: 'Kugelvolumen'
    },
    formula: 'V = (4πr³)/3',
    latex: 'V = \\frac{4\\pi r^3}{3}',
    variables: [
      { uk: 'V — об\'єм, м³', ru: 'V — объем, м³', en: 'V — volume, m³', de: 'V — Volumen, m³' },
      { uk: 'r — радіус, м', ru: 'r — радиус, м', en: 'r — radius, m', de: 'r — Radius, m' }
    ],
    example: {
      uk: 'Приклад: r = 3 м → V = 113.10 м³',
      ru: 'Пример: r = 3 м → V = 113.10 м³',
      en: 'Example: r = 3 m → V = 113.10 m³',
      de: 'Beispiel: r = 3 m → V = 113.10 m³'
    }
  },
  {
    id: 'sphere_surface',
    category: 'geometry',
    title: {
      uk: 'Площа поверхні кулі',
      ru: 'Площадь поверхности шара',
      en: 'Sphere Surface Area',
      de: 'Kugeloberfläche'
    },
    formula: 'A = 4πr²',
    latex: 'A = 4\\pi r^2',
    variables: [
      { uk: 'A — площа, м²', ru: 'A — площадь, м²', en: 'A — area, m²', de: 'A — Fläche, m²' },
      { uk: 'r — радіус, м', ru: 'r — радиус, м', en: 'r — radius, m', de: 'r — Radius, m' }
    ]
  },
  {
    id: 'cone_volume',
    category: 'geometry',
    title: {
      uk: 'Об\'єм конуса',
      ru: 'Объем конуса',
      en: 'Cone Volume',
      de: 'Kegelvolumen'
    },
    formula: 'V = (πr²h)/3',
    latex: 'V = \\frac{\\pi r^2 h}{3}',
    variables: [
      { uk: 'V — об\'єм, м³', ru: 'V — объем, м³', en: 'V — volume, m³', de: 'V — Volumen, m³' },
      { uk: 'r — радіус основи, м', ru: 'r — радиус основания, м', en: 'r — base radius, m', de: 'r — Grundradius, m' },
      { uk: 'h — висота, м', ru: 'h — высота, м', en: 'h — height, m', de: 'h — Höhe, m' }
    ]
  },
  {
    id: 'trapezoid_area',
    category: 'geometry',
    title: {
      uk: 'Площа трапеції',
      ru: 'Площадь трапеции',
      en: 'Trapezoid Area',
      de: 'Trapezfläche'
    },
    formula: 'A = ((a+b)h)/2',
    latex: 'A = \\frac{(a+b)h}{2}',
    variables: [
      { uk: 'a, b — основи, м', ru: 'a, b — основания, м', en: 'a, b — bases, m', de: 'a, b — Grundseiten, m' },
      { uk: 'h — висота, м', ru: 'h — высота, м', en: 'h — height, m', de: 'h — Höhe, m' }
    ]
  },
  {
    id: 'ellipse_area',
    category: 'geometry',
    title: {
      uk: 'Площа еліпса',
      ru: 'Площадь эллипса',
      en: 'Ellipse Area',
      de: 'Ellipsenfläche'
    },
    formula: 'A = πab',
    latex: 'A = \\pi ab',
    variables: [
      { uk: 'a — велика піввісь, м', ru: 'a — большая полуось, м', en: 'a — semi-major axis, m', de: 'a — große Halbachse, m' },
      { uk: 'b — мала піввісь, м', ru: 'b — малая полуось, м', en: 'b — semi-minor axis, m', de: 'b — kleine Halbachse, m' }
    ]
  },
  {
    id: 'sector_area',
    category: 'geometry',
    title: {
      uk: 'Площа кругового сектора',
      ru: 'Площадь кругового сектора',
      en: 'Circular Sector Area',
      de: 'Kreissektorfläche'
    },
    formula: 'A = (r²θ)/2',
    latex: 'A = \\frac{r^2 \\theta}{2}',
    variables: [
      { uk: 'r — радіус, м', ru: 'r — радиус, м', en: 'r — radius, m', de: 'r — Radius, m' },
      { uk: 'θ — центральний кут у радіанах', ru: 'θ — центральный угол в радианах', en: 'θ — central angle in radians', de: 'θ — Zentriwinkel in Radiant' }
    ]
  }
];
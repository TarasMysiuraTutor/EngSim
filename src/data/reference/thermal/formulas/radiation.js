// src/data/reference/thermal/formulas/radiation.js
export const radiationFormulas = [
  {
    id: 'stefan-boltzmann-law',
    category: 'radiation',
    title: {
      uk: 'Закон Стефана-Больцмана',
      ru: 'Закон Стефана-Больцмана',
      en: 'Stefan-Boltzmann Law',
      de: 'Stefan-Boltzmann-Gesetz'
    },
    formula: 'Q = ε × σ × A × T⁴',
    variables: [
      { uk: 'Q - потужність випромінювання, Вт', ru: 'Q - мощность излучения, Вт', en: 'Q - radiant power, W', de: 'Q - Strahlungsleistung, W' },
      { uk: 'ε - ступінь чорноти поверхні (0...1)', ru: 'ε - степень черноты поверхности (0...1)', en: 'ε - surface emissivity (0...1)', de: 'ε - Emissionsgrad der Oberfläche (0...1)' },
      { uk: 'σ - стала Стефана-Больцмана, 5.67×10⁻⁸ Вт/(м²·К⁴)', ru: 'σ - постоянная Стефана-Больцмана, 5.67×10⁻⁸ Вт/(м²·К⁴)', en: 'σ - Stefan-Boltzmann constant, 5.67×10⁻⁸ W/(m²·K⁴)', de: 'σ - Stefan-Boltzmann-Konstante, 5.67×10⁻⁸ W/(m²·K⁴)' },
      { uk: 'A - площа поверхні, м²', ru: 'A - площадь поверхности, м²', en: 'A - surface area, m²', de: 'A - Oberfläche, m²' },
      { uk: 'T - абсолютна температура, К', ru: 'T - абсолютная температура, К', en: 'T - absolute temperature, K', de: 'T - absolute Temperatur, K' }
    ],
    example: {
      uk: 'ε = 0.9, A = 1 м², T = 500 K → Q = 3193 Вт',
      ru: 'ε = 0.9, A = 1 м², T = 500 K → Q = 3193 Вт',
      en: 'ε = 0.9, A = 1 m², T = 500 K → Q = 3193 W',
      de: 'ε = 0.9, A = 1 m², T = 500 K → Q = 3193 W'
    },
    source: {
      name: 'ISO 80000-5:2019',
      url: 'https://www.iso.org/standard/64978.html'
    }
  },

  {
    id: 'radiative-heat-transfer',
    category: 'radiation',
    title: {
      uk: 'Теплообмін випромінюванням між двома поверхнями',
      ru: 'Теплообмен излучением между двумя поверхностями',
      en: 'Radiative Heat Transfer Between Two Surfaces',
      de: 'Strahlungswärmeübertragung zwischen zwei Flächen'
    },
    formula: 'Q = ε₁₂ × σ × A × (T₁⁴ - T₂⁴)',
    variables: [
      { uk: 'ε₁₂ - приведений ступінь чорноти', ru: 'ε₁₂ - приведенная степень черноты', en: 'ε₁₂ - effective emissivity', de: 'ε₁₂ - effektiver Emissionsgrad' },
      { uk: 'T₁, T₂ - температури поверхонь, К', ru: 'T₁, T₂ - температуры поверхностей, К', en: 'T₁, T₂ - surface temperatures, K', de: 'T₁, T₂ - Oberflächentemperaturen, K' }
    ],
    source: {
      name: 'ISO 80000-5:2019',
      url: 'https://www.iso.org/standard/64978.html'
    }
  }
];

export default radiationFormulas;
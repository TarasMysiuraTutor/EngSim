export const bendingFormulas = [
  {
    id: 'bending-stress',
    category: 'bending',
    title: {
      uk: 'Напруження при згині',
      ru: 'Напряжение при изгибе',
      en: 'Bending Stress',
      de: 'Biegespannung'
    },
    formula: '\\sigma = \\frac{M}{W}',  // LaTeX синтаксис!
    variables: [
      { uk: 'σ - напруження, Па', ru: '...', en: '...', de: '...' },
      { uk: 'M - момент, Н·м', ru: '...', en: '...', de: '...' }
    ],
    example: { uk: 'M = 1000 Н·м...', ru: '...', en: '...', de: '...' },
    diagram: '/diagrams/bending-beam.svg',  // Опціонально
    relatedFiles: [  // Опціонально
      {
        type: 'pdf',
        name: 'EN 1993 Extract',
        path: '/documents/en1993.pdf',
        description: { uk: '...', ru: '...', en: '...', de: '...' }
      }
    ],
    source: {
      name: 'EN 1993-1-1:2005',
      url: 'https://...',
      description: { uk: '...', ru: '...', en: '...', de: '...' }
    }
  },
  // Додайте більше формул...
];

export default bendingFormulas;

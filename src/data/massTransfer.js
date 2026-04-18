// Масообмін / Mass Transfer / Stoffaustausch
export const massTransferCalculators = {
  diffusion_flat_wall: {
    title: {
      uk: 'Дифузія через плоску стінку',
      ru: 'Диффузия через плоскую стенку',
      en: 'Diffusion through flat wall',
      de: 'Diffusion durch ebene Wand',
    },

    icon: '🧪',

    desc: {
      uk: 'Стаціонарний масоперенос за першим законом Фіка',
      ru: 'Стационарный массоперенос по первому закону Фика',
      en: 'Steady-state mass transfer based on Fick’s first law',
      de: 'Stationärer Stofftransport nach dem ersten Fickschen Gesetz',
    },

    fields: [
      {
        id: 'D',
        label: {
          uk: 'Коефіцієнт дифузії',
          ru: 'Коэффициент диффузии',
          en: 'Diffusion coefficient',
          de: 'Diffusionskoeffizient',
        },
        unit: 'm²/s',
        slider: true,
        min: 0,
        max: 1e-4,
        step: 1e-6,
      },
      {
        id: 'deltaC',
        label: {
          uk: 'Різниця концентрацій',
          ru: 'Разность концентраций',
          en: 'Concentration difference',
          de: 'Konzentrationsdifferenz',
        },
        unit: 'kg/m³',
        slider: true,
        min: 0,
        max: 100,
        step: 0.1,
      },
      {
        id: 'deltaX',
        label: {
          uk: 'Товщина шару',
          ru: 'Толщина слоя',
          en: 'Layer thickness',
          de: 'Schichtdicke',
        },
        unit: 'm',
        slider: true,
        min: 0.001,
        max: 1,
        step: 0.001,
      },
    ],

    calculate: (inputs) => {
      const { D, deltaC, deltaX } = inputs;

      const J = (D * deltaC) / deltaX;

      return {
        uk: `Потік маси J = ${J.toExponential(3)} кг/(м²·с)`,
        ru: `Поток массы J = ${J.toExponential(3)} кг/(м²·с)`,
        en: `Mass flux J = ${J.toExponential(3)} kg/(m²·s)`,
        de: `Stoffstrom J = ${J.toExponential(3)} kg/(m²·s)`,
      };
    },

    formula: {
      en: 'J = -D \\frac{\\Delta C}{\\Delta x}',
      de: 'J = -D \\frac{\\Delta C}{\\Delta x}',
    },
  },
};

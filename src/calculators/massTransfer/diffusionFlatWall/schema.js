export const schema = [
  {
    name: "D",
    label: { ua: "Коефіцієнт дифузії", en: "Diffusion coefficient", ru: "Коэффициент диффузии", de: "Diffusionskoeffizient" },
    unit: "m²/s",
    required: true,
  },
  {
    name: "deltaC",
    label: { ua: "Градієнт концентрації", en: "Concentration difference" },
    unit: "kg/m³",
    required: true,
  },
  {
    name: "deltaX",
    label: { ua: "Товщина шару", en: "Layer thickness" },
    unit: "m",
    required: true,
  },
];
``
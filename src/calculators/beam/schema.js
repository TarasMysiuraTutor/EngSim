export const beamSchema = [
  {
    name: "force",
    label: { ua: "Сила", en: "Force" },
    unit: "N",
    type: "number",
    required: true,
  },
  {
    name: "length",
    label: { ua: "Довжина", en: "Length" },
    unit: "m",
    type: "number",
    required: true,
  },
  {
    name: "momentOfInertia",
    label: { ua: "Момент інерції", en: "Moment of inertia" },
    unit: "m⁴",
    type: "number",
    required: true,
  },
];

export function calculateBeamStress(values) {
  const { force, length, momentOfInertia } = values;

  if (momentOfInertia === 0) return null;

  const moment = (force * length) / 4;
  const stress = moment / momentOfInertia;

  return {
    stress,
  };
}
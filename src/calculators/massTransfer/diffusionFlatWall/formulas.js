export function calculate(values) {
  const { D, deltaC, deltaX } = values;

  return {
    flux: (D * deltaC) / deltaX,
  };
}
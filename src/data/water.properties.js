// water.properties.js
// Water thermophysical properties
// Based on IAPWS-IF97 engineering approximations
// Temperature input: °C

export const Water = {
  id: "water",
  tempRange: [0, 370],
  method: "IAPWS-IF97",

  phase(T) {
    if (T < 0.01) return "ice";
    if (T > 100) return "steam";
    return "liquid";
  },

  compute(T) {
    const Tk = T + 273.15;

    // density, kg/m3
    const rho =
      1000 *
      (1 - ((T + 288.9414) / (508929 * (T + 68.12963))) * (T - 3.9863) ** 2);

    // cp, J/(kg·K)
    const cp = 4181.3 - 0.3 * T + 6e-3 * T ** 2;

    // thermal conductivity, W/(m·K)
    const lambda = 0.561 + 1.9e-3 * T - 7.2e-6 * T ** 2;

    // dynamic viscosity, Pa·s
    const mu = 2.414e-5 * Math.pow(10, 247.8 / (Tk - 140));

    const nu = mu / rho;
    const a = lambda / (rho * cp);
    const Pr = (mu * cp) / lambda;

    // surface tension, N/m
    const sigma =
      0.2358 *
      Math.pow(1 - Tk / 647.096, 1.256) *
      (1 - 0.625 * (1 - Tk / 647.096));

    // volumetric thermal expansion coefficient, 1/K
    const beta =
      (1 / rho) *
      (rho -
        1000 *
          (1 -
            ((T + 1 + 288.9414) / (508929 * (T + 1 + 68.12963))) *
              (T + 1 - 3.9863) ** 2));

    // saturated vapor pressure, kPa
    const Pv = 0.61121 * Math.exp((18.678 - T / 234.5) * (T / (257.14 + T)));

    // specific enthalpy, kJ/kg (reference 0 °C)
    const h = (cp * T) / 1000;

    return {
      rho,
      cp,
      lambda,
      a,
      mu,
      nu,
      Pr,
      sigma,
      beta,
      Pv,
      h,
    };
  },

  getProperties(T) {
    const p = this.compute(T);

    return [
      { key: "rho", symbol: "\\rho", value: p.rho, unit: "kg/m^3" },
      { key: "cp", symbol: "c_p", value: p.cp, unit: "J/(kg\\,K)" },
      { key: "lambda", symbol: "\\lambda", value: p.lambda, unit: "W/(m\\,K)" },
      { key: "a", symbol: "a", value: p.a, unit: "m^2/s" },
      { key: "mu", symbol: "\\mu", value: p.mu, unit: "Pa\\,s" },
      { key: "nu", symbol: "\\nu", value: p.nu, unit: "m^2/s" },
      { key: "Pr", symbol: "Pr", value: p.Pr, unit: "-" },
      { key: "sigma", symbol: "\\sigma", value: p.sigma, unit: "N/m" },
      { key: "beta", symbol: "\\beta", value: p.beta, unit: "1/K" },
      { key: "Pv", symbol: "P_s", value: p.Pv, unit: "kPa" },
      { key: "h", symbol: "h", value: p.h, unit: "kJ/kg" },
    ];
  },
};
``;

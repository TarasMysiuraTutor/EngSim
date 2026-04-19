import React, { useState } from "react";
import { Water } from "../data/water.properties";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import FormulaDisplay from "../components/FormulaDisplay";
import { waterPropertiesMeta } from "../data/reference/properties/waterPropertiesMeta";

const ReferenceWaterPage = ({ currentLang, setCurrentLang, t }) => {
  const [temperature, setTemperature] = useState(20);

  const Tc = Number(temperature);
  const props = Water.getProperties(Tc);
  const phase = Water.phase(Tc);

  const pageTitle = {
    uk: "Вода — Теплофізичні властивості — EngSim",
    ru: "Вода — Теплофизические свойства — EngSim",
    en: "Water — Thermophysical Properties — EngSim",
    de: "Wasser — Thermophysikalische Eigenschaften — EngSim",
  };

  const phaseLabel = {
    ice: { uk: "Лід", ru: "Лёд", en: "Ice", de: "Eis" },
    liquid: { uk: "Рідина", ru: "Жидкость", en: "Liquid", de: "Flüssig" },
    steam: { uk: "Пара", ru: "Пар", en: "Steam", de: "Dampf" },
  };

  const formatValue = (v) => {
    const abs = Math.abs(v);
    if (!isFinite(v)) return "—";
    if (abs === 0) return "0";
    if (abs < 1e-3 || abs >= 1e4) return v.toExponential(3);
    if (abs < 1) return v.toFixed(4);
    if (abs < 100) return v.toFixed(3);
    return v.toFixed(2);
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle[currentLang]}</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200">
        <Navbar
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
          t={t}
        />

        <div className="pt-32 pb-16 px-8">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm">
              <Link to="/" className="text-blue-400 hover:text-cyan-400">
                {t.home || "Home"}
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link
                to="/reference"
                className="text-blue-400 hover:text-cyan-400"
              >
                {currentLang === "uk" && "Довідка"}
                {currentLang === "ru" && "Справочник"}
                {currentLang === "en" && "Reference"}
                {currentLang === "de" && "Referenz"}
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-400">
                {currentLang === "uk" && "Вода"}
                {currentLang === "ru" && "Вода"}
                {currentLang === "en" && "Water"}
                {currentLang === "de" && "Wasser"}
              </span>
            </nav>

            {/* Header */}
            <div className="mb-12 flex items-center gap-6">
              <span className="text-7xl">💧</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                  {currentLang === "uk" && "Вода"}
                  {currentLang === "ru" && "Вода"}
                  {currentLang === "en" && "Water"}
                  {currentLang === "de" && "Wasser"}
                </h1>
                <p className="text-xl text-gray-400">
                  {currentLang === "uk" && "Теплофізичні властивості"}
                  {currentLang === "ru" && "Теплофизические свойства"}
                  {currentLang === "en" && "Thermophysical properties"}
                  {currentLang === "de" && "Thermophysikalische Eigenschaften"}
                </p>
              </div>
            </div>

            {/* Input */}
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
                <label className="block text-sm text-gray-400 mb-2">
                  {currentLang === "uk" && "Температура, °C"}
                  {currentLang === "ru" && "Температура, °C"}
                  {currentLang === "en" && "Temperature, °C"}
                  {currentLang === "de" && "Temperatur, °C"}
                </label>
                <input
                  type="number"
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0a0e27]/60 border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>

              <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6 flex flex-col justify-center">
                <div className="text-sm text-gray-400 mb-2">
                  {currentLang === "uk" && "Фаза"}
                  {currentLang === "ru" && "Фаза"}
                  {currentLang === "en" && "Phase"}
                  {currentLang === "de" && "Phase"}
                </div>
                <div className="text-2xl font-bold text-cyan-400">
                  {phaseLabel[phase][currentLang]}
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Method: {Water.method}
                </div>
              </div>
            </div>

            {/* Properties table */}
            <div className="bg-white/5 border border-blue-500/30 rounded-2xl overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-500/20 border-b border-blue-500/30">
                    <th className="px-6 py-4 text-center text-cyan-400">
                      Symbol
                    </th>
                    <th className="px-6 py-4 text-center text-cyan-400">
                      {currentLang === "uk"
                        ? "Величина"
                        : currentLang === "ru"
                          ? "Величина"
                          : currentLang === "en"
                            ? "Property"
                            : "Größe"}
                    </th>
                    <th className="px-6 py-4 text-center text-cyan-400">
                      {currentLang === "uk"
                        ? "Значення"
                        : currentLang === "ru"
                          ? "Значение"
                          : currentLang === "en"
                            ? "Value"
                            : "Wert"}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {props
                    .filter((p) => waterPropertiesMeta[p.key])
                    .map((p) => {
                      const meta = waterPropertiesMeta[p.key];

                      return (
                        <tr
                          key={p.key}
                          className="border-b border-blue-500/10 hover:bg-white/5 transition-colors"
                        >
                          <td className="px-6 py-4 text-2xl text-center font-semibold">
                            <FormulaDisplay formula={p.symbol} inline />
                          </td>

                          <td className="px-6 py-4 text-center">
                            {meta.title[currentLang]}
                          </td>

                          <td className="px-6 py-4 text-center font-mono flex justify-center gap-2">
                            <span>{formatValue(p.value)}</span>
                            <span className="text-gray-400 ">
                              {meta.unit[currentLang]}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Footer t={t} currentLang={currentLang} />
      </div>
    </>
  );
};

export default ReferenceWaterPage;

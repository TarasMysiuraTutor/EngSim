// src/pages/CalculatorDetail.jsx, { useState } from "react";

import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EnhancedInput from "../components/EnhancedInput";

import { calculators } from "../data/calculators";
import {
  calculatorSEO,
  categoryMap,
  getRelatedCalculators,
} from "../data/calculatorsMetadata";

import { exportToPDF } from "../utils/pdfExport";
import { useCalculationHistory } from "../hooks/useCalculationHistory";

import { appConfig } from "@/config/app.config";

const CalculatorDetail = ({ currentLang, setCurrentLang, t }) => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const calc = calculators[slug];
  const metadata = calculatorSEO[slug] ?? {};

  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  // історія
  const {
    addCalculation,
    getCalculatorHistory,
    removeCalculation,
    clearHistory,
    formatTime,
  } = useCalculationHistory();

  const calcHistory = calc ? getCalculatorHistory(slug) : [];

  // якщо калькулятор не знайдено
  if (!calc) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center text-white p-6">
        <h1 className="text-4xl font-bold mb-4">
          {currentLang === "uk" && "Калькулятор не знайдено"}
          {currentLang === "ru" && "Калькулятор не найден"}
          {currentLang === "en" && "Calculator not found"}
          {currentLang === "de" && "Rechner nicht gefunden"}
        </h1>

        <Link
          to="/calculators"
          className="text-blue-400 hover:text-cyan-400 text-xl"
        >
          {currentLang === "uk" && "← Повернутися до каталогу"}
          {currentLang === "ru" && "← Вернуться к каталогу"}
          {currentLang === "en" && "← Back to catalog"}
          {currentLang === "de" && "← Zurück zum Katalog"}
        </Link>
      </div>
    );
  }

  // зміна інпутів
  const handleInputChange = (fieldId, value) => {
    setFormData({
      ...formData,
      [fieldId]: value === "" ? "" : value,
    });

    if (errors[fieldId]) {
      setErrors({ ...errors, [fieldId]: "" });
    }
  };

  // валідація
  const validateInputs = () => {
    const newErrors = {};

    calc.fields.forEach((field) => {
      const val = formData[field.id];

      if (!val || val === "" || isNaN(val)) {
        newErrors[field.id] =
          {
            uk: "Введіть значення",
            ru: "Введите значение",
            en: "Enter value",
            de: "Wert eingeben",
          }[currentLang];
      } else if (val <= 0) {
        newErrors[field.id] =
          {
            uk: "Має бути > 0",
            ru: "Должно быть > 0",
            en: "Must be > 0",
            de: "Muss > 0 sein",
          }[currentLang];
      }
    });

    return newErrors;
  };

  // розрахунок
  const handleCalculate = () => {
    const newErrors = validateInputs();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsCalculating(true);
    setShowResult(false);

    setTimeout(() => {
      const calculatedResult = calc.calculate(formData);
      setResult(calculatedResult);

      addCalculation(
        slug,
        calc.title[currentLang],
        formData,
        calculatedResult,
        currentLang
      );

      setIsCalculating(false);
      setTimeout(() => setShowResult(true), 100);
    }, 800);
  };

  const handleReset = () => {
    setFormData({});
    setResult(null);
    setErrors({});
    setShowResult(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleCalculate();
  };

  const handleLoadFromHistory = (item) => {
    setFormData(item.inputs);
    setResult(item.result);
    setShowResult(true);
    setShowHistory(false);
  };

  const handleExportPDF = () => {
    const pdfLang = currentLang === "de" ? "de" : "en";

    const inputsFormatted = {};
    calc.fields.forEach((field) => {
      if (formData[field.id]) {
        const label = field.label[pdfLang] ?? field.label["en"];
        inputsFormatted[label] = `${formData[field.id]} ${
          field.unit ?? ""
        }`;
      }
    });

    const finalResult =
      typeof result === "object"
        ? result[pdfLang] ?? result["en"] ?? result[currentLang]
        : result;

    const pdfData = {
      calculatorName: calc.title[pdfLang] ?? calc.title[currentLang],
      inputs: inputsFormatted,
      results: { Result: finalResult },
      formula: calc.formula?.[pdfLang] ?? "",
      notes:
        metadata.fullDesc?.[pdfLang] ??
        calc.desc[pdfLang] ??
        "",
    };

    exportToPDF(pdfData, pdfLang);
  };

  const relatedCalcs = getRelatedCalculators(slug, calculators, 3);

  const pageTitle = `${calc.title[currentLang]} | EngSim`;
  const pageDesc =
    metadata.fullDesc?.[currentLang] ??
    calc.desc[currentLang];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>``
        <meta name="description" content={pageDesc} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <link rel="canonical" href={`${appConfig.siteUrl}`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200">
        <Navbar
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
          t={t}
        />

        <div className="max-w-7xl mx-auto pt-28 pb-20 px-8 md:px-12 relative">
          {/* Breadcrumbs */}
          <nav className="mb-6 text-sm flex gap-2 text-gray-400">
            <Link
              to="/"
              className="text-blue-400 hover:text-cyan-400 transition"
            >
              {t.home ?? "Home"}
            </Link>

            <span>/</span>

            <Link
              to="/calculators"
              className="text-blue-400 hover:text-cyan-400 transition"
            >
              {currentLang === "uk" && "Калькулятори"}
              {currentLang === "ru" && "Калькуляторы"}
              {currentLang === "en" && "Calculators"}
              {currentLang === "de" && "Rechner"}
            </Link>

            <span>/</span>

            <span className="text-gray-300">{calc.title[currentLang]}</span>
          </nav>

          {/* CALCULATOR HEADER */}
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl">{calc.icon}</div>

            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              {calc.title[currentLang]}
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-3xl mb-6">
            {metadata?.fullDesc?.[currentLang] ?? calc.desc[currentLang]}
          </p>

          {/* HISTORY BUTTON */}
          {calcHistory.length > 0 && (
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="px-4 py-2 mb-8 bg-white/5 hover:bg-white/10 border border-blue-500/30 hover:border-blue-500/60 rounded-xl transition flex items-center gap-2"
            >
              <span>🕒</span>
              <span>
                {currentLang === "uk" && "Історія"}
                {currentLang === "ru" && "История"}
                {currentLang === "en" && "History"}
                {currentLang === "de" && "Verlauf"}
              </span>
              <span className="opacity-70">
                ({calcHistory.length})
              </span>
            </button>
          )}

          {/* HISTORY SIDEBAR */}
          {showHistory && (
            <div className="mb-10 p-6 bg-white/5 border border-blue-500/20 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                📜{" "}
                {currentLang === "uk" && "Історія розрахунків"}
                {currentLang === "ru" && "История расчетов"}
                {currentLang === "en" && "Calculation History"}
                {currentLang === "de" && "Berechnungsverlauf"}
              </h3>

              {/* CLEAR HISTORY */}
              <button
                onClick={() => {
                  if (
                    window.confirm(
                      currentLang === "uk"
                        ? "Очистити всю історію?"
                        : currentLang === "ru"
                        ? "Очистить всю историю?"
                        : currentLang === "en"
                        ? "Clear all history?"
                        : "Gesamten Verlauf löschen?"
                    )
                  ) {
                    clearHistory();
                    setShowHistory(false);
                  }
                }}
                className="mb-4 px-3 py-1 text-red-400 border border-red-400/30 rounded-lg hover:bg-red-400/10 transition"
              >
                {currentLang === "uk" && "Очистити"}
                {currentLang === "ru" && "Очистить"}
                {currentLang === "en" && "Clear"}
                {currentLang === "de" && "Löschen"}
              </button>

              {/* HISTORY LIST */}
              <div className="space-y-4">
                {calcHistory.map((item) => (
                  <div
                    key={item.id}
                    className="group p-4 bg-white/5 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition relative cursor-pointer"
                    onClick={() => handleLoadFromHistory(item)}
                  >
                    {/* remove button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeCalculation(item.id);
                      }}
                      className="absolute top-2 right-3 text-red-400 opacity-0 group-hover:opacity-100 transition text-lg"
                    >
                      ×
                    </button>

                    <div className="text-sm text-gray-400 mb-2">
                      {formatTime(item.timestamp)[currentLang]}
                    </div>

                    {/* inputs */}
                    <div className="text-gray-300 text-sm mb-2">
                      {Object.entries(item.inputs).map(([key, val]) => {
                        const field = calc.fields.find((f) => f.id === key);
                        return (
                          <div key={key}>
                            <strong>{field?.label[currentLang]}:</strong> {val}
                          </div>
                        );
                      })}
                    </div>

                    {/* result */}
                    <div className="text-blue-400 font-semibold">
                      {typeof item.result === "object"
                        ? item.result[currentLang]
                        : item.result}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MAIN BLOCKS (Inputs + Right Column) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT COLUMN — INPUTS */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                🧮{" "}
                {currentLang === "uk" && "Розрахунок"}
                {currentLang === "ru" && "Расчет"}
                {currentLang === "en" && "Calculation"}
                {currentLang === "de" && "Berechnung"}
              </h2>

              <div className="space-y-6">
                {calc.fields.map((field) => (
                  <EnhancedInput
                    key={field.id}
                    field={field}
                    value={formData[field.id] ?? ""}
                    onChange={(value) => handleInputChange(field.id, value)}
                    error={errors[field.id]}
                    currentLang={currentLang}
                    showSlider={true}
                    showUnit={true}
                    onKeyPress={handleKeyPress}
                  />
                ))}
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex gap-4 mt-8 flex-wrap">
                {/* Calculate */}
                {isCalculating ? (
                  <button
                    disabled
                    className="px-6 py-3 bg-blue-500/30 border border-blue-500/50 rounded-xl text-white"
                  >
                    {currentLang === "uk" && "Розрахунок..."}
                    {currentLang === "ru" && "Расчет..."}
                    {currentLang === "en" && "Calculating..."}
                    {currentLang === "de" && "Berechnung..."}
                  </button>
                ) : (
                  <button
                    onClick={handleCalculate}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold hover:scale-105 transition"
                  >
                    {t.calculate ?? "Calculate"}
                  </button>
                )}

                {/* Reset */}
                {result && (
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl border border-gray-500/40 transition"
                  >
                    {currentLang === "uk" && "Скинути"}
                    {currentLang === "ru" && "Сбросить"}
                    {currentLang === "en" && "Reset"}
                    {currentLang === "de" && "Zurücksetzen"}
                  </button>
                )}
              </div>

              {/* RESULT */}
              {showResult && result && (
                <div className="mt-10 p-6 bg-white/5 border border-blue-500/20 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4">
                    {t.result ?? "Result"}
                  </h3>

                  <div className="text-3xl font-semibold text-blue-400 mb-4">
                    {typeof result === "object"
                      ? result[currentLang]
                      : result}
                  </div>

                  {/* PDF Export Button */}
                  <button
                    onClick={handleExportPDF}
                    className="px-5 py-3 bg-blue-500/20 hover:bg-blue-500/40 border border-blue-400/40 rounded-xl transition flex items-center gap-2"
                  >
                    📄
                    {currentLang === "uk" && "Експортувати як PDF"}
                    {currentLang === "ru" && "Экспортировать как PDF"}
                    {currentLang === "en" && "Export as PDF"}
                    {currentLang === "de" && "Als PDF exportieren"}
                  </button>

                  <p className="text-sm text-gray-400 mt-4">
                    {currentLang === "uk" &&
                      "💡 Підказка: Натисніть Enter для швидкого розрахунку"}
                    {currentLang === "ru" &&
                      "💡 Подсказка: Нажмите Enter для быстрого расчета"}
                    {currentLang === "en" &&
                      "💡 Tip: Press Enter for quick calculation"}
                    {currentLang === "de" &&
                      "💡 Tipp: Drücken Sie Enter für schnelle Berechnung"}
                  </p>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN — THEORY & RELATED */}
            <div>
              {/* Theory */}
              {metadata.theory && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-3">
                    📖{" "}
                    {currentLang === "uk" && "Теорія"}
                    {currentLang === "ru" && "Теория"}
                    {currentLang === "en" && "Theory"}
                    {currentLang === "de" && "Theorie"}
                  </h2>

                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {metadata.theory[currentLang]}
                  </p>
                </div>
              )}

              {/* USE CASES */}
              {metadata.useCases && (
                <div className="mb-16">
                  <h2 className="text-2xl font-bold mb-3">
                    💡{" "}
                    {currentLang === "uk" && "Коли використовувати"}
                    {currentLang === "ru" && "Когда использовать"}
                    {currentLang === "en" && "When to use"}
                    {currentLang === "de" && "Wann zu verwenden"}
                  </h2>

                  <ul className="space-y-2 text-gray-300">
                    {metadata.useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▸</span>
                        <span>{useCase[currentLang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* RELATED CALCULATORS */}
              {relatedCalcs.length > 0 && (
                <div className="mb-20">
                  <h2 className="text-2xl font-bold mb-4">
                    🔗{" "}
                    {currentLang === "uk" && "Схожі калькулятори"}
                    {currentLang === "ru" && "Похожие калькуляторы"}
                    {currentLang === "en" && "Related Calculators"}
                    {currentLang === "de" && "Ähnliche Rechner"}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {relatedCalcs.map((relCalc) => (
                      <Link
                        key={relCalc.slug}
                        to={`/calculator/${relCalc.slug}`}
                        className="block p-5 bg-white/5 rounded-xl border border-blue-500/20 hover:border-blue-500/60 hover:bg-white/10 transition group"
                      >
                        <div className="text-4xl mb-3 group-hover:scale-110 group-hover:rotate-6 transition">
                          {relCalc.icon}
                        </div>

                        <h3 className="text-xl font-bold text-cyan-400 mb-1 group-hover:text-blue-300 transition">
                          {relCalc.title[currentLang]}
                        </h3>

                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition leading-relaxed">
                          {relCalc.desc[currentLang]}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* CTA BLOCK */}
          <div className="mt-24 mb-24 p-10 bg-white/5 border border-blue-500/20 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              {currentLang === "uk" && "📞 Потрібна допомога з розрахунками?"}
              {currentLang === "ru" && "📞 Нужна помощь с расчетами?"}
              {currentLang === "en" && "📞 Need help with calculations?"}
              {currentLang === "de" && "📞 Brauchen Sie Hilfe bei Berechnungen?"}
            </h2>

            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              {currentLang === "uk" &&
                "Звертайтесь до нас за консультацією професійного інженера"}
              {currentLang === "ru" &&
                "Обращайтесь к нам за консультацией профессионального инженера"}
              {currentLang === "en" &&
                "Contact us for professional engineering consultation"}
              {currentLang === "de" &&
                "Kontaktieren Sie uns für professionelle Ingenieurberatung"}
            </p>

            <button
              onClick={() => navigate("/#contact")}
              className="px-10 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold text-white shadow hover:scale-105 transition"
            >
              {t.contactButtonText ?? "Contact us"}
            </button>
          </div>
        </div>

        <Footer t={t} />
      </div>
    </>
  );
};

export default CalculatorDetail;

// src/App.jsx - УНІФІКОВАНА ВЕРСІЯ БЕЗ МОДАЛОК
import "katex/dist/katex.min.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { translations } from "./data/translations";

// ІМПОРТ СТОРІНОК
import HomePage from "./pages/HomePage";
import VideosPage from "./pages/VideosPage";
import AdminPage from "./admin/AdminPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";

// ІМПОРТ КОМПОНЕНТА SCROLL TO TOP
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate";

// ДОВІДКА - ГОЛОВНА СТОРІНКА
import ReferencePage from "./pages/ReferencePage";

// ДОВІДКА - РОЗДІЛИ
import ReferenceMathPage from "./pages/ReferenceMathPage";
import ReferenceStrengthPage from "./pages/ReferenceStrengthPage";
import ReferenceHydraulicPage from "./pages/ReferenceHydraulicsPage"; // Створіть аналогічно
import ReferenceThermalPage from "./pages/ReferenceThermalPage"; // Створіть аналогічно
// import ReferenceMassPage from "./pages/ReferenceMassPage";            // Створіть аналогічно
import ReferenceMassTransferPage from "./pages/ReferenceMassTransferPage"; // Створіть аналогічно
import ReferenceHydromechanicsPage from "./pages/ReferenceHydromechanicsPage"; // Створіть аналогічно

import CalculatorsPage from "./pages/CalculatorsPage";
import CalculatorDetail from "./pages/CalculatorDetail";
import LibraryPage from "./pages/LibraryPage";
// import ShellTubeHeatExchangerCalculator from './components/ShellTubeHeatExchangerCalculator';

import DiffusionFlatWallPage from "@/pages/massTransfer/DiffusionFlatWallPage";
import ReferenceWaterPage from "./pages/ReferenceWaterPage";

// ГОЛОВНИЙ КОМПОНЕНТ APP
function App() {
  // Отримуємо збережену мову або встановлюємо EN за замовчуванням
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem("preferredLang") || "en";
  });

  // Зберігаємо мову при зміні
  useEffect(() => {
    localStorage.setItem("preferredLang", currentLang);
  }, [currentLang]);

  // Визначаємо basename автоматично з Vite конфігурації
  const basename = import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename={basename}>
      <div className="App">
        {/* Navbar на всіх сторінках */}
        <Navbar
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
          t={translations[currentLang]}
        />

        {/* Автоматична прокрутка наверх при зміні сторінки */}
        <ScrollToTopOnNavigate />

        <Routes>
          {/* ГОЛОВНА СТОРІНКА */}
          <Route path="/" element={<HomePage currentLang={currentLang} />} />

          <Route
            path="/services"
            element={<ServicesPage currentLang={currentLang} />}
          />
          <Route
            path="/about"
            element={<AboutPage currentLang={currentLang} />}
          />
          <Route
            path="/projects"
            element={<ProjectsPage currentLang={currentLang} />}
          />
          <Route
            path="/testimonials"
            element={<TestimonialsPage currentLang={currentLang} />}
          />
          <Route path="/faq" element={<FAQPage currentLang={currentLang} />} />
          <Route
            path="/contact"
            element={<ContactPage currentLang={currentLang} />}
          />

          {/* КАТАЛОГ КАЛЬКУЛЯТОРІВ */}
          <Route
            path="/calculators"
            element={
              <CalculatorsPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                t={translations[currentLang]}
              />
            }
          />

          {/* ДЕТАЛЬНА СТОРІНКА КАЛЬКУЛЯТОРА */}
          <Route
            path="/calculator/:slug"
            element={
              <CalculatorDetail
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                t={translations[currentLang]}
              />
            }
          />

          <Route
            path="/calculators/mass-transfer/diffusion-flat-wall"
            element={<DiffusionFlatWallPage currentLang={currentLang} />}
          />

          {/* СТОРІНКА З ВІДЕО */}
          <Route
            path="/videos"
            element={
              <VideosPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                t={translations[currentLang]}
              />
            }
          />

          {/* СТОРІНКА З БІБЛІОТЕКОЮ */}
          <Route
            path="/library"
            element={
              <LibraryPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                t={translations[currentLang]}
              />
            }
          />

          {/* 👇 НОВИЙ МАРШРУТ - АДМІН ПАНЕЛЬ */}
          <Route
            path="/admin"
            element={
              <AdminPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                t={translations[currentLang]}
              />
            }
          />

          {/* 👇 НОВА СТОРІНКА - ДОВІДКОВІ ДАНІ */}
          {/* ============ ДОВІДКА ============ */}

          {/* Головна сторінка довідки */}
          <Route
            path="/reference"
            element={
              <ReferencePage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                t={translations[currentLang]}
              />
            }
          />

          {/* Властивості води */}
          <Route
            path="/reference/waterProperties"
            element={
              <ReferenceWaterPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                t={translations[currentLang]}
              />
            }
          />

          {/* Математика */}
          <Route
            path="/reference/math"
            element={
              <ReferenceMathPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                t={translations[currentLang]}
              />
            }
          />

          {/* Опір матеріалів */}
          <Route
            path="/reference/strength"
            element={
              <ReferenceStrengthPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                t={translations[currentLang]}
              />
            }
          />

          {/* Гідравліка */}
          <Route
            path="/reference/hydraulic"
            element={
              <ReferenceHydraulicPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                t={translations[currentLang]}
              />
            }
          />

          {/* Гідромеханіка */}
          <Route
            path="/reference/hydromechanics"
            element={
              <ReferenceHydromechanicsPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                t={translations[currentLang]}
              />
            }
          />

          {/* Теплообмін */}
          <Route
            path="/reference/thermal"
            element={
              <ReferenceThermalPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                t={translations[currentLang]}
              />
            }
          />

          {/* Масообмін */}
          <Route
            path="/reference/mass"
            element={
              <ReferenceMassTransferPage
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
                t={translations[currentLang]}
              />
            }
          />

          {/* ============ 404 - НЕ ЗНАЙДЕНО ============ */}
          <Route
            path="*"
            element={
              <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-8">🔍</div>
                  <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                    404
                  </h1>
                  <p className="text-2xl text-gray-400 mb-8">
                    {currentLang === "uk" && "Сторінку не знайдено"}
                    {currentLang === "ru" && "Страница не найдена"}
                    {currentLang === "en" && "Page not found"}
                    {currentLang === "de" && "Seite nicht gefunden"}
                  </p>
                  <button
                    onClick={() => (window.location.href = basename)}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  >
                    {currentLang === "uk" && "Повернутися на головну"}
                    {currentLang === "ru" && "Вернуться на главную"}
                    {currentLang === "en" && "Back to home"}
                    {currentLang === "de" && "Zurück zur Startseite"}
                  </button>
                </div>
              </div>
            }
          />
        </Routes>

        {/* <ShellTubeHeatExchangerCalculator currentLang="uk" /> */}

        {/* КНОПКА ПОВЕРНЕННЯ НАВЕРХ */}
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;

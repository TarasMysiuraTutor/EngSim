// src/App.jsx - ОНОВЛЕНИЙ З РОУТОМ ДЛЯ ВІДЕО
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import CalculatorModal from "./components/CalculatorModal";
import { translations } from "./data/translations";
import { calculators } from "./data/calculators";

// ІМПОРТ СТОРІНОК
import HomePage from "./pages/HomePage";
import CalculatorsPage from "./pages/CalculatorsPage";
import CalculatorDetail from "./pages/CalculatorDetail";
import VideosPage from "./pages/VideosPage"; // 👈 НОВИЙ ІМПОРТ

// ГОЛОВНИЙ КОМПОНЕНТ APP З РОУТИНГОМ
function App() {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem("preferredLang") || "en";
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCalc, setCurrentCalc] = useState(null);

  useEffect(() => {
    localStorage.setItem("preferredLang", currentLang);
  }, [currentLang]);

  const openCalculator = (calcKey) => {
    setCurrentCalc(calcKey);
    setModalOpen(true);
  };

  const closeCalculator = () => {
    setModalOpen(false);
    setCurrentCalc(null);
  };

  const basename = import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename={basename}>
      <div className="App">
        <Navbar
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
          t={translations[currentLang]}
        />

        <Routes>
          {/* ГОЛОВНА СТОРІНКА */}
          <Route 
            path="/" 
            element={
              <HomePage 
                currentLang={currentLang}
                openCalculator={openCalculator}
              />
            } 
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

          {/* 👇 НОВА СТОРІНКА З ВІДЕО */}
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
        </Routes>

        {/* МОДАЛЬНЕ ВІКНО (працює на головній сторінці) */}
        {modalOpen && currentCalc && (
          <CalculatorModal
            currentCalc={currentCalc}
            currentLang={currentLang}
            calculators={calculators}
            t={translations[currentLang]}
            onClose={closeCalculator}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
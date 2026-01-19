// src/App.jsx - УНІФІКОВАНА ВЕРСІЯ БЕЗ МОДАЛОК
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { translations } from "./data/translations";

// ІМПОРТ СТОРІНОК
import HomePage from "./pages/HomePage";
import CalculatorsPage from "./pages/CalculatorsPage";
import CalculatorDetail from "./pages/CalculatorDetail";
import VideosPage from "./pages/VideosPage";
import AdminPage from "./pages/AdminPage";

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

        <Routes>
          {/* ГОЛОВНА СТОРІНКА */}
          <Route 
            path="/" 
            element={
              <HomePage 
                currentLang={currentLang}
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

          {/* 👇 НОВИЙ МАРШРУТ - АДМІН ПАНЕЛЬ */}
          <Route path="/admin" element={
            <AdminPage 
              currentLang={currentLang}
              setCurrentLang={setCurrentLang}
              t={translations[currentLang]}
            />
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
// src/App.jsx - ОНОВЛЕНИЙ З РОУТИНГОМ
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Calculators from "./components/Calculators";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CalculatorModal from "./components/CalculatorModal";
import { translations } from "./data/translations";
import { calculators } from "./data/calculators";
import FAQ from "./components/FAQ";
import Breadcrumbs from "./components/Breadcrumbs";
import { useBreadcrumbs } from "./hooks/useBreadcrumbs";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

// НОВІ ІМПОРТИ
import CalculatorsPage from "./pages/CalculatorsPage";
import CalculatorDetail from "./pages/CalculatorDetail";

// Компонент головної сторінки (існуюча структура)
function HomePage({ currentLang, setCurrentLang, openCalculator }) {
  const [activeSection, setActiveSection] = useState("home");

  const {
    breadcrumbs,
    setHomeBreadcrumbs,
    setCalculatorsBreadcrumbs,
    setFAQBreadcrumbs,
    setContactBreadcrumbs,
  } = useBreadcrumbs(currentLang);

  // Відстежуємо поточну секцію
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "calculators", "faq", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Оновлюємо breadcrumbs при зміні секції
  useEffect(() => {
    switch (activeSection) {
      case "home":
        setHomeBreadcrumbs();
        break;
      case "calculators":
        setCalculatorsBreadcrumbs();
        break;
      case "faq":
        setFAQBreadcrumbs();
        break;
      case "contact":
        setContactBreadcrumbs();
        break;
      default:
        setHomeBreadcrumbs();
    }
  }, [
    activeSection,
    setHomeBreadcrumbs,
    setCalculatorsBreadcrumbs,
    setFAQBreadcrumbs,
    setContactBreadcrumbs,
  ]);

  return (
    <>
      {/* Header */}
      <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200">
        <Navbar
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
          t={translations[currentLang]}
        />
        <Hero t={translations[currentLang]} />
      </div>

      {/* Breadcrumbs - показуються тільки якщо не на головній */}
      {breadcrumbs.length > 0 && (
        <Breadcrumbs items={breadcrumbs} currentLang={currentLang} />
      )}

      <Services t={translations[currentLang]} />

      <About t={translations[currentLang]} /> 

      <Projects t={translations[currentLang]} currentLang={currentLang} />

      <Testimonials t={translations[currentLang]} /> 

      <Calculators
        t={translations[currentLang]}
        currentLang={currentLang}
        openCalculator={openCalculator}
        calculators={calculators}
      />

      <FAQ currentLang={currentLang} />

      <Contact t={translations[currentLang]} currentLang={currentLang} />

      <Footer t={translations[currentLang]} />
    </>
  );
}

// ГОЛОВНИЙ КОМПОНЕНТ APP З РОУТИНГОМ
function App() {
  // Отримуємо збережену мову або встановлюємо EN за замовчуванням
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem("preferredLang") || "en";
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCalc, setCurrentCalc] = useState(null);

  // Зберігаємо мову при зміні
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

  // Визначаємо basename динамічно: локально - без basename, на GitHub Pages - з "/EngSim"
  const basename = import.meta.env.MODE === 'production' ? '/EngSim' : '';

  return (
    <BrowserRouter basename="/EngSim">
      <div className="App">
        <Routes>
          {/* ГОЛОВНА СТОРІНКА - існуюча структура */}
          <Route 
            path="/" 
            element={
              <HomePage 
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
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
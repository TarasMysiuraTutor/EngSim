import React, { useState, useEffect } from "react";
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

  // Закриття dropdown при кліку поза ним
  useEffect(() => {
    const handleClickOutside = () => {
      // Логіка закриття dropdown буде в Navbar
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const openCalculator = (calcKey) => {
    setCurrentCalc(calcKey);
    setModalOpen(true);
  };

  const closeCalculator = () => {
    setModalOpen(false);
    setCurrentCalc(null);
  };

  // const [currentLang, setCurrentLang] = useState("de");
  const [activeSection, setActiveSection] = useState("home");

  const {
    breadcrumbs,
    setHomeBreadcrumbs,
    setCalculatorsBreadcrumbs,
    setCalculatorDetailBreadcrumbs,
    setContactBreadcrumbs,
    setFAQBreadcrumbs,
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
    <div className="App">
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

      <Projects t={translations[currentLang]} currentLang={currentLang} />

      <Calculators
        t={translations[currentLang]}
        currentLang={currentLang}
        openCalculator={openCalculator}
        calculators={calculators}
      />

      <FAQ currentLang={currentLang} />

      <Contact t={translations[currentLang]} currentLang={currentLang} />

      <Footer t={translations[currentLang]} />

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
  );
}

export default App;

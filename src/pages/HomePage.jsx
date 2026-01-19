// src/pages/HomePage.jsx - БЕЗ МОДАЛЬНИХ ВІКОН
import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Calculators from "../components/Calculators";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Breadcrumbs from "../components/Breadcrumbs";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import { useBreadcrumbs } from "../hooks/useBreadcrumbs";
import { translations } from "../data/translations";
import { calculators } from "../data/calculators";

function HomePage({ currentLang }) {
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
      const sections = ["home", "services", "about", "projects", "testimonials", "calculators", "faq", "contact"];

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
        <Hero t={translations[currentLang]} />
      </div>

      {/* Breadcrumbs */}
      {breadcrumbs.length > 0 && (
        <Breadcrumbs items={breadcrumbs} currentLang={currentLang} />
      )}

      <Services t={translations[currentLang]} />

      <About t={translations[currentLang]} /> 

      <Projects t={translations[currentLang]} currentLang={currentLang} />

      <Testimonials t={translations[currentLang]} /> 

      {/* 👇 ОНОВЛЕНИЙ КОМПОНЕНТ - БЕЗ openCalculator */}
      <Calculators
        t={translations[currentLang]}
        currentLang={currentLang}
        calculators={calculators}
      />

      <FAQ currentLang={currentLang} />

      <Contact t={translations[currentLang]} currentLang={currentLang} />

      <Footer t={translations[currentLang]} currentLang={currentLang} />
    </>
  );
}

export default HomePage;
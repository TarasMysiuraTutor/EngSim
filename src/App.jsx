import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Calculators from './components/Calculators';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CalculatorModal from './components/CalculatorModal';
import { translations } from './data/translations';
import { calculators } from './data/calculators';

function App() {
  // Отримуємо збережену мову або встановлюємо EN за замовчуванням
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('preferredLang') || 'en';
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCalc, setCurrentCalc] = useState(null);

  // Зберігаємо мову при зміні
  useEffect(() => {
    localStorage.setItem('preferredLang', currentLang);
  }, [currentLang]);

  // Закриття dropdown при кліку поза ним
  useEffect(() => {
    const handleClickOutside = () => {
      // Логіка закриття dropdown буде в Navbar
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const openCalculator = (calcKey) => {
    setCurrentCalc(calcKey);
    setModalOpen(true);
  };

  const closeCalculator = () => {
    setModalOpen(false);
    setCurrentCalc(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200">
      <Navbar
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
        t={translations[currentLang]}
      />
      
      <Hero t={translations[currentLang]} />
      
      <Services t={translations[currentLang]} />
      
      <Calculators
        t={translations[currentLang]}
        currentLang={currentLang}
        openCalculator={openCalculator}
        calculators={calculators}
      />
      
      <Projects
        t={translations[currentLang]}
        currentLang={currentLang}
      />
      
      <Contact
        t={translations[currentLang]}
        currentLang={currentLang}
      />
      
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
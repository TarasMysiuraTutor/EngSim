// src/components/ScrollToTop.jsx
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Показувати кнопку коли користувач прокрутив вниз
  useEffect(() => {
    const toggleVisibility = () => {
      const currentScroll = window.pageYOffset;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Показувати кнопку після 400px прокрутки
      if (currentScroll > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // Розрахунок прогресу прокрутки для круглого індикатора
      if (scrollHeight > 0) {
        const progress = Math.min((currentScroll / scrollHeight) * 100, 100);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    // Виконати один раз при завантаженні
    toggleVisibility();
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Плавна прокрутка наверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 group flex items-center justify-center"
          aria-label="Scroll to top"
          title="Повернутися наверх"
        >
          {/* Круговий прогрес-бар */}
          <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 56 56">
            {/* Фоновий круг */}
            <circle
              cx="28"
              cy="28"
              r="25"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="3"
              fill="none"
            />
            {/* Прогрес круг */}
            <circle
              cx="28"
              cy="28"
              r="25"
              stroke="white"
              strokeWidth="3"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 25}`}
              strokeDashoffset={`${2 * Math.PI * 25 * (1 - scrollProgress / 100)}`}
              className="transition-all duration-150"
              strokeLinecap="round"
            />
          </svg>
          
          {/* Іконка стрілки */}
          <svg
            className="w-5 h-5 md:w-6 md:h-6 relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
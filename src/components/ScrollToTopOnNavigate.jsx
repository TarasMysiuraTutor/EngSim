// src/components/ScrollToTopOnNavigate.jsx
// Цей компонент автоматично прокручує сторінку наверх при зміні роуту
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Прокручуємо наверх при зміні URL
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Миттєво, без анімації
    //   behavior: 'smooth' // Замість 'instant'
    });
  }, [pathname]); // Спрацьовує кожного разу коли змінюється pathname

  return null; // Цей компонент нічого не рендерить
};

export default ScrollToTopOnNavigate;
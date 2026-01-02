import React, { useState, useEffect } from 'react';

const CookieConsent = ({ currentLang }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Перевіряємо чи користувач вже дав згоду
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    // Тут можна увімкнути Google Analytics або інші трекери
    // window.gtag('consent', 'update', { 'analytics_storage': 'granted' });
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  const texts = {
    de: {
      title: 'Cookie-Einstellungen',
      description: 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Diese Website verwendet nur technisch notwendige Cookies. Keine Tracking-Cookies.',
      accept: 'Akzeptieren',
      decline: 'Ablehnen',
      privacy: 'Datenschutzerklärung'
    },
    en: {
      title: 'Cookie Settings',
      description: 'We use cookies to improve your experience on our website. This site only uses technically necessary cookies. No tracking cookies.',
      accept: 'Accept',
      decline: 'Decline',
      privacy: 'Privacy Policy'
    },
    uk: {
      title: 'Налаштування Cookie',
      description: 'Ми використовуємо cookies для покращення вашого досвіду. Цей сайт використовує лише технічно необхідні cookies. Без відстеження.',
      accept: 'Прийняти',
      decline: 'Відхилити',
      privacy: 'Політика конфіденційності'
    },
    ru: {
      title: 'Настройки Cookie',
      description: 'Мы используем cookies для улучшения вашего опыта. Этот сайт использует только технически необходимые cookies. Без отслеживания.',
      accept: 'Принять',
      decline: 'Отклонить',
      privacy: 'Политика конфиденциальности'
    }
  };

  const t = texts[currentLang] || texts.de;

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900/95 backdrop-blur-lg border-t border-gray-700 shadow-2xl animate-slideUp">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">
              🍪 {t.title}
            </h3>
            <p className="text-sm text-gray-300">
              {t.description}
            </p>
          </div>
          
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
            >
              {t.decline}
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200 font-semibold"
            >
              {t.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
// src/components/LegalModal.jsx - ВИПРАВЛЕНА ВЕРСІЯ
import React, { useEffect } from 'react';

const LegalModal = ({ isOpen, onClose, type, t, currentLang }) => {
  // Закрити при натисканні Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? t.privacyTitle : t.termsTitle;
  const intro = isPrivacy ? t.privacyIntro : t.termsIntro;
  const contactLabel = isPrivacy ? t.privacyContact : t.termsContact;

  // Контент для Privacy Policy - ТУТ ТЕПЕР ВСІ МОВИ
  const privacyContent = [
    { title: t.privacySection1Title, text: t.privacySection1Text },
    { title: t.privacySection2Title, text: t.privacySection2Text },
    { title: t.privacySection3Title, text: t.privacySection3Text },
    { title: t.privacySection4Title, text: t.privacySection4Text },
    { title: t.privacySection5Title, text: t.privacySection5Text },
  ];

  // Контент для Terms of Use - ТУТ ТЕПЕР ВСІ МОВИ
  const termsContent = [
    { title: t.termsSection1Title, text: t.termsSection1Text },
    { title: t.termsSection2Title, text: t.termsSection2Text },
    { title: t.termsSection3Title, text: t.termsSection3Text },
    { title: t.termsSection4Title, text: t.termsSection4Text },
    { title: t.termsSection5Title, text: t.termsSection5Text },
    { title: t.termsSection6Title, text: t.termsSection6Text },
  ];

  const content = isPrivacy ? privacyContent : termsContent;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] border border-blue-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-blue-500/20 flex items-center justify-between sticky top-0 bg-[#1a1f3a]/95 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>
          
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors duration-300 text-gray-400 hover:text-white"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          {/* Intro */}
          <p className="text-gray-300 text-lg leading-relaxed">
            {intro}
          </p>

          {/* Sections - ТЕПЕР ДЛЯ ВСІХ МОВ */}
          {content.map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xl font-bold text-blue-400 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-sm">
                  {index + 1}
                </span>
                {section.title}
              </h3>
              <div className="pl-10 text-gray-300 leading-relaxed whitespace-pre-line">
                {section.text}
              </div>
            </div>
          ))}

          {/* Contact Info */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-4">
              {contactLabel}
            </h4>
            <div className="space-y-2 text-gray-300">
              <a href="mailto:viktor.sukaylo@example.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                viktor.sukaylo@example.com
              </a>
              <a href="tel:+380XXXXXXXXX" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +380 XX XXX XX XX
              </a>
            </div>
          </div>

          {/* Last updated */}
          <p className="text-sm text-gray-500 text-center pt-4">
            {currentLang === 'uk' && 'Останнє оновлення: Січень 2026'}
            {currentLang === 'ru' && 'Последнее обновление: Январь 2026'}
            {currentLang === 'en' && 'Last updated: January 2026'}
            {currentLang === 'de' && 'Letzte Aktualisierung: Januar 2026'}
          </p>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-blue-500/20 bg-[#1a1f3a]/95 backdrop-blur-sm">
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            {t.close || 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
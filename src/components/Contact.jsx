import React, { useState } from 'react';

const Contact = ({ t, currentLang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = {
        uk: 'Введіть ваше ім\'я',
        ru: 'Введите ваше имя',
        en: 'Enter your name',
        de: 'Geben Sie Ihren Namen ein'
      }[currentLang];
    }
    
    if (!formData.email.trim()) {
      newErrors.email = {
        uk: 'Введіть email',
        ru: 'Введите email',
        en: 'Enter email',
        de: 'Geben Sie E-Mail ein'
      }[currentLang];
    } else if (!validateEmail(formData.email)) {
      newErrors.email = {
        uk: 'Невірний формат email',
        ru: 'Неверный формат email',
        en: 'Invalid email format',
        de: 'Ungültiges E-Mail-Format'
      }[currentLang];
    }
    
    if (!formData.message.trim()) {
      newErrors.message = {
        uk: 'Введіть повідомлення',
        ru: 'Введите сообщение',
        en: 'Enter message',
        de: 'Geben Sie eine Nachricht ein'
      }[currentLang];
    } else if (formData.message.trim().length < 10) {
      newErrors.message = {
        uk: 'Повідомлення занадто коротке (мінімум 10 символів)',
        ru: 'Сообщение слишком короткое (минимум 10 символов)',
        en: 'Message too short (minimum 10 characters)',
        de: 'Nachricht zu kurz (mindestens 10 Zeichen)'
      }[currentLang];
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Симуляція відправки
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Очищаємо помилку при введенні
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-custom"></div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent animate-fadeInUp">
        {t.contactTitle}
      </h2>
      
      <div className="max-w-2xl mx-auto">
        {submitted && (
          <div className="mb-8 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-300 text-center animate-fadeIn">
            {currentLang === 'uk' && '✓ Дякую! Ваше повідомлення надіслано.'}
            {currentLang === 'ru' && '✓ Спасибо! Ваше сообщение отправлено.'}
            {currentLang === 'en' && '✓ Thank you! Your message has been sent.'}
            {currentLang === 'de' && '✓ Danke! Ihre Nachricht wurde gesendet.'}
          </div>
        )}
        
        <div className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contactName}
              className={`w-full px-6 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.name 
                  ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50' 
                  : 'border-blue-500/30 focus:border-blue-500 focus:ring-blue-500/50'
              }`}
            />
            {errors.name && (
              <p className="mt-2 text-red-400 text-sm animate-fadeIn">{errors.name}</p>
            )}
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.contactEmail}
              className={`w-full px-6 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.email 
                  ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50' 
                  : 'border-blue-500/30 focus:border-blue-500 focus:ring-blue-500/50'
              }`}
            />
            {errors.email && (
              <p className="mt-2 text-red-400 text-sm animate-fadeIn">{errors.email}</p>
            )}
          </div>
          
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.contactMessage}
              rows="6"
              className={`w-full px-6 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                errors.message 
                  ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50' 
                  : 'border-blue-500/30 focus:border-blue-500 focus:ring-blue-500/50'
              }`}
            ></textarea>
            {errors.message && (
              <p className="mt-2 text-red-400 text-sm animate-fadeIn">{errors.message}</p>
            )}
          </div>
          
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
              isSubmitting 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:shadow-lg hover:shadow-blue-500/50 hover-lift'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {currentLang === 'uk' && 'Надсилання...'}
                {currentLang === 'ru' && 'Отправка...'}
                {currentLang === 'en' && 'Sending...'}
                {currentLang === 'de' && 'Wird gesendet...'}
              </span>
            ) : (
              t.contactSubmit
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
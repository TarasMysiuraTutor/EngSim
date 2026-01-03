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
  const [submitError, setSubmitError] = useState(false);

  // Конфігурація соціальних мереж
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/your-profile', // ЗАМІНІТЬ на своє посилання
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'from-blue-600 to-blue-500'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/your-profile', // ЗАМІНІТЬ на своє посилання
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'from-pink-600 to-purple-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/your-profile', // ЗАМІНІТЬ на своє посилання
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'from-blue-700 to-blue-600'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/your-username', // ЗАМІНІТЬ на своє посилання
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      color: 'from-blue-500 to-blue-400'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/TarasMysiuraTutor', // Вже є у вас
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'from-gray-700 to-gray-600'
    },
    {
      name: 'Email',
      url: 'mailto:your-email@example.com', // ЗАМІНІТЬ на свій email
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-red-600 to-red-500'
    }
  ];

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      // Formspree - відправка форми
      const response = await fetch('https://formspree.io/f/mdakggvj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Message sending failed:', error);
      setIsSubmitting(false);
      setSubmitError(true);
      
      setTimeout(() => setSubmitError(false), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-8 relative overflow-hidden bg-[#0a0e27]/40">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-custom"></div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent animate-fadeInUp">
        {t.contactTitle}
      </h2>

      {/* Соціальні мережі */}
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold text-center mb-6 text-gray-300">
          {currentLang === 'uk' && 'Соціальні мережі'}
          {currentLang === 'ru' && 'Социальные сети'}
          {currentLang === 'en' && 'Social Media'}
          {currentLang === 'de' && 'Soziale Medien'}
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col items-center justify-center p-6 bg-gradient-to-br ${social.color} rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-${social.color}/50`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="text-white mb-2 transition-transform duration-300 group-hover:scale-110">
                {social.icon}
              </div>
              <span className="text-white text-sm font-medium">{social.name}</span>
              
              {/* Ефект світіння при hover */}
              <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>
      </div>
      
      {/* Форма контактів */}
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">
          {currentLang === 'uk' && 'Або надішліть нам повідомлення'}
          {currentLang === 'ru' && 'Или отправьте нам сообщение'}
          {currentLang === 'en' && 'Or send us a message'}
          {currentLang === 'de' && 'Oder senden Sie uns eine Nachricht'}
        </h3>

        {submitted && (
          <div className="mb-8 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-300 text-center animate-fadeIn">
            {currentLang === 'uk' && '✓ Дякую! Ваше повідомлення надіслано.'}
            {currentLang === 'ru' && '✓ Спасибо! Ваше сообщение отправлено.'}
            {currentLang === 'en' && '✓ Thank you! Your message has been sent.'}
            {currentLang === 'de' && '✓ Danke! Ihre Nachricht wurde gesendet.'}
          </div>
        )}

        {submitError && (
          <div className="mb-8 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-300 text-center animate-fadeIn">
            {currentLang === 'uk' && '✗ Помилка відправки. Спробуйте ще раз або напишіть нам напряму.'}
            {currentLang === 'ru' && '✗ Ошибка отправки. Попробуйте еще раз или напишите нам напрямую.'}
            {currentLang === 'en' && '✗ Sending error. Try again or contact us directly.'}
            {currentLang === 'de' && '✗ Sendefehler. Versuchen Sie es erneut oder kontaktieren Sie uns direkt.'}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contactName}
              autoComplete="name"
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
              autoComplete="email"
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
            type="submit"
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
        </form>
      </div>
    </section>
  );
};

export default Contact;
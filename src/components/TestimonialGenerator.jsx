// src/components/TestimonialGenerator.jsx
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const TestimonialGenerator = () => {
  const [copied, setCopied] = useState(false);
  const [testimonialData, setTestimonialData] = useState({
    id: '',
    name: { uk: '', ru: '', en: '', de: '' },
    role: { uk: '', ru: '', en: '', de: '' },
    company: { uk: '', ru: '', en: '', de: '' },
    text: { uk: '', ru: '', en: '', de: '' },
    rating: 5,
    initials: '',
    verified: true,
    date: new Date().toISOString().split('T')[0]
  });

  const languages = [
    { code: 'uk', label: 'Українська', flag: '🇺🇦' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
  ];

  const handleInputChange = (field, value) => {
    setTestimonialData(prev => ({ ...prev, [field]: value }));
  };

  const handleTranslationChange = (field, lang, value) => {
    setTestimonialData(prev => ({
      ...prev,
      [field]: { ...prev[field], [lang]: value }
    }));
  };

  const generateCode = () => {
    return `  {
    id: ${testimonialData.id},
    name: {
      uk: '${testimonialData.name.uk}',
      ru: '${testimonialData.name.ru}',
      en: '${testimonialData.name.en}',
      de: '${testimonialData.name.de}'
    },
    role: {
      uk: '${testimonialData.role.uk}',
      ru: '${testimonialData.role.ru}',
      en: '${testimonialData.role.en}',
      de: '${testimonialData.role.de}'
    },
    company: {
      uk: '${testimonialData.company.uk}',
      ru: '${testimonialData.company.ru}',
      en: '${testimonialData.company.en}',
      de: '${testimonialData.company.de}'
    },
    text: {
      uk: '${testimonialData.text.uk}',
      ru: '${testimonialData.text.ru}',
      en: '${testimonialData.text.en}',
      de: '${testimonialData.text.de}'
    },
    rating: ${testimonialData.rating},
    initials: '${testimonialData.initials}',
    verified: ${testimonialData.verified},
    date: '${testimonialData.date}'
  },`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Основна інформація */}
      <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">📋 Основна інформація</h2>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">ID відгуку</label>
            <input
              type="number"
              value={testimonialData.id}
              onChange={(e) => handleInputChange('id', e.target.value)}
              className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              placeholder="1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Ініціали (2 літери)</label>
            <input
              type="text"
              maxLength="2"
              value={testimonialData.initials}
              onChange={(e) => handleInputChange('initials', e.target.value.toUpperCase())}
              className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              placeholder="ОП"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Рейтинг</label>
            <select
              value={testimonialData.rating}
              onChange={(e) => handleInputChange('rating', parseInt(e.target.value))}
              className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{'⭐'.repeat(num)} ({num})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Дата</label>
            <input
              type="date"
              value={testimonialData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={testimonialData.verified}
            onChange={(e) => handleInputChange('verified', e.target.checked)}
            className="w-5 h-5 rounded border-blue-500/30"
          />
          <label className="text-gray-400">✅ Верифікований відгук</label>
        </div>
      </div>

      {/* Імена */}
      <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">👤 Імена</h2>
        {languages.map(lang => (
          <div key={lang.code} className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              {lang.flag} {lang.label}
            </label>
            <input
              type="text"
              value={testimonialData.name[lang.code]}
              onChange={(e) => handleTranslationChange('name', lang.code, e.target.value)}
              className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              placeholder="Олександр Петренко"
            />
          </div>
        ))}
      </div>

      {/* Посади */}
      <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">💼 Посади</h2>
        {languages.map(lang => (
          <div key={lang.code} className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              {lang.flag} {lang.label}
            </label>
            <input
              type="text"
              value={testimonialData.role[lang.code]}
              onChange={(e) => handleTranslationChange('role', lang.code, e.target.value)}
              className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              placeholder="Головний інженер"
            />
          </div>
        ))}
      </div>

      {/* Компанії */}
      <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">🏢 Компанії</h2>
        {languages.map(lang => (
          <div key={lang.code} className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              {lang.flag} {lang.label}
            </label>
            <input
              type="text"
              value={testimonialData.company[lang.code]}
              onChange={(e) => handleTranslationChange('company', lang.code, e.target.value)}
              className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              placeholder="ТехноБуд Україна"
            />
          </div>
        ))}
      </div>

      {/* Тексти відгуків */}
      <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">💬 Текст відгуку</h2>
        {languages.map(lang => (
          <div key={lang.code} className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              {lang.flag} {lang.label}
            </label>
            <textarea
              value={testimonialData.text[lang.code]}
              onChange={(e) => handleTranslationChange('text', lang.code, e.target.value)}
              className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              rows="4"
              placeholder="Професійний підхід до кожного проекту..."
            />
          </div>
        ))}
      </div>

      {/* Згенерований код */}
      <div className="bg-[#0a0e27] border border-blue-500/30 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-cyan-400">💻 Згенерований код</h2>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold hover:scale-105 transition-all"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
            {copied ? 'Скопійовано!' : 'Копіювати'}
          </button>
        </div>
        <div className="bg-black/50 border border-blue-500/20 p-4 rounded-xl overflow-x-auto">
          <pre className="text-green-400 text-sm font-mono">
            {generateCode()}
          </pre>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          💡 Скопіюй цей код та вставте його в масив <code className="text-cyan-400">testimonialsData</code> у файлі <code className="text-cyan-400">src/data/testimonialsData.js</code>
        </p>
      </div>
    </div>
  );
};

export default TestimonialGenerator;
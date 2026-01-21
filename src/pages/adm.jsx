
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Plus, Trash2, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestimonialGenerator from '../components/TestimonialGenerator';

const AdminPage = ({ currentLang, setCurrentLang, t }) => {
  const [activeTab, setActiveTab] = useState('videos'); // 'videos' або 'testimonials'
  const [copied, setCopied] = useState(false);
  const [videoData, setVideoData] = useState({
    id: '',
    youtubeId: '',
    category: 'flownex',
    duration: '',
    date: new Date().toISOString().split('T')[0],
    title: { uk: '', ru: '', en: '', de: '' },
    description: { uk: '', ru: '', en: '', de: '' },
    thumbnail: { uk: '', ru: '', en: '', de: '' },
    instructions: {
      uk: { url: '', filename: '', size: '' },
      ru: { url: '', filename: '', size: '' },
      en: { url: '', filename: '', size: '' },
      de: { url: '', filename: '', size: '' }
    },
    resources: []
  });

  const categories = [
    { value: 'flownex', label: 'FlowNEX' },
    { value: 'solidworks', label: 'SolidWorks' },
    { value: 'autocad', label: 'AutoCAD' },
    { value: 'mathcad', label: 'MathCAD' }
  ];

  const languages = [
    { code: 'uk', label: 'Українська', flag: '🇺🇦' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
  ];

  const handleInputChange = (field, value) => {
    setVideoData(prev => ({ ...prev, [field]: value }));
  };

  const handleTranslationChange = (field, lang, value) => {
    setVideoData(prev => ({
      ...prev,
      [field]: { ...prev[field], [lang]: value }
    }));
  };

  const handleInstructionChange = (lang, field, value) => {
    setVideoData(prev => ({
      ...prev,
      instructions: {
        ...prev.instructions,
        [lang]: { ...prev.instructions[lang], [field]: value }
      }
    }));
  };

  const addResource = () => {
    setVideoData(prev => ({
      ...prev,
      resources: [...prev.resources, {
        type: 'model',
        name: { uk: '', ru: '', en: '', de: '' },
        url: '',
        filename: '',
        size: ''
      }]
    }));
  };

  const removeResource = (index) => {
    setVideoData(prev => ({
      ...prev,
      resources: prev.resources.filter((_, i) => i !== index)
    }));
  };

  const handleResourceChange = (index, field, value) => {
    setVideoData(prev => ({
      ...prev,
      resources: prev.resources.map((res, i) => 
        i === index ? { ...res, [field]: value } : res
      )
    }));
  };

  const handleResourceNameChange = (index, lang, value) => {
    setVideoData(prev => ({
      ...prev,
      resources: prev.resources.map((res, i) => 
        i === index ? { ...res, name: { ...res.name, [lang]: value } } : res
      )
    }));
  };

  const generateVideoCode = () => {
    const categoryName = categories.find(c => c.value === videoData.category)?.label || videoData.category;
    
    return `  {
    id: ${videoData.id},
    title: {
      uk: "${videoData.title.uk}",
      ru: "${videoData.title.ru}",
      en: "${videoData.title.en}",
      de: "${videoData.title.de}",
    },
    description: {
      uk: "${videoData.description.uk}",
      ru: "${videoData.description.ru}",
      en: "${videoData.description.en}",
      de: "${videoData.description.de}",
    },
    youtubeId: "${videoData.youtubeId}",
    category: "${videoData.category}",
    categoryName: {
      uk: "${categoryName}",
      ru: "${categoryName}",
      en: "${categoryName}",
      de: "${categoryName}",
    },
    duration: "${videoData.duration}",
    date: "${videoData.date}",
    thumbnail: {
      uk: "${videoData.thumbnail.uk}",
      ru: "${videoData.thumbnail.ru}",
      en: "${videoData.thumbnail.en}",
      de: "${videoData.thumbnail.de}",
    },
    instructions: {
      uk: {
        url: "${videoData.instructions.uk.url}",
        filename: "${videoData.instructions.uk.filename}",
        size: "${videoData.instructions.uk.size}",
      },
      ru: {
        url: "${videoData.instructions.ru.url}",
        filename: "${videoData.instructions.ru.filename}",
        size: "${videoData.instructions.ru.size}",
      },
      en: {
        url: "${videoData.instructions.en.url}",
        filename: "${videoData.instructions.en.filename}",
        size: "${videoData.instructions.en.size}",
      },
      de: {
        url: "${videoData.instructions.de.url}",
        filename: "${videoData.instructions.de.filename}",
        size: "${videoData.instructions.de.size}",
      },
    },${videoData.resources.length > 0 ? `
    resources: [${videoData.resources.map(res => `
      {
        type: "${res.type}",
        name: {
          uk: "${res.name.uk}",
          ru: "${res.name.ru}",
          en: "${res.name.en}",
          de: "${res.name.de}",
        },
        url: "${res.url}",
        filename: "${res.filename}",
        size: "${res.size}",
      }`).join(',')}
    ],` : ''}
  },`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateVideoCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200">
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />

      <div className="pt-32 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm">
            <Link to="/" className="text-blue-400 hover:text-cyan-400 transition-colors">
              {t.home || 'Home'}
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-400">Admin Panel</span>
          </nav>

          {/* Header */}
          <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-8 mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              ⚙️ Адмін Панель
            </h1>
            <p className="text-gray-400">Генератори контенту для швидкого наповнення даних</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeTab === 'videos'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <span className="text-2xl">🎬</span>
              <span>Генератор відео</span>
            </button>

            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeTab === 'testimonials'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <span className="text-2xl">⭐</span>
              <span>Генератор відгуків</span>
            </button>
          </div>

          {/* Content */}
          {activeTab === 'videos' ? (
            <>
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* ЛІВА КОЛОНКА: Форма відео */}
                <div className="space-y-6">
                  {/* Основна інформація */}
                  <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-cyan-400 mb-4">📋 Основна інформація</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">ID відео</label>
                        <input
                          type="number"
                          value={videoData.id}
                          onChange={(e) => handleInputChange('id', e.target.value)}
                          className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                          placeholder="1"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">YouTube ID</label>
                        <input
                          type="text"
                          value={videoData.youtubeId}
                          onChange={(e) => handleInputChange('youtubeId', e.target.value)}
                          className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                          placeholder="D7DFO0kUESI"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Категорія</label>
                        <select
                          value={videoData.category}
                          onChange={(e) => handleInputChange('category', e.target.value)}
                          className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        >
                          {categories.map(cat => (
                            <option key={cat.value} value={cat.value}>{cat.label}</option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Тривалість</label>
                          <input
                            type="text"
                            value={videoData.duration}
                            onChange={(e) => handleInputChange('duration', e.target.value)}
                            className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            placeholder="20:30"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Дата</label>
                          <input
                            type="date"
                            value={videoData.date}
                            onChange={(e) => handleInputChange('date', e.target.value)}
                            className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Назви */}
                  <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-cyan-400 mb-4">📝 Назви відео</h2>
                    {languages.map(lang => (
                      <div key={lang.code} className="mb-4">
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          {lang.flag} {lang.label}
                        </label>
                        <input
                          type="text"
                          value={videoData.title[lang.code]}
                          onChange={(e) => handleTranslationChange('title', lang.code, e.target.value)}
                          className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* ПРАВА КОЛОНКА: Описи та thumbnails */}
                <div className="space-y-6">
                  {/* Описи */}
                  <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-cyan-400 mb-4">💬 Описи</h2>
                    {languages.map(lang => (
                      <div key={lang.code} className="mb-4">
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          {lang.flag} {lang.label}
                        </label>
                        <textarea
                          value={videoData.description[lang.code]}
                          onChange={(e) => handleTranslationChange('description', lang.code, e.target.value)}
                          className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                          rows="3"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Thumbnails */}
                  <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-cyan-400 mb-4">🖼️ Thumbnails</h2>
                    {languages.map(lang => (
                      <div key={lang.code} className="mb-4">
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          {lang.flag} {lang.label}
                        </label>
                        <input
                          type="text"
                          value={videoData.thumbnail[lang.code]}
                          onChange={(e) => handleTranslationChange('thumbnail', lang.code, e.target.value)}
                          className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                          placeholder="https://res.cloudinary.com/..."
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Інструкції */}
              <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">📄 Інструкції (PDF)</h2>
                {languages.map(lang => (
                  <div key={lang.code} className="mb-4 p-4 bg-[#0a0e27]/50 rounded-xl">
                    <h3 className="font-medium text-gray-300 mb-3">{lang.flag} {lang.label}</h3>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Google Drive URL</label>
                        <input
                          type="text"
                          value={videoData.instructions[lang.code].url}
                          onChange={(e) => handleInstructionChange(lang.code, 'url', e.target.value)}
                          className="w-full px-3 py-2 bg-[#0a0e27] border border-blue-500/20 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                          placeholder="https://drive.google.com/file/d/..."
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Filename</label>
                        <input
                          type="text"
                          value={videoData.instructions[lang.code].filename}
                          onChange={(e) => handleInstructionChange(lang.code, 'filename', e.target.value)}
                          className="w-full px-3 py-2 bg-[#0a0e27] border border-blue-500/20 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                          placeholder="Tutorial 01.pdf"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Size</label>
                        <input
                          type="text"
                          value={videoData.instructions[lang.code].size}
                          onChange={(e) => handleInstructionChange(lang.code, 'size', e.target.value)}
                          className="w-full px-3 py-2 bg-[#0a0e27] border border-blue-500/20 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                          placeholder="831 kB"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ресурси */}
              <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-cyan-400">🗂️ Додаткові ресурси</h2>
                  <button
                    onClick={addResource}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 rounded-xl font-semibold hover:scale-105 transition-all"
                  >
                    <Plus size={20} />
                    Додати ресурс
                  </button>
                </div>
                {videoData.resources.map((resource, index) => (
                  <div key={index} className="mb-4 p-4 bg-[#0a0e27]/50 rounded-xl border-l-4 border-green-500">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-medium text-gray-300">Ресурс #{index + 1}</h3>
                      <button
                        onClick={() => removeResource(index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 mb-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Тип</label>
                        <select
                          value={resource.type}
                          onChange={(e) => handleResourceChange(index, 'type', e.target.value)}
                          className="w-full px-3 py-2 bg-[#0a0e27] border border-blue-500/20 rounded-lg text-sm text-white"
                        >
                          <option value="model">Model</option>
                          <option value="drawing">Drawing</option>
                          <option value="archive">Archive</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">URL</label>
                        <input
                          type="text"
                          value={resource.url}
                          onChange={(e) => handleResourceChange(index, 'url', e.target.value)}
                          className="w-full px-3 py-2 bg-[#0a0e27] border border-blue-500/20 rounded-lg text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Filename</label>
                        <input
                          type="text"
                          value={resource.filename}
                          onChange={(e) => handleResourceChange(index, 'filename', e.target.value)}
                          className="w-full px-3 py-2 bg-[#0a0e27] border border-blue-500/20 rounded-lg text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Size</label>
                        <input
                          type="text"
                          value={resource.size}
                          onChange={(e) => handleResourceChange(index, 'size', e.target.value)}
                          className="w-full px-3 py-2 bg-[#0a0e27] border border-blue-500/20 rounded-lg text-sm text-white"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {languages.map(lang => (
                        <div key={lang.code}>
                          <label className="block text-xs font-medium text-gray-500 mb-1">
                            Назва ({lang.flag} {lang.label})
                          </label>
                          <input
                            type="text"
                            value={resource.name[lang.code]}
                            onChange={(e) => handleResourceNameChange(index, lang.code, e.target.value)}
                            className="w-full px-3 py-2 bg-[#0a0e27] border border-blue-500/20 rounded-lg text-sm text-white"
                          />
                        </div>
                      ))}
                    </div>
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
                    {generateVideoCode()}
                  </pre>
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  💡 Скопіюй цей код та вставте його в масив <code className="text-cyan-400">videosData</code> у файлі <code className="text-cyan-400">src/data/videosData.js</code>
                </p>
              </div>
            </>
          ) : (
            <TestimonialGenerator />
          )}
        </div>
      </div>

      <Footer t={t} />
    </div>
  );
};

export default AdminPage;


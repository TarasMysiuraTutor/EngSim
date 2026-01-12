// src/components/VideoFilter.jsx
import React from 'react';

const VideoFilter = ({ 
  categories, 
  selectedCategory, 
  searchQuery,
  onCategoryChange, 
  onSearchChange,
  currentLang 
}) => {
  
  const placeholders = {
    uk: '🔍 Пошук відео...',
    ru: '🔍 Поиск видео...',
    en: '🔍 Search videos...',
    de: '🔍 Videos suchen...'
  };

  return (
    <div className="mb-12">
      {/* Пошук */}
      <div className="mb-6">
        <div className="relative max-w-2xl">
          <input
            type="text"
            placeholder={placeholders[currentLang]}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-6 py-4 pl-12 bg-white/5 border border-blue-500/30 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
          />
          <svg 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" strokeWidth={2} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-4.35-4.35" />
          </svg>
        </div>
      </div>

      {/* Категорії */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-blue-500/20 hover:border-blue-500/40'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoFilter;
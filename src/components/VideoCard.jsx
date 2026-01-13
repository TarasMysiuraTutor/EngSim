// src/components/VideoCard.jsx
import React, { useState } from 'react';

const VideoCard = ({ video, currentLang }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Отримати thumbnail з YouTube
  const getThumbnail = (youtubeId) => {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  };

  // Відкрити відео на YouTube
  const openVideo = () => {
    window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank');
  };

  // Іконка категорії
  const getCategoryIcon = (category) => {
    const icons = {
      solidworks: '🔧',
      flownex: '💨',
      autocad: '📐',
      mathcad: '📊',
      other: '🎓'
    };
    return icons[category] || '🎓';
  };

  // Форматування дати
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    const locales = {
      uk: 'uk-UA',
      ru: 'ru-RU',
      en: 'en-US',
      de: 'de-DE'
    };

    return date.toLocaleDateString(locales[currentLang] || 'en-US', options);
  };

  return (
    <div 
      className={`group bg-white/5 rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/60 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 ${
        isHovered ? 'scale-[1.02]' : ''
      }`}
      onClick={openVideo}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden bg-black" style={{ paddingTop: '56.25%' }}>
        <img 
          src={(video.screen[currentLang])} 
          
          // src={getThumbnail(video.youtubeId)} 
          alt={video.title[currentLang]}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
            <svg className="w-8 h-8 text-red-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>

        {/* Duration */}
        <span className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm font-semibold">
          {video.duration}
        </span>
      </div>

      {/* Info */}
      <div className="p-6">
        {/* Category */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">{getCategoryIcon(video.category)}</span>
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            {video.categoryName[currentLang]}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
          {video.title[currentLang]}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
          {video.description[currentLang]}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(video.date)}
          </span>
          
          <span className="text-blue-400 group-hover:text-cyan-400 transition-colors font-semibold flex items-center gap-1">
            {currentLang === 'uk' && 'Дивитись'}
            {currentLang === 'ru' && 'Смотреть'}
            {currentLang === 'en' && 'Watch'}
            {currentLang === 'de' && 'Ansehen'}
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
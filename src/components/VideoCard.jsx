// src/components/VideoCard.jsx - З ЗАВАНТАЖЕННЯМ ФАЙЛІВ
import React, { useState } from 'react';
import { 
  getVideoThumbnail, 
  downloadInstruction, 
  downloadResource,
  hasInstruction,
  hasResources 
} from '../data/videosData';

const VideoCard = ({ video, currentLang }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [showResources, setShowResources] = useState(false);

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

  // Іконка типу файлу
  const getFileIcon = (type) => {
    const icons = {
      model: '🎨',
      drawing: '📐',
      archive: '📦',
      pdf: '📄'
    };
    return icons[type] || '📁';
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

  // Відкрити відео на YouTube
  const openVideo = () => {
    window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank');
  };

  // Завантажити інструкцію
  const handleDownloadInstruction = (e) => {
    e.stopPropagation(); // Щоб не відкрилось відео
    downloadInstruction(video, currentLang);
  };

  // Завантажити ресурс
  const handleDownloadResource = (e, resource) => {
    e.stopPropagation();
    downloadResource(resource);
  };

  // Показати/сховати додаткові ресурси
  const toggleResources = (e) => {
    e.stopPropagation();
    setShowResources(!showResources);
  };

  const thumbnail = getVideoThumbnail(video, currentLang);

  console.log('Video ID:', video.id);
  console.log('Current Lang:', currentLang);
  console.log('Thumbnail URL:', thumbnail);

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
      <div className="relative overflow-hidden bg-gradient-to-br from-red-900/40 to-red-700/40" style={{ paddingTop: '56.25%' }}>
        {!imageError ? (
          <img 
            src={thumbnail}
            alt={video.title[currentLang]}
            onError={(e) => {
              console.error('Image failed to load:', e.target.src);
              setImageError(true);
            }}
            onLoad={() => console.log('Image loaded successfully:', thumbnail)}
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          // Fallback
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <svg className="w-32 h-32 text-white/90 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <p className="text-white/70 text-sm font-medium">
              {currentLang === 'uk' && 'Клікніть для перегляду'}
              {currentLang === 'ru' && 'Нажмите для просмотра'}
              {currentLang === 'en' && 'Click to watch'}
              {currentLang === 'de' && 'Klicken zum Ansehen'}
            </p>
          </div>
        )}
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-2xl">
            <svg className="w-10 h-10 text-red-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>

        {/* Duration */}
        <span className="absolute bottom-3 right-3 bg-black/90 text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-xl z-10 backdrop-blur-sm">
          {video.duration}
        </span>

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-blue-500/90 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10 backdrop-blur-sm">
          {getCategoryIcon(video.category)} {video.categoryName[currentLang]}
        </span>

        {/* Badges для файлів */}
        <div className="absolute top-3 right-3 flex gap-2 z-10">
          {hasInstruction(video, currentLang) && (
            <span className="bg-green-500/90 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
              📄 PDF
            </span>
          )}
          {hasResources(video) && (
            <span className="bg-purple-500/90 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
              📦 {video.resources.length}
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors leading-tight">
          {video.title[currentLang]}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
          {video.description[currentLang]}
        </p>

        {/* 👇 КНОПКИ ЗАВАНТАЖЕННЯ */}
        <div className="mb-4 space-y-2">
          {/* Кнопка інструкції */}
          {hasInstruction(video, currentLang) && (
            <button
              onClick={handleDownloadInstruction}
              className="w-full flex items-center justify-between px-4 py-2.5 bg-green-500/20 hover:bg-green-500/30 border border-green-500/40 rounded-lg transition-all group/btn"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm font-semibold text-green-300">
                  {currentLang === 'uk' && '📄 Завантажити інструкцію'}
                  {currentLang === 'ru' && '📄 Скачать инструкцию'}
                  {currentLang === 'en' && '📄 Download tutorial'}
                  {currentLang === 'de' && '📄 Anleitung herunterladen'}
                </span>
              </div>
              <span className="text-xs text-green-400">
                {video.instructions[currentLang].size}
              </span>
            </button>
          )}

          {/* Кнопка додаткових ресурсів */}
          {hasResources(video) && (
            <>
              <button
                onClick={toggleResources}
                className="w-full flex items-center justify-between px-4 py-2.5 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/40 rounded-lg transition-all"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm font-semibold text-purple-300">
                    {currentLang === 'uk' && `📦 Файли (${video.resources.length})`}
                    {currentLang === 'ru' && `📦 Файлы (${video.resources.length})`}
                    {currentLang === 'en' && `📦 Resources (${video.resources.length})`}
                    {currentLang === 'de' && `📦 Dateien (${video.resources.length})`}
                  </span>
                </div>
                <svg 
                  className={`w-4 h-4 text-purple-400 transition-transform ${showResources ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Список ресурсів */}
              {showResources && (
                <div className="pl-4 space-y-1 animate-fadeIn">
                  {video.resources.map((resource, index) => (
                    <button
                      key={index}
                      onClick={(e) => handleDownloadResource(e, resource)}
                      className="w-full flex items-center justify-between px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all text-left"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{getFileIcon(resource.type)}</span>
                        <span className="text-xs text-gray-300">
                          {resource.name[currentLang]}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{resource.size}</span>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs pt-4 border-t border-white/10">
          <span className="flex items-center gap-1.5 text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(video.date)}
          </span>
          
          <span className="text-blue-400 group-hover:text-cyan-400 transition-colors font-bold flex items-center gap-1.5">
            {currentLang === 'uk' && 'ДИВИТИСЬ'}
            {currentLang === 'ru' && 'СМОТРЕТЬ'}
            {currentLang === 'en' && 'WATCH'}
            {currentLang === 'de' && 'ANSEHEN'}
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
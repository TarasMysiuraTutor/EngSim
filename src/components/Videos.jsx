import React, { useState } from 'react';
import videosData from '../data/json/videos.json';

const Videos = ({ currentLang }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Функція для отримання thumbnail
  const getVideoThumbnail = (video) => {
    if (video.thumbnail) {
      if (typeof video.thumbnail === 'object') {
        return video.thumbnail[currentLang] || video.thumbnail['en'];
      }
      return video.thumbnail;
    }
    return `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
  };

  // Функція для завантаження інструкції
  const downloadInstruction = (video, e) => {
    e.stopPropagation();
    const instruction = video.instructions?.[currentLang];
    if (!instruction) return;

    // Конвертуємо Google Drive URL
    const convertGoogleDriveUrl = (url) => {
      const match = url.match(/\/d\/([^/]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/uc?export=download&id=${match[1]}`;
      }
      return url;
    };

    const downloadUrl = instruction.url.includes('drive.google.com') 
      ? convertGoogleDriveUrl(instruction.url)
      : instruction.url;

    window.open(downloadUrl, '_blank');
  };

  // Фільтрація відео
  const filteredVideos = selectedCategory === 'all' 
    ? videosData 
    : videosData.filter(v => v.category === selectedCategory);

  // Унікальні категорії
  const categories = ['all', ...new Set(videosData.map(v => v.category))];

  return (
    <section id="videos" className="py-20 px-4 md:px-8 bg-[#1a1f3a]/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
          Навчальні відео
        </h2>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {cat === 'all' ? 'Всі' : cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg rounded-2xl border border-blue-500/20 hover:border-blue-500/60 transition-all duration-500 cursor-pointer overflow-hidden hover:transform hover:scale-105"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={getVideoThumbnail(video)}
                  alt={video.title[currentLang]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>

                {/* Duration */}
                {video.duration && (
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
                    {video.duration}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full mb-3">
                  {video.categoryName[currentLang]}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {video.title[currentLang]}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                  {video.description[currentLang]}
                </p>

                {/* Download Button */}
                {video.instructions?.[currentLang] && (
                  <button
                    onClick={(e) => downloadInstruction(video, e)}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Завантажити PDF ({video.instructions[currentLang].size})
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-[#1a1f3a] rounded-2xl max-w-5xl w-full border border-blue-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-between items-center p-6 border-b border-blue-500/20">
              <h3 className="text-xl font-bold text-white">
                {selectedVideo.title[currentLang]}
              </h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Video Player */}
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                className="w-full h-full"
                allowFullScreen
                title={selectedVideo.title[currentLang]}
              />
            </div>

            {/* Video Info */}
            <div className="p-6">
              <p className="text-gray-300 mb-4">{selectedVideo.description[currentLang]}</p>
              
              {selectedVideo.instructions?.[currentLang] && (
                <button
                  onClick={(e) => downloadInstruction(selectedVideo, e)}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Завантажити інструкцію PDF ({selectedVideo.instructions[currentLang].size})
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Videos;
import React, { useState, useEffect } from 'react';

const LazyImage = ({ 
  src,       // Основне фото (фолбек)
  srcSet,    // Набір оптимізованих фото різних розмірів
  sources = [], // Масив для різних форматів (напр. webp)
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml,...' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [containerRef, setContainerRef] = useState(null);

  useEffect(() => {
    if (!containerRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(containerRef);
        }
      },
      { rootMargin: '200px' } // Трохи збільшимо запас для плавності
    );

    observer.observe(containerRef);
    return () => observer.disconnect();
  }, [containerRef]);

  return (
    <div ref={setContainerRef} className="overflow-hidden bg-gray-100">
      <picture>
        {/* Рендеримо джерела тільки коли компонент став видимим */}
        {isVisible && sources.map((source, index) => (
          <source key={index} {...source} />
        ))}
        
        <img
          src={isVisible ? src : placeholder}
          srcSet={isVisible ? srcSet : undefined}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`${className} transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      </picture>
    </div>
  );
};
export default LazyImage;
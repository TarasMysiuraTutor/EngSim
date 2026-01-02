import React, { useEffect } from 'react';

const Breadcrumbs = ({ items, currentLang }) => {
  // Генеруємо Breadcrumbs Schema для Google
  useEffect(() => {
    if (!items || items.length === 0) return;

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": item.url ? `https://tarasmysiuratutor.github.io/EngSim${item.url}` : undefined
      }))
    };

    // Видаляємо старий schema
    const oldScript = document.getElementById('breadcrumb-schema');
    if (oldScript) {
      oldScript.remove();
    }

    // Додаємо новий
    const script = document.createElement('script');
    script.id = 'breadcrumb-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      const script = document.getElementById('breadcrumb-schema');
      if (script) script.remove();
    };
  }, [items]);

  if (!items || items.length === 0) return null;

  const homeLabels = {
    de: 'Startseite',
    en: 'Home',
    uk: 'Головна',
    ru: 'Главная'
  };

  return (
    <nav aria-label="breadcrumb" className="py-4 px-8">
      <div className="max-w-7xl mx-auto">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
          {/* Домашня сторінка */}
          <li className="flex items-center gap-2">
            <a 
              href="#home" 
              className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
              <span>{homeLabels[currentLang]}</span>
            </a>
          </li>

          {/* Решта елементів */}
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {/* Роздільник */}
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
              </svg>

              {/* Останній елемент (поточна сторінка) */}
              {index === items.length - 1 ? (
                <span className="text-blue-400 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                /* Звичайне посилання */
                <a 
                  href={item.url || '#'} 
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
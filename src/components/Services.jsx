import React, { useEffect, useRef, useState } from 'react';

const Services = ({ t }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const services = [
    { icon: '🔧', titleKey: 'service1Title', descKey: 'service1Desc' },
    { icon: '🌡️', titleKey: 'service2Title', descKey: 'service2Desc' },
    { icon: '🔥', titleKey: 'service3Title', descKey: 'service3Desc' },
    { icon: '🏭', titleKey: 'service4Title', descKey: 'service4Desc' },
    { icon: '📊', titleKey: 'service5Title', descKey: 'service5Desc' },
    { icon: '💡', titleKey: 'service6Title', descKey: 'service6Desc' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...new Set([...prev, index])]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 px-8 bg-[#1a1f3a]/50 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-custom"></div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent animate-fadeInUp">
        {t.servicesTitle}
      </h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card bg-white/5 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/60 transition-all duration-500 cursor-pointer group hover-lift ${
              visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: `${index * 0.1}s`
            }}
          >
            <div className="text-4xl md:text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce-custom group-hover:animate-wiggle">
              {service.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">
              {t[service.titleKey]}
            </h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              {t[service.descKey]}
            </p>
            
            {/* Декоративна лінія */}
            <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-cyan-500 mt-4 transition-all duration-500 rounded"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
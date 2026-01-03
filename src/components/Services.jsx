import React, { useEffect, useRef, useState } from 'react';

const Services = ({ t }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const services = [
    { 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      titleKey: 'service1Title', 
      descKey: 'service1Desc',
      featuresKeys: ['service1Feature1', 'service1Feature2', 'service1Feature3']
    },
    { 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
      titleKey: 'service2Title', 
      descKey: 'service2Desc',
      featuresKeys: ['service2Feature1', 'service2Feature2', 'service2Feature3']
    },
    { 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      titleKey: 'service3Title', 
      descKey: 'service3Desc',
      featuresKeys: ['service3Feature1', 'service3Feature2', 'service3Feature3']
    },
    { 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      titleKey: 'service4Title', 
      descKey: 'service4Desc',
      featuresKeys: ['service4Feature1', 'service4Feature2', 'service4Feature3']
    },
    { 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      titleKey: 'service5Title', 
      descKey: 'service5Desc',
      featuresKeys: ['service5Feature1', 'service5Feature2', 'service5Feature3']
    },
    { 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      titleKey: 'service6Title', 
      descKey: 'service6Desc',
      featuresKeys: ['service6Feature1', 'service6Feature2', 'service6Feature3']
    }
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
    <section id="services" className="py-20 px-4 md:px-8 bg-[#1a1f3a]/50 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-custom"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-custom" style={{ animationDelay: '1s' }}></div>
      
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent animate-fadeInUp">
          {t.servicesTitle}
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          {t.servicesSubtitle}
        </p>
      </div>
      
      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
                      <div
            key={index}
            className={`service-card bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/60 transition-all duration-500 cursor-pointer group relative overflow-hidden flex flex-col ${
              visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: `${index * 0.1}s`
            }}
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Icon */}
              <div className="text-blue-400 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300 min-h-[3.5rem]">
                {t[service.titleKey]}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300 flex-grow min-h-[6rem]">
                {t[service.descKey]}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6 min-h-[5rem]">
                {service.featuresKeys.map((featureKey, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    <svg className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {t[featureKey]}
                  </li>
                ))}
              </ul>

              {/* CTA Button - завжди внизу */}
              <a 
                href="#contact"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500 hover:to-blue-600 border border-blue-500/50 hover:border-blue-400 rounded-lg font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/50 group-hover:scale-105 mt-auto"
              >
                {t.serviceCTA || 'Замовити послугу'}
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 rounded-b-2xl"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            {t.serviceNotFound}
          </h3>
          <p className="text-gray-400 mb-6 text-lg">
            {t.serviceNotFoundDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-white"
            >
              {t.serviceContactMe}
            </a>
            <a
              href="tel:+380XXXXXXXXX"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-blue-500/30 rounded-full font-semibold hover:bg-white/20 hover:border-blue-500/60 transition-all duration-300 transform hover:-translate-y-1 text-white flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t.serviceCallMe}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
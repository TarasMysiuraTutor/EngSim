import React, { useEffect, useState, useRef } from 'react';

const Testimonials = ({ t }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      nameKey: 'testimonial1Name',
      roleKey: 'testimonial1Role',
      companyKey: 'testimonial1Company',
      textKey: 'testimonial1Text',
      rating: 5,
      initials: 'ОП'
    },
    {
      nameKey: 'testimonial2Name',
      roleKey: 'testimonial2Role',
      companyKey: 'testimonial2Company',
      textKey: 'testimonial2Text',
      rating: 5,
      initials: 'МК'
    },
    {
      nameKey: 'testimonial3Name',
      roleKey: 'testimonial3Role',
      companyKey: 'testimonial3Company',
      textKey: 'testimonial3Text',
      rating: 5,
      initials: 'ДС'
    },
    {
      nameKey: 'testimonial4Name',
      roleKey: 'testimonial4Role',
      companyKey: 'testimonial4Company',
      textKey: 'testimonial4Text',
      rating: 5,
      initials: 'ІМ'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.testimonial-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...new Set([...prev, index])]);
              }, index * 150);
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
    <section id="testimonials" className="py-20 px-4 md:px-8 bg-[#1a1f3a]/50 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-custom"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-custom" style={{ animationDelay: '2s' }}></div>
      
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent animate-fadeInUp">
          {t.testimonialsTitle}
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          {t.testimonialsSubtitle}
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 group relative overflow-hidden ${
              visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: `${index * 0.15}s`
            }}
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-yellow-400 font-semibold">{testimonial.rating}.0</span>
              </div>

              {/* Quote Icon */}
              <svg className="w-10 h-10 text-blue-400/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                {t[testimonial.textKey]}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-blue-500/20">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {testimonial.initials}
                  </div>
                </div>

                {/* Name and Role */}
                <div className="flex-grow">
                  <h4 className="text-white font-semibold text-base md:text-lg group-hover:text-blue-400 transition-colors duration-300">
                    {t[testimonial.nameKey]}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {t[testimonial.roleKey]}
                  </p>
                  <p className="text-blue-400 text-sm font-medium">
                    {t[testimonial.companyKey]}
                  </p>
                </div>

                {/* Verified Badge */}
                <div className="flex-shrink-0">
                  <div className="bg-green-500/20 border border-green-500/40 rounded-full p-2 group-hover:scale-110 transition-transform duration-300" title="Verified">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Stats */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                150+
              </div>
              <div className="text-gray-400">
                {t.testimonialsStatClients}
              </div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                5.0
              </div>
              <div className="text-gray-400 flex items-center justify-center gap-1">
                {t.testimonialsStatRating}
                <div className="flex text-yellow-400 ml-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-gray-400">
                {t.testimonialsStatRecommend}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
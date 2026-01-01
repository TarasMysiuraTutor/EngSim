import React, { useEffect, useState } from 'react';

const Hero = ({ t }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const formulas = [
    // Верхній лівий кут
    { text: 'σ = F/A', style: 'top-[8%] left-[5%]' },
    { text: 'E = σ/ε', style: 'top-[18%] left-[8%]' },
    { text: 'W = Pt', style: 'top-[12%] left-[18%]' },
    
    // Верхній правий кут
    { text: 'ΔL = FL/EA', style: 'top-[8%] right-[5%]' },
    { text: 'Q = μA√2gH', style: 'top-[15%] right-[12%]' },
    { text: 'Q = mcΔT', style: 'top-[10%] right-[22%]' },
    
    // Над текстом (зверху по центру)
    { text: 'τ = M/W', style: 'top-[22%] left-[30%]' },
    { text: 'P = ρgh', style: 'top-[20%] left-[45%]' },
    { text: 'η = Pout/Pin', style: 'top-[22%] right-[30%]' },
    
    // Ліва сторона (середина)
    { text: 'Q = εσAT⁴', style: 'top-[32%] left-[3%]' },
    { text: 'τ = T/W', style: 'top-[45%] left-[6%]' },
    { text: 'P = ½ρAv³Cₚ', style: 'top-[58%] left-[4%]' },
    
    // Права сторона (середина)
    { text: 'A = I/j', style: 'top-[35%] right-[4%]' },
    { text: 'η = 1-T₂/T₁', style: 'top-[48%] right-[7%]' },
    { text: 'P = F·v', style: 'top-[60%] right-[3%]' },
    
    // Нижній лівий кут
    { text: 'M = FL/4', style: 'bottom-[8%] left-[10%]' },
    { text: 'I = P/√3Ucosφ', style: 'bottom-[15%] left-[4%]' },
    { text: 'ΔP = λL/dρv²', style: 'bottom-[10%] left-[22%]' },
    
    // Під текстом (знизу по центру)
    { text: 'F = ma', style: 'bottom-[20%] left-[32%]' },
    { text: 'Cv = Cp - R', style: 'bottom-[22%] left-[48%]' },
    { text: 'W = ∫Fdx', style: 'bottom-[20%] right-[32%]' },
    
    // Нижній правий кут
    { text: 'P = UI', style: 'bottom-[8%] right-[8%]' },
    { text: 'η = W/Q', style: 'bottom-[15%] right-[4%]' },
    { text: 'E = ηA·G·t', style: 'bottom-[12%] right-[18%]' },
    
    // Додаткові по краях
    { text: 'v = Q/A', style: 'bottom-[25%] left-[8%]' },
    { text: 'Re = ρvd/μ', style: 'bottom-[28%] right-[12%]' },
    { text: 'S = UI', style: 'bottom-[22%] right-[22%]' },
    { text: 'Q = λAΔT/δ', style: 'top-[28%] left-[12%]' },
    { text: 'E = mc²/2', style: 'top-[25%] right-[18%]' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-8 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20 gradient-animate"></div>
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-floatSlow"></div>
      
      {/* Floating formulas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {formulas.map((formula, i) => (
          <div
            key={i}
            className={`absolute ${formula.style} text-blue-400/15 text-lg md:text-xl font-light transition-all duration-1000 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              animation: `float ${3.5 + (i % 7) * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`
            }}
          >
            {formula.text}
          </div>
        ))}
      </div>
      
      <div className="text-center max-w-4xl relative z-10">
        <h1 className={`text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {t.heroTitle}
        </h1>
        <p className={`text-3xl md:text-4xl font-bold text-gray-200 mb-16 transition-all duration-1000 delay-200 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {t.heroPreTitle}
        </p>
        <p className={`text-lg md:text-xl text-gray-400 mb-4 transition-all duration-1000 delay-200 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {t.heroPostTitle} 
           </p>
        <p className={`text-lg md:text-xl text-gray-400 mb-8 transition-all duration-1000 delay-200 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {t.heroSubtitle}
        </p>
        <a
          href="#contact"
          className={`inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 animate-glow ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          {t.heroCTA}
        </a>

        {/* Додаткові декоративні елементи */}
        <div className="absolute -top-10 -right-10 w-20 h-20 border-2 border-blue-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-10 -left-10 w-16 h-16 border-2 border-cyan-500/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>
    </section>
  );
};

export default Hero;
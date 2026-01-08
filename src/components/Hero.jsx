import React, { useEffect, useState } from "react";

const Hero = ({ t }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

const formulas = [
  // ========== ВЕРХНЯ ЧАСТИНА (5-25%) - РІДКО ==========
  { text: 'σ = F/A', style: 'top-[6%] left-[5%]' },
  { text: 'E = σ/ε', style: 'top-[8%] left-[15%]' },
  { text: 'Re = ρvd/μ', style: 'top-[7%] left-[35%]' },
  { text: 'P = ρgh', style: 'top-[6%] left-[55%]' },
  { text: 'η = Pout/Pin', style: 'top-[8%] left-[75%]' },
  
  { text: 'Q = mcΔT', style: 'top-[6%] right-[5%]' },
  { text: 'ΔL = FL/EA', style: 'top-[8%] right-[15%]' },
  { text: 'v = Q/A', style: 'top-[7%] right-[35%]' },
  
  { text: 'τ = M/W', style: 'top-[13%] left-[8%]' },
  { text: 'W = Pt', style: 'top-[15%] left-[25%]' },
  { text: 'I = πd⁴/64', style: 'top-[14%] left-[45%]' },
  { text: 'Q = μA√2gH', style: 'top-[13%] left-[65%]' },
  
  { text: 'λ = 64/Re', style: 'top-[13%] right-[8%]' },
  { text: 'M = FL/4', style: 'top-[15%] right-[25%]' },
  { text: 'σₘₐₓ = M/Wₓ', style: 'top-[14%] right-[45%]' },
  
  { text: 'Pₖᵣ = π²EI/L²', style: 'top-[20%] left-[12%]' },
  { text: 'Q = λA∆T/δ', style: 'top-[22%] left-[32%]' },
  { text: 'H = P/ρg', style: 'top-[21%] left-[52%]' },
  { text: 'W = πd³/16', style: 'top-[20%] left-[72%]' },
  
  { text: 'ε = ∆L/L', style: 'top-[20%] right-[12%]' },
  { text: 'α = Nu·λ/L', style: 'top-[22%] right-[32%]' },
  { text: 'N = P/η', style: 'top-[21%] right-[52%]' },

  // ========== СЕРЕДНЯ ЧАСТИНА (30-60%) - ВІЛЬНО ДЛЯ КОНТЕНТУ ==========
  // Повністю чиста зона!

  // ========== НИЖНЯ ЧАСТИНА (65-95%) - РІДКО ==========
  { text: 'P = ½ρAv³Cₚ', style: 'top-[46%] left-[10%]' },
  { text: 'η = 1-T₂/T₁', style: 'top-[68%] left-[30%]' },
  { text: 'A = I/j', style: 'top-[67%] left-[10%]' },
  { text: 'P = F·v', style: 'top-[66%] left-[15%]' },
  
  { text: 'k = 1/R', style: 'top-[66%] right-[10%]' },
  { text: 'ω = 2πn/60', style: 'top-[68%] right-[30%]' },
  { text: 'T = 9550P/n', style: 'top-[57%] right-[10%]' },
  
  { text: 'U = IR', style: 'top-[73%] left-[15%]' },
  { text: 'P = UI', style: 'top-[65%] left-[5%]' },
  { text: 'cosφ = P/S', style: 'top-[34%] left-[5%]' },
  { text: 'S = √3UI', style: 'top-[43%] left-[15%]' },
  
  { text: 'R = ρL/A', style: 'top-[33%] right-[15%]' },
  { text: 'I = P/√3Ucosφ', style: 'top-[75%] right-[5%]' },
  { text: 'n = U₂/U₁', style: 'top-[74%] right-[15%]' },
  
  { text: 'Bi = αL/λ', style: 'top-[80%] left-[8%]' },
  { text: 'Gr = gβ∆TL³/ν²', style: 'top-[82%] left-[28%]' },
  { text: 'Ra = Gr·Pr', style: 'top-[51%] left-[8%]' },
  { text: 'Pr = ν/a', style: 'top-[30%] left-[18%]' },
  
  { text: 'Nu = hL/k', style: 'top-[80%] right-[8%]' },
  { text: 'Fo = αt/L²', style: 'top-[44%] right-[8%]' },
  { text: 'Ma = v/c', style: 'top-[31%] right-[8%]' },
  
  { text: 'β = 1/V·dV/dT', style: 'top-[87%] left-[12%]' },
  { text: 'h = u + Pv', style: 'top-[72%] left-[2%]' },
  { text: 's = Q/T', style: 'top-[88%] left-[25%]' },
  { text: 'COP = Qₗ/W', style: 'top-[87%] left-[2%]' },
  
  { text: 'Fr = v²/gL', style: 'top-[87%] right-[12%]' },
  { text: 'We = ρv²L/σ', style: 'top-[89%] right-[2%]' },
  { text: 'Pe = Re·Pr', style: 'top-[88%] right-[22%]' },
];


  // Статистика (замінити на реальні дані)
  const stats = [
    { number: "10+", label: t.statsYears || "Років досвіду" },
    { number: "150+", label: t.statsProjects || "Проектів" },
    { number: "98%", label: t.statsClients || "Задоволених клієнтів" },
    { number: "24/7", label: t.statsSupport || "Підтримка" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8 relative overflow-hidden"
    >
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
            className={`absolute ${
              formula.style
            } text-blue-400/15 text-sm md:text-xl font-light transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              animation: `float ${3.5 + (i % 7) * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`,
            }}
          >
            {formula.text}
          </div>
        ))}
      </div>

      <div className="text-center max-w-6xl relative z-10">
        {/* Головний заголовок */}
        <div
          className={`mb-6 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            {t.heroTitle}
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">
            {t.heroPreTitle}
          </p>
        </div>

        {/* Опис */}
        <p
          className={`text-base md:text-xl text-gray-400 mb-4 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {t.heroPostTitle}
        </p>
        <p
          className={`text-base md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {t.heroSubtitle}
        </p>

        {/* CTA кнопки */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Основна CTA */}
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 animate-glow text-white w-full sm:w-auto text-center"
          >
            {t.heroCTA || "Замовити консультацію"}
          </a>

          {/* Telegram кнопка */}
          <a
            href="https://t.me/VIKTORSUKAYLO"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-blue-500/30 rounded-full font-semibold hover:bg-white/20 hover:border-blue-500/60 transition-all duration-300 transform hover:-translate-y-1 text-white flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
            </svg>
            Telegram
          </a>

          {/* Телефон кнопка */}
          <a
            href="tel:+380XXXXXXXXX"
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-blue-500/30 rounded-full font-semibold hover:bg-white/20 hover:border-blue-500/60 transition-all duration-300 transform hover:-translate-y-1 text-white flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {t.heroCallButton || "Зателефонувати"}
          </a>
        </div>

        {/* Статистика */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-8 transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg p-4 md:p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl md:text-4xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Короткі відгуки / Соціальні докази */}
        <div
          className={`flex flex-col md:flex-row gap-4 justify-center items-center text-sm transition-all duration-1000 delay-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-lg px-6 py-3 rounded-full border border-blue-500/20">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-[#0a0e27]"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 border-2 border-[#0a0e27]"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-[#0a0e27]"></div>
            </div>
            <span className="text-gray-300 ml-2">
              {t.heroTrustedBy || "Довіряють 150+ клієнтів"}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-lg px-6 py-3 rounded-full border border-blue-500/20">
            <div className="flex text-yellow-400">{"⭐".repeat(5)}</div>
            <span className="text-gray-300">
              {t.heroRating || "5.0 рейтинг"}
            </span>
          </div>
        </div>

        {/* Декоративні елементи */}
        <div
          className="absolute -top-10 -right-10 w-20 h-20 border-2 border-blue-500/30 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute -bottom-10 -left-10 w-16 h-16 border-2 border-cyan-500/30 rounded-full animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;

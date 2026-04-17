import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const FAQ = ({ currentLang }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  const sectionRef = useRef(null);

  const faqData = {
    uk: [
      {
        question: "Які послуги ви надаєте?",
        answer:
          "Я спеціалізуюся на професійних інженерних розрахунках: опір матеріалів, термодинаміка, теплові процеси, енергоаудит та оптимізація промислових процесів. Також надаю консультації та готую технічну документацію.",
      },
      {
        question: "Скільки коштують ваші послуги?",
        answer:
          "Вартість залежить від складності та обсягу роботи. Прості розрахунки — від 500 грн, комплексні проекти обговорюються індивідуально. Зв'яжіться зі мною для детального обговорення вашого проекту та отримання точної оцінки.",
      },
      {
        question: "Як довго виконується проект?",
        answer:
          "Терміни залежать від складності: прості розрахунки — 1-3 дні, середні проекти — 1-2 тижні, великі комплексні проекти — від 2 тижнів.Termіни завжди обговорюються індивідуально перед початком роботи.",
      },
      {
        question: "Чи можна замовити тільки консультацію?",
        answer:
          "Так, звичайно! Я надаю як повний цикл робіт, так і окремі консультації з питань міцності конструкцій, теплотехніки, енергоефективності. Консультації можуть бути онлайн або офлайн.",
      },
      {
        question: "Які програми ви використовуєте?",
        answer:
          "Використовую професійне ПЗ: ANSYS, SolidWorks, AutoCAD для моделювання та розрахунків, а також спеціалізовані програми для термодинамічних та гідравлічних розрахунків. Всі розрахунки відповідають сучасним стандартам.",
      },
      {
        question: "Чи надаєте ви технічну документацію?",
        answer:
          "Так, до кожного проекту готую детальну технічну документацію: розрахункові записки, креслення, специфікації. Документація оформлюється згідно з діючими стандартами (ДСТУ, ДБН) і може бути використана для погодження в контролюючих органах.",
      },
      {
        question: "Які калькулятори доступні на сайті?",
        answer:
          "На сайті доступно  безкоштовні калькулятори з різних технічних категорій: опір матеріалів, гідравліка, термодинаміка та енергетика. Це корисний інструмент для швидких попередніх розрахунків.",
      },
      {
        question: "Чи можна довіряти розрахункам з калькуляторів?",
        answer:
          "Калькулятори використовують перевірені формули і підходять для попередніх оцінок та навчальних цілей. Для остаточних проектних рішень завжди рекомендую замовити професійний розрахунок з детальним аналізом всіх факторів.",
      },
      {
        question: "Працюєте ви з іноземними клієнтами?",
        answer:
          "Так, працюю з клієнтами з різних країн. Комунікація можлива українською, російською, англійською та німецькою мовами. Всю документацію можу підготувати англійською або німецькою.",
      },
      {
        question: "Як з вами зв'язатися?",
        answer:
          "Найшвидший спосіб — Telegram (@VIKTORSUKAYLO) або телефон. Також можете заповнити форму на сайті, і я зв'яжуся з вами протягом 2 годин у робочий час (Пн-Пт, 9:00-18:00 за київським часом).",
      },
    ],
    ru: [
      {
        question: "Какие услуги вы предоставляете?",
        answer:
          "Я специализируюсь на профессиональных инженерных расчетах: сопротивление материалов, термодинамика, тепловые процессы, энергоаудит и оптимизация промышленных процессов. Также предоставляю консультации и готовлю техническую документацию.",
      },
      {
        question: "Сколько стоят ваши услуги?",
        answer:
          "Стоимость зависит от сложности и объема работы. Простые расчеты — от 500 грн, комплексные проекты обсуждаются индивидуально. Свяжитесь со мной для детального обсуждения вашего проекта и получения точной оценки.",
      },
      {
        question: "Как долго выполняется проект?",
        answer:
          "Сроки зависят от сложности: простые расчеты — 1-3 дня, средние проекты — 1-2 недели, большие комплексные проекты — от 2 недель. Сроки всегда обсуждаются индивидуально перед началом работы.",
      },
      {
        question: "Можно ли заказать только консультацию?",
        answer:
          "Да, конечно! Я предоставляю как полный цикл работ, так и отдельные консультации по вопросам прочности конструкций, теплотехники, энергоэффективности. Консультации могут быть онлайн или офлайн.",
      },
      {
        question: "Какие программы вы используете?",
        answer:
          "Использую профессиональное ПО: ANSYS, SolidWorks, AutoCAD для моделирования и расчетов, а также специализированные программы для термодинамических и гидравлических расчетов. Все расчеты соответствуют современным стандартам.",
      },
      {
        question: "Предоставляете ли вы техническую документацию?",
        answer:
          "Да, к каждому проекту готовлю детальную техническую документацию: расчетные записки, чертежи, спецификации. Документация оформляется согласно действующим стандартам (ДСТУ, ДБН) и может быть использована для согласования в контролирующих органах.",
      },
      {
        question: "Какие калькуляторы доступны на сайте?",
        answer:
          "На сайте доступны бесплатные калькуляторы по различным техническим категориям: сопротивление материалов, гидравлика, термодинамика и энергетика. Это полезный инструмент для быстрых предварительных расчетов.",
      },
      {
        question: "Можно ли доверять расчетам калькуляторов?",
        answer:
          "Калькуляторы используют проверенные формулы и подходят для предварительных оценок и учебных целей. Для окончательных проектных решений всегда рекомендую заказать профессиональный расчет с детальным анализом всех факторов.",
      },
      {
        question: "Работаете ли вы с иностранными клиентами?",
        answer:
          "Да, работаю с клиентами из разных стран. Коммуникация возможна на украинском, русском, английском и немецком языках. Всю документацию могу подготовить на английском или немецком.",
      },
      {
        question: "Как с вами связаться?",
        answer:
          "Самый быстрый способ — Telegram (@VIKTORSUKAYLO) или телефон. Также можете заполнить форму на сайте, и я свяжусь с вами в течение 2 часов в рабочее время (Пн-Пт, 9:00-18:00 по киевскому времени).",
      },
    ],
    en: [
      {
        question: "What services do you provide?",
        answer:
          "I specialize in professional engineering calculations: strength of materials, thermodynamics, thermal processes, energy audits, and optimization of industrial processes. I also provide consultations and prepare technical documentation.",
      },
      {
        question: "How much do your services cost?",
        answer:
          "The cost depends on the complexity and scope of work. Simple calculations start from 500 UAH, complex projects are discussed individually. Contact me for a detailed discussion of your project and an accurate estimate.",
      },
      {
        question: "How long does a project take?",
        answer:
          "Timelines depend on complexity: simple calculations — 1-3 days, medium projects — 1-2 weeks, large complex projects — from 2 weeks. Deadlines are always discussed individually before starting work.",
      },
      {
        question: "Can I order just a consultation?",
        answer:
          "Yes, of course! I provide both a full cycle of work and separate consultations on structural strength, thermal engineering, and energy efficiency. Consultations can be online or offline.",
      },
      {
        question: "What software do you use?",
        answer:
          "I use professional software: ANSYS, SolidWorks, AutoCAD for modeling and calculations, as well as specialized programs for thermodynamic and hydraulic calculations. All calculations comply with modern standards.",
      },
      {
        question: "Do you provide technical documentation?",
        answer:
          "Yes, I prepare detailed technical documentation for each project: calculation notes, drawings, specifications. Documentation is formatted according to current standards (DSTU, DBN) and can be used for approval by regulatory authorities.",
      },
      {
        question: "What calculators are available on the site?",
        answer:
          "The site offers free calculators in various technical categories: strength of materials, hydraulics, thermodynamics, and energy. This is a useful tool for quick preliminary calculations.",
      },
      {
        question: "Can calculator results be trusted?",
        answer:
          "Calculators use verified formulas and are suitable for preliminary estimates and educational purposes. For final design decisions, I always recommend ordering a professional calculation with detailed analysis of all factors.",
      },
      {
        question: "Do you work with international clients?",
        answer:
          "Yes, I work with clients from different countries. Communication is possible in Ukrainian, Russian, English, and German. I can prepare all documentation in English or German.",
      },
      {
        question: "How can I contact you?",
        answer:
          "The fastest way is Telegram (@VIKTORSUKAYLO) or phone. You can also fill out the form on the website, and I will contact you within 2 hours during business hours (Mon-Fri, 9:00-18:00 Kyiv time).",
      },
    ],
    de: [
      {
        question: "Welche Dienstleistungen bieten Sie an?",
        answer:
          "Ich spezialisiere mich auf professionelle ingenieurtechnische Berechnungen: Festigkeitslehre, Thermodynamik, thermische Prozesse, Energieaudits und Optimierung industrieller Prozesse. Ich biete auch Beratungen und erstelle technische Dokumentation.",
      },
      {
        question: "Wie viel kosten Ihre Dienstleistungen?",
        answer:
          "Die Kosten hängen von der Komplexität und dem Umfang der Arbeit ab. Einfache Berechnungen ab 500 UAH, komplexe Projekte werden individuell besprochen. Kontaktieren Sie mich für eine detaillierte Besprechung Ihres Projekts und eine genaue Kostenschätzung.",
      },
      {
        question: "Wie lange dauert ein Projekt?",
        answer:
          "Die Zeitrahmen hängen von der Komplexität ab: einfache Berechnungen — 1-3 Tage, mittlere Projekte — 1-2 Wochen, große komplexe Projekte — ab 2 Wochen. Fristen werden immer individuell vor Arbeitsbeginn besprochen.",
      },
      {
        question: "Kann ich nur eine Beratung bestellen?",
        answer:
          "Ja, natürlich! Ich biete sowohl den vollständigen Arbeitszyklus als auch separate Beratungen zu Strukturfestigkeit, Wärmetechnik und Energieeffizienz an. Beratungen können online oder offline erfolgen.",
      },
      {
        question: "Welche Software verwenden Sie?",
        answer:
          "Ich verwende professionelle Software: ANSYS, SolidWorks, AutoCAD für Modellierung und Berechnungen sowie spezialisierte Programme für thermodynamische und hydraulische Berechnungen. Alle Berechnungen entsprechen modernen Standards.",
      },
      {
        question: "Erstellen Sie technische Dokumentation?",
        answer:
          "Ja, ich erstelle für jedes Projekt detaillierte technische Dokumentation: Berechnungsnotizen, Zeichnungen, Spezifikationen. Die Dokumentation wird nach geltenden Standards (DSTU, DBN) formatiert und kann zur Genehmigung durch Aufsichtsbehörden verwendet werden.",
      },
      {
        question: "Welche Rechner sind auf der Website verfügbar?",
        answer:
          "Die Website bietet kostenlose Rechner in verschiedenen technischen Kategorien: Festigkeitslehre, Hydraulik, Thermodynamik und Energie. Dies ist ein nützliches Werkzeug für schnelle vorläufige Berechnungen.",
      },
      {
        question: "Kann man den Rechnerergebnissen vertrauen?",
        answer:
          "Die Rechner verwenden verifizierte Formeln und eignen sich für vorläufige Schätzungen und Bildungszwecke. Für endgültige Designentscheidungen empfehle ich immer eine professionelle Berechnung mit detaillierter Analyse aller Faktoren.",
      },
      {
        question: "Arbeiten Sie mit internationalen Kunden?",
        answer:
          "Ja, ich arbeite mit Kunden aus verschiedenen Ländern. Kommunikation ist auf Ukrainisch, Russisch, Englisch und Deutsch möglich. Ich kann die gesamte Dokumentation auf Englisch oder Deutsch erstellen.",
      },
      {
        question: "Wie kann ich Sie kontaktieren?",
        answer:
          "Der schnellste Weg ist Telegram (@VIKTORSUKAYLO) oder Telefon. Sie können auch das Formular auf der Website ausfüllen, und ich werde Sie innerhalb von 2 Stunden während der Geschäftszeiten (Mo-Fr, 9:00-18:00 Kiewer Zeit) kontaktieren.",
      },
    ],
  };

  const currentFAQ = faqData[currentLang] || faqData.uk;

  // Генеруємо FAQ Schema
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: currentFAQ.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    // Видаляємо старий schema
    const oldScript = document.getElementById("faq-schema");
    if (oldScript) {
      oldScript.remove();
    }

    // Додаємо новий
    const script = document.createElement("script");
    script.id = "faq-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const script = document.getElementById("faq-schema");
      if (script) script.remove();
    };
  }, [currentLang]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const titles = {
    de: "Häufig gestellte Fragen",
    en: "Frequently Asked Questions",
    uk: "Часті питання",
    ru: "Часто задаваемые вопросы",
  };

  const subtitles = {
    de: "Antworten auf die wichtigsten Fragen zu meinen Dienstleistungen",
    en: "Answers to the most common questions about my services",
    uk: "Відповіді на найпоширеніші питання про мої послуги",
    ru: "Ответы на самые распространенные вопросы о моих услугах",
  };

  const contactTexts = {
    de: "Weitere Fragen? Kontaktieren Sie mich über das Kontaktformular.",
    en: "More questions? Contact me via the contact form.",
    uk: "Є ще питання? Зв'яжіться зі мною через форму контактів.",
    ru: "Есть вопросы? Свяжитесь со мной через форму контактов.",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".faq-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...new Set([...prev, index])]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      className="py-20 px-4 md:px-8 bg-[#0a0e27] relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-custom"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-custom"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {titles[currentLang]}
        </h2>
        <p
          className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {subtitles[currentLang]}
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {currentFAQ.map((faq, index) => (
          <div
            key={index}
            className={`faq-card  bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg  p-2 rounded-2xl border border-blue-500/20 hover:border-blue-500/60 transition-all duration-500 cursor-pointer group relative overflow-hidden flex flex-col justify-between ${
              visibleCards.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              transitionDelay: `${index * 0.1}s`,
            }}
            // className="bg-white/5 rounded-xl border border-blue-500/20 overflow-hidden transition-all duration-300 hover:border-blue-500/40"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left group"
            >
              <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors pr-4">
                {faq.question}
              </span>
              <svg
                className={`w-6 h-6 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Підказка внизу */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-8">
          <p className="text-gray-300 text-lg mb-4">
            {contactTexts[currentLang]}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            {currentLang === "de" && "Jetzt kontaktieren"}
            {currentLang === "en" && "Contact Now"}
            {currentLang === "uk" && "Написати зараз"}
            {currentLang === "ru" && "Написать сейчас"}
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

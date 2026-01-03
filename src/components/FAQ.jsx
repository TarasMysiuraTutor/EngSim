import React, { useState, useEffect } from 'react';

const FAQ = ({ currentLang }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = {
    de: [
      {
        question: "Wie genau sind die Berechnungen?",
        answer: "Unsere Rechner verwenden bewährte ingenieurtechnische Formeln und Standards (DIN, EN, ISO). Die Berechnungen sind für Vorprojektierung und Überschlagsrechnungen geeignet. Für finale Projektberechnungen empfehlen wir die Konsultation eines qualifizierten Ingenieurs."
      },
      {
        question: "Sind die Rechner kostenlos?",
        answer: "Ja, alle 32 Rechner sind völlig kostenlos und ohne Registrierung nutzbar. Es gibt keine versteckten Kosten oder Premium-Versionen."
      },
      {
        question: "Welche Normen werden verwendet?",
        answer: "Wir verwenden hauptsächlich europäische Normen (DIN, EN) und internationale Standards (ISO). Die spezifischen Normen sind bei jedem Rechner angegeben."
      },
      {
        question: "Kann ich die Ergebnisse speichern?",
        answer: "Ja, Sie können die Ergebnisse als PDF exportieren oder ausdrucken. Die Berechnungen enthalten alle Eingabewerte, Formeln und Ergebnisse für Ihre Dokumentation."
      },
      {
        question: "Welche Einheiten werden verwendet?",
        answer: "Alle Rechner verwenden das metrische System (SI-Einheiten): mm, cm, m für Längen, N, kN für Kräfte, MPa für Spannungen, etc. Umrechnungen zwischen Einheiten sind integriert."
      },
      {
        question: "Funktionieren die Rechner offline?",
        answer: "Nach dem ersten Besuch können viele Funktionen offline genutzt werden dank PWA-Technologie. Eine Internetverbindung ist nur für Updates und Kontaktformular erforderlich."
      },
      {
        question: "Für wen sind die Rechner gedacht?",
        answer: "Die Rechner sind für Ingenieure, Techniker, Studenten und Fachkräfte im Bauwesen, Maschinenbau und Energietechnik konzipiert. Grundkenntnisse in den jeweiligen Fachgebieten werden vorausgesetzt."
      },
      {
        question: "Welche Browser werden unterstützt?",
        answer: "Alle modernen Browser werden unterstützt: Chrome, Firefox, Safari, Edge (neueste Versionen). Für optimale Leistung empfehlen wir Chrome oder Firefox."
      },
      {
        question: "Gibt es eine mobile App?",
        answer: "Sie können unsere Website als Progressive Web App (PWA) auf Ihrem Smartphone installieren. Klicken Sie im Browser-Menü auf 'Zum Startbildschirm hinzufügen'."
      },
      {
        question: "Wie kontaktiere ich den Support?",
        answer: "Bei Fragen oder Problemen nutzen Sie bitte unser Kontaktformular unten auf der Seite oder schreiben Sie direkt an Viktor Sukaylo."
      }
    ],
    en: [
      {
        question: "How accurate are the calculations?",
        answer: "Our calculators use proven engineering formulas and standards (DIN, EN, ISO). The calculations are suitable for preliminary design and estimates. For final project calculations, we recommend consulting a qualified engineer."
      },
      {
        question: "Are the calculators free?",
        answer: "Yes, all 32 calculators are completely free and available without registration. There are no hidden costs or premium versions."
      },
      {
        question: "Which standards are used?",
        answer: "We primarily use European standards (DIN, EN) and international standards (ISO). Specific standards are indicated for each calculator."
      },
      {
        question: "Can I save the results?",
        answer: "Yes, you can export the results as PDF or print them. The calculations include all input values, formulas, and results for your documentation."
      },
      {
        question: "Which units are used?",
        answer: "All calculators use the metric system (SI units): mm, cm, m for lengths, N, kN for forces, MPa for stresses, etc. Unit conversions are integrated."
      },
      {
        question: "Do the calculators work offline?",
        answer: "After the first visit, many functions can be used offline thanks to PWA technology. An internet connection is only required for updates and the contact form."
      },
      {
        question: "Who are the calculators for?",
        answer: "The calculators are designed for engineers, technicians, students, and professionals in construction, mechanical engineering, and energy technology. Basic knowledge in the respective fields is required."
      },
      {
        question: "Which browsers are supported?",
        answer: "All modern browsers are supported: Chrome, Firefox, Safari, Edge (latest versions). For optimal performance, we recommend Chrome or Firefox."
      },
      {
        question: "Is there a mobile app?",
        answer: "You can install our website as a Progressive Web App (PWA) on your smartphone. Click 'Add to Home Screen' in the browser menu."
      },
      {
        question: "How do I contact support?",
        answer: "For questions or problems, please use our contact form at the bottom of the page or write directly to Viktor Sukaylo."
      }
    ],
    uk: [
      {
        question: "Наскільки точні розрахунки?",
        answer: "Наші калькулятори використовують перевірені інженерні формули та стандарти (DIN, EN, ISO). Розрахунки підходять для попереднього проектування та оцінок. Для фінальних проектних розрахунків рекомендуємо консультацію кваліфікованого інженера."
      },
      {
        question: "Чи калькулятори безкоштовні?",
        answer: "Так, всі 32 калькулятори повністю безкоштовні та доступні без реєстрації. Немає прихованих витрат або преміум версій."
      },
      {
        question: "Які стандарти використовуються?",
        answer: "Ми в основному використовуємо європейські стандарти (DIN, EN) та міжнародні стандарти (ISO). Конкретні стандарти вказані для кожного калькулятора."
      }
      // Додайте решту питань...
    ],
    ru: [
      {
        question: "Насколько точны расчеты?",
        answer: "Наши калькуляторы используют проверенные инженерные формулы и стандарты (DIN, EN, ISO). Расчеты подходят для предварительного проектирования и оценок. Для финальных проектных расчетов рекомендуем консультацию квалифицированного инженера."
      },
      {
        question: "Калькуляторы бесплатны?",
        answer: "Да, все 32 калькулятора полностью бесплатны и доступны без регистрации. Нет скрытых расходов или премиум версий."
      },
      {
        question: "Какие стандарты используются?",
        answer: "Мы в основном используем европейские стандарты (DIN, EN) и международные стандарты (ISO). Конкретные стандарты указаны для каждого калькулятора."
      }
      // Додайте решту питань...
    ]
  };

  const currentFAQ = faqData[currentLang] || faqData.de;

  // Генеруємо FAQ Schema
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": currentFAQ.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Видаляємо старий schema
    const oldScript = document.getElementById('faq-schema');
    if (oldScript) {
      oldScript.remove();
    }

    // Додаємо новий
    const script = document.createElement('script');
    script.id = 'faq-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const script = document.getElementById('faq-schema');
      if (script) script.remove();
    };
  }, [currentLang]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const titles = {
    de: 'Häufig gestellte Fragen',
    en: 'Frequently Asked Questions',
    uk: 'Часті питання',
    ru: 'Часто задаваемые вопросы'
  };

  return (
    <section id="faq" className="py-20 px-8 relative overflow-hidden bg-[#1a1f3a]/50">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
        {titles[currentLang]}
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {currentFAQ.map((faq, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-xl border border-blue-500/20 overflow-hidden transition-all duration-300 hover:border-blue-500/40"
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
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
      <div className="max-w-4xl mx-auto mt-12 text-center ">
        <p className="text-gray-400 text-sm">
          {currentLang === 'de' && 'Weitere Fragen? Kontaktieren Sie uns über das Kontaktformular.'}
          {currentLang === 'en' && 'More questions? Contact us via the contact form.'}
          {currentLang === 'uk' && 'Є ще питання? Зв\'яжіться з нами через форму контактів.'}
          {currentLang === 'ru' && 'Есть вопросы? Свяжитесь с нами через форму контактов.'}
        </p>
      </div>
    </section>
  );
};

export default FAQ;
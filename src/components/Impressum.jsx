import React from 'react';

const Impressum = ({ currentLang }) => {
  const texts = {
    de: {
      title: 'Impressum',
      subtitle: 'Angaben gemäß § 5 TMG',
      responsible: 'Verantwortlich für den Inhalt',
      contact: 'Kontakt',
      email: 'E-Mail',
      disclaimer: 'Haftungsausschluss',
      disclaimerText: `Die auf dieser Website bereitgestellten ingenieurtechnischen Berechnungen dienen ausschließlich zu Informationszwecken. Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Berechnungen und Ergebnisse.

Die Nutzung der Rechner erfolgt auf eigene Gefahr. Für professionelle Berechnungen konsultieren Sie bitte einen qualifizierten Ingenieur.`,
      copyright: 'Urheberrecht',
      copyrightText: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.',
      liability: 'Haftung für Links',
      liabilityText: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.'
    },
    en: {
      title: 'Legal Notice',
      subtitle: 'Information pursuant to § 5 TMG',
      responsible: 'Responsible for content',
      contact: 'Contact',
      email: 'Email',
      disclaimer: 'Disclaimer',
      disclaimerText: `The engineering calculations provided on this website are for informational purposes only. Despite careful content control, we assume no liability for the accuracy, completeness, and timeliness of the calculations and results provided.

Use of the calculators is at your own risk. For professional calculations, please consult a qualified engineer.`,
      copyright: 'Copyright',
      copyrightText: 'The content and works created by the site operators on these pages are subject to German copyright law.',
      liability: 'Liability for Links',
      liabilityText: 'Our offer contains links to external third-party websites over whose content we have no influence. The respective provider or operator of the pages is always responsible for the content of the linked pages.'
    },
    uk: {
      title: 'Імпресум',
      subtitle: 'Інформація згідно § 5 TMG',
      responsible: 'Відповідальний за контент',
      contact: 'Контакти',
      email: 'Email',
      disclaimer: 'Відмова від відповідальності',
      disclaimerText: `Інженерні розрахунки, представлені на цьому веб-сайті, призначені виключно для інформаційних цілей. Незважаючи на ретельний контроль вмісту, ми не несемо відповідальності за точність, повноту та актуальність наданих розрахунків та результатів.

Використання калькуляторів здійснюється на власний ризик. Для професійних розрахунків проконсультуйтеся з кваліфікованим інженером.`,
      copyright: 'Авторські права',
      copyrightText: 'Вміст та роботи, створені операторами сайту на цих сторінках, підпадають під дію німецького авторського права.',
      liability: 'Відповідальність за посилання',
      liabilityText: 'Наша пропозиція містить посилання на зовнішні веб-сайти третіх сторін, на вміст яких ми не маємо впливу. За вміст пов\'язаних сторінок завжди відповідає відповідний провайдер або оператор сторінок.'
    },
    ru: {
      title: 'Импрессум',
      subtitle: 'Информация согласно § 5 TMG',
      responsible: 'Ответственный за контент',
      contact: 'Контакты',
      email: 'Email',
      disclaimer: 'Отказ от ответственности',
      disclaimerText: `Инженерные расчеты, представленные на этом веб-сайте, предназначены исключительно для информационных целей. Несмотря на тщательный контроль содержания, мы не несем ответственности за точность, полноту и актуальность предоставленных расчетов и результатов.

Использование калькуляторов осуществляется на ваш собственный риск. Для профессиональных расчетов проконсультируйтесь с квалифицированным инженером.`,
      copyright: 'Авторские права',
      copyrightText: 'Содержание и работы, созданные операторами сайта на этих страницах, подпадают под действие немецкого авторского права.',
      liability: 'Ответственность за ссылки',
      liabilityText: 'Наше предложение содержит ссылки на внешние веб-сайты третьих сторон, на содержание которых мы не имеем влияния. За содержание связанных страниц всегда отвечает соответствующий провайдер или оператор страниц.'
    }
  };

  const t = texts[currentLang] || texts.de;

  return (
    <section className="min-h-screen py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
          {t.title}
        </h1>
        
        <div className="space-y-8 text-gray-300">
          {/* Основна інформація */}
          <div className="bg-white/5 p-6 rounded-xl border border-blue-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-white">{t.subtitle}</h2>
            
            <div className="space-y-3">
              <div>
                <p className="text-lg font-semibold text-blue-400">{t.responsible}:</p>
                <p className="text-xl">Viktor Sukaylo</p>
              </div>
              
              <div>
                <p className="text-lg font-semibold text-blue-400">{t.contact}:</p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:viktor.sukaylo@example.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    viktor.sukaylo@example.com
                  </a>
                  <span className="text-sm text-gray-500">(замініть на реальний email)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-white">{t.disclaimer}</h2>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              {t.disclaimerText}
            </p>
          </div>

          {/* Copyright */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-white">{t.copyright}</h2>
            <p className="text-gray-300">
              {t.copyrightText}
            </p>
          </div>

          {/* Liability */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-white">{t.liability}</h2>
            <p className="text-gray-300">
              {t.liabilityText}
            </p>
          </div>

          {/* Додаткова інформація */}
          <div className="bg-blue-500/10 p-6 rounded-xl border border-blue-500/30">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Viktor Sukaylo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impressum;
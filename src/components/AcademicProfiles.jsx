// src/components/AcademicProfiles.jsx
import React from "react";
import eNUFTIRLogo from "../assets/dspace-logo.png";

const AcademicProfiles = ({ t }) => {
  const academicProfiles = [
    {
      name: "ORCID",
      url: "https://orcid.org/0000-0002-3503-3594",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 256 256" fill="currentColor">
          <path d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z" fill="#A6CE39"/>
          <g fill="#fff">
            <path d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7C191.7 111.2 178 93 148 93h-23.7v79.4zM71.3 54.8c0 5.2-4.2 9.4-9.4 9.4s-9.4-4.2-9.4-9.4 4.2-9.4 9.4-9.4 9.4 4.2 9.4 9.4z"/>
          </g>
        </svg>
      ),
      color: "from-[#A6CE39] to-[#7FB800]",
      description: t.orcidDesc || "Unique researcher identifier",
    },
    {
      name: "ResearchGate",
      url: "https://www.researchgate.net/profile/Taras-Mysiura",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68-.111.172-.111.32-.111.489v.027c0 .485.034.97.11 1.418.077.46.188.89.334 1.29.243.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93.042-.372.063-.753.063-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915-.063-.273-.115-.546-.147-.762-.032-.216-.048-.456-.048-.656 0-.26.016-.52.048-.78.032-.26.08-.52.147-.762.153-.46.364-.71.67-.914.307-.203.665-.353 1.21-.353.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199-.29-.549-.64-.942-1.068-1.177-.428-.234-.874-.351-1.35-.351zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z"/>
        </svg>
      ),
      color: "from-[#00d0b4] to-[#00a88e]",
      description: t.researchGateDesc || "Research publications and collaborations",
    },
    {
      name: "Scopus",
      url: "https://www.scopus.com/authid/detail.uri?authorId=57224858423",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="m24 19.059-.14-1.777c-1.426.772-2.945 1.076-4.465 1.076-3.319 0-5.96-2.782-5.96-6.475 0-3.903 2.595-6.31 5.633-6.31 1.917 0 3.39.303 4.792 1.075L24 4.895c-1.286-.608-2.337-.889-4.698-.889-4.534 0-7.97 3.53-7.97 8.017 0 5.12 4.09 7.924 7.9 7.924 1.916 0 3.506-.257 4.768-.888zm-14.954-3.46c0-2.22-1.964-3.225-3.857-4.347C3.716 10.364 2.15 9.756 2.15 8.12c0-1.215.889-2.548 2.642-2.548 1.519 0 2.57.234 3.903 1.029l.117-1.847c-1.239-.514-2.127-.748-4.137-.748C1.8 4.006.047 5.876.047 8.26c0 2.384 2.103 3.413 4.02 4.581 1.426.865 2.922 1.45 2.922 2.992 0 1.496-1.333 2.571-2.922 2.571-1.566 0-2.594-.35-3.786-1.075L0 19.176c1.215.56 2.454.818 4.16.818 2.385 0 4.885-1.473 4.885-4.395z"/>
        </svg>
      ),
      color: "from-[#f36e23] to-[#d85a1a]",
      description: t.scopusDesc || "Citation metrics and h-index",
    },
    {
      name: "Web of Science",
      url: "https://www.webofscience.com/wos/author/record/J-6515-2018",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 512 512">
          <path d="M235.356 8c-23.395 34.2-42.165 71.945-55.671 112.052 95.807 17.871 182.582 72.861 244.512 155 24.909-32.93 45.345-69.623 60.709-108.952C417.089 88.47 330.554 33.645 235.356 8zm188.841 267.052c-61.93 70.41-148.71 117.578-244.512 132.912 13.582 34.382 32.388 66.745 55.864 96.036 95.105-22.017 181.595-69.006 249.357-135.496-15.367-33.721-35.794-65.217-60.709-93.452zM98.633 122.506c-16.252.199-32.456 1.151-48.632 2.97-30.518 97.686-30.544 201.453-.066 299.15a486.068 486.068 0 0 0 129.748-2.84c-32.985-81.874-37.502-171.274-12.981-255.686a408.458 408.458 0 0 1 12.916-37.781c-26.776-4.205-53.9-6.126-80.987-5.813z"/>
        </svg>
      ),
      color: "from-[#5d6e7e] to-[#4a5a6a]",
      description: t.wosDesc || "Peer-reviewed publications database",
    },
    {
      name: "Google Scholar",
      url: "https://scholar.google.com.ua/citations?user=l0wHvl8AAAAJ&hl=uk&oi=ao",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24">
          <path fill="currentColor" d="M5.242 13.769 0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
        </svg>
      ),
      color: "from-[#4285f4] to-[#1967d2]",
      description: t.scholarDesc || "Citations and research impact",
    },
    {
      name: "eNUFTIR",
      url: "https://dspace.nuft.edu.ua/browse/author?order=ASC&rpp=20&value=%D0%9C%D0%B8%D1%81%D1%8E%D1%80%D0%B0,%20%D0%A2%D0%B0%D1%80%D0%B0%D1%81%20%D0%93%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
      icon: <img className="w-full h-full object-contain" src={eNUFTIRLogo} alt="eNUFTIR Logo" />,
      color: "from-gray-500  to-indigo-100",
      description: t.enuftirDesc || "NUFT Institutional Repository",
      isLargeIcon: true, // Спеціальний прапорець для більшого контейнера
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-[#0a0e27]/50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            {t.academicProfilesTitle || "Наукові профілі"}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.academicProfilesDesc ||
              "Мої дослідження та публікації в міжнародних наукових базах даних"}
          </p>
        </div>

        {/* Сітка профілів */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg rounded-2xl border border-blue-500/20 hover:border-blue-500/60 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Іконка з градієнтом */}
                <div
                  className={`${profile.isLargeIcon ? 'w-50 h-16' : 'w-16 h-16'} rounded-xl bg-gradient-to-br ${profile.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{profile.icon}</div>
                </div>

                {/* Назва */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {profile.name}
                </h3>

                {/* Опис */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {profile.description}
                </p>

                {/* Стрілка */}
                <div className="flex items-center text-blue-400 text-sm font-medium">
                  <span className="mr-2">
                    {t.viewProfile || "Переглянути профіль"}
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
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
                </div>

                {/* Іконка External Link */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Додаткова інформація */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-lg rounded-2xl border border-blue-500/20 px-6 py-4">
            <p className="text-gray-300 text-sm">
              <svg
                className="w-5 h-5 inline-block mr-2 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {t.academicProfilesNote ||
                "Публікації регулярно оновлюються. Натисніть на картку для перегляду деталей."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicProfiles;
// src/pages/AdminPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Copy,
  Plus,
  Trash2,
  Check,
  Video,
  FileText,
  Briefcase,
  Edit2,
  Save,
  Download,
  Upload,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialGenerator from "../components/TestimonialGenerator";

const AdminPage = ({ currentLang, setCurrentLang, t }) => {
  const [activeTab, setActiveTab] = useState("videos");
  const [editMode, setEditMode] = useState(false);
  const [copied, setCopied] = useState(false);

  // Завантаження збережених даних
  const loadFromStorage = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  };

  const [savedVideos, setSavedVideos] = useState(() =>
    loadFromStorage("admin_videos", {}),
  );
  const [savedServices, setSavedServices] = useState(() =>
    loadFromStorage("admin_services", {}),
  );
  const [savedProjects, setSavedProjects] = useState(() =>
    loadFromStorage("admin_projects", {}),
  );

  // Video data
  const [videoData, setVideoData] = useState({
    id: "",
    youtubeId: "",
    category: "flownex",
    duration: "",
    date: new Date().toISOString().split("T")[0],
    title: { uk: "", ru: "", en: "", de: "" },
    description: { uk: "", ru: "", en: "", de: "" },
    thumbnail: { uk: "", ru: "", en: "", de: "" },
    instructions: {
      uk: { url: "", filename: "", size: "" },
      ru: { url: "", filename: "", size: "" },
      en: { url: "", filename: "", size: "" },
      de: { url: "", filename: "", size: "" },
    },
    resources: [],
  });

  // Service data
  const [serviceData, setServiceData] = useState({
    id: 7,
    icon: "code",
    title: { uk: "", ru: "", en: "", de: "" },
    desc: { uk: "", ru: "", en: "", de: "" },
    feature1: { uk: "", ru: "", en: "", de: "" },
    feature2: { uk: "", ru: "", en: "", de: "" },
    feature3: { uk: "", ru: "", en: "", de: "" },
  });

  // Project data
  const [projectData, setProjectData] = useState({
    id: 7,
    iconType: "metalStructure",
    tags: ["МКЕ", "FEM"],
    year: "2025",
    title: { uk: "", ru: "", en: "", de: "" },
    desc: { uk: "", ru: "", en: "", de: "" },
    results: { uk: "", ru: "", en: "", de: "" },
    overview: { uk: "", ru: "", en: "", de: "" },
    duration: { uk: "", ru: "", en: "", de: "" },
    client: { uk: "", ru: "", en: "", de: "" },
    industry: { uk: "", ru: "", en: "", de: "" },
    challenges: { uk: [""], ru: [""], en: [""], de: [""] },
    results_detailed: {
      uk: [{ metric: "", description: "" }],
      ru: [{ metric: "", description: "" }],
      en: [{ metric: "", description: "" }],
      de: [{ metric: "", description: "" }],
    },
    technologies: { uk: [""], ru: [""], en: [""], de: [""] },
  });

  const languages = [
    { code: "uk", label: "Українська", flag: "🇺🇦" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
  ];

  const categories = [
    { value: "flownex", label: "FlowNEX" },
    { value: "solidworks", label: "SolidWorks" },
    { value: "autocad", label: "AutoCAD" },
    { value: "mathcad", label: "MathCAD" },
  ];

  const iconPalette = [
    { name: "code", icon: "💻", label: "Код" },
    { name: "fire", icon: "🔥", label: "Вогонь" },
    { name: "lightning", icon: "⚡", label: "Енергія" },
    { name: "flask", icon: "🧪", label: "Хімія" },
    { name: "clipboard", icon: "📋", label: "Документи" },
    { name: "lightbulb", icon: "💡", label: "Ідея" },
    { name: "tools", icon: "🛠️", label: "Інструменти" },
    { name: "chart", icon: "📊", label: "Графік" },
  ];

  const projectIconTypes = [
    { value: "metalStructure", label: "Металоконструкція" },
    { value: "heatExchanger", label: "Теплообмінник" },
    { value: "energy", label: "Енергія" },
    { value: "ventilation", label: "Вентиляція" },
    { value: "research", label: "Дослідження" },
    { value: "insulation", label: "Ізоляція" },
  ];

  // Збереження в localStorage
  const saveToStorage = () => {
    if (activeTab === "videos" && videoData.id) {
      const updated = { ...savedVideos, [videoData.id]: videoData };
      setSavedVideos(updated);
      localStorage.setItem("admin_videos", JSON.stringify(updated));
      alert(`✅ Відео #${videoData.id} збережено!`);
    } else if (activeTab === "services" && serviceData.id) {
      const updated = { ...savedServices, [serviceData.id]: serviceData };
      setSavedServices(updated);
      localStorage.setItem("admin_services", JSON.stringify(updated));
      alert(`✅ Послугу #${serviceData.id} збережено!`);
    } else if (activeTab === "projects" && projectData.id) {
      const updated = { ...savedProjects, [projectData.id]: projectData };
      setSavedProjects(updated);
      localStorage.setItem("admin_projects", JSON.stringify(updated));
      alert(`✅ Проект #${projectData.id} збережено!`);
    } else {
      alert("⚠️ Спочатку вкажи ID!");
    }
  };

  // Завантаження для редагування
  const loadExisting = (type, id) => {
    if (type === "videos" && savedVideos[id]) {
      setVideoData(savedVideos[id]);
      setEditMode(true);
      alert(`✏️ Відео #${id} завантажено для редагування`);
    } else if (type === "services" && savedServices[id]) {
      setServiceData(savedServices[id]);
      setEditMode(true);
      alert(`✏️ Послугу #${id} завантажено для редагування`);
    } else if (type === "projects" && savedProjects[id]) {
      setProjectData(savedProjects[id]);
      setEditMode(true);
      alert(`✏️ Проект #${id} завантажено для редагування`);
    } else {
      alert(`❌ ${type} #${id} ще не збережено. Створи новий!`);
    }
  };

  // Видалення
  const deleteItem = (type, id) => {
    if (confirm(`Видалити ${type} #${id}?`)) {
      if (type === "videos") {
        const updated = { ...savedVideos };
        delete updated[id];
        setSavedVideos(updated);
        localStorage.setItem("admin_videos", JSON.stringify(updated));
      } else if (type === "services") {
        const updated = { ...savedServices };
        delete updated[id];
        setSavedServices(updated);
        localStorage.setItem("admin_services", JSON.stringify(updated));
      } else if (type === "projects") {
        const updated = { ...savedProjects };
        delete updated[id];
        setSavedProjects(updated);
        localStorage.setItem("admin_projects", JSON.stringify(updated));
      }
      alert(`✅ Видалено!`);
    }
  };

  // Експорт всіх даних
  const exportAll = () => {
    const allData = {
      videos: savedVideos,
      services: savedServices,
      projects: savedProjects,
    };
    const dataStr = JSON.stringify(allData, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "admin-backup.json";
    link.click();
  };

  // Імпорт даних
  const importData = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          if (data.videos) {
            setSavedVideos(data.videos);
            localStorage.setItem("admin_videos", JSON.stringify(data.videos));
          }
          if (data.services) {
            setSavedServices(data.services);
            localStorage.setItem(
              "admin_services",
              JSON.stringify(data.services),
            );
          }
          if (data.projects) {
            setSavedProjects(data.projects);
            localStorage.setItem(
              "admin_projects",
              JSON.stringify(data.projects),
            );
          }
          alert("✅ Дані імпортовано!");
        } catch (err) {
          alert("❌ Помилка читання файлу");
        }
      };
      reader.readAsText(file);
    }
  };

  const generateServiceCode = () => {
    const iconEmoji =
      iconPalette.find((i) => i.name === serviceData.icon)?.icon || "💻";
    return `// В translations.js додай для кожної мови:
service${serviceData.id}Title: "${serviceData.title.uk}",
service${serviceData.id}Desc: "${serviceData.desc.uk}",
service${serviceData.id}Feature1: "${serviceData.feature1.uk}",
service${serviceData.id}Feature2: "${serviceData.feature2.uk}",
service${serviceData.id}Feature3: "${serviceData.feature3.uk}",

// В Services.jsx:
{ 
  icon: <span className="text-4xl">${iconEmoji}</span>,
  titleKey: 'service${serviceData.id}Title', 
  descKey: 'service${serviceData.id}Desc',
  featuresKeys: ['service${serviceData.id}Feature1', 'service${serviceData.id}Feature2', 'service${serviceData.id}Feature3']
},`;
  };

  const generateProjectCode = () => {
    return `{
  id: ${projectData.id},
  icon: icons.${projectData.iconType},
  title: { uk: "${projectData.title.uk}", ru: "${projectData.title.ru}", en: "${projectData.title.en}", de: "${projectData.title.de}" },
  desc: { uk: "${projectData.desc.uk}", ru: "${projectData.desc.ru}", en: "${projectData.desc.en}", de: "${projectData.desc.de}" },
  tags: [${projectData.tags.map((t) => `'${t}'`).join(", ")}],
  year: "${projectData.year}",
},`;
  };

  const copyToClipboard = () => {
    let code = "";
    if (activeTab === "videos") code = generateVideoCode();
    else if (activeTab === "services") code = generateServiceCode();
    else code = generateProjectCode();

    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSavedIds = () => {
    if (activeTab === "videos") return Object.keys(savedVideos);
    if (activeTab === "services") return Object.keys(savedServices);
    return Object.keys(savedProjects);
  };

  const handleInputChange = (field, value) => {
    setVideoData((prev) => ({ ...prev, [field]: value }));
  };

  const handleTranslationChange = (field, lang, value) => {
    setVideoData((prev) => ({
      ...prev,
      [field]: { ...prev[field], [lang]: value },
    }));
  };

  const handleInstructionChange = (lang, field, value) => {
    setVideoData((prev) => ({
      ...prev,
      instructions: {
        ...prev.instructions,
        [lang]: { ...prev.instructions[lang], [field]: value },
      },
    }));
  };

  const addResource = () => {
    setVideoData((prev) => ({
      ...prev,
      resources: [
        ...prev.resources,
        {
          type: "model",
          name: { uk: "", ru: "", en: "", de: "" },
          url: "",
          filename: "",
          size: "",
        },
      ],
    }));
  };

  const removeResource = (index) => {
    setVideoData((prev) => ({
      ...prev,
      resources: prev.resources.filter((_, i) => i !== index),
    }));
  };

  const handleResourceChange = (index, field, value) => {
    setVideoData((prev) => ({
      ...prev,
      resources: prev.resources.map((res, i) =>
        i === index ? { ...res, [field]: value } : res,
      ),
    }));
  };

  const handleResourceNameChange = (index, lang, value) => {
    setVideoData((prev) => ({
      ...prev,
      resources: prev.resources.map((res, i) =>
        i === index ? { ...res, name: { ...res.name, [lang]: value } } : res,
      ),
    }));
  };

  const generateVideoCode = () => {
    const categoryName =
      categories.find((c) => c.value === videoData.category)?.label ||
      videoData.category;

    return `  {
    id: ${videoData.id},
    title: {
      uk: "${videoData.title.uk}",
      ru: "${videoData.title.ru}",
      en: "${videoData.title.en}",
      de: "${videoData.title.de}",
    },
    description: {
      uk: "${videoData.description.uk}",
      ru: "${videoData.description.ru}",
      en: "${videoData.description.en}",
      de: "${videoData.description.de}",
    },
    youtubeId: "${videoData.youtubeId}",
    category: "${videoData.category}",
    categoryName: {
      uk: "${categoryName}",
      ru: "${categoryName}",
      en: "${categoryName}",
      de: "${categoryName}",
    },
    duration: "${videoData.duration}",
    date: "${videoData.date}",
    thumbnail: {
      uk: "${videoData.thumbnail.uk}",
      ru: "${videoData.thumbnail.ru}",
      en: "${videoData.thumbnail.en}",
      de: "${videoData.thumbnail.de}",
    },
    instructions: {
      uk: {
        url: "${videoData.instructions.uk.url}",
        filename: "${videoData.instructions.uk.filename}",
        size: "${videoData.instructions.uk.size}",
      },
      ru: {
        url: "${videoData.instructions.ru.url}",
        filename: "${videoData.instructions.ru.filename}",
        size: "${videoData.instructions.ru.size}",
      },
      en: {
        url: "${videoData.instructions.en.url}",
        filename: "${videoData.instructions.en.filename}",
        size: "${videoData.instructions.en.size}",
      },
      de: {
        url: "${videoData.instructions.de.url}",
        filename: "${videoData.instructions.de.filename}",
        size: "${videoData.instructions.de.size}",
      },
    },${
      videoData.resources.length > 0
        ? `
    resources: [${videoData.resources
      .map(
        (res) => `
      {
        type: "${res.type}",
        name: {
          uk: "${res.name.uk}",
          ru: "${res.name.ru}",
          en: "${res.name.en}",
          de: "${res.name.de}",
        },
        url: "${res.url}",
        filename: "${res.filename}",
        size: "${res.size}",
      }`,
      )
      .join(",")}
    ],`
        : ""
    }
  },`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200">
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />
      {/* <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200"> */}
      <div className="pt-32 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm">
            <Link
              to="/"
              className="text-blue-400 hover:text-cyan-400 transition-colors"
            >
              {t.home || "Home"}
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-400">Admin Panel</span>
          </nav>

          {/* Header */}
          <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-8 mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              ⚙️ {t.adminTitle}
            </h1>
            <p className="text-gray-400">
             {t.adminSubtitle}
            </p>
          </div>

          {/* Кнопки управління */}
          <div className="flex gap-4 mb-8 flex-wrap">
            <button
              onClick={saveToStorage}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 rounded-xl font-semibold transition-all"
            >
              <Save size={20} />
              Зберегти
            </button>

            <button
              onClick={exportAll}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold transition-all"
            >
              <Download size={20} />
              Експорт всіх даних
            </button>

            <label className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 rounded-xl font-semibold transition-all cursor-pointer">
              <Upload size={20} />
              Імпорт даних
              <input
                type="file"
                accept=".json"
                onChange={importData}
                className="hidden"
              />
            </label>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 flex-wrap">
            <button
              onClick={() => {
                setActiveTab("videos");
                setEditMode(false);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === "videos"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                  : "bg-white/5 border border-blue-500/30 text-gray-400 hover:text-white"
              }`}
            >
              <Video size={20} />
              {t.adminVideoGenerator}
            </button>{" "}
            <button
              onClick={() => setActiveTab("testimonials")}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeTab === "testimonials"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              <span className="text-2xl">⭐</span>
              <span>{t.adminTestimonialGenerator}</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("services");
                setEditMode(false);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === "services"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                  : "bg-white/5 border border-blue-500/30 text-gray-400 hover:text-white"
              }`}
            >
              <FileText size={20} />
              {t.adminServiceGenerator}
            </button>
            <button
              onClick={() => {
                setActiveTab("projects");
                setEditMode(false);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === "projects"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                  : "bg-white/5 border border-blue-500/30 text-gray-400 hover:text-white"
              }`}
            >
              <Briefcase size={20} />
              {t.adminProjectGenerator}
            </button>
          </div>

          {/* Збережені елементи */}
          {getSavedIds().length > 0 && (
            <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6 mb-8">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">
                📚 Збережені{" "}
                {activeTab === "videos"
                  ? "відео"
                  : activeTab === "services"
                    ? "послуги"
                    : "проекти"}
              </h2>

              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {getSavedIds().map((id) => (
                  <div key={id} className="relative group">
                    <button
                      onClick={() => loadExisting(activeTab, id)}
                      className="w-full px-4 py-3 bg-blue-500/20 border border-blue-500/40 rounded-xl hover:bg-blue-500/30 transition-all flex items-center justify-center gap-2"
                    >
                      <Edit2 size={16} />#{id}
                    </button>

                    <button
                      onClick={() => deleteItem(activeTab, id)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Видалити"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Edit Mode Selector */}
          {!editMode && (
            <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-cyan-400">
                  {activeTab === "videos" && "📹 Редагувати існуюче відео"}
                  {activeTab === "services" && "📝 Редагувати існуючу послугу"}
                  {activeTab === "projects" && "🎯 Редагувати існуючий проект"}
                </h2>
              </div>

              <p className="text-gray-500 text-sm mt-4">
                💡 Натисни на номер, щоб завантажити для редагування
              </p>
            </div>
          )}

          {editMode && (
            <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-2xl p-4 mb-8">
              <div className="flex justify-between items-center">
                <p className="text-yellow-400">✏️ Режим редагування активний</p>
                <button
                  onClick={() => setEditMode(false)}
                  className="px-4 py-2 bg-gray-500/20 rounded-lg hover:bg-gray-500/30"
                >
                  Створити новий
                </button>
              </div>
            </div>
          )}

          {/* VIDEOS TAB */}
          {activeTab === "videos" ? (
            <>
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* ЛІВА КОЛОНКА: Форма відео */}
                <div className="space-y-6">
                  {/* Основна інформація */}
                  <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                      📋 {t.adminBasicInfo}
                    </h2>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          {t.adminVideoId}
                        </label>
                        <input
                          type="number"
                          value={videoData.id}
                          onChange={(e) =>
                            handleInputChange("id", e.target.value)
                          }
                          className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                          placeholder="1"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          {t.adminYoutubeId}
                        </label>
                        <input
                          type="text"
                          value={videoData.youtubeId}
                          onChange={(e) =>
                            handleInputChange("youtubeId", e.target.value)
                          }
                          className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                          placeholder="D7DFO0kUESI"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          {t.adminCategory}
                        </label>
                        <select
                          value={videoData.category}
                          onChange={(e) =>
                            handleInputChange("category", e.target.value)
                          }
                          className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        >
                          {categories.map((cat) => (
                            <option key={cat.value} value={cat.value}>
                              {cat.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">
                            {t.adminDuration}
                          </label>
                          <input
                            type="text"
                            value={videoData.duration}
                            onChange={(e) =>
                              handleInputChange("duration", e.target.value)
                            }
                            className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            placeholder="20:30"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">
                            {t.adminDate}
                          </label>
                          <input
                            type="date"
                            value={videoData.date}
                            onChange={(e) =>
                              handleInputChange("date", e.target.value)
                            }
                            className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Назви */}
                  <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                      📝 {t.adminTitles}
                    </h2>
                    {languages.map((lang) => (
                      <div key={lang.code} className="mb-4">
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          {lang.flag} {lang.label}
                        </label>
                        <input
                          type="text"
                          value={videoData.title[lang.code]}
                          onChange={(e) =>
                            handleTranslationChange(
                              "title",
                              lang.code,
                              e.target.value,
                            )
                          }
                          className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* ПРАВА КОЛОНКА: Описи та thumbnails */}
                <div className="space-y-6">
                  {/* Описи */}
                  <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                      💬 {t.adminDescriptions}
                    </h2>
                    {languages.map((lang) => (
                      <div key={lang.code} className="mb-4">
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          {lang.flag} {lang.label}
                        </label>
                        <textarea
                          value={videoData.description[lang.code]}
                          onChange={(e) =>
                            handleTranslationChange(
                              "description",
                              lang.code,
                              e.target.value,
                            )
                          }
                          className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                          rows="3"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Thumbnails */}
                  <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                      🖼️ {t.adminThumbnails}
                    </h2>
                    {languages.map((lang) => (
                      <div key={lang.code} className="mb-4">
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          {lang.flag} {lang.label}
                        </label>
                        <input
                          type="text"
                          value={videoData.thumbnail[lang.code]}
                          onChange={(e) =>
                            handleTranslationChange(
                              "thumbnail",
                              lang.code,
                              e.target.value,
                            )
                          }
                          className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                          placeholder="https://res.cloudinary.com/..."
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Інструкції */}
              <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                  📄 {t.adminInstructions}
                </h2>
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className="mb-4 p-4 bg-[#0a0e27]/50 rounded-xl"
                  >
                    <h3 className="font-medium text-gray-300 mb-3">
                      {lang.flag} {lang.label}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          Google Drive URL
                        </label>
                        <input
                          type="text"
                          value={videoData.instructions[lang.code].url}
                          onChange={(e) =>
                            handleInstructionChange(
                              lang.code,
                              "url",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 bg-[#0a0e27] border border-blue-500/20 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                          placeholder="https://drive.google.com/file/d/..."
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          Filename
                        </label>
                        <input
                          type="text"
                          value={videoData.instructions[lang.code].filename}
                          onChange={(e) =>
                            handleInstructionChange(
                              lang.code,
                              "filename",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 bg-[#0a0e27] border border-blue-500/20 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                          placeholder="Tutorial 01.pdf"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          Size
                        </label>
                        <input
                          type="text"
                          value={videoData.instructions[lang.code].size}
                          onChange={(e) =>
                            handleInstructionChange(
                              lang.code,
                              "size",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 bg-[#0a0e27] border border-blue-500/20 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                          placeholder="831 kB"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ресурси */}
              <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-cyan-400">
                    🗂️ {t.adminResources}
                  </h2>
                  <button
                    onClick={addResource}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 rounded-xl font-semibold hover:scale-105 transition-all"
                  >
                    <Plus size={20} />
                    {t.adminAddResource}
                  </button>
                </div>
                {videoData.resources.map((resource, index) => (
                  <div
                    key={index}
                    className="mb-4 p-4 bg-[#0a0e27]/50 rounded-xl border-l-4 border-green-500"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-medium text-gray-300">
                        {t.adminResource} #{index + 1}
                      </h3>
                      <button
                        onClick={() => removeResource(index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 mb-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          {t.adminType}
                        </label>
                        <select
                          value={resource.type}
                          onChange={(e) =>
                            handleResourceChange(index, "type", e.target.value)
                          }
                          className="w-full px-3 py-2 bg-[#0a0e27] border border-blue-500/20 rounded-lg text-sm text-white"
                        >
                          <option value="model">Model</option>
                          <option value="drawing">Drawing</option>
                          <option value="archive">Archive</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          URL
                        </label>
                        <input
                          type="text"
                          value={resource.url}
                          onChange={(e) =>
                            handleResourceChange(index, "url", e.target.value)
                          }
                          className="w-full px-3 py-2 bg-[#0a0e27] border border-blue-500/20 rounded-lg text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          {t.adminFilename}
                        </label>
                        <input
                          type="text"
                          value={resource.filename}
                          onChange={(e) =>
                            handleResourceChange(
                              index,
                              "filename",
                              e.target.value,
                            )
                          }
                          className="w-full px-3 py-2 bg-[#0a0e27] border border-blue-500/20 rounded-lg text-sm text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">
                          {t.adminSize}
                        </label>
                        <input
                          type="text"
                          value={resource.size}
                          onChange={(e) =>
                            handleResourceChange(index, "size", e.target.value)
                          }
                          className="w-full px-3 py-2 bg-[#0a0e27] border border-blue-500/20 rounded-lg text-sm text-white"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {languages.map((lang) => (
                        <div key={lang.code}>
                          <label className="block text-xs font-medium text-gray-500 mb-1">
                            {t.adminName} ({lang.flag} {lang.label})
                          </label>
                          <input
                            type="text"
                            value={resource.name[lang.code]}
                            onChange={(e) =>
                              handleResourceNameChange(
                                index,
                                lang.code,
                                e.target.value,
                              )
                            }
                            className="w-full px-3 py-2 bg-[#0a0e27] border border-blue-500/20 rounded-lg text-sm text-white"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Згенерований код */}
              <div className="bg-[#0a0e27] border border-blue-500/30 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-cyan-400">
                    💻 {t.adminGeneratedCode}
                  </h2>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold hover:scale-105 transition-all"
                  >
                    {copied ? <Check size={20} /> : <Copy size={20} />}
                    {copied ? "Скопійовано!" : "Копіювати"}
                  </button>
                </div>
                <div className="bg-black/50 border border-blue-500/20 p-4 rounded-xl overflow-x-auto">
                  <pre className="text-green-400 text-sm font-mono">
                    {generateVideoCode()}
                  </pre>
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  💡 {t.adminCodeHint}{" "}
                  <code className="text-cyan-400">videosData</code> у файлі{" "}
                  <code className="text-cyan-400">src/data/videosData.js</code>
                </p>
              </div>
            </>
          ) : (
            <TestimonialGenerator />
          )}

          {/* SERVICES TAB */}
          {activeTab === "services" && (
            <div className="space-y-6">
              <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                  📋 Основна інформація
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    type="number"
                    placeholder="ID послуги"
                    value={serviceData.id}
                    onChange={(e) =>
                      setServiceData((prev) => ({
                        ...prev,
                        id: e.target.value,
                      }))
                    }
                    className="px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Вибери іконку
                  </label>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                    {iconPalette.map((icon) => (
                      <button
                        key={icon.name}
                        onClick={() =>
                          setServiceData((prev) => ({
                            ...prev,
                            icon: icon.name,
                          }))
                        }
                        className={`p-4 rounded-xl transition-all ${
                          serviceData.icon === icon.name
                            ? "bg-blue-500 border-2 border-blue-400"
                            : "bg-white/5 border border-blue-500/30 hover:bg-white/10"
                        }`}
                        title={icon.label}
                      >
                        <span className="text-3xl">{icon.icon}</span>
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Вибрано:{" "}
                    {
                      iconPalette.find((i) => i.name === serviceData.icon)
                        ?.label
                    }
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                  📝 Назва
                </h2>
                {languages.map((lang) => (
                  <div key={lang.code} className="mb-3">
                    <label className="block text-sm text-gray-400 mb-1">
                      {lang.flag} {lang.label}
                    </label>
                    <input
                      type="text"
                      value={serviceData.title[lang.code]}
                      onChange={(e) =>
                        setServiceData((prev) => ({
                          ...prev,
                          title: {
                            ...prev.title,
                            [lang.code]: e.target.value,
                          },
                        }))
                      }
                      className="w-full px-4 py-2 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white"
                    />
                  </div>
                ))}
              </div>

              <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                  💬 Опис
                </h2>
                {languages.map((lang) => (
                  <div key={lang.code} className="mb-3">
                    <label className="block text-sm text-gray-400 mb-1">
                      {lang.flag} {lang.label}
                    </label>
                    <textarea
                      value={serviceData.desc[lang.code]}
                      onChange={(e) =>
                        setServiceData((prev) => ({
                          ...prev,
                          desc: { ...prev.desc, [lang.code]: e.target.value },
                        }))
                      }
                      className="w-full px-4 py-2 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white"
                      rows="2"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROJECTS TAB */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                  📋 Основна інформація
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    type="number"
                    placeholder="ID"
                    value={projectData.id}
                    onChange={(e) =>
                      setProjectData((prev) => ({
                        ...prev,
                        id: e.target.value,
                      }))
                    }
                    className="px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white"
                  />
                  <input
                    type="text"
                    placeholder="Рік"
                    value={projectData.year}
                    onChange={(e) =>
                      setProjectData((prev) => ({
                        ...prev,
                        year: e.target.value,
                      }))
                    }
                    className="px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Тип іконки
                  </label>
                  <select
                    value={projectData.iconType}
                    onChange={(e) =>
                      setProjectData((prev) => ({
                        ...prev,
                        iconType: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white"
                  >
                    {projectIconTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Теги (через кому)
                  </label>
                  <input
                    type="text"
                    value={projectData.tags.join(", ")}
                    onChange={(e) =>
                      setProjectData((prev) => ({
                        ...prev,
                        tags: e.target.value.split(",").map((t) => t.trim()),
                      }))
                    }
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white"
                  />
                </div>
              </div>

              <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                  📝 Назва
                </h2>
                {languages.map((lang) => (
                  <div key={lang.code} className="mb-3">
                    <label className="block text-sm text-gray-400 mb-1">
                      {lang.flag} {lang.label}
                    </label>
                    <input
                      type="text"
                      value={projectData.title[lang.code]}
                      onChange={(e) =>
                        setProjectData((prev) => ({
                          ...prev,
                          title: {
                            ...prev.title,
                            [lang.code]: e.target.value,
                          },
                        }))
                      }
                      className="w-full px-4 py-2 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* </div> */}

      <Footer t={t} />
    </div>
  );
};

export default AdminPage;

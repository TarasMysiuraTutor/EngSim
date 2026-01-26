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

// Імпорт JSON файлів
import servicesDataJSON from "../data/json/services.json";
import projectsDataJSON from "../data/json/projects.json";
import videosDataJSON from "../data/json/videos.json";
import testimonialsDataJSON from "../data/json/testimonials.json";

const AdminPage = ({ currentLang, setCurrentLang, t }) => {
  const [activeTab, setActiveTab] = useState("videos");
  const [editMode, setEditMode] = useState(false);
  const [copied, setCopied] = useState(false);

  // Стан для JSON даних
  const [services, setServices] = useState(servicesDataJSON);
  const [projects, setProjects] = useState(projectsDataJSON);
  const [videos, setVideos] = useState(videosDataJSON);
  const [testimonials, setTestimonials] = useState(testimonialsDataJSON);

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
    icon: "calculator",
    titleKey: "",
    descKey: "",
    featuresKeys: ["", "", ""]
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
    { name: "calculator", icon: "💻", label: "Калькулятор" },
    { name: "fire", icon: "🔥", label: "Вогонь" },
    { name: "lightning", icon: "⚡", label: "Енергія" },
    { name: "flask", icon: "🧪", label: "Хімія" },
    { name: "document", icon: "📋", label: "Документи" },
    { name: "lightbulb", icon: "💡", label: "Ідея" },
    { name: "tools", icon: "🛠️", label: "Інструменти" },
    { name: "chart", icon: "📊", label: "Графік" },
  ];

  const projectIconTypes = [
    { value: "metalStructure", label: "Металоконструкції" },
    { value: "heatExchanger", label: "Теплообмінник" },
    { value: "energy", label: "Енергія" },
    { value: "ventilation", label: "Вентиляція" },
    { value: "research", label: "Дослідження" },
    { value: "insulation", label: "Ізоляція" },
  ];

  // Збереження в JSON
  const saveToJSON = () => {
    if (activeTab === "videos" && videoData.id) {
      const updated = [...videos];
      const existingIndex = updated.findIndex(v => v.id === parseInt(videoData.id));
      
      if (existingIndex >= 0) {
        updated[existingIndex] = videoData;
      } else {
        updated.push(videoData);
      }
      
      setVideos(updated);
      alert(`✅ Відео #${videoData.id} збережено!`);
    } else if (activeTab === "services" && serviceData.id) {
      const updated = [...services];
      const existingIndex = updated.findIndex(s => s.id === parseInt(serviceData.id));
      
      if (existingIndex >= 0) {
        updated[existingIndex] = serviceData;
      } else {
        updated.push(serviceData);
      }
      
      setServices(updated);
      alert(`✅ Послугу #${serviceData.id} збережено!`);
    } else if (activeTab === "projects" && projectData.id) {
      const updated = [...projects];
      const existingIndex = updated.findIndex(p => p.id === parseInt(projectData.id));
      
      if (existingIndex >= 0) {
        updated[existingIndex] = projectData;
      } else {
        updated.push(projectData);
      }
      
      setProjects(updated);
      alert(`✅ Проект #${projectData.id} збережено!`);
    } else {
      alert("⚠️ Спочатку вкажи ID!");
    }
  };

  // Завантаження для редагування
  const loadExisting = (type, id) => {
    if (type === "videos") {
      const video = videos.find(v => v.id === parseInt(id));
      if (video) {
        setVideoData(video);
        setEditMode(true);
        alert(`✏️ Відео #${id} завантажено для редагування`);
      }
    } else if (type === "services") {
      const service = services.find(s => s.id === parseInt(id));
      if (service) {
        setServiceData(service);
        setEditMode(true);
        alert(`✏️ Послугу #${id} завантажено для редагування`);
      }
    } else if (type === "projects") {
      const project = projects.find(p => p.id === parseInt(id));
      if (project) {
        setProjectData(project);
        setEditMode(true);
        alert(`✏️ Проект #${id} завантажено для редагування`);
      }
    }
  };

  // Видалення
  const deleteItem = (type, id) => {
    if (confirm(`Видалити ${type} #${id}?`)) {
      if (type === "videos") {
        setVideos(videos.filter(v => v.id !== parseInt(id)));
      } else if (type === "services") {
        setServices(services.filter(s => s.id !== parseInt(id)));
      } else if (type === "projects") {
        setProjects(projects.filter(p => p.id !== parseInt(id)));
      }
      alert(`✅ Видалено!`);
    }
  };

  // Експорт JSON файлів
  const exportJSON = (data, filename) => {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Експорт всіх даних
  const exportAll = () => {
    exportJSON(services, 'services.json');
    exportJSON(projects, 'projects.json');
    exportJSON(videos, 'videos.json');
    exportJSON(testimonials, 'testimonials.json');
    alert('✅ Всі JSON файли завантажено!');
  };

  // Імпорт даних
  const importData = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          
          // Визначаємо тип файлу по структурі
          if (Array.isArray(data) && data.length > 0) {
            if (data[0].youtubeId) {
              setVideos(data);
              alert("✅ Відео імпортовано!");
            } else if (data[0].iconType) {
              setProjects(data);
              alert("✅ Проекти імпортовано!");
            } else if (data[0].icon && data[0].titleKey) {
              setServices(data);
              alert("✅ Послуги імпортовано!");
            } else if (data[0].rating) {
              setTestimonials(data);
              alert("✅ Відгуки імпортовано!");
            }
          }
        } catch (err) {
          alert("❌ Помилка читання файлу: " + err.message);
        }
      };
      reader.readAsText(file);
    }
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
    if (activeTab === "videos") return videos.map(v => v.id);
    if (activeTab === "services") return services.map(s => s.id);
    return projects.map(p => p.id);
  };

  // Video handlers
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

  const generateServiceCode = () => {
    return JSON.stringify(serviceData, null, 2);
  };

  const generateProjectCode = () => {
    return JSON.stringify(projectData, null, 2);
  };

  const generateVideoCode = () => {
    return JSON.stringify(videoData, null, 2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200">
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />
      
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
              ⚙️ {t.adminTitle || 'Адмін-панель'}
            </h1>
            <p className="text-gray-400">
              {t.adminSubtitle || 'Управління контентом через JSON файли'}
            </p>
            
            {/* Статистика */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">{videos.length}</div>
                <div className="text-sm text-gray-400">Відео</div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">{services.length}</div>
                <div className="text-sm text-gray-400">Послуг</div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400">{projects.length}</div>
                <div className="text-sm text-gray-400">Проектів</div>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400">{testimonials.length}</div>
                <div className="text-sm text-gray-400">Відгуків</div>
              </div>
            </div>
          </div>

          {/* Кнопки управління */}
          <div className="flex gap-4 mb-8 flex-wrap">
            <button
              onClick={saveToJSON}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 rounded-xl font-semibold transition-all"
            >
              <Save size={20} />
              Зберегти в JSON
            </button>

            <button
              onClick={exportAll}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold transition-all"
            >
              <Download size={20} />
              Експорт всіх JSON
            </button>

            <label className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 rounded-xl font-semibold transition-all cursor-pointer">
              <Upload size={20} />
              Імпорт JSON
              <input
                type="file"
                accept=".json"
                onChange={importData}
                className="hidden"
              />
            </label>
            
            <button
              onClick={() => exportJSON(
                activeTab === 'videos' ? videos :
                activeTab === 'services' ? services :
                activeTab === 'projects' ? projects : testimonials,
                `${activeTab}.json`
              )}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition-all"
            >
              <Download size={20} />
              Експорт {activeTab}.json
            </button>
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
              {t.adminVideoGenerator || 'Відео'}
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
              {t.adminServiceGenerator || 'Послуги'}
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
              {t.adminProjectGenerator || 'Проекти'}
            </button>
            
            <button
              onClick={() => setActiveTab("testimonials")}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeTab === "testimonials"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              <span className="text-2xl">⭐</span>
              <span>{t.adminTestimonialGenerator || 'Відгуки'}</span>
            </button>
          </div>

          {/* Збережені елементи */}
          {getSavedIds().length > 0 && activeTab !== 'testimonials' && (
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

          {/* VIDEOS TAB - Скорочена версія, залишаю твою оригінальну форму */}
          {activeTab === "videos" && (
            <>
              {/* Тут твоя оригінальна форма для відео */}
              <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                  📋 Основна інформація
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="ID"
                    value={videoData.id}
                    onChange={(e) => handleInputChange("id", e.target.value)}
                    className="px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white"
                  />
                  <input
                    type="text"
                    placeholder="YouTube ID"
                    value={videoData.youtubeId}
                    onChange={(e) => handleInputChange("youtubeId", e.target.value)}
                    className="px-4 py-3 bg-[#0a0e27] border border-blue-500/30 rounded-xl text-white"
                  />
                </div>
                {/* Решта форми... */}
              </div>

              {/* Згенерований код */}
              <div className="bg-[#0a0e27] border border-blue-500/30 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-cyan-400">
                    💻 JSON Preview
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
              </div>
            </>
          )}

          {/* Testimonials Tab */}
          {activeTab === "testimonials" && <TestimonialGenerator />}
        </div>
      </div>

      <Footer t={t} />
    </div>
  );
};

export default AdminPage;
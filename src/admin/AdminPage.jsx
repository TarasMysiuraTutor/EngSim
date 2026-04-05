// =============================================================
// ✅ AdminPage.jsx (Enterprise + Premium Sidebar + Multilang)
// =============================================================

import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ✅ Компоненти
import { Sidebar } from "./components/Sidebar";
import { AdminSearchBar } from "./components/AdminSearchBar";
import { AdminFilterBar } from "./components/AdminFilterBar";
import { AdminSortBar } from "./components/AdminSortBar";
import { AdminList } from "./components/AdminList";

// ✅ Вкладки
import { VideosTab } from "./tabs/VideosTab";
import { ServicesTab } from "./tabs/ServicesTab";
import { ProjectsTab } from "./tabs/ProjectsTab";
import { BooksTab } from "./tabs/BooksTab";
import { TestimonialsTab } from "./tabs/TestimonialsTab";

// ✅ Багатомовність
import { adminTranslations } from "./i18n/adminTranslations";

// ✅ Дані JSON
import videosData from "../data/json/videos.json";
import servicesData from "../data/json/services.json";
import projectsData from "../data/json/projects.json";
import booksData from "../data/json/books.json";
import testimonialsData from "../data/json/testimonials.json";

// ✅ Утиліти
import { searchItems } from "./components/utils/search";
import { filterItems } from "./components/utils/filter";
import { sortItems } from "./components/utils/sort";

// ✅ Іконки
import { iconPalette, projectIconTypes } from "./components/utils/icons";

export default function AdminPage({ currentLang, setCurrentLang, t}) {
  const t_admin = adminTranslations[currentLang];

  // ---------------------------------------------------------
  // ✅ ТАБИ
  // ---------------------------------------------------------
  const [activeTab, setActiveTab] = useState("videos");
  const [editMode, setEditMode] = useState(false);

  // ---------------------------------------------------------
  // ✅ ПОШУК / ФІЛЬТР / СОРТУВАННЯ
  // ---------------------------------------------------------
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortBy, setSortBy] = useState("id");

  // ---------------------------------------------------------
  // ✅ ОСНОВНІ ДАНІ
  // ---------------------------------------------------------
  const [videos, setVideos] = useState(videosData);
  const [services, setServices] = useState(servicesData);
  const [projects, setProjects] = useState(projectsData);
  const [books, setBooks] = useState(booksData);
  const [testimonials, setTestimonials] = useState(testimonialsData);

  // ---------------------------------------------------------
  // ✅ ФОРМИ (для редагування)
  // ---------------------------------------------------------

  const [videoData, setVideoData] = useState({
    id: "",
    youtubeId: "",
    category: "flownex",
    duration: "",
    date: new Date().toISOString().split("T")[0],
    title: { uk: "", ru: "", en: "", de: "" },
    description: { uk: "", ru: "", en: "", de: "" },
    resources: [],
  });

  const [serviceData, setServiceData] = useState({
    id: "",
    icon: "calculator",
    titleKey: "",
    descKey: "",
    featuresKeys: ["", "", ""],
  });

  const [projectData, setProjectData] = useState({
    id: "",
    iconType: "metalStructure",
    tags: [],
    year: "",
    title: { uk: "", ru: "", en: "", de: "" },
    desc: { uk: "", ru: "", en: "", de: "" },
    overview: { uk: "", ru: "", en: "", de: "" },
    results: { uk: "", ru: "", en: "", de: "" },
    duration: { uk: "", ru: "", en: "", de: "" },
    client: { uk: "", ru: "", en: "", de: "" },
    industry: { uk: "", ru: "", en: "", de: "" },
  });

  const [bookData, setBookData] = useState({
    id: "",
    title: { uk: "", ru: "", en: "", de: "" },
    desc: { uk: "", ru: "", en: "", de: "" },
    pages: "",
    format: "PDF",
    file: "",
    icon: "📘",
    category: "general",
  });

  const [copied, setCopied] = useState(false);
  // ---------------------------------------------------------  // + FILTER + SORT (ENTERPRISE)
  // ---------------------------------------------------------
  const applyFilters = (items) => {
    let out = [...items];

    // SEARCH
    out = searchItems(out, searchQuery);

    // FILTER CATEGORY (applies mostly to books/projects)
    out = filterItems(out, filterCategory);

    // SORT
    out = sortItems(out, sortBy);

    return out;
  };

  // ---------------------------------------------------------
  // ✅ COMPUTED LIST (useMemo)
  // ---------------------------------------------------------
  const filteredItems = useMemo(() => {
    if (activeTab === "videos") return applyFilters(videos);
    if (activeTab === "services") return applyFilters(services);
    if (activeTab === "projects") return applyFilters(projects);
    if (activeTab === "books") return applyFilters(books);
    return [];
  }, [
    activeTab,
    searchQuery,
    filterCategory,
    sortBy,
    videos,
    services,
    projects,
    books,
  ]);

  // ---------------------------------------------------------
  // ✅ COPY JSON HELPER
  // ---------------------------------------------------------
  const copyToClipboard = (data) => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  ``;
  // ✅ SAVE ITEM
  // ---------------------------------------------------------
  const saveToJSON = () => {
    const maps = {
      videos: { list: videos, setter: setVideos, form: videoData },
      services: { list: services, setter: setServices, form: serviceData },
      projects: { list: projects, setter: setProjects, form: projectData },
      books: { list: books, setter: setBooks, form: bookData },
    };

    const block = maps[activeTab];

    if (!block.form.id) {
      alert("❗ Вкажіть ID!");
      return;
    }

    const updated = [...block.list];
    const idx = updated.findIndex((x) => x.id === Number(block.form.id));

    if (idx >= 0) updated[idx] = block.form;
    else updated.push(block.form);

    block.setter(updated);
    alert(t.saveSuccess);
  };

  // ---------------------------------------------------------
  // ✅ DELETE ITEM
  // ---------------------------------------------------------
  const deleteItem = (type, id) => {
    if (!window.confirm(`${t.deleteConfirm}${id}?`)) return;

    const maps = {
      videos: setVideos,
      services: setServices,
      projects: setProjects,
      books: setBooks,
    };

    maps[type]((prev) => prev.filter((x) => x.id !== id));
  };

  // ---------------------------------------------------------
  // ✅ LOAD EXISTING ITEM INTO THE EDITOR
  // ---------------------------------------------------------
  const loadExisting = (type, id) => {
    const lists = {
      videos,
      services,
      projects,
      books,
    };

    const setters = {
      videos: setVideoData,
      services: setServiceData,
      projects: setProjectData,
      books: setBookData,
    };

    const item = lists[type].find((x) => x.id === id);
    if (!item) return;

    setters[type](item);
    setEditMode(true);

    alert(t_admin.loadSuccess);
  };

  // ---------------------------------------------------------
  // ============================================================
  return (
    // ✅ RENDER
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-white">
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />

      <div className="flex pt-32 pb-20">
        {/* ✅ PREMIUM SIDEBAR */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setEditMode={setEditMode}
          currentLang={currentLang}
        />

        {/* ✅ MAIN CONTENT */}
        <div className="flex-1 px-10 max-w-5xl mx-auto">
          {/* ✅ HEADER */}
          <h1 className="text-4xl font-bold text-cyan-300 mb-2">
            {t_admin.adminTitle}
          </h1>
          <p className="text-gray-400 mb-8">{t_admin.adminSubtitle}</p>
          {/* ✅ TOP ACTION BUTTONS */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={saveToJSON}
              className="px-5 py-3 bg-green-600 hover:bg-green-500 rounded-xl font-semibold"
            >
              💾 {t_admin.saveJSON}
            </button>

            <button
              onClick={() => {
                const all = { videos, services, projects, books, testimonials };
                const blob = new Blob([JSON.stringify(all, null, 2)], {
                  type: "application/json",
                });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "admin_export.json";
                a.click();
              }}
              className="px-5 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold"
            >
              📦 {t_admin.exportAll}
            </button>

            <label className="px-5 py-3 bg-orange-600 hover:bg-orange-500 rounded-xl font-semibold cursor-pointer">
              📤 {t_admin.importJSON}
              <input
                type="file"
                accept=".json"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onload = () => {
                    try {
                      const json = JSON.parse(reader.result);
                      if (json.videos) setVideos(json.videos);
                      if (json.services) setServices(json.services);
                      if (json.projects) setProjects(json.projects);
                      if (json.books) setBooks(json.books);
                      if (json.testimonials) setTestimonials(json.testimonials);
                      alert("✅ Import OK");
                    } catch (err) {
                      alert("❗ Error parsing file");
                    }
                  };
                  reader.readAsText(file);
                }}
              />
            </label>
          </div>
          
          {/* ✅ SEARCH */}
          <AdminSearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={t_admin.searchPlaceholder}
          />

          {/* ✅ FILTER (only books use categories) */}
          {activeTab === "books" && (
            <AdminFilterBar
              value={filterCategory}
              onChange={setFilterCategory}
              options={[
                { value: "general", label: t.booksCategory ?? "General" },
                { value: "strength", label: "Strength" },
                { value: "hydraulic", label: "Hydraulic" },
                { value: "thermodynamic", label: "Thermodynamic" },
                { value: "energy", label: "Energy" },
              ]}
              currentLang={currentLang}
            />
          )}

          {/* ✅ SORT */}
          <AdminSortBar
            value={sortBy}
            onChange={setSortBy}
            options={[
              { value: "id", label: t_admin.sortId },
              { value: "title", label: t_admin.sortTitle },
              { value: "pages", label: t_admin.sortPages },
              { value: "date", label: t_admin.sortDate },
            ]}
          />

          {/* ✅ ITEM LIST (videos/services/projects/books) */}
          <AdminList
            items={filteredItems}
            currentLang={currentLang}
            onEdit={(id) => loadExisting(activeTab, id)}
            onDelete={(id) => deleteItem(activeTab, id)}
          />

          {/* ✅ ACTIVE TAB EDITOR */}
          {activeTab === "videos" && (
            <VideosTab
              currentLang={currentLang}
              videoData={videoData}
              setVideoData={setVideoData}
              copied={copied}
              copyToClipboard={() => copyToClipboard(videoData)}
            />
          )}
          {activeTab === "services" && (
            <ServicesTab
              currentLang={currentLang}
              serviceData={serviceData}
              setServiceData={setServiceData}
              iconPalette={iconPalette}
              copied={copied}
              copyToClipboard={() => copyToClipboard(serviceData)}
            />
          )}
          {activeTab === "projects" && (
            <ProjectsTab
              currentLang={currentLang}
              projectData={projectData}
              setProjectData={setProjectData}
              projectIconTypes={projectIconTypes}
              copied={copied}
              copyToClipboard={() => copyToClipboard(projectData)}
            />
          )}
          {activeTab === "books" && (
            <BooksTab
              currentLang={currentLang}
              bookData={bookData}
              setBookData={setBookData}
              copied={copied}
              copyToClipboard={() => copyToClipboard(bookData)}
            />
          )}
          {activeTab === "testimonials" && (
            <TestimonialsTab currentLang={currentLang} />
          )}
          `` // ============================================================
          {/* ✅ END OF ACTIVE TAB CONTENT */}
          {/* ✅ EDIT MODE INFO + RESET BUTTON */}
          {editMode && (
            <div className="mt-8 p-4 bg-yellow-500/20 border border-yellow-500/40 rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-yellow-300 font-semibold">
                  ✏️ {t_admin.editMode}
                </span>

                <button
                  onClick={() => {
                    setEditMode(false);

                    // RESET FORMS
                    setVideoData({
                      id: "",
                      youtubeId: "",
                      category: "flownex",
                      duration: "",
                      date: new Date().toISOString().split("T")[0],
                      title: { uk: "", ru: "", en: "", de: "" },
                      description: { uk: "", ru: "", en: "", de: "" },
                      resources: [],
                    });

                    setServiceData({
                      id: "",
                      icon: "calculator",
                      titleKey: "",
                      descKey: "",
                      featuresKeys: ["", "", ""],
                    });

                    setProjectData({
                      id: "",
                      iconType: "metalStructure",
                      tags: [],
                      year: "",
                      title: { uk: "", ru: "", en: "", de: "" },
                      desc: { uk: "", ru: "", en: "", de: "" },
                      overview: { uk: "", ru: "", en: "", de: "" },
                      results: { uk: "", ru: "", en: "", de: "" },
                      duration: { uk: "", ru: "", en: "", de: "" },
                      client: { uk: "", ru: "", en: "", de: "" },
                      industry: { uk: "", ru: "", en: "", de: "" },
                    });

                    setBookData({
                      id: "",
                      title: { uk: "", ru: "", en: "", de: "" },
                      desc: { uk: "", ru: "", en: "", de: "" },
                      pages: "",
                      format: "PDF",
                      file: "",
                      icon: "📘",
                      category: "general",
                    });
                  }}
                  className="px-4 py-2 bg-gray-600/30 hover:bg-gray-600/50 rounded-lg"
                >
                  {t_admin.createNew}
                </button>
              </div>
            </div>
          )}
          {/* ✅ FOOTER */}
          <div className="mt-20">
            <Footer t={t} currentLang={currentLang} />
          </div>
        </div>
        {/* ✅ END MAIN CONTENT */}
      </div>
      {/* ✅ END FLEX WRAPPER */}
    </div>
  );

  {
    /* ✅ END PAGE WRAPPER */
  }
  // );
}

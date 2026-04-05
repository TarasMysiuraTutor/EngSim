import { adminTranslations } from "../i18n/adminTranslations";
import { Video, FileText, Briefcase, BookOpen } from "lucide-react";

export const Sidebar = ({ activeTab, setActiveTab, setEditMode, currentLang }) => {
  const t = adminTranslations[currentLang];

  const itemClass = (tab, activeColor) =>
    `flex items-center gap-3 px-4 py-3 mb-2 rounded-xl transition-all
     ${
       activeTab === tab
         ? `${activeColor} text-white border-l-4 shadow-md`
         : "text-gray-300 hover:bg-white/10"
     }`;

  return (
    <aside
      className="
        w-72 shrink-0 h-[calc(100vh-8rem)]
        sticky top-32 ml-4 mr-8
        bg-white/5 backdrop-blur-xl
        border border-white/10 rounded-2xl
        shadow-xl shadow-black/20 p-6
      "
    >
      <h2 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-3">
        {t.sidebarContent}
      </h2>

      <button
        onClick={() => {
          setActiveTab("videos");
          setEditMode(false);
        }}
        className={itemClass("videos", "bg-blue-500/20 border-blue-400")}
      >
        <Video size={20} />
        <span>{t.sidebarVideos}</span>
      </button>

      <button
        onClick={() => {
          setActiveTab("services");
          setEditMode(false);
        }}
        className={itemClass("services", "bg-green-500/20 border-green-400")}
      >
        <FileText size={20} />
        <span>{t.sidebarServices}</span>
      </button>

      <button
        onClick={() => {
          setActiveTab("projects");
          setEditMode(false);
        }}
        className={itemClass("projects", "bg-purple-500/20 border-purple-400")}
      >
        <Briefcase size={20} />
        <span>{t.sidebarProjects}</span>
      </button>

      <h2 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mt-6 mb-3">
        {t.sidebarDocs}
      </h2>

      <button
        onClick={() => {
          setActiveTab("testimonials");
          setEditMode(false);
        }}
        className={itemClass(
          "testimonials",
          "bg-yellow-500/20 border-yellow-400",
        )}
      >
        ⭐ <span>{t.sidebarTestimonials}</span>
      </button>

      <button
        onClick={() => {
          setActiveTab("books");
          setEditMode(false);
        }}
        className={itemClass("books", "bg-cyan-500/20 border-cyan-400")}
      >
        <BookOpen size={20} />
        <span>{t.sidebarBooks}</span>
      </button>
    </aside>
  );
};

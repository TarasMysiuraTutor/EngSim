import "katex/dist/katex.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes.jsx";

function App() {
  const [currentLang, setCurrentLang] = useState(() => {
    try {
      return localStorage.getItem("preferredLang") || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("preferredLang", currentLang);
    } catch {
      // ignore
    }
  }, [currentLang]);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes currentLang={currentLang} setCurrentLang={setCurrentLang} />
    </BrowserRouter>
  );
}

export default App;

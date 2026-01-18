import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";

// Реєстрація Service Worker для PWA
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/EngSim/service-worker.js")
      .then((registration) => {
        // console.log("✅ Service Worker registered successfully:", registration);
      })
      .catch((error) => {
        console.log("❌ Service Worker registration failed:", error);
      });
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);

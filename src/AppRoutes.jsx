/**
 * AppRoutes.jsx — маршрути додатку.
 * Використовується і в клієнті (BrowserRouter) і в SSR (StaticRouter).
 */
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';
import { translations } from './data/translations';

const HomePage             = lazy(() => import('./pages/HomePage'));
const VideosPage           = lazy(() => import('./pages/VideosPage'));
const AdminPage            = lazy(() => import('./admin/AdminPage'));
const ServicesPage         = lazy(() => import('./pages/ServicesPage'));
const AboutPage            = lazy(() => import('./pages/AboutPage'));
const ProjectsPage         = lazy(() => import('./pages/ProjectsPage'));
const TestimonialsPage     = lazy(() => import('./pages/TestimonialsPage'));
const FAQPage              = lazy(() => import('./pages/FAQPage'));
const ContactPage          = lazy(() => import('./pages/ContactPage'));
const ReferencePage        = lazy(() => import('./pages/ReferencePage'));
const ReferenceMathPage    = lazy(() => import('./pages/ReferenceMathPage'));
const ReferenceStrengthPage     = lazy(() => import('./pages/ReferenceStrengthPage'));
const ReferenceHydraulicPage    = lazy(() => import('./pages/ReferenceHydraulicsPage'));
const ReferenceThermalPage      = lazy(() => import('./pages/ReferenceThermalPage'));
const ReferenceMassTransferPage = lazy(() => import('./pages/ReferenceMassTransferPage'));
const ReferenceHydromechanicsPage = lazy(() => import('./pages/ReferenceHydromechanicsPage'));
const ReferenceWaterPage   = lazy(() => import('./pages/ReferenceWaterPage'));
const CalculatorsPage      = lazy(() => import('./pages/CalculatorsPage'));
const CalculatorDetail     = lazy(() => import('./pages/CalculatorDetail'));
const LibraryPage          = lazy(() => import('./pages/LibraryPage'));
const DiffusionFlatWallPage = lazy(() => import('./pages/massTransfer/DiffusionFlatWallPage'));

const NOT_FOUND_MESSAGES = {
  uk: { title: 'Сторінку не знайдено', btn: 'Повернутися на головну' },
  ru: { title: 'Страница не найдена', btn: 'Вернуться на главную' },
  en: { title: 'Page not found', btn: 'Back to home' },
  de: { title: 'Seite nicht gefunden', btn: 'Zurück zur Startseite' },
};

const PageLoader = () => (
  <div className="min-h-screen bg-[#0a0e27] flex items-center justify-center">
    <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function AppRoutes({ currentLang = 'en', setCurrentLang = () => {} }) {
  const t = translations[currentLang];
  const msg = NOT_FOUND_MESSAGES[currentLang] || NOT_FOUND_MESSAGES.en;

  return (
    <div className="App">
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />
      <ScrollToTopOnNavigate />

      <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage currentLang={currentLang} />} />
          <Route path="/services" element={<ServicesPage currentLang={currentLang} />} />
          <Route path="/about" element={<AboutPage currentLang={currentLang} />} />
          <Route path="/projects" element={<ProjectsPage currentLang={currentLang} />} />
          <Route path="/testimonials" element={<TestimonialsPage currentLang={currentLang} />} />
          <Route path="/faq" element={<FAQPage currentLang={currentLang} />} />
          <Route path="/contact" element={<ContactPage currentLang={currentLang} />} />

          <Route path="/calculators" element={<CalculatorsPage currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />} />
          <Route path="/calculator/:slug" element={<CalculatorDetail currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />} />
          <Route path="/calculators/mass-transfer/diffusion-flat-wall" element={<DiffusionFlatWallPage currentLang={currentLang} />} />

          <Route path="/videos" element={<VideosPage currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />} />
          <Route path="/library" element={<LibraryPage currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />} />
          <Route path="/admin" element={<AdminPage currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />} />

          <Route path="/reference" element={<ReferencePage currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />} />
          <Route path="/reference/waterProperties" element={<ReferenceWaterPage currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />} />
          <Route path="/reference/math" element={<ReferenceMathPage currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />} />
          <Route path="/reference/strength" element={<ReferenceStrengthPage currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />} />
          <Route path="/reference/hydraulic" element={<ReferenceHydraulicPage currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />} />
          <Route path="/reference/hydromechanics" element={<ReferenceHydromechanicsPage currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />} />
          <Route path="/reference/thermal" element={<ReferenceThermalPage currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />} />
          <Route path="/reference/mass" element={<ReferenceMassTransferPage currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />} />

          <Route path="*" element={
            <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-9xl mb-8">🔍</div>
                <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">404</h1>
                <p className="text-2xl text-gray-400 mb-8">{msg.title}</p>
              </div>
            </div>
          } />
        </Routes>
      </Suspense>
      </ErrorBoundary>

      <Footer t={t} currentLang={currentLang} />
      <ScrollToTop />
    </div>
  );
}

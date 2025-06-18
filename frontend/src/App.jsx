import { Routes, Route } from 'react-router-dom';

// Importa todas las páginas que acabas de crear
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/servicios" element={<ServicesPage />} />
      <Route path="/quien-soy" element={<AboutPage />} />
      <Route path="/transformaciones" element={<TestimonialsPage />} />
      <Route path="/inspiracion" element={<BlogPage />} />
      <Route path="/contacto" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
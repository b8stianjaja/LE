import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AboutPage from './pages/AboutPage';
import TransformationsPage from './pages/TransformationsPage';
import InsightsPage from './pages/InsightsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          {/* Ruta dinámica para cada servicio */}
          <Route path="/servicios/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/quien-soy" element={<AboutPage />} />
          <Route path="/transformaciones" element={<TransformationsPage />} />
          <Route path="/inspiracion" element={<InsightsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
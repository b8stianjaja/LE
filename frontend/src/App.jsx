import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AboutPage from './pages/AboutPage';
import TransformationsPage from './pages/TransformationsPage';
import InsightsPage from './pages/InsightsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/servicios/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/quien-soy" element={<AboutPage />} />
        <Route path="/transformaciones" element={<TransformationsPage />} />
        <Route path="/inspiracion" element={<InsightsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
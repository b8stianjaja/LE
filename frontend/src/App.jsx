import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Corrected import path
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import TransformationsPage from "./pages/TransformationsPage";
import InsightsPage from "./pages/InsightsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nosotros" element={<AboutPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/servicios/:id" element={<ServiceDetailPage />} />
        <Route path="/transformaciones" element={<TransformationsPage />} />
        <Route path="/creaciones" element={<InsightsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
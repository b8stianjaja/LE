import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout"; // Corrected import path and component name
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage/ServiceDetailPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nosotros" element={<AboutPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/servicios/:id" element={<ServiceDetailPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
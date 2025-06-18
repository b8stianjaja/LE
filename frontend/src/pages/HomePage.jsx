import React, { useEffect, Suspense, lazy } from 'react';
import './HomePage.css'; // Estilos específicos para la Home

// Carga diferida (Lazy Loading) para componentes que no son críticos para el LCP
const TestimonialsCarousel = lazy(() => import('../components/TestimonialsCarousel'));

const HomePage = () => {
  useEffect(() => {
    document.title = 'Liberación Energética Llay-Llay | Tu Espacio para una Vida Alineada';
    document.querySelector('meta[name="description"]').setAttribute("content", "Descubre prácticas holísticas en Llay-Llay para disolver energía estancada, fomentar tu equilibrio y bienestar. Inicia tu transformación personal hoy.");
  }, []);

  return (
    <div className="home-page">
      {/* 1. Sección Hero Dinámica */}
      <section className="hero-section">
        {/* Aquí iría la imagen o animación sutil. Se optimiza con CSS o un componente <Image /> optimizado */}
        <div className="hero-content">
          <h1>Tu Espacio para una Vida Alineada</h1>
          <p>Disuelve la energía estancada, fomenta el equilibrio y recupera tu vitalidad.</p>
        </div>
      </section>

      {/* 2. Introducción Concisa */}
      <section className="intro-section">
        <h2>¿Qué es la Liberación Energética?</h2>
        <p>Un conjunto de prácticas holísticas diseñadas para restaurar el flujo natural de tu energía, promoviendo sanación emocional y claridad mental. Encuentra tu centro en nuestro espacio en Llay-Llay.</p>
      </section>

      {/* 3. Servicios Destacados */}
      <section className="featured-services">
        <h2>Nuestros Caminos hacia la Armonía</h2>
        <div className="services-grid">
          {/* Estos datos podrían venir de tu API o estar definidos aquí */}
          <div className="service-card">
            <h3>Alineación de Chakras</h3>
            <p>Equilibra tus centros energéticos para un bienestar integral.</p>
            <a href="/services/1">Ver Más</a>
          </div>
          <div className="service-card">
            <h3>Terapia Floral de Bach</h3>
            <p>Encuentra armonía emocional con esencias florales personalizadas.</p>
            <a href="/services/2">Ver Más</a>
          </div>
          <div className="service-card">
            <h3>Limpieza Energética</h3>
            <p>Libera tu campo energético de influencias externas y estrés.</p>
            <a href="/services/3">Ver Más</a>
          </div>
        </div>
      </section>

      {/* 4. Validación Social (Lazy Loaded) */}
      <Suspense fallback={<div>Cargando testimonios...</div>}>
        <TestimonialsCarousel />
      </Suspense>
    </div>
  );
};

export default HomePage;
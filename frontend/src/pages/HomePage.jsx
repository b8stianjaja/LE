import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // ¡Importante! Importamos el archivo CSS

const HomePage = () => {
  useEffect(() => {
    document.title = 'Liberación Energética | Inicio | Sanación Holística en Llay-Llay';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Tu espacio para la sanación holística y liberación energética en Llay-Llay, Valparaíso. Descubre el equilibrio y bienestar a través de nuestras terapias.');
    }
  }, []);

  return (
    <div>
      <section className="hero-section">
        <h1>Tu Espacio para una Vida Alineada</h1>
        <p>
          Prácticas holísticas para disolver la energía estancada, fomentar el equilibrio y apoyar tu transformación personal en <strong>Llay-Llay</strong> y online.
        </p>
        <Link to="/servicios" className="cta-button">
          Explorar Servicios
        </Link>
      </section>

      <section className="content-section">
        <h2>Servicios Destacados</h2>
        <div className="featured-services-container">
            <ServiceCard id="alineacion-chakras" name="Alineación de Chakras" tagline="Recupera tu centro y vitalidad." />
            <ServiceCard id="terapia-floral-bach" name="Terapia Floral de Bach" tagline="Armonía emocional desde la naturaleza." />
            <ServiceCard id="limpieza-energetica" name="Limpieza Energética" tagline="Libera tu espacio y tu ser." />
        </div>
      </section>

      <section className="testimonial-section">
        <h2>Voces de Transformación</h2>
        <blockquote className="testimonial-quote">
          "Una experiencia transformadora. Encontré una paz que no sabía que era posible y una guía clara para mi camino."
          <footer>- María G., Llay-Llay</footer>
        </blockquote>
        <Link to="/transformaciones" className="testimonial-link">Lee más testimonios</Link>
      </section>
    </div>
  );
};

// Componente auxiliar refactorizado para usar clases CSS
const ServiceCard = ({ id, name, tagline }) => (
  <div className="service-card">
    <h3>{name}</h3>
    <p>{tagline}</p>
    <Link to={`/servicios/${id}`} className="service-link">
        Más Información &rarr;
    </Link>
  </div>
);

export default HomePage;
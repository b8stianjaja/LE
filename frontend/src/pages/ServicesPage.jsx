// frontend/src/pages/ServicesPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Servicios de Sanación | Liberación Energética Llay-Llay';
    document.querySelector('meta[name="description"]').setAttribute("content", "Explora nuestras terapias: Alineación de Chakras, Flores de Bach, Limpieza Energética y más. Encuentra tu camino a la armonía en Llay-Llay.");

    fetch('http://localhost:5000/api/services')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(err => console.error("Error fetching services:", err));
  }, []);

  if (loading) return <p>Cargando servicios...</p>;

  return (
    <div>
      <h1>Tu Camino hacia la Armonía Energética</h1>
      <p>Nuestra filosofía se basa en que cada persona tiene la capacidad innata de sanar. Nuestros servicios son herramientas para guiarte en ese proceso.</p>
      <div className="services-list">
        {services.map(service => (
          <div key={service.id} className="service-preview-card">
            {/* Aquí puedes agregar un ícono o imagen representativa */}
            <h2>{service.name}</h2>
            <p>{service.short_description}</p>
            <Link to={`/services/${service.id}`}>Conocer más</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = 'Servicios | Liberación Energética en Llay-Llay';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explora nuestra gama de terapias energéticas y holísticas, incluyendo Alineación de Chakras, Terapia Floral y más. Inicia tu camino al bienestar.');
    }
    
    fetch('http://localhost:5000/api/services')
      .then(response => {
        if (!response.ok) throw new Error('No se pudo obtener la lista de servicios');
        return response.json();
      })
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando servicios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '2rem 0', fontSize: '3rem' }}>Tu Camino hacia la Armonía Energética</h1>
      <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto', fontSize: '1.1rem' }}>
        Cada servicio está diseñado para apoyarte en tu viaje único de sanación y crecimiento. Descubre cuál resuena más contigo.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {services.map(service => (
          <div key={service.id} style={{ border: '1px solid #E5E7EB', padding: '2rem', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '1.75rem', color: '#111827' }}>{service.name}</h2>
            <p style={{ color: '#6B7280', fontSize: '0.9rem', background: '#F3F4F6', padding: '0.25rem 0.5rem', borderRadius: '12px', alignSelf: 'flex-start', margin: '0.5rem 0 1rem 0' }}>
              {service.category}
            </p>
            <p style={{ color: '#4B5563', flexGrow: 1 }}>{service.tagline}</p>
            <Link to={`/servicios/${service.id}`} style={{ marginTop: '1.5rem', fontWeight: '600', color: '#10B981' }}>
              Ver detalles y precios &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
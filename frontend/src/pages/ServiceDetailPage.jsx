import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = 'Cargando servicio... | Liberación Energética';

    fetch(`http://localhost:5000/api/services/${serviceId}`)
      .then(response => {
        if (!response.ok) throw new Error('Servicio no encontrado');
        return response.json();
      })
      .then(data => {
        setService(data);
        setLoading(false);
        document.title = `${data.name} | Liberación Energética`;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', `Detalles sobre el servicio de ${data.name}. ${data.description.substring(0, 150)}...`);
        }
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
        document.title = 'Error | Liberación Energética';
      });
  }, [serviceId]);

  if (loading) return <p>Cargando detalles del servicio...</p>;
  if (error) return <p>Error: {error} - <Link to="/servicios">Volver a servicios</Link></p>;
  if (!service) return <p>No se encontró el servicio.</p>

  return (
    <div>
      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{service.name}</h1>
        <p style={{ fontSize: '1.2rem', color: '#4B5563', marginBottom: '2rem' }}>{service.tagline}</p>
        <p style={{ lineHeight: '1.6' }}>{service.description}</p>
        <div style={{ margin: '3rem 0', padding: '2rem', background: '#F9FAFB', borderRadius: '8px' }}>
          <h2 style={{ marginTop: 0 }}>Beneficios Detallados</h2>
          <ul style={{ paddingLeft: '20px' }}>
            {service.benefits.map((benefit, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{benefit}</li>
            ))}
          </ul>
        </div>
        <h2>¿Cómo es una sesión?</h2>
        <p>{service.sessionFlow}</p>
        <h2>¿Es para mí?</h2>
        <p>{service.idealClient}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#E0F2F1', padding: '1.5rem', borderRadius: '8px', margin: '3rem 0' }}>
            <div>
                <p style={{ margin: 0, fontWeight: 'bold' }}>Duración: {service.duration}</p>
                <p style={{ margin: '0.5rem 0 0 0', fontWeight: 'bold' }}>Precio (CLP): ${service.price}</p>
            </div>
            <Link to="/contacto" style={{ padding: '0.8rem 1.5rem', background: '#10B981', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
              Agendar {service.name}
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
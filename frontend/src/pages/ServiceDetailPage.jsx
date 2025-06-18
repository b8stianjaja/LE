// frontend/src/pages/ServiceDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JsonLd from '../components/JsonLd'; // Importaremos el componente para datos estructurados

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/services/${id}`)
      .then(res => res.json())
      .then(data => {
        setService(data);
        setLoading(false);
        // Actualiza los metadatos una vez que tenemos los datos del servicio
        document.title = `${data.name} | Liberación Energética Llay-Llay`;
        document.querySelector('meta[name="description"]').setAttribute("content", data.short_description);
      })
      .catch(err => console.error("Error fetching service details:", err));
  }, [id]);

  if (loading) return <p>Cargando detalles del servicio...</p>;
  if (!service) return <p>Servicio no encontrado.</p>;

  // Datos estructurados para SEO
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.name,
    'description': service.long_description,
    'provider': {
      '@type': 'Person',
      'name': 'Tu Nombre' // Reemplazar con el nombre del practicante
    },
    'areaServed': {
      '@type': 'Place',
      'name': 'Llay-Llay'
    },
    'offers': {
      '@type': 'Offer',
      'price': service.price,
      'priceCurrency': 'CLP'
    }
  };


  return (
    <div>
      <JsonLd schema={schema} /> {/* Añadimos los datos estructurados al <head> */}
      <h1>{service.name}</h1>
      <p><strong>Beneficios:</strong> {service.benefits}</p>
      <p><strong>Flujo de la sesión:</strong> {service.session_flow}</p>
      <p><strong>Ideal para ti si:</strong> {service.ideal_for}</p>
      <p><strong>Duración y Precio:</strong> {service.duration} | ${service.price} CLP</p>
      <button>Reservar {service.name}</button>
    </div>
  );
};

export default ServiceDetailPage;
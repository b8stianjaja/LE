import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getServiceById } from '../services/api';
import styles from './ServiceDetailPage.module.css';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        const response = await getServiceById(serviceId);
        setService(response.data);
      } catch (error) {
        console.error('Error fetching service:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [serviceId]);

  if (loading) return <p>Cargando servicio...</p>;
  if (!service) return <p>Servicio no encontrado.</p>;

  return (
    <div className={styles.detailPage}>
      <Link to="/servicios" className={styles.backLink}>&larr; Volver a Terapias</Link>
      <h1 className={styles.title}>{service.name}</h1>
      <p className={styles.category}>{service.category}</p>
      
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <p className={styles.description}>{service.description}</p>
          <h3><span role="img" aria-label="sparkles">✨</span> Beneficios</h3>
          <ul className={styles.benefitList}>
            {service.benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
          </ul>
          <h3><span role="img" aria-label="flow">🌊</span> Flujo de la Sesión</h3>
          <p>{service.sessionFlow}</p>
          <h3><span role="img" aria-label="target">🎯</span> Ideal Para Ti Si...</h3>
          <p>{service.idealClient}</p>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.infoBox}>
            <h4>Detalles</h4>
            <p><strong>Duración:</strong> {service.duration}</p>
            <p><strong>Precio:</strong> ${service.price}</p>
            <Link to="/contacto" className={`button ${styles.contactButton}`}>
              Agendar Sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
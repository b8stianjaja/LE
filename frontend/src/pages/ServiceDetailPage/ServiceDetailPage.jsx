import React from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import { getServiceById } from '../../services/api';
import Spinner from '../../components/common/Spinner/Spinner';
import Button from '../../components/common/Button/Button';
import TestimonialsCarousel from '../../services/TestimonialsCarousel/TestimonialsCarousel'; // Corrected import path
import styles from './ServiceDetailPage.module.css';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const { data: service, loading, error } = useApi(getServiceById, id);

  if (loading) {
    return <Spinner />;
  }

  if (error || !service) {
    return <div className="page-container"><p>Error: No se pudo encontrar el servicio.</p></div>;
  }

  return (
    <div className={styles.detailPage}>
      <div className={styles.hero} style={{ backgroundImage: `url(${service.imageUrl})` }}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.serviceTitle}>{service.name}</h1>
        </div>
      </div>
      <div className={`page-container ${styles.contentArea}`}>
        <h2>¿En qué consiste?</h2>
        <p className={styles.description}>{service.description}</p>
        
        <h2>Beneficios</h2>
        <ul className={styles.benefitsList}>
          {service.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>

        <div className={styles.ctaSection}>
          <p>¿Lista para comenzar tu transformación?</p>
          <Button to="/contacto">Agenda tu Sesión</Button>
        </div>
      </div>
      <TestimonialsCarousel />
    </div>
  );
};

export default ServiceDetailPage;
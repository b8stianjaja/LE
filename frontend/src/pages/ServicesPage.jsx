import React, { useState, useEffect } from 'react';
import { getServices } from '../services/api';
import ServiceCard from '../components/ServiceCard';
import styles from './ServicesPage.module.css';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getServices();
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className={styles.servicesPage}>
      <h1>Nuestras Terapias</h1>
      <p className={styles.intro}>
        Un espacio para la sanación y el reencuentro con tu ser interior.
      </p>
      {loading ? (
        <p>Cargando terapias...</p>
      ) : (
        <div className={styles.servicesGrid}>
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
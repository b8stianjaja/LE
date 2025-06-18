import React from 'react';
import { useApi } from '../../hooks/useApi';
import { getServices } from '../../services/api';
import ServiceCard from '../../components/services/ServiceCard/ServiceCard';
import Spinner from '../../components/common/Spinner/Spinner';
import styles from './ServicesPage.module.css';

const ServicesPage = () => {
  const { data: services, loading, error } = useApi(getServices);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="page-container"><p>Error al cargar los servicios: {error}</p></div>;
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Nuestras Terapias</h1>
      <div className={styles.servicesGrid}>
        {services?.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
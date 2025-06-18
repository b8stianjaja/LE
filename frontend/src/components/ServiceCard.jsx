import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ service }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{service.name}</h3>
      <p className={styles.category}>{service.category}</p>
      <p className={styles.tagline}>{service.tagline}</p>
      <Link to={`/servicios/${service.id}`} className={`button ${styles.button}`}>
        Ver Más
      </Link>
    </div>
  );
};

export default ServiceCard;
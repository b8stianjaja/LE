import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ service }) => {
  return (
    <Link to={`/servicios/${service.id}`} className={styles.card}>
      <img src={service.imageUrl} alt={service.name} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{service.name}</h3>
        <p className={styles.cardExcerpt}>{service.excerpt}</p>
        <span className={styles.cardLink}>Ver más &rarr;</span>
      </div>
    </Link>
  );
};

export default ServiceCard;
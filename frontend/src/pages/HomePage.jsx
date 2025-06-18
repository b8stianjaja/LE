import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Encuentra tu centro y libera tu energía</h1>
          <p className={styles.heroSubtitle}>Terapias holísticas para el equilibrio de tu cuerpo, mente y alma.</p>
          <Link to="/servicios" className="button">
            Descubre las terapias
          </Link>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
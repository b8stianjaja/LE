import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styles from './HomePage.module.css';
import Button from '../../components/common/Button/Button';

const HomePage = () => (
  <div className={styles.homePage}>
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <Fade direction="down" triggerOnce>
          <h1 className={styles.heroTitle}>Encuentra tu centro, libera tu energía</h1>
        </Fade>
        <Fade direction="up" delay={300} triggerOnce>
          <p className={styles.heroSubtitle}>Terapias holísticas para el equilibrio de tu cuerpo, mente y alma.</p>
        </Fade>
        <Fade delay={600} triggerOnce>
          <Button to="/servicios">Descubre las Terapias</Button>
        </Fade>
      </div>
    </header>
  </div>
);
export default HomePage;
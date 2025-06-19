import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>
        Encuentra tu Equilibrio y Bienestar
      </h1>
      <p className={styles.heroSubtitle}>
        Descubre un espacio de sanación en Llay-Llay a través de la liberación 
        energética, alineación de chakras y terapias florales.
      </p>
      <a href="/services" className={styles.ctaButton}>
        Explorar Terapias
      </a>
    </div>
  );
};

export default HomePage;
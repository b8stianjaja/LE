import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Sobre Nosotros</h1>
      <div className={styles.aboutContent}>
        <p>
          Somos un espacio dedicado al bienestar integral, donde creemos que la sanación
          proviene del equilibrio entre cuerpo, mente y espíritu. Nuestra misión es
          acompañarte en tu camino de autoconocimiento y transformación a través de
          terapias holísticas personalizadas.
        </p>
        <p>
          Con una profunda vocación de servicio, nuestro equipo de terapeutas certificados
          te guiará con calidez y profesionalismo.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
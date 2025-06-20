// src/pages/AboutPage/AboutPage.jsx
import Container from '@/shared/ui/Container/Container';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <Container>
        <div className={styles.contentGrid}>
          <div className={styles.imageContainer}>
            {/* ACTION REQUIRED: Replaced placeholder image */}
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Retrato de Ana Luna, terapeuta holística" 
              className={styles.profileImage}
            />
          </div>
          <div className={styles.textContainer}>
            {/* ACTION REQUIRED: Replaced placeholder name and content */}
            <h1 className={styles.nameTitle}>Ana Luna</h1>
            <h2 className={styles.subtitle}>Tu Guía en el Viaje de Sanación Energética</h2>
            <div className={styles.bio}>
              <p>
                Desde siempre, he sentido una profunda conexión con el mundo energético y una vocación innata por ayudar a otros a encontrar su equilibrio y bienestar. Mi camino me ha llevado a especializarme en diversas terapias holísticas que abordan al ser humano de una manera integral: mente, cuerpo y espíritu.
              </p>
              <p>
                Mi misión es crear un espacio seguro y sagrado donde puedas liberar bloqueos, sanar heridas emocionales y reconectar con tu esencia más pura. Me especializo en <strong>Reiki Usui, Sanación con Cristales y Tarot Evolutivo</strong>, utilizando estas herramientas con profundo respeto y amor para facilitar un proceso de transformación personal.
              </p>
              <p>
                Creo firmemente en el poder que reside dentro de cada uno de nosotros para sanar y crear la vida que deseamos. Te invito a dar el primer paso en este hermoso viaje de autodescubrimiento y liberación. Estoy aquí para acompañarte.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
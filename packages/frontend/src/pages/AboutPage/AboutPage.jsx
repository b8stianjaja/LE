// src/pages/AboutPage/AboutPage.jsx
import Container from '@/shared/ui/Container/Container';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <Container>
        <h1 className={styles.pageTitle}>Sobre Mí</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            {/* Replace with a real image of yourself */}
            <img 
              src="https://images.unsplash.com/photo-1544164559-90f202005814?q=80&w=874&auto=format&fit=crop" 
              alt="Terapeuta Holística" 
              className={styles.profileImage}
            />
          </div>
          <div className={styles.textWrapper}>
            <h2 className={styles.sectionTitle}>Mi Viaje Hacia la Sanación Holística</h2>
            <p>
              ¡Hola! Soy [Tu Nombre], y mi pasión es guiar a las personas hacia un estado de equilibrio y bienestar integral. Mi camino en el mundo de las terapias holísticas comenzó como una búsqueda personal de sanación y autoconocimiento. Descubrí que el cuerpo, la mente y el espíritu están intrínsecamente conectados, y que la verdadera salud proviene de nutrir cada una de estas áreas.
            </p>
            <p>
              Con años de estudio y práctica en [Menciona tus especialidades, ej: Reiki, Sanación con Cristales, etc.], he desarrollado un enfoque compasivo y personalizado para ayudar a mis clientes a liberar bloqueos energéticos, reducir el estrés y reconectar con su esencia.
            </p>
            <h2 className={styles.sectionTitle}>Mi Filosofía</h2>
            <p>
              Creo firmemente en el poder innato de cada individuo para sanar. Mi rol como terapeuta es ser una facilitadora en tu proceso, creando un espacio seguro y de apoyo donde puedas explorar tu mundo interior y activar tu propia capacidad de curación.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
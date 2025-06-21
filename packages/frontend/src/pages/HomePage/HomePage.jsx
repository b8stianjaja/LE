import { Link } from 'react-router-dom';
import Container from '@/shared/ui/Container/Container';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import styles from './HomePage.module.css';

// TODO: Replace placeholders with your actual image files in `@/assets/images/`
// import heroImage from '@/assets/images/hero-image.jpg';
// import featureImage from '@/assets/images/feature-image.jpg';
// import testimonialAvatar from '@/assets/images/testimonial-avatar.jpg';

export function HomePage() {
  useIntersectionObserver('.fade-in-section');

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Container>
          <div className={`${styles.heroContent} fade-in-section`}>
            <h1 className={styles.mainTitle}>
              Redescubre tu Equilibrio Interior. Libera tu Energía.
            </h1>
            <p className={styles.heroSubtitle}>
              Te acompaño en un viaje de sanación y autoconocimiento para que conectes con tu poder personal y vivas con plenitud, paz y propósito.
            </p>
            <Link to='/servicios' className='btn'>
              Inicia Tu Transformación Aquí
            </Link>
          </div>
        </Container>
      </section>

      {/* Feature Section */}
      <section className={`${styles.featureSection} fade-in-section`}>
        <Container className={styles.featureContainer}>
          <div className={styles.featureImageContainer}>
            {/* Replace with your featureImage */}
            <img src="https://placehold.co/600x400/2C2C44/EAE6F9?text=Libertad" alt='Persona sintiendo libertad y energía renovada' className={styles.featureImage} loading='lazy' />
          </div>
          <div className={styles.featureText}>
            <h2>¿Sientes que algo te bloquea?</h2>
            <p>
              A menudo, las cargas del pasado y las presiones del presente se manifiestan como bloqueos energéticos que nos impiden avanzar. La liberación energética es un camino para soltar lo que ya no te sirve, sanar heridas profundas y realinear tu ser con tu verdadera esencia.
            </p>
            <p>
              Juntos, podemos transformar esos obstáculos en fuentes de fortaleza.
            </p>
          </div>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section className={`${styles.testimonialSection} fade-in-section`}>
        <Container>
          <h2>Historias de transformación</h2>
          <div className={styles.testimonialCard}>
            {/* Replace with your testimonialAvatar */}
            <img src="https://placehold.co/100x100/A076F9/FFFFFF?text=Sofía" alt='Avatar de Sofía R.' className={styles.testimonialAvatar} loading='lazy' />
            <blockquote className={styles.testimonialText}>
              <p>
                "Llegué a la consulta sintiéndome perdida y con una pesadez que no entendía. El proceso fue transformador. Aprendí a escucharme, a sanar y, por primera vez en años, siento una ligereza y una claridad increíbles. Ha sido el regalo más grande que me he dado."
              </p>
              <cite>— Sofía R.</cite>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className={`${styles.ctaSection} fade-in-section`}>
        <Container>
          <h2>¿Lista/o para sentir la diferencia?</h2>
          <p>
            Tu viaje hacia una vida más ligera y auténtica comienza con una simple decisión.
          </p>
          <Link to='/contacto' className='btn'>
            Da el Primer Paso Hoy Mismo
          </Link>
        </Container>
      </section>
    </main>
  );
}

export default HomePage;
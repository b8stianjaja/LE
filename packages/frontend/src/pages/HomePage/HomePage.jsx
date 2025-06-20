import { Link } from 'react-router-dom';
// Corrected the import for the Container component (default export, full path)
import Container from '@/shared/ui/Container/Container';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import styles from './HomePage.module.css';

// ASSETS: The original image files are missing. Replaced with placeholders.
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
            <h1>
              ¿Sientes que una carga invisible te impide avanzar?
            </h1>
            <p className={styles.heroSubtitle}>
              Libérate de las ataduras emocionales y energéticas que no te pertenecen. Es hora de recuperar tu poder, tu paz interior y la alegría de ser tú mismo/a.
            </p>
            {/* Corrected Link path from '/services' to '/servicios' */}
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
            <img src="https://placehold.co/600x400/2C2C44/EAE6F9?text=Energía+Renovada" alt='Persona sintiendo una energía renovada' className={styles.featureImage} loading='lazy' />
          </div>
          <div className={styles.featureText}>
            <h2>Imagina tu vida sin ese peso extra</h2>
            <p>
              La liberación energética es como soltar una mochila llena de piedras que has cargado durante años sin darte cuenta. No se trata de "arreglarte", porque no estás roto/a. Se trata de quitar lo que no es tuyo para que tu verdadera esencia pueda brillar.
            </p>
            <p>
              A través de un método intuitivo y profundo, te guío para identificar y soltar bloqueos, patrones y emociones estancadas que limitan tu potencial.
            </p>
          </div>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section className={`${styles.testimonialSection} fade-in-section`}>
        <Container>
          <h2>Historias de transformación que podrías protagonizar</h2>
          <div className={styles.testimonialCard}>
            <img src="https://placehold.co/100x100/A076F9/FFFFFF?text=Ana+C." alt='Avatar de Ana C.' className={styles.testimonialAvatar} loading='lazy' />
            <blockquote className={styles.testimonialText}>
              <p>
                "Antes de comenzar este proceso, vivía con una ansiedad constante, un nudo en el estómago que no me dejaba en paz. Sentía que repetía los mismos errores una y otra vez. Después de la primera sesión, sentí un alivio que no puedo describir con palabras. Es como si me hubieran quitado un velo de los ojos. Hoy, me siento más ligera, más clara y, por primera vez en mucho tiempo, dueña de mi propio camino."
              </p>
              <cite>— Ana C., después de su proceso de liberación</cite>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className={`${styles.ctaSection} fade-in-section`}>
        <Container>
          <h2>¿Lista/o para sentir la diferencia?</h2>
          <p>
            Tu viaje hacia una vida más ligera y auténtica comienza con una simple decisión. No tienes que seguir cargando con lo que te duele.
          </p>
          {/* Corrected Link path from '/contact' to '/contacto' */}
          <Link to='/contacto' className='btn'>
            Da el Primer Paso Hoy Mismo
          </Link>
        </Container>
      </section>
    </main>
  );
}

// Added default export to match the import in the Router
export default HomePage;
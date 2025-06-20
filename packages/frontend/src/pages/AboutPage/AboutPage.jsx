// Corrected import for the Container component
import Container from '@/shared/ui/Container/Container';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import styles from './AboutPage.module.css';

// ASSET: The original 'author-image.jpg' is missing. Replaced with a placeholder.
// import authorImage from '@/assets/images/author-image.jpg';

export function AboutPage() {
  useIntersectionObserver('.fade-in-section');

  return (
    // Corrected className to match the CSS module
    <main className={styles.aboutPage}>
      <Container>
        {/* Corrected className and structure to match the CSS module */}
        <section className={`${styles.contentGrid} fade-in-section`}>
          <div className={styles.imageContainer}>
            <img src="https://placehold.co/350x350/A076F9/FFFFFF?text=Guía" alt='El guía del proceso de liberación energética' className={styles.profileImage} />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.nameTitle}>Mi camino hasta aquí no fue una línea recta</h1>
            <h2 className={styles.subtitle}>Guía en Liberación Energética</h2>
            <p>
              Durante años, sentí que algo dentro de mí no encajaba. Navegaba la vida con una sensación de vacío y cargando con pesos que no comprendía, pero que me agotaban profundamente. Era como vivir a medio gas, sabiendo que había algo más, pero sin saber cómo alcanzarlo.
            </p>
            <p>
              Mi propia búsqueda de respuestas me llevó a la liberación energética. No fue una solución mágica, sino un profundo proceso de autodescubrimiento y sanación. Aprendí a soltar las cargas emocionales y las creencias limitantes que me saboteaban. Por primera vez, sentí la paz y la claridad que tanto anhelaba.
            </p>
            <h2>Mi Misión: Guiarte de Vuelta a Ti</h2>
            <p>
              Haber recorrido este camino me dio una misión clara: acompañar a otros en su propio viaje de liberación. Mi enfoque no es el de un sanador que "arregla", sino el de un guía que te entrega las herramientas y el espacio seguro para que tú mismo/a redescubras tu poder interior.
            </p>
            <p>
              Entiendo tus dudas y tu escepticismo, porque yo también estuve ahí. Y por eso, mi compromiso es total: ofrecerte un acompañamiento honesto, compasivo y profundamente transformador. Juntos, podemos quitar las capas que ocultan tu verdadera esencia para que vivas con mayor libertad y propósito.
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
}

// Added default export
export default AboutPage;
import { Container } from '@/shared/ui/Container'
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver'
import styles from './AboutPage.module.css'
import authorImage from '@/assets/images/author-image.jpg'

export function AboutPage () {
  useIntersectionObserver('.fade-in-section')

  return (
    <main className={styles.aboutPage}>
      <Container>
        <section className={`${styles.aboutSection} fade-in-section`}>
          <div className={styles.aboutImageContainer}>
            <img src={authorImage} alt='El guía del proceso de liberación energética' className={styles.aboutImage} />
          </div>
          <div className={styles.aboutText}>
            <h1>Mi camino hasta aquí no fue una línea recta</h1>
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
  )
}
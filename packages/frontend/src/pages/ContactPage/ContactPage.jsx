import { Container } from '@/shared/ui/Container'
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver'
import styles from './ContactPage.module.css'

export function ContactPage () {
  useIntersectionObserver('.fade-in-section')

  const handleSubmit = (event) => {
    event.preventDefault()
    // Here you would handle the form submission,
    // for example, by sending the data to a server.
    alert('Gracias por tu mensaje. Te responderé a la brevedad.')
    event.target.reset()
  }

  return (
    <main className={styles.contactPage}>
      <Container>
        <section className={`${styles.contactSection} fade-in-section`}>
          <div className={styles.contactInfo}>
            <h2>Tu viaje comienza con una conversación</h2>
            <p>
              Dar este paso puede generar dudas. Es normal. Estoy aquí para resolverlas sin ningún compromiso.
            </p>
            <p>
              Escríbeme y cuéntame qué te trae por aquí. Tu mensaje es completamente confidencial y es el inicio de un camino hacia tu bienestar.
            </p>
          </div>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor='name'>Nombre</label>
              <input type='text' id='name' name='name' required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor='email'>Correo Electrónico</label>
              <input type='email' id='email' name='email' required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor='message'>Tu Mensaje</label>
              <textarea id='message' name='message' rows='6' required />
            </div>
            <button type='submit' className='btn'>Enviar y dar el primer paso</button>
          </form>
        </section>
      </Container>
    </main>
  )
}
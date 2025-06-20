// Corrected import for the Container component
import Container from '@/shared/ui/Container/Container';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import styles from './ContactPage.module.css';

export function ContactPage() {
  useIntersectionObserver('.fade-in-section');

  const handleSubmit = (event) => {
    event.preventDefault();
    // This is a placeholder for actual form submission logic
    alert('Gracias por tu mensaje. Te responderé a la brevedad.');
    event.target.reset();
  };

  return (
    <main className={styles.contactPage}>
      <Container>
        <header className='fade-in-section'>
            <h1 className={styles.pageTitle}>Tu viaje comienza con una conversación</h1>
            <p className={styles.pageSubtitle}>
              Dar este paso puede generar dudas. Es normal. Estoy aquí para resolverlas sin ningún compromiso. Tu mensaje es completamente confidencial.
            </p>
        </header>
        
        {/* Corrected className to match the CSS module */}
        <section className={`${styles.contactWrapper} fade-in-section`}>
          <div className={styles.infoWrapper}>
            <h2>Escríbeme y cuéntame qué te trae por aquí</h2>
            <p>
              Ya sea que tengas una pregunta específica sobre las sesiones, curiosidad sobre el proceso o simplemente quieras compartir tu sentir, este es el lugar.
            </p>
             <div className={styles.infoBlock}>
              <h3>Disponibilidad</h3>
              <p>Las sesiones se coordinan de forma flexible. Encontraremos el momento perfecto para tu calma.</p>
            </div>
             <div className={styles.infoBlock}>
              <h3>Ubicación</h3>
              <p>Terapias disponibles en Llay-Llay y modalidades a distancia para tu comodidad.</p>
            </div>
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
              <textarea id='message' name='message' rows='6' placeholder='Cuéntame un poco sobre lo que te gustaría trabajar...' required />
            </div>
            <button type='submit' className={`btn ${styles.submitButton}`}>Enviar y dar el primer paso</button>
          </form>
        </section>
      </Container>
    </main>
  );
}

// Added default export
export default ContactPage;
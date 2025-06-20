// src/pages/ContactPage/ContactPage.jsx
import styles from './ContactPage.module.css';
// FIX: Changed from { Container } to Container for default import
import Container from '../../shared/ui/Container/Container';

// ACTION REQUIRED:
// The form will not work until you replace the placeholder endpoint below.
// 1. Go to https://formspree.io/ and create a new form.
// 2. Replace 'your-formspree-endpoint' with your actual Formspree endpoint URL.

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <Container>
        <h1 className={styles.pageTitle}>Hablemos</h1>
        <p className={styles.pageSubtitle}>
          ¿Tienes preguntas o estás lista/o para agendar una sesión? Completa el formulario o contáctame directamente. Estoy aquí para ayudarte.
        </p>

        <div className={styles.contactWrapper}>
          <div className={styles.formWrapper}>
            <form action="https://formspree.io/f/your-formspree-endpoint" method="POST">
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Tu Mensaje</label>
                <textarea id="message" name="message" rows="5" placeholder="Cuéntame un poco sobre lo que buscas..." required></textarea>
              </div>
              <button type="submit" className={`btn ${styles.submitButton}`}>
                Enviar Mensaje
              </button>
            </form>
          </div>
          <div className={styles.infoWrapper}>
            <h2 className={styles.infoTitle}>Información de Contacto</h2>
            <div className={styles.infoBlock}>
              <h3>Correo Electrónico</h3>
              <p>
                {/* ACTION REQUIRED: Replace with your email */}
                <a href="mailto:contacto@liberacionenergetica.cl">contacto@liberacionenergetica.cl</a>
              </p>
            </div>
            <div className={styles.infoBlock}>
              <h3>WhatsApp</h3>
              <p>
                {/* ACTION REQUIRED: Replace with your WhatsApp number */}
                <a
                  href="https://wa.me/56912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +56 9 1234 5678
                </a>
              </p>
            </div>
             <div className={styles.infoBlock}>
              <h3>Ubicación</h3>
              <p>Llay-Llay, Valparaíso</p>
              <p>Atención presencial y a distancia.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
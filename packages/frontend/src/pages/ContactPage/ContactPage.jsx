// src/pages/ContactPage/ContactPage.jsx
import styles from './ContactPage.module.css';
import { Container } from '../../shared/ui/Container/Container';

// ACTION REQUIRED:
// 1. Replace the `your-formspree-endpoint` with your actual Formspree endpoint URL.
// 2. Replace the placeholder email and WhatsApp number with your actual contact details.

export const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <Container>
        <h1 className={styles.pageTitle}>Hablemos</h1>
        <p className={styles.pageSubtitle}>
          Estoy aquí para ayudarte. Completa el formulario o contáctame directamente y
          comencemos a dar forma a tu proyecto.
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
                <textarea id="message" name="message" rows="5" required></textarea>
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
                <a href="mailto:hola@tuemail.com">hola@tuemail.com</a>
              </p>
            </div>
            <div className={styles.infoBlock}>
              <h3>WhatsApp</h3>
              <p>
                <a
                  href="https://wa.me/56900000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +56 9 0000 0000
                </a>
              </p>
            </div>
            <div className={styles.infoBlock}>
              <h3>Horario</h3>
              <p>Lunes a Viernes</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
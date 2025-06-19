// src/pages/ContactPage/ContactPage.jsx
import Container from '@/shared/ui/Container/Container';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <Container>
        <h1 className={styles.pageTitle}>Ponte en Contacto</h1>
        <p className={styles.pageSubtitle}>
          ¿Tienes preguntas o te gustaría agendar una sesión? Envíame un mensaje.
        </p>
        <div className={styles.contactWrapper}>
          <div className={styles.formWrapper}>
            <form 
              action="https://formspree.io/f/YOUR_FORM_ID" // <-- IMPORTANT: REPLACE WITH YOUR FORM ID
              method="POST"
              className={styles.contactForm}
            >
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows="6" required></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Enviar Mensaje</button>
            </form>
          </div>
          <div className={styles.infoWrapper}>
            <h2 className={styles.infoTitle}>Información de Contacto</h2>
            <div className={styles.infoBlock}>
              <h3>Correo Electrónico</h3>
              <p><a href="mailto:tuemail@example.com">tuemail@example.com</a></p>
            </div>
            <div className={styles.infoBlock}>
              <h3>Teléfono / WhatsApp</h3>
              <p><a href="https://wa.me/56912345678">+56 9 1234 5678</a></p>
            </div>
            <div className={styles.infoBlock}>
              <h3>Ubicación</h3>
              <p>Llay-Llay, Valparaíso, Chile</p>
              <p>(Atención presencial y a distancia)</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
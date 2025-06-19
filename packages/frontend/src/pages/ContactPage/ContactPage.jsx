// src/pages/ContactPage/ContactPage.jsx
import Container from '@/shared/ui/Container/Container';
import styles from './ContactPage.module.css';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <Container>
        <h1 className={styles.pageTitle}>Contáctame</h1>
        <p className={styles.pageSubtitle}>
          Estoy aquí para ayudarte en tu camino de sanación. Llena el formulario o contáctame directamente.
        </p>

        <div className={styles.contactWrapper}>
          <div className={styles.formSection}>
            <h2 className={styles.infoTitle}>Enviar un Mensaje</h2>
            {/* ACTION REQUIRED: 
              1. Sign up for a free account at https://formspree.io/
              2. Create a new form and get your form ID.
              3. Replace 'YOUR_FORM_ID' below with your actual Formspree form ID.
              Example: action="https://formspree.io/f/xqkrvqea" 
            */}
            <form 
              action="https://formspree.io/f/YOUR_FORM_ID" 
              method="POST"
            >
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows="6" required></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Enviar</button>
            </form>
          </div>

          <div className={styles.infoWrapper}>
            <h2 className={styles.infoTitle}>Información de Contacto</h2>
            <div className={styles.infoBlock}>
                <h3>Email</h3>
                {/* ACTION REQUIRED: Replace with your email address */}
                <p><a href="mailto:tuemail@example.com">tuemail@example.com</a></p>
            </div>
            <div className={styles.infoBlock}>
                <h3>WhatsApp</h3>
                 {/* ACTION REQUIRED: Replace with your WhatsApp number (including country code) */}
                <p><a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer">+56 9 1234 5678</a></p>
            </div>
             <div className={styles.infoBlock}>
                <h3>Ubicación</h3>
                <p>Llay-Llay, Valparaíso, Chile</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
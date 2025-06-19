// src/pages/ContactPage/ContactPage.jsx
import Container from '@/shared/ui/Container/Container';
import styles from './ContactPage.module.css';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <Container>
        <h1 className={styles.mainTitle}>Contáctame</h1>
        <p className={styles.subtitle}>
          Estoy aquí para ayudarte en tu camino de sanación. Llena el formulario o contáctame directamente.
        </p>

        <div className={styles.contentWrapper}>
          <div className={styles.contactForm}>
            <h2 className={styles.formTitle}>Enviar un Mensaje</h2>
            {/* ACTION REQUIRED: Replace 'YOUR_FORM_ID' with your actual Formspree form ID.
              You can get this from your Formspree dashboard.
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

          <div className={styles.contactInfo}>
            <h2 className={styles.infoTitle}>Información de Contacto</h2>
            <p className={styles.infoText}>
              También puedes comunicarte conmigo a través de estos canales:
            </p>
            <ul className={styles.infoList}>
              <li>
                <FaEnvelope className={styles.icon} />
                {/* ACTION REQUIRED: Replace with your email address */}
                <a href="mailto:tuemail@example.com">tuemail@example.com</a>
              </li>
              <li>
                <FaWhatsapp className={styles.icon} />
                {/* ACTION REQUIRED: Replace with your WhatsApp number */}
                <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer">+56 9 1234 5678</a>
              </li>
              <li>
                <FaMapMarkerAlt className={styles.icon} />
                <span>Llay-Llay, Valparaíso, Chile</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
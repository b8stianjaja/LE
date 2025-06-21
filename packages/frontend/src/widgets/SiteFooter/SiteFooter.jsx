// src/widgets/SiteFooter/SiteFooter.jsx
import Container from '@/shared/ui/Container/Container';
import styles from './SiteFooter.module.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

// A new component for social links for better organization
const SocialLinks = () => (
  <div className={styles.socialLinks}>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visita nuestro Instagram">
      <FaInstagram />
    </a>
    <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer" aria-label="Contáctanos por WhatsApp">
      <FaWhatsapp />
    </a>
  </div>
);

function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
            <p>&copy; {currentYear} Liberación Energética. Todos los derechos reservados.</p>
            <SocialLinks />
            <p>Llay-Llay, Valparaíso, Chile</p>
        </div>
      </Container>
    </footer>
  );
}

export default SiteFooter;
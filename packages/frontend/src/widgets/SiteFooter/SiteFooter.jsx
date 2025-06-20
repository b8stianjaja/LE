// src/widgets/SiteFooter/SiteFooter.jsx
import Container from "@/shared/ui/Container/Container";
import styles from './SiteFooter.module.css'

export const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        {/* Wrapped the text in a div with the 'footerContent' class to apply styles */}
        <div className={styles.footerContent}>
            <p>&copy; {currentYear} Liberación Energética. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};
// src/widgets/SiteFooter/SiteFooter.jsx
import Container from "@/shared/ui/Container/Container";
import styles from './SiteFooter.module.css'

// Ensure this is a named export
export const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <p>&copy; {currentYear} Liberación Energética. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};
import Container from '@/shared/ui/Container/Container';
import styles from './SiteFooter.module.css';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.siteFooter}>
      <Container className={styles.footerContainer}>
        <p>&copy; {currentYear} Liberación Energética. Todos los derechos reservados.</p>
        <p>Llay-Llay, Valparaíso, Chile</p>
      </Container>
    </footer>
  );
}

export default SiteFooter;
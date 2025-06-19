import { Container } from '../../shared/ui/Container';
import styles from './SiteFooter.module.css';

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <p>
            &copy; {currentYear} Liberación Energética. Todos los derechos reservados.
          </p>
          <p>
            Llay-Llay, Valparaíso, Chile
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default SiteFooter;
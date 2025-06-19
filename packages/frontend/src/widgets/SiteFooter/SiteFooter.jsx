import Container from '../../shared/ui/Container/Container';
import styles from './SiteFooter.module.css';

const SiteFooter = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>&copy; {new Date().getFullYear()} Liberación Energética. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default SiteFooter;
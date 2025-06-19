// src/pages/NotFoundPage/NotFoundPage.jsx
import { Link } from 'react-router-dom';
import Container from '@/shared/ui/Container/Container'; // CORRECTED IMPORT
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <Container>
      <div className={styles.notFoundContainer}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitle}>Página No Encontrada</p>
        <p className={styles.message}>
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link to="/" className={styles.homeLink}>
          Volver al Inicio
        </Link>
      </div>
    </Container>
  );
};

export default NotFoundPage;
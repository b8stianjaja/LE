// src/pages/NotFoundPage/NotFoundPage.jsx
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Página No Encontrada</h2>
      <p className={styles.message}>
        Lo sentimos, la página que buscas no existe. Puede que haya sido movida o eliminada.
      </p>
      <Link to="/" className={`btn ${styles.homeLink}`}>
        Volver al Inicio
      </Link>
    </div>
  );
};
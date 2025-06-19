import { NavLink } from 'react-router-dom';
import Container from '../../shared/ui/Container/Container';
import styles from './SiteHeader.module.css';

const SiteHeader = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <NavLink to="/" className={styles.logo}>
          Liberación Energética
        </NavLink>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/servicios"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Servicios
          </NavLink>
          <NavLink
            to="/quien-soy"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Quién Soy
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Contacto
          </NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default SiteHeader;
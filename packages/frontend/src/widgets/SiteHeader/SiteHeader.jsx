import { NavLink as RouterNavLink } from 'react-router-dom';
import Container from 'shared/ui/Container/Container'; // Using absolute import
import styles from './SiteHeader.module.css';

const NavLink = ({ to, children }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
    }
  >
    {children}
  </RouterNavLink>
);

const SiteHeader = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <RouterNavLink to="/" className={styles.logo}>
          Liberación Energética
        </RouterNavLink>
        <nav className={styles.nav}>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/servicios">Servicios</NavLink>
          <NavLink to="/quien-soy">Quién Soy</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default SiteHeader;
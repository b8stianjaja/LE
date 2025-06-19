import { NavLink } from 'react-router-dom';
import Container from '../../shared/ui/Container/Container';
import styles from './SiteHeader.module.css';

const SiteHeader = () => {
  // Esta función ayuda a aplicar una clase 'active' al NavLink que corresponda a la URL actual
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <NavLink to="/" className={styles.logo}>
          Liberación Energética
        </NavLink>
        <nav className={styles.nav}>
          <NavLink to="/" className={getNavLinkClass}>
            Inicio
          </NavLink>
          <NavLink to="/servicios" className={getNavLinkClass}>
            Servicios
          </NavLink>
          <NavLink to="/quien-soy" className={getNavLinkClass}>
            Quién Soy
          </NavLink>
          <NavLink to="/contacto" className={getNavLinkClass}>
            Contacto
          </NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default SiteHeader;
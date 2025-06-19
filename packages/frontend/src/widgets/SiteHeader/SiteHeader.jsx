import { NavLink as RouterNavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// Use the new alias to correctly resolve the Container component
import Container from '@/shared/ui/Container/Container';
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

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};


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
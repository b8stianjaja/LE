import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const getLinkClassName = ({ isActive }) =>
    isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <NavLink to="/" className={styles.navLogo}>Alma Holística</NavLink>
        <div className={styles.navMenu}>
          <NavLink to="/" className={getLinkClassName}>Inicio</NavLink>
          <NavLink to="/servicios" className={getLinkClassName}>Terapias</NavLink>
          <NavLink to="/sobre-nosotros" className={getLinkClassName}>Sobre Nosotros</NavLink>
          <NavLink to="/contacto" className={getLinkClassName}>Contacto</NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
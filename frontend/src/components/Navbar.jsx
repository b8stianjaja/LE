import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.brand}>
          Liberación Energética
        </NavLink>
        <ul className={styles.navLinks}>
          <li><NavLink to="/servicios" className={({ isActive }) => isActive ? styles.active : ''}>Servicios</NavLink></li>
          <li><NavLink to="/quien-soy" className={({ isActive }) => isActive ? styles.active : ''}>Quién Soy</NavLink></li>
          <li><NavLink to="/transformaciones" className={({ isActive }) => isActive ? styles.active : ''}>Transformaciones</NavLink></li>
          <li><NavLink to="/contacto" className={({ isActive }) => isActive ? styles.active : ''}>Contacto</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>&copy; {year} Liberación Energética. Todos los derechos reservados.</p>
      <p>Sitio diseñado con amor en Llay-Llay, Chile</p>
    </footer>
  );
};

export default Footer;
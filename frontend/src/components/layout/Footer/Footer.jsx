import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} Alma Holística. Todos los derechos reservados.</p>
        <p>Hecho con ♥ en Llay-Llay, Chile</p>
      </div>
    </footer>
  );
};

export default Footer;
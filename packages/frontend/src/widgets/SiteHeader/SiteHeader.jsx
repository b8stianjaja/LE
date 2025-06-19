import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Container from '@/shared/ui/Container/Container';
import styles from './SiteHeader.module.css';

export const SiteHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Make header sticky after scrolling down 10px
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
      <Container>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
            Liberación Energética
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.navLinks}>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>Inicio</NavLink>
            <NavLink to="/servicios" className={({ isActive }) => (isActive ? styles.active : '')}>Servicios</NavLink>
            <NavLink to="/quien-soy" className={({ isActive }) => (isActive ? styles.active : '')}>Quién Soy</NavLink>
            <NavLink to="/contacto" className={({ isActive }) => (isActive ? styles.active : '')}>Contacto</NavLink>
          </nav>

          {/* Hamburger Menu Button */}
          <button 
            className={styles.hamburger} 
            onClick={toggleMobileMenu} 
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.hamburgerBar}></span>
            <span className={styles.hamburgerBar}></span>
            <span className={styles.hamburgerBar}></span>
          </button>
        </div>
      </Container>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className={styles.mobileNav}>
           <button className={styles.closeButton} onClick={closeMobileMenu} aria-label="Close menu">&times;</button>
          <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? styles.active : '')}>Inicio</NavLink>
          <NavLink to="/servicios" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? styles.active : '')}>Servicios</NavLink>
          <NavLink to="/quien-soy" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? styles.active : '')}>Quién Soy</NavLink>
          <NavLink to="/contacto" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? styles.active : '')}>Contacto</NavLink>
        </nav>
      )}
    </header>
  );
};
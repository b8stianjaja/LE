import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Container from '@/shared/ui/Container/Container';
import styles from './SiteHeader.module.css';

export const SiteHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to handle sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ''} ${isMobileMenuOpen ? styles.menuOpen : ''}`}>
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
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`} 
            onClick={toggleMobileMenu} 
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.hamburgerBar}></span>
            <span className={styles.hamburgerBar}></span>
            <span className={styles.hamburgerBar}></span>
          </button>
        </div>
      </Container>
      
      {/* Mobile Navigation Menu */}
      <div className={`${styles.mobileNavWrapper} ${isMobileMenuOpen ? styles.mobileNavWrapperOpen : ''}`}>
        <nav className={styles.mobileNav}>
           <button className={styles.closeButton} onClick={closeMobileMenu} aria-label="Cerrar menú">&times;</button>
          <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? styles.active : '')}>Inicio</NavLink>
          <NavLink to="/servicios" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? styles.active : '')}>Servicios</NavLink>
          <NavLink to="/quien-soy" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? styles.active : '')}>Quién Soy</NavLink>
          <NavLink to="/contacto" onClick={closeMobileMenu} className={({ isActive }) => (isActive ? styles.active : '')}>Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
};
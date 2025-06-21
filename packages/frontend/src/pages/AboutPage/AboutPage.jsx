// src/pages/AboutPage/AboutPage.jsx

import { Link } from 'react-router-dom';
import Container from '@/shared/ui/Container/Container';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import styles from './AboutPage.module.css';

export function AboutPage() {
  useIntersectionObserver('.fade-in-section');

  const specializations = [
    'Liberación Energética',
    'Biodecodificación Emocional',
    'Péndulo Hebreo',
    'Cruz de Ankh',
    'Alineación de Chakras',
    'Velomancia',
    'Terapias Florales',
    'Limpieza de Espacios',
  ];

  return (
    <main className={styles.aboutPage}>
      <Container>
        {/* --- SECCIÓN 1: ENCABEZADO DE PERFIL --- */}
        <section className={`${styles.profileHeader} fade-in-section`}>
          <div className={styles.imageContainer}>
            <img
              src='/images/presentationle.jpeg'
              alt='Johanna Grandón, Terapeuta Profesional'
              className={styles.profileImage}
            />
          </div>
          <div className={styles.titleContainer}>
            <h1 className={styles.nameTitle}>Johanna Elizabeth Grandón Gálvez</h1>
            <p className={styles.subtitle}>Terapeuta Profesional y Guía Energética</p>
          </div>
        </section>

        {/* --- SECCIÓN 2: CUADRÍCULA DE DETALLES --- */}
        <section className={`${styles.detailsGrid} fade-in-section`}>
          <div className={styles.bioContainer}>
            <h2 className={styles.sectionTitle}>Mi Propósito</h2>
            <p>
              Mi vocación es ser un puente hacia tu bienestar. En este espacio sagrado y de confianza, te acompaño a explorar tu mundo interior para que reconectes con tu verdadera esencia.
            </p>
            <p>
              Creo firmemente que la sanación es un acto de amor propio y un viaje de regreso a ti. Estoy aquí para sostener tu mano en cada paso de ese hermoso proceso.
            </p>
          </div>

          <div className={styles.specializationsContainer}>
            <h2 className={styles.sectionTitle}>Mis Herramientas</h2>
            <div className={styles.specializationsList}>
              {specializations.map((tool) => (
                <span key={tool} className={styles.specializationTag}>
                  {tool}
                </span>
              ))}
            </div>
            <Link to='/servicios' className={styles.ctaButton}>
              Descubre las Terapias
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}

export default AboutPage;
import { Link } from 'react-router-dom';
import Container from '@/shared/ui/Container/Container';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver'; // Import the hook
import styles from './HomePage.module.css';

// --- FIXED: Added correct classNames for styling ---
const ServicePreviewCard = ({ title, description, link, className }) => (
  <div className={`${styles.serviceCard} ${className}`}>
    <h3 className={styles.serviceTitle}>{title}</h3>
    <p className={styles.serviceDescription}>{description}</p>
    <Link to={link} className={styles.cardLink}>Leer más</Link>
  </div>
);

const TestimonialCard = ({ quote, author, className }) => (
  <div className={`${styles.testimonialCard} ${className}`}>
    <p className={styles.testimonialText}>"{quote}"</p>
    <span className={styles.testimonialAuthor}>- {author}</span>
  </div>
);
// --------------------------------------------------------------------


export const HomePage = () => {
  // Setup observers for each section you want to animate
  const [servicesRef, isServicesVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [testimonialsRef, isTestimonialsVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className={styles.homePage}>
      {/* Hero Section (No animation needed here) */}
      <header className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <Container>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Encuentra tu Equilibrio y Bienestar Interior
            </h1>
            <p className={styles.heroSubtitle}>
              Terapias de liberación energética para sanar tu mente, cuerpo y espíritu. Comienza tu viaje hacia una vida más plena y consciente.
            </p>
            <Link to="/servicios" className={styles.ctaButton}>
              Explorar Terapias
            </Link>
          </div>
        </Container>
      </header>

      {/* Services Preview Section - APPLY THE HOOK AND CLASSES */}
      <section
        ref={servicesRef}
        className={`${styles.servicesPreview} fade-in-section ${isServicesVisible ? 'is-visible' : ''}`}
      >
        <Container>
          <h2 className={styles.sectionTitle}>Nuestros Servicios</h2>
          <p className={styles.sectionSubtitle}>
            Ofrecemos una variedad de terapias holísticas diseñadas para restaurar tu armonía.
          </p>
          <div className={styles.servicesGrid}>
            {/* We can even add staggered delays to the cards! */}
            <ServicePreviewCard
              title="Péndulo Hebreo"
              description="Una técnica de sanación que combina la radiestesia con los beneficios de las letras hebreas para limpiar y equilibrar tu campo energético."
              link="/servicios"
              className={`fade-in-section ${isServicesVisible ? 'is-visible' : ''}`}
            />
            <ServicePreviewCard
              title="Reiki"
              description="Canalización de energía vital universal para reducir el estrés, promover la relajación profunda y acelerar la sanación natural del cuerpo."
              link="/servicios"
              className={`fade-in-section delay-200 ${isServicesVisible ? 'is-visible' : ''}`}
            />
            <ServicePreviewCard
              title="Sanación Akáshica"
              description="Accede a los registros de tu alma para liberar bloqueos kármicos y patrones limitantes, permitiendo una profunda transformación personal."
              link="/servicios"
              className={`fade-in-section delay-400 ${isServicesVisible ? 'is-visible' : ''}`}
            />
          </div>
        </Container>
      </section>

      {/* Testimonials Section - APPLY THE HOOK AND CLASSES */}
      <section
        ref={testimonialsRef}
        className={`${styles.testimonials} fade-in-section ${isTestimonialsVisible ? 'is-visible' : ''}`}
      >
        <Container>
          <h2 className={styles.sectionTitle}>Testimonios</h2>
           <p className={styles.sectionSubtitle}>
            Lo que nuestros clientes dicen sobre su experiencia de sanación.
          </p>
          <div className={styles.testimonialsGrid}>
            <TestimonialCard
              quote="Ha sido una experiencia transformadora. Sentí una paz y una claridad que no había sentido en años. Totalmente recomendado."
              author="Ana L."
              className={`fade-in-section ${isTestimonialsVisible ? 'is-visible' : ''}`}
            />
            <TestimonialCard
              quote="Llegué con mucho estrés y ansiedad, y después de la sesión de Reiki me sentí completamente renovada y en calma. ¡Increíble!"
              author="Javier M."
              className={`fade-in-section delay-200 ${isTestimonialsVisible ? 'is-visible' : ''}`}
            />
          </div>
        </Container>
      </section>
    </div>
  );
};
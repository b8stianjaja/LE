// src/pages/HomePage/HomePage.jsx
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import Container from '../../shared/ui/Container/Container';
import useIntersectionObserver from '../../shared/hooks/useIntersectionObserver';

// ACTION REQUIRED:
// The content for this page is hardcoded. You should replace it with content
// coming from a CMS or a dedicated content file.

export const HomePage = () => {
  // Hooks for observing elements and adding animations
  const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [servicesRef, areServicesVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [testimonialsRef, areTestimonialsVisible] = useIntersectionObserver({ threshold: 0.1 });

  const serviceCards = [
    {
      title: 'Consultoría de Diseño',
      description: 'Análisis y optimización de tus espacios para mejorar el bienestar y la productividad.',
    },
    {
      title: 'Hogar y Residencial',
      description: 'Creación de ambientes que promueven la calma, la conexión y el descanso en tu hogar.',
    },
    {
      title: 'Oficinas y Espacios de Trabajo',
      description: 'Diseño de entornos laborales que fomentan la colaboración, la concentración y la creatividad.',
    },
  ];

  const testimonials = [
    {
      text: 'El cambio en mi oficina fue increíble. Ahora siento que mi equipo está más motivado y el ambiente es mucho más positivo. ¡Totalmente recomendado!',
      author: 'Ana P., Directora de Marketing',
    },
    {
      text: 'Nunca pensé que pequeños cambios en mi casa pudieran tener un impacto tan grande en mi estado de ánimo. Estoy durmiendo mejor y me siento más en paz.',
      author: 'Carlos G., Cliente Residencial',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div
          ref={heroRef}
          className={`${styles.heroContent} ${
            isHeroVisible ? 'fade-in-section is-visible' : 'fade-in-section'
          }`}
        >
          <h1 className={styles.heroTitle}>Transformando Espacios, Creando Bienestar</h1>
          <p className={styles.heroSubtitle}>
            Descubre cómo la psicología ambiental puede mejorar tu vida y tu entorno.
          </p>
          <Link to="/contacto" className={`btn ${styles.ctaButton}`}>
            Comienza tu Transformación
          </Link>
        </div>
      </section>

      {/* Services Preview Section */}
      <section ref={servicesRef} className={styles.servicesPreview}>
        <Container>
          <div
            className={
              areServicesVisible ? 'fade-in-section is-visible' : 'fade-in-section'
            }
          >
            <h2 className={styles.sectionTitle}>Mis Servicios</h2>
            <p className={styles.sectionSubtitle}>
              Ofrezco soluciones personalizadas para adaptar tus espacios a tus necesidades,
              mejorando tu calidad de vida a través del diseño consciente.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {serviceCards.map((card, index) => (
              <div
                key={card.title}
                className={`${styles.serviceCard} ${
                  areServicesVisible ? 'fade-in-section is-visible' : 'fade-in-section'
                } delay-${index * 200}`}
              >
                <h3 className={styles.serviceTitle}>{card.title}</h3>
                <p className={styles.serviceDescription}>{card.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className={styles.testimonials}>
        <Container>
          <div
            className={
              areTestimonialsVisible
                ? 'fade-in-section is-visible'
                : 'fade-in-section'
            }
          >
            <h2 className={styles.sectionTitle}>Lo que dicen mis clientes</h2>
            <p className={styles.sectionSubtitle}>
              Historias reales de transformaciones que han generado un impacto positivo.
            </p>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className={`${styles.testimonialCard} ${
                  areTestimonialsVisible
                    ? 'fade-in-section is-visible'
                    : 'fade-in-section'
                } delay-${index * 200}`}
              >
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
                <span className={styles.testimonialAuthor}>- {testimonial.author}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
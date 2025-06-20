// src/pages/HomePage/HomePage.jsx
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import Container from '../../shared/ui/Container/Container';
// FIX: Changed to { useIntersectionObserver } for named import
import { useIntersectionObserver } from '../../shared/hooks/useIntersectionObserver';

const serviceCards = [
  {
    title: 'Terapias Energéticas',
    description: 'Experimenta una profunda relajación y equilibrio con Reiki, Sanación con Cristales y otras técnicas que restauran tu flujo de energía vital.',
    link: '/servicios'
  },
  {
    title: 'Lecturas de Tarot Evolutivo',
    description: 'Obtén claridad y guía en tu camino de vida. Una herramienta para el autoconocimiento y el empoderamiento personal.',
    link: '/servicios'
  },
  {
    title: 'Limpieza de Espacios',
    description: 'Armoniza tu hogar o lugar de trabajo, eliminando energías densas y creando un ambiente de paz y positividad.',
    link: '/servicios'
  },
];

const testimonials = [
  {
    text: 'La sesión de Reiki me dejó en un estado de paz que no sentía hace años. Ana tiene una energía increíble y un don para sanar.',
    author: 'Javiera M., Llay-Llay',
  },
  {
    text: 'Después de la limpieza energética en mi casa, el ambiente cambió por completo. Se siente más ligero, más feliz. ¡100% recomendado!',
    author: 'Carlos G., Cliente Residencial',
  },
];

const HomePage = () => {
  const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [introRef, isIntroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [servicesRef, areServicesVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [testimonialsRef, areTestimonialsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [ctaRef, isCtaVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div
          ref={heroRef}
          className={`${styles.heroContent} ${isHeroVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}
        >
          <h1 className={styles.heroTitle}>Encuentra tu Equilibrio Interior</h1>
          <p className={styles.heroSubtitle}>
            Un santuario para la sanación energética y el bienestar holístico en el corazón de Llay-Llay.
          </p>
          <Link to="/servicios" className={`btn ${styles.ctaButton}`}>
            Explora las Terapias
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section ref={introRef} className={styles.introSection}>
        <Container>
          <div className={`${styles.introContent} ${isIntroVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}>
            <h2 className={styles.sectionTitle}>Un Espacio para Reconectar Contigo</h2>
            <p className={styles.sectionSubtitle}>
              En nuestro ajetreado mundo, es fácil perder la conexión con nuestra esencia. Las terapias holísticas ofrecen un camino de regreso a tu centro, liberando el estrés, sanando bloqueos emocionales y restaurando tu vitalidad natural. Aquí encontrarás un refugio seguro para iniciar tu viaje de transformación.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Preview Section */}
      <section ref={servicesRef} className={styles.servicesPreview}>
        <Container>
          <div className={areServicesVisible ? 'fade-in-section is-visible' : 'fade-in-section'}>
            <h2 className={styles.sectionTitle}>Terapias para el Alma</h2>
            <p className={styles.sectionSubtitle}>
              Cada terapia es una invitación a cuidar de ti, a escuchar tu cuerpo y a nutrir tu espíritu de una manera integral.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {serviceCards.map((card, index) => (
              <div
                key={card.title}
                className={`${styles.serviceCard} ${areServicesVisible ? 'fade-in-section is-visible' : 'fade-in-section'} delay-${index * 200}`}
              >
                <h3 className={styles.serviceTitle}>{card.title}</h3>
                <p className={styles.serviceDescription}>{card.description}</p>
                 <Link to={card.link} className={styles.serviceLink}>Saber más</Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className={styles.testimonials}>
        <Container>
          <div className={areTestimonialsVisible ? 'fade-in-section is-visible' : 'fade-in-section'}>
            <h2 className={styles.sectionTitle}>Voces de Bienestar</h2>
            <p className={styles.sectionSubtitle}>
              Historias reales de quienes han experimentado la transformación.
            </p>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className={`${styles.testimonialCard} ${areTestimonialsVisible ? 'fade-in-section is-visible' : 'fade-in-section'} delay-${index * 200}`}
              >
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
                <span className={styles.testimonialAuthor}>- {testimonial.author}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section ref={ctaRef} className={styles.finalCta}>
         <Container>
            <div className={`${styles.finalCtaContent} ${isCtaVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}>
               <h2 className={styles.sectionTitle}>¿Lista para dar el primer paso?</h2>
               <p className={styles.sectionSubtitle}>Tu viaje hacia el bienestar y la paz interior comienza con una simple decisión.</p>
                <Link to="/contacto" className={`btn ${styles.ctaButton}`}>
                  Agenda tu Sesión
                </Link>
            </div>
         </Container>
      </section>
    </>
  );
};

export default HomePage;
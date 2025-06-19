// src/pages/ServicesPage/ServicesPage.jsx
import Container from '@/shared/ui/Container/Container';
import styles from './ServicesPage.module.css';

const services = [
  {
    title: 'Terapia de Reiki',
    description: 'Una suave pero poderosa técnica de sanación energética que promueve la relajación, reduce el estrés y la ansiedad a través del tacto suave. equilibra los centros de energía (chakras) del cuerpo.',
    price: '$30.000 CLP',
    duration: '60 Minutos'
  },
  {
    title: 'Sanación con Cristales',
    description: 'Utiliza las propiedades vibracionales de los cristales y piedras preciosas para limpiar, equilibrar y energizar el campo energético, ayudando a sanar a nivel físico, emocional y espiritual.',
    price: '$35.000 CLP',
    duration: '75 Minutos'
  },
  {
    title: 'Lectura de Tarot Evolutivo',
    description: 'Una herramienta de autoconocimiento y guía que utiliza las cartas del tarot para explorar tu situación actual, desafíos y potenciales, enfocándose en tu crecimiento personal y espiritual.',
    price: '$25.000 CLP',
    duration: '45 Minutos'
  },
  {
    title: 'Limpieza Energética (Personas y Espacios)',
    description: 'Elimina las energías densas o negativas de tu campo áurico o de tu hogar/oficina, restaurando la armonía, la paz y la claridad. Ideal para después de períodos de estrés o enfermedad.',
    price: 'Desde $40.000 CLP',
    duration: 'Variable'
  }
];

const ServicesPage = () => {
  return (
    <div className={styles.servicesPage}>
      <Container>
        <h1 className={styles.pageTitle}>Nuestros Servicios</h1>
        <p className={styles.pageSubtitle}>
          Cada servicio está diseñado para apoyarte en tu camino hacia el bienestar integral.
        </p>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.serviceMeta}>
                <span className={styles.price}>{service.price}</span>
                <span className={styles.duration}>{service.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ServicesPage;
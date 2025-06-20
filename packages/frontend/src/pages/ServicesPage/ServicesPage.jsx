import { Link } from 'react-router-dom';
// Corrected import for the Container component
import Container from '@/shared/ui/Container/Container';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import styles from './ServicesPage.module.css';

export function ServicesPage() {
  useIntersectionObserver('.fade-in-section');

  const services = [
    {
      title: 'Sesión de Liberación y Claridad',
      description: 'Un encuentro profundo para identificar y soltar el bloqueo principal que te está frenando en este momento de tu vida.',
      idealFor: 'Sentimientos de estancamiento, confusión, ansiedad o si estás repitiendo patrones sin saber por qué.',
      outcome: 'Saldrás con una sensación de ligereza, mayor claridad mental y los primeros pasos para recuperar tu centro.'
    },
    {
      title: 'Proceso de Transformación Profunda (3 Sesiones)',
      description: 'Un viaje comprometido para trabajar en las raíces de tus bloqueos. No solo aliviamos el síntoma, vamos al origen para una sanación sostenible.',
      idealFor: 'Quienes buscan un cambio real y duradero, y están listos para comprometerse con su bienestar a largo plazo.',
      outcome: 'Integrarás una nueva forma de relacionarte contigo mismo/a, con más autoconfianza, paz interior y herramientas para el futuro.'
    },
    {
      title: 'Limpieza Energética de Espacios',
      description: 'Tu entorno te afecta. Este servicio está diseñado para limpiar y armonizar la energía de tu hogar u oficina, creando un santuario de paz.',
      idealFor: 'Mudanzas, después de períodos de conflicto, o si sientes tu espacio "pesado" o estancado.',
      outcome: 'Un ambiente que te nutre, te apoya y se siente como un verdadero refugio de tranquilidad y buenas vibras.'
    }
  ];

  return (
    // Corrected structure and classNames to match CSS module
    <main className={styles.servicesPage}>
      <Container>
        <header className='fade-in-section'>
          <h1 className={styles.pageTitle}>Tu Caja de Herramientas para la Libertad Emocional</h1>
          <p className={styles.pageSubtitle}>Cada servicio está diseñado como una llave para abrir una puerta diferente en tu interior. Elige el que más resuene contigo hoy.</p>
        </header>

        <section className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={`fade-in-section ${styles.serviceCard}`}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.serviceMeta}>
                  <p><strong>Ideal para ti si buscas:</strong> {service.idealFor}</p>
                  <p><strong>El resultado que puedes esperar:</strong> {service.outcome}</p>
              </div>
              {/* Corrected Link path to '/contacto' */}
              <Link to='/contacto' className={`btn ${styles.serviceButton}`}>Quiero saber más</Link>
            </div>
          ))}
        </section>
      </Container>
    </main>
  );
}

// Added default export
export default ServicesPage;
// src/pages/AboutPage/AboutPage.jsx
import Container from '@/shared/ui/Container/Container';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <Container>
        <div className={styles.contentGrid}>
          <div className={styles.imageContainer}>
            {/* ACTION REQUIRED: 
              Replace this placeholder image URL with a direct link to a photo of yourself.
              For best results, use a square image (e.g., 500x500 pixels).
            */}
            <img 
              src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Portrait of the Therapist" 
              className={styles.profileImage}
            />
          </div>
          <div className={styles.textContainer}>
            {/* ACTION REQUIRED: 
              Replace '[Tu Nombre]' with your actual name.
            */}
            <h1 className={styles.nameTitle}>[Tu Nombre]</h1>
            <h2 className={styles.subtitle}>Tu Guía en el Viaje de la Sanación Energética</h2>
            <div className={styles.bio}>
              <p>
                Desde siempre, he sentido una profunda conexión con el mundo energético y una vocación innata por ayudar a otros a encontrar su equilibrio y bienestar. Mi camino me ha llevado a especializarme en diversas terapias holísticas que abordan al ser humano de una manera integral: mente, cuerpo y espíritu.
              </p>
              <p>
                {/* ACTION REQUIRED: 
                  Replace this paragraph with your own story. Talk about your specialties, 
                  your healing philosophy, and what clients can expect when working with you.
                */}
                Mi misión es crear un espacio seguro y sagrado donde puedas liberar bloqueos, sanar heridas emocionales y reconectar con tu esencia más pura. Me especializo en <strong>[Menciona tus especialidades, ej: Reiki, Sanación con Cristales, Péndulo Hebreo, etc.]</strong>, utilizando estas herramientas para facilitar un proceso de transformación profundo y amoroso.
              </p>
              <p>
                Creo firmemente en el poder que reside dentro de cada uno de nosotros para sanar y crear la vida que deseamos. Te invito a dar el primer paso en este hermoso viaje de autodescubrimiento y liberación energética.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
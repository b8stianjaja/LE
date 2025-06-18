// frontend/src/pages/AboutPage.jsx
import React, { useEffect } from 'react';
import profileImage from '../assets/images/default.jpg'; // Importa tu imagen

const AboutPage = () => {
    useEffect(() => {
        document.title = 'Quién Soy | Conoce a tu Guía en Liberación Energética';
        document.querySelector('meta[name="description"]').setAttribute("content", "Mi viaje y filosofía de sanación. Conoce mi formación y el enfoque compasivo que pongo en cada sesión de liberación energética.");
    }, []);

    return(
        <div>
            <h1>El Corazón Detrás de la Sanación</h1>
            <img src={profileImage} alt="Foto profesional de [Tu Nombre]" style={{maxWidth: '300px', borderRadius: '50%'}}/>
            
            <section>
                <h2>Mi Historia</h2>
                <p>Aquí va tu narrativa personal y auténtica...</p>
            </section>
            
            <section>
                <h2>Mi Filosofía de Sanación</h2>
                <p>Mis creencias y el enfoque distintivo de mi trabajo...</p>
            </section>
            
            <section>
                <h2>Cualificaciones y Formación</h2>
                <ul>
                    <li>Certificación en Alineación de Chakras - [Institución]</li>
                    <li>Terapeuta Floral de Bach Certificado - [Institución]</li>
                    {/* ... más certificaciones */}
                </ul>
            </section>
        </div>
    );
}

export default AboutPage;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    
  useEffect(() => {
    document.title = 'Quién Soy | Liberación Energética';
    document.querySelector('meta[name="description"]').setAttribute('content', 'Conoce la historia, filosofía y misión detrás de Liberación Energética. Mi pasión es guiarte en tu camino de sanación y autodescubrimiento.');
  }, []);

  return (
    <div>
      <div style={{ maxWidth: '800px', margin: '2rem auto', lineHeight: '1.7' }}>
        <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem' }}>El Corazón Detrás de la Sanación</h1>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexDirection: 'column' }}>
            {/* Reemplazar con la URL de una foto real */}
            <img src="https://via.placeholder.com/200" alt="Foto profesional del terapeuta" style={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover' }} />
            
            <div>
                <h2>Mi Viaje</h2>
                <p>
                    Aquí va la narrativa personal y auténtica. Por ejemplo: "Mi camino hacia la sanación energética comenzó en un momento de profunda búsqueda personal. Tras años de sentir un vacío que el mundo corporativo no podía llenar, descubrí en las terapias holísticas no solo mi propia sanación, sino también mi verdadera vocación: acompañar a otros a redescubrir su propia luz y poder interior."
                </p>

                <h2>Mi Filosofía de Sanación</h2>
                <p>
                    "Creo firmemente que cada persona posee en su interior la sabiduría para sanar. Mi rol es ser una facilitadora, un canal que te ayuda a escuchar tu propia guía. Integro la sabiduría ancestral con un entendimiento moderno de la energía, enfocándome en herramientas prácticas que puedas llevar a tu vida diaria para mantener el equilibrio y el autocuidado."
                </p>

                <h2>Cualificaciones y Formación</h2>
                <ul>
                    <li>Terapeuta Floral, certificada por [Nombre de la Institución]</li>
                    <li>Maestría en Reiki Usui, [Linaje o Institución]</li>
                    <li>Diplomado en Terapia Holística, [Nombre de la Institución]</li>
                    <li>[Años] de práctica continua y estudio.</li>
                </ul>

                 <Link to="/contacto" style={{ display: 'inline-block', marginTop: '2rem', padding: '1rem 2rem', background: '#10B981', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
                    Inicia Tu Viaje Conmigo
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
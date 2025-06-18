import React, { useState, useEffect } from 'react';

const TransformationsPage = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        document.title = 'Transformaciones de Clientes | Liberación Energética';
        document.querySelector('meta[name="description"]').setAttribute('content', 'Lee las historias y testimonios de personas que han experimentado una transformación positiva a través de las terapias de Liberación Energética en Llay-Llay y online.');

        fetch('http://localhost:5000/api/testimonials')
        .then(response => {
          if (!response.ok) {
            throw new Error('No se pudo obtener la lista de testimonios');
          }
          return response.json();
        })
        .then(data => {
          setTestimonials(data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <p>Cargando testimonios...</p>;
    if (error) return <p>Error: {error}</p>;

  return (
    <div>
        <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
            <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem' }}>Voces de Liberación Energética</h1>
            
            <div style={{ display: 'grid', gap: '2rem' }}>
                {testimonials.map(testimonial => (
                    <blockquote key={testimonial.id} style={{
                        margin: 0,
                        padding: '2rem',
                        borderLeft: '5px solid #10B981',
                        background: '#F9FAFB',
                        borderRadius: '0 8px 8px 0'
                    }}>
                        <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: '#374151', marginTop: 0 }}>
                            "{testimonial.quote}"
                        </p>
                        <footer style={{ textAlign: 'right', fontWeight: 'bold', color: '#111827', marginTop: '1rem' }}>
                            - {testimonial.author}, {testimonial.location}
                        </footer>
                    </blockquote>
                ))}
            </div>
        </div>
    </div>
  );
};

export default TransformationsPage;
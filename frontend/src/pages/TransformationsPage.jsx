// frontend/src/pages/TransformationsPage.jsx
import React, { useEffect } from 'react';

// Idealmente, estos datos vendrían de una API o un archivo JSON.
const testimonials = [
  { id: 1, name: 'María G.', location: 'Llay-Llay', text: 'El antes y después en mi energía es increíble. Me siento más ligera y en paz.' },
  { id: 2, name: 'Carlos R.', location: 'Online', text: 'Las sesiones a distancia fueron sorprendentemente poderosas. Recomiendo totalmente la mentoría energética.' }
];

const TransformationsPage = () => {
    useEffect(() => {
        document.title = 'Transformaciones | Voces de Liberación Energética';
        document.querySelector('meta[name="description"]').setAttribute("content", "Lee las historias y testimonios de clientes que han experimentado una profunda transformación y bienestar a través de nuestras terapias energéticas.");
    }, []);

    return (
        <div>
            <h1>Voces de Liberación Energética</h1>
            {testimonials.map(item => (
                <blockquote key={item.id} className="testimonial-card">
                    <p>"{item.text}"</p>
                    <footer>- {item.name}, {item.location}</footer>
                </blockquote>
            ))}
        </div>
    );
};

export default TransformationsPage;
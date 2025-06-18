import React from 'react';

// Datos de ejemplo para los testimonios. Más adelante podrían venir de una API.
const testimonials = [
  { 
    id: 1, 
    name: 'María G.', 
    location: 'Llay-Llay', 
    text: 'El antes y después en mi energía es increíble. Me siento más ligera y en paz.' 
  },
  { 
    id: 2, 
    name: 'Carlos R.', 
    location: 'Online', 
    text: 'Las sesiones a distancia fueron sorprendentemente poderosas. Recomiendo totalmente la mentoría energética.' 
  }
];

const TestimonialsCarousel = () => {
  return (
    <section className="testimonials-section" style={{ padding: '2rem 0', textAlign: 'center' }}>
      <h2>Voces de Liberación Energética</h2>
      <div className="carousel">
        {/* Más adelante, esto se puede convertir en un carrusel real con una librería como Swiper o Slick */}
        {testimonials.map(item => (
          <blockquote key={item.id} className="testimonial-card" style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '8px' }}>
            <p>"{item.text}"</p>
            <footer>- {item.name}, {item.location}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
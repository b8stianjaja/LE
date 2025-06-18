import React from 'react';
import styles from './ContactPage.module.css';
import Button from '../../components/common/Button/Button';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Contáctanos</h1>
      <p className={styles.subtitle}>
        ¿Tienes preguntas o deseas agendar una cita? Escríbenos.
      </p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input type="text" placeholder="Tu Nombre" required />
        <input type="email" placeholder="Tu Correo Electrónico" required />
        <textarea placeholder="Tu Mensaje" rows="6" required></textarea>
        <Button type="submit">Enviar Mensaje</Button>
      </form>
    </div>
  );
};

export default ContactPage;
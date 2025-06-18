import React, { useEffect } from 'react';

const ContactPage = () => {

  useEffect(() => {
    document.title = 'Contacto | Agenda tu Sesión en Liberación Energética';
    document.querySelector('meta[name="description"]').setAttribute('content', 'Conecta con nosotros para iniciar tu viaje de sanación. Agenda tu sesión en Llay-Llay, consulta nuestros datos de contacto o envíanos un mensaje.');
  }, []);

  return (
    <div>
        <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
            <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem' }}>Inicia Tu Viaje</h1>
            <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                Estoy aquí para responder tus preguntas y acompañarte. Elige la opción que más te acomode para conectar.
            </p>

            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {/* Formulario de Contacto */}
                <div style={{ flex: '1 1 400px' }}>
                    <h2>Envíame un Mensaje</h2>
                    <form>
                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" name="name" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }}/>
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }}/>
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" name="message" rows="5" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }}></textarea>
                        </div>
                        <button type="submit" style={{ padding: '1rem 2rem', background: '#10B981', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Enviar</button>
                    </form>
                </div>

                {/* Información de Contacto */}
                <div style={{ flex: '1 1 300px' }}>
                    <h2>Otras Formas de Conectar</h2>
                    <p><strong>Email:</strong> <a href="mailto:contacto@liberacionenergetica.cl">contacto@liberacionenergetica.cl</a></p>
                    <p><strong>Teléfono/WhatsApp:</strong> <a href="tel:+56912345678">+56 9 1234 5678</a></p>
                    
                    <h3 style={{marginTop: '2rem'}}>Ubicación</h3>
                    <p>Dirección de consulta, Llay-Llay, Valparaíso, Chile</p>
                    {/* Placeholder para Google Maps */}
                    <div style={{ height: '200px', background: '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', marginTop: '1rem' }}>
                        <p>Integración de Google Maps aquí</p>
                    </div>

                    <h3 style={{marginTop: '2rem'}}>Agendamiento Online</h3>
                    <p>Para agendar directamente, puedes usar mi sistema de reservas online.</p>
                    {/* Placeholder para Calendly */}
                    <a href="#" style={{ display: 'inline-block', marginTop: '1rem', padding: '1rem 2rem', background: '#111827', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
                        Ver Disponibilidad (Calendly)
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactPage;
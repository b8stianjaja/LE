import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // Estilos para el enlace activo para dar feedback visual al usuario
  const activeLinkStyle = {
    textDecoration: 'underline',
    color: '#34D399', // Un color verde esmeralda para un toque sereno
  };

  return (
    <nav style={{ background: '#fff', padding: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <NavLink to="/" style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>
        Liberación Energética
      </NavLink>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0 }}>
        <li><NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : { color: '#555' }}>Inicio</NavLink></li>
        <li><NavLink to="/servicios" style={({ isActive }) => isActive ? activeLinkStyle : { color: '#555' }}>Servicios</NavLink></li>
        <li><NavLink to="/quien-soy" style={({ isActive }) => isActive ? activeLinkStyle : { color: '#555' }}>Quién Soy</NavLink></li>
        <li><NavLink to="/transformaciones" style={({ isActive }) => isActive ? activeLinkStyle : { color: '#555' }}>Transformaciones</NavLink></li>
        <li><NavLink to="/inspiracion" style={({ isActive }) => isActive ? activeLinkStyle : { color: '#555' }}>Inspiración</NavLink></li>
        <li><NavLink to="/contacto" style={({ isActive }) => isActive ? activeLinkStyle : { color: '#555' }}>Contacto</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
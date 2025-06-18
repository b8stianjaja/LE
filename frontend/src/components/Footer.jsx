import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto text-center px-4">
        <p>&copy; {new Date().getFullYear()} Liberación Energética. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link to="/politica-de-privacidad" className="hover:text-blue-400">Política de Privacidad</Link>
          <Link to="/terminos-y-condiciones" className="hover:text-blue-400">Términos y Condiciones</Link>
          {/* Agrega enlaces a redes sociales aquí */}
          <a href="https://www.instagram.com/liberacion.energetica" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Instagram</a>
          {/* Añade más redes sociales si aplica */}
        </div>
        <p className="mt-4">Ubicación: Llay-Llay, Valparaíso, Chile</p>
      </div>
    </footer>
  );
};

export default Footer;
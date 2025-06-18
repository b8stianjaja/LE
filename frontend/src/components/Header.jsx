import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Liberación Energética
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-gray-600 hover:text-blue-600">Inicio</Link>
          </li>
          <li>
            <Link to="/servicios" className="text-gray-600 hover:text-blue-600">Servicios</Link>
          </li>
          <li>
            <Link to="/quien-soy" className="text-gray-600 hover:text-blue-600">Quién Soy</Link>
          </li>
          <li>
            <Link to="/transformaciones" className="text-gray-600 hover:text-blue-600">Transformaciones</Link>
          </li>
          <li>
            <Link to="/inspiracion" className="text-gray-600 hover:text-blue-600">Insights e Inspiración</Link>
          </li>
          <li>
            <Link to="/contacto" className="text-gray-600 hover:text-blue-600">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
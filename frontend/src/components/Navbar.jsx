// frontend/src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isServicesOpen, setServicesOpen] = useState(false);
    
    // Estos datos podrían venir de la misma API que ServicesPage
    const services = [
        {id: 1, name: "Alineación de Chakras"},
        {id: 2, name: "Terapia Floral de Bach"}
    ];

    return (
        <nav>
            <NavLink to="/">Inicio</NavLink>
            <div 
                onMouseEnter={() => setServicesOpen(true)} 
                onMouseLeave={() => setServicesOpen(false)}
            >
                <NavLink to="/services">Servicios</NavLink>
                {isServicesOpen && (
                    <div className="dropdown-menu">
                        {services.map(s => <NavLink key={s.id} to={`/services/${s.id}`}>{s.name}</NavLink>)}
                    </div>
                )}
            </div>
            <NavLink to="/about">Quién Soy</NavLink>
            <NavLink to="/transformations">Transformaciones</NavLink>
            <NavLink to="/insights">Insights</NavLink>
            <NavLink to="/contact">Contacto</NavLink>
        </nav>
    );
};

export default Navbar;
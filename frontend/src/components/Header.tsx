import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-600">InmoDemo</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Inicio</a></li>
            <li><a href="/propiedades" className="text-gray-700 hover:text-blue-600 font-medium">Propiedades</a></li>
            <li><a href="/servicios" className="text-gray-700 hover:text-blue-600 font-medium">Servicios</a></li>
            <li><a href="/nosotros" className="text-gray-700 hover:text-blue-600 font-medium">Nosotros</a></li>
            <li><a href="/contacto" className="text-gray-700 hover:text-blue-600 font-medium">Contacto</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-blue-600 font-medium">Iniciar Sesión</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Registrarse
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
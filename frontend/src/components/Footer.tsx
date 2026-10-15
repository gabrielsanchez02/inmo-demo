import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">InmoDemo</h3>
            <p className="text-gray-300">
              Tu agencia inmobiliaria de confianza en Galicia. Ofrecemos soluciones personalizadas para tus necesidades inmobiliarias.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition">Inicio</a></li>
              <li><a href="/propiedades" className="text-gray-300 hover:text-white transition">Propiedades</a></li>
              <li><a href="/servicios" className="text-gray-300 hover:text-white transition">Servicios</a></li>
              <li><a href="/nosotros" className="text-gray-300 hover:text-white transition">Nosotros</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-white transition">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Av. Principal, 123</li>
              <li>15001, Santiago de Compostela</li>
              <li>Tel: 981 123 456</li>
              <li>Email: info@inmodemo.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} InmoDemo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
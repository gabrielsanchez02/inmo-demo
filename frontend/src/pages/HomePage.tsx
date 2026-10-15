import React from 'react';
import Layout from '../components/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">Encuentra tu hogar ideal en Galicia</h1>
              <p className="text-xl mb-6">Descubre las mejores propiedades con nuestra asistencia personalizada</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Explorar Propiedades
                </button>
                <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                  Contactar Asesor
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Busca tu propiedad ideal</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Tipo de propiedad</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Todas</option>
                  <option>Casa</option>
                  <option>Piso</option>
                  <option>Local</option>
                  <option>Chalet</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Ubicación</label>
                <input 
                  type="text" 
                  placeholder="Ciudad o provincia" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Precio máximo</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Cualquier precio</option>
                  <option>Hasta 100.000€</option>
                  <option>Hasta 200.000€</option>
                  <option>Hasta 300.000€</option>
                  <option>Más de 300.000€</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Propiedades Destacadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Venta
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">Casa en Santiago</h3>
                    <span className="text-xl font-bold text-blue-600">250.000€</span>
                  </div>
                  <p className="text-gray-600 mb-4">Calle Principal, 123</p>
                  <div className="flex justify-between text-gray-600">
                    <span>3 dormitorios</span>
                    <span>2 baños</span>
                    <span>120 m²</span>
                  </div>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Ver detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">¿Por qué elegirnos en Galicia?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Experiencia Local</h3>
                <p className="text-gray-600">Conocemos el mercado inmobiliario gallego a fondo y ofrecemos asesoramiento personalizado.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Tiempo de Resolución</h3>
                <p className="text-gray-600">Nuestro proceso eficiente garantiza la resolución rápida de tus necesidades inmobiliarias.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20h10M5 17v-5h14v5M7 10h10M5 5h14v3H5V5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Garantía de Satisfacción</h3>
                <p className="text-gray-600">Ofrecemos garantías y satisfacción asegurada en todas nuestras transacciones inmobiliarias.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
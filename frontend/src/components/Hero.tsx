import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [operation, setOperation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de búsqueda
    console.log('Búsqueda:', { searchTerm, propertyType, operation });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-blue-600/20 rounded-full mb-6 backdrop-blur-sm border border-blue-500/30">
            <span className="text-sm font-medium text-blue-100">¡Encuentra tu hogar ideal!</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Encuentra tu <span className="text-blue-300">Hogar Ideal</span> en Galicia
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-blue-100 opacity-90 leading-relaxed">
            Descubre una amplia selección de propiedades en las mejores zonas de Galicia
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label htmlFor="search" className="block text-sm font-medium text-blue-100 mb-2">
                    Ciudad o Provincia
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Ej: Vigo, Santiago, A Coruña"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-blue-200 backdrop-blur-sm transition-all duration-300"
                    />
                    <div className="absolute right-3 top-3 text-blue-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-blue-100 mb-2">
                    Tipo de Propiedad
                  </label>
                  <select
                    id="type"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white backdrop-blur-sm transition-all duration-300"
                  >
                    <option value="" className="text-gray-800">Todos</option>
                    <option value="house" className="text-gray-800">Casa</option>
                    <option value="apartment" className="text-gray-800">Piso</option>
                    <option value="cottage" className="text-gray-800">Casa Rural</option>
                    <option value="land" className="text-gray-800">Parcela</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="operation" className="block text-sm font-medium text-blue-100 mb-2">
                    Operación
                  </label>
                  <select
                    id="operation"
                    value={operation}
                    onChange={(e) => setOperation(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white backdrop-blur-sm transition-all duration-300"
                  >
                    <option value="" className="text-gray-800">Todas</option>
                    <option value="sale" className="text-gray-800">Venta</option>
                    <option value="rent" className="text-gray-800">Alquiler</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  Buscar Propiedades
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
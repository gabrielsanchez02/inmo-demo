import React, { useState, useEffect } from 'react';
import { Property } from '../types';
import mockData from '../mockData.json';

const InteractiveCatalog: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [filters, setFilters] = useState({
    type: '',
    operation: '',
    province: '',
    minPrice: '',
    maxPrice: ''
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // En una aplicación real, aquí se haría una llamada a la API
    setProperties(mockData);
    setFilteredProperties(mockData);
  }, []);

  useEffect(() => {
    let result = [...properties];
    
    // Filtrar por tipo
    if (filters.type) {
      result = result.filter(property => property.type === filters.type);
    }
    
    // Filtrar por operación
    if (filters.operation) {
      result = result.filter(property => property.operation === filters.operation);
    }
    
    // Filtrar por provincia
    if (filters.province) {
      result = result.filter(property => property.province === filters.province);
    }
    
    // Filtrar por precio mínimo
    if (filters.minPrice) {
      result = result.filter(property => property.price >= parseInt(filters.minPrice));
    }
    
    // Filtrar por precio máximo
    if (filters.maxPrice) {
      result = result.filter(property => property.price <= parseInt(filters.maxPrice));
    }
    
    // Filtrar por término de búsqueda
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(property => 
        property.title.toLowerCase().includes(term) ||
        property.description.toLowerCase().includes(term) ||
        property.city.toLowerCase().includes(term) ||
        property.province.toLowerCase().includes(term)
      );
    }
    
    setFilteredProperties(result);
  }, [filters, searchTerm, properties]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearFilters = () => {
    setFilters({
      type: '',
      operation: '',
      province: '',
      minPrice: '',
      maxPrice: ''
    });
    setSearchTerm('');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Catálogo Interactivo de Propiedades</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora nuestro catálogo completo de propiedades con filtros personalizados
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
            <div className="lg:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Búsqueda
              </label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Buscar por título, ciudad o provincia..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo
              </label>
              <select
                id="type"
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Todos</option>
                <option value="house">Casa</option>
                <option value="apartment">Piso</option>
                <option value="cottage">Casa Rural</option>
                <option value="land">Parcela</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="operation" className="block text-sm font-medium text-gray-700 mb-1">
                Operación
              </label>
              <select
                id="operation"
                name="operation"
                value={filters.operation}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Todas</option>
                <option value="sale">Venta</option>
                <option value="rent">Alquiler</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">
                Provincia
              </label>
              <select
                id="province"
                name="province"
                value={filters.province}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Todas</option>
                <option value="A Coruña">A Coruña</option>
                <option value="Lugo">Lugo</option>
                <option value="Ourense">Ourense</option>
                <option value="Pontevedra">Pontevedra</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition"
              >
                Limpiar Filtros
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">
                Precio Mínimo (€)
              </label>
              <input
                type="number"
                id="minPrice"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Mínimo"
              />
            </div>
            
            <div>
              <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">
                Precio Máximo (€)
              </label>
              <input
                type="number"
                id="maxPrice"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Máximo"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map(property => (
              <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative">
                  {property.image ? (
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                      Imagen no disponible
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{property.title}</h3>
                    <span className="text-lg font-bold text-blue-600">{new Intl.NumberFormat('es-ES', {
                      style: 'currency',
                      currency: 'EUR',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(property.price)}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{property.city}, {property.province}</span>
                    <span>{property.bedrooms} dorms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {property.operation === 'sale' ? 'Venta' : 'Alquiler'}
                    </span>
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Ver detalles
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No se encontraron propiedades</h3>
              <p className="text-gray-500">Intenta ajustar tus filtros o términos de búsqueda</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveCatalog;
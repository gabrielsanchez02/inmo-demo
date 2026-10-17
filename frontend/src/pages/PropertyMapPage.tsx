import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Property } from '../types';
import { propertyService } from '../services/propertyService';

const PropertyMapPage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        // En una aplicación real, se haría una llamada real a la API
        // Por ahora, usamos datos de prueba
        const fetchedProperties = await propertyService.getAllProperties();
        setProperties(fetchedProperties);
      } catch (err) {
        console.error('Error al obtener propiedades:', err);
        setError('Error al cargar las propiedades. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
              <p className="text-gray-600">Cargando propiedades...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="text-red-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.66 1.383-3L13.75 14m-2.5-2h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Error al cargar las propiedades</h3>
              <p className="text-gray-500">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Reintentar
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Propiedades en el Mapa</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visualiza todas nuestras propiedades en un mapa interactivo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mapa */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Simulación de mapa */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-indigo-200/30"></div>
                <div className="relative z-10 text-center">
                  <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-4">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Mapa de Propiedades</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Visualización interactiva de todas las propiedades disponibles en Galicia
                  </p>
                </div>
                
                {/* Marcadores de propiedades */}
                {properties.slice(0, 5).map((property, index) => (
                  <div 
                    key={property.id}
                    className="absolute w-8 h-8 bg-blue-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors duration-300"
                    style={{
                      top: `${20 + (index * 15)}%`,
                      left: `${30 + (index * 10)}%`,
                    }}
                    onClick={() => setSelectedProperty(property)}
                  >
                    <span className="text-white font-bold text-xs">{index + 1}</span>
                  </div>
                ))}
              </div>
              
              {selectedProperty && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900">{selectedProperty.title}</h4>
                      <p className="text-sm text-gray-600">{selectedProperty.city}, {selectedProperty.province}</p>
                      <p className="text-blue-600 font-semibold">{new Intl.NumberFormat('es-ES', {
                        style: 'currency',
                        currency: 'EUR',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(selectedProperty.price)}</p>
                    </div>
                    <button 
                      onClick={() => setSelectedProperty(null)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Lista de propiedades */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Propiedades Disponibles</h2>
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {properties.map((property) => (
                  <div 
                    key={property.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                      selectedProperty?.id === property.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                    onClick={() => setSelectedProperty(property)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900">{property.title}</h3>
                        <p className="text-sm text-gray-600">{property.city}, {property.province}</p>
                      </div>
                      <span className="text-blue-600 font-semibold">{new Intl.NumberFormat('es-ES', {
                        style: 'currency',
                        currency: 'EUR',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(property.price)}</span>
                    </div>
                    <div className="mt-2 flex justify-between text-sm text-gray-500">
                      <span>{property.bedrooms} dorm.</span>
                      <span>{property.bathrooms} baños</span>
                      <span>{property.area} m²</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyMapPage;
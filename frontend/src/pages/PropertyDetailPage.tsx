import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Property } from '../types';
import { propertyService } from '../services/propertyService';
import { useParams } from 'react-router-dom';

const PropertyDetailPage: React.FC = () => {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    // En una aplicación real, se obtendría el ID de la propiedad desde las rutas
    // Para este ejemplo, usamos el primer ID disponible
    const fetchProperty = async () => {
      try {
        setLoading(true);
        // En una aplicación real, se obtendría el ID desde las rutas
        // Por ahora, usamos el primer ID disponible
        if (!id) {
          throw new Error('ID de propiedad no proporcionado');
        }
        const fetchedProperty = await propertyService.getPropertyById(parseInt(id, 10));
        setProperty(fetchedProperty);
      } catch (err) {
        console.error('Error al obtener la propiedad:', err);
        setError('Error al cargar la propiedad. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="text-red-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.66 1.383-3L13.75 14m-2.5-2h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Error al cargar la propiedad</h1>
            <p className="text-gray-600">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Reintentar
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  if (!property) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Propiedad no encontrada</h1>
            <p className="text-gray-600">La propiedad que estás buscando no existe o ha sido eliminada.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Volver a todas las propiedades
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Imagen principal */}
          <div className="h-96 bg-gray-200 relative">
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
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{property.title}</h1>
                <p className="text-gray-600 mb-4">{property.description}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-3xl font-bold text-blue-600">{new Intl.NumberFormat('es-ES', {
                  style: 'currency',
                  currency: 'EUR',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(property.price)}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-gray-800">{property.bedrooms}</div>
                <div className="text-gray-600">Dormitorios</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-gray-800">{property.bathrooms}</div>
                <div className="text-gray-600">Baños</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-gray-800">{property.area} m²</div>
                <div className="text-gray-600">Superficie</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-gray-800">{property.type === 'house' ? 'Casa' : property.type === 'apartment' ? 'Piso' : property.type === 'cottage' ? 'Casa Rural' : 'Parcela'}</div>
                <div className="text-gray-600">Tipo</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Detalles de la Propiedad</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-800">Ubicación</h3>
                    <p className="text-gray-600">{property.city}, {property.province}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Operación</h3>
                    <p className="text-gray-600">{property.operation === 'sale' ? 'Venta' : 'Alquiler'}</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">Descripción</h2>
                <p className="text-gray-600 mb-6">{property.description}</p>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-gray-800 mb-2">¿Tienes alguna pregunta?</h3>
                  <p className="text-gray-600">Contacta con nosotros para más información sobre esta propiedad.</p>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Solicita Información</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Nombre completo</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Correo electrónico</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Teléfono (opcional)</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tu número de teléfono"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
                      <textarea
                        id="message"
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Cuéntanos sobre tus necesidades..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                    >
                      Enviar Solicitud
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetailPage;
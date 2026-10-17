import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import WhyChooseUs from '../components/WhyChooseUs';
import BackendStatus from '../components/BackendStatus';
import { Property } from '../types';
import { mockPropertyService } from '../services/mockPropertyService';

const HomePage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const fetchedProperties = await mockPropertyService.getAllProperties();
        setProperties(fetchedProperties);
        setFeaturedProperties(fetchedProperties.slice(0, 3));
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
        <Hero />
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
              <p className="text-gray-600">Cargando propiedades destacadas...</p>
            </div>
          </div>
        </div>
        <WhyChooseUs />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Hero />
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
        <WhyChooseUs />
      </Layout>
    );
  }

  return (
    <Layout>
      <Hero />
      <div className="container mx-auto px-4 py-4">
        <BackendStatus />
      </div>
      <FeaturedProperties properties={featuredProperties} />
      <WhyChooseUs />
    </Layout>
  );
};

export default HomePage;
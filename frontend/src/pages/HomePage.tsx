import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import WhyChooseUs from '../components/WhyChooseUs';
import { Property } from '../types';
import mockData from '../mockData.json';

const HomePage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);

  useEffect(() => {
    // En una aplicación real, aquí se haría una llamada a la API
    setProperties(mockData);
    setFeaturedProperties(mockData.slice(0, 3));
  }, []);

  return (
    <Layout>
      <Hero />
      <FeaturedProperties properties={featuredProperties} />
      <WhyChooseUs />
    </Layout>
  );
};

export default HomePage;
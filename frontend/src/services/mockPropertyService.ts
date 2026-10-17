// Servicio para gestionar propiedades usando datos mock
import { Property } from '../types';
import mockData from '../mockData.json';

export const mockPropertyService = {
  // Obtener todas las propiedades desde el mock data
  getAllProperties: async (): Promise<Property[]> => {
    try {
      // Simular un pequeño delay para mejor experiencia
      await new Promise(resolve => setTimeout(resolve, 500));
      return mockData as Property[];
    } catch (error) {
      console.error('Error al obtener propiedades:', error);
      return [];
    }
  },
  
  // Obtener una propiedad por ID desde el mock data
  getPropertyById: async (id: number): Promise<Property> => {
    try {
      await new Promise(resolve => setTimeout(resolve, 200));
      const property = mockData.find(p => p.id === id);
      if (!property) {
        throw new Error('Property not found');
      }
      return property as Property;
    } catch (error) {
      console.error('Error al obtener propiedad:', error);
      throw error;
    }
  },
  
  // Crear una nueva propiedad (mock)
  createProperty: async (propertyData: Omit<Property, 'id'>): Promise<Property> => {
    try {
      // Simular un delay
      await new Promise(resolve => setTimeout(resolve, 300));
      // En un entorno real, se crearía una nueva propiedad
      const newProperty = {
        ...propertyData,
        id: mockData.length > 0 ? Math.max(...mockData.map(p => p.id)) + 1 : 1
      };
      return newProperty as Property;
    } catch (error) {
      console.error('Error al crear propiedad:', error);
      throw error;
    }
  },
  
  // Actualizar una propiedad (mock)
  updateProperty: async (id: number, propertyData: Partial<Property>): Promise<Property> => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      // En un entorno real, se actualizaría la propiedad
      const updatedProperty = {
        ...mockData.find(p => p.id === id),
        ...propertyData
      };
      return updatedProperty as Property;
    } catch (error) {
      console.error('Error al actualizar propiedad:', error);
      throw error;
    }
  },
  
  // Eliminar una propiedad (mock)
  deleteProperty: async (id: number): Promise<void> => {
    try {
      await new Promise(resolve => setTimeout(resolve, 200));
      // En un entorno real, se eliminaría la propiedad
      console.log('Property deleted (mock):', id);
    } catch (error) {
      console.error('Error al eliminar propiedad:', error);
      throw error;
    }
  }
};
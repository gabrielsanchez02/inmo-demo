// Servicio para gestionar propiedades a través de la API
import { apiService } from './api';
import { Property } from '../types';

export const propertyService = {
  // Obtener todas las propiedades
  getAllProperties: async (): Promise<Property[]> => {
    try {
      const properties = await apiService.get<Property[]>('/api/properties');
      return properties;
    } catch (error) {
      console.error('Error al obtener propiedades:', error);
      // En caso de error, devolver datos vacíos o datos de prueba
      return [];
    }
  },
  
  // Obtener una propiedad por ID
  getPropertyById: async (id: number): Promise<Property> => {
    try {
      const property = await apiService.get<Property>(`/api/properties/${id}`);
      return property;
    } catch (error) {
      console.error('Error al obtener propiedad:', error);
      // En caso de error, devolver una propiedad vacía o datos de prueba
      throw error;
    }
  },
  
  // Crear una nueva propiedad
  createProperty: async (propertyData: Omit<Property, 'id'>): Promise<Property> => {
    try {
      const property = await apiService.post<Omit<Property, 'id'>, Property>('/api/properties', propertyData);
      return property;
    } catch (error) {
      console.error('Error al crear propiedad:', error);
      throw error;
    }
  },
  
  // Actualizar una propiedad
  updateProperty: async (id: number, propertyData: Partial<Property>): Promise<Property> => {
    try {
      const property = await apiService.put<Partial<Property>, Property>(`/api/properties/${id}`, propertyData);
      return property;
    } catch (error) {
      console.error('Error al actualizar propiedad:', error);
      throw error;
    }
  },
  
  // Eliminar una propiedad
  deleteProperty: async (id: number): Promise<void> => {
    try {
      await apiService.delete(`/api/properties/${id}`);
    } catch (error) {
      console.error('Error al eliminar propiedad:', error);
      throw error;
    }
  }
};
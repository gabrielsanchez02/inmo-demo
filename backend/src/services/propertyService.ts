// Servicio para manejo de propiedades
import { Property } from '../models/Property';
import { prisma } from '../db/database';
import { mockProperties } from '../data/mockData';
import { cacheManager } from '../utils/cache';

export class PropertyService {
  // Obtener todas las propiedades
  static async getAllProperties(): Promise<Property[]> {
    try {
      // Limpiar cache antes de obtener datos
      cacheManager.cleanup();
      
      const properties = await prisma.property.findMany();
      return properties;
    } catch (error) {
      throw new Error('Error al obtener propiedades');
    }
  }

  // Obtener una propiedad por ID
  static async getPropertyById(id: string): Promise<Property | null> {
    try {
      const property = await prisma.property.findUnique({
        where: { id }
      });
      return property;
    } catch (error) {
      throw new Error('Error al obtener propiedad');
    }
  }

  // Crear una nueva propiedad
  static async createProperty(propertyData: Omit<Property, 'id' | 'createdAt' | 'updatedAt'>): Promise<Property> {
    try {
      const property = await prisma.property.create({
        data: {
          ...propertyData,
          id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
      return property;
    } catch (error) {
      throw new Error('Error al crear propiedad');
    }
  }

  // Actualizar una propiedad
  static async updateProperty(id: string, propertyData: Partial<Property>): Promise<Property | null> {
    try {
      const property = await prisma.property.update({
        where: { id },
        data: {
          ...propertyData,
          updatedAt: new Date()
        }
      });
      return property;
    } catch (error) {
      throw new Error('Error al actualizar propiedad');
    }
  }

  // Eliminar una propiedad
  static async deleteProperty(id: string): Promise<boolean> {
    try {
      await prisma.property.delete({
        where: { id }
      });
      return true;
    } catch (error) {
      throw new Error('Error al eliminar propiedad');
    }
  }

  // Obtener propiedades por tipo
  static async getPropertiesByType(type: string): Promise<Property[]> {
    try {
      const properties = await prisma.property.findMany({
        where: { type }
      });
      return properties;
    } catch (error) {
      throw new Error('Error al obtener propiedades por tipo');
    }
  }

  // Obtener propiedades por operación
  static async getPropertiesByOperation(operation: string): Promise<Property[]> {
    try {
      const properties = await prisma.property.findMany({
        where: { operation }
      });
      return properties;
    } catch (error) {
      throw new Error('Error al obtener propiedades por operación');
    }
  }

  // Buscar propiedades por palabra clave
  static async searchProperties(keyword: string): Promise<Property[]> {
    try {
      const properties = await prisma.property.findMany({
        where: {
          OR: [
            { title: { contains: keyword, mode: 'insensitive' } },
            { description: { contains: keyword, mode: 'insensitive' } },
            { province: { contains: keyword, mode: 'insensitive' } },
            { city: { contains: keyword, mode: 'insensitive' } }
          ]
        }
      });
      return properties;
    } catch (error) {
      throw new Error('Error al buscar propiedades');
    }
  }

  // Obtener propiedades con paginación
  static async getPropertiesPaginated(page: number, limit: number): Promise<{ properties: Property[], total: number }> {
    try {
      const skip = (page - 1) * limit;
      const properties = await prisma.property.findMany({
        skip,
        take: limit
      });
      const total = await prisma.property.count();
      return { properties, total };
    } catch (error) {
      throw new Error('Error al obtener propiedades paginadas');
    }
  }
}
// Servicio para gestionar leads a través de la API
import { apiService } from './api';
import { Lead } from '../types';

export const leadService = {
  // Obtener todos los leads
  getAllLeads: async (): Promise<Lead[]> => {
    try {
      const leads = await apiService.get<Lead[]>('/api/leads');
      return leads;
    } catch (error) {
      console.error('Error al obtener leads:', error);
      throw error;
    }
  },
  
  // Obtener un lead por ID
  getLeadById: async (id: number): Promise<Lead> => {
    try {
      const lead = await apiService.get<Lead>(`/api/leads/${id}`);
      return lead;
    } catch (error) {
      console.error('Error al obtener lead:', error);
      throw error;
    }
  },
  
  // Crear un nuevo lead
  createLead: async (leadData: Omit<Lead, 'id'>): Promise<Lead> => {
    try {
      const lead = await apiService.post<Omit<Lead, 'id'>, Lead>('/api/leads', leadData);
      return lead;
    } catch (error) {
      console.error('Error al crear lead:', error);
      throw error;
    }
  },
  
  // Actualizar un lead
  updateLead: async (id: number, leadData: Partial<Lead>): Promise<Lead> => {
    try {
      const lead = await apiService.put<Partial<Lead>, Lead>(`/api/leads/${id}`, leadData);
      return lead;
    } catch (error) {
      console.error('Error al actualizar lead:', error);
      throw error;
    }
  },
  
  // Eliminar un lead
  deleteLead: async (id: number): Promise<void> => {
    try {
      await apiService.delete(`/api/leads/${id}`);
    } catch (error) {
      console.error('Error al eliminar lead:', error);
      throw error;
    }
  }
};
// Validaciones de datos
import { Property } from '../models/Property';

interface ValidationResult {
  valid: boolean;
  error?: string;
}

// Validar propiedad
export const validateProperty = (property: Partial<Property>): ValidationResult => {
  if (!property.title || property.title.trim().length === 0) {
    return { valid: false, error: 'El título es obligatorio' };
  }
  
  if (!property.description || property.description.trim().length === 0) {
    return { valid: false, error: 'La descripción es obligatoria' };
  }
  
  if (!property.price || property.price <= 0) {
    return { valid: false, error: 'El precio debe ser mayor que 0' };
  }
  
  if (!property.type || !['house', 'apartment', 'cottage', 'land'].includes(property.type)) {
    return { valid: false, error: 'Tipo de propiedad inválido' };
  }
  
  if (!property.operation || !['sale', 'rent'].includes(property.operation)) {
    return { valid: false, error: 'Operación inválida' };
  }
  
  if (!property.province || property.province.trim().length === 0) {
    return { valid: false, error: 'La provincia es obligatoria' };
  }
  
  if (!property.city || property.city.trim().length === 0) {
    return { valid: false, error: 'La ciudad es obligatoria' };
  }
  
  if (property.bedrooms === undefined || property.bedrooms < 0) {
    return { valid: false, error: 'Número de dormitorios inválido' };
  }
  
  if (property.bathrooms === undefined || property.bathrooms < 0) {
    return { valid: false, error: 'Número de baños inválido' };
  }
  
  if (property.area === undefined || property.area <= 0) {
    return { valid: false, error: 'El área debe ser mayor que 0' };
  }
  
  return { valid: true };
};

// Validar lead
export const validateLead = (lead: any): ValidationResult => {
  if (!lead.name || lead.name.trim().length === 0) {
    return { valid: false, error: 'El nombre es obligatorio' };
  }
  
  if (!lead.email || !isValidEmail(lead.email)) {
    return { valid: false, error: 'Email inválido' };
  }
  
  if (!lead.phone || lead.phone.trim().length === 0) {
    return { valid: false, error: 'El teléfono es obligatorio' };
  }
  
  if (!lead.message || lead.message.trim().length === 0) {
    return { valid: false, error: 'El mensaje es obligatorio' };
  }
  
  return { valid: true };
};

// Validar email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validar URL de imagen
export const validateImageUrl = (url: string): boolean => {
  if (!url) return true; // Si no se proporciona URL, es válido
  
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
  } catch (error) {
    return false;
  }
};
import { Property } from '../types';

// Función para obtener el tipo de propiedad como texto legible
export const getPropertyTypeText = (type: Property['type']): string => {
  switch (type) {
    case 'house': return 'Casa';
    case 'apartment': return 'Piso';
    case 'cottage': return 'Casa Rural';
    case 'land': return 'Parcela';
    default: return type;
  }
};

// Función para obtener el tipo de operación como texto legible
export const getOperationText = (operation: Property['operation']): string => {
  switch (operation) {
    case 'sale': return 'Venta';
    case 'rent': return 'Alquiler';
    default: return operation;
  }
};

// Función para formatear el precio
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Función para formatear la superficie
export const formatArea = (area: number): string => {
  return `${area} m²`;
};

// Función para obtener las propiedades destacadas (por ejemplo, las 3 primeras)
export const getFeaturedProperties = (properties: Property[]): Property[] => {
  return properties.slice(0, 3);
};

// Función para filtrar propiedades por tipo
export const filterPropertiesByType = (properties: Property[], type: Property['type']): Property[] => {
  return properties.filter(property => property.type === type);
};

// Función para filtrar propiedades por operación
export const filterPropertiesByOperation = (properties: Property[], operation: Property['operation']): Property[] => {
  return properties.filter(property => property.operation === operation);
};

// Función para filtrar propiedades por provincia
export const filterPropertiesByProvince = (properties: Property[], province: string): Property[] => {
  return properties.filter(property => property.province === province);
};
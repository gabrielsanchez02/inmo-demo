// Modelo de propiedad
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  type: 'house' | 'apartment' | 'cottage' | 'land';
  operation: 'sale' | 'rent';
  province: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Modelo de lead
export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId?: string;
  status: 'new' | 'contacted' | 'visit_scheduled' | 'discarded';
  createdAt: Date;
  updatedAt: Date;
}
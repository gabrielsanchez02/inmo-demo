export interface Property {
  id: number;
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
}

export interface Lead {
  id: number;
  name: string;
  email: string;
  phone?: string;
  message: string;
  propertyId?: number;
  status: 'new' | 'contacted' | 'visit_scheduled' | 'discarded';
  createdAt: string;
  updatedAt: string;
}
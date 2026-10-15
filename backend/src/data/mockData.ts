// Datos de ejemplo para pruebas
import { Property, Lead } from '../models/Property';
import { generateId } from '../utils/helpers';

export const mockProperties: Property[] = [
  {
    id: generateId(),
    title: "Casa de lujo en zona residencial",
    description: "Hermosa casa de 3 dormitorios con jardín y garaje",
    price: 450000,
    type: "house",
    operation: "sale",
    province: "Buenos Aires",
    city: "La Plata",
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    image: "/images/casa1.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: generateId(),
    title: "Departamento en el centro",
    description: "Departamento de 2 dormitorios con vista panorámica",
    price: 250000,
    type: "apartment",
    operation: "sale",
    province: "Buenos Aires",
    city: "Buenos Aires",
    bedrooms: 2,
    bathrooms: 1,
    area: 80,
    image: "/images/depto1.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: generateId(),
    title: "Cabaña en el campo",
    description: "Cabaña acogedora con chimenea y vista al bosque",
    price: 120000,
    type: "cottage",
    operation: "sale",
    province: "Córdoba",
    city: "Villa Carlos Paz",
    bedrooms: 2,
    bathrooms: 1,
    area: 100,
    image: "/images/cabaña1.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export const mockLeads: Lead[] = [
  {
    id: generateId(),
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    phone: "123456789",
    message: "Me interesa la propiedad en La Plata",
    propertyId: mockProperties[0].id,
    status: "new",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: generateId(),
    name: "María García",
    email: "maria.garcia@example.com",
    phone: "987654321",
    message: "Quisiera más información sobre el departamento",
    propertyId: mockProperties[1].id,
    status: "contacted",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];
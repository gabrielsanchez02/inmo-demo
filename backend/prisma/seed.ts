// Script para sembrar la base de datos con datos de ejemplo
import { prisma } from '../src/db/database';
import { Property } from '../src/models/Property';

async function main() {
  console.log('Iniciando sembrado de datos...');
  
  // Datos de ejemplo para propiedades con URLs de Unsplash
  const properties: Property[] = [
    {
      id: 1,
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
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
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
      image: "https://images.unsplash.com/photo-1522708323538-e12e92251e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
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
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  // Eliminar datos existentes
  await prisma.lead.deleteMany({});
  await prisma.property.deleteMany({});
  
  // Insertar datos de ejemplo
  for (const property of properties) {
    await prisma.property.create({
      data: {
        id: property.id,
        title: property.title,
        description: property.description,
        price: property.price,
        type: property.type,
        operation: property.operation,
        province: property.province,
        city: property.city,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        area: property.area,
        image: property.image,
        createdAt: property.createdAt,
        updatedAt: property.updatedAt
      }
    });
  }
  
  console.log('Datos sembrados exitosamente');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
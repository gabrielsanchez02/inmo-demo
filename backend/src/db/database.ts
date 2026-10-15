import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const connectToDatabase = async () => {
  try {
    await prisma.$connect();
    console.log('Conectado a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1);
  }
};

// Función para verificar la conexión a la base de datos
export const verifyDatabaseConnection = async () => {
  try {
    await prisma.$connect();
    console.log('Conexión a la base de datos verificada exitosamente');
    await prisma.$disconnect();
    return true;
  } catch (error) {
    console.error('Error al verificar conexión a la base de datos:', error);
    return false;
  }
};
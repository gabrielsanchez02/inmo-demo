// Configuración de la aplicación
export const config = {
  // URL base de la API backend
  API_BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  
  // Configuración de la aplicación
  APP_NAME: 'InmoDemo',
  APP_VERSION: '1.0.0',
  
  // Configuración de la API
  API_TIMEOUT: 10000, // 10 segundos
  
  // Configuración de rutas
  ROUTES: {
    HOME: '/',
    PROPERTIES: '/properties',
    PROPERTY_DETAIL: '/properties/:id',
    CONTACT: '/contact',
    ADMIN: '/admin'
  }
};

// Tipos de configuración
export interface AppConfig {
  API_BASE_URL: string;
  APP_NAME: string;
  APP_VERSION: string;
  API_TIMEOUT: number;
  ROUTES: {
    HOME: string;
    PROPERTIES: string;
    PROPERTY_DETAIL: string;
    CONTACT: string;
    ADMIN: string;
  };
}
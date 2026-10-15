# Plan de Integración Frontend-Backend

## Objetivo
Conectar el frontend con el backend para crear una aplicación completa con funcionalidades CRUD.

## Estructura de Integración

### 1. Servicios del Frontend
Crear servicios para consumir la API REST del backend:

```typescript
// frontend/src/services/propertyService.ts
export const propertyService = {
  // Obtener todas las propiedades
  getAllProperties: async () => {
    const response = await fetch('/api/properties');
    return response.json();
  },
  
  // Obtener una propiedad por ID
  getPropertyById: async (id: number) => {
    const response = await fetch(`/api/properties/${id}`);
    return response.json();
  },
  
  // Crear una nueva propiedad
  createProperty: async (propertyData: Property) => {
    const response = await fetch('/api/properties', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(propertyData)
    });
    return response.json();
  },
  
  // Actualizar una propiedad
  updateProperty: async (id: number, propertyData: Property) => {
    const response = await fetch(`/api/properties/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(propertyData)
    });
    return response.json();
  },
  
  // Eliminar una propiedad
  deleteProperty: async (id: number) => {
    const response = await fetch(`/api/properties/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  }
};
```

### 2. Componentes que Usarán la API
- **PropertyList**: Mostrar lista de propiedades
- **PropertyDetail**: Mostrar detalles de una propiedad
- **PropertyForm**: Formulario para crear/actualizar propiedades
- **ContactForm**: Enviar leads al backend

### 3. Estado de la Aplicación
Utilizar Zustand o React Context para manejar el estado:

```typescript
// frontend/src/store/propertyStore.ts
import { create } from 'zustand';

interface PropertyState {
  properties: Property[];
  loading: boolean;
  error: string | null;
  fetchProperties: () => Promise<void>;
  addProperty: (property: Property) => Promise<void>;
  updateProperty: (id: number, property: Property) => Promise<void>;
  deleteProperty: (id: number) => Promise<void>;
}
```

### 4. Rutas de Navegación
- `/` - Página de inicio
- `/properties` - Catálogo de propiedades
- `/properties/:id` - Detalle de propiedad
- `/contact` - Formulario de contacto
- `/admin` - Panel de administración (protegido)

### 5. Autenticación
Implementar sistema de autenticación JWT para el panel de administración:

```typescript
// frontend/src/services/authService.ts
export const authService = {
  login: async (email: string, password: string) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  },
  
  logout: () => {
    localStorage.removeItem('token');
  },
  
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  }
};
```

## Próximos Pasos

1. **Implementar llamadas a API en frontend**
2. **Conectar componentes con servicios**
3. **Configurar rutas protegidas**
4. **Implementar manejo de errores**
5. **Crear pruebas de integración**
6. **Optimizar rendimiento**
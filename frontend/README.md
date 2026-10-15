# Frontend InmoDemo

## Estructura del Proyecto

```
frontend/
├── public/
├── src/
│   ├── components/  # Componentes reutilizables
│   ├── pages/         # Páginas de la aplicación
│   ├── assets/        # Recursos estáticos
│   ├── hooks/           # Hooks personalizados
│   ├── services/      # Servicios de API
│   ├── store/         # Estado de la aplicación
│   ├── utils/         # Funciones auxiliares
│   └── App.tsx        # Componente raíz
├── package.json
└── tsconfig.json
```

## Tecnologías Utilizadas

- **Framework:** React con Vite
- **Lenguaje:** TypeScript
- **Estado:** Zustand o React Context API
- **Estilos:** Tailwind CSS
- **Rutas:** React Router DOM
- **Validación:** React Hook Form + Zod
- **Formularios:** React Hook Form
- **Tipografía:** Google Fonts
- **Iconos:** React Icons

## Características Principales

### Componentes Reutilizables
- Header y Footer
- Cards de propiedades
- Formularios de contacto
- Componentes de navegación

### Páginas
- Página de inicio
- Página de detalles de propiedad
- Catálogo de propiedades
- Sección de contacto

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Para construir para producción:

```bash
npm run build
```

## Estructura de Datos

La aplicación se comunica con el backend a través de una API RESTful que expone los siguientes endpoints:

### Propiedades
- `GET /api/properties` - Obtener todas las propiedades
- `GET /api/properties/:id` - Obtener una propiedad por ID
- `POST /api/properties` - Crear una nueva propiedad
- `PUT /api/properties/:id` - Actualizar una propiedad
- `DELETE /api/properties/:id` - Eliminar una propiedad

### Leads
- `POST /api/leads` - Crear un nuevo lead (formulario de contacto)
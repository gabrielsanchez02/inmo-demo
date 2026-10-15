# Backend InmoDemo

## Estructura del Proyecto

```
backend/
├── src/
│   ├── controllers/     # Controladores
│   ├── models/        # Modelos de datos
│   ├── routes/        # Rutas de la API
│   ├── services/      # Lógica de negocio
│   ├── data/          # Datos de ejemplo
│   ├── config/          # Configuración
│   └── index.ts       # Punto de entrada
├── package.json
└── tsconfig.json
```

## API Endpoints

### Propiedades
- `GET /api/properties` - Obtener todas las propiedades
- `GET /api/properties/:id` - Obtener una propiedad por ID
- `POST /api/properties` - Crear una nueva propiedad
- `PUT /api/properties/:id` - Actualizar una propiedad
- `DELETE /api/properties/:id` - Eliminar una propiedad

### Leads
- `GET /api/leads` - Obtener todos los leads
- `GET /api/leads/:id` - Obtener un lead por ID
- `POST /api/leads` - Crear un nuevo lead
- `PUT /api/leads/:id` - Actualizar un lead
- `DELETE /api/leads/:id` - Eliminar un lead

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

## Configuración

El backend utiliza las siguientes variables de entorno:
- `PORT` - Puerto del servidor (por defecto 3000)
- `DATABASE_URL` - URL de conexión a la base de datos
- `JWT_SECRET` - Clave secreta para JWT
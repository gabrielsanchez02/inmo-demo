# Guía de Despliegue

## Despliegue del Frontend en Vercel

### Configuración de Vercel

1. **Conexión del repositorio**:
   - Ingresar a [Vercel](https://vercel.com)
   - Conectar la cuenta de GitHub al proyecto
   - Seleccionar el repositorio `inmo-demo`

2. **Configuración del proyecto**:
   - **Directorio raíz**: `frontend`
   - **Comando de build**: `npm run build`
   - **Directorio de salida**: `dist`

3. **Variables de entorno**:
   - `VITE_API_URL`: URL del backend en producción
   - Ejemplo: `https://your-backend-url.com/api`

### Configuración de reescritura de rutas

El archivo `vercel.json` está configurado con reescrituras para manejar correctamente las rutas de React SPA:

```json
{
  "rewrites": [
    {
      "source": "/:path*",
      "destination": "/index.html"
    }
  ]
}
```

Esto evita errores 404 al recargar páginas en rutas dinámicas.

## Despliegue del Backend en Render/Heroku

### Configuración de Render

1. **Conexión del repositorio**:
   - Crear una nueva aplicación en Render
   - Conectar el repositorio de GitHub

2. **Configuración del backend**:
   - **Directorio raíz**: `backend`
   - **Comando de build**: `npm run build`
   - **Comando de inicio**: `npm start`
   - **Variables de entorno**:
     - `DATABASE_URL`: URL de conexión a la base de datos SQLite
     - `JWT_SECRET`: Clave secreta para JWT
     - `PORT`: Puerto del servidor (por defecto 3000)
     - `CORS_ORIGIN`: Origen permitido para CORS

### Configuración de Heroku

1. **Crear aplicación en Heroku**:
   - Crear nueva aplicación en Heroku
   - Conectar con el repositorio de GitHub

2. **Configuración del backend**:
   - **Buildpacks**: Node.js
   - **Config Vars**:
     - `DATABASE_URL`: URL de conexión a la base de datos
     - `JWT_SECRET`: Clave secreta para JWT
     - `PORT`: Puerto del servidor
     - `CORS_ORIGIN`: Origen permitido para CORS

### Migraciones de Base de Datos

Para ejecutar las migraciones en producción:

```bash
# Opción 1: Usar prisma migrate deploy (recomendado para producción)
npx prisma migrate deploy

# Opción 2: Usar prisma db push (para desarrollo rápido)
npx prisma db push
```

El archivo `prisma/schema.prisma` define los modelos de datos y las migraciones. En producción, se recomienda usar `prisma migrate deploy` para aplicar migraciones de forma segura.

## Configuración del Dominio

### Estrategia de DNS y SSL

1. **Adquirir un dominio**:
   - Comprar un dominio en un registrador como Namecheap o GoDaddy
   - Configurar DNS para apuntar al proveedor de hosting

2. **Configuración de registros DNS**:
   - **Vercel (frontend)**: Crear registro CNAME apuntando a `cname.vercel-dns.com`
   - **Render/Heroku (backend)**: Crear registro A apuntando a la IP del servidor o registro CNAME
   - **SSL**: Vercel proporciona certificados SSL automáticos, para Render/Heroku se puede usar Let's Encrypt

3. **Configurar en Vercel**:
   - Ir a Settings > Domain Management
   - Agregar el dominio personalizado
   - Configurar los registros DNS necesarios
   - Verificar el certificado SSL automáticamente

4. **Configurar en Render/Heroku**:
   - Agregar el dominio en las configuraciones de dominio del backend
   - Configurar redirecciones si es necesario
   - Asegurar que el certificado SSL esté correctamente configurado

5. **Configuración de redirecciones**:
   - Redirigir `http` a `https`
   - Redirigir `www` a `non-www` o viceversa según preferencia

## Pruebas Finales

1. **Verificación de endpoints API**:
   - Probar todas las rutas de la API REST
   - Verificar que las llamadas desde el frontend funcionen correctamente

2. **Pruebas de UI**:
   - Verificar que todas las páginas carguen correctamente
   - Probar navegación entre rutas
   - Verificar formulario de contacto

3. **Pruebas de rendimiento**:
   - Verificar tiempos de carga
   - Probar en diferentes dispositivos y navegadores
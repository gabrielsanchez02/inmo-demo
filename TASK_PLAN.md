# TASK PLAN: MVP Web Inmobiliaria Galicia

## Stack Tecnológico

### Frontend
- **Framework:** React con Vite (para velocidad y desarrollo rápido)
- **Lenguaje:** TypeScript
- **Estado:** Zustand o React Context API
- **Estilos:** Tailwind CSS (utilizando clases utility-first para diseño rápido y consistente)
- **Componentes:** Componentes reutilizables y modulares
- **Rutas:** React Router DOM
- **Validación:** Zod o Yup
- **Formularios:** React Hook Form
- **Tipografía:** Google Fonts (fuente moderna y legible)
- **Iconos:** Lucide React o React Icons

### Backend (MVP)
- **Lenguaje:** Node.js con Express
- **Base de datos:** SQLite (para MVP, fácil de desplegar y gestionar)
- **ORM:** Prisma (para modelado de datos y migraciones)
- **Autenticación:** JWT + Password Hashing (bcrypt)
- **API RESTful** para CRUD de inmuebles y leads
- **Servidor:** Express.js

### Herramientas de Desarrollo
- **Gestor de paquetes:** npm
- **Linting:** ESLint + Prettier
- **Testing:** Jest + React Testing Library (para frontend)
- **Deploy:** Vercel (frontend) y Render/Heroku (backend)

## Estructura de Carpetas

```
inmo-demo/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── db/
│   │   ├── utils/
│   │   └── app.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── hooks/
│     │   ├── services/
│   │   ├── store/
│   │   ├── utils/
│   │   └── App.tsx
│   ├── package.json
│   └── tsconfig.json
├── .gitignore
├── README.md
└── TASK_PLAN.md
```

## Checklist de Tareas

### Fase 1: Configuración Inicial del Proyecto

- [x] Configurar estructura de carpetas del proyecto
- [x] Inicializar repositorio Git
- [x] Configurar frontend con Vite + React + TypeScript + Tailwind
- [x] Configurar backend con Express + Node.js + TypeScript
- [x] Configurar base de datos SQLite con Prisma
- [x] Configurar rutas básicas de API REST
- [x] Configurar linting y formateo (ESLint + Prettier)
- [x] Configurar testing (Jest + React Testing Library)
- [x] Crear README.md con instrucciones de instalación y ejecución

### Fase 2: Desarrollo del Frontend

- [ ] 2.1 Crear estructura de componentes base (Header, Footer, Layout)
- [ ] 2.2 Implementar página de inicio (Landing Page)
- [ ] 2.3 Crear conjunto de datos ficticios mockData.json
- [ ] 2.4 Implementar sección Hero con buscador principal
- [ ] 2.5 Implementar sección de destacados
- [ ] 2.6 Implementar sección "Por qué elegirnos en Galicia"
- [ ] 2.7 Implementar buscador/Catálogo Interactivo
- [ ] 2.8 Implementar sección Asistente IA
- [ ] 2.9 Implementar formulario de contacto
- [ ] 2.10 Implementar página de detalle de inmueble
- [ ] 2.11 Implementar galería de fotos
- [ ] 2.12 Implementar sección de ubicación
- [ ] 2.13 Implementar formulario de contacto en ficha de inmueble
- [ ] 2.14 Implementar diseño responsive

### Fase 3: Desarrollo del Backend

- [ ] 3.1 Crear modelos de datos (Inmueble, Lead)
- [ ] 3.2 Implementar rutas CRUD para inmuebles
- [ ] 3.3 Implementar rutas CRUD para leads
- [ ] 3.4 Implementar autenticación básica para panel admin
- [ ] 3.5 Implementar validación de datos
- [ ] 3.6 Implementar middleware de autenticación
- [ ] 3.7 Configurar rutas protegidas para admin

### Fase 4: Integración y Testing

- [ ] 4.1 Integrar frontend con backend
- [ ] 4.2 Implementar llamadas a API desde frontend
- [ ] 4.3 Pruebas unitarias y de integración
- [ ] 4.4 Pruebas de UI (end-to-end)
- [ ] 4.5 Optimización de rendimiento
- [ ] 4.6 Documentación final

### Fase 5: Deploy y Entrega

- [ ] 5.1 Preparar entorno de producción
- [ ] 5.2 Desplegar frontend en Vercel
- [ ] 5.3 Desplegar backend en Render/Heroku
- [ ] 5.4 Configurar dominio
- [ ] 5.5 Realizar pruebas finales
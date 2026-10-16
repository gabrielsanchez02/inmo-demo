# inmo-demo

Este es el repositorio para el MVP de la web inmobiliaria en Galicia.

## Estructura del Proyecto

- `frontend/`: Código del frontend (React + TypeScript)
- `backend/`: Código del backend (Node.js + Express + TypeScript)
- `docs/`: Documentación del proyecto

## Instrucciones de Desarrollo

1. Para iniciar el frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

2. Para iniciar el backend:
   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. Para ejecutar pruebas E2E con Playwright:
   ```bash
   # En una terminal separada, iniciar el frontend
   cd frontend
   npm run dev
   
   # En otra terminal, ejecutar las pruebas E2E
   cd ..
   npx playwright test
   ```

## Plan de Desarrollo

Consultar el archivo [docs/TASK_PLAN.md](docs/TASK_PLAN.md) para ver el plan detallado de implementación.

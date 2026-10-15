// Punto de entrada del backend
import express, { Application } from 'express';
import { config } from './config';
import { propertyRoutes } from './routes/propertyRoutes';
import { leadRoutes } from './routes/leadRoutes';
import { connectToDatabase } from './db/database';
import { cleanupCache } from './utils/cache';

const app: Application = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/properties', propertyRoutes);
app.use('/api/leads', leadRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.json({ 
    message: 'Bienvenido al backend de InmoDemo',
    version: '1.0.0'
  });
});

// Ruta de salud
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'InmoDemo Backend'
  });
});

// Conectar a la base de datos
connectToDatabase().catch(error => {
  console.error('Error al conectar a la base de datos:', error);
  process.exit(1);
});

// Iniciar servidor
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  
  // Configurar limpieza automática de cache cada 5 minutos
  setInterval(() => {
    cleanupCache();
    console.log('Cache limpiado automáticamente');
  }, 5 * 60 * 1000); // 5 minutos
});

export default app;
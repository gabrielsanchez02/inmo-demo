import express, { Application } from 'express';
import { connect } from './db/database';
import { propertyRoutes } from './routes/propertyRoutes';
import { leadRoutes } from './routes/leadRoutes';

const app: Application = express();
const PORT: number = 3000;

// Middleware
app.use(express.json());

// Conectar a la base de datos
connect();

// Rutas
app.use('/api/properties', propertyRoutes);
app.use('/api/leads', leadRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido al backend de InmoDemo' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;
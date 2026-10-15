import { Router } from 'express';
import { getAllProperties, getPropertyById, createProperty, updateProperty, deleteProperty } from '../controllers/propertyController';
import { cacheMiddleware } from '../middleware/cacheMiddleware';
import { getCacheStats } from '../utils/cache';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// Obtener todas las propiedades con cache
router.get('/', cacheMiddleware(5), getAllProperties);

// Obtener estadísticas del cache
router.get('/cache/stats', (req, res) => {
  try {
    const stats = getCacheStats();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener estadísticas del cache' });
  }
});

// Obtener una propiedad por ID
router.get('/:id', getPropertyById);

// Crear una nueva propiedad (requiere autenticación)
router.post('/', authMiddleware, createProperty);

// Actualizar una propiedad (requiere autenticación)
router.put('/:id', authMiddleware, updateProperty);

// Eliminar una propiedad (requiere autenticación)
router.delete('/:id', authMiddleware, deleteProperty);

export { router as propertyRoutes };
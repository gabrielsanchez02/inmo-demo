import { Router } from 'express';
import { getAllLeads, getLeadById, createLead, updateLead, deleteLead } from '../controllers/leadController';
import { cacheMiddleware } from '../middleware/cacheMiddleware';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// Obtener todos los leads con cache
router.get('/', cacheMiddleware(5), getAllLeads);

// Obtener un lead por ID
router.get('/:id', getLeadById);

// Crear un nuevo lead (requiere autenticación)
router.post('/', authMiddleware, createLead);

// Actualizar un lead (requiere autenticación)
router.put('/:id', authMiddleware, updateLead);

// Eliminar un lead (requiere autenticación)
router.delete('/:id', authMiddleware, deleteLead);

export { router as leadRoutes };
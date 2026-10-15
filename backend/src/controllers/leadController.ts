import { Request, Response } from 'express';
import { prisma } from '../db/database';
import { validateLead } from '../utils/validation';
import { cacheManager } from '../utils/cache';
import { sanitizeInput, generateId } from '../utils/helpers';

export const getAllLeads = async (req: Request, res: Response) => {
  try {
    // Limpiar cache antes de obtener datos
    cacheManager.cleanup();
    
    const leads = await prisma.lead.findMany();
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener leads' });
  }
};

export const getLeadById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const lead = await prisma.lead.findUnique({
      where: { id: parseInt(id) }
    });
    if (lead) {
      res.json(lead);
    } else {
      res.status(404).json({ error: 'Lead no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener lead' });
  }
};

export const createLead = async (req: Request, res: Response) => {
  try {
    const validation = validateLead(req.body);
    if (!validation.valid) {
      return res.status(400).json({ error: validation.error });
    }
    
    // Limpiar datos de entrada
    const cleanData = {
      name: sanitizeInput(req.body.name),
      email: sanitizeInput(req.body.email),
      phone: sanitizeInput(req.body.phone),
      message: sanitizeInput(req.body.message),
      propertyId: req.body.propertyId
    };
    
    const lead = await prisma.lead.create({
      data: {
        ...cleanData,
        id: generateId()
      }
    });
    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear lead' });
  }
};

export const updateLead = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, phone, message, propertyId, status } = req.body;
    
    // Limpiar datos de entrada
    const cleanData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      message: sanitizeInput(message),
      propertyId,
      status
    };
    
    const lead = await prisma.lead.update({
      where: { id: parseInt(id) },
      data: cleanData
    });
    res.json(lead);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar lead' });
  }
};

export const deleteLead = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.lead.delete({
      where: { id: parseInt(id) }
    });
    res.json({ message: 'Lead eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar lead' });
  }
};
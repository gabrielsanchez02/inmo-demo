import { Request, Response } from 'express';
import { PropertyService } from '../services/propertyService';
import { validateProperty, validateImageUrl } from '../utils/validation';
import { sanitizeInput } from '../utils/helpers';

export const getAllProperties = async (req: Request, res: Response) => {
  try {
    const properties = await PropertyService.getAllProperties();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPropertyById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const property = await PropertyService.getPropertyById(id);
    if (property) {
      res.json(property);
    } else {
      res.status(404).json({ error: 'Propiedad no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProperty = async (req: Request, res: Response) => {
  try {
    const validation = validateProperty(req.body);
    if (!validation.valid) {
      return res.status(400).json({ error: validation.error });
    }
    
    // Validar URL de imagen si se proporciona
    if (req.body.image && !validateImageUrl(req.body.image)) {
      return res.status(400).json({ error: 'URL de imagen inválida' });
    }
    
    // Limpiar datos de entrada
    const cleanData = {
      title: sanitizeInput(req.body.title),
      description: sanitizeInput(req.body.description),
      price: req.body.price,
      type: req.body.type,
      operation: req.body.operation,
      province: sanitizeInput(req.body.province),
      city: sanitizeInput(req.body.city),
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms,
      area: req.body.area,
      image: req.body.image
    };
    
    const property = await PropertyService.createProperty(cleanData);
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProperty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, price, type, operation, province, city, bedrooms, bathrooms, area, image } = req.body;
    
    // Validar URL de imagen si se proporciona
    if (image && !validateImageUrl(image)) {
      return res.status(400).json({ error: 'URL de imagen inválida' });
    }
    
    // Limpiar datos de entrada
    const cleanData = {
      title: sanitizeInput(title),
      description: sanitizeInput(description),
      price,
      type,
      operation,
      province: sanitizeInput(province),
      city: sanitizeInput(city),
      bedrooms,
      bathrooms,
      area,
      image
    };
    
    const property = await PropertyService.updateProperty(id, cleanData);
    if (property) {
      res.json(property);
    } else {
      res.status(404).json({ error: 'Propiedad no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProperty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await PropertyService.deleteProperty(id);
    if (result) {
      res.json({ message: 'Propiedad eliminada' });
    } else {
      res.status(404).json({ error: 'Propiedad no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
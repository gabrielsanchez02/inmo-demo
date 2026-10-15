// Middleware para manejo de cache
import { Request, Response, NextFunction } from 'express';
import { cacheManager } from '../utils/cache';

export const cacheMiddleware = (duration: number = 5) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const key = `cache:${req.originalUrl || req.url}`;
    
    // Intentar obtener del cache
    const cachedResponse = cacheManager.get(key);
    if (cachedResponse) {
      console.log(`Cache hit for ${key}`);
      return res.status(200).json(cachedResponse);
    }
    
    console.log(`Cache miss for ${key}`);
    
    // Si no está en cache, guardar la respuesta original
    const originalJson = res.json;
    res.json = function(data) {
      // Solo guardar en cache si no está lleno
      if (!cacheManager.isFull()) {
        cacheManager.set(key, data);
      }
      return originalJson.call(this, data);
    };
    
    next();
  };
};
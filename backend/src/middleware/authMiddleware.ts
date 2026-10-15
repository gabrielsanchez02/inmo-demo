import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config';

// Tipos para el usuario autenticado
interface UserPayload {
  id: number;
  email: string;
}

// Middleware de autenticación
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    // Obtener el token del header Authorization
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Acceso no autorizado' });
    }
    
    const token = authHeader.substring(7); // Eliminar "Bearer "
    
    // Verificar el token
    const decoded = jwt.verify(token, config.jwt.secret) as UserPayload;
    
    // Agregar el usuario al request para usarlo en las rutas
    (req as any).user = decoded;
    
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};

// Middleware para roles específicos (opcional)
export const roleMiddleware = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = (req as any).user as UserPayload;
      
      // Aquí se podría verificar el rol del usuario
      // Por ahora solo verificamos que esté autenticado
      
      next();
    } catch (error) {
      return res.status(403).json({ error: 'Acceso denegado' });
    }
  };
};

// Middleware para verificar si el usuario tiene permisos para ciertas operaciones
export const permissionMiddleware = (permission: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = (req as any).user as UserPayload;
      
      // Aquí se podría verificar los permisos del usuario
      // Por ahora solo verificamos que esté autenticado
      
      next();
    } catch (error) {
      return res.status(403).json({ error: 'Acceso denegado' });
    }
  };
};
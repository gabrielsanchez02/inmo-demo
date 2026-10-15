// Funciones auxiliares útiles
import bcrypt from 'bcrypt';

// Función para encriptar contraseñas
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

// Función para comparar contraseñas
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

// Función para generar un token JWT
export const generateToken = (payload: any): string => {
  // Esta función sería implementada con jwt.sign()
  // Por ahora solo devuelve un string de ejemplo
  return 'token-ejemplo';
};

// Función para validar datos de entrada
export const validateInput = (data: any, rules: any): { valid: boolean; errors?: string[] } => {
  const errors: string[] = [];
  
  for (const [field, rules] of Object.entries(rules)) {
    const value = data[field];
    
    if (rules.required && (!value || value.toString().trim() === '')) {
      errors.push(`${field} es requerido`);
    }
    
    if (rules.minLength && value && value.toString().length < rules.minLength) {
      errors.push(`${field} debe tener al menos ${rules.minLength} caracteres`);
    }
    
    if (rules.maxLength && value && value.toString().length > rules.maxLength) {
      errors.push(`${field} debe tener como máximo ${rules.maxLength} caracteres`);
    }
    
    if (rules.email && value && !isValidEmail(value)) {
      errors.push(`${field} no es un email válido`);
    }
  }
  
  return {
    valid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined
  };
};

// Validar email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Formatear fechas
export const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('es-ES');
};

// Formatear moneda
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount);
};

// Generar ID único
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

// Validar formato de URL
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

// Limpiar datos de entrada
export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
};
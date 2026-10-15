// Gestión de cache para optimización de rendimiento
import { Property } from '../models/Property';
import { config } from '../config';

// Simulación de sistema de cache
class CacheManager {
  private cache: Map<string, any> = new Map();
  private ttl: number = config.cache.ttl;

  // Obtener valor del cache
  get(key: string): any {
    const item = this.cache.get(key);
    if (!item) return null;

    // Verificar si el cache ha expirado
    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.value;
  }

  // Establecer valor en cache
  set(key: string, value: any): void {
    this.cache.set(key, {
      value,
      timestamp: Date.now()
    });
  }

  // Limpiar cache
  clear(): void {
    this.cache.clear();
  }

  // Eliminar entrada específica
  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  // Limpiar cache automáticamente (función de limpieza)
  cleanup(): void {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > this.ttl) {
        this.cache.delete(key);
      }
    }
  }
  
  // Obtener tamaño actual del cache
  size(): number {
    return this.cache.size;
  }
  
  // Verificar si el cache está lleno
  isFull(): boolean {
    return this.cache.size >= config.cache.maxSize;
  }
}

// Exportar instancia del cache manager
export const cacheManager = new CacheManager();

// Función para limpiar cache automáticamente
export const cleanupCache = () => {
  cacheManager.cleanup();
  console.log('Cache limpiado automáticamente');
};

// Función para limpiar cache manualmente
export const clearCache = () => {
  cacheManager.clear();
  console.log('Cache limpiado manualmente');
};

// Función para obtener estadísticas del cache
export const getCacheStats = () => {
  return {
    size: cacheManager.size(),
    ttl: config.cache.ttl,
    maxSize: config.cache.maxSize
  };
};
// Configuración del backend
export const config = {
  port: process.env.PORT || 3000,
  database: {
    type: 'sqlite',
    url: process.env.DATABASE_URL || 'sqlite:./database.sqlite'
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'inmo-demo-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '24h'
  },
  cache: {
    ttl: process.env.CACHE_TTL || 5 * 60 * 1000, // 5 minutos por defecto
    maxSize: process.env.CACHE_MAX_SIZE || 1000
  }
};
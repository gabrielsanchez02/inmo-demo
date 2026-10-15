// Función para probar la conexión con el backend
export const testBackendConnection = async (): Promise<boolean> => {
  try {
    const response = await fetch('http://localhost:3000/api/properties', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      console.log('Conexión exitosa con el backend');
      return true;
    } else {
      console.log('Conexión fallida con el backend:', response.status, response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error al conectar con el backend:', error);
    return false;
  }
};

// Función para obtener las estadísticas del backend
export const getBackendStats = async (): Promise<any> => {
  try {
    const response = await fetch('http://localhost:3000/api/properties/cache/stats', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      const stats = await response.json();
      console.log('Estadísticas del backend:', stats);
      return stats;
    } else {
      console.log('Error al obtener estadísticas del backend:', response.status, response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error al obtener estadísticas del backend:', error);
    return null;
  }
};
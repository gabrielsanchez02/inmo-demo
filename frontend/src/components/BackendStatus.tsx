import React, { useState, useEffect } from 'react';
import { testBackendConnection, getBackendStats } from '../utils/testBackendConnection';

interface BackendStatusProps {
  className?: string;
}

const BackendStatus: React.FC<BackendStatusProps> = ({ className = '' }) => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const connected = await testBackendConnection();
        setIsConnected(connected);
        
        if (connected) {
          const backendStats = await getBackendStats();
          setStats(backendStats);
        }
      } catch (error) {
        console.error('Error al verificar conexión:', error);
        setIsConnected(false);
      } finally {
        setLoading(false);
      }
    };

    checkConnection();
  }, []);

  if (loading) {
    return <div className={`text-gray-500 ${className}`}>Verificando conexión...</div>;
  }

  return (
    <div className={`text-sm ${className}`}>
      <div className={`font-medium ${isConnected ? 'text-green-600' : 'text-red-600'}`}>
        {isConnected ? 'Backend conectado' : 'Backend desconectado'}
      </div>
      {stats && (
        <div className="text-gray-500 mt-1">
          Cache: {stats.hits} hits, {stats.misses} misses
        </div>
      )}
    </div>
  );
};

export default BackendStatus;
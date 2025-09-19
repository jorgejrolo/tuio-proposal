import { useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Componente que protege las páginas de la propuesta caducada
 * redirigiendo automáticamente a la página de aviso de caducidad
 */
export default function ProposalProtection({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Solo permitir acceso a la página de propuesta caducada
    if (router.pathname !== '/expired') {
      router.push('/expired');
    }
  }, [router]);

  // Si estamos en la página de caducidad, mostrar el contenido
  if (router.pathname === '/expired') {
    return children;
  }

  // Para cualquier otra página, mostrar mensaje de carga mientras redirige
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f5f7fa'
    }}>
      <div style={{
        textAlign: 'center',
        color: '#666'
      }}>
        <div style={{
          fontSize: '40px',
          marginBottom: '20px'
        }}>
          ⏰
        </div>
        <p style={{ fontSize: '18px', margin: 0 }}>
          Propuesta caducada. Redirigiendo...
        </p>
      </div>
    </div>
  );
}
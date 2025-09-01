import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * Layout component used on all pages. It renders a sticky top
 * navigation bar and wraps the page content. The navigation bar
 * highlights the active route based on the current pathname.
 */
export default function Layout({ children }) {
  // Eliminamos la barra superior y el logo para ofrecer una experiencia limpia.
  // Para la portada (index) no aplicamos la clase wrap de ancho limitado, de modo
  // que el hero pueda ocupar toda la pantalla. Detectamos la ruta actual con
  // useRouter(). Si el pathname es '/', dejamos que el main se estire a
  // pantalla completa.
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <main className={isHome ? '' : 'wrap'}>
      {children}
    </main>
  );
}
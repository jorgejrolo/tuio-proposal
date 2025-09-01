import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * Layout component used on all pages. It renders a sticky top
 * navigation bar and wraps the page content. The navigation bar
 * highlights the active route based on the current pathname.
 */
export default function Layout({ children }) {
  // Eliminamos la barra superior y el logo para ofrecer una experiencia limpia
  return (
    <main className="wrap">
      {children}
    </main>
  );
}
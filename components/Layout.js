import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * Layout component used on all pages. It renders a sticky top
 * navigation bar and wraps the page content. The navigation bar
 * highlights the active route based on the current pathname.
 */
export default function Layout({ children }) {
  const router = useRouter();

  // Navigation is hidden in the light version; navItems kept for potential future use
  const navItems = [];

  return (
    <>
      <div className="topbar">
        <div className="inner wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="dot"></span>
            <span>Tuio · Propuesta</span>
            {/* Logo de Jorge J. Rolo */}
            <img src="/assets/jorgejrolo.png" alt="Logo Jorge J. Rolo" style={{ height: '28px', marginLeft: '8px' }} />
          </div>
        </div>
      </div>
      <main className="wrap">
        {children}
      </main>
    </>
  );
}
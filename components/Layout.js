import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * Layout component used on all pages. It renders a sticky top
 * navigation bar and wraps the page content. The navigation bar
 * highlights the active route based on the current pathname.
 */
export default function Layout({ children }) {
  const router = useRouter();

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/stack', label: 'Stack' },
    { href: '/audits', label: 'Auditorías' },
    { href: '/migration', label: 'Migración' },
    { href: '/travel', label: 'Travel' },
    { href: '/ongoing', label: 'Ongoing' },
    { href: '/roadmap', label: 'Roadmap' },
    { href: '/kpis', label: 'Métricas' },
    { href: '/investment', label: 'Inversión' },
    { href: '/success', label: 'Casos' },
    { href: '/next', label: 'Próximos' },
  ];

  return (
    <>
      <div className="topbar">
        <div className="inner wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="brand">
            <span className="dot"></span>
            <span>Tuio · Propuesta</span>
          </div>
          <nav className="nav">
            {navItems.map((item) => {
              const isActive = router.pathname === item.href;
              return (
                <Link key={item.href} href={item.href} legacyBehavior>
                  <a style={{
                    background: isActive ? 'rgba(10,132,255,0.2)' : 'rgba(255,255,255,0.04)',
                    color: isActive ? '#fff' : 'var(--muted)',
                    padding: '8px 12px',
                    borderRadius: '999px',
                    fontWeight: 600,
                    transition: 'background 0.2s ease, color 0.2s ease',
                  }}>
                    {item.label}
                  </a>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      <main className="wrap">
        {children}
      </main>
    </>
  );
}
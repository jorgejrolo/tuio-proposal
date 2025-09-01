import Link from 'next/link';

/**
 * NavigationButtons component renders previous and next buttons at
 * the bottom of a page. It accepts optional prev and next props
 * containing route paths. Buttons are hidden if the prop is not
 * provided. Uses the global button styling defined in globals.css.
 */
export default function NavigationButtons({ prev, next }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
      {prev ? (
        <Link href={prev} legacyBehavior>
          <a className="btn ghost">Anterior</a>
        </Link>
      ) : <span />}
      {next ? (
        <Link href={next} legacyBehavior>
          <a className="btn primary">Siguiente</a>
        </Link>
      ) : <span />}
    </div>
  );
}
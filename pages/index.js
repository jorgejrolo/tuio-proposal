import Image from 'next/image';
import Link from 'next/link';

/**
 * Landing page for the proposal. Introduces the project
 * objectives and invites the reader to explore each section.
 */
export default function Home() {
  return (
    <>
      <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        {/* Imagen de fondo */}
        <Image
          src="/assets/homeglobal2.gif"
          alt="Animación propuesta Tuio"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        {/* Capa de oscurecimiento para mejorar legibilidad */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255,255,255,0.6)' }}></div>
        {/* Contenido overlay */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '800px',
            margin: '0 auto',
            padding: '80px 20px',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '16px' }}>
            Propuesta TUIO × Jorge J. Rolo
          </h1>
          <p style={{ fontSize: '20px', color: '#0f2937', marginBottom: '32px', lineHeight: 1.4 }}>
            Propuesta de colaboración elaborada para Tuio: auditoría tecnológica, auditoría SEO & IA, migración SEO,
            SEO Setup Travel y mantenimiento SEO ongoing.
          </p>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <Link href="/overview" legacyBehavior>
              <a className="btn primary">Iniciar propuesta</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
import Image from 'next/image';
import Link from 'next/link';

/**
 * Landing page for the proposal. Introduces the project
 * objectives and invites the reader to explore each section.
 */
export default function Home() {
  return (
    <>
      <section
        style={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          // No usamos margen negativo; el layout sin envoltorio permite ocupar toda la
          // pantalla. De este modo el GIF abarca de borde a borde.
          overflow: 'hidden',
        }}
      >
        {/* Imagen de fondo */}
        <Image
          src="/assets/homeglobal2.gif"
          alt="Animación propuesta Tuio"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        {/* Capa de oscurecimiento para mejorar legibilidad */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255,255,255,0.55)',
          }}
        ></div>
        {/* Contenido overlay */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '800px',
            margin: '0 auto',
            paddingTop: '30vh',
            paddingLeft: '20px',
            paddingRight: '20px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '52px',
              fontWeight: 800,
              marginBottom: '16px',
              opacity: 0,
              animation: 'fadeUp 0.8s ease forwards',
            }}
          >
            Propuesta TUIO × Jorge J. Rolo
          </h1>
          <p
            style={{
              fontSize: '22px',
              color: '#0f2937',
              marginBottom: '40px',
              lineHeight: 1.4,
              opacity: 0,
              animation: 'fadeUp 0.8s ease forwards',
              animationDelay: '0.2s',
            }}
          >
            Propuesta de colaboración elaborada para Tuio: auditoría tecnológica, auditoría SEO & IA, migración SEO,
            SEO Setup Travel y mantenimiento SEO ongoing.
          </p>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <Link href="/overview" legacyBehavior>
              <a className="btn primary">Iniciar propuesta</a>
            </Link>
          </div>
        </div>
        {/* Indicador de scroll */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            fontSize: '24px',
            color: 'var(--accent-dark)',
            animation: 'bounceY 2s infinite',
          }}
        >
          ↓
        </div>
      </section>
    </>
  );
}
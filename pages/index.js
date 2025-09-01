import Image from 'next/image';
import Link from 'next/link';

/**
 * Landing page for the proposal. Introduces the project
 * objectives and invites the reader to explore each section.
 */
export default function Home() {
  return (
    <>
      <section className="hero">
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <Image
            src="/assets/homeglobal2.gif"
            alt="Animación propuesta Tuio"
            width={700}
            height={350}
            style={{ borderRadius: '18px', width: '100%', height: 'auto' }}
            priority
          />
        </div>
        <h1>Propuesta TUIO x Jorge&nbsp;J.&nbsp;Rolo</h1>
        <p>
          Evoluciona tu presencia digital con una base tecnológica sólida y una
          estrategia SEO preparada para el futuro. Descubre cómo podemos crecer
          juntos.
        </p>
        <div className="hero-cta">
          <Link href="/overview" legacyBehavior>
            <a className="btn primary">Iniciar recorrido</a>
          </Link>
        </div>
      </section>
    </>
  );
}
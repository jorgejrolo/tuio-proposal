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
        <h1>Propuesta TUIO x Jorge&nbsp;J.&nbsp;Rolo</h1>
        <p>
          Propuesta de colaboración elaborada para Tuio para auditar y definir su stack tecnológico,
          optimizar su SEO y su posicionamiento en motores de búsqueda basados en IA, planificar la migración
          a Lovable, lanzar el vertical Travel y, opcionalmente, acompañar con un mantenimiento SEO
          continuo.
        </p>
        <div className="tags">
          <span className="tag">Auditoría de stack</span>
          <span className="tag">SEO &amp; IA</span>
          <span className="tag">Migración</span>
          <span className="tag">Vertical Travel</span>
          <span className="tag">Ongoing</span>
        </div>
        <div className="hero-cta">
          <Link href="/stack" legacyBehavior>
            <a className="btn primary">Explorar la propuesta</a>
          </Link>
        </div>
      </section>
      <section className="grid" style={{ marginTop: '40px' }}>
        <div className="col-6">
          <h2>Contexto y reto</h2>
          <p>
            Tuio ha planteado la necesidad de evolucionar su presencia digital para
            sostener su crecimiento en el mercado de los seguros, garantizando que
            su arquitectura tecnológica, su SEO y su expansión hacia nuevos
            verticales como el de viajes estén perfectamente alineados.
          </p>
          <p>
            Como consultor freelance especializado en SEO y migraciones, aportaré
            la visión estratégica y la ejecución para que el proyecto se desarrolle
            con garantías, aprovechando mis años de experiencia con grandes compañías
            y metodologías centradas en el usuario y en los motores de búsqueda.
          </p>
        </div>
        <div className="col-6">
          <Image
            src="/assets/homeglobal2.gif"
            alt="Tuio propuesta hero animation"
            width={700}
            height={350}
            style={{ borderRadius: '18px', width: '100%', height: 'auto' }}
            priority
          />
        </div>
      </section>
    </>
  );
}
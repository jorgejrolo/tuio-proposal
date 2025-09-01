/**
 * Page detailing how we will launch the new Travel vertical. The
 * goal is to crear un ecosistema de contenidos que posicione a Tuio
 * como referente en seguros de viaje, tanto en buscadores como en
 * motores de IA.
 */
export default function Travel() {
  return (
    <section>
      <h1>4) Lanzamiento de nuevo vertical «Travel»</h1>
      <p>
        Crear un vertical específico de seguros de viaje implica entender las
        necesidades del viajero, diseñar una arquitectura de contenidos ad hoc y
        combinar marketing de contenidos con SEO programático. Esta fase
        describe cómo lo haremos.
      </p>
      <div className="card" style={{ marginTop: '20px' }}>
        <h3>Investigación y planificación</h3>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Definición de buyer personas y análisis del ciclo de compra de seguros de viaje.</li>
          <li>Keyword research exhaustivo segmentado por tipos de viaje (turismo, estudios, trabajo, aventura) y destinos.</li>
          <li>Benchmarking con competidores y análisis de tendencias (estacionalidad, SERP features, preguntas frecuentes).</li>
        </ul>
        <h3 style={{ marginTop: '16px' }}>Arquitectura y producción</h3>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Estructura de URLs jerárquica: página madre de Travel, páginas hijas por destino/tipo y artículos informativos.</li>
          <li>Diseño de plantillas en Lovable optimizadas para SEO y conversión (comparadores, fichas, FAQs).</li>
          <li>Creación de contenidos de alto valor: guías, checklists, calculators y artículos evergreen.</li>
          <li>Integración de schema markup (Organization, Product, FAQ) y optimización para featured snippets.</li>
        </ul>
        <h3 style={{ marginTop: '16px' }}>Lanzamiento y difusión</h3>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Plan de publicación y promoción en canales propios y externos (blog, redes, newsletters, foros viajeros).</li>
          <li>Construcción de enlaces temáticos y colaboraciones con portales de viajes y bloggers.</li>
          <li>Optimización continua en motores generativos: indexación en ChatGPT y Perplexity mediante fuentes verificadas y datasets abiertos.</li>
        </ul>
        <p style={{ marginTop: '18px', color: '#94a3b8' }}>
          <strong>Entregable:</strong> documento de estrategia para el vertical Travel, arquitectura
          propuesta, calendario editorial inicial y kit de plantillas Lovable listas
          para su implementación.
        </p>
      </div>
    </section>
  );
}
/**
 * Page describing the dual audits: traditional SEO and SEO para IA (GEO).
 * It breaks down the tasks to ser introspectivo so the client
 * understands exactly qué se revisará y qué entregables
 * recibirán.
 */
import NavigationButtons from '../components/NavigationButtons';

export default function Audits() {
  // Categorías de auditoría con emojis e ideas clave
  const categories = [
    {
      emoji: '🧪',
      title: 'Análisis técnico',
      points: ['Crawl y log analysis', 'Problemas de indexación y redirecciones'],
    },
    {
      emoji: '📚',
      title: 'Arquitectura & enlaces',
      points: ['Jerarquía de contenidos', 'Enlazado interno y páginas huérfanas'],
    },
    {
      emoji: '⚡',
      title: 'Rendimiento & CWV',
      points: ['Medición de LCP, FID y CLS', 'Optimización de imágenes y scripts'],
    },
    {
      emoji: '✍️',
      title: 'On‑page & EEAT',
      points: ['Optimización de títulos, metas y encabezados', 'Actualización de contenidos y EEAT'],
    },
    {
      emoji: '🔗',
      title: 'Autoridad & enlaces',
      points: ['Auditoría de backlinks y menciones', 'Oportunidades de PR digital'],
    },
    {
      emoji: '🔍',
      title: 'Keyword research & SERP',
      points: ['Investigación de términos y clusters', 'Análisis de SERP features y competidores'],
    },
    {
      emoji: '🤖',
      title: 'SEO IA & GEO',
      points: ['Preparación para motores generativos', 'Citas, datos estructurados y datasets abiertos'],
    },
    {
      emoji: '📏',
      title: 'KPIs & benchmarks',
      points: ['Definición de métricas de éxito', 'Establecimiento de baseline comparativo'],
    },
  ];
  return (
    <section className="reveal">
      <h1>2) Auditoría SEO y auditoría SEO para IA</h1>
      <p>
        Aunque Tuio cuenta ya con presencia orgánica, la realidad es que muchos problemas de SEO permanecen ocultos hasta
        que se analizan a fondo: enlaces rotos, contenidos huérfanos, estructuras duplicadas o un rastreo ineficiente por
        parte de Google. Además, los modelos generativos (IA) están empezando a condicionar la visibilidad de las marcas
        en nuevos entornos como Perplexity o SGE de Google.
      </p>
      <p>
        Por ello realizamos una auditoría dual: revisamos el SEO tradicional y preparamos la web para un futuro dominado
        por la búsqueda generativa. Detectaremos barreras técnicas, oportunidades de contenido y acciones concretas para
        que Tuio destaque frente a la competencia.
      </p>
      <p style={{ marginTop: '20px' }}>Despliega cada bloque para conocer las tareas que abordaremos:</p>
      <div style={{ marginTop: '20px' }}>
        {categories.map((cat, idx) => (
          <details key={idx} className="reveal" style={{ marginBottom: '12px' }}>
            <summary
              style={{
                cursor: 'pointer',
                padding: '12px 16px',
                borderRadius: '12px',
                background: 'var(--panel)',
                border: '1px solid #e5e7eb',
                boxShadow: 'var(--shadow)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontWeight: 600,
              }}
            >
              <span style={{ fontSize: '26px' }}>{cat.emoji}</span>
              <span>{cat.title}</span>
            </summary>
            <div
              style={{
                padding: '12px 16px',
                background: '#f7fafa',
                borderRadius: '0 0 12px 12px',
                border: '1px solid #e5e7eb',
                borderTop: 'none',
                fontSize: '14px',
              }}
            >
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                {cat.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
      <p style={{ marginTop: '22px', color: '#94a3b8' }}>
        <strong>Entregable:</strong> documento con hallazgos y plan de acción priorizado, archivo de keywords segmentadas,
        checklist para implementar mejoras y dashboard de seguimiento en Looker/GA4 &amp; Search Console.
      </p>
      <NavigationButtons prev="/stack" next="/migration" />
    </section>
  );
}
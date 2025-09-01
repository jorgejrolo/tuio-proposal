/**
 * Page explaining the migration process to Lovable. It follows
 * an industry-standard checklist adapted from the consultant's own
 * toolkit and details each fase with claridad.
 */
import NavigationButtons from '../components/NavigationButtons';

export default function Migration() {
  // Fases resumidas con emojis
  const phases = [
    {
      emoji: '🔍',
      title: 'Preparación e inventario',
      points: [
        'Inventario de URLs y métricas (tráfico, rankings, enlaces).',
        'Exportación de datos de Search Console y GA4.',
        'Definición de la arquitectura y plan de redirecciones.',
        'Configuración de entornos de staging y backups.',
      ],
    },
    {
      emoji: '🛠️',
      title: 'Construcción & configuración',
      points: [
        'Desarrollo de plantillas Lovable optimizadas para SEO.',
        'Integración con CRM/MGA y analítica (GA4, GSC, BQ).',
        'Importación de contenido y configuración de slugs.',
        'Implementación de canonical, hreflang y redirecciones.',
      ],
    },
    {
      emoji: '🚀',
      title: 'QA & lanzamiento',
      points: [
        'Validación exhaustiva de URLs, enlaces y meta robots.',
        'Pruebas de Core Web Vitals y validación de schema.',
        'Verificación de redirecciones y corrección de errores.',
        'Go live con monitorización en tiempo real.',
      ],
    },
    {
      emoji: '📈',
      title: 'Seguimiento post‑migración',
      points: [
        'Monitorización diaria de tráfico, rankings y logs.',
        'Corrección de errores y ajustes de robots/sitemap.',
        'Análisis de conversión y rendimiento continuo.',
        'Informe comparativo y formación al equipo de Tuio.',
      ],
    },
  ];
  return (
    <section>
      <h1>3) Plan de migración SEO</h1>
      <p>
        Migrar una web sin un control estricto es una de las causas más comunes de caídas drásticas de tráfico y
        pérdidas de negocio. Redirecciones mal planteadas, contenidos que desaparecen, etiquetas equivocadas o fallos
        de rendimiento pueden hacer que Google desindexe páginas clave y que los usuarios no encuentren lo que buscan.
      </p>
      <p>
        Para Tuio diseñamos un plan de migración al detalle. Basándonos en una checklist de más de cuarenta puntos,
        cubrimos todas las etapas para que la transición sea un salto adelante y no un riesgo. Desde el inventario
        inicial hasta el seguimiento post‑lanzamiento, todo está documentado y supervisado.
      </p>
      <div className="grid" style={{ marginTop: '30px' }}>
        {phases.map((phase, index) => (
          <div key={index} className="col-6">
            <div className="card" style={{ height: '100%' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>{phase.emoji}</div>
              <h3 style={{ marginTop: 0 }}>{phase.title}</h3>
              <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '14px' }}>
                {phase.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '22px', color: '#94a3b8' }}>
        <strong>Entregable:</strong> checklist completa de migración con responsables y fechas, documento de mapeado de
        redirecciones, acceso a entorno de staging y reporte de QA, así como el informe post‑migración con
        recomendaciones.
      </p>
      <NavigationButtons prev="/audits" next="/travel" />
    </section>
  );
}
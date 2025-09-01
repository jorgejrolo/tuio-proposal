/**
 * Page explaining the migration process to Lovable. It follows
 * an industry-standard checklist adapted from the consultant's own
 * toolkit and details each fase with claridad.
 */
export default function Migration() {
  return (
    <section>
      <h1>3) Plan de migración a Lovable</h1>
      <p>
        Una migración correctamente planificada es clave para preservar la autoridad,
        evitar pérdidas de tráfico y sentar las bases de un crecimiento futuro.
        Nuestro proceso, basado en una checklist propia de migraciones SEO,
        cubre cada detalle antes, durante y después del lanzamiento.
      </p>
      <div className="card" style={{ marginTop: '20px' }}>
        <h3>Fase 1: Preparación e inventario</h3>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Inventario completo de URLs, métricas actuales (tráfico, rankings, enlaces) y categorización por plantillas.</li>
          <li>Definición de la arquitectura de la nueva web (menú, estructuras de carpetas y taxonomías).</li>
          <li>Mapeado de redirecciones 301 y plan de migración de contenido y assets.</li>
          <li>Configuración de entornos de staging y backups.</li>
        </ul>
        <h3 style={{ marginTop: '16px' }}>Fase 2: Construcción y configuración</h3>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Desarrollo de plantillas en Lovable asegurando performance, accesibilidad y cumplimiento SEO (títulos, metas, schema, alt text).</li>
          <li>Integración con CRM/MGA y herramientas de analítica (GA4, GSC, BigQuery) mediante servidor.</li>
          <li>Importación y revisión de contenido; configuración de idiomas, taxonomías y autores.</li>
          <li>Setup de redirecciones temporales y reglas en el CDN.</li>
        </ul>
        <h3 style={{ marginTop: '16px' }}>Fase 3: QA y lanzamiento</h3>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Validación de URLs, enlaces internos y externos, canonicals y hreflang.</li>
          <li>Pruebas de Core Web Vitals y carga en diferentes dispositivos/browsers.</li>
          <li>Verificación de redirecciones 301 y métricas de analytics en staging.</li>
          <li>Go live con monitorización en tiempo real y fallback plan.</li>
        </ul>
        <h3 style={{ marginTop: '16px' }}>Fase 4: Seguimiento post-migración</h3>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Monitoreo de tráfico y rankings diariamente las primeras semanas.</li>
          <li>Corrección de errores 404, ajustes de robots/sitemap y mejoras de rendimiento.</li>
          <li>Informe post-migración con análisis comparativo (antes vs. después) y plan de acciones.</li>
          <li>Entrenamiento al equipo de Tuio sobre la nueva plataforma y procesos.</li>
        </ul>
        <p style={{ marginTop: '18px', color: '#94a3b8' }}>
          <strong>Entregable:</strong> checklist completa de migración con responsables y fechas,
          documento de mapeado de redirecciones, acceso a entorno staging y reporte
          de QA, así como el informe post-migración con recomendaciones.
        </p>
      </div>
    </section>
  );
}
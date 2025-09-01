/**
 * Page explaining the migration process to Lovable. It follows
 * an industry-standard checklist adapted from the consultant's own
 * toolkit and details each fase with claridad.
 */
import NavigationButtons from '../components/NavigationButtons';

export default function Migration() {
  return (
    <section>
      <h1>3) Plan de migración a Lovable</h1>
      <p>
        Migrar una web sin un control estricto es una de las causas más comunes de
        caídas drásticas de tráfico y pérdidas de negocio. Redirecciones mal
        planteadas, contenidos que desaparecen, etiquetas equivocadas o fallos
        de rendimiento pueden hacer que Google desindexe páginas clave y que
        los usuarios no encuentren lo que buscan.
      </p>
      <p>
        Para Tuio diseñamos un plan de migración al detalle. Basándonos en una
        checklist de más de cuarenta puntos, cubrimos todas las etapas para que
        la transición sea un salto adelante y no un riesgo. Desde el inventario
        inicial hasta el seguimiento post‑lanzamiento, todo está documentado y
        supervisado.
      </p>
      <div className="card" style={{ marginTop: '20px' }}>
        <h3>Fase 1: Preparación e inventario</h3>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Inventario completo de URLs, métricas actuales (tráfico, rankings, enlaces) y categorización por plantillas.</li>
          <li>Exportación de data de Search Console, GA4 y herramientas de ranking para comparar pre/post.</li>
          <li>Definición de la arquitectura de la nueva web (menú, estructuras de carpetas y taxonomías) alineada con la keyword research.</li>
          <li>Mapeado de redirecciones 301 y plan de migración de contenido, assets y metadatos (títulos, metas, schema).</li>
          <li>Revisión de robots.txt, sitemaps y políticas de indexación para preparar el entorno.</li>
          <li>Configuración de entornos de staging y backups completos de bases de datos y ficheros.</li>
        </ul>
        <h3 style={{ marginTop: '16px' }}>Fase 2: Construcción y configuración</h3>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Desarrollo de plantillas en Lovable asegurando performance, accesibilidad y cumplimiento SEO (títulos, metas, schema, alt text).</li>
          <li>Integración con CRM/MGA y herramientas de analítica (GA4, GSC, BigQuery) mediante servidor y GTM server side.</li>
          <li>Importación y revisión de contenido; configuración de idiomas, taxonomías, autores y preservación de slugs.</li>
          <li>Revisión de elementos de diseño y UX (formularios, CTAs, navegación) para asegurar coherencia.</li>
          <li>Configuración de redirecciones temporales y reglas en el CDN para testing (307 / 302).</li>
          <li>Implementación de etiquetas canonical, hreflang y paginación donde corresponda.</li>
        </ul>
        <h3 style={{ marginTop: '16px' }}>Fase 3: QA y lanzamiento</h3>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Validación exhaustiva de URLs, enlaces internos y externos, canonicals, hreflang y meta robots.</li>
          <li>Pruebas de Core Web Vitals, Lighthouse y monitorización de CLS, LCP y INP en desktop y mobile.</li>
          <li>Revisión de datos estructurados con herramientas de Schema y validadores de Google.</li>
          <li>Verificación de redirecciones 301, 302 y 410 y monitorización de errores 404.</li>
          <li>Revisión de analíticas en staging (GA4, GSC) y validación del tracking server side.</li>
          <li>Go live con monitorización en tiempo real y fallback plan comunicado a stakeholders.</li>
        </ul>
        <h3 style={{ marginTop: '16px' }}>Fase 4: Seguimiento post-migración</h3>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Monitorización de tráfico, rankings y logs diariamente las primeras semanas.</li>
          <li>Corrección de errores (404, 500), ajustes de robots/sitemap y mejoras de rendimiento identificadas.</li>
          <li>Análisis de WPO continuo y de conversión (embudos, tasas de rebote).</li>
          <li>Informe post-migración con análisis comparativo (antes vs. después) y plan de acciones para 90 días.</li>
          <li>Formación y transferencia de conocimientos al equipo de Tuio sobre la nueva plataforma y procedimientos SEO.</li>
        </ul>
        <p style={{ marginTop: '18px', color: '#94a3b8' }}>
          <strong>Entregable:</strong> checklist completa de migración con responsables y fechas,
          documento de mapeado de redirecciones, acceso a entorno staging y reporte
          de QA, así como el informe post-migración con recomendaciones.
        </p>
      </div>
      <NavigationButtons prev="/audits" next="/travel" />
    </section>
  );
}
/**
 * Page describing the dual audits: traditional SEO and SEO para IA (GEO).
 * It breaks down the tasks to ser introspectivo so the client
 * understands exactly qué se revisará y qué entregables
 * recibirán.
 */
import NavigationButtons from '../components/NavigationButtons';

export default function Audits() {
  return (
    <section>
      <h1>2) Auditoría SEO y auditoría SEO para IA</h1>
      <p>
        Aunque Tuio cuenta ya con presencia orgánica, la realidad es que muchos
        problemas de SEO permanecen ocultos hasta que se analizan a fondo: enlaces
        rotos, contenidos huérfanos, estructuras duplicadas o un rastreo ineficiente
        por parte de Google. Además, los modelos generativos (IA) están empezando
        a condicionar la visibilidad de las marcas en nuevos entornos como
        Perplexity o SGE de Google.
      </p>
      <p>
        Por ello realizamos una auditoría dual: revisamos el SEO tradicional y
        preparamos la web para un futuro dominado por la búsqueda generativa.
        Detectaremos barreras técnicas, oportunidades de contenido y acciones
        concretas para que Tuio destaque frente a la competencia.
      </p>
      <div className="card" style={{ marginTop: '20px' }}>
        <h3>Áreas de trabajo</h3>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li><strong>Análisis técnico profundo:</strong> crawl y log analysis para detectar problemas de indexación, cobertura, redirecciones, canonicals, hreflang y estructura de URLs.</li>
          <li><strong>Arquitectura y enlaces internos:</strong> evaluación de la jerarquía de contenidos, optimización del enlazado interno, detección de páginas huérfanas y duplicadas.</li>
          <li><strong>Rendimiento y Core Web Vitals:</strong> medición de LCP, FID y CLS; revisión de peso de imágenes, scripts y CSS; recomendaciones para optimizar velocidad y UX.</li>
          <li><strong>On‑page y EEAT:</strong> análisis de contenido en profundidad para cubrir intención de búsqueda, evitar canibalizaciones, enriquecer títulos y metadescripciones, asegurar uso correcto de encabezados y actualizar el EEAT.</li>
          <li><strong>Structured data &amp; enriquecimiento:</strong> revisión de schema.org, metadatos OpenGraph, datos de producto/servicio y marcado para generative search.</li>
          <li><strong>Link profile y autoridad:</strong> evaluación de backlinks, menciones de marca, co‑citas y análisis de PR digital para identificar oportunidades de crecimiento.</li>
          <li><strong>Keyword research &amp; SERP:</strong> investigación de términos prioritarios, análisis de features SERP (snippets, people also ask), clusters temáticos y comparación con competidores.</li>
          <li><strong>SEO para IA (GEO):</strong> preparación del contenido para motores generativos: fuentes verificables, citas, tablas, datos de autoridad y respuesta a preguntas frecuentes; inclusión en repositorios de datos abiertos.</li>
          <li><strong>KPIs y benchmarks:</strong> definición de métricas de éxito (visibilidad, tráfico, leads, menciones en LLM, Core Web Vitals) y establecimiento de un baseline comparativo.</li>
        </ul>
        <p style={{ marginTop: '18px', color: '#94a3b8' }}>
          <strong>Entregable:</strong> documento con hallazgos y plan de acción priorizado,
          archivo de keywords segmentadas, checklist para implementar mejoras y
          dashboard de seguimiento en Looker/GA4 &amp; Search Console.
        </p>
      </div>
      <NavigationButtons prev="/stack" next="/migration" />
    </section>
  );
}
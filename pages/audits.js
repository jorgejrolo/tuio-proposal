/**
 * Page describing the dual audits: traditional SEO and SEO para IA (GEO).
 * It breaks down the tasks to ser introspectivo so the client
 * understands exactly qué se revisará y qué entregables
 * recibirán.
 */
export default function Audits() {
  return (
    <section>
      <h1>2) Auditoría SEO y auditoría SEO para IA</h1>
      <p>
        Analizamos el estado actual del SEO de Tuio y evaluamos su visibilidad tanto
        en buscadores tradicionales como en motores generativos (GEO). El objetivo
        es detectar barreras técnicas, oportunidades de contenido y
        acciones para destacar frente a la competencia.
      </p>
      <div className="card" style={{ marginTop: '20px' }}>
        <h3>Áreas de trabajo</h3>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li><strong>Análisis técnico:</strong> revisión de crawlabilidad, indexabilidad, sitemap, robots.txt,
            performance, Core Web Vitals y estado de indexación.</li>
          <li><strong>Contenido &amp; EEAT:</strong> auditoría de contenidos existentes para optimizar
            intención de búsqueda, evitar canibalizaciones, mejorar títulos, metas,
            encabezados y enriquecer el EEAT (experiencia, expertise, autoridad y confianza).</li>
          <li><strong>Keyword research y competencia:</strong> identificación de términos prioritarios,
            análisis SERP y benchmark con competidores directos e indirectos.</li>
          <li><strong>SEO para IA (GEO):</strong> evaluación de presencia y autoridad en motores
            generativos (ChatGPT, Perplexity, Gemini). Analizamos menciones de marca,
            co‑citas, calidad de las fuentes citadas y rapidez de carga para
            maximizar la probabilidad de ser referenciados.</li>
          <li><strong>KPIs y benchmarks:</strong> definición de métricas de éxito
            (visibilidad, tráfico, leads, menciones en LLM) y establecimiento de
            un punto de partida comparativo.</li>
        </ul>
        <p style={{ marginTop: '18px', color: '#94a3b8' }}>
          <strong>Entregable:</strong> documento con hallazgos y plan de acción priorizado,
          archivo de keywords segmentadas, checklist para implementar mejoras y
          dashboard de seguimiento en Looker/GA4 &amp; Search Console.
        </p>
      </div>
    </section>
  );
}
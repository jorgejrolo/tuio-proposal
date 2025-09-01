/**
 * Page describing the optional monthly SEO ongoing service. It
 * clarifies the tareas recurrentes, beneficios y la naturaleza
 * colaborativa de la relación a largo plazo.
 */
import NavigationButtons from '../components/NavigationButtons';

export default function Ongoing() {
  return (
    <section>
      <h1>5) Servicio SEO ongoing (opcional)</h1>
      <p>
        El trabajo no termina tras la migración y el lanzamiento del nuevo
        vertical. Los algoritmos cambian a diario, aparecen nuevas
        funcionalidades en las SERP y la competencia no descansa. Para
        mantenerse en lo más alto se necesita un mantenimiento continuo que
        optimice, experimente y se adapte.
      </p>
      <p>
        Nuestro servicio mensual de SEO ongoing es la herramienta que garantiza
        que Tuio evolucione al ritmo de Google y de las IA generativas. Con
        revisiones técnicas constantes, optimización de contenidos, link
        building y reporting, convertiremos la estrategia en un proceso vivo y
        sostenible.
      </p>
      <div className="card" style={{ marginTop: '20px' }}>
        <h3>Tareas recurrentes</h3>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          <li>Revisión técnica y ajuste de Core Web Vitals, indexabilidad y arquitectura.</li>
          <li>Optimización continua de contenidos existentes y creación de nuevos artículos/guías.</li>
          <li>Estrategia de link building y relaciones públicas digitales en medios y blogs de referencia.</li>
          <li>Experimentación y pruebas A/B de títulos, CTAs y layouts para mejorar la conversión.</li>
          <li>Seguimiento y mejora de la presencia en motores generativos y algoritmos de IA.</li>
          <li>Reporting mensual y sesiones de revisión para alinear las prioridades con los objetivos de negocio.</li>
        </ul>
        <p style={{ marginTop: '18px', color: '#94a3b8' }}>
          <strong>Entregable:</strong> reporte mensual detallado con métricas, acciones realizadas,
          backlog priorizado de mejoras y recomendaciones de experimentación.
        </p>
      </div>
      <NavigationButtons prev="/travel" next="/roadmap" />
    </section>
  );
}
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
        Una vez que la migración y el lanzamiento del vertical Travel estén
        en marcha, el mantenimiento SEO se convierte en el motor de mejora
        continua. Este servicio mensual asegura que Tuio permanezca a la
        vanguardia de la evolución de los buscadores y las IA.
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
/**
 * Page outlining the key performance indicators (KPIs) that
 * utilizaremos para medir el éxito del proyecto. Incluye un punto
 * de partida estimado y los objetivos a alcanzar en un periodo
 * determinado.
 */
import NavigationButtons from '../components/NavigationButtons';

export default function KPIs() {
  const metrics = [
    {
      name: 'Tráfico orgánico',
      baseline: '100k sesiones/mes (hipotético)',
      goal: '+50% en 6 meses',
    },
    {
      name: 'Keywords en Top 10',
      baseline: '300 términos',
      goal: '+60% en 6 meses',
    },
    {
      name: 'Autoridad del dominio',
      baseline: 'DA 35',
      goal: 'DA 40+',
    },
    {
      name: 'Menciones en LLM',
      baseline: 'Apenas referenciado',
      goal: 'Aparecer en 10+ consultas relevantes',
    },
    {
      name: 'Tiempo de carga',
      baseline: '3,5 s (LCP)',
      goal: '<2 s (LCP)',
    },
    {
      name: 'Leads/solicitudes',
      baseline: '300/mes',
      goal: '+30% en 6 meses',
    },
  ];
  return (
    <section>
      <h1>Métricas y KPIs</h1>
      <p>
        Para evaluar el impacto de nuestro trabajo, definimos un conjunto de
        indicadores clave. Estos valores son aproximados a modo de ejemplo y
        se ajustarán a la realidad una vez se realicen las auditorías.
      </p>
      <div className="grid" style={{ marginTop: '30px' }}>
        {metrics.map((m, index) => (
          <div key={index} className="card col-4">
            <h3>{m.name}</h3>
            <p><strong>Base:</strong> {m.baseline}</p>
            <p><strong>Objetivo:</strong> {m.goal}</p>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '28px', color: '#94a3b8' }}>
        <strong>Nota:</strong> estos KPI se adaptarán tras las auditorías, fijando objetivos
        realistas y ambiciosos en colaboración con Tuio.
      </p>
      <NavigationButtons prev="/roadmap" next="/investment" />
    </section>
  );
}
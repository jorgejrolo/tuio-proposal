/**
 * Page describing the optional monthly SEO ongoing service. It
 * clarifies the tareas recurrentes, beneficios y la naturaleza
 * colaborativa de la relación a largo plazo.
 */
import NavigationButtons from '../components/NavigationButtons';

export default function Ongoing() {
  // Definimos tareas como objetos para mostrar con emojis
  const tasks = [
    {
      emoji: '🧰',
      title: 'Revisión técnica',
      desc: 'Ajustes de Core Web Vitals, indexabilidad y arquitectura cada mes.',
    },
    {
      emoji: '✍️',
      title: 'Optimización de contenidos',
      desc: 'Actualización de artículos y creación de nuevos para captar más tráfico.',
    },
    {
      emoji: '🔗',
      title: 'Link building',
      desc: 'Relaciones públicas digitales y enlaces de calidad en medios y blogs.',
    },
    {
      emoji: '🧪',
      title: 'Experimentación',
      desc: 'Pruebas A/B de títulos, CTAs y diseños para mejorar la conversión.',
    },
    {
      emoji: '🤖',
      title: 'SEO generativo',
      desc: 'Monitorización y mejora de la presencia en motores de IA y LLMs.',
    },
    {
      emoji: '📊',
      title: 'Reporting y sesiones',
      desc: 'Informe mensual detallado y revisión de prioridades con Tuio.',
    },
  ];
  return (
    <section>
      <h1>5) Servicio SEO ongoing (opcional)</h1>
      <p>
        El trabajo no termina tras la migración y el lanzamiento del nuevo vertical. Los algoritmos cambian a diario,
        aparecen nuevas funcionalidades en las SERP y la competencia no descansa. Para mantenerse en lo más alto se
        necesita un mantenimiento continuo que optimice, experimente y se adapte.
      </p>
      <p>
        Nuestro servicio mensual de SEO ongoing es la herramienta que garantiza que Tuio evolucione al ritmo de Google
        y de las IA generativas. Con revisiones técnicas constantes, optimización de contenidos, link building y
        reporting, convertiremos la estrategia en un proceso vivo y sostenible.
      </p>
      <div className="grid" style={{ marginTop: '20px' }}>
        {tasks.map((t, index) => (
          <div key={index} className="col-4">
            <div className="card" style={{ textAlign: 'left', height: '100%' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{t.emoji}</div>
              <h3 style={{ marginTop: 0 }}>{t.title}</h3>
              <p style={{ margin: 0 }}>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '22px', color: '#94a3b8' }}>
        <strong>Entregable:</strong> reporte mensual detallado con métricas, acciones realizadas, backlog priorizado de mejoras y recomendaciones de experimentación.
      </p>
      <NavigationButtons prev="/travel" next="/roadmap" />
    </section>
  );
}
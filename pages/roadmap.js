/**
 * Page with a visual roadmap summarising the fases, duraciones y
 * principales tareas. Utiliza la clase timeline definida en
 * globals.css para organizar los pasos en una cuadrícula responsive.
 */
import NavigationButtons from '../components/NavigationButtons';

export default function Roadmap() {
  const steps = [
    {
      num: '01',
      title: 'Auditoría de stack',
      duration: '2 semanas',
      desc: 'Inventario de tecnología actual y definición del stack óptimo. Documentación de arquitectura y plan de implementación.',
    },
    {
      num: '02',
      title: 'Auditoría SEO & IA',
      duration: '4 semanas',
      desc: 'Análisis técnico, de contenidos, keywords y GEO. Entrega de informe y plan de acciones priorizadas.',
    },
    {
      num: '03',
      title: 'Migración SEO',
      duration: '6 semanas',
      desc: 'Ejecución de la checklist de migración: preparación, desarrollo, QA, lanzamiento y seguimiento. Redirecciones y formación.',
    },
    {
      num: '04',
      title: 'Lanzamiento Travel',
      duration: '4 semanas',
      desc: 'Investigación, diseño de arquitectura, producción de plantillas y contenidos, y lanzamiento inicial del vertical.',
    },
  ];
  return (
    <section>
      <h1>Roadmap y planificación</h1>
      <p>
        Este calendario visual resume las fases, su duración estimada y los
        entregables principales. Las fechas exactas se adaptarán al ritmo y
        disponibilidad de Tuio.
      </p>
      <div className="timeline-vertical" style={{ marginTop: '40px' }}>
        {steps.map((s) => (
          <div key={s.num} className="timeline-item">
            <div className="timeline-marker">{s.num}</div>
            <div className="timeline-content">
              <h4 style={{ margin: '0 0 4px' }}>{s.title}</h4>
              <p style={{ margin: 0, fontWeight: 600, color: 'var(--accent-dark)' }}>{s.duration}</p>
              <p style={{ marginTop: '6px' }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '36px', color: '#94a3b8' }}>
        <strong>Nota:</strong> el servicio de mantenimiento SEO ongoing comenzaría una vez
        completadas estas fases y se factura mensualmente.
      </p>
      <NavigationButtons prev="/ongoing" next="/kpis" />
    </section>
  );
}
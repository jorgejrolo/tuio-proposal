/**
 * Page with a visual roadmap summarising the fases, duraciones y
 * principales tareas. Utiliza la clase timeline definida en
 * globals.css para organizar los pasos en una cuadrícula responsive.
 */
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
      title: 'Migración a Lovable',
      duration: '6 semanas',
      desc: 'Ejecución de la checklist de migración: preparación, desarrollo, QA, lanzamiento y seguimiento. Redirecciones y formación.',
    },
    {
      num: '04',
      title: 'Vertical Travel',
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
      <div className="timeline" style={{ marginTop: '30px' }}>
        {steps.map((s) => (
          <div key={s.num} className="step">
            <div className="num">{s.num}</div>
            <b>{s.title}</b>
            <p style={{ margin: '4px 0', fontWeight: 600 }}>{s.duration}</p>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '28px', color: '#94a3b8' }}>
        <strong>Nota:</strong> el servicio de mantenimiento SEO ongoing comenzaría una vez
        completadas estas fases y se factura mensualmente.
      </p>
    </section>
  );
}
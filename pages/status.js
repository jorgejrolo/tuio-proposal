import NavigationButtons from '../components/NavigationButtons';

/**
 * Status page: ofrece una visión rápida del estado actual del sitio a nivel SEO.
 * Se han reducido los datos para asegurar que la página se cargue correctamente
 * incluso en conexiones lentas. Presentamos los principales problemas y
 * oportunidades detectados en la auditoría de rastreo.
 */
export default function Status() {
  // Problemas más críticos (resumen)
  const issues = [
    {
      emoji: '⚠️',
      title: 'Contenido placeholder',
      desc: "Muchos textos aún usan 'Lorem ipsum'. Es prioritario sustituirlos por contenido optimizado.",
    },
    {
      emoji: '🔗',
      title: 'Canonicals incorrectos',
      desc: 'Una parte significativa de URLs apunta a otras direcciones. Hay que revisar las canonicals para consolidar autoridad.',
    },
    {
      emoji: '💔',
      title: 'Enlaces rotos',
      desc: 'Se detectan códigos 4xx. Deben corregirse para mejorar la experiencia y el crawl budget.',
    },
    {
      emoji: '🧩',
      title: 'Enlazado interno',
      desc: 'Algunas páginas están aisladas. Mejorar el enlazado interno ayudará a distribuir autoridad y navegación.',
    },
  ];

  // Oportunidades principales (resumen)
  const opportunities = [
    {
      emoji: '📄',
      title: 'Contenidos de valor',
      desc: 'Crear guías y FAQs basadas en intención de búsqueda reforzará el EEAT y atraerá tráfico cualificado.',
    },
    {
      emoji: '🔧',
      title: 'Revisar redirecciones',
      desc: 'Revisar canonicals y redirecciones consolidará la autoridad en las páginas correctas.',
    },
    {
      emoji: '🔍',
      title: 'Optimizar enlaces internos',
      desc: 'Diseñar una arquitectura coherente con enlaces contextuales mejorará la indexación.',
    },
    {
      emoji: '🏷️',
      title: 'Titles y metas únicos',
      desc: 'Definir títulos y descripciones únicos y descriptivos para cada página evitará duplicidades.',
    },
  ];

  return (
    <section className="reveal">
      <h1>Estado actual y hallazgos del rastreo</h1>
      <p>
        Antes de entrar en las fases de trabajo, analizamos la web de Tuio con una
        auditoría de rastreo. A continuación resumimos los principales problemas
        y oportunidades de mejora detectados.
      </p>
      <h2>Puntos críticos</h2>
      <div style={{ marginTop: '20px' }}>
        {issues.map((item, idx) => (
          <div
            key={idx}
            style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}
          >
            <div style={{ fontSize: '28px' }}>{item.emoji}</div>
            <div>
              <h3 style={{ margin: 0 }}>{item.title}</h3>
              <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--muted)' }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>Oportunidades de SEO</h2>
      <div style={{ marginTop: '20px' }}>
        {opportunities.map((item, idx) => (
          <div
            key={idx}
            style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}
          >
            <div style={{ fontSize: '28px' }}>{item.emoji}</div>
            <div>
              <h3 style={{ margin: 0 }}>{item.title}</h3>
              <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--muted)' }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <NavigationButtons prev="/overview" next="/risks" />
    </section>
  );
}

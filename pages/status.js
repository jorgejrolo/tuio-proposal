import NavigationButtons from '../components/NavigationButtons';

/**
 * Status page: muestra un diagnóstico actual de la web de Tuio basado
 * en los informes de rastreo de Screaming Frog. Resume los puntos
 * críticos más frecuentes y las oportunidades SEO antes de entrar en
 * detalle con el resto de secciones de trabajo.
 */
export default function Status() {
  const issues = [
    {
      emoji: "⚠️",
      title: "Contenido placeholder",
      desc:
        "Aproximadamente un 77% de las páginas contienen texto 'Lorem ipsum' o contenido ficticio. Esto sugiere que falta contenido definitivo y optimizado, afectando seriamente la relevancia y la percepción de los usuarios y de Google.",
    },
    {
      emoji: "🔗",
      title: "Canonicalización incorrecta",
      desc:
        "Un 43% de URLs canoniza hacia otra dirección. Si no se gestiona correctamente, se pierde autoridad y se generan problemas de indexación. Es esencial revisar la configuración de canonicals.",
    },
    {
      emoji: "🔐",
      title: "HTTP vs HTTPS",
      desc:
        "Alrededor del 5% de las URLs aún están en HTTP. Deben redirigirse a HTTPS para garantizar seguridad, confianza del usuario y cumplimiento de las mejores prácticas SEO.",
    },
    {
      emoji: "🚫",
      title: "Noindex inesperado",
      desc:
        "Una pequeña parte (~0,5%) de las páginas devuelve directivas noindex. Esto impide su posicionamiento; hay que asegurar que solo las páginas no estratégicas estén desindexadas.",
    },
    {
      emoji: "🧩",
      title: "Enlazado interno",
      desc:
        "Se detectan páginas sin enlaces de salida internos. Un buen enlazado interno ayuda a distribuir autoridad y mejora la navegabilidad. Recomendamos revisar la estructura de enlaces.",
    },
    {
      emoji: "💔",
      title: "Enlaces rotos",
      desc:
        "Se observan códigos de respuesta 4xx en algunas URLs. Los enlaces rotos generan mala experiencia y desperdician crawl budget. Deben corregirse o redireccionarse.",
    },
    {
      emoji: "📝",
      title: "Títulos duplicados o múltiples",
      desc:
        "Algunas páginas presentan títulos duplicados o más de un <title>. Un etiquetado claro y único es esencial para el SEO y la usabilidad.",
    },
  ];
  const opportunities = [
    {
      emoji: "📄",
      title: "Crear contenidos de valor",
      desc:
        "Reemplazar los placeholders por contenidos orientados a la intención de búsqueda (guías, comparativas, FAQs) aumentará la relevancia y mejorará el EEAT.",
    },
    {
      emoji: "🔗",
      title: "Optimizar canonicals y redirecciones",
      desc:
        "Revisar la estrategia de canonicals y redirecciones ayudará a consolidar autoridad en las páginas correctas y a evitar contenido duplicado.",
    },
    {
      emoji: "🔒",
      title: "Forzar HTTPS",
      desc:
        "Migrar todas las URLs a HTTPS y configurar HSTS incrementa la seguridad y mejora las señales de confianza para buscadores y usuarios.",
    },
    {
      emoji: "🔍",
      title: "Mejorar enlazado interno",
      desc:
        "Diseñar una arquitectura coherente con enlaces internos contextuales favorecerá la indexación y el descubrimiento de contenido.",
    },
    {
      emoji: "🔧",
      title: "Corregir errores 4xx/5xx",
      desc:
        "Auditar enlaces rotos y recursos bloqueados para redirigir o eliminar referencias que afecten a la experiencia y al crawl budget.",
    },
    {
      emoji: "🏷️",
      title: "Unificar titles y metas",
      desc:
        "Definir un patrón de títulos único y descriptivo para cada página, ajustando su longitud y evitando duplicidades.",
    },
  ];
  return (
    <section className="reveal">
      <h1>Estado actual y hallazgos del rastreo</h1>
      <p>
        Antes de entrar en las fases de trabajo, analizamos la web de Tuio con una auditoría de rastreo.
        Estos son los principales puntos críticos detectados y algunas oportunidades de mejora.
      </p>
      <h2>Puntos críticos</h2>
      <div style={{ marginTop: '20px' }}>
        {issues.map((item, idx) => (
          <div key={idx} style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
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
          <div key={idx} style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
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
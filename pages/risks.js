import NavigationButtons from '../components/NavigationButtons';

/**
 * Risks page highlights the SEO risks of trabajar con plataformas
 * propietarias como Webflow o Lovable sin un control adecuado. Basado
 * en la experiencia del consultor, resume las limitaciones y los
 * motivos para realizar una auditoría y trabajar juntos.
 */
export default function Risks() {
  // Agrupamos los riesgos en categorías con emojis y descripciones. Cada elemento se
  // presenta como un acordeón (details/summary) que se puede expandir, para
  // ofrecer dinamismo y no saturar de texto al usuario.
  const categories = [
    {
      emoji: '⚙️',
      title: 'Personalización limitada',
      description:
        'Lovable y Webflow ocultan parte del marcado HTML y complican la aplicación de títulos, encabezados y schema avanzados.',
    },
    {
      emoji: '🌍',
      title: 'Dependencia del hosting',
      description:
        'Sin control sobre geolocalización, seguridad o tiempos de respuesta. La velocidad internacional se resiente y no hay modo de adaptar el hosting a mercados clave.',
    },
    {
      emoji: '🧱',
      title: 'Arquitectura rígida',
      description:
        'Estructuras de contenidos cerradas que generan contenido duplicado, canibalización y jerarquías de URL poco óptimas. Migrar estructuras masivas es complejo.',
    },
    {
      emoji: '🐌',
      title: 'Rendimiento y control',
      description:
        'Scripts y estilos inyectados por la plataforma lastran los Core Web Vitals. El control sobre robots.txt, sitemaps y headers HTTP es limitado.',
    },
    {
      emoji: '🤖',
      title: 'Preparación para IA',
      description:
        'Falta de datos estructurados enriquecidos y citas verificables. Esto dificulta que los modelos generativos (GEO) citen la marca en respuestas.',
    },
  ];
  return (
    <section>
      <h1>Riesgos y motivaciones</h1>
      <p>
        Trabajar con plataformas de terceros como Webflow o Lovable puede parecer la vía rápida para poner un sitio en
        marcha. Sin embargo, mantener toda la operativa bajo un mismo proveedor implica renunciar a la libertad de
        optimizar la web al detalle. Eso afecta directamente al SEO y a la capacidad de Tuio de adaptarse a las
        exigencias de buscadores y modelos generativos.
      </p>
      <p>
        En el artículo <em>SEO en Lovable</em> compartí en profundidad estos inconvenientes y cómo mitigarlos. Para hacer
        esta sección más ligera, hemos agrupado los riesgos en bloques interactivos: pulsa en cada uno para descubrir
        más detalles.
      </p>
      <div style={{ marginTop: '28px' }}>
        {categories.map((cat, idx) => (
          <details key={idx} style={{ marginBottom: '14px' }}>
            <summary
              style={{
                cursor: 'pointer',
                padding: '12px 16px',
                borderRadius: '12px',
                background: 'var(--panel)',
                border: '1px solid #e5e7eb',
                boxShadow: 'var(--shadow)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontWeight: 600,
              }}
            >
              <span style={{ fontSize: '26px' }}>{cat.emoji}</span>
              <span>{cat.title}</span>
            </summary>
            <div
              style={{
                padding: '12px 16px',
                background: '#f7fafa',
                borderRadius: '0 0 12px 12px',
                border: '1px solid #e5e7eb',
                borderTop: 'none',
                fontSize: '14px',
                color: 'var(--muted)',
              }}
            >
              {cat.description}
            </div>
          </details>
        ))}
      </div>
      <p style={{ marginTop: '22px' }}>
        Para mitigar estos riesgos y aprovechar al máximo la migración, es esencial trabajar con un consultor que conozca
        las limitaciones de cada plataforma y adapte las estrategias de SEO y analítica a las necesidades reales de Tuio.
      </p>
      <NavigationButtons prev="/overview" next="/stack" />
    </section>
  );
}
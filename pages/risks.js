import NavigationButtons from '../components/NavigationButtons';

/**
 * Risks page highlights the SEO risks of trabajar con plataformas
 * propietarias como Webflow o Lovable sin un control adecuado. Basado
 * en la experiencia del consultor, resume las limitaciones y los
 * motivos para realizar una auditoría y trabajar juntos.
 */
export default function Risks() {
  const risks = [
    'Limitada personalización del HTML y de las etiquetas meta: Lovable y Webflow ocultan parte del marcado y complican la aplicación de títulos, encabezados y schema avanzados.',
    'Dependencia del hosting de terceros: sin control sobre geolocalización, seguridad o tiempos de respuesta, un factor clave para el SEO internacional.',
    'Estructuras rígidas que pueden provocar contenido duplicado, canibalización y problemas de jerarquía en las URLs.',
    'Complejidad para aplicar redirecciones masivas (301/410), canonicals o hreflang a gran escala, aumentando el riesgo de errores y pérdida de autoridad.',
    'Sobrecarga de scripts y estilos inyectados por la plataforma que lastran los Core Web Vitals y la velocidad de carga.',
    'Falta de control sobre robots.txt, sitemaps y reglas de indexación: indispensable para un crawling eficaz.',
    'Dificultad para integrar datos estructurados personalizados y rich snippets que mejoren la visibilidad en las SERP.',
    'Poca preparación para los motores generativos (GEO): si el contenido no está estructurado ni citado correctamente, los LLM lo ignoran.',
    'Actualizaciones y despliegues fuera de nuestro control: cualquier cambio en la plataforma puede romper nuestras optimizaciones.',
  ];
  return (
    <section>
      <h1>Riesgos y motivaciones</h1>
      <p>
        Trabajar con plataformas de terceros como Webflow o Lovable puede parecer la
        vía rápida para poner un sitio en marcha. Sin embargo, mantener toda la
        operativa bajo un mismo proveedor implica renunciar a la libertad de
        optimizar la web al detalle. Eso afecta directamente al SEO y a la
        capacidad de Tuio de adaptarse a las exigencias de buscadores y
        modelos generativos.
      </p>
      <p>
        En el artículo <em>SEO en Lovable</em> compartí en profundidad estos
        inconvenientes y cómo mitigarlos. A continuación resumimos los
        principales riesgos que debemos tener en cuenta antes de decidir el
        stack final:
      </p>
      <ul style={{ paddingLeft: '20px', margin: '20px 0' }}>
        {risks.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
      <p>
        Para mitigar estos riesgos y aprovechar al máximo la migración, es
        esencial trabajar con un consultor que conozca las limitaciones de cada
        plataforma y adapte las estrategias de SEO y analítica a las necesidades
        reales de Tuio.
      </p>
      <NavigationButtons prev="/overview" next="/stack" />
    </section>
  );
}
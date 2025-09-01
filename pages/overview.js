import NavigationButtons from '../components/NavigationButtons';

/**
 * Overview page: explica los motivos del proyecto y resume las
 * cuatro áreas principales de trabajo antes de entrar en detalle.
 */
export default function Overview() {
  const areas = [
    {
      title: 'Stack tecnológico',
      desc: 'Definiremos la combinación de tecnologías (Lovable, WordPress, headless) que mejor se adapten a Tuio para escalar de forma eficiente.',
    },
    {
      title: 'SEO & IA',
      desc: 'Analizaremos el estado del SEO de Tuio y su visibilidad en buscadores tradicionales y motores generativos para encontrar oportunidades.',
    },
    {
      title: 'Migración SEO',
      desc: 'Planificaremos y ejecutaremos la transición al nuevo stack sin perder autoridad ni tráfico, siguiendo una checklist detallada.',
    },
    {
      title: 'SEO Setup Travel',
      desc: 'Lanzaremos un nuevo vertical para seguros de viaje con arquitectura, contenidos y difusión pensados para posicionar rápidamente.',
    },
  ];
  return (
    <section>
      <h1>¿Por qué esta propuesta?</h1>
      <p>
        Tuio quiere consolidar su posición en el mercado de seguros con una base
        tecnológica sólida, una presencia orgánica potente y la expansión hacia nuevos
        servicios. Esta propuesta nace para acompañar esa transformación.
      </p>
      <p>
        Estas son las cuatro grandes áreas en las que trabajaremos y que se detallarán
        en las próximas pantallas:
      </p>
      <div className="grid" style={{ marginTop: '30px' }}>
        {areas.map((area, index) => (
          <div key={index} className="col-6">
            <div className="card" style={{ height: '100%' }}>
              <h3>{area.title}</h3>
              <p>{area.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <NavigationButtons prev="/" next="/status" />
    </section>
  );
}
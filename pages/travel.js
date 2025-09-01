/**
 * Page detailing how we will launch the new Travel vertical. The
 * goal is to crear un ecosistema de contenidos que posicione a Tuio
 * como referente en seguros de viaje, tanto en buscadores como en
 * motores de IA.
 */
import NavigationButtons from '../components/NavigationButtons';

export default function Travel() {
  // Definimos secciones con emojis e información
  const sections = [
    {
      emoji: '🔍',
      title: 'Investigación & planning',
      points: [
        'Definición de buyer personas y análisis del ciclo de compra.',
        'Keyword research segmentado por tipos de viaje y destinos.',
        'Benchmarking con competidores y análisis de tendencias.',
      ],
    },
    {
      emoji: '🏗️',
      title: 'Arquitectura & producción',
      points: [
        'Estructura jerárquica: página madre, hijos por destino/tipo y artículos informativos.',
        'Diseño de plantillas Lovable optimizadas para SEO y conversión.',
        'Creación de contenidos de alto valor: guías, checklists y calculadoras.',
        'Integración de schema markup y optimización para snippets.',
      ],
    },
    {
      emoji: '🚀',
      title: 'Lanzamiento & difusión',
      points: [
        'Plan de publicación y promoción en blog, redes y newsletters.',
        'Construcción de enlaces y colaboraciones con portales de viajes y bloggers.',
        'Optimización continua en motores generativos (ChatGPT, Perplexity).',
      ],
    },
  ];
  return (
    <section className="reveal">
      <h1>4) Lanzamiento de nuevo vertical «Travel»</h1>
      <p>
        El seguro de viaje es una categoría con un enorme potencial de crecimiento. Sin embargo, muchos players compiten
        por las mismas palabras clave y la visibilidad se gana con una estrategia vertical especializada. No basta con
        crear una página genérica: hace falta un ecosistema de contenidos que responda a cada tipo de viajero.
      </p>
      <p>
        Nuestra propuesta combina investigación profunda, arquitectura jerárquica y producción de contenidos de alto
        valor para posicionar rápidamente a Tuio como referente en seguros de viaje. A continuación te mostramos las
        tres áreas clave del proyecto:
      </p>
      <div className="grid" style={{ marginTop: '30px' }}>
        {sections.map((sec, index) => (
          <div key={index} className="col-4">
            <div className="card" style={{ height: '100%' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>{sec.emoji}</div>
              <h3 style={{ marginTop: 0 }}>{sec.title}</h3>
              <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '14px' }}>
                {sec.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '22px', color: '#94a3b8' }}>
        <strong>Entregable:</strong> documento de estrategia para el vertical Travel, arquitectura propuesta,
        calendario editorial inicial y kit de plantillas Lovable listas para su implementación.
      </p>
      <NavigationButtons prev="/migration" next="/ongoing" />
    </section>
  );
}
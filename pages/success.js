import Image from 'next/image';
import { useRouter } from 'next/router';

/**
 * Page showcasing anonymised success stories from previous
 * proyectos. Se utilizan imágenes genéricas para representar los
 * sectores sin mostrar marcas. Los detalles se centran en los
 * objetivos, acciones y resultados logrados.
 */
export default function Success() {
  const router = useRouter();
  const { plan, services } = router.query;
  const cases = [
    {
      sector: 'Finanzas',
      img: '/assets/financial.png',
      title: 'Migración y mejora SEO en entidad financiera',
      objectives: 'Migrar una web corporativa de WordPress a un stack headless optimizado, aumentar la autoridad y preparar la empresa para la búsqueda generativa.',
      actions: [
        'Auditoría técnica y de contenidos con enfoque en EEAT.',
        'Migración a headless y optimización de plantillas con Core Web Vitals.',
        'Estrategia de link building y menciones en medios financieros.',
      ],
      results: ['+60% keywords Top 10', '+40% tráfico orgánico en 6 meses', '+50% leads orgánicos'],
    },
    {
      sector: 'Turismo',
      img: '/assets/travel2.png',
      title: 'Lanzamiento de vertical de viajes para un comparador',
      objectives: 'Desarrollar una nueva vertical para seguros de viaje, optimizar la arquitectura y contenido para capturar tráfico cualificado.',
      actions: [
        'Investigación de palabras clave y arquitectura jerárquica.',
        'Creación de plantillas interactivas y contenido evergreen.',
        'Promoción en blogs de viajes y optimización para IA generativa.',
      ],
      results: ['+80% sesiones orgánicas en 3 meses', '3× solicitudes de presupuesto', '1.000+ menciones en LLMs'],
    },
    {
      sector: 'Seguros',
      img: '/assets/insurance.png',
      title: 'Estrategia SEO integral para aseguradora digital',
      objectives: 'Aumentar la captación de leads y optimizar la autoridad en un mercado altamente competitivo de seguros online.',
      actions: [
        'Auditoría SEO multidisciplinar (técnica, contenidos, autoridad y EEAT).',
        'Desarrollo de contenido evergreen (glosarios, guías, comparadores) y optimización del funnel.',
        'Plan de link building segmentado por productos (hogar, salud, vida) y presencia en medios especializados.',
      ],
      results: ['+70% tráfico orgánico en 5 meses', '+45% leads desde orgánico', 'Top 3 en 15 keywords transaccionales'],
    },
  ];
  return (
    <section>
      <h1>Casos de éxito (anónimos)</h1>
      <p>
        Para ilustrar el impacto de nuestra metodología, compartimos tres ejemplos
        sectoriales (sin revelar nombres comerciales) en los que se aplicaron
        estrategias similares a las propuestas para Tuio.
      </p>
      <div className="grid" style={{ marginTop: '32px' }}>
        {cases.map((c, index) => (
          <div key={index} className="col-6">
            <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Image
                src={c.img}
                alt={`Sector ${c.sector}`}
                width={600}
                height={300}
                style={{ borderRadius: '14px', width: '100%', height: 'auto' }}
              />
              <h3 style={{ marginTop: '14px' }}>{c.title}</h3>
              <p><strong>Objetivos:</strong> {c.objectives}</p>
              <p><strong>Acciones clave:</strong></p>
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                {c.actions.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
              <p style={{ marginTop: '8px' }}><strong>Resultados:</strong></p>
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                {c.results.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* Navegación personalizada: conserva los parámetros de la selección */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
        <a className="btn ghost" href="/investment">Anterior</a>
        <a
          className="btn primary"
          href={`/next?plan=${plan || ''}&services=${services || ''}`}
        >
          Siguiente
        </a>
      </div>
    </section>
  );
}
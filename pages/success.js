import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

/**
 * Page showcasing anonymised success stories from previous
 * proyectos. Se utilizan imágenes genéricas para representar los
 * sectores sin mostrar marcas. Los detalles se centran en los
 * objetivos, acciones y resultados logrados.
 */
export default function Success() {
  const router = useRouter();
  const { plan, services } = router.query;
  // Índice del caso actualmente visible en el carrusel
  const [index, setIndex] = useState(0);
  const cases = [
    {
      sector: 'Finanzas',
      img: '/assets/financial.png',
      title: 'Migración y mejora SEO en entidad financiera',
      objectives:
        'Migrar una web corporativa de WordPress a un stack headless optimizado, aumentar la autoridad y preparar la empresa para la búsqueda generativa.',
      actions: [
        'Auditoría técnica y de contenidos con enfoque en EEAT.',
        'Migración a headless y optimización de plantillas con Core Web Vitals.',
        'Estrategia de link building y menciones en medios financieros.',
      ],
      // Resultados moderados y verosímiles
      results: ['+35% keywords en Top 10', '+30% tráfico orgánico en 6 meses', '+25% leads orgánicos'],
    },
    {
      sector: 'Turismo',
      img: '/assets/travel2.png',
      title: 'Lanzamiento de vertical de viajes para un comparador',
      objectives:
        'Desarrollar una nueva vertical para seguros de viaje, optimizar la arquitectura y contenido para capturar tráfico cualificado.',
      actions: [
        'Investigación de palabras clave y arquitectura jerárquica.',
        'Creación de plantillas interactivas y contenido evergreen.',
        'Promoción en blogs de viajes y optimización para IA generativa.',
      ],
      results: ['+60% sesiones orgánicas en 3 meses', '+45% solicitudes de presupuesto', '50+ menciones en LLMs'],
    },
    {
      sector: 'Seguros',
      img: '/assets/insurance.png',
      title: 'Estrategia SEO integral para aseguradora digital',
      objectives:
        'Aumentar la captación de leads y optimizar la autoridad en un mercado altamente competitivo de seguros online.',
      actions: [
        'Auditoría SEO multidisciplinar (técnica, contenidos, autoridad y EEAT).',
        'Desarrollo de contenido evergreen (glosarios, guías, comparadores) y optimización del funnel.',
        'Plan de link building segmentado por productos (hogar, salud, vida) y presencia en medios especializados.',
      ],
      results: ['+50% tráfico orgánico en 5 meses', '+35% leads desde orgánico', 'Top 5 en 8 keywords transaccionales'],
    },
  ];
  // Funciones de navegación del carrusel
  const prev = () => setIndex((index - 1 + cases.length) % cases.length);
  const next = () => setIndex((index + 1) % cases.length);

  return (
    <section className="reveal">
      <h1>Casos de éxito</h1>
      <p>
        Para ilustrar el impacto de nuestra metodología, compartimos tres ejemplos
        sectoriales (sin revelar nombres comerciales) en los que se aplicaron
        estrategias similares a las propuestas para Tuio.
      </p>
      <div style={{ position: 'relative', overflow: 'hidden', marginTop: '30px' }}>
        {/* Carrusel de casos */}
        <div
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease',
            transform: `translateX(-${index * 100}%)`,
            width: `${cases.length * 100}%`,
          }}
        >
          {cases.map((c, i) => (
            <div
              key={i}
              style={{ width: '100%', padding: '0 10%' }}
            >
              <div
                className="card"
                style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <Image
                  src={c.img}
                  alt={`Sector ${c.sector}`}
                  width={800}
                  height={400}
                  style={{ borderRadius: '14px', width: '100%', height: 'auto' }}
                />
                <h3 style={{ marginTop: '14px' }}>{c.title}</h3>
                <p style={{ fontSize: '14px' }}><strong>Objetivos:</strong> {c.objectives}</p>
                <p style={{ fontSize: '14px' }}><strong>Acciones clave:</strong></p>
                <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '14px' }}>
                  {c.actions.map((a, j) => <li key={j}>{a}</li>)}
                </ul>
                <p style={{ marginTop: '8px', fontSize: '14px' }}><strong>Resultados:</strong></p>
                <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '14px' }}>
                  {c.results.map((r, j) => <li key={j}>{r}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/* Botones de navegación */}
        <button
          onClick={prev}
          aria-label="Anterior caso"
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0, 195, 176, 0.8)',
            border: 'none',
            color: '#ffffff',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            fontSize: '20px',
          }}
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Siguiente caso"
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0, 195, 176, 0.8)',
            border: 'none',
            color: '#ffffff',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            fontSize: '20px',
          }}
        >
          ›
        </button>
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
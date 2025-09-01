import { useState } from 'react';
import NavigationButtons from '../components/NavigationButtons';

/**
 * Page describing the stack audit and options. It uses a simple
 * tabbed interface to switch between the three possible
 * arquitecturas para Tuio. Each tab reveals a set of
 * beneficios y un pequeño diagrama ASCII.
 */
export default function Stack() {
  const options = [
    {
      key: 'hybrid',
      label: 'Híbrido: Lovable + WordPress (blog)',
      title: 'Recomendación: Híbrido Lovable + WordPress',
      bullets: [
        'LPs comerciales y páginas core en Lovable (rendimiento, UX, velocidad de experimentación).',
        'Blog en WordPress para comodidad editorial, taxonomías y plugins SEO avanzados.',
        'Single sign‑on de edición, releases versionadas y CDN unificada.',
      ],
      diagram: `[Cliente] → CDN → Lovable (Core/LPs)\n                  ├─→ Analytics (GA4+GSC+BQ)\n                  └─→ WP (Blog)\n↑ Forms/Quote → CRM/Backend (MGA) + Event Bus (server‑side tracking)`,
    },
    {
      key: 'full',
      label: 'Full Lovable + CMS Headless',
      title: 'Opción: Full Lovable + CMS Headless',
      bullets: [
        'Un solo stack: contenido en CMS headless (Contentful/Hyggraph) y front en Lovable.',
        'Máxima consistencia UI/UX; requiere gobierno editorial y modelos de contenido bien definidos.',
      ],
      diagram: `Editor ↔ CMS Headless (Contentful/Hygraph) ↔ Lovable (Front)\n                 └─→ Analytics (GA4+GSC+BQ)`,
    },
    {
      key: 'wpheadless',
      label: 'WordPress Headless + Front en Lovable',
      title: 'Opción: WordPress Headless + Front en Lovable',
      bullets: [
        'WP como fuente única (REST/GraphQL) y Lovable renderiza; excelente para SEO programático del blog.',
        'Complejidad técnica mayor (cachés, invalidaciones, webhooks) pero gran control.',
      ],
      diagram: `Editor ↔ WordPress Headless (REST/GraphQL) ↔ Lovable Front\n                 └─→ Analytics (GA4+GSC+BQ)`
    },
  ];
  const [active, setActive] = useState('hybrid');
  const current = options.find((opt) => opt.key === active);

  return (
    <section>
      <h1>1) Auditoría y definición de stack tecnológico</h1>
      <p>
        Analizamos el framework actual de Tuio y proponemos el stack ideal para
        crecimiento estable, rendimiento y SEO. Antes de decidir, es importante
        comprender los riesgos de depender completamente de plataformas cerradas y
        valorar soluciones híbridas que ofrezcan flexibilidad y control.
      </p>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {options.map((opt) => (
          <button
            key={opt.key}
            onClick={() => setActive(opt.key)}
            style={{
              padding: '10px 16px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              background: active === opt.key ? 'var(--accent)' : 'rgba(0, 195, 176, 0.1)',
              color: active === opt.key ? '#fff' : 'var(--accent-dark)',
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <div className="card">
        <h3>{current.title}</h3>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          {current.bullets.map((b, i) => (
            <li key={i} style={{ marginBottom: '6px' }}>{b}</li>
          ))}
        </ul>
        <pre style={{ whiteSpace: 'pre-wrap', marginTop: '16px', color: '#a2b2c8', fontSize: '15px' }}>{current.diagram}</pre>
        <p style={{ marginTop: '18px', color: '#94a3b8' }}>
          <strong>Entregable:</strong> informe detallado con la arquitectura recomendada, plan de
          implementación y listado de dependencias y herramientas sugeridas.
        </p>
      </div>
      {/* Mostrar la opción seleccionada para reforzar la elección */}
      <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#6b7280' }}>
        Opción seleccionada:&nbsp;
        <strong style={{ color: 'var(--accent-dark)' }}>{current.label}</strong>
      </p>
      <NavigationButtons prev="/overview" next="/audits" />
    </section>
  );
}
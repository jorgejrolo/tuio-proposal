import { useState } from 'react';
import { useRouter } from 'next/router';

/**
 * Pricing and selection page. Here the user can elegir cada
 * servicio por separado o contratar un pack con descuento. El total
 * se calcula automáticamente y se aplica un 15% de descuento si
 * se seleccionan las cuatro fases principales (sin mantenimiento) y
 * un 20% si además se contrata el mantenimiento SEO durante 12 meses.
 */
export default function Investment() {
  const router = useRouter();
  // Precios base de cada servicio (IVA no incluido)
  const PRICE_STACK = 750;
  const PRICE_SEO = 1550;
  const PRICE_MIGRATION = 2320;
  const PRICE_TRAVEL = 950;
  const PRICE_ONGOING = 1200 * 12; // 12 meses de mantenimiento

  const [services, setServices] = useState({
    stack: true,
    seo: true,
    migration: true,
    travel: true,
    ongoing: false,
  });

  // Maneja el cambio de selección de un servicio
  const toggle = (key) => {
    setServices((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Calcula el total aplicando descuentos según la selección
  const calculateTotal = () => {
    const sel = services;
    let subtotal = 0;
    if (sel.stack) subtotal += PRICE_STACK;
    if (sel.seo) subtotal += PRICE_SEO;
    if (sel.migration) subtotal += PRICE_MIGRATION;
    if (sel.travel) subtotal += PRICE_TRAVEL;
    if (sel.ongoing) subtotal += PRICE_ONGOING;
    let discount = 0;
    const fourSelected = sel.stack && sel.seo && sel.migration && sel.travel;
    if (fourSelected && sel.ongoing) {
      discount = subtotal * 0.20;
    } else if (fourSelected && !sel.ongoing) {
      discount = subtotal * 0.15;
    }
    const total = subtotal - discount;
    return { subtotal, discount, total };
  };

  const { subtotal, discount, total } = calculateTotal();

  // Determina el plan para la página de confirmación
  const determinePlanKey = () => {
    const sel = services;
    const fourSelected = sel.stack && sel.seo && sel.migration && sel.travel;
    if (fourSelected && sel.ongoing) return 'pack4plus';
    if (fourSelected && !sel.ongoing) return 'pack4';
    return 'individual';
  };

  const handleContinue = () => {
    const planKey = determinePlanKey();
    // Pasamos los servicios seleccionados para el correo final
    const selectedKeys = Object.entries(services)
      .filter(([k, v]) => v)
      .map(([k]) => k)
      .join(',');
    router.push(`/success?plan=${planKey}&services=${encodeURIComponent(selectedKeys)}`);
  };

  return (
    <section className="reveal" style={{ paddingBottom: '180px' }}>
      <h1>Inversión y selección de servicios</h1>
      <p>
        Selecciona los servicios que deseas contratar. Puedes elegir cada fase
        de manera individual o beneficiarte de descuentos al contratar todas las
        fases juntas. Si seleccionas las cuatro fases principales, se aplicará un
        <strong> 15% de descuento</strong>. Al añadir el mantenimiento SEO
        mensual (12 meses) el descuento asciende a un <strong>20%</strong>.
      </p>
      <div className="grid" style={{ marginTop: '30px' }}>
        {/* Auditoría de stack */}
        <div className="col-6">
          <div className="card" style={{ position: 'relative' }}>
            <input
              type="checkbox"
              id="stack"
              checked={services.stack}
              onChange={() => toggle('stack')}
              style={{ position: 'absolute', top: '16px', right: '16px' }}
            />
            <h3>Auditoría de stack</h3>
            <p>Duración: 2 semanas</p>
            <p>Inventario de tecnología y definición del stack óptimo.</p>
            <p><strong>Precio:</strong> 750 €</p>
          </div>
        </div>
        {/* Auditoría SEO & IA */}
        <div className="col-6">
          <div className="card" style={{ position: 'relative' }}>
            <input
              type="checkbox"
              id="seo"
              checked={services.seo}
              onChange={() => toggle('seo')}
              style={{ position: 'absolute', top: '16px', right: '16px' }}
            />
            <h3>Auditoría SEO & IA</h3>
            <p>Duración: 4 semanas</p>
            <p>Análisis técnico, de contenidos, keywords y GEO.</p>
            <p><strong>Precio:</strong> 1.550 €</p>
          </div>
        </div>
        {/* Migración SEO */}
        <div className="col-6">
          <div className="card" style={{ position: 'relative' }}>
            <input
              type="checkbox"
              id="migration"
              checked={services.migration}
              onChange={() => toggle('migration')}
              style={{ position: 'absolute', top: '16px', right: '16px' }}
            />
            <h3>Migración SEO</h3>
            <p>Duración: 6 semanas</p>
            <p>Ejecución de la checklist de migración: preparación, desarrollo, QA y lanzamiento.</p>
            <p><strong>Precio:</strong> 2.320 €</p>
          </div>
        </div>
        {/* Lanzamiento Travel */}
        <div className="col-6">
          <div className="card" style={{ position: 'relative' }}>
            <input
              type="checkbox"
              id="travel"
              checked={services.travel}
              onChange={() => toggle('travel')}
              style={{ position: 'absolute', top: '16px', right: '16px' }}
            />
            <h3>Lanzamiento Travel</h3>
            <p>Duración: 4 semanas</p>
            <p>Investigación, diseño de arquitectura, producción y lanzamiento del vertical.</p>
            <p><strong>Precio:</strong> 950 €</p>
          </div>
        </div>
        {/* Ongoing SEO */}
        <div className="col-12">
          <div className="card" style={{ position: 'relative' }}>
            <input
              type="checkbox"
              id="ongoing"
              checked={services.ongoing}
              onChange={() => toggle('ongoing')}
              style={{ position: 'absolute', top: '16px', right: '16px' }}
            />
            <h3>Mantenimiento SEO (opcional)</h3>
            <p>Servicio mensual durante 12 meses: auditorías continuas, optimización de contenidos, link building y reporting.</p>
            <p><strong>Precio:</strong> 1.200 € / mes (14.400 € por 12 meses)</p>
          </div>
        </div>
      </div>
      {/* Sticky summary bar */}
      <div className="sticky-summary">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: 600 }}>Subtotal:
            &nbsp;{subtotal.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
          </span>
          {discount > 0 && (
            <span style={{ fontWeight: 600 }}>Descuento: –{discount.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</span>
          )}
          <span style={{ fontWeight: 700 }}>Total: {total.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</span>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn ghost" onClick={() => router.push('/kpis')}>Anterior</button>
          <button className="btn primary" onClick={handleContinue}>Siguiente</button>
        </div>
      </div>
    </section>
  );
}
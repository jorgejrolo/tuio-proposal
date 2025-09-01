import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * Final page with the call to action. Summarises the propuesta
 * and ofrece dos opciones: aceptar (envía un correo) o agendar
 * una reunión. Tras enviar el correo de aceptación se redirige
 * a la página de confirmación.
 */
export default function NextSteps() {
  const router = useRouter();
  const { plan, services } = router.query;
  // Mapeo de precios y nombres para servicios individuales
  const serviceCatalog = {
    stack: { name: 'Auditoría de stack', price: 750 },
    seo: { name: 'Auditoría SEO & IA', price: 1550 },
    migration: { name: 'Migración SEO', price: 2320 },
    travel: { name: 'Lanzamiento Travel', price: 950 },
    ongoing: { name: 'Mantenimiento SEO (12 meses)', price: 1200 * 12 },
  };
  // Define paquetes predefinidos
  const plans = {
    pack4: { name: 'Pack 4 fases (–15%)', price: 4734.5 },
    pack4plus: { name: 'Pack 4 fases + 12 meses (–20%)', price: 15980 },
  };
  let selectedPlan = null;
  let individualSummary = null;
  if (plan === 'pack4' || plan === 'pack4plus') {
    selectedPlan = plans[plan];
  } else {
    // Construir resumen individual
    if (services) {
      const keys = String(services).split(',');
      const selectedServices = keys.map((k) => serviceCatalog[k]).filter(Boolean);
      const subtotal = selectedServices.reduce((sum, s) => sum + s.price, 0);
      // Verificar si se aplicó descuento (lo calculamos igual que en investment)
      const fourSelected = ['stack', 'seo', 'migration', 'travel'].every((k) => keys.includes(k));
      let discount = 0;
      if (fourSelected && keys.includes('ongoing')) {
        discount = subtotal * 0.20;
      } else if (fourSelected) {
        discount = subtotal * 0.15;
      }
      const total = subtotal - discount;
      individualSummary = {
        services: selectedServices,
        subtotal,
        discount,
        total,
      };
    }
  }
  const handleAccept = () => {
    const subject = encodeURIComponent('Aceptación de propuesta Tuio');
    let bodyLines = [];
    bodyLines.push('Hola Jorge,');
    bodyLines.push('');
    if (selectedPlan) {
      bodyLines.push(`Acepto la propuesta con la opción "${selectedPlan.name}" por un importe de ${selectedPlan.price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}.`);
    } else if (individualSummary) {
      bodyLines.push('Acepto la propuesta con las siguientes fases:');
      individualSummary.services.forEach((s) => {
        bodyLines.push(`- ${s.name}: ${s.price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}`);
      });
      if (individualSummary.discount > 0) {
        bodyLines.push(`Descuento aplicado: -${individualSummary.discount.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}`);
      }
      bodyLines.push(`Total estimado: ${individualSummary.total.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}`);
    } else {
      bodyLines.push('Acepto la propuesta.');
    }
    bodyLines.push('');
    bodyLines.push('Gracias.');
    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:hola@jorgejrolo.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      window.location.href = '/confirmacion';
    }, 100);
  };
  return (
    <section className="reveal" style={{ textAlign: 'center' }}>
      <h1>Próximos pasos</h1>
      {selectedPlan ? (
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '36px', marginBottom: '12px' }}>🤝</div>
          <p style={{ marginBottom: '8px' }}>Has seleccionado:</p>
          <h3 style={{ margin: '0 0 12px' }}>{selectedPlan.name}</h3>
          <p style={{ fontWeight: 700 }}>{selectedPlan.price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</p>
        </div>
      ) : individualSummary ? (
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '36px', marginBottom: '12px' }}>🤝</div>
          <p style={{ marginBottom: '8px' }}>Has seleccionado las siguientes fases:</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {individualSummary.services.map((s) => (
              <li key={s.name} style={{ marginBottom: '4px' }}>
                {s.name}: {s.price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
              </li>
            ))}
          </ul>
          {individualSummary.discount > 0 && (
            <p style={{ marginTop: '8px' }}>Descuento aplicado: -{individualSummary.discount.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</p>
          )}
          <p style={{ fontWeight: 700, marginTop: '8px' }}>Total estimado: {individualSummary.total.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</p>
        </div>
      ) : (
        <p>No has seleccionado ninguna opción en la pantalla anterior. Puedes aceptar la propuesta o regresar para elegir un plan.</p>
      )}
      <p>
        Si la propuesta cumple tus expectativas y quieres iniciar el proyecto,
        puedes aceptarla oficialmente o, si prefieres, agendar una reunión para
        resolver dudas y ajustar detalles.
      </p>
      <div className="hero-cta" style={{ justifyContent: 'center' }}>
        <button className="btn primary" onClick={handleAccept}>Aceptar propuesta</button>
        <Link href="/agenda" legacyBehavior>
          <a className="btn">Agendar reunión</a>
        </Link>
      </div>
      <div style={{ marginTop: '40px' }}>
        <a className="btn ghost" href={`/success?plan=${plan || ''}&services=${services || ''}`}>Anterior</a>
      </div>
    </section>
  );
}
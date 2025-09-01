/**
 * Page presenting the investment plans. It outlines the cost and
 * duración de cada fase y ofrece paquetes con descuentos para
 * incentivar la contratación integral y el plan de 12 meses.
 */
export default function Investment() {
  const plans = [
    {
      name: 'Fases por separado',
      price: '5.570 €',
      description: 'Contratación independiente de las cuatro fases. Duración total de 16 semanas.',
      details: ['Auditoría de stack', 'Auditoría SEO & IA', 'Migración a Lovable', 'Lanzamiento Travel'],
    },
    {
      name: 'Pack 4 fases (–15%)',
      price: '4.735 €',
      description: 'Precio especial al contratar las cuatro fases en conjunto.',
      details: ['Todas las auditorías y migración', 'Lanzamiento Travel', 'Informe final y formación'],
    },
    {
      name: 'Pack 4 fases + 12 meses (–20%)',
      price: '15.980 €',
      description: 'Incluye las cuatro fases y el servicio SEO ongoing durante 12 meses.',
      details: ['Fases completas', 'Mantenimiento SEO mensual', 'Reuniones y reporting continuos'],
    },
  ];
  return (
    <section>
      <h1>Plan de inversión</h1>
      <p>
        A continuación se detallan las opciones de inversión. Los precios
        incluyen impuestos y pueden ser ajustados según alcance final.
      </p>
      <div className="pricing" style={{ marginTop: '32px' }}>
        {plans.map((plan, index) => (
          <div key={index} className="plan">
            <h4>{plan.name}</h4>
            <div className="price">{plan.price}</div>
            <p>{plan.description}</p>
            <ul>
              {plan.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '28px', color: '#94a3b8' }}>
        <strong>Opcional:</strong> servicio SEO ongoing por separado a 1.200 €/mes.
      </p>
    </section>
  );
}
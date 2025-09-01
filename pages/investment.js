/**
 * Page presenting the investment plans. It outlines the cost and
 * duración de cada fase y ofrece paquetes con descuentos para
 * incentivar la contratación integral y el plan de 12 meses.
 */
import { useRouter } from 'next/router';
import NavigationButtons from '../components/NavigationButtons';

export default function Investment() {
  const router = useRouter();
  const plans = [
    {
      key: 'individual',
      name: 'Fases por separado',
      price: '5.570 €',
      description: 'Contratación independiente de las cuatro fases. Duración total de 16 semanas.',
      details: ['Auditoría de stack', 'Auditoría SEO & IA', 'Migración a Lovable', 'Lanzamiento Travel'],
    },
    {
      key: 'pack4',
      name: 'Pack 4 fases (–15%)',
      price: '4.735 €',
      description: 'Precio especial al contratar las cuatro fases en conjunto.',
      details: ['Todas las auditorías y migración', 'Lanzamiento Travel', 'Informe final y formación'],
    },
    {
      key: 'pack4plus',
      name: 'Pack 4 fases + 12 meses (–20%)',
      price: '15.980 €',
      description: 'Incluye las cuatro fases y el servicio SEO ongoing durante 12 meses.',
      details: ['Fases completas', 'Mantenimiento SEO mensual', 'Reuniones y reporting continuos'],
    },
  ];
  const selectPlan = (key) => {
    router.push(`/next?plan=${key}`);
  };
  return (
    <section>
      <h1>Plan de inversión</h1>
      <p>
        Elige la opción que mejor se adapte a tus necesidades. Los precios incluyen
        los servicios descritos y pueden ajustarse según el alcance final.
      </p>
      <div className="pricing" style={{ marginTop: '32px' }}>
        {plans.map((plan, index) => (
          <div key={index} className="plan" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4>{plan.name}</h4>
              <div className="price">{plan.price}</div>
              <p>{plan.description}</p>
              <ul>
                {plan.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
            <button
              className="btn primary"
              style={{ marginTop: '16px', alignSelf: 'flex-start' }}
              onClick={() => selectPlan(plan.key)}
            >
              Elegir
            </button>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '28px', color: '#6b7280' }}>
        <strong>Opcional:</strong> servicio SEO ongoing por separado a 1.200 €/mes.
      </p>
      <NavigationButtons prev="/kpis" next="/success" />
    </section>
  );
}
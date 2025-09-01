import Link from 'next/link';
import { useRouter } from 'next/router';
import NavigationButtons from '../components/NavigationButtons';

/**
 * Final page with the call to action. Summarises the propuesta
 * and ofrece dos opciones: aceptar (envía un correo) o agendar
 * una reunión. Tras enviar el correo de aceptación se redirige
 * a la página de confirmación.
 */
export default function NextSteps() {
  const router = useRouter();
  const { plan } = router.query;
  const plans = {
    individual: { name: 'Fases por separado', price: '5.570 €' },
    pack4: { name: 'Pack 4 fases (–15%)', price: '4.735 €' },
    pack4plus: { name: 'Pack 4 fases + 12 meses (–20%)', price: '15.980 €' },
  };
  const selected = plan && plans[plan] ? plans[plan] : null;
  const handleAccept = () => {
    // Construir correo con el plan seleccionado
    const subject = encodeURIComponent('Aceptación de propuesta Tuio');
    const body = encodeURIComponent(
      `Hola Jorge,\n\nAcepto la propuesta para Tuio${selected ? ` con la opción "${selected.name}" (${selected.price}).` : ''}.\n\nGracias.`
    );
    window.location.href = `mailto:hola@jorgejrolo.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      window.location.href = '/confirmacion';
    }, 100);
  };
  return (
    <section style={{ textAlign: 'center' }}>
      <h1>Próximos pasos</h1>
      <p>
        {selected ? (
          <>Has seleccionado: <strong>{selected.name}</strong> ({selected.price}).</>
        ) : (
          <>No has seleccionado ninguna opción en la pantalla anterior. Puedes aceptar la propuesta o regresar para elegir un plan.</>
        )}
      </p>
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
      <NavigationButtons prev="/success" next={null} />
    </section>
  );
}
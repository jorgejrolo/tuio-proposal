import Link from 'next/link';

/**
 * Final page with the call to action. Summarises the propuesta
 * and ofrece dos opciones: aceptar (envía un correo) o agendar
 * una reunión. Tras enviar el correo de aceptación se redirige
 * a la página de confirmación.
 */
export default function NextSteps() {
  const handleAccept = () => {
    const mailto = 'mailto:hola@jorgejrolo.com?subject=Aceptación%20de%20propuesta%20Tuio&body=Hola%20Jorge,%0D%0A%0D%0AAcepto%20la%20propuesta%20para%20Tuio%20según%20los%20términos%20indicados.%0D%0A%0D%0AGracias,%0D%0A';
    window.location.href = mailto;
    // después de un pequeño delay navegamos a confirmación
    setTimeout(() => {
      window.location.href = '/confirmacion';
    }, 100);
  };
  return (
    <section style={{ textAlign: 'center' }}>
      <h1>Próximos pasos</h1>
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
    </section>
  );
}
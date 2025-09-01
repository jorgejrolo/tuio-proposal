/**
 * Confirmation page displayed after the user accepts the
 * proposal. It thanks them and provides a brief next step.
 */
export default function Confirmacion() {
  return (
    <section style={{ textAlign: 'center' }}>
      <h1>¡Gracias por aceptar la propuesta!</h1>
      <p>
        Hemos recibido tu aceptación. En breve me pondré en contacto
        contigo para coordinar las siguientes acciones y comenzar con
        el proyecto.
      </p>
    </section>
  );
}
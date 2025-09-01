import { useState } from 'react';

/**
 * Agenda page for scheduling a meeting. Shows a simple form
 * where the user can pick a date and time between 17:00 and 21:00.
 * Upon submission it opens a preformatted email to Jorge and
 * displays a thank you message.
 */
export default function Agenda() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time) return;
    const subject = encodeURIComponent('Solicitud de reunión Tuio');
    const body = encodeURIComponent(`Hola Jorge,\n\nMe gustaría agendar una reunión el ${date} a las ${time}.\n\nGracias.`);
    window.location.href = `mailto:hola@jorgejrolo.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>Agendar reunión</h1>
      {!submitted ? (
        <>
          <p>
            Selecciona la fecha y la hora en la que prefieres mantener la reunión.
            Las reuniones están disponibles de lunes a viernes entre las 17:00 y las 21:00.
          </p>
          <form onSubmit={handleSubmit} className="agenda-form">
            <div className="form-group">
              <label htmlFor="date">Fecha:</label>
              <input
                type="date"
                id="date"
                value={date}
                min={today}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Hora:</label>
              <input
                type="time"
                id="time"
                value={time}
                min="17:00"
                max="21:00"
                step="900"
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn primary">Solicitar reunión</button>
          </form>
        </>
      ) : (
        <p>
          Gracias por tu solicitud. Se ha generado un email con la información de
          la reunión. Nos pondremos en contacto contigo para confirmar la cita.
        </p>
      )}
    </section>
  );
}
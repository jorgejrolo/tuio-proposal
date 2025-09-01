import { useState } from 'react';
import NavigationButtons from '../components/NavigationButtons';

/**
 * Agenda page for scheduling a meeting. Shows a simple form
 * where the user can pick a date and time between 17:00 and 21:00.
 * Upon submission it opens a preformatted email to Jorge and
 * displays a thank you message.
 */
export default function Agenda() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('30');
  const [submitted, setSubmitted] = useState(false);

  const handleDateChange = (e) => {
    const value = e.target.value;
    const day = new Date(value).getDay();
    if (day === 0 || day === 6) {
      alert('Por favor selecciona un día entre lunes y viernes');
      setDate('');
    } else {
      setDate(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time || !duration) return;
    const subject = encodeURIComponent('Solicitud de reunión Tuio');
    const formattedDate = new Date(date).toLocaleDateString('es-ES');
    const durText = duration === '30' ? '30 minutos' : '1 hora';
    const body = encodeURIComponent(
      `Hola Jorge,\n\nMe gustaría agendar una reunión el ${formattedDate} a las ${time} con una duración de ${durText}.\n\nGracias.`
    );
    window.location.href = `mailto:hola@jorgejrolo.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const today = new Date().toISOString().split('T')[0];

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 17; hour <= 21; hour++) {
      const h = String(hour).padStart(2, '0');
      slots.push(`${h}:00`);
      if (hour < 21) slots.push(`${h}:30`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

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
                onChange={handleDateChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Hora:</label>
              <select
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="">Selecciona la hora</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="duration">Duración:</label>
              <select
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
              >
                <option value="30">30 minutos</option>
                <option value="60">1 hora</option>
              </select>
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
      <NavigationButtons prev="/next" next={null} />
    </section>
  );
}
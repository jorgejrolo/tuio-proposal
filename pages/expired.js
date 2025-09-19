import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function ExpiredProposal() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Crear el cuerpo del email
    const emailBody = `
Solicitud de acceso a propuesta caducada

Email del solicitante: ${email}
Mensaje: ${message || 'Sin mensaje adicional'}
Fecha de solicitud: ${new Date().toLocaleDateString('es-ES')}
    `.trim();

    // Crear el enlace mailto
    const subject = 'Solicitud de acceso a propuesta TUIO';
    const mailtoLink = `mailto:hola@jorgejrolo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Abrir el cliente de email
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const currentDate = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Head>
        <title>Propuesta Caducada - TUIO × Jorge J. Rolo</title>
        <meta name="description" content="Esta propuesta ha caducado y ya no está disponible públicamente." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        padding: '20px'
      }}>
        <div style={{
          maxWidth: '600px',
          width: '100%',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          {/* Header con imagen */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '40px 30px',
            textAlign: 'center',
            color: 'white'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'white',
              borderRadius: '50%',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px'
            }}>
              ⏰
            </div>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '700',
              margin: '0 0 10px 0'
            }}>
              Propuesta Caducada
            </h1>
            <p style={{
              fontSize: '16px',
              opacity: 0.9,
              margin: 0
            }}>
              Fecha de caducidad: {currentDate}
            </p>
          </div>

          {/* Contenido principal */}
          <div style={{ padding: '40px 30px' }}>
            <div style={{
              background: '#fff3cd',
              border: '1px solid #ffeaa7',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '30px'
            }}>
              <h2 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#856404',
                margin: '0 0 10px 0'
              }}>
                Aviso Importante
              </h2>
              <p style={{
                color: '#856404',
                margin: 0,
                lineHeight: 1.6
              }}>
                Esta propuesta ha finalizado y ya no está disponible para visualización pública.
                El contenido ha sido restringido y solo es accesible mediante acceso privado autorizado.
              </p>
            </div>

            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '15px',
              color: '#333'
            }}>
              ¿Deseas continuar con la propuesta?
            </h3>

            <p style={{
              color: '#666',
              lineHeight: 1.6,
              marginBottom: '25px'
            }}>
              Si necesitas acceder al contenido de esta propuesta, ponte en contacto con el administrador
              a través del siguiente formulario. Se evaluará tu solicitud y se podrá habilitar un acceso
              privado con nueva fecha de caducidad.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontWeight: '500',
                    marginBottom: '8px',
                    color: '#333'
                  }}>
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="tu@email.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e1e5e9',
                      borderRadius: '8px',
                      fontSize: '16px',
                      transition: 'border-color 0.3s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                  />
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{
                    display: 'block',
                    fontWeight: '500',
                    marginBottom: '8px',
                    color: '#333'
                  }}>
                    Mensaje (opcional)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Explica brevemente por qué necesitas acceso a esta propuesta..."
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e1e5e9',
                      borderRadius: '8px',
                      fontSize: '16px',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.3s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    background: isSubmitting ? '#ccc' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    transform: isSubmitting ? 'none' : 'translateY(0)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar Acceso'}
                </button>
              </form>
            ) : (
              <div style={{
                background: '#d4edda',
                border: '1px solid #c3e6cb',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '40px',
                  marginBottom: '15px'
                }}>
                  ✅
                </div>
                <h3 style={{
                  color: '#155724',
                  margin: '0 0 10px 0',
                  fontSize: '18px',
                  fontWeight: '600'
                }}>
                  Solicitud Enviada
                </h3>
                <p style={{
                  color: '#155724',
                  margin: 0,
                  lineHeight: 1.6
                }}>
                  Tu solicitud ha sido enviada al administrador. Recibirás una respuesta
                  en tu correo electrónico en las próximas 24-48 horas.
                </p>
              </div>
            )}

            {/* Información de contacto */}
            <div style={{
              marginTop: '30px',
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{
                margin: '0 0 10px 0',
                color: '#666',
                fontSize: '14px'
              }}>
                Contacto directo del administrador:
              </p>
              <a
                href="mailto:hola@jorgejrolo.com"
                style={{
                  color: '#667eea',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                hola@jorgejrolo.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
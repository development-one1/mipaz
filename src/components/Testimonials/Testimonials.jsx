
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      name: "María",
      age: "28 años",
      country: "España",
      text: "“Gracias a la terapia he aprendido a entender mis emociones y a manejar mi ansiedad. Me siento más en paz conmigo misma.”",
      // Puedes poner rutas a imágenes reales aquí. Si se deja vacío, mostrará la inicial.
      avatarUrl: "" 
    },
    {
      name: "Daniela",
      age: "32 años",
      country: "Alemania",
      text: "“Un espacio seguro donde puedo hablar sin miedo y sentirme comprendida. Totalmente recomendada.”",
      avatarUrl: ""
    },
    {
      name: "Carlos",
      age: "35 años",
      country: "Países Bajos",
      text: "“Me ayudó muchísimo en mi proceso de adaptación en otro país y a reencontrar mi propósito.”",
      avatarUrl: ""
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <p className="section-subtitle">TESTIMONIOS</p>
        <h2 className="testimonials-title">Lo que dicen mis pacientes</h2>
        
        {/* Detalle decorativo de la hojita central */}
        <div className="testimonials-decor-leaf">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca98c" strokeWidth="1.5">
            <path d="M12 2C12 2 7 7 7 12.5C7 15.5 9.2 18 12 18C14.8 18 17 15.5 17 12.5C17 7 12 2 12 2Z" />
          </svg>
        </div>
      </div>

      {/* Contenedor adaptativo */}
      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            {/* Comillas estéticas gigantes de la esquina superior */}
            <div className="quote-mark">“</div>
            
            <p className="testimonial-text">
              {item.text}
            </p>

            <div className="testimonial-user">
              <div className="avatar-container">
                {item.avatarUrl ? (
                  <img src={item.avatarUrl} alt={item.name} className="avatar-img" />
                ) : (
                  <div className="avatar-fallback">{item.name.charAt(0)}</div>
                )}
              </div>

              <div className="user-meta">
                <strong className="user-name">{item.name}, {item.age}</strong>
                <p className="user-country">{item.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores de navegación inferiores (Dots) */}
      <div className="testimonials-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
}
import "./Services.css";

export default function Services() {
  const items = [
    { title: "Ansiedad y estrés", desc: "Aprende a gestionar la ansiedad y la preocupación constante." },
    { title: "Autoestima y confianza", desc: "Fortalece tu amor propio, seguridad y confianza en ti mismo." },
    { title: "Migración y adaptación", desc: "Acompañamiento en procesos de cambio, duelo y adaptación." },
    { title: "Gestión emocional", desc: "Reconoce, comprende y regula tus emociones de forma saludable." },
    { title: "Crecimiento personal", desc: "Terapia para tu desarrollo personal y propósito de vida." }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <span className="section-label">¿Cómo puedo ayudarte?</span>
        <h2 className="section-title">Áreas de acompañamiento</h2>
        
        <div className="services-grid">
          {items.map((item, index) => (
            <div key={index} className={`service-card ${item.highlighted ? 'highlight-red' : ''}`}>
              <div className="service-icon-circle">
                <span>🍃</span>
              </div>
              <h3 className="service-card-title">{item.title}</h3>
              <p className="service-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
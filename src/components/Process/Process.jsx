import "./process.css";

export default function Process() {
  return (
    <section className="process-section">
      <div className="container">
        <span className="section-label">¿CÓMO FUNCIONA?</span>
        <h2 className="section-title">Tu proceso en 3 pasos</h2>
        
        <div className="process-steps">
          <div className="step-item">
            <span className="step-number">1</span>
            <div className="step-icon">📅</div>
            <h3>Agenda tu consulta</h3>
            <p>Escríbeme por WhatsApp o completa el formulario para agendar tu sesión.</p>
          </div>

          <div className="step-item step-red-blurred">
            <span className="step-number">2</span>
            <div className="step-icon">🔒</div>
            <h3>Primera Sesión</h3>
            <p>Evaluación y definición de objetivos del tratamiento.</p>
            <div className="red-scratch"></div> {/* El tachón rojo de la imagen */}
          </div>

          <div className="step-item">
            <span className="step-number">3</span>
            <div className="step-icon">🤍</div>
            <h3>Acompañamiento</h3>
            <p>Diseñaremos juntas un plan terapéutico personalizado para ti.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
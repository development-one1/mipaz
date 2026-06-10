import "./Hero.css";
// 1. Importa tu imagen (asegúrate de que la ruta a tu carpeta de assets sea la correcta)


export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        

        {/* CONTENIDO DE TEXTO */}
        <div className="hero-content">
          <h1 className="hero-title">
            Tu bienestar emocional merece{" "}
            <span className="italic-text text-olive">un espacio seguro</span>
          </h1>

          <p className="hero-description">
            Acompañamiento psicológico online para ayudarte a gestionar lo que sientes, 
            entenderte y vivir con más calma, claridad y bienestar.
          </p>

          <div className="hero-actions">
            <button className="btn btn-outline">
              Agenda tu sesión
            </button>
          </div>

          <p className="hero-subtext">
            🌐 Sesiones online para hispanohablantes en Europa y el mundo.
          </p>
        </div>

      </div>
    </section>
  );
}
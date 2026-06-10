// Nota: Asegúrate de tener instalada la librería 'lucide-react' o usa tus propios componentes de iconos.
import { MessageCircle,  Phone } from 'lucide-react';
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container" id="contacto">
      {/* 1. SECCIÓN SUPERIOR: CTA VERDE */}
      <div className="footer-cta-banner">
        {/* Aquí puedes meter la imagen de las hojas usando un tag img o por CSS background */}
        <div className="banner-leaves-decor"></div>
        
        <div className="banner-content">
          <span className="banner-subtitle">ESTÁS A UN PASO</span>
          <h2 className="banner-title">Dar el primer paso<br className="mobile-break" /> también es parte del proceso</h2>
          
          <div className="banner-actions">
            <a href="https://wa.me/34600000000" className="btn-filled" target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Escríbeme por WhatsApp
            </a>
            <a href="#" className="btn-outlined">
              Agenda tu sesión
            </a>
          </div>
        </div>
      </div>

      {/* 2. SECCIÓN MEDIA: LOGO Y CONTACTO */}
      <div className="footer-middle">
        <div className="footer-brand">
          <div className="brand-logo-icon">
            {/* Simulación del isotipo de la hoja */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C12 2 7 7 7 12.5C7 15.5 9.2 18 12 18C14.8 18 17 15.5 17 12.5C17 7 12 2 12 2Z" />
              <path d="M12 2V18" />
            </svg>
          </div>
          <div>
            <h3 className="brand-name">Mi Paz</h3>
            <p className="brand-tagline">PSICOLOGÍA & BIENESTAR</p>
          </div>
        </div>

        <div className="footer-info">
          <p>Acompañamiento psicológico online<br />para hispanohablantes en Europa y el mundo.</p>
        </div>

        <div className="footer-socials">
          <a href="#" className="social-link">
            
            <span>@mipaz_______</span>
          </a>
          <a href="#" className="social-link">
            <Phone size={18} />
            <span>+34 600 000 000</span>
          </a>
        </div>
      </div>

      {/* 3. SECCIÓN INFERIOR: LEGALES Y COPYRIGHT */}
      <div className="footer-bottom">
        <div className="footer-legal-links">
          <a href="#">Política de privacidad</a>
          <a href="#">Términos y condiciones</a>
        </div>
        <div className="footer-copyright">
          <p>© 2026 Mi Paz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

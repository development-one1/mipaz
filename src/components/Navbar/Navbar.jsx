import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-header">
      <div className="container navbar-container">

        <a href="#" className="navbar-logo">
          Mi Paz <span>PSICOLOGÍA & BIENESTAR</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <nav className={`navbar-links ${isOpen ? "active" : ""}`}>
          <div className="nav-menu-items">
            <a href="#" onClick={() => setIsOpen(false)}>Inicio</a>
            <a href="#" onClick={() => setIsOpen(false)}>Sobre mí</a>
            <a href="#" onClick={() => setIsOpen(false)}>Servicios</a>
            <a href="#" onClick={() => setIsOpen(false)}>Contacto</a>
          </div>

          <div className="nav-mobile-extra">
            <hr className="nav-divider" />

            <p className="extra-text">
              📍 Sesiones Online (Europa y Latam)
            </p>

            <p className="extra-text">
              ✉️ contacto@mipaz.com
            </p>

            <div className="nav-mobile-socials">
              <a href="#" target="_blank" rel="noreferrer">
                Instagram
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </nav>

      </div>
    </header>
  );
}
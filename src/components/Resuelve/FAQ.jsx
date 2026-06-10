import { useState } from 'react';
import './FAQ.css'; // Asegúrate de importar el archivo CSS

export default function FAQ() {
  // Estado para controlar qué pregunta está abierta (guarda el índice)
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    // Si la pregunta ya estaba abierta, la cierra; si no, abre la nueva
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Cómo funciona la terapia online?",
      answer: "Las sesiones se realizan de forma virtual a través de videollamadas en una plataforma segura, garantizando comodidad y flexibilidad desde donde te encuentres."
    },
    {
      question: "¿La terapia es confidencial?",
      answer: "Sí, absolutamente. Todo lo que se habla en las sesiones está protegido por el secreto profesional y un estricto código ético."
    },
    {
      question: "¿Cuánto dura una sesión?",
      answer: "Cada sesión de terapia individual tiene una duración aproximada de 50 minutos."
    },
    {
      question: "¿Cómo puedo agendar una sesión?",
      answer: "Puedes hacerlo haciendo clic en cualquiera de los botones de 'Agenda tu sesión' o enviándome un mensaje directo por WhatsApp."
    },
    {
      question: "¿Con qué frecuencia son las sesiones?",
      answer: "Al inicio, se recomienda una frecuencia semanal para establecer el proceso. Con el tiempo y según tu evolución, las sesiones se pueden espaciar a quincenales."
    },
    {
      question: "¿Trabajas con hispanohablantes en Europa?",
      answer: "Sí, acompaño de forma online a personas de habla hispana que residen en cualquier país de Europa y del resto del mundo."
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-header">
        <span className="section-subtitle">PREGUNTAS FRECUENTES</span>
        <h2 className="faq-title">Resuelve tus dudas</h2>
        
        {/* Pequeño detalle decorativo de la hojita central */}
        <div className="faq-decor-leaf">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca98c" strokeWidth="1.5">
            <path d="M12 2C12 2 7 7 7 12.5C7 15.5 9.2 18 12 18C14.8 18 17 15.5 17 12.5C17 7 12 2 12 2Z" />
          </svg>
        </div>
      </div>

      <div className="faq-grid-container">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              className={`faq-item ${isOpen ? 'active' : ''}`} 
              key={index}
            >
              <button 
                className="faq-question-btn" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                {/* Flecha dinámica en formato SVG */}
                <svg 
                  className={`faq-arrow-icon ${isOpen ? 'rotate' : ''}`} 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              <div className={`faq-answer-wrapper ${isOpen ? 'show' : ''}`}>
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
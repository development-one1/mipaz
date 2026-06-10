export default function FAQ() {
  const faqs = [
    {
      question: "¿Cómo funciona la terapia online?",
      answer:
        "Las sesiones se realizan por videollamada en un espacio seguro y privado."
    },
    {
      question: "¿Cuánto dura una sesión?",
      answer:
        "Cada sesión tiene una duración aproximada de 50 minutos."
    },
    {
      question: "¿La terapia es confidencial?",
      answer:
        "Sí. Todo el proceso es completamente confidencial."
    },
    {
      question: "¿Cómo puedo reservar?",
      answer:
        "Puedes escribirme por WhatsApp o agendar directamente una sesión."
    }
  ];

  return (
    <section className="faq">
      <p className="section-subtitle">
        PREGUNTAS FRECUENTES
      </p>

      <h2>Resuelve tus dudas</h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
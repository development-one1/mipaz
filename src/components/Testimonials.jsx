export default function Testimonials() {
  const testimonials = [
    {
      name: "María",
      age: "28 años",
      country: "España",
      text: "Gracias a la terapia aprendí a entender mis emociones y manejar mi ansiedad."
    },
    {
      name: "Daniela",
      age: "32 años",
      country: "Alemania",
      text: "Un espacio seguro donde pude hablar sin miedo y sentirme comprendida."
    },
    {
      name: "Carlos",
      age: "35 años",
      country: "Países Bajos",
      text: "Me ayudó muchísimo en mi proceso de adaptación y crecimiento."
    }
  ];

  return (
    <section className="testimonials">
      <p className="section-subtitle">
        TESTIMONIOS
      </p>

      <h2>Lo que dicen mis pacientes</h2>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">
              {item.text}
            </p>

            <div className="testimonial-user">
              <div className="avatar">
                {item.name.charAt(0)}
              </div>

              <div>
                <strong>
                  {item.name}
                </strong>
                <p>
                  {item.age} · {item.country}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
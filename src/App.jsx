import "./app.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Process from "./components/Process/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* Usamos una clase en main para controlar el orden y espaciado de las secciones */}
      <main className="main-content">
        <Hero />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}